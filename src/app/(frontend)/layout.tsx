import React from 'react'
import './styles.css'
import Link from 'next/link'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <header className="p-7">
          <nav className="flex gap-10 justify-center">
            <Link href="/home">Home</Link>
            <Link href="/">Travel Letters</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
