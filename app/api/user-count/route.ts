import { NextResponse } from 'next/server'

type CountPayload = {
  count: number | null
  trialCount: number | null
  paidCount: number | null
  source: 'public_metrics' | 'rpc' | 'env_missing' | 'unavailable'
}

const TTL_SECONDS = 300

function getSupabaseEnv() {
  const url =
    process.env.SUPABASE_APP1_URL ??
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    process.env.SUPABASE_URL

  const anonKey =
    process.env.SUPABASE_APP1_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.SUPABASE_ANON_KEY

  return { url, anonKey }
}

async function tryFetchFromPublicMetrics(args: { url: string; anonKey: string }) {
  const { url, anonKey } = args
  const res = await fetch(
    `${url}/rest/v1/public_metrics?select=value_int,trial_users_count,paid_users_count&key=eq.users_total&limit=1`,
    {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
    },
  )

  if (!res.ok) return null
  const data = (await res.json()) as
    | Array<{
        value_int?: number | string | null
        trial_users_count?: number | string | null
        paid_users_count?: number | string | null
      }>
    | null

  const row = Array.isArray(data) ? data[0] : null

  const parseFinite = (value: unknown) => {
    const num = typeof value === 'number' ? value : value == null ? NaN : Number(value)
    return Number.isFinite(num) ? num : null
  }

  const count = parseFinite(row?.value_int)
  if (count == null) return null

  return {
    count,
    trialCount: parseFinite(row?.trial_users_count),
    paidCount: parseFinite(row?.paid_users_count),
  }
}

async function tryFetchFromRpc(args: { url: string; anonKey: string }) {
  const { url, anonKey } = args
  const res = await fetch(`${url}/rest/v1/rpc/get_public_user_count`, {
    method: 'POST',
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      'Content-Type': 'application/json',
    },
    body: '{}',
  })

  if (!res.ok) return null
  const data = (await res.json()) as unknown
  const count = typeof data === 'number' ? data : Number(data)
  if (!Number.isFinite(count)) return null
  return count
}

export async function GET() {
  const { url, anonKey } = getSupabaseEnv()

  let payload: CountPayload = { count: null, trialCount: null, paidCount: null, source: 'unavailable' }

  if (!url || !anonKey) {
    payload = { count: null, trialCount: null, paidCount: null, source: 'env_missing' }
  } else {
    const metricsCount = await tryFetchFromPublicMetrics({ url, anonKey })
    if (metricsCount) {
      payload = { ...metricsCount, source: 'public_metrics' }
    } else {
      const rpcCount = await tryFetchFromRpc({ url, anonKey })
      if (Number.isFinite(rpcCount ?? NaN)) {
        payload = { count: rpcCount as number, trialCount: null, paidCount: null, source: 'rpc' }
      }
    }
  }

  return NextResponse.json(payload, {
    headers: {
      // CDN cache: reduces calls to Supabase, still fresh enough for a counter.
      'Cache-Control': `public, s-maxage=${TTL_SECONDS}, stale-while-revalidate=${TTL_SECONDS * 2}`,
    },
  })
}
