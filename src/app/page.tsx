import { DockDemo } from "@/components/custom/Dock";
import Hero from "@/components/custom/Hero";

export default function Home() {
  return (
    <div className={`bg-[#fbfbfb] dark:bg-[#121212] dark:text-white transition-all`}>
      <Hero />
      <DockDemo />
    </div>
  );
}
