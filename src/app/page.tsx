import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import SectionOne from "./components/Sections/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo";
import AboutSection from "./components/About/AboutSection";
import ProjectsSection from "./components/Projects/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <SectionOne />
        <SectionTwo />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
