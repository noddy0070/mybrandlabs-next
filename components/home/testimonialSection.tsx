"use client";
import React, { useState } from 'react';
import Image from 'next/image';
const testimonials = [
  {
    text: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Parth Arora",
    role: "Owner Arora Opticals",
    avatar: "/images/home/avatar.png",
  },
  {
    text: "MBL's team is proactive and always ready with innovative solutions. Our brand visibility has increased significantly since we started working with them.",
    name: "Aisha Khan",
    role: "Marketing Lead, VisionCare",
    avatar: "/images/home/avatar2.png",
  },
  {
    text: "The attention to detail and personalized approach is what sets MBL apart. Highly recommended for anyone looking to grow their business.",
    name: "Rahul Mehta",
    role: "Founder, Mehta Eyewear",
    avatar: "/images/home/avatar3.png",
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#FAFAFA] pt-[7.9861vw] pb-[6.1806vw] flex flex-col w-auto gap-[5.1389vw] h-[37.7083vw]   overflow-hidden relative">
       <div className='absolute inset-0 bg-[url("/images/backgroundTexture.png")] bg-cover bg-center opacity-[6%] pointer-events-none z-0' />
      <div className="relative w-[100vw]  ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${testimonials.length * 100}%`,
            transform: `translateX(-${current * (100 / testimonials.length)}%)`,
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[88.8889vw] flex-shrink-0  mx-[5.5556vw]"
            >
              <div className=" leading-snug font-semibold text-h3Text text-black">
                <span className="font-serif mr-[.5556vw]">“</span>
                {testimonial.text}
                <span className="font-serif  ml-[.5556vw]">”</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation */}
      <div className='flex justify-center'>
        <div className='w-[20.8333vw] overflow-hidden ml-[5.5556vw]'>
      <div
          className="flex transition-transform overflow-hidden duration-500 ease-in-out"
          style={{
            width: `${testimonials.length * 100}%`,
            transform: `translateX(-${current * (100 / testimonials.length)}%)`,
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[20.8333vw] flex-shrink-0 overflow-hidden"
            >
              <div className="flex items-center gap-[1.6667vw]">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={70}
                  height={70}
                  className="w-[4.8611vw] h-[4.8611vw] rounded-full object-cover border border-gray-300"
                />
                <div>
                  <div className="font-bold text-h6Text">{testimonial.name}</div>
                  <div className="text-[#878C91] text-regularText font-medium">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      <div className="ml-auto flex items-center gap-[2.6389vw] mr-[5.5556vw]">
        <button
          className="px-[2.2222vw] py-[1.1111vw] group rounded-full  bg-transparent transition-colors duration-300 border-black border text-white hover:bg-black flex items-center justify-center "
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
           <svg className='w-[1.6667vw] h-[1.6667vw] transition-colors rotate-180 duration-300 text-black group-hover:text-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
        </button>
        <span className="text-regularText font-semibold" >
          <span className=''>{String(current + 1).padStart(2, '0')}</span><span className=' text-[rgba(1,2,4,.4)]'>/{String(testimonials.length).padStart(2, '0')}</span>
        </span>
        <button 
          className="px-[2.2222vw] py-[1.1111vw] group rounded-full bg-transparent transition-colors duration-300 border-black border text-white hover:bg-black flex items-center justify-center "
          onClick={handleNext}
          aria-label="Next testimonial"
        >
           <svg className='w-[1.6667vw] h-[1.6667vw] transition-colors duration-300 text-black group-hover:text-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default TestimonialSection;
