import Link from 'next/link';
import Image from 'next/image';
import poster from '../../public/assets/imgs/poster.png';


const SkillsBar = () => {
  const skills = [
    {
      name: "HTML",
      numberPercent: "92",
      startCount: "0",
      endCount: "92",
    },
    {
      name: "CSS",
      numberPercent: "90",
      startCount: "0",
      endCount: "85",
    },
    {
      name: "JavaScript",
      numberPercent: "90",
      startCount: "0",
      endCount: "90",
    },
    {
      name: "React JS",
      numberPercent: "92",
      startCount: "0",
      endCount: "92",
    },
    {
      name: "Next JS",
      numberPercent: "92",
      startCount: "0",
      endCount: "92",
    },
    {
      name: "Redux",
      numberPercent: "88",
      startCount: "0",
      endCount: "88",
    },
    {
      name: "Tailwind CSS",
      numberPercent: "92",
      startCount: "0",
      endCount: "92",
    },
  ];

  return (
    <div className="w-full">
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-center">
            <span className="mr-2 text-left font-bold font-poppins text-[10px] md:text-[20px] text-[#031220]">{skill.name}</span>
            {/* <span>{skill.numberPercent}%</span> */}
          </div>
          <div className="h-3 relative bg-gray-200 rounded-full mt-1">
            <div
              className="absolute h-full bg-red-500 rounded-full"
              style={{ width: `${skill.numberPercent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Signup = () => {
  return (

    <div id="skills" className="px-4 py-4 md:px-[128px] md:py-[75px]  flex flex-col justify-between items-center gap-4 md:gap-8 ">
               <div className='flex flex-col justify-between md:mx-[200px] gap-[16px]'>
               <h1 className="text-center font-poppins text-[20px] md:text-[40px]  font-semibold text-black">
              Experience & Skills  
               
                                     </h1>
               {/* <p className="text-center font-poppins text-[10px] md:text-[20px] text-[#031220]   md:line-clamp-3">
               When did you see a video from a big creator without captions, probably never! That's because captions make their videos engaging and go viral
                </p> */}
                    </div>
                    <div className='flex flex-row bg-gray-100 w-full p-4 rounded-md'>
                      <div className='flex flex-col w-1/3 border-r-2 border-gray-400 p-2 gap-2'>
                      <p className="text-left font-bold font-poppins text-[10px] md:text-[20px] text-[#031220]   md:line-clamp-3">
               Web Developer
                </p> 
                <p className="text-left   font-poppins text-[10px] md:text-[16px] text-[#031220]   md:line-clamp-3">
               FuturebeeAI
                </p> 
                <p className="text-left  font-poppins text-[10px] md:text-[14px] text-[#031220]   md:line-clamp-3">
               Feb 2023 - present
                </p> 
                                      </div>
                                      <div className='flex flex-col w-2/3 p-2 gap-2'>
                      <p className="text-left font-bold font-poppins text-[10px] md:text-[20px] text-[#031220]   md:line-clamp-3">
               FutureBeeAI 
                </p> 
                <p className="text-left   font-poppins text-[10px] md:text-[16px] text-[#031220]   md:line-clamp-3">
                FutureBeeAI is a leading service-providing company in the field of AI data sourcing and Localization. The journey started with the founder’s freelancing and now FutureBeeAI is a trusted team of thousands of passionate people.                </p> 
             
                                      </div>
                      <div>


                      </div>
                      </div>

                    <div className='flex flex-row justify-between gap-2 md:gap-0 w-full'>
                    <SkillsBar />


                    {/* <div className='card-bg min-h-[200px] md:min-h-[653px]'>
                    <Image src={poster} alt="poster" className='w-full' width={1100} height={653} />
                      
                        </div> */}

                    </div>
                  
    </div>
  );
};

export default Signup;