import { Button } from "@/app/components/button/button";
import { IconButton } from "@/app/components/icon_button";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { DiPostgresql } from "react-icons/di";
import { FaAws, FaExternalLinkAlt, FaGithub, FaMusic, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { Technology } from "../../project";

export interface ProjectCardProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {
  readonly index: number;
  readonly name: string;
  readonly description: ReactNode; 
  readonly technologies: Technology[];
  readonly githubUrl: string | null;
  readonly liveUrl: string | null;
  readonly videoUrl: string | null;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div {...props} className="bg-neutral-800 bg-opacity-40 hover:outline outline-neutral-500 rounded-md p-4 transition-all">
      <div className="flex items-start">
        <div className="flex-shrink-0 flex size-20 bg-neutral-800 bg-opacity-60 rounded-md p-4 justify-center items-center">
          <FaMusic className={`size-full ${projectIconColors[props.index]}` }/>
        </div>
        
        <div className="ms-4">
          <p className="font-mono font-extra-bold text-white">{props.name}</p>
          
          <div className="mt-1">
            {props.description}
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between items-center">
        <div className="flex items-center">
          {props.technologies.map(
            (element, index) => <ProjectTechnologyIcon key={element} className={(index !== 0) ? "m-2" : undefined} iconBuilder={mapProjectTechnologyEnumToIcon(element)} />
          )}
        </div>

        <div className="flex items-center">
          {(props.githubUrl) ? 
              <a href={props.githubUrl}>
                <IconButton iconBuilder={(className) => <FaGithub className={className} />} />
              </a> 
              : undefined}
          
          {(props.liveUrl) ?
              <Button className="min-w-24 min-h-8 rounded-md ms-2 bg-neutral-800 bg-opacity-70 flex justify-center items-center">
                  <FaExternalLinkAlt /> <span className="ms-2">Live Url</span>
              </Button>
              : undefined}
        </div>
      </div>
    </div>
  );
}

export function ProjectTechnologyIcon(props: {iconBuilder: (className: string) => ReactNode, className?: string}): ReactNode {
  return (
    <div className={`flex size-8 rounded-md bg-neutral-800 bg-opacity-70 p-1 justify-center items-center transition:all ${props.className}`}>
      {props.iconBuilder("size-full")}
    </div>
  );
}

function mapProjectTechnologyEnumToIcon(enumValue: Technology): (className: string) => ReactNode {
  switch(enumValue) {
    case Technology.aws: return (className) => <FaAws className={className} />;
    case Technology.nextJs: return (className) => <RiNextjsFill className={className} />;
    case Technology.postgreSql: return (className) => <DiPostgresql className={className} />;
    case Technology.reactJs: return (className) => <FaReact className={className} />
  }
}

const projectIconColors: string[] = [
  "text-red-500",
  "text-green-500",
  "text-blue-500",
  "text-yellow-500",
  "text-purple-500",
  "text-orange-500",
];