
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CallToActionProps {
  compact?: boolean;
}

const CallToAction = ({ compact = false }: CallToActionProps) => {
  return (
    <div className={`bg-gradient-to-r from-wk-red/10 to-wk-gold/10 ${compact ? 'py-12' : 'py-20'}`}>
      <div className="container-custom text-center">
        {!compact && (
          <h2 className="text-3xl md:text-4xl font-bold text-wk-charcoal mb-6">
            Join the Wahiawa Kajukenbo Community
          </h2>
        )}
        <p className={`text-wk-gray ${compact ? 'mb-6' : 'mb-8'} max-w-2xl mx-auto text-lg`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5 items-center">
          <Button asChild className="bg-wk-red hover:bg-red-700 min-w-[180px] h-12 text-base">
            <Link to="/contact" className="flex items-center justify-center gap-2">
              Get Involved <ArrowRight size={16} />
            </Link>
          </Button>
          <Button asChild className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal min-w-[180px] h-12 text-base">
            <Link to="/donate" className="flex items-center justify-center gap-2">
              Donate Now <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
