'use client'

import React from 'react'

type AudioContextConstructor = typeof AudioContext

function getAudioContextConstructor(): AudioContextConstructor | undefined {
  const maybeWindow = window as unknown as { webkitAudioContext?: AudioContextConstructor }
  return window.AudioContext ?? maybeWindow.webkitAudioContext
}

export default function useWorkflowStepSound() {
  const audioContextRef = React.useRef<AudioContext | null>(null)
  const soundTimeoutsRef = React.useRef<number[]>([])
  const lastPlayedAtRef = React.useRef(0)

  const clearStepSounds = React.useCallback(() => {
    soundTimeoutsRef.current.forEach((id) => window.clearTimeout(id))
    soundTimeoutsRef.current = []
  }, [])

  const prepareStepSound = React.useCallback(() => {
    if (typeof window === 'undefined') return

    const AudioContextCtor = getAudioContextConstructor()
    if (!AudioContextCtor) return

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextCtor()
    }

    if (audioContextRef.current.state === 'suspended') {
      void audioContextRef.current.resume()
    }
  }, [])

  const queueStepFilledSound = React.useCallback((delayMs = 420) => {
    if (typeof window === 'undefined') return

    const timeoutId = window.setTimeout(() => {
      const context = audioContextRef.current
      if (!context) return

      const nowMs = performance.now()
      if (nowMs - lastPlayedAtRef.current < 120) return
      lastPlayedAtRef.current = nowMs

      try {
        const now = context.currentTime

        const masterGain = context.createGain()
        masterGain.gain.setValueAtTime(0.0001, now)
        masterGain.gain.exponentialRampToValueAtTime(0.11, now + 0.012)
        masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2)

        const filter = context.createBiquadFilter()
        filter.type = 'bandpass'
        filter.frequency.setValueAtTime(1450, now)
        filter.Q.setValueAtTime(1.1, now)

        const delay = context.createDelay(0.25)
        delay.delayTime.setValueAtTime(0.065, now)
        const feedback = context.createGain()
        feedback.gain.setValueAtTime(0.15, now)
        const wetGain = context.createGain()
        wetGain.gain.setValueAtTime(0.12, now)

        const lead = context.createOscillator()
        lead.type = 'sine'
        lead.frequency.setValueAtTime(980, now)
        lead.frequency.exponentialRampToValueAtTime(1580, now + 0.08)
        lead.frequency.exponentialRampToValueAtTime(1280, now + 0.18)

        const shimmer = context.createOscillator()
        shimmer.type = 'triangle'
        shimmer.frequency.setValueAtTime(1460, now)
        shimmer.frequency.exponentialRampToValueAtTime(2100, now + 0.1)
        shimmer.frequency.exponentialRampToValueAtTime(1680, now + 0.2)

        lead.connect(filter)
        shimmer.connect(filter)
        filter.connect(masterGain)
        masterGain.connect(context.destination)

        masterGain.connect(delay)
        delay.connect(feedback)
        feedback.connect(delay)
        delay.connect(wetGain)
        wetGain.connect(context.destination)

        lead.start(now)
        shimmer.start(now)
        lead.stop(now + 0.2)
        shimmer.stop(now + 0.2)
      } catch {
        // Ignore transient Web Audio failures to keep UI responsive.
      }
    }, delayMs)

    soundTimeoutsRef.current.push(timeoutId)
  }, [])

  React.useEffect(
    () => () => {
      clearStepSounds()
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        void audioContextRef.current.close()
      }
      audioContextRef.current = null
    },
    [clearStepSounds]
  )

  return {
    prepareStepSound,
    queueStepFilledSound,
    clearStepSounds
  }
}
