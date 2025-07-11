import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="w-full flex items-center px-[5.5556vw] py-[2.0833vw]  justify-between  ">
      
      <div className="flex items-center gap-[5.1389vw]">
      <Image src="/icons/mbl.svg" alt="chevron-down" className=" w-[3.02vw] h-[2.08vw]" width={40} height={38} />

      

        <div className="flex items-center  text-mediumText gap-[2.2917vw] font-b">
          <div className="flex items-center  cursor-pointer  gap-[.4861vw]">
          <span className=" font-semibold">Service</span>
        </div>
        <div className="flex items-center cursor-pointer gap-[.4861vw] ">
        <span className="font-semibold">Case Study</span>
        </div>
        <div className="flex items-center cursor-pointer gap-[.4861vw] ">
        <span className=" font-semibold">Resources</span>
        </div>
        <span className="font-semibold cursor-pointer">Contact</span>
        </div>
      </div>
      <div className="flex items-center gap-[.625vw] ml-auto">
        <button className=" px-[2.4306vw] py-[.9028vw] font-bold border-[.1389vw]  text-regularText  border-black rounded-[3.4722vw]">Get Started</button>
        <button className=" rounded-full bg-black">
        </button>
      </div>

    </nav>
  );
} 