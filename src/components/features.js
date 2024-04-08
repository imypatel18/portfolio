import Link from 'next/link';
import Image from 'next/image';
import title from '../../public/assets/imgs/title.png';
import f1 from '../../public/assets/imgs/yp/new-project/futurebee-ss.png';
import f2 from '../../public/assets/imgs/yp/new-project/listenmonster-ss.png';
import f3 from '../../public/assets/imgs/yp/new-project/islamicpod-ss.png';
import f4 from '../../public/assets/imgs/yp/new-project/sparkmetro-ss.png';
import f5 from '../../public/assets/imgs/yp/new-project/store-admin-ss.png';
import f6 from '../../public/assets/imgs/yp/new-project/yugo-web-ss.png';
import background from '../../public/assets/imgs/bg.jpg';


const Generate = () => {


    return (
        <>
            <div className="px-8 py-4 md:px-[128px] md:py-[75px]  flex flex-col gap-[30px] md:gap-[60px] items-center">
            <div className='flex justify-center' id="live-projects">
      <h1 className="text-center font-poppins text-[20px] md:text-[40px]  font-semibold text-black ">
      Live Projects
                          </h1>
                    </div>
                    <div className='flex flex-row gap-8 flex-wrap'>
                    <div className="flex flex-col gap-2">
    <a target="_blank" href="https://www.futurebeeai.com/" className="relative block overflow-hidden transition duration-300 transform hover:scale-105">
        <Image src={f1} alt="img" height={600} width={600} className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center font-poppins text-lg font-semibold">Visit Website</p>
        </div>
    </a>
    <p className="text-left font-poppins text-sm md:text-lg font-semibold text-black">Futurebee</p>
</div>

<div className="flex flex-col gap-2">
    <a target="_blank" href="https://www.listenmonster.com/" className="relative block overflow-hidden transition duration-300 transform hover:scale-105">
        <Image src={f2} alt="img" height={600} width={600} className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center font-poppins text-lg font-semibold">Visit Website</p>
        </div>
    </a>
    <p className="text-left font-poppins text-sm md:text-lg font-semibold text-black">Listenmonster</p>
</div>

<div className="flex flex-col gap-2">
    <a target="_blank" href="https://www.islamicpod.com/" className="relative block overflow-hidden transition duration-300 transform hover:scale-105">
        <Image src={f3} alt="img" height={600} width={600} className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center font-poppins text-lg font-semibold">Visit Website</p>
        </div>
    </a>
    <p className="text-left font-poppins text-sm md:text-lg font-semibold text-black">Islamicpod</p>
</div>

<div className="flex flex-col gap-2">
    <a target="_blank" href="https://spark-metro.vercel.app/" className="relative block overflow-hidden transition duration-300 transform hover:scale-105">
        <Image src={f4} alt="img" height={600} width={600} className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center font-poppins text-lg font-semibold">Visit Website</p>
        </div>
    </a>
    <p className="text-left font-poppins text-sm md:text-lg font-semibold text-black">Spark Metro</p>
</div>

<div className="flex flex-col gap-2">
    <a target="_blank" href="https://datastore.admin.futurebeeai.com" className="relative block overflow-hidden transition duration-300 transform hover:scale-105">
        <Image src={f5} alt="img" height={600} width={600} className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center font-poppins text-lg font-semibold">Visit Website</p>
        </div>
    </a>
    <p className="text-left font-poppins text-sm md:text-lg font-semibold text-black">Datastore Admin</p>
</div>

<div className="flex flex-col gap-2">
    <a target="_blank" href="https://yugo.web.futurebeeai.com/" className="relative block overflow-hidden transition duration-300 transform hover:scale-105">
        <Image src={f6} alt="img" height={600} width={600} className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center font-poppins text-lg font-semibold">Visit Website</p>
        </div>
    </a>
    <p className="text-left font-poppins text-sm md:text-lg font-semibold text-black">Yugo Web</p>
</div>



                    </div>
                    {/* <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                    <div className='flex flex-col items-center  gap-[30px] md:gap-[54px]'>
                    <Image src={f1} alt="feature" className=' max-w-[530px] w-[200px] md:w-[530px]' width={530} height={410} />
                    <div className=''>
                    <p className='text-center text-[12px] md:text-[24px] font-bold'>
                    Super Duper Accurate
                    </p>
                    <p className='text-center text-[12px] md:text-[24px] font-poppins text-gray-400 md:line-clamp-3 max-w-[778px] max-h-[108px]'>
                    CapHacker is using the latest tech to convert your speech into text. Our AI is the most accurate when it comes to transcribing content.
                    </p>
                    </div>
                        </div>
                    
                        <div className='flex flex-col items-center gap-[30px] md:gap-[54px]'>
                    <Image src={f2} alt="feature" className='max-w-[530px] w-[200px] md:w-[530px]' width={530} height={410} />
                    <div className=''>
                    <p className='text-center text-[12px] md:text-[24px] font-bold'>
                    Pre-made templates
                                        </p>
                    <p className='text-center text-[12px] md:text-[24px] font-poppins text-gray-400 md:line-clamp-3 max-w-[778px] max-h-[108px]'>
                    Explore our collection of 5 unique templates, each designed to give your videos a special touch. Just pick the one that fits your style!                    </p>
                    </div>
                        </div>
                        <div className='flex flex-col items-center gap-[30px] md:gap-[54px]'>
                    <Image src={f3} alt="feature" className='max-w-[894px] w-[200px] md:w-[894px]' width={894} height={410} />
                    <div className=''>
                    <p className='text-center text-[12px] md:text-[24px] font-bold'>
                    Customize As you like                    </p>
                    <p className='text-center text-[12px] md:text-[24px] font-poppins text-gray-400 md:line-clamp-3 max-w-[778px] max-h-[108px]'>
Take control of your captions! Change the font style, color, and background. Add an outline or shadow to your text. Adjust their size and where they appear on your video.                    </p>
                    </div>
              
                        </div>
                        <div className='flex flex-col items-center gap-[30px] md:gap-[54px]'>
                    <Image src={f4} alt="feature" className='max-w-[530px] w-[200px] md:w-[530px]' width={530} height={410} />
                    <div className=''>
                    <p className='text-center text-[12px] md:text-[24px] font-bold'>
                    Download Captions as File or Video                    </p>
                    <p className='text-center text-[12px] md:text-[24px] font-poppins text-gray-400 md:line-clamp-3 max-w-[778px] max-h-[108px]'>
                    As a registered user, get your captions as a separate file or with the video. We store them, so download anytime you want.
                    </p>
                    </div>
                        </div>
                        <div className='flex flex-col items-center gap-[30px] md:gap-[54px]'>
                    <Image src={f5} alt="feature" className='max-w-[530px] w-[200px] md:w-[530px]' width={530} height={410} />
                    <div className=''>
                    <p className='text-center text-[12px] md:text-[24px] font-bold'>
                    Save and Resume Your Work                    </p>
                    <p className='text-center text-[12px] md:text-[24px] font-poppins text-gray-400 md:line-clamp-3 max-w-[778px] max-h-[108px]'>
                    Save your progress and return whenever you like. You'll start exactly where you left off, making it super easy.                    </p>
                    </div>
                        </div>
                        </div> */}

            </div>
         
        </>
    );
};

export default Generate;