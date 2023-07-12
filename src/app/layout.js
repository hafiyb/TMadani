import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './pages/navbar';
import LangContextProvider from '@/context/LangContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tawaran Madani',
  description: 'Tawaran Madani',
};

export default function RootLayout({ children }) {
  return (
    <html className='flex flex-col' lang='en'>
      <meta property='og:url' content='https://tawaranmadani.org/' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Tawaran Madani' />
      <meta property='og:description' content='Tawaran Madani' />
      <meta property='og:image' content='' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content='tawaranmadani.org' />
      <meta property='twitter:url' content='https://tawaranmadani.org/' />
      <meta name='twitter:title' content='Tawaran Madani' />
      <meta name='twitter:description' content='Tawaran Madani' />
      <meta name='twitter:image' content='' />
      <LangContextProvider>
        <body>
          <Navbar className='h-auto'>{children}</Navbar>
        </body>
      </LangContextProvider>
    </html>
  );
}
