
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/common/CallToAction";

const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-wk-dark py-16 md:py-24 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=2000" 
              alt="Our Programs" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-wk-dark/0 to-wk-dark"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Programs</h1>
              <p className="text-lg text-gray-300 mb-8">
                Discover our specialized martial arts training programs designed to serve different segments 
                of our community and build strength, character, and self-confidence.
              </p>
            </div>
          </div>
        </section>

        {/* BREATHE Program */}
        <section id="breathe" className="section-padding bg-wk-charcoal">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl" data-aos="fade-right">
                <img 
                  src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&q=80&w=1200" 
                  alt="BREATHE Youth Anti-Bullying Program" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <div data-aos="fade-left">
                <h2 className="text-3xl font-bold text-wk-gold mb-2">BREATHE</h2>
                <h3 className="text-xl text-white mb-4">Youth Anti-Bullying Initiative</h3>
                
                <p className="text-gray-300 mb-4">
                  The BREATHE program is designed to empower young people with the confidence, discipline, 
                  and skills to stand up against bullying and navigate challenging social situations.
                </p>
                
                <p className="text-gray-300 mb-6">
                  Through a combination of martial arts training, conflict resolution techniques, 
                  and emotional regulation practices, participants learn to control their responses, 
                  develop resilience, and build supportive peer relationships.
                </p>
                
                <Button asChild className="bg-wk-red hover:bg-red-700 text-white w-full">
                  <Link to="/contact">Get Involved</Link>
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
                <h2 className="text-3xl font-bold text-wk-gold mb-2">Senior Boxing</h2>
                <h3 className="text-xl text-white mb-4">Fitness Program for Seniors</h3>
                
                <p className="text-gray-300 mb-4">
                  Our Senior Boxing program offers a fun, low-impact way for older adults to stay active, 
                  improve coordination, and build strength through modified boxing techniques.
                </p>
                
                <p className="text-gray-300 mb-6">
                  Participants enjoy the physical benefits of improved balance, flexibility, and cardiovascular health, 
                  while also experiencing the mental benefits of stress reduction, increased focus, and social connection.
                </p>
                
                <Button asChild className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal w-full">
                  <Link to="/contact">Get Involved</Link>
                </Button>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-xl order-1 md:order-2" data-aos="fade-left">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1200" 
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
              <div className="rounded-lg overflow-hidden shadow-xl" data-aos="fade-right">
                <img 
                  src="https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?auto=format&fit=crop&q=80&w=1200" 
                  alt="Women's Self Defense Program" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <div data-aos="fade-left">
                <h2 className="text-3xl font-bold text-wk-gold mb-2">Women's Self Defense</h2>
                <h3 className="text-xl text-white mb-4">Empowerment Through Training</h3>
                
                <p className="text-gray-300 mb-4">
                  Our Women's Self Defense program teaches practical, effective techniques for personal safety 
                  while building confidence in a supportive, women-centered environment.
                </p>
                
                <p className="text-gray-300 mb-6">
                  Participants learn situational awareness, boundary setting, verbal de-escalation strategies, 
                  and physical techniques designed to work regardless of size or strength differences.
                </p>
                
                <Button asChild className="bg-wk-red hover:bg-red-700 text-white w-full">
                  <Link to="/contact">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction compact />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
