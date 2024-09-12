import { NavBar } from "@/app/components/nav_bar";
import { HeroSection } from "./hero_section/hero_section";
import { WorkExperienceSection } from "./work_experience_section/work_experience_section";
import { Footer } from "@/app/components/footer/footer";

export default function HomePage() {
  return (
      <>
        <NavBar />

        <main className="mx-auto max-w-7xl">
          <HeroSection />
        
          <WorkExperienceSection />
        </main>
        
        <Footer />
      </>
  );
}
