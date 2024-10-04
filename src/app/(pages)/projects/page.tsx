import { H1 } from "@/app/components/headings/h1";
import { NavBar } from "@/app/components/nav_bar";
import { ProjectCard } from "./components/project_card/project_card";
import { Project } from "./project";
import { Footer } from "@/app/components/footer/footer";

export default function ProjectsPage() {
  return (
    <>
      <NavBar />
      
      <main className="m-auto max-w-7xl py-32">
        <H1>Projects</H1>
        
        <p className="mt-4">
          I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, 
          so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-4">
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
              />
            )
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
}