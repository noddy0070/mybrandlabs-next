import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="w-full flex items-center px-[5.5556vw] py-[2.0833vw]  justify-between  ">
      <div className="flex items-center gap-[5.1389vw]">
      <span className="text-h5Text font-bold cursor-pointer">MBL</span>

        <div className="flex items-center  text-mediumText gap-[2.2917vw] font-b">
          <div className="flex items-center  cursor-pointer  gap-[.4861vw]">
          <span className=" font-semibold">Service</span>
        <Image src="/icons/chevron-down.svg" alt="chevron-down" className=" w-[1.3889vw] h-[1.3889vw]" width={20} height={20} />
        </div>
        <div className="flex items-center cursor-pointer gap-[.4861vw] ">
        <span className="font-semibold">Case Study</span>
        <Image src="/icons/chevron-down.svg" alt="chevron-down" className=" w-[1.3889vw] h-[1.3889vw]" width={20} height={20} />
        </div>
        <div className="flex items-center cursor-pointer gap-[.4861vw] ">
        <span className=" font-semibold">Resources</span>
        <Image src="/icons/chevron-down.svg" alt="chevron-down" className=" w-[1.3889vw] h-[1.3889vw]" width={20} height={20} />
        </div>
        <span className="font-semibold cursor-pointer">Contact</span>
        </div>
      </div>
      <div className="flex items-center gap-[.625vw] ml-auto">
        <button className=" px-[2.4306vw] py-[.9028vw] font-bold border-[.1389vw]  text-regularText  border-black rounded-[3.4722vw]">Get Started</button>
        <button className=" rounded-full bg-black">
          <img src="/icons/bell.svg" alt="bell" className=" w-[1.6667vw] h-[1.6667vw] m-[.9028vw]" width={24} height={24} />
        </button>
      </div>

    </nav>
  );
} 