import { Button } from "@/app/components/button/button";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { DiPostgresql } from "react-icons/di";
import { FaAws, FaExternalLinkAlt, FaGithub, FaMusic, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export interface ProjectCardProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {
  readonly index: number;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div {...props} className="bg-neutral-800 bg-opacity-40 hover:outline outline-neutral-500 rounded-md p-4 transition-all">
      <div className="flex items-start">
        <div className="flex-shrink-0 flex size-20 bg-neutral-800 bg-opacity-60 rounded-md p-4 justify-center items-center">
          <FaMusic className={`size-full ${projectIconColors[props.index]}` }/>
        </div>
        
        <div className="ms-4">
          <p className="font-mono font-extra-bold text-white">Currencee</p>
          
          <p className="mt-1">The world's most trusted, fast and secure currency converter</p>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex size-8 bg-neutral-800 bg-opacity-70 rounded-md p-1 justify-center items-center">
            <RiNextjsFill className="size-full" />
          </div>
          
          <div className="ms-2 flex-shrink-0 flex size-8 bg-neutral-800 bg-opacity-70 rounded-md p-1 justify-center items-center">
            <FaAws className="size-full" />
          </div>
          
          <div className="ms-2 flex-shrink-0 flex size-8 bg-neutral-800 bg-opacity-70 rounded-md p-1 justify-center items-center">
            <DiPostgresql className="size-full" />
          </div>
          
        </div>

        <div className="flex items-center">
          <div className="flex-shrink-0 flex size-8 bg-neutral-800 bg-opacity-70 rounded-md p-1 justify-center items-center">
            <FaGithub className="size-full" />
          </div>

          <Button className="min-w-24 min-h-8 rounded-md ms-2 bg-neutral-800 bg-opacity-70 flex justify-center items-center">
            <FaExternalLinkAlt /> <span className="ms-2">Live Url</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

const projectIconColors: string[] = [
  "text-red-500",
  "text-green-500",
  "text-blue-500",
  "text-yellow-500",
  "text-purple-500",
  "text-orange-500",
];