import Image from "next/image";
const Footer=()=>{
    return(
        <div >

            {/* first div */}
            <div className="mx-[1.1vw] mt-[1.1vw] flex  bg-black rounded-[2.1vw]
            pl-[4.44vw] pr-[7.13vw] pt-[5.55vw] pb-[6.59vw] justify-between items-center">
            <h3 className="text-testimonial text-white font-semibold leading-[100%]">Ready to work with us?</h3>
            <button className="bg-white rounded-[4.85vw] px-[2.2vw] py-[1vw] mt-[1.5vw] h-min flex gap-[2.91vw] items-center">
                <p className="font-bold text-regularText  leading-[140%]">Get Started</p> 
                <Image src={'/icons/arrow-right-black.svg'} alt="" width={24} height={24} className=" h-[1.66vw] w-[1.66vw]"/>
            </button>

            </div>

            {/* second div */}
            
            
        </div>
    )
}


export default Footer;