
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
        <section className="bg-wk-lightgray py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-wk-dark mb-6">Our Programs</h1>
              <p className="text-lg text-wk-gray mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                Proin gravida dolor sit amet lacus accumsan et viverra.
              </p>
            </div>
          </div>
        </section>

        {/* BREATHE Program */}
        <section id="breathe" className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-300 h-[400px] rounded-lg flex items-center justify-center text-gray-500">
                BREATHE Program Image
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-wk-blue mb-2">BREATHE</h2>
                <h3 className="text-xl text-wk-dark mb-4">Youth Anti-Bullying Initiative</h3>
                
                <p className="text-wk-gray mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                
                <p className="text-wk-gray mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
                  sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                
                <Button asChild className="bg-wk-blue hover:bg-blue-600">
                  <Link to="/contact">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Senior Boxing */}
        <section id="senior-boxing" className="section-padding bg-wk-lightgray">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-wk-blue mb-2">Senior Boxing</h2>
                <h3 className="text-xl text-wk-dark mb-4">Fitness Program for Seniors</h3>
                
                <p className="text-wk-gray mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                
                <p className="text-wk-gray mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
                  sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                
                <Button asChild className="bg-wk-blue hover:bg-blue-600">
                  <Link to="/contact">Get Involved</Link>
                </Button>
              </div>
              
              <div className="bg-gray-300 h-[400px] rounded-lg flex items-center justify-center text-gray-500 order-1 md:order-2">
                Senior Boxing Program Image
              </div>
            </div>
          </div>
        </section>

        {/* Women's Self Defense */}
        <section id="self-defense" className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-300 h-[400px] rounded-lg flex items-center justify-center text-gray-500">
                Women's Self Defense Program Image
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-wk-blue mb-2">Women's Self Defense</h2>
                <h3 className="text-xl text-wk-dark mb-4">Empowerment Through Training</h3>
                
                <p className="text-wk-gray mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                
                <p className="text-wk-gray mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
                  sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-wk-blue hover:bg-blue-600">
                    <Link to="/contact">Get Involved</Link>
                  </Button>
                </div>
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
