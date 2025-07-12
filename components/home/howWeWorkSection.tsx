import React from 'react'

const HowWeWorkSection = () => {
  return (
    <div className='px-[5.5556vw] pt-[4.8611vw] pb-[6.1806vw] flex flex-col gap-[5vw] relative'>

        <div className='flex justify-center '>
            <h2 className='text-h2Text font-semibold w-[47.5vw] leading-[100%]'>
            Creative Tech Meets Digital<br/> Impact
            </h2>
            <p className='w-[38.6806vw] text-regularText font-medium text-[#878C91] leading-[180%] '>
            We&apos;re a passionate team of marketers, developers & designers helping brands stand out in the digital space. With hands-on experience across industries and tools, we offer future-ready solutions to meet your goals today.
            </p>
           
        </div>

        <div className='flex gap-[.8333vw]'>
            <div className="bg-[url('/images/home/howWeWorkBox.png')] flex flex-col bg-cover bg-center h-[26.5278vw] w-[30.4167vw] rounded-[2.0833vw]">
            <p className='text-testimonial font-bold text-white ml-[2.7778vw] mt-[2.7778vw] leading-[80%]'>15<span className='text-[#7A28CB]'>+</span></p>
            <p className='text-mediumText font-semibold text-[#878C91] ml-[2.7778vw] mt-[1.6667vw] leading-[100%]'>Project finished with superbly</p>
            <div className='mt-auto flex gap-[.4861vw] ml-[2.7778vw] mb-[2.7778vw]'>
                <div className='w-[4.8611vw] h-[4.8611vw] bg-[#FFFFFF] rounded-full bg-[url("/images/home/parth.png")] bg-cover bg-center'/>
                <div className='w-[4.8611vw] h-[4.8611vw] bg-[#FFFFFF] rounded-full bg-[url("/images/home/sanjay.png")] bg-cover bg-center'/>
                <div className='w-[4.8611vw] h-[4.8611vw] bg-[#FFFFFF] rounded-full bg-[url("/images/home/maidul.png")] bg-cover bg-center'/>
                <div className='w-[4.8611vw] h-[4.8611vw] bg-[#FFFFFF] rounded-full bg-[url("/images/home/mukesh.png")] bg-cover bg-center'/>
                <span className='text-h0Text font-bold text-white leading-[30%] my-auto'>+</span>
            </div>
            </div>
            <div className='relative w-[56.8056vw] h-[26.5278vw] bg-[rgba(0,0,0,0.2)] rounded-[2.0833vw] flex justify-center '>
                <h2 className='text-h1Text font-semibold  text-white leading-[140%] my-auto'>HOW WE WORK</h2>
                <div className='absolute flex items-center justify-center bottom-[-1.0417vw] right-[-1.3889vw] bg-[#7A28CB] rounded-full border-[.8333vw] border-white w-[11.3194vw] h-[11.3194vw]'>
                <svg  className='w-[2.5vw] h-[2.6389vw]' viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.2505 14.1472C33.131 14.6155 33.8676 15.3145 34.3812 16.1693C34.8948 17.0242 35.1662 18.0027 35.1662 19C35.1662 19.9973 34.8948 20.9759 34.3812 21.8307C33.8676 22.6856 33.131 23.3846 32.2505 23.8529L8.76182 36.6257C4.97965 38.6827 0.333984 36.006 0.333984 31.7747V6.2272C0.333984 1.9922 4.97965 -0.682632 8.76182 1.37253L32.2505 14.1472Z" fill="black"/>
                    </svg>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default HowWeWorkSection
