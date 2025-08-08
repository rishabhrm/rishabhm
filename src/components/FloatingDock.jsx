"use client"
import React from "react";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX, 
    IconHome,
    IconBrandBluesky,
} from "@tabler/icons-react";
import { FaMedium } from "react-icons/fa6";
import { FloatingDock } from "./ui/floating-dock";
import { ModeToggle } from "./mode-toggle";
import { FileUser } from "lucide-react";

export function FloatingDockDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },
        {
            title: "Blogs",
            icon: (
                <FaMedium className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://medium.com/@rishabhmx",
        },
        // {
        //     title: "Resume",
        //     icon: (
        //         <FileUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        //     ),
        //     href: "https://drive.google.com/file/",
        // },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/rishabhmx",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/rishabhrm",
        },
        {
            title: "Bluesky",
            icon: (
                <IconBrandBluesky className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://bsky.app/profile/",
        },
        {
            title: "Mode",
            icon: (
                <ModeToggle />
            ),
            href: ""
        }
    ];
    return (
        (<div className="flex fixed w-full">
            <FloatingDock
                // only for demo, remove for production
                // mobileClassName="sm:block"
                items={links}
                className="left-1/2 transform -translate-x-1/2"
            />
        </div>)
    );
}
