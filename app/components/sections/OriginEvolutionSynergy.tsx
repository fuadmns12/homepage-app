import React from 'react'
import { Brain, Cpu } from 'lucide-react'

export default function OriginEvolutionSynergy() {
  return (
    <section className="glass-card founder-section" aria-label="Origin, Evolution, dan Synergy GEUWAT">
      <div className="founder-block founder-origin">
        <p className="founder-kicker">The Origin</p>
        <h2 className="founder-headline">SYSTEM ARCHITECT: 10,000+ LINGUISTIC SAMPLES</h2>
        <p className="founder-subheadline">
          Bukan dibangun oleh AI semata, tapi oleh pengajar nyata yang telah menguji logika ini pada lebih dari 10.000
          lidah manusia sejak 2018.
        </p>

        <div className="founder-origin-visual" aria-hidden="true">
          <div className="founder-origin-number">10,000+</div>
          <div className="founder-origin-medals">
            <div className="founder-origin-medal" />
            <div className="founder-origin-medal" />
            <div className="founder-origin-medal" />
          </div>
        </div>
      </div>

      <div className="founder-divider" aria-hidden="true" />

      <div className="founder-block founder-evolution">
        <p className="founder-kicker">The Evolution</p>
        <h3 className="founder-title">Battle-Tested Timeline</h3>

        <ol className="founder-timeline" aria-label="Timeline evolusi GEUWAT">
          <li className="founder-timeline-item">
            <div className="founder-timeline-node" aria-hidden="true" />
            <div className="founder-timeline-card">
              <div className="founder-timeline-phase">Phase 01</div>
              <div className="founder-timeline-meta">Mass Testing (2018–2020)</div>
              <p className="founder-timeline-desc">
                Mengajar 5 kelas intensif per 2 minggu. Mengumpulkan pola kesalahan pengucapan paling umum.
              </p>
            </div>
          </li>

          <li className="founder-timeline-item">
            <div className="founder-timeline-node" aria-hidden="true" />
            <div className="founder-timeline-card">
              <div className="founder-timeline-phase">Phase 02</div>
              <div className="founder-timeline-meta">The Stealth Shift (COVID Era)</div>
              <p className="founder-timeline-desc">
                Beradaptasi dengan pengajaran online. Di masa ini, saya membedah kembali semua teori fonetik agar bisa
                dipahami lewat layar tanpa sentuhan fisik.
              </p>
            </div>
          </li>

          <li className="founder-timeline-item">
            <div className="founder-timeline-node" aria-hidden="true" />
            <div className="founder-timeline-card">
              <div className="founder-timeline-phase">Phase 03</div>
              <div className="founder-timeline-meta">The AI Awakening (Now)</div>
              <p className="founder-timeline-desc">
                Memadukan memori pengajaran manual dengan efisiensi AI. Lahirlah sistem Learning English GEUWAT.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="founder-divider" aria-hidden="true" />

      <div className="founder-block founder-synergy">
        <p className="founder-kicker">The Synergy</p>
        <h3 className="founder-title">Theory x AI Accelerator</h3>

        <div className="founder-synergy-grid" role="group" aria-label="Sinergi teori dan AI">
          <article className="founder-synergy-card">
            <h4 className="founder-synergy-head">The Theoretical Compass</h4>
            <p className="founder-synergy-desc">
              Pentingnya IPA dan posisi lidah. Tanpa teori, kamu hanya meniru. Dengan teori, kamu menguasai.
            </p>
          </article>

          <div className="founder-yinyang" aria-hidden="true">
            <div className="founder-yinyang-core">
              <Brain className="founder-yinyang-icon" aria-hidden="true" />
              <span className="founder-yinyang-sep" />
              <Cpu className="founder-yinyang-icon" aria-hidden="true" />
            </div>
          </div>

          <article className="founder-synergy-card">
            <h4 className="founder-synergy-head">The AI Accelerator</h4>
            <p className="founder-synergy-desc">
              AI di sini berfungsi sebagai asisten yang memastikan praktikmu sesuai dengan teori dalam waktu singkat.
            </p>
          </article>
        </div>

        <blockquote className="founder-quote">
          “Saya melihat tren AI bukan sebagai pengganti guru, tapi sebagai Exoskeleton. Saya mengambil ingatan saya dari 8
          tahun mengajar, menyaring teorinya, dan memberikan mesin penggerak AI agar kamu bisa mencapai hasil tahunan
          hanya dalam hitungan minggu.”
        </blockquote>
      </div>
    </section>
  )
}
