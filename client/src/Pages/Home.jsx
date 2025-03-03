import Approach from "../Components/Approach";
import { Contact } from "../Components/Contact";
import HeroSection from "../Components/HeroSection";
import ProjectSection from "../Components/ProjectSection";
import TimeLineComp from "../Components/TimeLineComp";
import GithubGlobe from "../Components/GithubGlobe";
import Footer from "./Footer";
import { Element } from "react-scroll";
import TechStack from "../Components/TechStack";
// import ResumeSection from "../Components/ResumeSection";

export default function Home() {
  return (
    <main>
      <Element name="hero">
        <HeroSection />
      </Element>
      <div className="max-w-[1350px] mx-auto">
        <Element name="skills">
          <TechStack/>/
        </Element>
        {/* <ResumeSection/>  */}
        <Element name="project">
          <ProjectSection />
        </Element>
        <Element name="education">
          <TimeLineComp />
        </Element>
        <Element name="approach">
          <Approach />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <GithubGlobe />
      </div>

      <Footer />
    </main>
  );
}
