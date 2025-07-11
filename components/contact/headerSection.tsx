import React from 'react'
import Image from 'next/image'

const HeaderSection = () => {
  return (
    <div className='pr-[7.5vw] pl-[11.375vw] justify-center items-center pt-[2.9375vw] pb-[4.0625vw] flex flex-row gap-[.625vw]'>
        <div className='w-[43.75vw] flex flex-col gap-[3vw]'>
            <h1 className='text-testimonial font-bold leading-[100%]'>Contact Us</h1>
            <p className='text-regularText font-medium text-[#878C91] w-[27.875vw]'>
            Whether you’re ready to launch or just exploring ideas — we’d love to hear from you.
            </p>
            <div className='flex gap-[2vw]'>
            <div className="flex flex-row gap-[8.8896px]">
                                <Image src="/icons/phone.svg" className="w-[26.6672px] h-[26.6672px]" alt="location" width={24} height={24} />
                                <p className="text-regularText text-[#878C91]">
                                8225886676
                                </p>
                            </div>
                            <div className="flex flex-row gap-[8.8896px]">
                                <Image src="/icons/mail-black.svg" className="w-[26.6672px] h-[26.6672px]" alt="location" width={24} height={24} />
                                <p className="text-regularText text-[#878C91]">
                                mybrandlabs@gmail.com
                                </p>
                            </div>
                            <div className="flex flex-row gap-[8.8896px]">
                                <Image src="/icons/location.svg" className="w-[26.6672px] h-[26.6672px]" alt="location" width={24} height={24} />
                                <p className="text-regularText text-[#878C91]">
                                Bhopal | Remote
                                </p>
                            </div>
            </div>
            <button className='bg-black text-white px-[2vw] w-[11.4375vw] py-[1vw] rounded-[77.7776px] flex items-center gap-[2vw]'>
                <span className='text-regularText font-semibold'>Contact</span>
                <Image src="../icons/arrow-right-white.svg" alt="arrow-right" width={24} height={24} className='w-[26.6672px] h-[26.6672px]' />
            </button>


        </div>
        <div className='relative'>
            <div className='w-[16.125vw] h-[14.75vw] absolute top-0 left-0 bg-[url("/images/contactUs/contactUsBox2.png")] bg-cover bg-center'/>
            <div className='w-[36.75vw] h-[34.5625vw] bg-[url("/images/contactUs/contactUsBox.png")] bg-cover bg-center'/>

        </div>
    </div>
  )
}

export default HeaderSection
