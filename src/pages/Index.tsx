
import Hero from "@/components/home/Hero";
import AwardSection from "@/components/home/AwardSection";
import ProgramHighlights from "@/components/home/ProgramHighlights";
import UpcomingEventsCTA from "@/components/common/UpcomingEventsCTA";
import OhanaFestCTA from "@/components/common/OhanaFestCTA";
import FireworksVolunteerCTA from "@/components/common/FireworksVolunteerCTA";
// Toy Drive featured event hidden for the off-season — re-enable next year.
// import UpcomingEvent from "@/components/home/UpcomingEvent";
import CallToAction from "@/components/common/CallToAction";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <OhanaFestCTA />
        <FireworksVolunteerCTA />
        <ProgramHighlights />
        <UpcomingEventsCTA />
        <AwardSection />
        {/* <UpcomingEvent /> */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
