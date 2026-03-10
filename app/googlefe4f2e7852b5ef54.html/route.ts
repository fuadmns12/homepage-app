export function GET() {
  return new Response('google-site-verification: googlefe4f2e7852b5ef54.html', {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  })
}

