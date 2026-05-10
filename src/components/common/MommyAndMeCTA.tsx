import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Calendar } from "lucide-react";

interface MommyAndMeCTAProps {
  variant?: "section" | "banner";
}

const MommyAndMeCTA = ({ variant = "section" }: MommyAndMeCTAProps) => {
  if (variant === "banner") {
    return (
      <div
        className="bg-gradient-to-r from-wk-gold/20 to-wk-darkgray rounded-lg p-6 md:p-8 border border-wk-gold/40"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-wk-gold/20 p-3 rounded-full">
              <Heart className="w-8 h-8 text-wk-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Preschool Mommies &amp; Staff Workshop
              </h3>
              <p className="text-gray-300">
                May 22 · 2pm – 4pm · For preschool moms &amp; staff
              </p>
            </div>
          </div>
          <Button
            asChild
            className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal font-semibold whitespace-nowrap"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Reserve a Spot <ArrowRight size={16} />
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
          className="bg-gradient-to-br from-wk-darkgray to-wk-charcoal rounded-xl p-6 md:p-10 border border-wk-gold/40"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center bg-wk-gold/20 px-3 py-1 rounded-full mb-3">
                <Calendar className="w-4 h-4 text-wk-gold mr-1.5" />
                <span className="text-wk-gold text-xs font-semibold uppercase tracking-wide">
                  Next Event · May 22
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Mommy &amp; Me Self-Defense Workshop
              </h2>
              <p className="text-wk-gold font-medium mb-2">
                Thursday, May 22 · 2pm – 4pm
              </p>
              <p className="text-gray-300 mb-4 max-w-2xl">
                A special 2-hour women's self-defense session for preschool
                moms and staff. Build confidence and learn practical techniques
                in a supportive environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal font-semibold"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Reserve a Spot <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-wk-gold text-wk-gold hover:bg-wk-gold hover:text-wk-charcoal"
                >
                  <Link to="/programs#self-defense">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex bg-wk-gold/10 p-6 rounded-full shrink-0">
              <Heart className="w-16 h-16 text-wk-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MommyAndMeCTA;
