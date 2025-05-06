
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-wk-lightgray overflow-hidden">
      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wk-dark mb-6">
              Empowering Communities, <span className="text-wk-blue">Changing Lives</span>
            </h1>
            <p className="text-lg md:text-xl text-wk-gray mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-wk-blue hover:bg-blue-600">
                <Link to="/programs">Our Programs</Link>
              </Button>
              <Button asChild size="lg" className="bg-wk-teal hover:bg-teal-600">
                <Link to="/donate">Support Our Mission</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-gray-300 h-[400px] rounded-lg flex items-center justify-center text-gray-500">
              Hero Image Placeholder
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-wk-lightblue opacity-50 -skew-x-12 transform origin-top-right"></div>
    </div>
  );
};

export default Hero;
