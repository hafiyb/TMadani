'use client';

import { LangContext } from '@/context/LangContext';
import Link from 'next/link';
import { useContext, useState } from 'react';

const NavbarMobile = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { lang, changeLang, text } = useContext(LangContext);

  return (
    <div className='flex min-w-full justify-end bg-tp-darkBlue bg-cover relative'>
      <button
        className='h-20 z-40 text-tp-white mr-[5%]'
        onClick={() => setShowMenu(true)}
      >
        <img src='images/burgerMenu.png' />
      </button>
      {showMenu ? (
        <div className='w-screen h-screen fixed z-50 bg-tp-darkBlue top-0 left-0 text-tp-white flex flex-col justify-between p-[3%] items-center '>
          <div className='w-full h-16 flex justify-end'>
            <button onClick={() => setShowMenu(false)}><img src='images/exit.png' /></button>
          </div>
          <div className='flex flex-col items-center gap-10'>
            <Link href='/home' onClick={() => setShowMenu(false)}>
              Home
            </Link>
            <Link href='/pencapaian' onClick={() => setShowMenu(false)}>
              Pencapaian Madani
            </Link>
            <Link href='/volunteer' onClick={() => setShowMenu(false)}>
            {lang === 'bm' ? 'Sukarelawan' : 'Volunteer'}
            </Link>
            <Link href='/faq' onClick={() => setShowMenu(false)}>
              FAQ
            </Link>
          </div>
          <div className='bg-tp-white flex flex-row h-10 mb-52'>
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
      ) : null}

      {children}
    </div>
  );
};

export default NavbarMobile;
