"use client"
import React from "react";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconHome
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";
import { ModeToggle } from "./mode-toggle";

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
            href: "https://x.com/",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/",
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
                items={links}
                className="left-1/2 transform -translate-x-1/2"
            />
        </div>)
    );
}
