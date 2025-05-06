
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const UpcomingEvent = () => {
  return (
    <section className="bg-wk-lightblue section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-300 h-[300px] rounded-lg flex items-center justify-center text-gray-500 order-2 md:order-1">
            Event Image Placeholder
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center bg-white px-4 py-2 rounded-full mb-6">
              <Calendar className="w-5 h-5 text-wk-blue mr-2" />
              <span className="text-wk-dark font-medium">Upcoming Event</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-wk-dark mb-4">
              Ohana Fest 2023
            </h2>
            
            <p className="text-wk-gray mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
              Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
            
            <div className="bg-white p-4 rounded-lg mb-6 inline-block">
              <div className="flex gap-4 text-wk-dark">
                <div>
                  <p className="text-sm font-medium">Date</p>
                  <p>October 15, 2023</p>
                </div>
                <div className="border-l border-gray-200 pl-4">
                  <p className="text-sm font-medium">Location</p>
                  <p>City Park Amphitheater</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-wk-blue hover:bg-blue-600">
              <Link to="/events">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
