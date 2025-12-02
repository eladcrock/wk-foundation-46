
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

interface SponsorCTAProps {
  variant?: "banner" | "default" | "compact";
  className?: string;
}

const SponsorCTA = ({ variant = "default", className = "" }: SponsorCTAProps) => {
  if (variant === "banner") {
    return (
      <div className={`bg-gradient-to-r from-wk-gold/20 to-wk-red/20 border border-wk-gold/30 rounded-lg p-4 ${className}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Star className="text-wk-gold w-6 h-6" />
            <div>
              <h3 className="text-white font-semibold">Become a 2026 Ohana Fest sponsor and lock in your support</h3>
              <p className="text-gray-300 text-sm">Be part of the community's largest annual celebration</p>
            </div>
          </div>
          <Button
            asChild
            className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal"
          >
            <a
              href="/deck.pdf#pagemode=FullScreen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Sponsor Info <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-gray-300 mb-3">
          Interested in sponsoring Ohana Fest 2025?
        </p>
        <Button
          asChild
          className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal"
        >
          <a
            href="/deck.pdf#pagemode=FullScreen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            View Sponsor Packages <ArrowRight size={16} />
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className={`bg-wk-darkgray border border-wk-gold/30 rounded-xl p-6 text-center ${className}`}>
      <Star className="text-wk-gold w-8 h-8 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">
        Sponsor Ohana Fest 2026
      </h3>
      <p className="text-gray-300 mb-4">
        Join us as a sponsor and help make this community celebration possible. 
        Various sponsorship packages available.
      </p>
      <Button
        asChild
        className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal"
      >
        <a
          href="/deck.pdf#pagemode=FullScreen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          View Sponsorship Details <ArrowRight size={16} />
        </a>
      </Button>
    </div>
  );
};

export default SponsorCTA;
