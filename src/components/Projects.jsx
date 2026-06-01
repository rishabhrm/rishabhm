import React from 'react'
import HighLight from './HighLight'
import ProjectsCard from './ProjectsCard'
import byteScreen from '../../public/assets/0byte.jpeg'
import solPayReady from '../../public/assets/solpay-ready.jpeg'

const Projects = () => {
  const myProjects = [
    {
    "id": 1,
    "title": "Bizflow ERP",
    "monogramText": "BF",
    "description": "It is a full-stack enterprise resource planning solution built to streamline core business operations. It features centralized interactive dashboards, a secure Node.js backend with robust role-based access control, and optimized NoSQL database schemas.",
    "tags": [
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind"
    ],
    "link": "https://example.com/bizflow-live",
    "githubLink": "https://github.com/rishabhrm/bizflow"
  },
      {
    "id": 1,
    "title": "Bizflow ERP",
    "monogramText": "BF",
    "description": "It is a full-stack enterprise resource planning solution built to streamline core business operations. It features centralized interactive dashboards, a secure Node.js backend with robust role-based access control, and optimized NoSQL database schemas.",
    "tags": [
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind"
    ],
    "link": "https://example.com/bizflow-live",
    "githubLink": "https://github.com/rishabhrm/bizflow"
  },
  {
    "id": 3,
    "title": "Pantripick Grocery",
    "monogramText": "PP",
    "description": "It is a comprehensive grocery e-commerce platform that includes category-based product listings, dynamic cart management, and seamless checkout flows. It is powered by scalable REST APIs and secure JWT authentication.",
    "tags": [
      "React.js",
      "Express.js",
      "PostgreSQL",
      "JWT"
    ],
    "link": "https://example.com/pantripick-live",
    "githubLink": "https://github.com/rishabhrm/pantripick"
  },
 
   {
    "id": 4,
    "title": "Showcase",
    "monogramText": "SC",
    "description": "It allows users to explore movies, TV shows, and actors with personalized features. Create custom tracking lists, write reviews, browse detailed information, and manage your profile seamlessly.",
    "tags": [
      "Flutter",
      "Firebase",
      "Provider"
    ],
    "link": "https://kizoku.vercel.app/",
    "githubLink": "https://github.com/rishabhrm/showcase"
  },
  {
    "id": 5,
    "title": "Drive Rental",
    "monogramText": "DR",
    "description": "A feature-rich vehicle rental platform designed for a seamless user experience. It features advanced search filtering, responsive micro-interactions for vehicle browsing, and a dynamic availability system to streamline the rental booking process.",
    "tags": [
      "React.js",
      "Chakra UI",
      "Laravel"
    ],
    "link": "https://example.com/drive-rental-live",
    "githubLink": "https://github.com/rishabhrm/drive-rental"
},
  {
    "id": 6,
    "title": "Barely 75",
    "monogramText": "B75",
    "description": "It is a mobile application designed to help students effortlessly manage and monitor class attendance. Maintain the golden 75% benchmark and stay on top of subject-wise stats with an intuitive interface.",
    "tags": [
      "Flutter",
      "Dart",
      "GetX",
      "Firebase"
    ],
    "link": "https://barely-75-web.vercel.app/",
    "githubLink": "https://github.com/rishabhrm/barely-75"
  },
 {
    "id": 7,
    "title": "Kizuna",
    "monogramText": "KZ",
    "description": "It is a real-time chat application built with WebSockets to enable seamless, instant messaging. The platform integrates Cloudinary for efficient media sharing and features a highly responsive, modern interface.",
    "tags": [
      "React",
      "SocketIO",
      "Cloudinary"
    ],
    "link": "https://kizuna-frontend.vercel.app/",
    "githubLink": "https://github.com/rishabhrm/kizuna-frontend"
  },
  {
    "id": 8,
    "title": "Noughts & Crosses",
    "monogramText": "NC",
    "description": "It is a classic Tic-Tac-Toe game implemented with a wonderful and highly interactive UI design. Built completely from scratch using core web technologies, it offers a smooth, lightweight gaming experience.",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "link": "https://noughts-crosses-five.vercel.app/",
    "githubLink": "https://github.com/rishabhrm/noughts-crosses/"
  }
]
  return (
    <div className='my-8'>
      <HighLight text={"My Projects"} />
      <h1 className='mt-8 whitespace-pre-wrap bg-gradient-to-br bg-clip-text lg:text-5xl md:text-4xl leading-none text-center text-black dark:text-white font-semibold tracking-tight text-balance text-3xl translate-y-[-1rem] animate-fade-in'>Check out my latest work</h1>
      <div className='max-w-lg text-center mx-auto my-3'>
        <p className='text-xl dark:text-white/50 text-black/50 font-light'>Explore a selection of my best web/mobile projects, ranging from sleek websites to complex applications.</p>
      </div>
      {/* This will contain the projects */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
        {myProjects.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects