import Features from "@/components/@preline/Features/Feature2";
import HeroSection1 from "@/components/@preline/Hero/HeroSection1";
import Navbar from "@/components/@preline/Navbar";
import Timeline from "@/components/@preline/Timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection1 />
      <Features />
      <div className="container max-w-screen-md mx-auto">
        <Timeline />
      </div>
    </>
  );
}
