'use client'

import { useEffect, useRef, useState } from 'react'

const REGISTER_URL = 'https://learningenglishgeuwat-ten.vercel.app/register'
const IDLE_TIMEOUT_MS = 3000

const activityEvents: Array<keyof WindowEventMap> = [
  'mousemove',
  'mousedown',
  'keydown',
  'touchstart',
  'scroll',
  'wheel',
]

export default function IdlePrompt() {
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<number | null>(null)
  const isVisibleRef = useRef(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const showPrompt = () => {
      setIsVisible(true)
      isVisibleRef.current = true
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }

    const hidePrompt = () => {
      setIsVisible(false)
      isVisibleRef.current = false
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = window.setTimeout(showPrompt, IDLE_TIMEOUT_MS)
    }

    const isEventInsidePrompt = (event: Event) => {
      const target = event.target instanceof Node ? event.target : null
      return target && wrapperRef.current?.contains(target)
    }

    const handleActivity = (event: Event) => {
      if (event.type === 'mousemove' && isVisibleRef.current) {
        return
      }

      if (isEventInsidePrompt(event)) {
        return
      }

      if (isVisibleRef.current) {
        hidePrompt()
        return
      }

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = window.setTimeout(showPrompt, IDLE_TIMEOUT_MS)
    }

    handleActivity(new Event('init'))

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, handleActivity, { passive: true })
    })

    return () => {
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, handleActivity)
      })
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div ref={wrapperRef} className="idle-prompt-wrapper" aria-live="polite">
      <a
        className="idle-prompt-link"
        href={REGISTER_URL}
      >
        Daftar Sekarang
      </a>
    </div>
  )
}
