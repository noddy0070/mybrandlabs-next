import Image from "next/image";
const Footer=()=>{
    return(
        <div className="bg-[#FAFAFA]" >

            {/* first div */}
            <div className="mx-[15.84px] mt-[15.84px] flex  bg-black rounded-[30.24px] bg-[url('/images/footerBox.png')] bg-cover bg-center
            pl-[63.936px] pr-[102.672px] pt-[79.92px] pb-[94.896px] justify-between items-center">
            <h3 className="text-testimonial text-white font-semibold leading-[100%]">Ready to work with us?</h3>
            <button className="bg-white rounded-[69.84px] px-[31.68px] py-[14.4px] mt-[21.6px] h-min flex gap-[41.904px] items-center">
                <p className="font-bold text-regularText  leading-[140%]">Get Started</p> 
                <Image src={'/icons/arrow-right-black.svg'} alt="" width={24} height={24} className=" h-[23.904px] w-[23.904px]"/>
            </button>

            </div>

            {/* second div */}
            <div className="px-[5.5556vw] pt-[5.8333vw] pb-[7.1528vw] flex flex-row gap-[7.5vw]">
                <div className="flex flex-col gap-[2.0833vw] w-[37.0833vw]">
                <Image src="/icons/mbl.svg" alt="chevron-down" className=" w-[3.0556vw] h-[2.0833vw]" width={40} height={38} />
                <p className="text-regularText text-[#878C91]">
                MyBrandLabs is a creative IT & digital marketing studio empowering businesses with growth-focused websites, apps, branding, SEO, and paid marketing solutions. 
                </p>
                <div className="flex flex-row gap-[.8333vw]">
                    <Image src="/icons/facebook.svg" className="w-[2.3611vw] h-[2.3611vw]" alt="facebook" width={34} height={34} />
                    <Image src="/icons/instagram.svg" className="w-[2.3611vw] h-[2.3611vw]" alt="instagram" width={34} height={34} />
                    <Image src="/icons/linkedin.svg" className="w-[2.3611vw] h-[2.3611vw]" alt="linkedin" width={34} height={34} />
                    <Image src="/icons/twitter.svg" className="w-[2.3611vw] h-[2.3611vw]" alt="twitter" width={34} height={34} />

                </div>


                </div>
                <div className="flex flex-row gap-[7.9861vw]">
                    <div className="flex flex-col gap-[2.7778vw]">
                        <p className="text-mediumText font-semibold">
                        Navigation
                        </p>
                        <div className="flex flex-col gap-[.6944vw]">
                            <p className="text-regularText text-[#878C91]">
                            Services
                            </p>
                            <p className="text-regularText text-[#878C91]">
                            Case Study
                            </p>
                            <p className="text-regularText text-[#878C91]">
                            Resources
                            </p>
                            <p className="text-regularText text-[#878C91]">
                            Contact
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[2.7778vw]">
                        <p className="text-mediumText font-semibold">
                        Licenses
                        </p>
                        <div className="flex flex-col gap-[.6944vw]">
                            <p className="text-regularText text-[#878C91]">
                            Privacy Policy
                            </p>
                            <p className="text-regularText text-[#878C91]">
                            Terms of Service
                            </p>
                            <p className="text-regularText text-[#878C91]">
                            Email
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[2.7778vw]">
                        <p className="text-mediumText font-semibold">
                        Contact
                        </p>
                        <div className="flex flex-col gap-[.6944vw]">
                            <div className="flex flex-row gap-[.5556vw]">
                                <Image src="/icons/phone.svg" className="w-[1.6667vw] h-[1.6667vw]" alt="location" width={24} height={24} />
                                <p className="text-regularText text-[#878C91]">
                                8225886676
                                </p>
                            </div>
                            <div className="flex flex-row gap-[.5556vw]">
                                <Image src="/icons/mail-black.svg" className="w-[1.6667vw] h-[1.6667vw]" alt="location" width={24} height={24} />
                                <p className="text-regularText text-[#878C91]">
                                mybrandlabs@gmail.com
                                </p>
                            </div>
                            <div className="flex flex-row gap-[.5556vw]">
                                <Image src="/icons/location.svg" className="w-[1.6667vw] h-[1.6667vw]" alt="location" width={24} height={24} />
                                <p className="text-regularText text-[#878C91]">
                                Bhopal | Remote
                                </p>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

            </div>
            
            
        </div>
    )
}


export default Footer;