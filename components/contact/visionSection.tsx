import React from 'react'

const VisionSection = () => {
  return (
    <div className='py-[7vw] px-[10vw] bg-[#F2F2F2] relative z-10'> 
        <p className='text-black text-center font-bold text-h5Text mb-[4vw]'>Our Vision</p>
        <div className='grid grid-cols-3 gap-[1vw]'>
            <div>
                <p className='text-black text-center font-semibold text-h5Text '>Methodology</p><br/>
                <p className='text-black text-center font-semibold text-h5Text '>Agile + structured documentation & DevOps approach for flexible yet secure & fast delivery.</p>
            </div>
            <div>
                <p className='text-black text-center font-semibold text-h5Text '>Communication</p><br/>
                <p className='text-black text-center font-semibold text-h5Text '>Dedicated project manager, frequent updates & regular stakeholder meetings.</p>
            </div>
            <div>
                <p className='text-black text-center font-semibold text-h5Text'>Approach</p><br/>
                <p className='text-black text-center font-semibold text-h5Text'>Tailored solutions for public sector impact — designed for scale, inclusion, and longevity and  ensuring solutions stay relevant for years.</p>
            </div>  
        </div>
      
    </div>
  )
}

export default VisionSection
