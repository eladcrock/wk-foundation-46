
import Hero from "@/components/home/Hero";
import AwardSection from "@/components/home/AwardSection";
import ProgramHighlights from "@/components/home/ProgramHighlights";
import UpcomingEvent from "@/components/home/UpcomingEvent";
import CallToAction from "@/components/common/CallToAction";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AwardSection />
        <ProgramHighlights />
        <UpcomingEvent />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
