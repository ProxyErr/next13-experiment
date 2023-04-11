import "./globals.css"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: "--font-roboto",
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
      <nav>
        <h1>Logo</h1>
        <ul>
          <li>
            <a href="../about">About</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
        </ul>
      </nav>
        {children}
      </body>
    </html>
  )
}
