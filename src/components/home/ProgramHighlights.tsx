import { Link } from "react-router-dom";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProgramHighlights = () => {
  const programs = [
    {
      id: "breathe",
      title: "B.R.E.A.T.H.E",
      description: "Youth Anti-Bullying Initiative",
      body: "Empowering young people with confidence, discipline, and the skills to stand up against bullying.",
      image: "/lovable-uploads/breathe-flyer.png"
    },
    {
      id: "senior-boxing",
      title: "Senior Boxing",
      description: "Fitness Program for Seniors",
      body: "Stay active, build strength, and foster community with our specialized boxing program for seniors.",
      image: "/lovable-uploads/senior-fitness-flyer.png"
    },
    {
      id: "self-defense",
      title: "Women's Self Defense",
      description: "Empowerment Through Training",
      body: "Learn practical self-defense techniques while building confidence in a supportive environment.",
      image: "/lovable-uploads/womens2026.png"
    },
    {
      id: "chiropractic",
      title: "Chiropractic Care",
      description: "Donation Based Services",
      body: "Chiropractic care available to all T4L community members. All services are donation based.",
      image: "/lovable-uploads/chiropractic-care-flyer.jpg"
    },
  ];

  return (
    <section className="section-padding bg-wk-dark">
      <div className="container-custom overflow-hidden">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Programs</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Serving our community with specialized martial arts programs designed for all ages and abilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={program.id} 
              className="shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 bg-wk-darkgray text-white overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-auto object-cover transition-transform group-hover:scale-105 duration-700"
                />
              </div>
              <CardFooter className="p-4">
                <Button asChild className="w-full bg-wk-gold hover:bg-yellow-500 text-wk-charcoal font-semibold">
                  <Link to={`/programs#${program.id}`}>{program.title}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <Button asChild size="lg" className="bg-wk-red hover:bg-red-700 text-white">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;