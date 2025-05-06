
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  compact?: boolean;
}

const CallToAction = ({ compact = false }: CallToActionProps) => {
  return (
    <div className={`bg-wk-lightred ${compact ? 'py-8' : 'py-16'}`}>
      <div className="container-custom text-center">
        {!compact && (
          <h2 className="text-3xl md:text-4xl font-bold text-wk-charcoal mb-4">
            Make a Difference Today
          </h2>
        )}
        <p className={`text-wk-gray ${compact ? 'mb-4' : 'mb-8'} max-w-2xl mx-auto`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <Button asChild className="bg-wk-red hover:bg-red-700 min-w-[150px]">
            <Link to="/contact">Get Involved</Link>
          </Button>
          <Button asChild className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal min-w-[150px]">
            <Link to="/donate">Donate Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
