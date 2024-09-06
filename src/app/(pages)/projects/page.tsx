import { H1 } from "@/app/components/headings/h1";
import { NavBar } from "@/app/components/nav_bar";
import { ProjectCard } from "./components/project_card/project_card";

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

        <div className="mt-16 grid grid-cols-3 gap-4">
          {new Array(6).fill(0).map(
            (element) => <ProjectCard key={element} />
          )}
        </div>
      </main>
    </>
  );
}