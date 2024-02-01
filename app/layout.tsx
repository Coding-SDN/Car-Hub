
import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'CarHub | Find, Book or Rent a Car Online',
  description: 'Discover the best cars in the world.',
  icons: {
    icon: "/assets/images/logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
