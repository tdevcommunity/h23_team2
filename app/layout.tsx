import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotest = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MentorHub',
  description: 'Find mentor and connect!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotest.className}>{children}</body>
    </html>
  )
}
