import React from 'react'
import Image from 'next/image'
const heroSection = () => {
  return (
    <div className='flex gap-[.6944vw] pt-[3.6806vw] relative'>
      <div className='flex flex-col  gap-[3.3333vw] w-[48.6111vw] '>
        <h1 className='text-h0Text font-semibold leading-[110%]'>
        Stay ahead of the<br/> curve with our<br/> forward-thinking 
        </h1>
        <p className='text-regularText leading-[150%] font-medium text-[#878C91]'>
        We are a results-driven agency blending digital marketing and IT solutions to help brands grow faster and smarter. Welcome to where innovation meets execution.
        </p>
        <div className='flex gap-[3vw]  items-center'>
            <button className='group hover:bg-black hover:text-white bg-transparent border border-black transition-colors duration-300 cursor-pointer text-black px-[2.2222vw] py-[1.1111vw] rounded-[4.8611vw] flex items-center gap-[1vw]'>
                <span className='text-regularText font-semibold'>Schedule Call</span>
                <svg className='w-[1.6667vw] h-[1.6667vw] transition-colors duration-300 text-black group-hover:text-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            </button>
            <span className='underline text-regularText  font-semibold text-[#010205]'>View Case Studies</span>
        </div>
      </div>
      <div className='w-[40.8333vw] '>
        <div className='flex gap-[1.6667vw] mb-[1.25vw]'>
          <div className='relative'>
            <div className='absolute top-[-2.7778vw] right-[2.7778vw] rounded-full bg-black shadow-[0vw_2.0886vw_3.5125vw_-0.475vw_rgba(0,_0,_0,_0.44)]  w-[7.5vw] h-[7.5vw] flex items-center justify-center'>
              <Image src="../icons/trending-up.svg" alt="arrow-right" width={48} height={48} className='w-[3.3333vw] h-[3.3333vw]' />
            </div>
          <div className="rounded-tl-[69.4444vw] bg-[rgba(0,0,0,0.2)] rounded-bl-[1.3889vw] rounded-r-[1.3889vw] w-[21.0417vw] h-[19.0972vw] bg-[url('/images/home/howSectionCurve.png')] bg-cover bg-center"
/>
          </div>
          <div className='w-[17.9861vw] px-[1.7361vw] py-[2.0833vw] h-[19.5139vw] bg-[#F0F0F0] rounded-[1.3889vw] flex flex-col justify-start '>
            <span className='text-testimonial font-bold leading-[80%] mb-[2.0833vw]'>10+</span>
            <span className='font-medium leading-[150%] text-[#5C5D5F] text-regularText'>multiple clients trust us with their growth.</span>
            <div className='flex w-full mt-auto items-center'>
              <div className='w-[9.7917vw] h-[.4861vw] bg-black'/>
              <div className='w-[4.9306vw] h-[.4167vw] bg-[#D9D9D9]'/>
            </div>
          </div>
        </div>
        <div className="rounded-[1.3889vw] bg-transparent relative flex gap-[2.6389vw] bg-[url('/images/home/heroSectionBox.png')] bg-cover bg-center">
          <div className='pl-[2.2917vw] pr-[1.8056vw] pt-[3.3333vw] pb-[4.1667vw] w-[22.2222vw]'>
            <div className='flex mb-[2.2222vw] items-center'>
              <div className='w-[2.7778vw] h-[.1389vw] bg-white '/>
              <span className='pl-[.9028vw] text-white text-smallText text-justify leading-[120%] font-semibold'>Drive More Traffic and Sales </span>

            </div>
            <span className='text-white text-h5Text text-justify leading-[120%] font-semibold'>
            Drive more traffic and product sales 
            </span>

          </div>
          <div className='flex gap-[.6944vw] items-end mr-[1.5vw]'>
            <div className='w-[4.7917vw] h-[6.5972vw] bg-[#7515D4] '/>
            <div className='w-[4.7917vw] h-[9.4444vw] bg-[#7A28CB] '/>
            <div className='w-[4.7917vw] h-[11.5278vw] bg-[#9337EE] '/>
          </div>
          

        </div>

      </div>
    </div>
  )
}

export default heroSection
