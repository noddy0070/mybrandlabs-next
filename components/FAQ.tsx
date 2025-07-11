"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const faq = [
    {
        question: "Why do I need both digital marketing & IT solutions?",
        answer: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights."
    },
    {
        question: "How soon can I expect results?",
        answer: "Campaigns start showing traction in 2–6 weeks depending on your goals and platforms."
    },
    {
        question: "Do you work with early-stage startups?",
        answer: "Absolutely. We offer flexible plans and MVP development to fit growing brands."
    },
    {
        question: "How do you measure ROI?",
        answer: "We use KPIs like CTR, CAC, engagement rates, sales funnel drop-offs & CRM integrations to track performance."
    },
]

const FAQ = () => {
    const [selected,setSelected]=useState(0)
    const toggle=(i:number)=>{
        if (selected==i){
            return setSelected(0)
        }
        setSelected(i)
    }
  return (
    <div className='bg-[#F3F3F3] w-full '>
        <div className='m-[1.1111vw] py-[4.5833vw] px-[5.5556vw] flex gap-[6.25vw] bg-white rounded-[1.9444vw]'>
            <div className='flex flex-col gap-[3.3333vw] w-[39.6528vw] '>
                <h2 className='text-h2Text font-bold'>Frequently Asked Questions</h2>
                <p className='text-regularText font-medium text-[#878C91]'>
                As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
                </p>
                <div className='flex items-center gap-[3.3333vw] '>
                    <button className='px-[1.9792vw] py-[1.1806vw] border-[.1389vw] border-black rounded-[3.4722vw] text-regularText font-medium'> More Questions</button>
                    <span className='text-regularText font-medium underline'>Contact Us</span>
                </div>
            </div>
            <div className='w-[43.5417vw] '>
                {faq.map((item, index) => (
                    <div key={index} className={`flex flex-col  border-b-[.1389vw] border-black py-[1.8056vw] px-[1.6667vw] ${index === 0 ? 'border-t-[.1389vw]' : ''}`}>
                        <div className='relative flex items-center justify-between ' onClick={()=>toggle(index)}>
                            <h3 className='text-h5Text font-semibold w-[31.1111vw]'>{item.question}</h3>
                            <div className='relative w-[1.6667vw] h-[1.6667vw]'>
                                <Image src="/icons/minus.svg" alt="arrow-right" className={`absolute top-0 left-0 w-[1.6667vw] h-[1.6667vw] duration-300 transition-all ${selected==index ?'rotate-180':'rotate-0'}`} width={24} height={24} />
                                <Image src="/icons/minus.svg" alt="arrow-right" className={`absolute top-0 left-0 w-[1.6667vw] h-[1.6667vw] duration-300 transition-all ${selected==index ?'rotate-270':'rotate-0'}`}  width={24} height={24} />
                            </div>
                        </div>
                        <p className={`${selected === index ? 'content show' : 'content'} text-regularText font-medium text-[#878C91]`}>{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}
export default FAQ
