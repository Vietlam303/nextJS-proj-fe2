/* eslint-disable react/jsx-no-undef */
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import '@/axios-config'




const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <div className='containermain'>
          <Navbar />
          {children}
          <Footer />
          </div>
      </body>
    </html>
  )
}