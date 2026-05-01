import HomeClient from './HomeClient'

export default function Home() {
  const baseUrl = 'https://learningenglishgeuwat-ten.vercel.app'
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'GEUWAT',
        url: baseUrl,
        logo: `${baseUrl}/favicon.ico`,
        sameAs: [
          'https://www.instagram.com/learningenglishgeuwat/',
          'https://www.tiktok.com/@learningenglishgeuwat',
          'https://web.facebook.com/profile.php?id=61579689853941',
          'https://discord.gg/kpPQHW7gFA',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'GEUWAT - Website Belajar Bahasa Inggris',
        publisher: { '@id': `${baseUrl}/#organization` },
        inLanguage: 'id-ID',
      },
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/#webpage`,
        url: `${baseUrl}/`,
        name: 'GEUWAT - Website Belajar Bahasa Inggris',
        isPartOf: { '@id': `${baseUrl}/#website` },
        about: { '@id': `${baseUrl}/#organization` },
        inLanguage: 'id-ID',
      },
    ],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <HomeClient />
    </>
  )
}
