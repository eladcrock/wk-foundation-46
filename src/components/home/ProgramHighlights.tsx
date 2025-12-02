import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      image: "/lovable-uploads/women.png"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={program.id} 
              className="shadow-lg hover:shadow-xl transition-shadow border border-white/10 bg-wk-darkgray text-white"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <CardHeader className="p-0">
                <div className="rounded-t-lg overflow-hidden bg-white">
                  <AspectRatio ratio={16/9}>
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="max-w-full max-h-full object-contain transition-transform hover:scale-105 duration-700"
                      />
                    </div>
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <CardTitle className="text-wk-gold">{program.title}</CardTitle>
                  <CardDescription className="text-gray-300">{program.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{program.body}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-wk-gold hover:bg-yellow-500 text-wk-charcoal">
                  <Link to={`/programs#${program.id}`}>Learn More</Link>
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