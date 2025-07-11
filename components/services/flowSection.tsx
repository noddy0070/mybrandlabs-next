import React from 'react'
import Image from 'next/image'

const FlowSection = () => {
  return (
    <div className='bg-[#F3F3F3] p-[16px] relative'>
        <div className='bg-white py-[80px] px-[160px] z-10 relative'>
            <h3 className='text-h2Text text-[rgba(1,2,5,1)] font-semibold leading-[110%] pb-[64px] text-center'>Simple Ethical Flow</h3>
            <div className='flex justify-between items-center'>
                <Image src="/icons/arrow.svg" className='w-[78px] h-[17px]' alt="flow1" width={100} height={100} />
                <span className='text-h5Text font-semibold leading-[130%]'>Define</span>
                <Image src="/icons/arrow.svg" className='w-[78px] h-[17px]' alt="flow1" width={100} height={100} />
                <span className='text-h5Text font-semibold leading-[130%]'>Design</span>
                <Image src="/icons/arrow.svg" className='w-[78px] h-[17px]' alt="flow1" width={100} height={100} />
                <span className='text-h5Text font-semibold leading-[130%]'>Deploy</span>
                <Image src="/icons/arrow.svg" className='w-[78px] h-[17px]' alt="flow1" width={100} height={100} />
                <span className='text-h5Text font-semibold leading-[130%]'>Optimize</span>
            </div>
        </div>
      
    </div>
  )
}

export default FlowSection
