import React from 'react'
import Link from 'next/link'

interface GeuwatAmbassadorProps {
  backToMenu: () => void
  isActive: boolean
}

export default function GeuwatAmbassador({ backToMenu, isActive }: GeuwatAmbassadorProps) {
  return (
    <>
      <button className="back-btn" onClick={backToMenu}>
        Kembali ke Menu
      </button>

      <div className="section-header">
        <h2 className="section-title">GEUWAT AMBASSADOR</h2>
        <p className="section-subtitle">Program kolaborasi dan komunitas GEUWAT</p>
      </div>

      <div
        className="intro-hero"
        aria-label="GEUWAT AMBASSADOR"
        data-active={isActive ? 'true' : 'false'}
        style={{ gridTemplateColumns: '1fr', justifyItems: 'center' }}
      >
        <div
          className="intro-hero-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: 720,
          }}
        >
          <span className="intro-badge" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            DAFTAR AMBASSADOR
          </span>
          <h3 className="intro-headline">Pendaftaran GEUWAT Ambassador</h3>
          <p className="intro-subtext">
            Pilih kategori usia untuk membuka halaman pendaftaran
          </p>

          <div
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 14, justifyContent: 'center' }}
            aria-label="Tab pendaftaran"
          >
            <Link href="/geuwat-ambassador/18-plus" className="intro-cta-primary conversion-primary-cta">
              GEUWAT Ambassador +18
            </Link>
            <Link href="/geuwat-ambassador/under-18" className="intro-cta-primary conversion-primary-cta">
              GEUWAT Ambassador &lt;18
            </Link>
          </div>
        </div>

        <div className="intro-hero-visual" aria-hidden="true" style={{ display: 'none' }}>
          <div className="intro-orb"></div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: 22, marginTop: 16 }}>
        <div className="section-header" style={{ paddingTop: 0, marginBottom: 10 }}>
          <h3 className="section-title" style={{ paddingTop: 0 }}>
            Program GEUWAT Ambassador
          </h3>
          <p className="section-subtitle" style={{ marginBottom: 10 }}>
            Tebar Manfaat, Tumbuh Bersama
          </p>
          <div
            aria-hidden="true"
            style={{
              height: 2,
              width: 'min(520px, 100%)',
              margin: '0 auto 12px',
              borderRadius: 999,
              background: 'rgba(0, 240, 255, 0.6)',
              boxShadow: '0 0 0 1px rgba(0, 240, 255, 0.15), 0 0 24px rgba(0, 240, 255, 0.22)',
            }}
          />
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Selamat datang di GEUWAT Ambassador. Kami percaya bahwa sebaik-baik manusia adalah yang paling bermanfaat
            bagi orang lain. Di sini, kami mengajak Anda untuk menjadi perantara kebaikan.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 12 }}>
          <div className="glass-card" style={{ padding: 16 }}>
            <p className="section-subtitle" style={{ marginBottom: 10 }}>
              Banyak yang bertanya, &quot;Apakah menjadi Ambassador akan mengganggu waktu belajar saya?&quot; Jawabannya:
              Justru sebaliknya.
            </p>
            <p className="section-subtitle" style={{ marginBottom: 10 }}>
              Sembari Anda memperdalam materi di GEUWAT, Anda juga membantu orang lain untuk memahami materi tersebut.
              Kami meyakini bahwa ilmu yang dibagikan akan lebih melekat dan lebih berkah.
            </p>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Sambil membantu teman Anda belajar, Anda juga mendapatkan apresiasi berupa penghasilan tambahan yang halal
              dan thayyib.
            </p>
          </div>

          <div className="glass-card" style={{ padding: 16 }}>
            <h4 className="section-title" style={{ paddingTop: 0, marginBottom: 8 }}>
              Jenjang Karier GEUWAT Ambassador
            </h4>
            <p className="section-subtitle" style={{ marginBottom: 12 }}>
              Kami menghargai setiap langkah dan usaha Anda. Untuk memberikan apresiasi yang adil, kami membagi
              perjalanan Anda ke dalam tiga level pencapaian:
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  minWidth: 520,
                  border: '1px solid rgba(0, 240, 255, 0.45)',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '10px 12px',
                        border: '1px solid rgba(0, 240, 255, 0.35)',
                        fontWeight: 600,
                      }}
                    >
                      Level
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '10px 12px',
                        border: '1px solid rgba(0, 240, 255, 0.35)',
                        fontWeight: 600,
                      }}
                    >
                      Kriteria (Jumlah Referal)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '10px 12px', border: '1px solid rgba(0, 240, 255, 0.22)' }}>Rookie</td>
                    <td style={{ padding: '10px 12px', border: '1px solid rgba(0, 240, 255, 0.22)' }}>1 - 10 Member Baru</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px 12px', border: '1px solid rgba(0, 240, 255, 0.22)' }}>Pro</td>
                    <td style={{ padding: '10px 12px', border: '1px solid rgba(0, 240, 255, 0.22)' }}>11 - 30 Member Baru</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px 12px', border: '1px solid rgba(0, 240, 255, 0.22)' }}>Legend</td>
                    <td style={{ padding: '10px 12px', border: '1px solid rgba(0, 240, 255, 0.22)' }}>
                      &gt; 30 Member Baru
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass-card" style={{ padding: 16 }}>
            <h4 className="section-title" style={{ paddingTop: 0, marginBottom: 8 }}>
              Mengapa Program Ini Berbeda?
            </h4>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 8 }}>
              <li className="section-subtitle" style={{ marginBottom: 0 }}>
                <strong>Sambil Menyelam Minum Air:</strong> Anda tidak hanya mengumpulkan cuan, tapi juga mengasah
                kemampuan komunikasi dan pemahaman materi Anda dengan menjelaskan kembali kepada orang lain.
              </li>
              <li className="section-subtitle" style={{ marginBottom: 0 }}>
                <strong>Ta&apos;awun (Tolong-menolong):</strong> Kode referal Anda adalah kunci bagi orang lain untuk
                mendapatkan diskon khusus. Anda membantu meringankan biaya belajar mereka, dan Anda mendapatkan hak atas
                usaha promosi Anda.
              </li>
              <li className="section-subtitle" style={{ marginBottom: 0 }}>
                <strong>Transparan &amp; Amanah:</strong> Sistem kami mencatat setiap aktivitas secara real-time. Anda
                bisa melihat performa dan saldo Anda kapan saja dengan tenang.
              </li>
              <li className="section-subtitle" style={{ marginBottom: 0 }}>
                <strong>Tanpa Beban:</strong> Tidak ada target yang mengikat. Anda bergerak sesuai kemampuan dan waktu
                luang Anda.
              </li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: 16 }}>
            <h4 className="section-title" style={{ paddingTop: 0, marginBottom: 8 }}>
              Niatkan untuk Kebaikan, Hasil akan Mengikuti
            </h4>
            <p className="section-subtitle" style={{ marginBottom: 10 }}>
              Jadikan program ini sebagai sarana untuk memperluas silaturahmi. Ketika niat kita adalah membantu orang
              lain mendapatkan akses pendidikan yang lebih baik, insya Allah, penghasilan yang Anda dapatkan pun akan
              lebih berkah dan bermanfaat bagi kehidupan Anda sehari-hari.
            </p>
            <p className="section-subtitle" style={{ marginBottom: 12, opacity: 0.95 }}>
              &quot;Mari tebar ilmu, bantu orang lain paham materi, dan raih keberkahan dari setiap langkah yang kita
              buat.&quot;
            </p>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Sudah siap untuk memulai perjalanan menjadi GEUWAT Ambassador? Mari isi formulir dengan niat
              yang baik. Kami siap mendukung pertumbuhan Anda di setiap levelnya.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
