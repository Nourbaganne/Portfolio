// import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[10px] hidden lg:block text-gray-300">
            <Image
              src="/logo.png"
              width={200}
              height={500}
              alt="Logo Here"
            />
          </span>
        </div>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-50">
            <a href="#about-me" className="cursor-pointer hover:text-gray-300 hover:translate-y-1">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-gray-300 hover:translate-y-1">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-gray-300 hover:translate-y-1">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row">
          <button className="py-2 hidden md:block px-3 button-primary text-center text-white cursor-pointer rounded-lg min-w-max">
            Let&apos;s Talk!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;