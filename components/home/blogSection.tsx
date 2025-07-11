import React from 'react'

const blogData=[
    {
        id:1,
        color:"#F2F3D9",
        title:"How a Digital Marketing Agency Can Boost Your Business",
        description:"We are the top digital marketing agency for  branding corp. We offer a full rang  engine ....",
    },
    {
        id:2,
        color:"#32292F",
        title:"The Latest Trends and Strategies with a Digital Marketing Agency",
        description:"Working with this digital marketing agency has been a true partnership. They have taken the time to understand our business and industry",
    },
    {
        id:3,
        color:"#7A28CB",
        title:"Maximizing ROI with the Expertise of a Digital Marketing Agency",
        description:"What sets this digital marketing agency apart is their commitment to transparency and collaboration. They keep us informed every step of the way,",
    },
]

const BlogSection = () => {
  return (
    <div className='relative px-[5.5556vw] pb-[8.8194vw] pt-[4.8611vw] flex flex-col gap-[4.4444vw] '>

        <div className='flex flex-row gap-[2.7083vw]'>
            <h2 className='w-[47.5vw] text-h2Text font-semibold'>Digital Marketing & Tech Solutions That Grow Traffic & Increase Revenue</h2>
            <div className='flex flex-col gap-[3.3333vw] w-[38.6806vw] '>
                <p className='text-regularText font-medium text-[#878C91]'>We are a the marketing agency for  your branding needs. We offer a full range of services to help clients improve their digital presence and drive more traction.</p>
                <button className='px-[2.9167vw] py-[1.1806vw] w-min line-clamp-1 whitespace-nowrap border-[.1389vw] border-black rounded-[3.4722vw] text-regularText font-medium'>See more</button>
            </div>
        </div>
        <div className='flex flex-row gap-[1.6667vw]'>
            {blogData.map((item)=>(
            <div key={item.id} className='p-[2.2222vw] bg-white rounded-[1.3889vw] w-[28.4722vw]'>
                <div className='flex flex-row justify-between mb-[1.6667vw]'>
                    <div className={`flex w-[.9722vw] h-[.9722vw] rounded-full`} style={{backgroundColor:item.color}}/>
                    <span className='text-regularText font-medium text-[#878C91]'>5 min read</span>
                </div>
                <h5 className='text-h4Text font-semibold leading-[140%] pb-[3.8889vw]'>{item.title}</h5>
                <div className='flex flex-row justify-between '>
                    <p className='w-[15.2778vw] text-regularText font-medium text-[#878C91] line-clamp-3'>{item.description}</p>
                    <div className='group'>
                    <button className='px-[2.2222vw] cursor-pointer py-[1.1111vw] transition-colors duration-300 bg-white border-[.1389vw] border-black hover:bg-black rounded-[4.8611vw]'>
                    <svg className='w-[1.6667vw] h-[1.6667vw] transition-colors duration-300 text-black group-hover:text-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    </button>
                    </div>
                </div>
            </div>
            ))}
        </div>
      
    </div>
  )
}

export default BlogSection
