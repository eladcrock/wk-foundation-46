
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/common/CallToAction";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const boardMembers = [
    {
      name: "Jane Smith",
      title: "Founder & President",
      image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&q=80&w=400",
      bio: "Jane has been practicing Kajukenbo for over 20 years and is dedicated to sharing its principles with the community."
    },
    {
      name: "John Davis",
      title: "Vice President",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      bio: "John brings over 15 years of nonprofit leadership experience to the foundation."
    },
    {
      name: "Sarah Johnson",
      title: "Treasurer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      bio: "Sarah has a background in finance and is passionate about making martial arts accessible to all."
    },
    {
      name: "Michael Lee",
      title: "Secretary",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      bio: "Michael has been involved with the foundation since its inception and coordinates community outreach."
    },
  ];

  const teamMembers = [
    {
      name: "Lisa Wong",
      title: "Program Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Robert Taylor",
      title: "Community Outreach",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Emma Miller",
      title: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "David Chen",
      title: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-wk-dark py-16 md:py-24 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?auto=format&fit=crop&q=80&w=2000" 
              alt="About Us" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-wk-dark/0 to-wk-dark"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
              <p className="text-lg text-gray-300 mb-8">
                Learn about our mission, history, and the dedicated team behind the 
                Wahiawa Kajukenbo Foundation.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="section-padding bg-wk-charcoal">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&q=80&w=1200" 
                  alt="Mission Statement" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-wk-gold mb-6">Mission Statement</h2>
                <p className="text-gray-300 mb-4">
                  The Wahiawa Kajukenbo Foundation is dedicated to building strength, character, and community 
                  through the traditions and values of Kajukenbo martial arts training.
                </p>
                <p className="text-gray-300 mb-4">
                  We strive to make quality martial arts instruction accessible to all members of our community, 
                  with specialized programs designed to serve youth, seniors, and women.
                </p>
                <p className="text-gray-300">
                  Through our programs, we aim to foster physical fitness, mental resilience, 
                  and a sense of belonging while preserving and sharing the rich cultural heritage of Kajukenbo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-wk-dark">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Story</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 mb-4">
                Founded in 2010, the Wahiawa Kajukenbo Foundation grew from a small community martial arts class 
                into a nonprofit organization dedicated to serving the diverse needs of our community through 
                specialized martial arts programs.
              </p>
              <p className="text-gray-300 mb-4">
                When our founder, Jane Smith, noticed the positive impact Kajukenbo training was having on local youth, 
                she envisioned expanding the reach to serve more community members. With support from fellow martial artists 
                and community leaders, the Foundation was established to formalize and grow these efforts.
              </p>
              <p className="text-gray-300">
                Today, we offer a range of programs designed to meet the unique needs of different segments of our community, 
                from anti-bullying initiatives for youth to fitness classes for seniors and self-defense training for women. 
                Throughout our growth, we've remained committed to the core values of Kajukenbo: respect, discipline, perseverance, 
                and community service.
              </p>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="section-padding bg-wk-charcoal">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Board of Directors</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Meet the dedicated individuals who provide leadership and guidance to our organization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden border border-white/10 bg-wk-darkgray text-white">
                  <div className="h-[200px] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-wk-gold">{member.name}</h3>
                    <p className="text-white mb-3">{member.title}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="section-padding bg-wk-dark">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Team</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Meet the people who make our programs possible day in and day out.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden border border-white/10 bg-wk-darkgray text-white">
                  <div className="h-[200px] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-wk-gold">{member.name}</h3>
                    <p className="text-white">{member.title}</p>
                  </CardContent>
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

export default About;
