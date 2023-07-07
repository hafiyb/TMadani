'use client';
import { useEffect, useState } from 'react';
import Footer from '../pages/footer';
import FooterMobile from '../pages/footerMobile';

const Volunteer = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  return width > 1280 ? (
    // ========================================================================================================================================
    // ========================================================================================================================================
    // web version here
    // ========================================================================================================================================
    // ========================================================================================================================================
    <div className='flex flex-col justify-center min-h-full min-w-full absolute top-0'>
      <div
        className='relative w-full h-screen bg-cover flex justify-end items-center'
        style={{ backgroundImage: 'url(images/volunteer1.png)' }}
      >
        <img
          src='images/homeSection2-2.png'
          className='absolute top-[15%] left-[10%]'
        />
        <div className=' w-[50%] text-tp-white pt-[15%] pr-[15%]'>
          <div className='text-title'>
            Tawaran Madani is driven by people like you.
          </div>
          <div className='text-2xl/[40px] my-16'>
            If you would like to join our field teams — calling fence-sitters &
            canvassing, training to become PACAs — download the CISTA App and
            register today. Perpaduan is driven by people like you.
          </div>
          <img className='mb-20' src='images/homeSection2-3.png' />
        </div>
      </div>
      <div className='bg-tp-darkBlue w-full h-40' />
      <Footer />
    </div>
  ) : (
    // ========================================================================================================================================
    // ========================================================================================================================================
    // mobile version here
    // ========================================================================================================================================
    // ========================================================================================================================================
    <div className='flex flex-col justify-center min-h-full min-w-full absolute top-0'>
      {/* ======================================================================================================================================== */}
      {/* HERO */}
      {/* ======================================================================================================================================== */}
      <div
        className='relative w-full h-screen bg-cover bg-center text-tp-white py-[20%] px-[5%] flex flex-col justify-between'
        style={{ backgroundImage: 'url(images/volunteer1.png)' }}
      >
        <div className='mb-14'>
          <div className='text-4xl mb-10'>TAWARAN MADANI</div>
          <div className='text-title'>
            Tawaran Madani is driven by people like you.
          </div>
        </div>
        <img src='images/homeSection2-2.png' />
      </div>
      <div className='bg-tp-darkBlue flex flex-col text-tp-white px-[10%] pt-80 '>
        <div className='text-xl'>
          If you would like to join our field teams — calling fence-sitters &
          canvassing, training to become PACAs — download the CISTA App and
          register today. Perpaduan is driven by people like you.
        </div>
        <img className='my-10' src='images/homeSection2-3.png' />
      </div>
      <FooterMobile />
    </div>
  );
};

export default Volunteer;
