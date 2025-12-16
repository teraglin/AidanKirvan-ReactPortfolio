import LandscapeWarning from "@/modules/LandscapeWarning";
import Nav from "@/modules/Nav";
import Hero from "@/modules/Hero";
import Projects from "@/modules/Projects";
import About from "@/modules/About";
import Contact from "@/modules/Contact";
import PageLink from "@/components/PageLink";
import { fetchProjects, fetchSkills } from "@/app/lib/data-actions";

// Force dynamic rendering (not static generation)
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [projects, skills] = await Promise.all([
    fetchProjects(),
    fetchSkills()
  ]);

  return (
    <>
      <LandscapeWarning />
      <div className="w-screen text-white relative bg-charcoal min-[1440px]:bg-dark-charcoal landscape-hide">
        <Nav />
        <div className="relative mx-auto w-full px-8 max-w-360 flex flex-col gap-16 animate-fade animate-flicker lg:bg-charcoal lg:px-32 lg:gap-32">
          <PageLink
            href="/tabletop"
            alignment="right"
            color="black"
            background="orange"
            avoidNav
          >
            My Tabletop Game Designs
          </PageLink>
          <Hero />
          <About skills={skills} />
          <Projects projects={projects} />
          <Contact />
        </div>
      </div>
    </>
  );
}
