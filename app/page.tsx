import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { Footer } from "@/components/Footer";
import {
  getProfile,
  getExperiences,
  getSkills,
  getProjects,
  getPublishedBlogs,
} from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [profile, experiences, skills, projects, blogs] = await Promise.all([
    getProfile(),
    getExperiences(),
    getSkills(),
    getProjects(),
    getPublishedBlogs(),
  ]);

  return (
    <>
      <HeroSection />
      <AboutSection profile={profile} />
      <ExperienceSection experiences={experiences} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <BlogPreviewSection blogs={blogs} />
      <Footer profile={profile} />
    </>
  );
}
