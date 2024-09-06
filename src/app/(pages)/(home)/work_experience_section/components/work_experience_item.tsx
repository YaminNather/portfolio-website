import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { DateRange } from "@/types/date_range";

export interface WorkExperienceItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  readonly company: string;
  readonly role: string;
  readonly location: string;
  readonly icon: StaticImageData;
  readonly timePeriod: DateRange;
  readonly description: (className: string) => ReactNode;
}

export function WorkExperienceItem(props: WorkExperienceItemProps) {
  return (
    <div {...props} className={`flex ${props.className}`}>
      <div className="flex flex-col items-center">
        <div className="size-20 flex rounded-md border border-neutral-800 bg-neutral-800 bg-opacity-50 justify-center items-center p-3">
          <Image src={props.icon} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="w-[1px] flex-grow bg-neutral-800" />
      </div>

      <div className="ms-8 w-6/12 pb-16">
        <p className="font-mono text-white font-extrabold text-2xl">{props.role}</p>
        
        <p className="text-white">{props.company}, {props.location}</p>
        
        <p className="mt-2 text-neutral-500">{props.timePeriod.toLocaleDateString("en-IN", {year: 'numeric', month: 'long'})}</p>
        
        {props.description("mt-4")}
      </div>
    </div>
  );
}