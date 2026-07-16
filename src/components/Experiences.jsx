"use client"
import React, { useState } from 'react'
import BlurFade from './ui/blur-fade'
import Image from 'next/image'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const Experiences = () => {
    const [openItems, setOpenItems] = useState({})
    const toggleItem = (index) => {
        setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
    }
    const experiences = [
        {
            logo: "/assets/coderack.png", 
            company_name: "Coderack IT Labs",
            title: "CRM Developer/Consultant",
            href: "https://www.coderack.net/",
            from_to_date: "Jun 2026 - Present",
            description: "Assisted in automating business processes by developing and configuring custom applications across the Zoho ecosystem, including Creator, CRM, and Books. Handled Deluge scripting to automate daily workflows, integrated third-party platforms like Shopify and Razorpay via REST APIs, and helped deploy Zoho SalesIQ chatbots to improve customer engagement. Working alongside the team, I contributed to streamlining client operations, lead management, and support handoffs across various projects."
        },
        {
            logo: "/assets/itsouls.png", 
            company_name: "ITsouls",
            title: "Full-Stack Developer Intern",
            href: "https://www.itsouls.com/",
            from_to_date: "Dec 2025 - Apr 2026",
            description: " Built a production-ready web application for QCFI Vadodara using React and Node.js, working closely with stakeholders to deliver features based on real-world needs. Handled the complete development process from understanding requirements and designing solutions to building, testing, and deploying the application. Improved a legacy ERP system by converting complex MS SQL stored procedures into structured Node.js REST APIs, making the system easier to maintain, faster to scale, and more flexible for future integrations. Solved integration challenges between legacy systems and modern APIs by optimizing queries and maintaining reliable data flow."
        }
    ]
    return (
        <div className='w-full max-w-2xl mx-auto'>
            <BlurFade>
                <h2 className='font-bold text-xl'>Work Experiences</h2>
                {
                    experiences.map((item, index) => (
                        <Collapsible key={index} className="mb-6 mt-4" open={openItems[index]} onOpenChange={() => toggleItem(index)} >
                            <div className='flex justify-between items-center'>
                                <div className='flex items-start'>
                                    <a href={item.href} target='_blank'>
                                        <Image src={item.logo} width={40} height={40} alt={`${item.company_name} logo`} className='rounded-md mr-3 mt-1' />
                                    </a>
                                    <div>
                                        <CollapsibleTrigger className="group flex items-center space-x-1">
                                            <h3 className='font-semibold'>{item.company_name}</h3>
                                            <ChevronRight
                                                className={cn(
                                                    'ml-1 transform transition-all duration-300 ease-in-out',
                                                    'opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0',
                                                    openItems[index] ? 'rotate-90' : 'rotate-0'
                                                )}
                                                size={18}
                                            />
                                        </CollapsibleTrigger>
                                        <p className='text-sm dark:text-white/70 text-black/70'>{item.title}</p>
                                    </div>
                                </div>
                                <p className='text-sm dark:text-white/40 text-black/40'>{item.from_to_date}</p>
                            </div>
                            <CollapsibleContent className="mt-2 ml-[52px]">
                                <p className="text-sm dark:text-white/80 text-black/80">{item.description}</p>
                            </CollapsibleContent>
                        </Collapsible>
                    ))

                }

            </BlurFade >
        </div >
    )
}

export default Experiences