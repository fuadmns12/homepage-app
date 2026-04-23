import React from 'react'
import useWorkflowStepSound from './useWorkflowStepSound'
import { trackCtaClick, trackEvent } from '@/lib/analytics'

const AUDIENCE_SEGMENTS = [
  {
    title: 'Pemula yang butuh arah belajar',
    description: 'Mulai dari materi dasar, lanjut step-by-step tanpa harus bingung pilih urutan belajar.'
  },
  {
    title: 'Karyawan atau mahasiswa sibuk',
    description: 'Belajar ringkas dan praktis, fokus pada materi yang langsung bisa dipakai dalam aktivitas harian.'
  },
  {
    title: 'Member yang ingin progres terukur',
    description: 'Setiap perkembangan bisa dipantau agar latihan lebih konsisten dan hasilnya terlihat.'
  }
]

export default function HomeTrustProof() {
  const [fastActiveIndex, setFastActiveIndex] = React.useState(-1)
  const [slowActiveIndex, setSlowActiveIndex] = React.useState(-1)
  const [isRunning, setIsRunning] = React.useState(false)
  const timeoutsRef = React.useRef<number[]>([])
  const { prepareStepSound, queueStepFilledSound, clearStepSounds } = useWorkflowStepSound()

  const fastSteps = ['User', 'English', 'Level 1', 'Level 2', 'Level 3']
  const slowSteps = ['User', 'English', 'Level 1', 'Level 2', 'Level 3']

  const clearTimers = React.useCallback(() => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id))
    timeoutsRef.current = []
    clearStepSounds()
  }, [clearStepSounds])

  const runProgress = React.useCallback(
    (speed: 'fast' | 'slow') => {
      const steps = speed === 'fast' ? fastSteps : slowSteps
      const delay = speed === 'fast' ? 500 : 1600

      steps.forEach((_, index) => {
        const id = window.setTimeout(() => {
          if (speed === 'fast') {
            setFastActiveIndex(index)
          } else {
            setSlowActiveIndex(index)
          }
          queueStepFilledSound()
        }, index * delay)
        timeoutsRef.current.push(id)
      })
    },
    [fastSteps, slowSteps, queueStepFilledSound]
  )

  const handleStart = React.useCallback(() => {
    trackEvent('simulation_start', { location: 'audience_block' })
    clearTimers()
    prepareStepSound()
    setFastActiveIndex(-1)
    setSlowActiveIndex(-1)
    setIsRunning(true)
    runProgress('fast')
    runProgress('slow')

    const total = Math.max((fastSteps.length - 1) * 500, (slowSteps.length - 1) * 1600)
    const doneId = window.setTimeout(() => {
      setIsRunning(false)
    }, total + 300)
    timeoutsRef.current.push(doneId)
  }, [clearTimers, runProgress, fastSteps.length, slowSteps.length, prepareStepSound])

  React.useEffect(
    () => () => {
      clearTimers()
    },
    [clearTimers]
  )

  return (
    <div className="home-trust-stack">
      <section className="glass-card home-audience-block" aria-label="Untuk siapa produk ini">
        <div className="home-proof-head">
          <h2 className="home-proof-title">Untuk siapa produk ini</h2>
          <p className="home-proof-subtitle">
            Fokus untuk user yang ingin belajar English dengan cara yang praktis, terarah, dan konsisten.
          </p>
        </div>

        <div className="home-audience-grid">
          {AUDIENCE_SEGMENTS.map((item) => (
            <article key={item.title} className="home-audience-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="home-audience-simulation">
            <div className="workflow-root">
              <div className="workflow-header">
                <h3 className="workflow-title">GEUWAT Progress Simulation</h3>
                <button type="button" className="tab-btn active" onClick={handleStart}>
                  {isRunning ? 'Running...' : 'Lihat Perbedaannya'}
                </button>
              </div>
            <div className="workflow-status">
              {isRunning ? 'Simulasi berjalan' : 'Klik untuk memulai simulasi'}
            </div>

            <div className="workflow-grid">
              <div className="workflow-card">
                <h4>Pakai aplikasi GEUWAT</h4>
                <div className="workflow-steps">
                  {fastSteps.map((step, index) => (
                    <div key={step} className={`workflow-step${index <= fastActiveIndex ? ' active' : ''}`}>
                      <span className="workflow-step-label">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="workflow-card">
                <h4>Tanpa aplikasi GEUWAT</h4>
                <div className="workflow-steps">
                  {slowSteps.map((step, index) => (
                    <div key={step} className={`workflow-step${index <= slowActiveIndex ? ' active' : ''}`}>
                      <span className="workflow-step-label">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="home-proof-microcopy home-simulation-note">
          Bersama GEUWAT, belajar bahasa Inggris semakin mudah dan cepat
        </p>

        <div className="home-proof-cta">
          <a
            href="https://chat.whatsapp.com/JLaBgBoQM5zB5KNfSfEaCI"
            className="intro-cta-primary conversion-primary-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackCtaClick('audience_register', {
                location: 'audience_block',
                target: 'https://chat.whatsapp.com/JLaBgBoQM5zB5KNfSfEaCI',
              })
            }
          >
            FREE TRIAL
          </a>
        </div>
      </section>
    </div>
  )
}
