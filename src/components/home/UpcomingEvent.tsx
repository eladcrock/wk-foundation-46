
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const UpcomingEvent = () => {
  return (
    <section className="bg-wk-dark section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img 
              src="https://images.unsplash.com/photo-1551268300-a6d462fc6407?auto=format&fit=crop&q=80&w=1200" 
              alt="Ohana Fest 2025" 
              className="w-full h-[300px] object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2" data-aos="fade-left" data-aos-delay="300">
            <div className="inline-flex items-center bg-wk-darkgray px-4 py-2 rounded-full mb-6">
              <Calendar className="w-5 h-5 text-wk-gold mr-2" />
              <span className="text-white font-medium">Upcoming Event</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ohana Fest 2025
            </h2>
            
            <p className="text-gray-300 mb-6">
              Join us for a day of celebration, demonstration, and community building. 
              Experience the art of Kajukenbo while connecting with other community members.
            </p>
            
            <div className="bg-wk-darkgray p-4 rounded-lg mb-6 inline-block border border-white/10">
              <div className="flex gap-4 text-white">
                <div>
                  <p className="text-sm font-medium text-wk-gold">Date</p>
                  <p className="text-gray-200">October 15, 2025</p>
                </div>
                <div className="border-l border-gray-600 pl-4">
                  <p className="text-sm font-medium text-wk-gold">Location</p>
                  <p className="text-gray-200">City Park Amphitheater</p>
                </div>
              </div>
            </div>
            <div className="text-center">

            <Button asChild className="bg-wk-gold text-wk-charcoal hover:bg-yellow-500">
              <Link to="/events">Learn More</Link>
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
