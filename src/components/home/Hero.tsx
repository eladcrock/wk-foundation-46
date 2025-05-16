
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-wk-dark overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
           src="https://i.pinimg.com/736x/bc/82/ee/bc82ee7090ae65788dda3fda6562462a.jpg"
          alt="Martial Arts Community Training" 
          className="w-full h-full object-cover opacity-40" /* Increased opacity from 20 to 40 */
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wk-charcoal/70 to-wk-charcoal/30"></div> /* Reduced opacity from 90/40 to 70/30 */
      </div>
      
      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right" data-aos-delay="100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Wahiawa Kajukenbo <span className="text-wk-gold">Changing Lives</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Building strength, character and community through the traditions and values of Kajukenbo. 
              Join us in our mission to transform lives through martial arts training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-wk-red hover:bg-red-700">
                <Link to="/programs">Our Programs</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-wk-charcoal border-2 border-wk-darkgray hover:bg-white/90 transition-all">
                <Link to="/donate">Support Our Mission</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block" data-aos="fade-left" data-aos-delay="300">
            <div className="relative overflow-hidden rounded-lg shadow-xl border border-white/10">
              <img 
                src="https://train4life.info/wp-content/uploads/2025/03/RP1_7395-Enhanced-NR-2048x1363.jpg" 
                alt="Kajukenbo Training" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wk-charcoal/50 to-transparent"></div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
