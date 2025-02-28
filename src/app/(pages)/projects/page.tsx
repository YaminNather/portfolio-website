'use client';

import { useState } from "react";

import { H1 } from "@/app/components/headings/h1";
import { NavBar } from "@/app/components/nav_bar";
import { ProjectCard } from "./components/project_card/project_card";
import { Project } from "./project";
import { Footer } from "@/app/components/footer/footer";
import { NavigationDrawer } from "@/app/components/navigation_drawer/navigation_drawer";
import { Link } from "@/app/components/link/link";

export default function ProjectsPage() {
  const [navigationDrawerIsOpen, setNavigationDrawerIsOpen] = useState<boolean>(false);

  return (
    <>
      <NavBar onOpenNavigationDrawerButtonClicked={() => setNavigationDrawerIsOpen(true)} />

      <NavigationDrawer isOpen={navigationDrawerIsOpen} onClosed={() => setNavigationDrawerIsOpen(false)} />
      
      <main className="m-auto max-w-7xl px-4 py-16">
        <H1 className="animate-slide-in-y-initial animate-slide-in-y">Projects</H1>
        
        <p className="mt-4 animate-slide-in-y-initial animate-slide-in-y animate-delay-200">
					A showcase of my personal projects. Each reflects my problem-solving approach, technical expertise, and attention to detail.
					<br/>Feel free to explore and check out the code hosted on my <Link href="https://github.com/YaminNather">Github</Link> profile!
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          {Project.values.map(
            (element, index) => (
              <ProjectCard
                key={element.name} 
                index={index} 
                name={element.name} 
                description={element.description} 
                technologies={element.technologies} 
                githubUrl={element.githubUrl}
                liveUrl={element.liveUrl}
                videoUrl={element.videoUrl}
                thumbnail={element.thumbnail}
                rowIndex={index % 3}
              />
            )
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
}
