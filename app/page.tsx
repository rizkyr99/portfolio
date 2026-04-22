import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Writing } from "@/components/Writing";
import { Music } from "@/components/Music";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { fetchProfile, fetchProjects } from "@/lib/queries";

export default async function Home() {
  const [profile, projects] = await Promise.all([fetchProfile(), fetchProjects()]);

  return (
    <>
      <Nav />
      <main>
        <Hero profile={profile} />
        <About />
        <Skills />
        <Projects projects={projects ?? []} />
        <Experience />
        <Certifications />
        <Writing />
        <Music />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
