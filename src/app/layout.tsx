import Image from 'next/image';
import CustomNavbar from './componants/CustomNavbar';
import LOGO from '../../public/img/logo.png'
import './globals.css';

export const metadata = {
  title: 'CATcat',
  description: 'Cat chatbot for you',
  icons: {
    icon: '/img/logo.png', 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className="m-0 p-0 " style={{ background: `url('/img/BG-05.jpg') center center / cover fixed no-repeat` }}>
        <section className='fixed w-full top-0 z-[1000]'>
          <CustomNavbar />
        </section>
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}
