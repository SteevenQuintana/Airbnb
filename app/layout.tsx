import './globals.css'
import Navbar from './components/navbar/Navbar'
import { Nunito } from 'next/font/google'
import ClientOnly from './components/ClientOnly'
import Modal from './components/Modals/Modal'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone'
}

const font = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <Modal title='Hello!!' actionLabel='Submit' isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
