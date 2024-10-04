"use client";

import { ReactNode, useState } from "react";

import { H1 } from "@/app/components/headings/h1";

import { WorkExperienceItem } from "./components/work_experience_item";
import { WorkExperience } from "./work_experience";
import { useIsVisible } from "@/app/hooks/use_is_visible/use_is_visible";

export function WorkExperienceSection(): ReactNode {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const isVisible = useIsVisible(element);

  return (
    <section id="projects" className="py-16">
      <H1 ref={(element) => setElement(element)}>Timeline</H1>

      {WorkExperience.values.map(
        (element, index) => (
          <WorkExperienceItem 
            key={element.company} 
            company={element.company} 
            icon={element.icon} 
            location={element.location}
            role={element.role} 
            timePeriod={element.timePeriod}
            description={element.description} 
            className={(index === 0) ? "mt-16" : undefined}
          />
        )
      )}
    </section>
  );
}