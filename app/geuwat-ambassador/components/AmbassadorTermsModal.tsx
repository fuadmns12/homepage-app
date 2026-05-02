'use client'

import { useEffect } from 'react'
import styles from './AmbassadorTermsModal.module.css'

interface AmbassadorTermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AmbassadorTermsModal({ isOpen, onClose }: AmbassadorTermsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = '0'
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.bottom = '0'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.bottom = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.bottom = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start justify-center p-3 pt-6 z-50" onClick={onClose}>
      <div
        className={`glass-card rounded-2xl p-3 sm:p-4 max-w-2xl w-full h-[72vh] sm:h-[66vh] flex flex-col ${styles.modalScroll}`}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--primary) transparent',
          WebkitOverflowScrolling: 'touch',
        } as React.CSSProperties}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-3 flex-shrink-0">
          <h2 className="text-base sm:text-lg font-bold text-white">Ketentuan dan Kebijakan Privasi</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Tutup">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-3 text-gray-300 pr-1 flex-1 overflow-y-auto">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Ketentuan &amp; Kebijakan GEUWAT Ambassador</h3>
            <p className="text-sm">
              Dokumen ini mengatur hubungan kerja sama antara GEUWAT dan individu yang berpartisipasi sebagai GEUWAT Ambassador.
              Dengan melakukan pendaftaran dan berpartisipasi dalam program ini, Ambassador dianggap telah membaca, memahami,
              dan menyetujui seluruh ketentuan yang tercantum tanpa terkecuali.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">1. Definisi</h3>
            <p className="text-sm">
              GEUWAT Ambassador adalah individu yang bekerja sama dengan GEUWAT dalam mempromosikan layanan pembelajaran dan
              merekrut pengguna baru melalui sistem referral.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">2. Tingkatan (Tiers) &amp; Struktur Komisi</h3>
            <p className="text-sm mb-3">
              Komisi diberikan berdasarkan jumlah referral sukses (pengguna yang telah menyelesaikan pembayaran). Komisi dihitung
              berdasarkan Harga Bersih (Net Price), yaitu harga produk setelah dikurangi diskon member.
            </p>
            <div className="text-sm overflow-x-auto">
              <table className="w-full text-left border-separate" style={{ borderSpacing: 0 }}>
                <thead>
                  <tr>
                    <th className="py-2 px-2 text-white border-b border-white/10">Level</th>
                    <th className="py-2 px-2 text-white border-b border-white/10">Jumlah Referral</th>
                    <th className="py-2 px-2 text-white border-b border-white/10">Komisi (dari Net Price)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-2 border-b border-white/5">Rookie</td>
                    <td className="py-2 px-2 border-b border-white/5">1 - 10</td>
                    <td className="py-2 px-2 border-b border-white/5">10%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 border-b border-white/5">Pro</td>
                    <td className="py-2 px-2 border-b border-white/5">11 - 30</td>
                    <td className="py-2 px-2 border-b border-white/5">15%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2">Legend</td>
                    <td className="py-2 px-2">31+</td>
                    <td className="py-2 px-2">20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-3">
              Catatan: Jumlah referral bersifat kumulatif selama masa aktif program.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">3. Kebijakan Pencairan Komisi (Payout)</h3>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>
                <strong>Situs Pengajuan:</strong> Seluruh pengajuan pencairan saldo wajib dilakukan melalui Web Ambassador resmi.
                Pengajuan melalui jalur lain (seperti WhatsApp atau pesan manual) tidak akan diproses.
              </li>
              <li>
                <strong>Minimum Pencairan:</strong> Saldo komisi dapat diajukan untuk dicairkan jika telah mencapai nominal minimal
                Rp50.000 (lima puluh ribu rupiah).
              </li>
              <li>
                <strong>Prosedur Keamanan:</strong> Setiap pengajuan pencairan akan melalui proses verifikasi dan konfirmasi dari
                admin melalui email resmi yang terdaftar pada akun Ambassador. Pencairan hanya diproses setelah konfirmasi via
                email.
              </li>
              <li>
                <strong>Biaya Administrasi:</strong> Setiap transaksi pencairan akan dikenakan potongan biaya administrasi
                (biaya transfer/operasional) yang dibebankan langsung pada nominal yang dicairkan.
              </li>
              <li>
                <strong>Tindak Lanjut 24 Jam:</strong> Jika dalam waktu 24 jam setelah pengajuan dikirimkan/dikonfirmasi belum ada
                pemindahan saldo, Ambassador wajib menghubungi admin melalui kanal resmi (WhatsApp/Email) dengan melampirkan bukti
                pengajuan.
              </li>
              <li>
                <strong>Data Rekening:</strong> Ambassador bertanggung jawab penuh atas kebenaran informasi rekening/E-wallet yang
                didaftarkan. Kesalahan input data yang menyebabkan kegagalan transfer menjadi tanggung jawab Ambassador sepenuhnya.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">4. Kode Etik &amp; Perilaku</h3>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>
                <strong>Integritas:</strong> Menyampaikan informasi produk dengan jujur dan akurat. Dilarang memberikan janji hasil
                instan, garansi kemampuan bahasa yang berlebihan, atau klaim yang tidak sesuai dengan kurikulum GEUWAT.
              </li>
              <li>
                <strong>Profesionalisme:</strong> Menjaga semangat &quot;Healthy Rivalry&quot; dan solidaritas di antara sesama
                pelajar/mitra.
              </li>
              <li>
                <strong>Kewenangan:</strong> Dilarang mengatasnamakan diri sebagai pemilik (owner) atau staf resmi GEUWAT dalam
                komunikasi publik.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">5. Larangan &amp; Sanksi (Anti-Fraud)</h3>
            <p className="text-sm mb-2">
              GEUWAT berhak membatalkan komisi, menunda pembayaran, atau memutus status Ambassador secara sepihak jika ditemukan:
            </p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>
                <strong>Spamming:</strong> Promosi agresif/spam yang mengganggu kenyamanan publik atau merusak citra brand GEUWAT.
              </li>
              <li>
                <strong>Manipulasi Data:</strong> Rekayasa referral (akun palsu, bot, manipulasi data sistem) untuk memperoleh
                keuntungan tidak wajar.
              </li>
              <li>
                <strong>Pelanggaran Harga:</strong> Menjual layanan dengan harga yang tidak sesuai kebijakan resmi GEUWAT.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">6. Ketentuan Penutup</h3>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>GEUWAT berhak melakukan audit transaksi secara berkala untuk memastikan kepatuhan terhadap aturan ini.</li>
              <li>GEUWAT berhak mengubah struktur komisi, level, maupun kebijakan sewaktu-waktu melalui kanal resmi.</li>
              <li>Segala keputusan yang diambil oleh admin GEUWAT bersifat mutlak dan tidak dapat diganggu gugat.</li>
            </ul>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-3 sm:px-5 py-2 font-medium rounded-lg transition-colors text-xs sm:text-sm"
            style={{ background: 'var(--primary)', color: 'var(--dark-1)' }}
          >
            Saya Mengerti
          </button>
        </div>
      </div>
    </div>
  )
}

