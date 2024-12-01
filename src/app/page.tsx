import { DockDemo } from "@/components/custom/Dock";
import Hero from "@/components/custom/Hero";
import Links from "@/components/custom/Links";

export default function Home() {
  return (
    <div className={`bg-[#fbfbfb] dark:bg-[#121212] dark:text-white transition-all`}>
      <Hero />
      <DockDemo />
    </div>
  );
}
