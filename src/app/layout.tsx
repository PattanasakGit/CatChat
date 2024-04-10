import BackgroundChanger from '../utils/backgroundChanger';
import CustomNavbar from './componants/CustomNavbar';
import './globals.css';

export const metadata = {
  title: 'CATcat',
  description: 'Cat chatbot for you',
  icons: {
    icon: '/img/logo.png', 
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="m-0 p-0">
        <section className="fixed w-full top-0 z-[1000]">
          <CustomNavbar />
        </section>
        <BackgroundChanger />
        <section>{children}</section>
      </body>
    </html>
  );
}
