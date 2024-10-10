"use client";

import { useState } from "react";

import { NavBar } from "@/app/components/nav_bar";
import { HeroSection } from "./hero_section/hero_section";
import { WorkExperienceSection } from "./work_experience_section/work_experience_section";
import { Footer } from "@/app/components/footer/footer";
import { NavigationDrawer } from "@/app/components/navigation_drawer/navigation_drawer";

export default function HomePage() {
  const [isNavigationDrawerOpen, setIsNavigationDrawerOpen] = useState<boolean>(false);

  return (
      <>
        <NavBar onOpenNavigationDrawerButtonClicked={() => setIsNavigationDrawerOpen(true)}/>

        <NavigationDrawer isOpen={isNavigationDrawerOpen} onClosed={() => setIsNavigationDrawerOpen(false)} />

        <main className="mx-auto max-w-7xl">
          <HeroSection />
        
          <WorkExperienceSection />
        </main>
        
        <Footer />
      </>
  );
}
