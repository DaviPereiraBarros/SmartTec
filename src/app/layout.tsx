import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Kanit } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const kanit = Kanit({
  subsets: ['thai'],
  weight: '300',
})

export const metadata: Metadata = {
  title: 'SmartTec',
  description: 'Landing Page SmartTec',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={kanit.className}>{children}</body>
    </html>
  )
}
