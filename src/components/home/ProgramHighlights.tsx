
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProgramHighlights = () => {
  const programs = [
    {
      id: "breathe",
      title: "BREATHE",
      description: "Youth Anti-Bullying Initiative",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    },
    {
      id: "senior-boxing",
      title: "Senior Boxing",
      description: "Fitness Program for Seniors",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    },
    {
      id: "self-defense",
      title: "Women's Self Defense",
      description: "Empowerment Through Training",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wk-dark mb-4">Our Programs</h2>
          <p className="text-wk-gray max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-gray-200 h-[160px] -mt-6 -mx-6 mb-4 rounded-t-lg flex items-center justify-center text-gray-500">
                  Program Image
                </div>
                <CardTitle className="text-wk-blue">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-wk-gray">{program.body}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-wk-blue hover:bg-blue-600">
                  <Link to={`/programs#${program.id}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-wk-teal hover:bg-teal-600">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
