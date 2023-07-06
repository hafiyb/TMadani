'use client';
import { useEffect, useState } from 'react';
import Footer from '../pages/footer';
import FooterMobile from '../pages/footerMobile';

const Volunteer = () => {
  const [width, setWidth] = useState(0);
  const [activePencapaian, setActivePencapaian] = useState(false);

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
        className='relative w-full h-screen bg-cover flex flex-col  text-tp-white p-[5%]'
        style={{ backgroundImage: 'url(images/volunteer1.png)' }}
      >
        <div className='flex justify-end items-start'>
          <div className='w-[50%] text-title p-[10%]'>
            The Madani Government has administered Malaysia for just over 6
            months.
          </div>
          <div className='w-[50%] text-2xl/[40px] p-[10%]'>
            In that short period, multiple initiatives have been rolled out to
            address the economic pressures that currently weigh down on the
            Malaysian rakyat.
            <br />
            <br />
            The following snapshot outlines relevant initiatives that the Madani
            Government has already undertaken to help enable dignified work,
            dignified wages, and a dignified life
          </div>
        </div>
        <div className=' w-full text-hero text-tp-white bottom-[10%]'>
          Pencapaian Madani.
        </div>
      </div>
      <div className='flex flex-col bg-tp-white text-tp-dark items-center '>
        <div className='text-title px-[25%] py-32 text-center'>
          If these policy objectives resonate with you, undilah perpaduan.
        </div>
        <div className='flex flex-row'>
          <div className='  flex flex-col gap-5'>
            <button
              onClick={() => setActivePencapaian(0)}
              className={` ${
                activePencapaian === 0 ? 'bg-tp-red' : 'bg-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center  `}
            >
              Jobs
            </button>
            <button
              onClick={() => setActivePencapaian(1)}
              className={` ${
                activePencapaian === 1 ? 'bg-tp-red' : 'bg-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              Cost of Living
            </button>
            <button
              onClick={() => setActivePencapaian(1)}
              className={` ${
                activePencapaian === 2 ? 'bg-tp-red' : 'bg-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              Infrastructure
            </button>
            <button
              onClick={() => setActivePencapaian(1)}
              className={` ${
                activePencapaian === 3 ? 'bg-tp-red' : 'bg-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              Welfare
            </button>
          </div>
        </div>
      </div>
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
          <div className='text-4xl mb-10'>UNDI PERPADUAN</div>
          <div className='text-title'>
            Undi Perpaduan is driven by people like you.
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
