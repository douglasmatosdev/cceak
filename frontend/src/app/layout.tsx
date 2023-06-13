import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
