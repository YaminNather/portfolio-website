import { IconButton } from "@/app/components/icon_button";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { DiFirebase, DiPostgresql } from "react-icons/di";
import { FaAws, FaEye, FaGithub, FaReact, FaUnity } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { Technology } from "../../project";
import { SiArduino } from "react-icons/si";
import Image, { StaticImageData } from "next/image";

export interface ProjectCardProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {
  readonly index: number;
  readonly name: string;
  readonly description: ReactNode; 
  readonly technologies: Technology[];
  readonly githubUrl: string | null;
  readonly liveUrl: string | null;
  readonly videoUrl: string | null;
  readonly thumbnail: StaticImageData;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div>
      <div className="relative h-64">
        <Image src={props.thumbnail} alt={props.name} className="h-full rounded-md object-cover" />
        
        <div className="absolute left-0 top-0 flex w-full h-full opacity-0 hover:opacity-100 bg-black bg-opacity-80 justify-center items-center transition">
          <div className="flex items-center">
            {(props.githubUrl) ?
              <a href={props.githubUrl}>
                <IconButton iconBuilder={(className) => <FaGithub className={className} />} />
              </a>
              : undefined}

            {(props.liveUrl) ?
              <a href={props.liveUrl}>
                <IconButton className="ms-4" iconBuilder={(className) => <FaEye className={className} />} />
              </a>
              : undefined}
          </div>
        </div>
      </div>
      
      <div className="mt-2 flex items-center">
        {props.technologies.map(
          (element, index) => <ProjectTechnologyIcon key={element} className={(index !== 0) ? "m-2" : undefined} iconBuilder={mapProjectTechnologyEnumToIcon(element)} />
        )}
      </div>
      
      <p className="mt-4 text-white font-bold">{props.name}</p>

      <p className="mt-2 h-16">{props.description}</p>
    </div>
  );


  // return (
  //   <div {...props} className="flex bg-neutral-800 bg-opacity-40 hover:outline outline-neutral-500 rounded-md p-4 flex-col transition-all">
  //     <div className="flex items-start">
  //       <div className="flex-shrink-0 flex size-20 bg-neutral-800 bg-opacity-60 rounded-md p-4 justify-center items-center">
  //         <FaMusic className={`size-full ${projectIconColors[props.index % projectIconColors.length]}` }/>
  //       </div>
        
  //       <div className="ms-4">
  //         <p className="font-mono font-extra-bold text-white">{props.name}</p>
          
  //         <div className="mt-1">
  //           {props.description}
  //         </div>
  //       </div>
  //     </div>

  //     <div className="flex-shrink-0 flex-grow" />
      
  //     <div className="mt-4 flex justify-between items-center">
  //       <div className="flex items-center">
  //         {props.technologies.map(
  //           (element, index) => <ProjectTechnologyIcon key={element} className={(index !== 0) ? "m-2" : undefined} iconBuilder={mapProjectTechnologyEnumToIcon(element)} />
  //         )}
  //       </div>

  //       <div className="flex items-center">
  //         {(props.githubUrl) ? 
  //           <a href={props.githubUrl}>
  //             <IconButton iconBuilder={(className) => <FaGithub className={className} />} />
  //           </a> 
  //           : undefined}
          
  //         {(props.liveUrl) ?
  //           <a href={props.liveUrl}>
  //             <Button className="min-w-24 min-h-8 rounded-md ms-2 bg-neutral-800 bg-opacity-70 flex justify-center items-center">
  //                 <FaExternalLinkAlt /> <span className="ms-2">Live Url</span>
  //             </Button>
  //           </a>
  //           : undefined}
  //       </div>
  //     </div>
  //   </div>
  // );
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
    case Technology.reactJs: return (className) => <FaReact className={className} />;
    case Technology.unity3D: return (className) => <FaUnity className={className} />;
    case Technology.arduino: return (className) => <SiArduino className={className} />;
    case Technology.firebase: return (className) => <DiFirebase className={className} />;
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