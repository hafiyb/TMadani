import Link from "next/link";

const Footer = () => {
  return (
    <div className='w-full bg-tp-darkBlue flex flex-col justify-between'>
      <div className='w-[50%] flex flex-col text-tp-white py-12 px-[240px]'>
        <div className="mb-20 text-xs">SITEMAP</div>
        <div className="flex flex-col mb-24 gap-3">
          <Link href='/'>Home</Link>
          <Link href='/'>Tawaran Perpaduan</Link>
          <Link href='/volunteer'>Volunteer</Link>
          <Link href='/faq'>FAQs</Link>
        </div>
        <div>Hakcipta © 2023 | Undi Perpaduan</div>
      </div>
      <img src='images/TPlogoFooter.png'  className="p-[2%]"/>
    </div>
  );
};

export default Footer;
