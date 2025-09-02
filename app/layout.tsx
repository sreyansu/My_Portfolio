import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://sreyansu.space'),
  title: {
    default: 'Sreyansu Mohanty · Portfolio',
    template: '%s · Sreyansu Mohanty',
  },
  description:
    'Personal portfolio of Sreyansu S. Mohanty — projects, skills, and contact information.',
  applicationName: 'Sreyansu Portfolio',
  generator: 'nextjs',
  keywords: [
    'Sreyansu',
    'Sreyansu Mohanty',
    'Portfolio',
    'Software Engineer',
    'Full Stack',
    'Web Developer',
  ],
  authors: [{ name: 'Sreyansu S. Mohanty', url: 'https://sreyansu.space' }],
  creator: 'Sreyansu S. Mohanty',
  publisher: 'Sreyansu S. Mohanty',
  alternates: {
    canonical: 'https://sreyansu.space/',
  },
  openGraph: {
    type: 'website',
    url: 'https://sreyansu.space/',
    siteName: 'Sreyansu Mohanty · Portfolio',
    title: 'Sreyansu Mohanty · Portfolio',
    description:
      'Personal portfolio of Sreyansu S. Mohanty — projects, skills, and contact information.',
    images: [
      {
        url: '/aerotech-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Sreyansu Mohanty Portfolio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@',
    creator: '@',
    title: 'Sreyansu Mohanty · Portfolio',
    description:
      'Personal portfolio of Sreyansu S. Mohanty — projects, skills, and contact information.',
    images: ['/aerotech-preview.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1,
    },
  },
  verification: {
    // Replace with your Google Search Console verification token
    google: '',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/placeholder-logo.png', type: 'image/png' },
      { url: '/placeholder-logo.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/placeholder-logo.png', type: 'image/png' },
    ],
    shortcut: ['/placeholder-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://sreyansu.space/" />
        {/* JSON-LD: WebSite */}
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Sreyansu Mohanty · Portfolio',
              url: 'https://sreyansu.space/',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.google.com/search?q=site%3Asreyansu.space+{search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        {/* JSON-LD: Person */}
        <Script
          id="ld-json-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sreyansu S. Mohanty',
              url: 'https://sreyansu.space/',
              sameAs: [],
              jobTitle: 'Software Engineer',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
