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
import { Calendar } from "lucide-react";
import deck from "@components/images/deck.pdf"

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-wk-dark py-16 md:py-24 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="https://hicksconventions.com/wp-content/uploads/shutterstock_772080394-1000x423.jpg"
              alt="Upcoming Events"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-wk-dark/0 to-wk-dark"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Upcoming Events
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Join us for upcoming events where we celebrate martial arts,
                build community connections, and provide opportunities for
                learning and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Event - Ohana Fest */}
        <section className="py-16 bg-wk-charcoal">
          <div className="container-custom">
            <div
              className="bg-wk-darkgray rounded-xl shadow-xl overflow-hidden border border-white/10"
              data-aos="fade-up"
            >
              <div className="grid md:grid-cols-2">
                <div className="min-h-[400px] relative overflow-hidden">
                  <img
                    src="https://cdn.prod.website-files.com/67ec115a7cb123fc4a978884/67ed53f0739111102c22a0bc_Experience%20by%20Michael%20Ryan%20Kravetsky%20for%20Ohana%20Festival%202022.webp"
                    alt="Ohana Fest 2025"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col">
                  <div className="mb-auto">
                    <div className="inline-flex items-center bg-wk-charcoal px-4 py-2 rounded-full mb-4">
                      <Calendar className="w-5 h-5 text-wk-gold mr-2" />
                      <span className="text-white font-medium">
                        Featured Event
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      Ohana Fest 2025
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Join us for the annual Ohana Fest, a celebration of
                      community, martial arts, and Hawaiian culture. Featuring
                      demonstrations, food, music, and activities for the whole
                      family.
                    </p>

                    <div className="flex flex-wrap gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-wk-gold mb-1">
                          Date & Time
                        </h4>
                        <p className="text-gray-300">
                          September 20 10:00am -4:00pm
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-wk-gold mb-1">
                          Location
                        </h4>
                        <p className="text-gray-300">
                          Suisun Waterfront Harbor
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full sm:w-auto bg-wk-red hover:bg-red-700"
                  >
                     <a
                      href="/deck.pdf#pagemode=FullScreen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Event Details
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Upcoming Events */}
        <section className="py-16 bg-wk-dark">
          <div className="container-custom">
            <h2
              className="text-3xl font-bold text-white mb-8"
              data-aos="fade-up"
            >
              Other Events
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "Annual Toy Drive Fundraiser",
                  date: "Announced early November 2025",
                  image:
                    "https://media.sketchfab.com/models/5a78675f36934f67a3cf55f49c7d56ad/thumbnails/358aef2210684655bf67f05a1619a56b/d4f173afe2874179824dd92709f3e36d.jpeg",
                  description:
                    "Help us bring holiday cheer to local families by contributing to our annual toy drive. All donations go directly to children in need.",
                  location: "T4L and sponsored locations",
                  time: "All Day Drop-Off",
                },
                {
                  id: 2,
                  title: "Womens Self-Defense",
                  date: "Every 3rd Saturday of the Month",
                  image:
                    "https://media.npr.org/assets/img/2022/05/27/20220511_jessng_mengwencao-050_custom-dc50764275d3dc024efe3f922ae54100ca0e6e72.jpg?s=1100&c=50&f=jpeg",
                  description:
                    "Empower yourself with practical self-defense techniques taught by experienced instructors. Open to all skill levels.",
                  location: "T4L Dojo",
                  time: "Please contact to Sign Up",
                },
                {
                  id: 3,
                  title: "4th of July Fireworks Fundraiser",
                  date: "Announced June 2025",
                  image:
                    "https://nationaltoday.com/wp-content/uploads/2020/07/4july-1.jpg",
                  description:
                    "Support our free programs like Women's Self-Defense by volunteering at our fireworks booth.",
                  location: "Location TBD",
                  time: "9:00 AM - 9:00 PM",
                },
              ].map((event, index) => (
                <Card
                  key={event.id}
                  className="shadow-lg hover:shadow-xl transition-shadow border border-white/10 bg-wk-darkgray text-white"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardHeader className="p-0">
                    <div className="h-[160px] overflow-hidden rounded-t-lg">
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
                      <Link to="/contact">Get Involved</Link>
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
