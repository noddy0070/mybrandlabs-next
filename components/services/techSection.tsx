import React from 'react'
import Image from 'next/image'
const techData = ['postgressSql', 'mysql', 'docker', 'react', 'gitlab', 'aws', 'javascript', 'python', 'django','java','angular','figma',]
const TechSection = () => {
  return (
    <div className='bg-[#F3F3F3] px-[1vw] pt-[1vw] relative'>
    <div className='bg-white py-[5vw] px-[10vw] z-10 relative'>
        <h3 className='text-h2Text text-[rgba(1,2,5,1)] font-semibold leading-[110%] pb-[4vw] text-center'>Tech That We Use</h3>
        <div className='flex flex-wrap gap-[2vw] justify-center items-center'>    
            {techData.map((item) => (
                <div key={item} className='px-[2.625vw]'>
                <Image src={`/icons/logo/${item}.svg`} className='w-[3.5vw] h-[3.5vw]' alt="flow1" width={100} height={100} />
                </div>
            ))}
        </div>
    </div>
  
</div>
  )
}

export default TechSection
