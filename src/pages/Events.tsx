import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/common/CallToAction";
import { Calendar } from "lucide-react";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-wk-lightgray py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-wk-dark mb-6">Upcoming Events</h1>
              <p className="text-lg text-wk-gray mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                Proin gravida dolor sit amet lacus accumsan et viverra.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Event - Ohana Fest */}
        <section className="py-16">
          <div className="container-custom">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gray-300 min-h-[400px] flex items-center justify-center text-gray-500">
                  Ohana Fest Image
                </div>
                <div className="p-8 md:p-12 flex flex-col">
                  <div className="mb-auto">
                    <div className="inline-flex items-center bg-wk-lightblue px-4 py-2 rounded-full mb-4">
                      <Calendar className="w-5 h-5 text-wk-blue mr-2" />
                      <span className="text-wk-dark font-medium">Featured Event</span>
                    </div>
                    <h2 className="text-3xl font-bold text-wk-dark mb-3">Ohana Fest 2023</h2>
                    <p className="text-wk-gray mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                      Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
                    </p>
                    
                    <div className="flex flex-wrap gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-wk-dark mb-1">Date & Time</h4>
                        <p className="text-wk-gray">October 15, 2023 • 1:00 PM - 8:00 PM</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-wk-dark mb-1">Location</h4>
                        <p className="text-wk-gray">City Park Amphitheater, 123 Main St</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full sm:w-auto bg-wk-blue hover:bg-blue-600">
                    <Link to="/events/ohana-fest">Event Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Upcoming Events */}
        <section className="py-16 bg-wk-lightgray">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-wk-dark mb-8">Other Events</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="bg-gray-300 h-[160px] -mt-6 -mx-6 mb-4 rounded-t-lg flex items-center justify-center text-gray-500">
                      Event Image
                    </div>
                    <CardTitle className="text-wk-blue">Community Fundraiser</CardTitle>
                    <CardDescription>November {item + 5}, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-wk-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum.</p>
                    <div className="mt-4 text-sm text-wk-gray">
                      <p>Downtown Community Center</p>
                      <p>5:30 PM - 8:00 PM</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-wk-blue hover:bg-blue-600">
                      <Link to={`/events/fundraiser-${item}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <CallToAction compact />
      </main>
      <Footer />
    </div>
  );
};

export default Events;
