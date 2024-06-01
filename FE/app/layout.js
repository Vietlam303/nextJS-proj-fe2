/* eslint-disable react/jsx-no-undef */
import { Inter } from 'next/font/google'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';





const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <div className='containermain'>
          <Navbar />
          {children}
          <Footer />
          </div>
      </body>
    </html>
  )
}