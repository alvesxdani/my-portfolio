import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { lato, montserrat, opensans } from '@/Fonts/fonts'

export const metadata: Metadata = {
  title: 'Daniela Moreira - Portfólio',
  description:
    'Olá, sou Daniela Moreira, desenvolvedora front end. Seja bem-vindo(a) ao meu portfólio!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${opensans.variable} ${lato.variable} ${montserrat.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
