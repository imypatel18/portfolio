import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/imgs/logo.png';


const Footer = () => {
  return (
    <div className="px-4 md:mx-32 py-4 md:py-8 flex justify-between items-center border-t-2 border-gray-300">
        <p className='text-center font-poppins text-[10px] md:text-[18px]   text-black '>
        Copyright © 2024 Yash Patel       </p>
        <div className="flex justify-between gap-4 items-center">
        <p className='text-center font-poppins text-[10px] md:text-[18px]   text-black '>
        All Rights Reserved       </p>
        {/* <span className="">|</span> */}

          {/* <Link href="/">
          <p className='text-center underline font-poppins text-[10px] md:text-[18px]   text-[#FFBF4C] '>
        Terms and Conditions      </p>          </Link>
        <span className="">|</span>

        <Link href="/">
          <p className='text-center underline font-poppins text-[10px] md:text-[18px]   text-[#FFBF4C] '>
        Privacy Policy      </p>          </Link> */}
          {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Footer;