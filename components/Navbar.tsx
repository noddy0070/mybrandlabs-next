"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { TransitionLink } from "../utils/TransitionLink";
import { usePathname } from 'next/navigation';export default function Navbar() {
  const pathname = usePathname();
  const [navType, setNavType] = useState<string>('');
  useEffect(() => {
    if(pathname==='/services'){
      setNavType('absolute');
    }else{
      setNavType('relative');
    }
  },[pathname])
  return (
    <nav className={`w-full flex items-center px-[5.5556vw] py-[2.0833vw]  justify-between ${navType=='absolute'?'absolute top-0 left-0 text-white':'relative text-black'}`}>
      
      <div className="flex items-center gap-[5.1389vw]">
        <TransitionLink href="/">
          <Image src={navType=='absolute'?'/icons/mbl-white.svg':'icons/mbl.svg'} alt="chevron-down" className=" w-[3.02vw] h-[2.08vw]" width={40} height={38} />
        </TransitionLink>

      
      
        <div className="flex items-center  text-regularText gap-[2.2917vw] ">
          <TransitionLink href="/services">
          <div className="flex items-center  cursor-pointer  gap-[.4861vw]">
          <span className=" font-semibold">Service</span>
            </div>
            </TransitionLink>
        <div className="flex items-center cursor-pointer gap-[.4861vw] ">
        <span className="font-semibold">Case Study</span>
        </div>
        <div className="flex items-center cursor-pointer gap-[.4861vw] ">
        <span className=" font-semibold">Resources</span>
        </div>
        <TransitionLink href="/contact-us ">
        <span className="font-semibold cursor-pointer">Contact</span>
        </TransitionLink>
        </div>
      </div>
      <div className="flex items-center gap-[.625vw] ml-auto">
        <button className={`px-[2.4306vw] py-[.9028vw] font-bold border text-regularText   rounded-[3.4722vw] ${navType=='absolute'?'text-white border-white':'text-black  border-black'}`}>Get Started</button>
        <button className={`rounded-full ${navType=='absolute'?'bg-white':'bg-black'} w-[3.47vw] h-[3.47vw] flex items-center justify-center`}>
          <Image src={navType=='absolute'?'/icons/mail-black-navbar.svg':'icons/mail.svg'} alt="menu" className="w-[1.67vw] h-[1.67vw]" width={64} height={64} />
        </button>
      </div>

    </nav>
  );
} 