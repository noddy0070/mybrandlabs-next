import Image from 'next/image'
import React from 'react'
import { TransitionLink } from '../../utils/TransitionLink'

const categoriesData = [
    {
        id: 1,
        title: 'Brand Strategy',
        description: 'Position your business for clarity and impact with naming, messaging, and identity systems.',
        icon: '/icons/service/brandStrategy.svg',
    },
    {
        id: 2,
        title: 'UI/UX Design',
        description: 'Design experiences your users love — across web, mobile, and e-commerce platforms.',
        icon: '/icons/service/uiDesign.svg',
    },
    {
        id: 3,
        title: 'Web & App Development',
        description: 'End-to-end development using modern stacks — optimized for performance, scale, and security.',
        icon: '/icons/service/webDevelopment.svg',
    },
    {
        id: 4,
        title: 'Performance Marketing',
        description: 'ROI-driven ad campaigns on Google, Meta, and beyond — built to convert, tracked to grow.',
        icon: '/icons/service/performanceMarketing.svg',
    },
    {
        id: 5,
        title: 'SEO & Content Marketing',
        description: 'ROI-driven ad campaigns on Google, Meta, and beyond — built to convert, tracked to grow.',
        icon: '/icons/service/seoMarketing.svg',
    },
    {
        id: 6,
        title: 'Social Media & Community',
        description: 'Full-spectrum content planning, design, and engagement for stronger online presence.',
        icon: '/icons/service/socialMedia.svg',
    },
    
]

const CategoriesSection = () => {
  return (
    <div className='bg-[#F3F3F3] p-[1vw] relative'>
        <div className='bg-white py-[5vw] px-[11.5vw] z-10 relative'>
            <h3 className='text-h2Text text-black font-semibold leading-[110%] pb-[2.625vw] text-center'>Service Categories</h3>
            <div className='flex flex-wrap gap-x-[1.5vw] gap-y-[4vw]  py-[4vw] justify-center'>
                {categoriesData.map((item) => (
                    <div className='rounded-[1vw] py-[2vw] px-[1.5vw] border flex flex-col gap-[2vw] w-[21vw] '>
                    <div className='relative flex flex-col items-center justify-center w-[5.875vw] h-[5.875vw] rounded-full'>
                        <div className='absolute top-0 left-0 flex flex-col items-center justify-center bg-[url("/images/backgroundTexture.png")] opacity-[6%]  bg-cover bg-center w-[5.875vw] h-[5.875vw] rounded-full'/>
                        <Image src={item.icon} alt={item.title} width={48} height={48} className=' w-[2.5vw] h-[2.5vw]'/>
                    </div>
                    <div className='flex flex-col gap-[1vw]'>
                        <h4 className='text-h6Text text-black font-semibold leading-[110%]'>{item.title}</h4>
                        <p className='text-regularText text-[rgba(0,0,0,0.6)] font-light leading-[150%]'>{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
export default CategoriesSection
