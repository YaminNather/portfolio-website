"use client";

import { ReactNode } from "react";

import { H1 } from "@/app/components/headings/h1";

import { WorkExperienceItem } from "./components/work_experience_item";
import { WorkExperience } from "./work_experience";

export function WorkExperienceSection(): ReactNode {
  return (
    <section id="projects" className="px-4 py-16">
      <H1>Timeline</H1>

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
