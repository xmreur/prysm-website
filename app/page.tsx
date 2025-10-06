import Image from "next/image";
import Hero from "@/app/components/Hero";
import HowItWorks from "./components/HowItWorks";
import Technology from "./components/Technology";
import Benefits from "./components/Benefits";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Technology />
      <Benefits />
      <Download />
      <Footer />
    </div>
  );
}
