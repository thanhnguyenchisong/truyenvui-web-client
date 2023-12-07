/**
 * This layout will apply for all routes
 */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/component/common/header'
import Footer from '@/component/common/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Title',
  description: 'Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
