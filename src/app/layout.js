import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './pages/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tawaran Madani',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html className='flex flex-col' lang='en'>
      <body>
        <Navbar className='h-auto'>{children}</Navbar>
      </body>
    </html>
  );
}
