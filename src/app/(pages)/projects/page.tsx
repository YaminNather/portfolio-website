'use client';

import { H1 } from "@/app/components/headings/h1";
import { NavBar } from "@/app/components/nav_bar";
import { ProjectCard } from "./components/project_card/project_card";
import { Project } from "./project";
import { Footer } from "@/app/components/footer/footer";

export default function ProjectsPage() {
  return (
    <>
      <NavBar />
      
      <main className="m-auto max-w-7xl px-4 py-16">
        <H1 className="animate-slide-in-y-initial animate-slide-in-y">Projects</H1>
        
        <p className="mt-4 animate-slide-in-y-initial animate-slide-in-y animate-delay-200">
          I&apos;ve worked on tons of little projects over the years but these are the ones that I&apos;m most proud of. Many of them are open-source, 
          so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
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
