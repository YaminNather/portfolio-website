'use client';

import { ReactNode, useState } from "react";

import { ExternalLink } from "./external_link";
import { ExternalLinkLink } from "./components/external_link/external_link_link";
import { AbstractAnimation } from "./components/abstract_animation/abstract_animation";
import { useIsVisible } from "@/app/hooks/use_is_visible/use_is_visible";

export function HeroSection(): ReactNode {
  const [sectionElement, setSectionElement] = useState<HTMLElement | null>(null);
  const isVisible = useIsVisible(sectionElement);

  return (
    <section
      ref={(element) => setSectionElement(element)}
      id="hero" 
      className={`grid p-4 py-16 grid-cols-1 md:grid-cols-[90fr,10fr] gap-8 text-center md:text-start`}
    >
      <div className={`animate-slide-in-y-initial ${(isVisible) ? 'animate-slide-in-y' : ''}`}>
        <p className="font-mono text-5xl font-bold text-white">
          Hi👋, I&apos;m
          <br />
          Yamin Nather
        </p>
        
        <p className="mt-8">
          I&apos;m a highly motivated and hardworking software developer with extensive experience in both Frontend and Backend development.
          I&apos;m proficient in a wide range of tech stacks, with a proven ability to quickly learn and adapt to new technologies. 
        </p>
        
        <br />
      
        <div className="mt-8 inline-flex flex-wrap">
          {ExternalLink.values.map(
            (element, index) => <ExternalLinkLink key={element.name} icon={element.icon()} name={element.name} url={element.url} className={(index !== 0) ? 'ms-4' : undefined} />
          )}
        </div>
      </div>

      
      <div className={`animate-slide-in-y-initial animate-delay-200 ${(isVisible) ? 'animate-slide-in-y' : ''}`}>
        <AbstractAnimation />
      </div>
    </section>
  );
}
