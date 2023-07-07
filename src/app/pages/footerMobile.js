import Link from 'next/link';

const FooterMobile = () => {
  return (
    <div className='w-full bg-tp-darkBlue flex flex-col justify-between text-tp-white items-center'>
      {/* <img src='images/TPlogoFooter.png' className='mb-5 mt-[500px]' />
      <div className='text-xl'>Hakcipta © 2023 | Undi Perpaduan</div> */}
      <div className='flex flex-col items-center text-tp-white'>
        <div className='text-[70px]/[70px] text-[rgba(255,255,255,0.35)] w-[70%] mt-20'>
          MALAYSIA MADANI
        </div>
        <div className='my-10'>Hakcipta © 2023 | Undi Perpaduan</div>
      </div>
    </div> 
  );
};

export default FooterMobile;
