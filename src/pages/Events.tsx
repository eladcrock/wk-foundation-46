
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
        <section className="bg-wk-dark py-16 md:py-24 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1574894078563-01e879b89809?auto=format&fit=crop&q=80&w=2000" 
              alt="Upcoming Events" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-wk-dark/0 to-wk-dark"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Upcoming Events</h1>
              <p className="text-lg text-gray-300 mb-8">
                Join us for upcoming events where we celebrate martial arts, build community connections, 
                and provide opportunities for learning and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Event - Ohana Fest */}
        <section className="py-16 bg-wk-charcoal">
          <div className="container-custom">
            <div className="bg-wk-darkgray rounded-xl shadow-xl overflow-hidden border border-white/10">
              <div className="grid md:grid-cols-2">
                <div className="min-h-[400px] relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551268300-a6d462fc6407?auto=format&fit=crop&q=80&w=1200" 
                    alt="Ohana Fest 2023" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col">
                  <div className="mb-auto">
                    <div className="inline-flex items-center bg-wk-charcoal px-4 py-2 rounded-full mb-4">
                      <Calendar className="w-5 h-5 text-wk-gold mr-2" />
                      <span className="text-white font-medium">Featured Event</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Ohana Fest 2023</h2>
                    <p className="text-gray-300 mb-6">
                      Join us for the annual Ohana Fest, a celebration of community, martial arts, and Hawaiian culture.
                      Featuring demonstrations, food, music, and activities for the whole family.
                    </p>
                    
                    <div className="flex flex-wrap gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-wk-gold mb-1">Date & Time</h4>
                        <p className="text-gray-300">October 15, 2023 • 1:00 PM - 8:00 PM</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-wk-gold mb-1">Location</h4>
                        <p className="text-gray-300">City Park Amphitheater, 123 Main St</p>
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
        <section className="py-16 bg-wk-dark">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-white mb-8">Other Events</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "Community Fundraiser",
                  date: "November 6, 2023",
                  image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800"
                },
                {
                  id: 2,
                  title: "Self-Defense Workshop",
                  date: "November 12, 2023",
                  image: "https://images.unsplash.com/photo-1593810450973-9471e1a22dd6?auto=format&fit=crop&q=80&w=800"
                },
                {
                  id: 3,
                  title: "Junior Tournament",
                  date: "November 18, 2023",
                  image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&q=80&w=800"
                }
              ].map((event) => (
                <Card key={event.id} className="shadow-lg hover:shadow-xl transition-shadow border border-white/10 bg-wk-darkgray text-white">
                  <CardHeader className="p-0">
                    <div className="h-[160px] overflow-hidden rounded-t-lg">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <CardTitle className="text-wk-gold">{event.title}</CardTitle>
                      <CardDescription className="text-gray-300">{event.date}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">Join us for this special event designed to build community and share the art of Kajukenbo.</p>
                    <div className="mt-4 text-sm text-gray-300">
                      <p>Downtown Community Center</p>
                      <p>5:30 PM - 8:00 PM</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-wk-blue hover:bg-blue-600">
                      <Link to={`/events/fundraiser-${event.id}`}>Learn More</Link>
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
