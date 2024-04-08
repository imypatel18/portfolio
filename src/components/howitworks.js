import Link from 'next/link';
import Image from 'next/image';
import s1 from '../../public/assets/imgs/yp/yp-3.jpg';
import s2 from '../../public/assets/imgs/step2.png';
import s3 from '../../public/assets/imgs/step3.png';
import React from "react";
import {
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
 { Social: <FaWhatsapp />, link: "https://wa.me/+918460605625" },
  { Social: <FaTwitter />, link: "https://twitter.com/imYpatel18" },
  { Social: <FaInstagram />, link: "https://instagram.com/imypatel18" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/yash-patel-999300245" },
 { Social: <FaGithub />, link: "https://github.com/imypatel18" },
];

const Social = () => {
  return (
    <div className="nav social-icons flex flex-row gap-4 ">
    {SocialShare.map((val, i) => (
      <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank" className="flex items-center justify-center h-6 w-6 md:w-8 md:h-8 bg-black border border-white hover:border-white rounded-full transition-all duration-300 text-white hover:bg-red-500 transform hover:scale-110">
        {val.Social}
      </a>
    ))}
  </div>
  
  );
};



const HowitWorks = () => {
  return (
    <div id='about' className="px-8 py-4 md:px-[128px] md:py-[75px]   flex flex-col justify-around gap-4 md:gap-16 items-center ">
        <div className='flex justify-center'>
      <h1 className="text-center font-poppins text-[20px] md:text-[40px]  font-semibold text-black ">
                    About me  
                    </h1>
                    </div>
                    {/* <Social /> */}
                    <div className='flex flex-col md:flex-row justify-evenly w-full items-center border-2 border-red-500 rounded-xl p-2 md:p-8'>
                    <div className='flex flex-col items-center justify-evenly gap-4 md:w-1/3'>
                    <Image src={s1} alt="logo" width={200} height={200} className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full object-cover' />
                    <Social />
                    <p className="text-center font-poppins text-base md:text-[30px]  font-semibold text-black ">
                        Yashkumar Patel
                        </p>
                        {/* <p className="text-center font-poppins text-[10px] md:text-[20px] text-black max-w-[378px]  md:line-clamp-3">
                        Upload your video, by default language is english, you can choose from 97 different languages.                        </p> */}

                        </div>
                        <div className='flex flex-col md:w-2/3 justify-evenly gap-6'>
                        <p className="text-left font-poppins text-[10px] md:text-[16px] text-black ">
                        I am very passionate for creating beautiful and user-friendly web applications that provide seamless user experiences. I am constantly looking for ways to improve my skills and stay up-to-date with the latest technologies in the industry.

                  </p>
                  <p className="text-left font-poppins text-[10px] md:text-[16px] text-black  ">

                  With a proven track record of crafting dynamic web solutions, I bring hands-on experience in HTML, CSS, and JavaScript, coupled with expertise in ReactJS, Next.js, and Redux. My portfolio showcases live projects where I have seamlessly integrated APIs, demonstrating a keen eye for detail and a passion for creating immersive user experiences. 
                  </p>  
                  <div>
                  <p className="text-left font-poppins text-base md:text-[26px]  font-semibold text-black ">
                    
                        </p>
                  </div>

                          </div>
                        {/* <div className='flex flex-col justify-around items-center gap-4 w-full'>
                    <Image src={s2} alt="logo" className='w-[180px] md:w-[314px] h-[180px] md:h-[314px]' width={314} height={100} />
                    <p className="text-center font-poppins text-base md:text-[20px]  font-semibold text-black ">
                        Step 2
                        </p>
                        <p className="text-center font-poppins text-[10px] md:text-[20px] text-black max-w-[378px] md:line-clamp-3">
                        Wait for upload & transcription, once done you will see the download button.                      </p>

                        </div> */}
                      
                    </div>
                    
    </div>
  );
};

export default HowitWorks;