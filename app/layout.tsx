import './globals.css'
import { Montserrat, Poppins } from 'next/font/google'
import { Metadata } from 'next'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
})

const monserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-monserrat",
})

export const metadata : Metadata = {
  title: 'Ecommerce Nextjs',
  description: 'Online Gaming Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className = {`${poppins.variable} ${monserrat.variable}`}>
      <body >
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
