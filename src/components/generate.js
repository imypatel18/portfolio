"use client"
import Link from 'next/link';
import Image from 'next/image';
import title from '../../public/assets/imgs/title.png';
import first from '../../public/assets/imgs/yp/yp-7.png';
import background from '../../public/assets/imgs/bg.jpg';
import { useEffect } from 'react';


const Generate = () => {

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
      
      useEffect(() => {
        // Smooth scroll for hash links on initial page load
        if (window.location.hash) {
          const targetId = window.location.hash.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth',
            });
          }
        }
      }, []); // Run once on initial page load
      
      
    return (
        <>
            <div className="px-8 py-4 md:px-[128px] md:py-[5px]  flex flex-col justify-between items-center">
            <div className='flex flex-col md:flex-row gap-[20px] md:gap-[74px]'>
            <div className='flex flex-col md:w-1/2 justify-center gap-4 '>
                <div>
                <p className='text-[15px] md:text-[24px] text-left font-poppins '>
                Hello, I am
                </p>
                <h2 className='text-[20px] md:text-[48px] text-left font-poppins font-bold line-clamp-3 '>
                Yashkumar Patel
                </h2>
                {/* <Image src={title} alt="title" className='text-red-500' width={300} height={100} /> */}
                </div>
                <p className='text-sm md:text-[18px] text-left font-poppins '>
                Experienced Front-End Developer with a demonstrated ability to bring design concepts to
  life through practical implementation. Proficient in React.js and the latest frameworks, I
  excel at creating interactive and visually appealing user interfaces, making me a valuable
  asset for live projects.
               </p>
               <div className='flex flex-row justify-start gap-4 '>
               <button className='border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 border-2 px-2 md:px-[24px] py-1 md:py-[12px] font-semibold rounded-lg'>
                <a href='https://drive.google.com/file/d/1B8E0vR0O0xJZlKcLuADRXnXxOCGIDn2r/view?usp=sharing' target={"_blank"}>
                                    Resume
                                    </a>
                </button>
                <button className='border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 border-2 px-2 md:px-[24px] py-1 md:py-[12px] font-semibold rounded-lg'>
                <a href="#live-projects" className="" onClick={scrollToSection}>
                    My Work
                    </a>
                </button>
                </div>
            </div>
            <div className='flex flex-col w-full md:w-1/2'>
                <Image src={first} alt="first" className='w-[560px]' width={560} height={454} />
                </div>
            </div>

             

            </div>
            {/* <div>
                <Image src={background} alt="background" className='w-full ' width={800} height={80} />
                </div> */}
        </>
    );
};

export default Generate;