'use client';

import { useEffect, useState } from 'react';
import Footer from '../pages/footer';
import Link from 'next/link';
import FooterMobile from '../pages/footerMobile';

const Homepage = () => {
  const [language, setLanguage] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  return width >= 1280 ? (
    // ========================================================================================================================================
    // ========================================================================================================================================
    // web version here
    // ========================================================================================================================================
    // ========================================================================================================================================
    <div className='flex flex-col justify-center min-h-full min-w-full absolute top-0'>
      {/* ======================================================================================================================================== */}
      {/* HERO */}
      {/* ======================================================================================================================================== */}
      <div
        className='relative w-full h-screen bg-cover'
        style={{ backgroundImage: 'url(images/hero1.png)' }}
      >
        <div className='absolute text-title text-tp-white w-96 bottom-[45%] right-[30%] leading-[72px]'>
          The job of government is to ensure that no one is left behind.
        </div>
        <div className='absolute w-full text-hero text-tp-white bottom-[10%] pl -20'>
          Tiada yang Tertinggal.
        </div>
        <img
          src={'images/TPlogo.png'}
          className='absolute bottom-[30%] right-[3%]'
        />
      </div>
      {/* ======================================================================================================================================== */}
      {/* Section 1 */}
      {/* ======================================================================================================================================== */}
      <div className='w-full h-screen bg-tp-darkBlue py-[5%] px-[10%] text-title'>
        <div className='w-[70%] text-tp-white'>
          The parties of the Unity Government believe in fair and equitable
          treatment of Kedah, Kelantan, Negeri Sembilan, Pulau Pinang, Selangor,
          and Terengganu.
        </div>
        <div className='flex flex-row py-[5%]'>
          <div className='text-2xl/[40px] flex flex-col text-tp-white px-[6%] w-[50%] gap-6'>
            <div>
              This means facilitating each state’s unique potential, by creating
              economic opportunities that are locally relevant.
            </div>
            <div>
              No anak negeri should have to leave home in order to achieve
              prosperity and happiness.
            </div>
            <div>
              By using technology and empowering enterprising individuals, we
              believe we can lay these seeds of prosperity across the 6 states.
            </div>
          </div>
          <div>
            <img src='images/homeSection1.png' />
            <Link href='/' className='flex flex-row my-10 items-center'>
              <div className='text-tp-white text-2xl'>Find out how</div>
              <div className='w-[28px] h-[28px] bg-tp-red rounded-full ml-3 text-2xl items-center justify-center flex text-tp-white'>
                ➔
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* ======================================================================================================================================== */}
      {/* Section 2 */}
      {/* ======================================================================================================================================== */}
      <div className='w-full h-screen bg-tp-white relative'>
        <img src='images/homeSection2-1.png' className='absolute right-[5%]' />
        <img src='images/homeSection2-2.png' className='absolute left-[-5%]' />
        <div className='py-[10%] px-[30%] text-tp-dark'>
          <div className='text-title mb-32'>
            Even as the ruling government, we believe it is our responsibility
            to run a principled campaign.
          </div>
          <img className='mb-20' src='images/homeSection2-3.png' />
          <div className='flex flex-row text-2xl/[40px] '>
            <div>
              So our campaign doesn’t use taxpayer money or federal resources.
            </div>
            <div>
              In 2022, CISTA mobilised 40,000 volunteers who helped campaign,
              fundraise, and train to become PACAs.
            </div>
            <div>
              We need your support again - download the CISTA App and
              participate in an event near you.
            </div>
          </div>
        </div>
      </div>
      {/* ======================================================================================================================================== */}
      {/* Footer */}
      {/* ======================================================================================================================================== */}
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
        <div>
          <div className='text-4xl mb-10'>UNDI PERPADUAN</div>
          <div className=' text-2xl/[40px]'>
            The job of government is to ensure that no one is left behind.
          </div>
        </div>
        <div className='text-[72px]/[80px]'>Tiada yang Tertinggal.</div>
      </div>
      {/* ======================================================================================================================================== */}
      {/* Section 1 */}
      {/* ======================================================================================================================================== */}
      <div className='w-full bg-tp-darkBlue flex flex-col text-tp-white'>
        <div className=' text-3xl/[40px] mb-10  p-[8%]'>
          The parties of the Unity Government believe in fair and equitable
          treatment of Kedah, Kelantan, Negeri Sembilan, Pulau Pinang, Selangor,
          and Terengganu.
        </div>
        <div className='text-xl/[40px] flex flex-col  px-[14%] mb-14 gap-6'>
          <div>
            This means facilitating each state’s unique potential, by creating
            economic opportunities that are locally relevant.
          </div>
          <div>
            No anak negeri should have to leave home in order to achieve
            prosperity and happiness.
          </div>
          <div>
            By using technology and empowering enterprising individuals, we
            believe we can lay these seeds of prosperity across the 6 states.
          </div>
        </div>
        <img src='images/homeSection1.png' />
      </div>
      {/* ======================================================================================================================================== */}
      {/* Section 2 */}
      {/* ======================================================================================================================================== */}
      <div className='w-full flex flex-col bg-tp-white items-center'>
        <img src='images/homeSection2-1.png' className='w-[50%]' />
        <div className='text-3xl/[40px] mb-10 p-[8%]'>
          Even as the ruling government, we believe it is our responsibility to
          run a principled campaign.
        </div>
        <div className='text-xl/[40px] flex flex-col  px-[14%] mb-14 gap-6'>
          <div>
            So our campaign doesn’t use taxpayer money or federal resources.
          </div>
          <div>
            In 2022, CISTA mobilised 40,000 volunteers who helped campaign,
            fundraise, and train to become PACAs.
          </div>
          <div>
            We need your support again - download the CISTA App and participate
            in an event near you.
          </div>
        </div>
        <img className='p-[5%]' src='images/homeSection2-3.png' />
        <img src='images/homeSection2-2.png' className='relative left-[-20%] top-40' />
      </div>
      <FooterMobile />
    </div>
  );
};

export default Homepage;
