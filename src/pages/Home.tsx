import CTA from "../components/home/CTA";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skils";

function Home() {
  return (
    <>
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
      </div>
      <CTA />
    </>
  );
}

export default Home;