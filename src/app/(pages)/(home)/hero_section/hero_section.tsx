'use client';

import { ReactNode, useState } from "react";

import { ExternalLink } from "./external_link";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { ExternalLinkLink } from "./components/external_link/external_link_link";
import { AbstractAnimation } from "./components/abstract_animation/abstract_animation";
import { useIsVisible } from "@/app/hooks/use_is_visible/use_is_visible";

export function HeroSection(): ReactNode {
  const [sectionElement, setSectionElement] = useState<HTMLElement | null>(null);
  // const isVisible = useIsVisible(sectionElement);
  const isVisible = true;

  return (
    <section 
      ref={(element) => setSectionElement(element)}
      id="hero" 
      className={`grid p-4 py-16 grid-cols-1 md:grid-cols-[90fr,10fr] gap-8 text-center md:text-start`}
    >
      <div className={`animate-slide-in-y-initial ${(isVisible) ? 'animate-slide-in-y' : ''}`}>
        <p className="font-mono text-5xl font-bold text-white">Hi👋, I&apos;m Yamin Nather</p>
        
        <p className="mt-8">
          I&apos;m a highly motivated and hardworking software developer with extensive experience in both Frontend and Backend development.
          I&apos;m proficient in a wide range of tech stacks, with a proven ability to quickly learn and adapt to new technologies. 
        </p>
        
        <br />
      
        <p>I&apos;m very passionate about coding and actively involved in extracurricular activities, demonstrating strong teamwork and leadership skills.</p>
        
        <div className="mt-8 inline-flex flex-wrap">
          {ExternalLink.values.map(
            (element, index) => <ExternalLinkLink key={element.name} icon={externalLinkIcons.get(element)!} name={element.name} url={element.url} className={(index !== 0) ? 'ms-4' : undefined} />
          )}
        </div>
      </div>

      
      <div className={`animate-slide-in-y-initial animate-delay-200 ${(isVisible) ? 'animate-slide-in-y' : ''}`}>
        <AbstractAnimation />
      </div>
    </section>
  );
}

export const externalLinkIcons: Map<ExternalLink, ReactNode> = new Map<ExternalLink, ReactNode>([
  [ExternalLink.github, <FaGithub key="github"/>],
  [ExternalLink.linkedin, <FaLinkedin key="linkedin" />],
  [ExternalLink.resume, <FaFileAlt key="resume" />],
]);
