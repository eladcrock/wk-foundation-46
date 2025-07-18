
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import SponsorCTA from "../common/SponsorCTA";
import OhanaGallery from "../events/OhanaGallery";

const UpcomingEvent = () => {
  return (
    <>
      <section className="bg-wk-dark section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img
                src="/lovable-uploads/OhanaFest2024_socialmedia-2.jpg"
                alt="Ohana Fest 2025"
                className="w-full h-auto object-contain block rounded-lg"
             
              />
            </div>

            <div
              className="order-1 md:order-2"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="inline-flex items-center bg-wk-darkgray px-4 py-2 rounded-full mb-6">
                <Calendar className="w-5 h-5 text-wk-gold mr-2" />
                <span className="text-white font-medium">Upcoming Event</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ohana Fest 2025
              </h2>

              <p className="text-gray-300 mb-6">
                Join us for a day of celebration, demonstration, and community
                building. Experience the art of Kajukenbo while connecting with
                other community members.
              </p>

              <div className="bg-wk-darkgray p-4 rounded-lg mb-6 inline-block border border-white/10">
                <div className="flex gap-4 text-white">
                  <div>
                    <p className="text-sm font-medium text-wk-gold">Date: </p>
                    <p className="text-gray-200">Sep 20 10:00am -4:00pm</p>
                  </div>
                  <div className="border-l border-gray-600 pl-4">
                    <p className="text-sm font-medium text-wk-gold">Location</p>
                    <p className="text-gray-200">Suisun Waterfront Harbor </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button
                  asChild
                  className="bg-wk-gold text-wk-charcoal hover:bg-yellow-500"
                >
                  <a
                    href="/deck.pdf#pagemode=FullScreen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Event Details
                  </a>
                </Button> */}
                <OhanaGallery variant="home" />
              </div>
            </div>
          </div>
          
          {/* Sponsor CTA Banner */}
          <div className="mt-12" data-aos="fade-up" data-aos-delay="400">
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
                ></iframe>{" "}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default UpcomingEvent;
