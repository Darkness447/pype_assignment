"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import React from 'react';
import ToggleButton from './ToggleButton';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { isDarkMode: isOn } = useTheme();


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50  pb-3 ${isVisible ? 'transition-transform duration-300' : '-translate-y-full'} ${isVisible ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
      <div className='md:hidden flex p-3 bg-white justify-between w-[100%] place-items-center border-gray-100 border-b-2 md:border-b-0 pb-3 max-w-sm mx-auto'>
        <Image src={"/logo.png"} height={80} width={80} alt='Pype Logo' />
        <p className='text-2xl font-semibold text-gray-600 font-sans'>Pype AI</p>
      </div>
      <div className='hidden md:flex p-3 justify-between w-[100%] bg-white border-gray-100 border-b-2 pb-3 px-[5%]'>
        <div className='flex place-items-center gap-8'>
          <Image src={"/logo.png"} height={80} width={80} alt='Pype Logo' />
          <p className='text-2xl font-semibold text-gray-600 font-sans'>Pype AI</p>
        </div>
        <div className='flex place-items-center gap-10'>
          <button>Features</button>
          <button className='py-3 px-4 bg-black text-gray-300 text-sm rounded-xl shadow-md'>Launch App</button>
          <ToggleButton />
          <h1> {isOn ? 'Purple Mode' : 'Light Mode'} </h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
