import { OutlinedIconButton } from "@/app/components/icon_button/outlined_icon_button";
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from "react";
import {  FaEye, FaGithub } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { useIsVisible } from "@/app/hooks/use_is_visible/use_is_visible";
import { Technology } from "../../technology";
import { FaVideo } from "react-icons/fa6";

export interface ProjectCardProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {
  readonly index: number;
  readonly name: string;
  readonly description: ReactNode; 
  readonly technologies: Technology[];
  readonly githubUrl: string | null;
  readonly liveUrl: string | null;
  readonly videoUrl: string | null;
  readonly thumbnail: StaticImageData;
  
  readonly rowIndex: number;
}

export function ProjectCard(props: ProjectCardProps) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const isVisible = useIsVisible(element);

  return (
    <div 
      ref={(element) => setElement(element)} 
      className={`animate-slide-in-y-initial ${(isVisible) ? 'animate-slide-in-y' : ''} ${entryAnimationDelayClassName(props.rowIndex)}`}
    >
      <div className="relative h-64 rounded-md overflow-clip animate-slide-in-y-initial animate-slide-in-y">
        <Image src={props.thumbnail} alt={props.name} className="h-full object-cover" />
        
        <div className="absolute left-0 top-0 flex w-full h-full opacity-0 hover:opacity-100 bg-black bg-opacity-80 justify-center items-center transition">
          <div className="flex items-center">
            {(props.githubUrl) ?
              <a href={props.githubUrl} target="_blank">
                <OutlinedIconButton iconBuilder={(className) => <FaGithub className={className} />} />
              </a>
              : undefined
            }

            {(props.liveUrl) ?
              <a href={props.liveUrl} target="_blank">
                <OutlinedIconButton className="ms-4" iconBuilder={(className) => <FaEye className={className} />} />
              </a>
              : undefined
            }

            {(props.videoUrl) ?
              <a href={props.videoUrl} target="_blank">
                <OutlinedIconButton className="ms-4" iconBuilder={(className) => <FaVideo className={className} />} />
              </a>
              : undefined
            }
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div className="inline-flex items-center gap-4">
          {(props.githubUrl)
            ? <a href={props.githubUrl} target="_blank">
                <OutlinedIconButton iconBuilder={(className) => <FaGithub className={className} />} /> 
              </a>
            : undefined 
          }
          {(props.liveUrl) 
            ? <a href={props.liveUrl} target="_blank">
                <OutlinedIconButton iconBuilder={(className) => <FaEye className={className} />} />
              </a> 
            : undefined
          }

          {(props.videoUrl) ?
            <a href={props.videoUrl} target="_blank">
              <OutlinedIconButton className="ms-4" iconBuilder={(className) => <FaVideo className={className} />} />
            </a>
            : undefined
          }
        </div>

        <div className="inline-flex items-center">
          {props.technologies.map(
            (element, index) => <ProjectTechnologyIcon key={element.name} className={(index !== 0) ? "ms-2" : undefined} iconBuilder={element.logo} />
          )}
        </div>
      </div>
      
      <a href={props.liveUrl ?? props.githubUrl ?? props.videoUrl ?? undefined} target="_blank" className="inline-flex mt-4 text-white hover:text-green-500 font-bold transition">{props.name}</a>

      <div className="mt-2">{props.description}</div>
    </div>
  );
}

export function ProjectTechnologyIcon(props: {iconBuilder: (className?: string) => ReactNode, className?: string}): ReactNode {
  return (
    <div className={`flex size-8 rounded-md bg-neutral-800 bg-opacity-70 p-1 justify-center items-center transition:all ${props.className}`}>
      {props.iconBuilder("size-full")}
    </div>
  );
}

function entryAnimationDelayClassName(rowIndex: number): string {
  if (rowIndex === 0) return '';

  return `animate-delay-${rowIndex}00`;
}
