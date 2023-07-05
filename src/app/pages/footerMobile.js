import Link from 'next/link';

const FooterMobile = () => {
  return (
    <div className='w-full bg-tp-darkBlue flex flex-col justify-between text-tp-white items-center p-[5%]'>
      <img src='images/TPlogoFooter.png' className='mb-5 mt-[500px]' />
      <div className='text-xl'>Hakcipta © 2023 | Undi Perpaduan</div>
    </div> 
  );
};

export default FooterMobile;
