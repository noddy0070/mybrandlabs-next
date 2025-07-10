import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="w-full flex items-center px-[5.5556vw] py-[2.0833vw]  justify-between  ">
      <div className="flex items-center gap-[5.1389vw]">
      <span className="text-[1.6667vw] font-bold cursor-pointer">MBL</span>

        <div className="flex items-center text-h3Text font- gap-[2.2917vw] font-b">
          <div className="flex items-center  cursor-pointer  gap-[.4861vw]">
        <span className=" font-semibol d text-h3Text">Service</span>
        <Image src="/icons/chevron-down.svg" alt="chevron-down" className=" w-[1.3889vw] h-[1.3889vw]" width={20} height={20} />
        </div>
        <div className="flex items-center cursor-pointer gap-[.4861vw] ">
        <span className="text-[1.1111vw] font-semibold">Case Study</span>
        <Image src="/icons/chevron-down.svg" alt="chevron-down" className=" w-[1.3889vw] h-[1.3889vw]" width={20} height={20} />
        </div>
        <div className="flex items-center cursor-pointer gap-[.4861vw] ">
        <span className="text-[1.1111vw] font-semibold">Resources</span>
        <Image src="/icons/chevron-down.svg" alt="chevron-down" className=" w-[1.3889vw] h-[1.3889vw]" width={20} height={20} />
        </div>
        <span className="text-[1.1111vw] font-semibold cursor-pointer">Contact</span>
        </div>
      </div>
      <div className="flex items-center gap-[.625vw] ml-auto">
        <button className="text-[1.1111vw] px-[2.4306vw] py-[.9028vw] font-bold border-[.1389vw]   border-black rounded-[3.4722vw]">Get Started</button>
        <button className="text-[1.1111vw]  rounded-full bg-black">
          <Image src="/icons/bell.svg" alt="bell" className=" w-[1.6667vw] h-[1.6667vw] m-[.9028vw]" width={24} height={24} />
        </button>
      </div>

    </nav>
  );
} 