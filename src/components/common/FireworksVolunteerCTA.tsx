import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

interface FireworksVolunteerCTAProps {
  variant?: "section" | "banner";
}

const FireworksVolunteerCTA = ({
  variant = "section",
}: FireworksVolunteerCTAProps) => {
  if (variant === "banner") {
    return (
      <div
        className="bg-gradient-to-r from-wk-red/20 to-wk-darkgray rounded-lg p-6 md:p-8 border border-wk-red/40"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-wk-red/20 p-3 rounded-full">
              <Sparkles className="w-8 h-8 text-wk-red" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Fireworks Booth Volunteers Wanted!
              </h3>
              <p className="text-gray-300">
                June 27 – July 4 · Sell fireworks with WKF · Must be 18+
              </p>
            </div>
          </div>
          <Button
            asChild
            className="bg-wk-red hover:bg-red-700 text-white whitespace-nowrap"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Sign Up <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-wk-charcoal">
      <div className="container-custom">
        <div
          className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-wk-darkgray to-wk-charcoal rounded-xl p-6 md:p-10 border border-wk-red/40"
          data-aos="fade-up"
        >
          <img
            src="/lovable-uploads/volunteers-wanted-fireworks-2026.png"
            alt="Fireworks Booth Volunteers Wanted"
            className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
          />
          <div>
            <div className="inline-flex items-center bg-wk-red/20 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-4 h-4 text-wk-red mr-1.5" />
              <span className="text-wk-red text-xs font-semibold uppercase tracking-wide">
                Volunteers Wanted
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              4th of July Fireworks Booth
            </h2>
            <p className="text-wk-gold font-medium mb-2">
              June 27 – July 4 · 9am – 9pm daily
            </p>
            <p className="text-gray-300 mb-4">
              Sell fireworks with WKF and help fund our free community programs.
              Must be 18+ — friends and family welcome!
            </p>
            <p className="text-gray-300 mb-6">
              Top 4 volunteers with the most hours win prizes including a TV /
              cash value, free month at T4L, photo booth rental, and a yoga
              wellness gift certificate.
            </p>
            <Button
              asChild
              className="bg-wk-red hover:bg-red-700 text-white font-semibold"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Sign Up to Volunteer <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FireworksVolunteerCTA;
