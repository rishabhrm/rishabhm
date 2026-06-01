"use client";

import React, { useState } from 'react';

export default function ProjectsCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    title = "Project Title",
    description = "It does something amazing.",
    tags = ["Flutter", "Dart"],
    link,       
    githubLink, 
    monogramText, 
  } = project;

  const getMonogram = (name) => {
    if (!name) return "??";
    const words = name.split(" ");
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const displayMonogram = monogramText || getMonogram(title);

  return (
    <div className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white transition-colors hover:border-black dark:border-neutral-800 dark:bg-black dark:hover:border-white">
      
      {/* Top Section */}
      <div className="flex h-32 w-full items-center justify-start border-b border-neutral-100 bg-neutral-50 px-6 dark:border-neutral-900 dark:bg-neutral-950">
        <span className="select-none text-5xl font-black tracking-tighter text-neutral-400 dark:text-neutral-500">
          {displayMonogram}
        </span>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        
        {/* Title & Description */}
        <div>
          <h3 className="text-xl font-bold tracking-tight text-black dark:text-white">
            {title}
          </h3>
          <div className="mt-2">
            <p 
              className={`text-sm leading-relaxed text-neutral-600 transition-all dark:text-neutral-400 ${
                isExpanded ? "" : "min-h-[4.5rem] line-clamp-3"
              }`}
            >
              {description}
            </p>
            {/* Expand/Collapse Arrow Button */}
            {description.length > 120 && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 flex items-center text-xs font-semibold text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                {isExpanded ? 'Collapse ↑' : 'Read more ↘'}
              </button>
            )}
          </div>
        </div>

        {/* Tech Stack Metadata Grid */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="rounded-sm border border-neutral-200 bg-transparent px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-black dark:border-neutral-800 dark:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex w-full items-center gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-900">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Website
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-900"
            >
              GitHub
            </a>
          )}
        </div>
        
      </div>
    </div>
  );
}