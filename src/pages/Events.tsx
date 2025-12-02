import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/common/CallToAction";
import SponsorCTA from "@/components/common/SponsorCTA";
import OhanaGallery from "@/components/events/OhanaGallery";
import { Calendar, Gift, Sparkles, Camera } from "lucide-react";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-wk-dark py-16 md:py-24 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/ohanaHero.jpg"
              alt="Upcoming Events"
              className="w-full h-full object-cover opacity-70"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-wk-dark/0 to-wk-dark"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Events & Community
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Join us for upcoming events where we celebrate martial arts,
                build community connections, and provide opportunities for
                learning and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Event - Toy Drive */}
        <section className="py-16 bg-wk-charcoal">
          <div className="container-custom">
            <div
              className="bg-wk-darkgray rounded-xl shadow-xl overflow-hidden border border-white/10"
              data-aos="fade-up"
            >
              <div className="grid md:grid-cols-2">
                <div className="overflow-hidden">
                  <img
                    src="/lovable-uploads/toy-drive-2025.png"
                    alt="Holiday Toy Drive 2025"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col">
                  <div className="mb-auto">
                    <div className="inline-flex items-center bg-wk-red px-4 py-2 rounded-full mb-4">
                      <Gift className="w-5 h-5 text-white mr-2" />
                      <span className="text-white font-medium">
                        Featured Event
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      Holiday Toy Drive 2025
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Help bring joy to children at Sutter Health Children's Hospital - Sacramento, 
                      Ronald McDonald - Sacramento, and Children's Hospital - Oakland with a new 
                      and unwrapped toy.
                    </p>

                    <div className="flex flex-wrap gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-wk-gold mb-1">
                          Accepting Donations
                        </h4>
                        <p className="text-gray-300">
                          November 15 - December 15
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-wk-gold mb-1">
                          Drop-off Location
                        </h4>
                        <p className="text-gray-300">
                          254D Sunset Ave, Suisun City
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="bg-wk-red hover:bg-red-700 text-white"
                    >
                      <Link to="/donate">Donate Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-wk-gold text-wk-gold hover:bg-wk-gold hover:text-wk-charcoal"
                    >
                      <Link to="/contact">Get Involved</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Chiropractic Care CTA */}
            <div className="mt-8 bg-gradient-to-r from-wk-darkgray to-wk-charcoal rounded-xl p-6 md:p-8 border border-white/10" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-wk-gold/20 p-3 rounded-full">
                    <Sparkles className="w-8 h-8 text-wk-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">New! Chiropractic Care at T4L</h3>
                    <p className="text-gray-300">Donation-based chiropractic services available every other week</p>
                  </div>
                </div>
                <Button asChild className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal whitespace-nowrap">
                  <Link to="/programs#chiropractic">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Sponsor CTA */}
            <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
              <SponsorCTA />
            </div>
          </div>
        </section>

        {/* Annual Events - Ohana Fest */}
        <section className="py-16 bg-wk-dark">
          <div className="container-custom">
            <div className="text-center mb-12" data-aos="fade-up">
              <div className="inline-flex items-center bg-wk-gold/20 px-4 py-2 rounded-full mb-4">
                <Calendar className="w-5 h-5 text-wk-gold mr-2" />
                <span className="text-wk-gold font-medium">Annual Event</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ohana Fest
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our signature annual celebration of community, martial arts, and Hawaiian culture. 
                Featuring demonstrations, food, music, and activities for the whole family.
              </p>
            </div>

            {/* Ohana Fest Info Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-wk-darkgray rounded-xl p-6 border border-white/10" data-aos="fade-right">
                <h3 className="text-xl font-bold text-wk-gold mb-4">About Ohana Fest</h3>
                <p className="text-gray-300 mb-4">
                  Join us for the annual Ohana Fest at Suisun Waterfront Harbor. 
                  Experience the art of Kajukenbo while connecting with community members.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-white">Typical Date</h4>
                    <p className="text-gray-300">September (Third Saturday)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Suisun Waterfront Harbor</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full mt-6 bg-wk-gold hover:bg-yellow-500 text-wk-charcoal"
                >
                  <a
                    href="/deck.pdf#pagemode=FullScreen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Event Details
                  </a>
                </Button>
              </div>

              <div className="bg-wk-darkgray rounded-xl p-6 border border-white/10" data-aos="fade-left">
                <div className="flex items-center gap-2 mb-4">
                  <Camera className="w-5 h-5 text-wk-gold" />
                  <h3 className="text-xl font-bold text-wk-gold">2025 Photos</h3>
                </div>
                <div className="bg-wk-charcoal rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <h4 className="text-xl font-bold text-white mb-2">Coming Soon!</h4>
                  <p className="text-gray-300">
                    Ohana Fest 2025 photos will be available very soon.
                  </p>
                </div>
              </div>
            </div>

            {/* Archive Gallery */}
            <div className="bg-wk-darkgray rounded-xl p-6 md:p-8 border border-white/10" data-aos="fade-up">
              <div className="flex items-center gap-2 mb-6">
                <Camera className="w-5 h-5 text-wk-gold" />
                <h3 className="text-xl font-bold text-white">Ohana Fest 2024 Archive</h3>
              </div>
              <OhanaGallery />
            </div>
          </div>
        </section>

        {/* Other Upcoming Events */}
        <section className="py-16 bg-wk-charcoal">
          <div className="container-custom">
            <h2
              className="text-3xl font-bold text-white mb-8"
              data-aos="fade-up"
            >
              Other Events & Programs
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "Women's Self-Defense",
                  date: "Every 3rd Saturday of the Month",
                  image: "/lovable-uploads/women.png",
                  description:
                    "Empower yourself with practical self-defense techniques taught by experienced instructors. Open to all skill levels.",
                  location: "254D Sunset Ave, Suisun City",
                  time: "Starting at 9am",
                  link: "/programs#self-defense"
                },
                {
                  id: 2,
                  title: "Senior Boxing Fitness",
                  date: "Every Thursday",
                  image: "/lovable-uploads/senior-fitness-flyer.png",
                  description:
                    "Free boxing-inspired fitness class designed specifically for seniors. No experience required!",
                  location: "Train 4 Life Center",
                  time: "11:00 AM",
                  link: "/programs#senior-boxing"
                },
                {
                  id: 3,
                  title: "4th of July Fireworks Fundraiser",
                  date: "Announced June 2026",
                  image:
                    "https://nationaltoday.com/wp-content/uploads/2020/07/4july-1.jpg",
                  description:
                    "Support our free programs like Women's Self-Defense by volunteering at our fireworks booth.",
                  location: "Location TBD",
                  time: "9:00 AM - 9:00 PM",
                  link: "/contact"
                },
              ].map((event, index) => (
                <Card
                  key={event.id}
                  className="shadow-lg hover:shadow-xl transition-shadow border border-white/10 bg-wk-darkgray text-white overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardHeader className="p-0">
                    <div className="h-[200px] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <CardTitle className="text-wk-gold">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {event.date}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{event.description}</p>
                    <div className="mt-4 text-sm text-gray-300">
                      <p>{event.location}</p>
                      <p>{event.time}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-wk-gold hover:bg-yellow-500 text-wk-charcoal"
                    >
                      <Link to={event.link}>Learn More</Link>
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
