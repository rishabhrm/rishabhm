import Image from 'next/image'
import React from 'react'
import pfp from "../../public/assets/dp.jpg"
import BlurFade from './ui/blur-fade'
import { birthday } from '@/lib/utils'

const Title = () => {
    return (
        <div className='lg:mt-28 md:mt-28 mt-12 mb-10'>
            <BlurFade>
                <div className='flex justify-between items-center'>
                    {/* Left Section: Text */}
                    <div className='flex flex-col max-w-lg'>
                        <h1 className='pt-3 whitespace-pre-wrap bg-gradient-to-br bg-clip-text lg:text-6xl md:text-5xl leading-none text-black dark:text-white font-semibold tracking-tighter text-balance text-3xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]'>
                            hi, i'm rishabh
                        </h1>
                        <p className='lg:text-xl md:text-lg text-md dark:text-white/90 text-black/90'>
                            Full-Stack Developer | Exploring Cloud & AI
                        </p>
                    </div>

                    {/* Right Section: Profile Picture */}
                    <div className='relative flex-shrink-0'>
                        {birthday() && (
                            <div className='absolute z-10 right-[-10px] top-[-10px] text-4xl'>🎂</div>
                        )}
                        <Image
                            src={pfp}
                            alt='Profile picture'
                            className='rounded-full w-28 h-28 object-cover'
                        />
                    </div>
                </div>
            </BlurFade>
        </div>
    )
}

export default Title
