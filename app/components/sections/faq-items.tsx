import type { ReactNode } from 'react'
import Image from 'next/image'

export type FaqItem = {
  question: string
  answer: ReactNode
}

export const FAQ_ITEMS = [
  {
    question: 'Apakah GEUWAT cocok untuk pemula?',
    answer: <p>Ya. GEUWAT disusun untuk kamu yang mulai dari nol, step-by-step, supaya tidak bingung urutan belajarnya

    </p>,
  },
  {
    question: 'Sekali bayar atau langganan?',
    answer: (
      <p>
        Kami menyediakan paket langganan bulanan/tahunan mulai dari Rp26.900 saja agar tetap ramah di kantong.
      </p>
    ),
  },
  {
    question: 'Apakah akun saya bisa diperjualbelikan atau dipindahtangankan?',
    answer: (
      <p>
        Bisa. Namun, untuk menjaga keamanan data dan kualitas ekosistem belajar, setiap perpindahan kepemilikan akun
        dikenakan Biaya Administrasi sebesar 50% dari harga resmi saat ini. Biaya ini mencakup penggantian data akses,
        pembersihan riwayat belajar (jika diperlukan), dan validasi keamanan akun
      </p>
    ),
  },
  {
    question: 'Materi apa saja yang tersedia?',
    answer: <p>Pronunciation, Vocabulary, Grammar, dan Speaking dengan alur belajar yang terstruktur agar progres lebih terarah</p>,
  },
  {
    question: 'Bisa diakses di HP?',
    answer: <p>Bisa. GEUWAT berbasis website, jadi bisa dibuka via browser di HP atau laptop (disarankan Chrome)</p>,
  },
  {
    question: 'Bagaimana cara daftarnya?',
    answer: (
      <>
        <p>Pilih paket yang sesuai dengan posisi kamu sekarang</p>

        <div className="conversion-faq-steps">
          <div className="conversion-faq-step-group">
            <div className="conversion-faq-step-head">
              <span className="conversion-faq-step-title">Mulai dari Instagram</span>
            </div>
            <div className="conversion-faq-step-images" aria-label="Langkah daftar dari Instagram">
              <div className="conversion-faq-step-frame">
                <Image src="/CaraDaftar/reg1.webp" alt="Langkah daftar dari Instagram 1" fill sizes="(max-width: 480px) 110px, 130px" />
              </div>
              <div className="conversion-faq-step-arrow" aria-hidden="true" />
              <div className="conversion-faq-step-frame">
                <Image src="/CaraDaftar/reg2.webp" alt="Langkah daftar dari Instagram 2" fill sizes="(max-width: 480px) 110px, 130px" />
              </div>
            </div>
          </div>

          <div className="conversion-faq-step-group">
            <div className="conversion-faq-step-head">
              <span className="conversion-faq-step-title">Sudah di Website GEUWAT</span>
            </div>
            <div className="conversion-faq-step-images" aria-label="Langkah daftar dari website GEUWAT">
              <div className="conversion-faq-step-frame">
                <Image src="/CaraDaftar/reg3.webp" alt="Langkah daftar di website 1" fill sizes="(max-width: 480px) 110px, 130px" />
              </div>
              <div className="conversion-faq-step-arrow" aria-hidden="true" />
              <div className="conversion-faq-step-frame">
                <Image src="/CaraDaftar/reg4.webp" alt="Langkah daftar di website 2" fill sizes="(max-width: 480px) 110px, 130px" />
              </div>
              <div className="conversion-faq-step-arrow" aria-hidden="true" />
              <div className="conversion-faq-step-frame">
                <Image src="/CaraDaftar/reg5.webp" alt="Langkah daftar di website 3" fill sizes="(max-width: 480px) 110px, 130px" />
              </div>
              <div className="conversion-faq-step-arrow" aria-hidden="true" />
              <div className="conversion-faq-step-frame">
                <Image src="/CaraDaftar/reg6.webp" alt="Langkah daftar di website 4" fill sizes="(max-width: 480px) 110px, 130px" />
              </div>
              <div className="conversion-faq-step-arrow" aria-hidden="true" />
              <div className="conversion-faq-step-frame conversion-faq-step-frame--action">
                <div className="conversion-faq-step-action" aria-label="Langkah berikutnya: selesaikan pembayaran">
                  <div className="conversion-faq-step-action-text">Selesaikan Pembayaran</div>
                  <div className="conversion-faq-step-action-subtext">
                    Detail E-wallet dan Rekening Bank akan dikirimkan melalui WhatsApp
                  </div>
                </div>
              </div>
              <div className="conversion-faq-step-frame conversion-faq-step-frame--action">
                <div className="conversion-faq-step-action" aria-label="Pembayaran via Rekening Bank">
                  <div className="conversion-faq-step-action-text" style={{ fontSize: 'clamp(9px, 2vw, 11px)', lineHeight: '1.4', textAlign: 'center' }}>
                    Transferan dikirimkan ke
                  </div>
                  <div className="conversion-faq-step-action-subtext" style={{ fontSize: 'clamp(8px, 1.8vw, 10px)', lineHeight: '1.5', marginTop: '6px', textAlign: 'left' }}>
                    <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '4px' }}>Bila Rekening Bank</div>
                    Nama Bank: Mandiri
                    <br />
                    Nama di rek: Fuad Muslim Nur Syamsodik
                    <br />
                    No rek: 1710015448486
                  </div>
                </div>
              </div>
              <div className="conversion-faq-step-frame conversion-faq-step-frame--action">
                <div className="conversion-faq-step-action" aria-label="Pembayaran via E-wallet">
                  <div className="conversion-faq-step-action-text" style={{ fontSize: 'clamp(9px, 2vw, 11px)', lineHeight: '1.4', textAlign: 'center' }}>
                    Transferan dikirimkan ke
                  </div>
                  <div className="conversion-faq-step-action-subtext" style={{ fontSize: 'clamp(8px, 1.8vw, 10px)', lineHeight: '1.5', marginTop: '6px', textAlign: 'left' }}>
                    <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '4px' }}>Bila E-wallet</div>
                    <div style={{ textAlign: 'center', marginBottom: '4px' }}>GoPay/DANA</div>
                    Nama: Fuad Muslim Nur Syamsodik
                    <br />
                    No HP: 082338792512
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
 ] as const satisfies ReadonlyArray<FaqItem>

