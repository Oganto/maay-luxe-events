import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurStory from "@/components/OurStory";
import StorySignature from "@/components/StorySignature";
import CoreValues from "@/components/CoreValues";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <OurStory />
        <StorySignature />
        <CoreValues />
        <VisionMission />
        <Services />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
