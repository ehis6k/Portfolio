import HeroSection from "@/components/hero/HeroSection";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/Skills";
import { FeaturedProjectSection } from "@/components/sections/featured-project";
import { ProjectArchiveSection } from "@/components/sections/project-archive";
import { ContactSection } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <FeaturedProjectSection />
      <ProjectArchiveSection />
      <ContactSection />
    </>
  );
}
