import React from 'react'
import Image from 'next/image'
const heroSection = () => {
  return (
    <div className='flex gap-[10px]'>
      <div className='flex flex-col  gap-[48px] w-[700px]'>
        <h1 className='text-h0Text font-bold leading-[110%]'>
        Stay ahead of the curve with our forward-thinking 
        </h1>
        <p className='text-regularText leading-[150%] font-medium text-[#878C91]'>
        We are a results-driven agency blending digital marketing and IT solutions to help brands grow faster and smarter. Welcome to where innovation meets execution.
        </p>
        <div className='flex gap-[56px]  items-center'>
            <button className='bg-black text-white px-[32px] py-[16px] rounded-[70px] flex items-center gap-[42px]'>
                <span className='text-regularText font-semibold'>Schedule Call</span>
                <Image src="../icons/arrow-right.svg" alt="arrow-right" width={24} height={24} className='w-[24px] h-[24px]' />
            </button>
            <span className='underline text-regularText  font-semibold text-[#010205]'>View Case Studies</span>
        </div>
      </div>
    </div>
  )
}

export default heroSection
