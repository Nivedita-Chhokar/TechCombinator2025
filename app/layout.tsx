import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My App',
  description: 'My Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Add suppressHydrationWarning to the html element
    <html lang="en" suppressHydrationWarning>
      {/* Add suppressHydrationWarning to the body element as well */}
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}