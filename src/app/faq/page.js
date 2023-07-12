'use client';
import { LangContext } from '@/context/LangContext';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

const Faq = () => {
  const [faqOpen, setFaqOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const { lang, text } = useContext(LangContext);

  const faqList = [
    [
      {
        question: text.faq.s1q1,
        answer: text.faq.s1a1,
      },
      {
        question: text.faq.s1q2,
        answer: text.faq.s1a2,
      },
    ],
    [
      {
        question: text.faq.s2q1,
        answer: text.faq.s2a1,
      },
      {
        question: text.faq.s2q2,
        answer: text.faq.s2a2,
      },
      {
        question: text.faq.s2q3,
        answer: text.faq.s2a3,
      },
      {
        question: text.faq.s2q4,
        answer: text.faq.s2a4,
      },
      {
        question: text.faq.s2q5,
        answer: text.faq.s2q5,
      },
      {
        question: text.faq.s2q6,
        answer: text.faq.s2a6,
      },
    ],
  ];

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
    <div className='flex flex-col justify-center min-w-full absolute top-0'>
      <div
        className='relative w-full h-screen bg-cover flex justify-end items-start flex-row'
        style={{ backgroundImage: 'url(images/volunteer1.png)' }}
      >
        <div className='w-[50%] p-[10%] text-tp-white'>
          <div className='text-7xl/[87px] mb-24 flex flex-col'>
            Frequently Asked Questions (FAQ)
          </div>
          <div className='flex flex-col '>
            <button
              className={` ${
                activeFaq === 0 ? 'bg-tp-red' : 'bg-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center mb-2`}
              onClick={() => setActiveFaq(0)}
            >
              Volunteer
            </button>
            <button
              className={` ${
                activeFaq === 1 ? 'bg-tp-red' : 'bg-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
              onClick={() => setActiveFaq(1)}
            >
              CISTA Application
            </button>
          </div>
        </div>
        <div className=' w-[50%]  text-tp-white pt-[8%] pr-[15%]'>
          {faqList[activeFaq].map((item, index, list) => {
            return (
              <div
                className='flex flex-col hover:cursor-pointer'
                onClick={() => setFaqOpen(index)}
              >
                <div className='flex flex-row items-center justify-between my-2'>
                  <div className='text-xl w-[60%]'>{item.question}</div>
                  <div className='text-title'>
                    {faqOpen === index ? '-' : '+'}
                  </div>
                </div>
                {faqOpen === index ? (
                  <div className='text-tp-yellow text-sm'>{item.answer}</div>
                ) : null}
                {index !== list.length - 1 && (
                  <div className='w-full h-[1px] bg-tp-white mt-8 ' />
                )}
              </div>
            );
          })}
        </div>
      </div>
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
          <div className='text-title'>Frequently Asked Questions (FAQ)</div>
          <div className='mt-14'>
            <button
              onClick={() => setActiveFaq(0)}
              className={` ${
                activeFaq === 0 ? 'bg-tp-red' : 'bg-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center mb-2`}
            >
              Volunteer
            </button>
            <button
              onClick={() => setActiveFaq(1)}
              className={` ${
                activeFaq === 1 ? 'bg-tp-red' : 'bg-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              CISTA Application
            </button>
          </div>
          <div className=' text-tp-white pt-[8%] px-[4%]'>
            {faqList[activeFaq].map((item, index, list) => {
              return (
                <div
                  className='flex flex-col hover:cursor-pointer'
                  onClick={() => setFaqOpen(index)}
                >
                  <div className='flex flex-row items-center justify-between  '>
                    <div className='text-sm w-[60%]'>{item.question}</div>
                    <div className='text-title'>
                      {faqOpen === index ? '-' : '+'}
                    </div>
                  </div>
                  {faqOpen === index ? (
                    <div className='text-tp-yellow text-sm'>{item.answer}</div>
                  ) : null}
                  {index !== list.length - 1 && (
                    <div className='w-full h-[1px] bg-tp-white mt-4 ' />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
