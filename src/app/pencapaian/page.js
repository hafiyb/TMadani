'use client';
import { useContext, useEffect, useState } from 'react';
import Footer from '../pages/footer';
import FooterMobile from '../pages/footerMobile';
import { LangContext } from '@/context/LangContext';

const Volunteer = () => {
  const [width, setWidth] = useState(0);
  const [activePencapaian, setActivePencapaian] = useState(0);
  const [pencapaianOpen, setPencapaianOpen] = useState(false);
  const { lang, changeLang, text } = useContext(LangContext);
  const handleActivePencapaian = (value) => {
    setPencapaianOpen(false);
    setActivePencapaian(value);
  };

  const pencapaianMadani = [
    [
      {
        question: text.pencapaian.s1q1,
        answer: [
          text.pencapaian.s1q1a1,
          text.pencapaian.s1q1a2,
          text.pencapaian.s1q1a3,
          text.pencapaian.s1q1a4,
          text.pencapaian.s1q1a5,
        ],
      },
      {
        question: text.pencapaian.s1q2,
        answer: [
          text.pencapaian.s1q2a1,
          text.pencapaian.s1q2a2,
          text.pencapaian.s1q2a3,
        ],
      },
      {
        question: text.pencapaian.s1q3,
        answer: [
          text.pencapaian.s1q3a1,
          text.pencapaian.s1q3a2,
          text.pencapaian.s1q3a3,
        ],
      },
      {
        question: text.pencapaian.s1q4,
        answer: [text.pencapaian.s1q4a1, text.pencapaian.s1q4a2],
      },
      {
        question: text.pencapaian.s1q5,
        answer: [text.pencapaian.s1q5a1, text.pencapaian.s1q5a2],
      },
      {
        question: text.pencapaian.s1q6,
        answer: [text.pencapaian.s1q6a1, text.pencapaian.s1q6a2],
      },
      {
        question: text.pencapaian.s1q7,
        answer: [text.pencapaian.s1q7a1, text.pencapaian.s1q7a2],
      },
      {
        question: text.pencapaian.s1q8,
        answer: [text.pencapaian.s1q8a1, text.pencapaian.s1q8a2],
      },
      {
        question: text.pencapaian.s1q9,
        answer: [text.pencapaian.s1q9a1, text.pencapaian.s1q9a2],
      },
      {
        question: text.pencapaian.s1q10,
        answer: [text.pencapaian.s1q10a1, text.pencapaian.s1q10a2],
      },
    ],
    [
      {
        question: text.pencapaian.s2q1,
        answer: [text.pencapaian.s2q1a1, text.pencapaian.s2q1a2],
      },
      {
        question: text.pencapaian.s2q2,
        answer: [text.pencapaian.s2q2a1, text.pencapaian.s2q2a2],
      },
      {
        question: text.pencapaian.s2q3,
        answer: [text.pencapaian.s2q3a1, text.pencapaian.s2q3a2],
      },
      {
        question: text.pencapaian.s2q4,
        answer: [text.pencapaian.s2q4a1, text.pencapaian.s2q4a2],
      },
      {
        question: text.pencapaian.s2q5,
        answer: [
          text.pencapaian.s2q5a1,
          text.pencapaian.s2q5a2,
          text.pencapaian.s2q5a3,
        ],
      },
      {
        question: text.pencapaian.s2q6,
        answer: [text.pencapaian.s2q6a1, text.pencapaian.s2q6a2],
      },
      {
        question: text.pencapaian.s2q7,
        answer: [text.pencapaian.s2q7a1],
      },
      {
        question: text.pencapaian.s2q8,
        answer: [text.pencapaian.s2q8a1, text.pencapaian.s2q8a2],
      },
      {
        question: text.pencapaian.s2q9,
        answer: [text.pencapaian.s2q9a1, text.pencapaian.s2q9a2],
      },
      {
        question: text.pencapaian.s2q10,
        answer: [
          text.pencapaian.s2q10a1,
          text.pencapaian.s2q10a2,
          text.pencapaian.s2q10a3,
        ],
      },
    ],
    [
      {
        question: text.pencapaian.s3q1,
        answer: [
          text.pencapaian.s3q1a1,
          text.pencapaian.s3q1a2,
          text.pencapaian.s3q1a3,
        ],
      },
      {
        question: text.pencapaian.s3q2,
        answer: [text.pencapaian.s3q2a1, text.pencapaian.s3q2a2],
      },
      {
        question: text.pencapaian.s3q3,
        answer: [text.pencapaian.s3q3a1],
      },
      {
        question: text.pencapaian.s3q4,
        answer: [text.pencapaian.s3q4a1, text.pencapaian.s3q4a2],
      },
      {
        question: text.pencapaian.s3q5,
        answer: [text.pencapaian.s3q5a1, text.pencapaian.s3q5a2],
      },
      {
        question: text.pencapaian.s3q6,
        answer: [text.pencapaian.s3q6a1],
      },
      {
        question: text.pencapaian.s3q7,
        answer: [text.pencapaian.s3q7a1],
      },
      {
        question: text.pencapaian.s3q8,
        answer: [text.pencapaian.s3q8a1, text.pencapaian.s3q8a2],
      },
      {
        question: text.pencapaian.s3q9,
        answer: [text.pencapaian.s3q9a1],
      },
      {
        question: text.pencapaian.s3q10,
        answer: [text.pencapaian.s3q10a1, text.pencapaian.s3q10a2],
      },
    ],
    [
      {
        question: text.pencapaian.s4q1,
        answer: [text.pencapaian.s4q1a1, text.pencapaian.s4q1a2],
      },
      {
        question: text.pencapaian.s4q2,
        answer: [text.pencapaian.s4q2a1, text.pencapaian.s4q2a2],
      },
      {
        question: text.pencapaian.s4q3,
        answer: [text.pencapaian.s4q3a1, text.pencapaian.s4q3a2],
      },
      {
        question: text.pencapaian.s4q4,
        answer: [text.pencapaian.s4q4a1, text.pencapaian.s4q4a2],
      },
      {
        question: text.pencapaian.s4q5,
        answer: [text.pencapaian.s4q5a1, text.pencapaian.s4q5a2],
      },
      {
        question: text.pencapaian.s4q6,
        answer: [text.pencapaian.s4q6a1, text.pencapaian.s4q6a2],
      },
      {
        question: text.pencapaian.s4q7,
        answer: [text.pencapaian.s4q7a1, text.pencapaian.s4q7a2],
      },
      {
        question: text.pencapaian.s4q8,
        answer: [text.pencapaian.s4q8a1, text.pencapaian.s4q8a2],
      },
      {
        question: text.pencapaian.s4q9,
        answer: [text.pencapaian.s4q9a1],
      },
      {
        question: text.pencapaian.s4q10,
        answer: [text.pencapaian.s4q10a1, text.pencapaian.s4q10a2],
      },
    ],
  ];

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
            {text.pencapaian.section1_text1}
          </div>
          <div className='w-[50%] text-2xl/[40px] p-[10%]'>
            {text.pencapaian.section1_text2}
            <br />
            <br />
            {text.pencapaian.section1_text3}
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
        <div className='flex flex-row items-start justify-start w-full mb-40'>
          <div className='  flex flex-col gap-5 w-[50%] px-[5%]'>
            <button
              onClick={() => handleActivePencapaian(0)}
              className={` ${
                activePencapaian === 0
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center  `}
            >
              {text.pencapaian.s1}
            </button>
            <button
              onClick={() => handleActivePencapaian(1)}
              className={` ${
                activePencapaian === 1
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              {text.pencapaian.s2}
            </button>
            <button
              onClick={() => handleActivePencapaian(2)}
              className={` ${
                activePencapaian === 2
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              {text.pencapaian.s3}
            </button>
            <button
              onClick={() => handleActivePencapaian(3)}
              className={` ${
                activePencapaian === 3
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              {text.pencapaian.s4}
            </button>
          </div>
          <div className='w-[50%] px-[5%] flex flex-col'>
            {pencapaianMadani[activePencapaian].map((item, index, list) => {
              return (
                <div
                  className='flex flex-col hover:cursor-pointer'
                  onClick={() => setPencapaianOpen(index)}
                >
                  <div className='flex flex-row items-center justify-between'>
                    <div className='text-xl w-[60%]'>{item.question}</div>
                    <div className='text-title'>
                      {pencapaianOpen === index ? '-' : '+'}
                    </div>
                  </div>
                  {pencapaianOpen === index
                    ? item.answer.map((paragraph, paragraphIndex, allPara) => {
                        return (
                          <div
                            className={`text-sm pr-[15%] ${
                              paragraphIndex === allPara.length - 1
                                ? 'mb-5'
                                : 'mb-10'
                            }`}
                          >
                            {paragraph}
                          </div>
                        );
                      })
                    : null}
                </div>
              );
            })}
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
        <div>
          <div className='text-4xl mb-10'>TAWARAN MADANI</div>
          <div className=' text-2xl/[40px] mb-10'>
            {text.pencapaian.section1_text1}
          </div>
          <div className='p-[5%]'>
            {text.pencapaian.section1_text2}
            <br />
            <br />
            {text.pencapaian.section1_text3}
          </div>
        </div>
        <div className='text-[72px]/[80px]'>Pencapaian Madani.</div>
      </div>
      <div className='bg-tp-white flex flex-col '>
        <div className='text-title px-[5%] py-32 text-center'>
          If these policy objectives resonate with you, undilah perpaduan.
        </div>
        <div className='flex flex-col justify-start w-full mb-20'>
          <div className=' flex flex-col gap-5 px-[5%] mb-20'>
            <button
              onClick={() => handleActivePencapaian(0)}
              className={` ${
                activePencapaian === 0
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center  `}
            >
              {text.pencapaian.s1}
            </button>
            <button
              onClick={() => handleActivePencapaian(1)}
              className={` ${
                activePencapaian === 1
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              {text.pencapaian.s2}
            </button>
            <button
              onClick={() => handleActivePencapaian(2)}
              className={` ${
                activePencapaian === 2
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              {text.pencapaian.s3}
            </button>
            <button
              onClick={() => handleActivePencapaian(3)}
              className={` ${
                activePencapaian === 3
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              {text.pencapaian.s4}
            </button>
          </div>
          <div className=' px-[5%] flex flex-col'>
            {pencapaianMadani[activePencapaian].map((item, index, list) => {
              return (
                <div
                  className='flex flex-col hover:cursor-pointer'
                  onClick={() => setPencapaianOpen(index)}
                >
                  <div className='flex flex-row items-center justify-between mb-3'>
                    <div className='text-xl w-[80%]'>{item.question}</div>
                    <div className='text-title'>
                      {pencapaianOpen === index ? '-' : '+'}
                    </div>
                  </div>
                  {pencapaianOpen === index
                    ? item.answer.map((paragraph, paragraphIndex, allPara) => {
                        return (
                          <div
                            className={`text-sm pr-[15%] ${
                              paragraphIndex === allPara.length - 1
                                ? 'mb-5'
                                : 'mb-10'
                            }`}
                          >
                            {paragraph}
                          </div>
                        );
                      })
                    : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FooterMobile />
    </div>
  );
};

export default Volunteer;
