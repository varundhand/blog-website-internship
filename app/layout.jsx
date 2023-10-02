import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Website',
  description: 'Write Blogs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className && 'dark:bg-slate-700'} >
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
