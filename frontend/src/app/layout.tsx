import './globals.css'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

import { informations } from '@/utils'

export const metadata = {
  title: `${informations.name} - ${informations.fullName}`,
  description: informations.fullName,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ptBr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
