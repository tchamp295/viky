import { DockDemo } from "@/components/custom/Dock";
import Hero from "@/components/custom/Hero";
import HowItWorks from "@/components/custom/HowItWorks";
import KeyFeatures from "@/components/custom/KeyFeatures";
import TemplatesSection from "@/components/custom/Template";

export default function Home() {
  return (
    <div className={`bg-[#fbfbfb] dark:bg-[#121212] dark:text-white transition-all`}>
      <Hero />
      <TemplatesSection/>
      <KeyFeatures/>
      <HowItWorks/>
      <DockDemo />
    </div>
  );
}
