import React from 'react'
import BlurFade from './ui/blur-fade'

const About = () => {
    return (
        <div className='w-full max-w-2xl mx-auto'>
            <BlurFade>
                <h2 className='font-bold text-xl'>About</h2>
                <div className='my-3'>
                    <p class="pb-3">I'm a full-stack developer who enjoys building modern web and mobile apps using the MERN stack, Flutter, and sometimes Java Spring for backends with React projects. I've also worked on PHP and C# desktop apps, and usually use PostgreSQL or MongoDB for databases. Most of my work focuses on creating fast, reliable, and user-friendly applications.</p>
                    <p>Currently, I'm exploring DevOps to improve deployment workflows, and am curious about AI and its real-world uses. I love learning new tech, experimenting with ideas, and building projects that solve problems and make an impact — and Iim always open to exciting collaborations.</p>
                </div>
            </BlurFade>
        </div>
    )
}

export default About