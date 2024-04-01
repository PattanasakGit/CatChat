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

function random(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className="m-0 p-0 " style={{ background: `url('/img/BG-05.jpg') center center / cover fixed no-repeat`, fontFamily: "Noto Serif Thai" }}>
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
