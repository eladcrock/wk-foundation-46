import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, School, Users, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/common/CallToAction";
import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card";


const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-wk-dark py-16 md:py-24 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/490557338_1190394909761982_8320938673800118017_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8MeURe_Fk9YQ7kNvwHa5A8U&_nc_oc=AdkIhqfc__si1shXw3hwGPq-BjIrWgXtJJWuon568VRHr1M0sSAkTkEMAX6kMZYD_q_rlXZKOJxYmNi_f5nVkZMA&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=cGtYLLU9c-A8D7THgel9tw&oh=00_AfJnNc1UaiOeF39y79qboZqE0cFJ25uwh7Vtfvo1FjAswQ&oe=682D5096"
              alt="Our Programs"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-wk-dark/0 to-wk-dark"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Programs
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Discover our specialized martial arts training programs designed
                to serve different segments of our community and build strength,
                character, and self-confidence.
              </p>
            </div>
          </div>
        </section>

        {/* BREATHE Program */}
        <section id="breathe" className="section-padding bg-wk-charcoal">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className="rounded-lg overflow-hidden shadow-xl"
                data-aos="fade-right"
              >
                <img
                  src="https://media.istockphoto.com/id/1315459620/vector/stop-bullying-sign-stop-bullying-and-child-abuse-in-the-school-verbal-social-physical.jpg?s=612x612&w=0&k=20&c=hvkqTeShIgzXrBKjxZhJHtY9ULSyNT9mr_O-ZYd6u1I="
                  alt="BREATHE Youth Anti-Bullying Program"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div data-aos="fade-left">
                <h2 className="text-3xl font-bold text-wk-gold mb-2">
                  B.R.E.A.T.H.E.
                </h2>
                <h3 className="text-xl text-white mb-4">
                  Bully Response Education Aimed Towards Helping Everyone
                </h3>

                <p className="text-gray-300 mb-4">
                  Be Buddies Not Bullies. Our program is geared towards helping
                  school-aged children respond to bullying, recognize why people
                  bully, and learn how to report bullying appropriately.
                </p>

                <p className="text-gray-300 mb-6">
                  Bullying is a growing issue that can threaten a child's
                  physical and emotional safety at school and in the community.
                  Through our program, children feel empowered to make a change
                  and become Buddy advocates.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Users className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Target Audience:</span>
                    <span className="ml-2">School-aged children</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <School className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="ml-2">
                    Availability: We're happy to come to your school, organization, or event
                    </span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Users className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Program Director:</span>
                    <span className="ml-2">Ady Ancheta</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Email:</span>
                    <span className="ml-2">wkfboard@gmail.com</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Phone className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2">(707) 803-9539</span>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-wk-red hover:bg-red-700 text-white w-full"
                >
                  <Link to="/contact">Schedule a Presentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Senior Boxing */}
        <section id="senior-boxing" className="section-padding bg-wk-dark">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1" data-aos="fade-right">
                <h2 className="text-3xl font-bold text-wk-gold mb-2">
                  Senior Boxing Fitness
                </h2>
                <h3 className="text-xl text-white mb-4 flex items-center">
                  <span className="mr-2">Free Program for Seniors</span>
                  <span className="bg-yellow-300 text-black text-sm font-bold px-2 py-1 rounded-full">
                    FREE
                  </span>
                </h3>

                <p className="text-gray-300 mb-4">
                  This engaging and energetic class is designed specifically for
                  seniors to enhance overall fitness, balance, and coordination
                  through boxing-inspired workouts.
                </p>

                <p className="text-gray-300 mb-6">
                  The class aims to improve cardiovascular health, increase
                  muscle tone, and boost confidence in a supportive, social
                  environment. No prior boxing experience is required!
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Users className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Target Audience:</span>
                    <span className="ml-2">Seniors</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Schedule:</span>
                    <span className="ml-2">Thursdays at 11am</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Location:</span>
                    <span className="ml-2 flex-1">
                      Train 4 Life Center
                    </span>
                  </div>

                  <div className="flex items-center text-gray-300 mt-2">
                    <span className="font-medium mr-2">Official Sponsor:</span>
                    <span>
                      WK Foundation 
                    </span>
                  </div>

                  <div className="bg-yellow-300/20 border border-yellow-400/30 rounded-lg p-3 text-sm">
                    <p className="font-medium text-yellow-300">
                      Donations are welcomed
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal w-full"
                >
                  <Link to="/contact">Join the Class</Link>
                </Button>
              </div>

              <div
                className="rounded-lg overflow-hidden shadow-xl order-1 md:order-2"
                data-aos="fade-left"
              >
                <img
                  src="https://www.shutterstock.com/image-photo/elderly-woman-her-trainer-gym-600nw-2415707205.jpg"
                  alt="Senior Boxing Program"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Women's Self Defense */}
        <section id="self-defense" className="section-padding bg-wk-charcoal">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className="rounded-lg overflow-hidden shadow-xl"
                data-aos="fade-right"
              >
                <img
                  src="https://i0.wp.com/bhamnow.com/wp-content/uploads/2020/01/self-defense-class.jpg?resize=563%2C352&quality=89&ssl=1"
                  alt="Women's Self Defense Program"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div data-aos="fade-left">
                <h2 className="text-3xl font-bold text-wk-gold mb-2">
                  Women's Self Defense
                </h2>
                <h3 className="text-xl text-white mb-4 flex items-center">
                  <span className="mr-2">Free Interactive Workshop</span>
                  <span className="bg-white text-red-600 text-sm font-bold px-2 py-1 rounded-full">
                    FREE
                  </span>
                </h3>

                <p className="text-gray-300 mb-4">
                  This free, one-day, interactive class is designed to educate
                  you on how to diagnose a situation and learn techniques to
                  protect yourself from potentially dangerous situations.
                </p>

                <p className="text-gray-300 mb-6">
                  During the workshop, you will practice techniques to help you
                  gain a better understanding of personal self-defense. You will
                  also learn about situational awareness which will help you
                  avoid dangerous situations.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex flex-col text-gray-300 mb-3">
                    <span className="font-medium text-white mb-1">
                      What You Will Learn:
                    </span>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Strikes</li>
                      <li>Situational Awareness</li>
                      <li>Victimology</li>
                      <li>Defensive Positions</li>
                      <li>Combat Mindset</li>
                      <li>Targeting</li>
                    </ul>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Schedule:</span>
                    <span className="ml-2">
                      Every 3rd Saturday, Starting at 9am
                    </span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Location:</span>
                    <span className="ml-2">254 D Sunset Ave, Suisun City</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Email:</span>
                    <span className="ml-2">wkfboard@gmail.com</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Phone className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2">707-439-8897</span>
                  </div>

                  <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-3 text-sm">
                    <p className="font-medium text-white">
                      Donations Always Welcomed
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      For seminars for small businesses and private groups
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-wk-red hover:bg-red-700 text-white w-full"
                >
                  <Link to="/contact">Register Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CallToAction compact />
        \{/* Video Section */}
        <section className="py-16 bg-wk-dark">
          <div className="container mx-auto">
            <div
              className="text-center mb-8"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Hear about our Impact
              </h2>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/lGCscWvjGoo?si=N6MlcKmOvtUVK2ig"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Programs;
