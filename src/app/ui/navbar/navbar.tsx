'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import clsx from 'clsx';


const Navbar = () => {
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0
  });

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {

    const handleScroll = () => {
      setScrollData(prevState => {
        return {
          y: window.scrollY,
          lastY: prevState.y
        }
      })
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    
    if(scrollData.y > scrollData.lastY){
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    
  }, [scrollData])

  return (
    <div className={clsx(
        "w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] z-50 backdrop-blur-sm flex p-3 sm:p-6  border-b-[#24242E] px-6 sm:px-12  border-b-[1px]",
        {
          'navBar': showNav,
          'navBar hideNav': !showNav
        },
      )}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            <Image
              src="/logo.png"
              width={200}
              height={100}
              alt="Logo Here"
            />
          </span>
        </div>

        <div className="w-[500px] h-full flex flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-50">
            <a href="#about" className="cursor-pointer hover:text-gray-300 hover:translate-y-1">
              About Me
            </a>
            <a href="#experience" className="cursor-pointer hover:text-gray-300 hover:translate-y-1">
              Experience
            </a>
            <a href="#education" className="cursor-pointer hover:text-gray-300 hover:translate-y-1">
              Education
            </a>
          </div>
        </div>

        <div className="flex flex-row">
          <a href="#contact">
            <button className="py-2 hidden md:block px-3 button-primary text-center text-white cursor-pointer rounded-lg min-w-max">
              Let&apos;s Talk!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;