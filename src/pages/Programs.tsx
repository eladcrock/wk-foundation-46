import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, School, Users, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/common/CallToAction";
import UpcomingEventsCTA from "@/components/common/UpcomingEventsCTA";
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
              src="https://www.suisun.com/files/sharedassets/suisuncity/v/1/community/images/suisun-city-page.jpg"       alt="Our Programs"
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
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div
                className="rounded-lg overflow-hidden shadow-xl flex items-center justify-center min-h-[400px]"
                data-aos="fade-right"
              >
                <img
                  src="/lovable-uploads/breathe-flyer.png"
                  alt="BREATHE Youth Anti-Bullying Program"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto"
                />
              </div>

              <div data-aos="fade-left">
                <h2 className="text-3xl font-bold text-wk-gold mb-2">
                  B.R.E.A.T.H.E.
                </h2>
                <h3 className="text-xl text-white mb-4">
                  Bully Response Education Aimed Towards Helping Everyone
                </h3>

                <p className="text-gray-300 mb-6">
                  Be Buddies, Not Bullies. We empower school-aged children to
                  recognize, respond to, and report bullying — building safer
                  schools and stronger communities.
                </p>

                {/* FSUSD Pilot Program Highlight */}
                <div className="bg-wk-darkgray border-l-4 border-wk-gold rounded-lg p-5 mb-6">
                  <div className="inline-block bg-wk-gold text-wk-charcoal text-xs font-bold px-2 py-1 rounded mb-2">
                    NEW PILOT PROGRAM
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    FSUSD Partnership · Dan O. Root Health & Wellness
                  </h4>
                  <p className="text-gray-300 text-sm mb-3">
                    A pilot social-emotional learning program with Fairfield-Suisun
                    Unified School District. The B.R.E.A.T.H.E. framework gives
                    elementary students tools to manage big emotions through movement
                    and breathing:
                  </p>
                  <ul className="text-gray-300 text-sm mb-3 space-y-1">
                    <li><span className="text-wk-gold font-bold">B</span>ig feelings are OK</li>
                    <li><span className="text-wk-gold font-bold">R</span>elax your body</li>
                    <li><span className="text-wk-gold font-bold">E</span>xhale and breathe</li>
                    <li><span className="text-wk-gold font-bold">A</span>sk for help</li>
                    <li><span className="text-wk-gold font-bold">T</span>hink of a better choice</li>
                    <li><span className="text-wk-gold font-bold">H</span>ave kindness</li>
                    <li><span className="text-wk-gold font-bold">E</span>veryone matters</li>
                  </ul>
                  <p className="text-gray-300 text-sm mb-3">
                    Led by <span className="text-white font-medium">Sonny Ramos</span> &amp; <span className="text-white font-medium">Ady Ancheta</span> — Kajukenbo black belts with 24+ years of youth instruction experience.
                  </p>
                  <p className="text-gray-400 text-xs italic">
                    Sponsored by A Honu Day (Utah).
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <img
                      src="/lovable-uploads/breathe-session-1.jpg"
                      alt="B.R.E.A.T.H.E. session at Dan O. Root"
                      className="w-full h-40 object-cover rounded-lg"
                      loading="lazy"
                    />
                    <img
                      src="/lovable-uploads/breathe-session-2.jpg"
                      alt="B.R.E.A.T.H.E. session at Dan O. Root"
                      className="w-full h-40 object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Preschool Program */}
                <div className="bg-wk-darkgray border-l-4 border-wk-red rounded-lg p-5 mb-6">
                  <div className="inline-block bg-wk-red text-white text-xs font-bold px-2 py-1 rounded mb-2">
                    PRESCHOOL EDITION
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    B.R.E.A.T.H.E. for Preschoolers — with Buddy the Bulldog
                  </h4>
                  <p className="text-gray-300 text-sm">
                    A playful, age-appropriate version teaching kindness, sharing,
                    and being a good buddy through storytelling and movement.
                  </p>
                </div>

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
                    <span className="ml-2">(707) 439-8897</span>
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
            <div className="grid md:grid-cols-2 gap-12 items-start">
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
                  through boxing-inspired workouts. Led by Professional MMA fighter
                  <span className="text-wk-gold font-medium"> Blake Perry</span>.
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
                className="rounded-lg shadow-xl order-1 md:order-2 flex items-center justify-center min-h-[400px] p-4"
                data-aos="fade-left"
              >
                <img
                  src="/lovable-uploads/senior-fitness-flyer.png"
                  alt="Senior Boxing Program"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Women's Self Defense */}
        <section id="self-defense" className="section-padding bg-wk-charcoal">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div
                className="rounded-lg overflow-hidden shadow-xl flex items-center justify-center min-h-[400px]"
                data-aos="fade-right"
              >
                <img
                  src="/lovable-uploads/womens2026.png"
                  alt="Women's Self Defense Program"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto"
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

                <div className="bg-wk-red/20 border border-wk-red/40 rounded-lg p-4 mb-6">
                  <div className="inline-block bg-wk-red text-white text-xs font-bold px-2 py-1 rounded mb-2">
                    SPECIAL EVENT
                  </div>
                  <p className="text-white font-semibold mb-1">Preschool Mommies & Staff Workshop</p>
                  <p className="text-gray-300 text-sm">
                    A special 2-hour women's self-defense session — May 22, 2pm – 4pm.
                  </p>
                </div>

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
                    <span className="ml-2">821 Texas Street, Fairfield, CA 94533</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Email:</span>
                    <span className="ml-2">wkfboard@gmail.com</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Phone className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2">(707) 439-8897</span>
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

        {/* Ahgung Award */}
        <section id="ahgung-award" className="section-padding bg-wk-charcoal">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div
                className="rounded-lg overflow-hidden shadow-xl flex items-center justify-center min-h-[400px] bg-white/5"
                data-aos="fade-right"
              >
                <img
                  src="/lovable-uploads/ahgung-award-flyer.png"
                  alt="Ahgung Award — WK Foundation Youth Scholarship"
                  className="w-full h-auto object-contain max-h-[700px] mx-auto"
                />
              </div>

              <div data-aos="fade-left">
                <h2 className="text-3xl font-bold text-wk-gold mb-2">
                  Ahgung Award
                </h2>
                <h3 className="text-xl text-white mb-4 flex items-center">
                  <span className="mr-2">Youth Scholarship</span>
                  <span className="bg-wk-gold text-wk-charcoal text-sm font-bold px-2 py-1 rounded-full">
                    $100 × 4
                  </span>
                </h3>

                <p className="text-gray-300 mb-4">
                  WK Foundation is proud to offer four <span className="text-wk-gold font-medium">$100 awards</span> to
                  any active Train 4 Life student between the ages of <span className="text-white font-medium">5–18 years old</span>.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-wk-darkgray border-l-4 border-wk-gold rounded-lg p-4">
                    <p className="font-semibold text-white mb-1">Ages 5–10</p>
                    <p className="text-gray-300 text-sm">
                      A parent, teacher, or community adult (such as a coach or pastor) can
                      nominate a student. A letter of recommendation must be submitted clearly
                      stating why the student is deserving of the award.
                    </p>
                  </div>

                  <div className="bg-wk-darkgray border-l-4 border-wk-red rounded-lg p-4">
                    <p className="font-semibold text-white mb-1">Ages 11–18</p>
                    <p className="text-gray-300 text-sm">
                      Submit an essay (max 300 words) describing the altruistic character you
                      possess, how you are involved in the community, and your hopes/plans for
                      making a positive change.
                    </p>
                  </div>

                  <div className="bg-wk-gold/20 border border-wk-gold/40 rounded-lg p-3 text-sm">
                    <p className="font-medium text-wk-gold">
                      Deadline: Friday, May 1st
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      For all letters of recommendation and essays.
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal w-full"
                >
                  <Link to="/contact">Nominate or Apply</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Chiropractic Care */}
        <section id="chiropractic" className="section-padding bg-wk-dark">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1" data-aos="fade-right">
                <h2 className="text-3xl font-bold text-wk-gold mb-2">
                  Chiropractic Care
                </h2>
                <h3 className="text-xl text-white mb-4 flex items-center">
                  <span className="mr-2">Donation Based Services</span>
                  <span className="bg-gray-600 text-white text-sm font-bold px-2 py-1 rounded-full">
                    DONATION
                  </span>
                </h3>

                <p className="text-gray-300 mb-4">
                  Chiropractic Care is available to ALL members of the T4L Community. 
                  All services are donation based.
                </p>

                <p className="text-gray-300 mb-6">
                  We will be on site every other week. Book your initial appointment 
                  and make sure to click under "Train 4 Life."
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Users className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Target Audience:</span>
                    <span className="ml-2">T4L Community Members</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Schedule:</span>
                    <span className="ml-2">Every other week</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-2 text-wk-gold" />
                    <span className="font-medium">Location:</span>
                    <span className="ml-2">Train 4 Life Center</span>
                  </div>

                  <div className="bg-gray-600/20 border border-gray-500/30 rounded-lg p-3 text-sm">
                    <p className="font-medium text-white">
                      All services are donation based
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal w-full"
                >
                  <a href="https://www.fremontcachiropractor.com" target="_blank" rel="noopener noreferrer">Book Appointment</a>
                </Button>
              </div>

              <div
                className="rounded-lg overflow-hidden shadow-xl order-1 md:order-2 flex items-center justify-center min-h-[400px]"
                data-aos="fade-left"
              >
                <img
                  src="/lovable-uploads/chiropractic-care-flyer.jpg"
                  alt="Chiropractic Care Program"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <UpcomingEventsCTA />
        <CallToAction compact />
        {/* Video Section */}
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
