import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata = {
  title: 'Artik - AI-Powered Lead Generation & Outreach',
  description: 'Revolutionize your influencer marketing with Artik\'s AI-driven lead generation and automated outreach.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
    other: {
      rel: 'icon',
      url: '/favicon.png',
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}