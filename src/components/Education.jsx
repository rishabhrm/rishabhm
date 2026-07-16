import React from 'react'
import BlurFade from './ui/blur-fade'
import Image from 'next/image'


const Education = () => {
    const experiences = [
        {
            logo: "/assets/rku.png",
            company_name: "RK University, Rajkot",
            title: "Bachelor of Technology, Computer Engineering",
            href: "https://www.rku.ac.in/",
            from_to_date: "Sep 2022 - May 2026"
        }
    ]
    return (
        <div className='my-3 w-full max-w-2xl mx-auto'>
            <BlurFade>
                <h2 className='font-bold text-xl'>Education</h2>
                {
                    experiences.map((item, index) => (
                        <div className='flex justify-between items-center mb-6 mt-4'>
                            <div className=' flex items-center' key={index}>
                                <a href={item.href} target='_blank'>
                                    <Image src={item.logo} alt={item.company_name} width={40} height={40} className='rounded-md mr-3 mt-1' />
                                </a>
                                <div>
                                    <h3>{item.company_name}</h3>
                                    <p className='text-sm dark:text-white/70 text-black/70'>{item.title}</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-sm dark:text-white/40 text-black/40'>{item.from_to_date}</p>
                            </div>
                        </div>
                    ))

                }

            </BlurFade >
        </div >
    )
}

export default Education