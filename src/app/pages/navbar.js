'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = ({ children }) => {
  const [language, setLanguage] = useState(0);

  return (
    <div className='flex min-w-full justify-center bg-tp-darkBlue bg-cover'>
      <div className='relative min-h-screen w-full items-start justify-center '>
        <div className='flex flex-row pt-8 px-6 w-full items-center justify-between'>
          <h6 className='text-tp-white z-50'>UNDI PERPADUAN</h6>
          <div className='flex flex-row align-middle justify gap-4 h-9 z-50'>
            <Link href="/home" className='hover:bg-tp-gray text-tp-white rounded-3xl py-3 px-9 font-ClashDisplay items-center flex'>
              Home
            </Link>
            <button className='hover:bg-tp-gray text-tp-white rounded-3xl py-3 px-9 font-ClashDisplay items-center flex'>
              Pencapaian Madani
            </button>
            <Link href="/volunteer" className='hover:bg-tp-gray text-tp-white rounded-3xl py-3 px-9 font-ClashDisplay items-center flex'>
              Volunteer
            </Link>
            <Link href='/faq' className='hover:bg-tp-gray text-tp-white rounded-3xl py-3 px-9 font-ClashDisplay items-center flex'>
              FAQ
            </Link>
            <div className='bg-tp-white flex flex-row'>
              <button 
                className={`px-7 ${
                  language === 0
                    ? 'bg-tp-red text-tp-white'
                    : 'bg-tp-white text-tp-gray2'
                }`}
                onClick={() => setLanguage(0)}
              >
                BM
              </button>
              <button
                className={`px-7 ${
                  language === 1
                    ? 'bg-tp-red text-tp-white'
                    : 'bg-tp-white text-tp-gray2'
                }`}
                onClick={() => setLanguage(1)}
              >
                ENG
              </button>
            </div>
          </div>
        </div>
        <div className='w-full  '>{children}</div>
      </div>
    </div>
  );
};

export default Navbar;
