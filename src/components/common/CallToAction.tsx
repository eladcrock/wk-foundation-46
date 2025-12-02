
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface CallToActionProps {
  compact?: boolean;
}

const CallToAction = ({ compact = false }: CallToActionProps) => {
  return (
    <div
      className={`bg-gradient-to-br from-wk-charcoal to-wk-dark ${
        compact ? "py-12" : "py-20"
      }`}
    >
      <div className="container-custom text-center">
        {!compact && (
          <h2
            className="text-3xl md:text-4xl font-bold text-wk-gold mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join the Wahiawa Kajukenbo Community
          </h2>
        )}
        <p
          className={`text-gray-300 ${
            compact ? "mb-6" : "mb-8"
          } max-w-2xl mx-auto text-lg`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Become part of our 'ohana and help us continue to build strength,
          character and community through martial arts training.
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center gap-5 items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Button
            asChild
            className="bg-wk-red hover:bg-red-700 min-w-[180px] h-12 text-base text-white"
          >
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2"
            >
              Get Involved <ArrowRight size={16} />
            </Link>
          </Button>
          <Button
            asChild
            className="bg-transparent hover:bg-wk-gold/20 text-wk-gold border border-wk-gold min-w-[180px] h-12 text-base"
          >
            <Link
              to="/donate"
              className="flex items-center justify-center gap-2"
            >
              Donate Now <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
        
        {/* New Service Highlight */}
        {!compact && (
          <div
            className="mt-10 inline-flex items-center gap-3 bg-wk-darkgray/50 px-6 py-3 rounded-full border border-wk-gold/30"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Sparkles className="w-5 h-5 text-wk-gold" />
            <span className="text-gray-300">
              <span className="text-white font-medium">New!</span> Donation-based Chiropractic Care now available
            </span>
            <Link to="/programs#chiropractic" className="text-wk-gold hover:text-yellow-400 font-medium">
              Learn more →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallToAction;
