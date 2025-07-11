import React from 'react'
import Image from 'next/image'

const teamData = [
    {
        name: 'Divyansh Nigam',
        role: 'Co-Founder & CEO',
        image: '/images/contactUs/divyanshNigam.png'
    },
    {
        name: 'Utkarsh Saxena',
        role: 'Co-Founder & CTO',
        image: '/images/contactUs/utkarshSaxena.png'
    },
    {
        name: 'Nawtej Gaikwad',
        role: 'Co-Founder & CFO',
        image: '/images/contactUs/nawtejGaikwad.png'
    },
    {
        name: 'Shivam Kumar',
        role: 'Co-Founder & COO',
        image: '/images/contactUs/shivamKumar.png'
    },
]

const TeamSection = () => {
  return (
    <div className='py-[7vw] px-[10vw] bg-white flex flex-col gap-[5vw]'>
        <div className='flex flex-col gap-[1.5vw] w-[48vw] mx-auto'>
            <h2 className='text-center text-h2Text'>The Minds Behind the Magic</h2>
            <p className='text-center text-mediumText '>A team of creators, coders, strategists, and storytellers — driven by clarity, curiosity, and craft. We keep it small, skilled, and scalable. </p>
        </div>
        <div className='flex flex-row gap-[1.875vw] mx-auto '>
        {teamData.map((item, index) => (
            <div key={index} className='rounded-[.75vw] '>
                <Image src={item.image} alt={item.name} width={300} height={300} className='w-[14.4375vw] h-[14.4375vw]' />
                <div className='px-[.5vw] pt-[.5vw]'>
                    <p className='text-h6Text font-semibold leading-[150%]'>{item.name}</p>
                    <p className='text-h6Text leading-[150%]'>{item.role}</p>
                </div>
            </div>
        ))}
        </div> 
        <div className='w-[30.125vw] mx-auto flex flex-col'>
            <h3 className='text-h4Text font-semibold leading-[150%] text-center pb-[1vw]'>We&apos;re hiring!</h3>
            <p className='text-h6Text leading-[150%] text-center pb-[1.5vw]' >We want freelance developers, UX designers, social media managers, content creators, video editors.</p>
            <button className=' border w-min whitespace-nowrap mx-auto text-black px-[1.5vw] py-[.75vw] rounded-[3.125vw] text-regularText'>Open Positions</button>
        </div>
    </div>
  )
}

export default TeamSection 
