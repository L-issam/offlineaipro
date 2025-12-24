import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { faqs } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AskTheDocs - Questions intelligentes à vos documents avec l\'IA',
    template: '%s | AskTheDocs'
  },
  description: 'Posez des questions à vos documents avec l\'IA. Recherche sémantique avancée, réponses contextuelles, vie privée garantie. Support PDF, DOCX, images. Application mobile gratuite.',
  keywords: [
    'IA', 'intelligence artificielle', 'RAG', 'documents', 'questions', 'recherche sémantique',
    'Gemma', 'E5', 'PDF', 'DOCX', 'OCR', 'vie privée', 'données locales', 'mobile',
    'application mobile', 'gratuit', 'freemium', 'privacy-first'
  ],
  authors: [{ name: 'AskTheDocs Team' }],
  creator: 'AskTheDocs',
  publisher: 'AskTheDocs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://l-issam.github.io/askthedocs'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AskTheDocs - Questions intelligentes à vos documents',
    description: 'Posez des questions à vos documents avec l\'IA. Recherche sémantique, réponses contextuelles, vie privée garantie.',
    url: 'https://l-issam.github.io/askthedocs',
    siteName: 'AskTheDocs',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AskTheDocs - IA pour vos documents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@askthedocs',
    creator: '@askthedocs',
    title: 'AskTheDocs - Questions intelligentes à vos documents',
    description: 'Posez des questions à vos documents avec l\'IA. Recherche sémantique, réponses contextuelles, vie privée garantie.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AskTheDocs - IA pour vos documents',
      }
    ],
  },
  category: 'technology',
  classification: 'mobile application',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'AskTheDocs',
      description: 'Posez des questions intelligentes à vos documents avec l\'IA. Recherche sémantique avancée, réponses contextuelles, vie privée garantie.',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'iOS, Android',
      offers: [
        {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          description: 'Version Freemium gratuite'
        },
        {
          '@type': 'Offer',
          price: '4.99',
          priceCurrency: 'EUR',
          description: 'Version Premium mensuelle'
        }
      ],
      author: {
        '@type': 'Organization',
        name: 'AskTheDocs Team'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '100'
      },
      featureList: [
        'IA locale et privée',
        'Recherche sémantique avancée',
        'Support multi-formats (PDF, DOCX, images)',
        'Génération RAG contextuelle',
        'Conversations intelligentes'
      ],
      fileFormat: ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'],
      softwareVersion: '1.0.0',
      downloadUrl: [
        'https://apps.apple.com/app/askthedocs/id1234567890',
        'https://play.google.com/store/apps/details?id=com.askthedocs.app'
      ]
    }),
    'faq/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    })
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}