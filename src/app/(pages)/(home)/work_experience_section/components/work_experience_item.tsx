import { DetailedHTMLProps, HTMLAttributes, ReactNode, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { DateRange } from "@/types/date_range";
import { useIsVisible } from "@/app/hooks/use_is_visible/use_is_visible";

import styles from "./styles.module.scss";

export interface WorkExperienceItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  readonly company: string;
  readonly role: string;
  readonly location: string;
  readonly icon: StaticImageData;
  readonly timePeriod: DateRange;
  readonly description: (className: string) => ReactNode;
}

export function WorkExperienceItem(props: WorkExperienceItemProps) {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(element);

  return (
    <div ref={(element) => setElement(element)} {...props} className={`flex ${props.className}`}>
      <div className="flex flex-col items-center">
        <div className="size-20 flex rounded-md border border-neutral-800 bg-neutral-800 bg-opacity-50 justify-center items-center p-3">
          <Image src={props.icon} alt="" className="w-full h-full object-contain" />
        </div>

        <div className={`w-[2px] flex-grow bg-neutral-800 ${styles.line} ${(isVisible) ? styles.line_grow_animation : ""}`} />
      </div>

      <div className="ms-8 w-6/12 pb-16">
        <p className={`font-mono text-white font-extrabold text-2xl animate-slide-in-y-initial ${(isVisible) ? "animate-slide-in-y" : ""}`}>
          {props.role}
        </p>
        
        <p className={`text-white animate-slide-in-y-initial ${(isVisible) ? "animate-slide-in-y" : ""}`}>{props.company}, {props.location}</p>
        
        <p className={`mt-2 text-neutral-500 animate-slide-in-y-initial ${(isVisible) ? "animate-slide-in-y" : ""} animate-delay-100`}>
          {props.timePeriod.toLocaleDateString("en-IN", {year: 'numeric', month: 'long'})}
        </p>
        
        {props.description(`mt-4 animate-slide-in-y-initial ${(isVisible) ? "animate-slide-in-y" : ""} animate-delay-200`)}
      </div>
    </div>
  );
}