import Feature from "@/components/Feature";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/moveingCard";
import UpcomingWebinars from "@/components/UpComingWedinar";
import { AnimatedTooltipPreview } from "@/components/Animated_Tooltip";

export default function Home() {
  return (
 <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <HeroSection />
     <Feature/>
     <WhyChooseUs/>
     <MusicSchoolTestimonials/>
     <UpcomingWebinars/>
     <AnimatedTooltipPreview/>
 </main>
  );
}
