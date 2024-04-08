"use client"
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/imgs/logo.png';
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'; // Import useEffect hook

const Navbar = () => {
  const [open, setOpen] = useState(false)
    const openMenu = () => {
        setOpen(true);
      };
    
      const closeMenu = () => {
        setOpen(false);
      };
  // Function to handle smooth scrolling
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Close the menu when a link is clicked
  const handleClick = () => {
    if (open) {
      setOpen(false);
    }
  };

  // Close the menu on ESC key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open]);

      
  return (
    <nav className="px-4 md:px-32 py-4 flex justify-end md:justify-between items-center border-b-2 border-gray-300">
        <Link href="/"  className="text-sm md:text-[26px] font-semibold hidden rounded-md md:flex bg-red-500 text-white p-4 ">
          Y P
          {/* portfolio */}
            {/* <Image className='w-[100px] md:w-[150px]' src={logo} alt="logo" width={150} height={150} /> */}
        </Link>
        <div className="flex justify-between gap-4 items-center">
          <a onClick={() => smoothScrollTo("about")} href="#about" className="text-sm md:text-base font-semibold hidden md:flex  border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 border-2 rounded-md p-2" >
            About</a>
          <a onClick={() => smoothScrollTo("skills")} href='#skills' className="text-sm md:text-base font-semibold hidden md:flex  border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 border-2 rounded-md p-2">Skills</a>

          <a onClick={() => smoothScrollTo("live-projects")} href='#live-projects' className="text-sm md:text-base font-semibold hidden md:flex  border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 border-2 rounded-md p-2">Projects</a>

            <Bars3Icon
        className=" w-6 h-6 md:hidden cursor-pointer"
        onClick={openMenu}
      />
      <Transition.Root show={open} as={Fragment} >
        {/* Off-canvas menu */}
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-50"
          onClose={closeMenu}
        >
          <div className="absolute inset-0 overflow-hidden">
            {/* Background overlay */}
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* Off-canvas menu content */}
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
              
            >
              <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex flex-col h-full bg-white shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex justify-between items-center pt-4">
                        <Dialog.Title className="text-base font-semibold leading-6 text-black">
                          portfolio
                        {/* <Image className='w-[100px] md:w-[150px]' src={logo} alt="logo" width={150} height={150} /> */}
                        </Dialog.Title>
                        <button
                          type="button"
                          className="p-2 focus:outline-none"
                          onClick={closeMenu}
                        >
                          <XMarkIcon className="h-6 w-6 text-black" />
                        </button>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6  flex flex-col gap-6">
                      {/* Your content */}
                      <a onClick={() => smoothScrollTo("about")} href="#about" className="text-sm md:text-base font-semibold " >About</a>
          <a onClick={() => smoothScrollTo("skills")} href='#skills' className="font-semibold text-sm md:text-base " >Skills</a>

          <a onClick={() => smoothScrollTo("live-projects")} href='#live-projects' className="font-semibold text-sm md:text-base ">Projects</a>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
          {/* Add more links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;