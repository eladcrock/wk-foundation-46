
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/common/CallToAction";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const boardMembers = [
    {
      name: "Jane Smith",
      title: "Founder & President",
      image: "board-member-1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
    },
    {
      name: "John Davis",
      title: "Vice President",
      image: "board-member-2",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
    },
    {
      name: "Sarah Johnson",
      title: "Treasurer",
      image: "board-member-3",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
    },
    {
      name: "Michael Lee",
      title: "Secretary",
      image: "board-member-4",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
    },
  ];

  const teamMembers = [
    {
      name: "Lisa Wong",
      title: "Program Director",
      image: "team-member-1",
    },
    {
      name: "Robert Taylor",
      title: "Community Outreach",
      image: "team-member-2",
    },
    {
      name: "Emma Miller",
      title: "Events Coordinator",
      image: "team-member-3",
    },
    {
      name: "David Chen",
      title: "Volunteer Coordinator",
      image: "team-member-4",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-wk-lightgray py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-wk-dark mb-6">About Us</h1>
              <p className="text-lg text-wk-gray mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                Proin gravida dolor sit amet lacus accumsan et viverra.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-300 h-[400px] rounded-lg flex items-center justify-center text-gray-500">
                Mission Image
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-wk-blue mb-6">Mission Statement</h2>
                <p className="text-wk-gray mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
                <p className="text-wk-gray mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
                  sic tempor. Sociis natoque penatibus et magnis.
                </p>
                <p className="text-wk-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                  Proin gravida dolor sit amet lacus accumsan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-wk-lightgray">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-wk-dark mb-4">Our Story</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-wk-gray mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
                sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <p className="text-wk-gray mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
                sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien 
                nunc eget odio.
              </p>
              <p className="text-wk-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
                sic tempor.
              </p>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-wk-dark mb-4">Board of Directors</h2>
              <p className="text-wk-gray max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="bg-gray-300 h-[200px] flex items-center justify-center text-gray-500">
                    {member.image}
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-wk-blue">{member.name}</h3>
                    <p className="text-wk-dark mb-3">{member.title}</p>
                    <p className="text-wk-gray text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="section-padding bg-wk-lightgray">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-wk-dark mb-4">Our Team</h2>
              <p className="text-wk-gray max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="bg-gray-300 h-[200px] flex items-center justify-center text-gray-500">
                    {member.image}
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-wk-blue">{member.name}</h3>
                    <p className="text-wk-dark">{member.title}</p>
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
