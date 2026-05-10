import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, MapPin } from "lucide-react";

interface OhanaFestCTAProps {
  variant?: "section" | "banner";
}

const OhanaFestCTA = ({ variant = "section" }: OhanaFestCTAProps) => {
  if (variant === "banner") {
    return (
      <div
        className="bg-gradient-to-r from-wk-darkgray to-wk-charcoal rounded-lg p-6 md:p-8 border border-wk-gold/30"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-wk-gold/20 p-3 rounded-full">
              <Calendar className="w-8 h-8 text-wk-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Ohana Fest 2026 — Save the Date
              </h3>
              <p className="text-gray-300">
                Saturday, September 12, 2026 · 10am–4pm · Suisun City Waterfront
              </p>
            </div>
          </div>
          <Button
            asChild
            className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal whitespace-nowrap"
          >
            <Link to="/ohana-fest" className="flex items-center gap-2">
              Learn More <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-wk-dark">
      <div className="container-custom">
        <div
          className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-wk-darkgray to-wk-charcoal rounded-xl p-6 md:p-10 border border-wk-gold/30"
          data-aos="fade-up"
        >
          <img
            src="/lovable-uploads/ohana-fest-2026-save-the-date.png"
            alt="Ohana Fest 2026 Save the Date"
            className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
          />
          <div>
            <div className="inline-flex items-center bg-wk-gold/20 px-3 py-1 rounded-full mb-3">
              <Calendar className="w-4 h-4 text-wk-gold mr-1.5" />
              <span className="text-wk-gold text-xs font-semibold uppercase tracking-wide">
                Save the Date
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Ohana Fest 2026
            </h2>
            <p className="text-wk-gold font-medium mb-2">
              Saturday, September 12, 2026 · 10am – 4pm
            </p>
            <p className="text-gray-300 mb-2 flex items-center gap-2">
              <MapPin size={16} className="text-wk-gold" />
              Harbor Plaza · Suisun Waterfront · Main St × Solano St
            </p>
            <p className="text-gray-300 mb-6">
              Island-style vendors, food, live performances and more — a free
              community event hosted by WK Foundation. Stay for Concert in the
              Park immediately after!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal font-semibold"
              >
                <Link to="/ohana-fest" className="flex items-center gap-2">
                  Visit Ohana Fest Page <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-wk-gold text-wk-gold hover:bg-wk-gold hover:text-wk-charcoal"
              >
                <a
                  href="/deck.pdf#pagemode=FullScreen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Become a Sponsor
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OhanaFestCTA;
