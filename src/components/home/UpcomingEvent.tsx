import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Gift, Sparkles } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import SponsorCTA from "../common/SponsorCTA";

const UpcomingEvent = () => {
  return (
    <>
      {/* Featured Event - Toy Drive */}
      <section className="bg-wk-dark section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img
                src="/lovable-uploads/toy-drive-2025.png"
                alt="Holiday Toy Drive 2025"
                className="w-full h-auto object-contain block rounded-lg"
              />
            </div>

            <div
              className="order-1 md:order-2"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="inline-flex items-center bg-wk-red px-4 py-2 rounded-full mb-6">
                <Gift className="w-5 h-5 text-white mr-2" />
                <span className="text-white font-medium">Featured Event</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Holiday Toy Drive 2025
              </h2>

              <p className="text-gray-300 mb-6">
                Help bring joy to children at Sutter Health Children's Hospital - Sacramento, 
                Ronald McDonald - Sacramento, and Children's Hospital - Oakland with a new 
                and unwrapped toy.
              </p>

              <div className="bg-wk-darkgray p-4 rounded-lg mb-6 inline-block border border-white/10">
                <div className="flex gap-4 text-white">
                  <div>
                    <p className="text-sm font-medium text-wk-gold">Accepting Donations</p>
                    <p className="text-gray-200">Nov 15 - Dec 15</p>
                  </div>
                  <div className="border-l border-gray-600 pl-4">
                    <p className="text-sm font-medium text-wk-gold">Drop-off Location</p>
                    <p className="text-gray-200">254D Sunset Ave, Suisun City</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-wk-red text-white hover:bg-red-700"
                >
                  <Link to="/events">Learn More</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-wk-gold text-wk-gold hover:bg-wk-gold hover:text-wk-charcoal"
                >
                  <Link to="/donate">Donate Now</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Chiropractic Care CTA */}
          <div className="mt-12 bg-gradient-to-r from-wk-darkgray to-wk-charcoal rounded-xl p-6 md:p-8 border border-white/10" data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-wk-gold/20 p-3 rounded-full">
                  <Sparkles className="w-8 h-8 text-wk-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">New! Chiropractic Care at T4L</h3>
                  <p className="text-gray-300">Donation-based chiropractic services for T4L community members</p>
                </div>
              </div>
              <Button asChild className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal whitespace-nowrap">
                <Link to="/programs#chiropractic">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Sponsor CTA Banner */}
          <div className="mt-8" data-aos="fade-up" data-aos-delay="500">
            <SponsorCTA variant="banner" />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-wk-dark">
        <div className="container mx-auto">
          <div
            className="text-center mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hear about our Impact
            </h2>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/lGCscWvjGoo?modestbranding=1&rel=0&controls=0&disablekb=1&iv_load_policy=3"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  data-aos="fade-up"
                  data-aos-duration="800"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default UpcomingEvent;
