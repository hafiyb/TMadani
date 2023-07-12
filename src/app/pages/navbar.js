'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import NavbarMobile from './navbarMobile';
import { LangContext } from '@/context/LangContext';

const Navbar = ({ children }) => {
  const [language, setLanguage] = useState(0);

  const { lang, changeLang, text } = useContext(LangContext);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  });
  return width >= 1280 ? (
    <div className='flex min-w-full justify-center bg-tp-darkBlue bg-cover'>
      <div className='relative min-h-screen w-full items-start justify-center '>
        <div className='flex flex-row pt-8 px-6 w-full items-center justify-between'>
          <h6 className='text-tp-white z-50'>TAWARAN MADANI</h6>
          <div className='flex flex-row align-middle justify gap-4 h-9 z-50'>
            <Link
              href='/home'
              className='hover:bg-tp-gray text-tp-white rounded-3xl py-3 px-9 font-ClashDisplay items-center flex'
            >
              Home
            </Link>
            <Link
              href='/pencapaian'
              className='hover:bg-tp-gray text-tp-white rounded-3xl py-3 px-9 font-ClashDisplay items-center flex'
            >
              Pencapaian Madani
            </Link>
            <Link
              href='/volunteer'
              className='hover:bg-tp-gray text-tp-white rounded-3xl py-3 px-9 font-ClashDisplay items-center flex'
            >
              {lang === 'bm' ? 'Sukarelawan' : 'Volunteer'}
            </Link>
            <Link
              href='/faq'
              className='hover:bg-tp-gray text-tp-white rounded-3xl py-3 px-9 font-ClashDisplay items-center flex'
            >
              FAQ
            </Link>
            <div className='bg-tp-white flex flex-row'>
              <button
                className={`px-7 ${
                  lang === 'bm'
                    ? 'bg-tp-red text-tp-white'
                    : 'bg-tp-white text-tp-gray2'
                }`}
                onClick={() => changeLang('bm')}
              >
                BM
              </button>
              <button
                className={`px-7 ${
                  lang === 'eng'
                    ? 'bg-tp-red text-tp-white'
                    : 'bg-tp-white text-tp-gray2'
                }`}
                onClick={() => changeLang('eng')}
              >
                ENG
              </button>
            </div>
          </div>
        </div>
        <div className='w-full'>{children}</div>
      </div>
    </div>
  ) : (
    <NavbarMobile className='h-auto'>{children}</NavbarMobile>
  );
};

export default Navbar;
