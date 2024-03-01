import Image from "next/image";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <SectionOne />
      </div>
    </main>
  );
}
