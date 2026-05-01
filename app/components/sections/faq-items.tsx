import type { ReactNode } from 'react'
import Image from 'next/image'

export type FaqItem = {
  question: string
  answer: ReactNode
}

export const FAQ_ITEMS = [
  {
    question: 'Apakah GEUWAT cocok untuk pemula?',
    answer: <p>Ya. GEUWAT disusun untuk kamu yang mulai dari nol, step-by-step, supaya tidak bingung urutan belajarnya.</p>,
  },
  {
    question: 'Sekali bayar atau langganan?',
    answer: <p>Sekali bayar Rp169.000 untuk akses penuh (sekali investasi).</p>,
  },
  {
    question: 'Apakah akun saya bisa diperjualbelikan atau dipindahtangankan?',
    answer: (
      <p>
        Bisa. Namun, untuk menjaga keamanan data dan kualitas ekosistem belajar, setiap perpindahan kepemilikan akun
        dikenakan Biaya Administrasi sebesar 50% dari harga resmi saat ini. Biaya ini mencakup penggantian data akses,
        pembersihan riwayat belajar (jika diperlukan), dan validasi keamanan akun.
      </p>
    ),
  },
  {
    question: 'Materi apa saja yang tersedia?',
    answer: <p>Pronunciation, Vocabulary, Grammar, dan Speaking dengan alur belajar yang terstruktur agar progres lebih terarah.</p>,
  },
  {
    question: 'Bisa diakses di HP?',
    answer: <p>Bisa. GEUWAT berbasis website, jadi bisa dibuka via browser di HP atau laptop (disarankan Chrome).</p>,
  },
  {
    question: 'Bagaimana cara daftarnya?',
    answer: (
      <>
        <p>Pilih jalur yang sesuai dengan posisi kamu sekarang.</p>

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
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    question: 'Apa perbedaan antara User Trial dan User Berbayar?',
    answer: (
      <p>
        User Trial diberikan akses sementara untuk mencoba fitur kami. Namun, posisi Anda di dalam Batch (kuota 150 orang)
        tidak aman hingga Anda melakukan pembayaran. User berbayar akan langsung mengambil slot User Trial jika kuota hampir
        penuh.
      </p>
    ),
  },
  {
    question: 'Bagaimana jika saya sedang Trial dan Batch tiba-tiba penuh?',
    answer: (
      <p>
        Jika kuota 150 orang sudah terpenuhi oleh pengguna yang membayar, maka User Trial akan otomatis tersingkir dari Batch
        tersebut. Anda harus menunggu pembukaan Batch selanjutnya di pintu login yang berbeda untuk mencoba kembali atau
        langsung mendaftar sebagai User Berbayar.
      </p>
    ),
  },
  {
    question: 'Kapan Batch selanjutnya dibuka?',
    answer: (
      <p>
        Batch baru hanya akan dibuka setelah Batch sebelumnya benar-benar penuh (150 User Berbayar). Pastikan Anda segera
        mengamankan akses belajar penuh agar posisi Anda tidak digantikan oleh orang lain.
      </p>
    ),
  },
  {
    question: 'Kapan kompetisi bahasa Inggris dengan hadiah uang pembinaan dimulai?',
    answer: (
      <p>
        Kompetisi hanya akan dipicu (triggered) setelah Batch Anda mencapai 150 User Berbayar. Selama masih ada User Trial di
        dalam Batch tersebut, kompetisi belum akan dimulai. Ini adalah motivasi agar komunitas di Batch Anda segera solid dan
        siap bertanding.
      </p>
    ),
  },
  {
    question: 'Siapa yang berhak mengikuti lomba?',
    answer: (
      <p>
        Hanya User Berbayar yang memiliki akses belajar penuh yang berhak mengikuti lomba dan memperebutkan hadiah uang
        pembinaan. User Trial tidak diikutsertakan dalam kompetisi.
      </p>
    ),
  },
  {
    question: 'Di mana saya bisa melihat update sisa kuota dan pembukaan Batch?',
    answer: (
      <p>
        Informasi paling update mengenai sisa slot Batch 1-4, pengumuman pemenang lomba, dan pembukaan pendaftaran baru selalu
        kami bagikan di Instagram:{' '}
        <a href="https://www.instagram.com/learningenglishgeuwat/" target="_blank" rel="noreferrer">
          @learningenglishgeuwat
        </a>
        . Pastikan Anda mengikuti akun tersebut agar tidak tertinggal informasi.
      </p>
    ),
  },
  {
    question: 'Mengapa login dibagi menjadi 4 halaman berbeda?',
    answer: (
      <p>
        Setiap halaman login mewakili Batch tertentu. Ini memudahkan kami mengelola 150 orang per kelompok agar persaingan
        lomba lebih adil dan sistem aplikasi tetap ringan serta cepat.
      </p>
    ),
  },
  {
    question: 'Bagaimana cara upgrade dari Trial ke akses penuh?',
    answer: (
      <p>
        Anda bisa melakukan pembayaran melalui instruksi yang ada di dalam aplikasi atau hubungi Admin via{' '}
        <a
          href="https://wa.me/6282338792512?text=Halo%20Admin%20GEUWAT%2C%20saya%20ingin%20upgrade%20dari%20Trial%20ke%20akses%20penuh."
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        .
      </p>
    ),
  },
  {
    question: 'Saya lupa login di Batch mana, apa yang harus saya lakukan?',
    answer: (
      <p>
        Silakan hubungi Admin atau kirim DM ke Instagram @learningenglishgeuwat dengan melampirkan bukti pembayaran atau nama
        akun Anda.
      </p>
    ),
  },
] as const satisfies ReadonlyArray<FaqItem>

