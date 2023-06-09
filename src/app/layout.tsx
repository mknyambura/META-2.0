import '../app/globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  // icons: {
  //   url: "/meta.png",
  //   type: 'image/png',
  // },
  // shortcut: { url: "/meta.png", type: "image/png" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
