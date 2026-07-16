import React from 'react'
import BlurFade from './ui/blur-fade'

const About = () => {
    return (
        <div className='w-full max-w-2xl mx-auto'>
            <BlurFade>
                <h2 className='font-bold text-xl'>About</h2>
                <div className='my-3'>
                    <p class="pb-3">I'm a Full Stack Engineer who loves turning complex problems into clean, functional experiences. I build responsive frontends using React.js, Redux, Tailwind CSS, and Figma, alongside Flutter for mobile apps, and architect scalable REST APIs across ecosystems like Node.js, Django, FastAPI, and Spring Boot, backed by PostgreSQL, MongoDB, and Firebase.</p>
                    <p class="pb-3">Recently, I've also focused heavily on driving digital transformation and enterprise automation. I build custom Zoho Creator applications, engineer robust CRM workflows using Deluge, design conversational chatbots, and develop complex API integrations with third-party platforms to streamline critical business operations.</p>
                    <p>Beyond core web development, I handle DevOps by containerizing applications with Docker and managing deployments. Lately, I've also been expanding my toolkit into AI and Data Science, exploring data manipulation, visualization, and machine learning using NumPy, Pandas, Seaborn, Matplotlib, and Scikit-learn.</p>
                </div>
            </BlurFade>
        </div>
    )
}

export default About