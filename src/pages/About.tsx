import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/common/CallToAction";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const boardMembers = [
    {
      name: "Jane Smith",
      title: "Founder & President",
      image:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&q=80&w=400",
      bio: "Jane has been practicing Kajukenbo for over 20 years and is dedicated to sharing its principles with the community.",
    },
    {
      name: "John Davis",
      title: "Vice President",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      bio: "John brings over 15 years of nonprofit leadership experience to the foundation.",
    },
    {
      name: "Sarah Johnson",
      title: "Treasurer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      bio: "Sarah has a background in finance and is passionate about making martial arts accessible to all.",
    },
    {
      name: "Michael Lee",
      title: "Secretary",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      bio: "Michael has been involved with the foundation since its inception and coordinates community outreach.",
    },
  ];

  const teamMembers = [
    {
      name: "Lisa Wong",
      title: "Program Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Robert Taylor",
      title: "Community Outreach",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Emma Miller",
      title: "Events Coordinator",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "David Chen",
      title: "Volunteer Coordinator",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-wk-dark py-16 md:py-24 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="https://train4life.info/wp-content/uploads/2025/02/RP1_5075-Enhanced-NR-scaled.jpg"
              alt="About Us"
              className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-wk-dark/0 to-wk-dark"></div>
          </div>
          <div className="container-custom relative z-10">
            <div
              className="max-w-3xl mx-auto text-center"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Learn about our mission, history, and the dedicated team behind
                the Wahiawa Kajukenbo Foundation.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="section-padding bg-wk-charcoal">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className="rounded-lg overflow-hidden shadow-xl"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <img
                  src="https://s3-media0.fl.yelpcdn.com/bphoto/gfWv1mXofqESczSSshIjiQ/o.jpg"
                  alt="Mission Statement"
                  className="w-full h-[400px] object-cover" />
              </div>

              <div data-aos="fade-left" data-aos-duration="800">
                <h2 className="text-3xl font-bold text-wk-gold mb-6">
                  Mission Statement
                </h2>
                <p className="text-gray-300 mb-4">
                  {" "}
                  <p className="text-gray-300 mb-4">
                    “To enrich the community, both parents and children, through
                    the teaching of proper kajukenbo techniques, which entails
                    building and fine tuning the physical, mental and spiritual
                    aspects of one’s own life.
                  </p>
                  To educate, guide and challenge the future generation of
                  leaders, by offering an after school program, where children
                  will learn, not only about proper self defense techniques, but
                  also self-discipline, respect, and self-control. Ultimately,
                  leading them into the direction of greater understanding and
                  quality of life.{" "}
                </p>
                <p className="text-gray-300 mb-4">
                  To establish a Foundation, where revenues can be directed back
                  into Community projects, education, and instruction; also to
                  provide assistance and opportunity for those who have been
                  abused and those unable to afford, with goals totally focused
                  on Fellowship and Growth.
                </p>
                <p className="text-gray-300 mb-4">
                  To carry on the legacy of the Ramos Family’s dedication,
                  integrity, and excellence in teaching the God given Art of
                  Kajukenbo”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-wk-dark">
          <div className="container-custom">
            <div
              className="text-center mb-12"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Story
              </h2>
            </div>
            <div
              className="max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <p className="text-gray-300 mb-4">
                Adopting several martial arts form, kajukenbo - Ka (Karate), Ju
                (Judo/Jiujitsu), Ken (Kenpo), Bo (Gung-fu/Chinese Boxing), was
                developed in Hawaii in 1947. Ahgung Tony Ramos, a first
                generation of kajukenbo students, began teaching kajukenbo in
                Wahiawa in 1958. Ahgung went on to establish the first ever
                kajukenbo school in U.S. mainland in 1960, and finally settling
                in Fairfield, CA in 1962.{" "}
              </p>{" "}
              <p>
                Today, Wahiawa Kajukenbo is an extension of the late Ahgung Tony
                Ramos’ teachings, which is carried on by his eldest son,
                GrandMaster Tony Ramos, and grandson, Sifu Anthony “Sonny”
                Ramos.{" "}
              </p>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="section-padding bg-wk-charcoal">
          <div className="container-custom">
            <div
              className="text-center mb-12"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Board of Directors
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Meet the dedicated individuals who provide leadership and
                guidance to our organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {boardMembers.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border border-white/10 bg-wk-darkgray text-white"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <div className="h-[220px] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top" />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-wk-gold">
                      {member.name}
                    </h3>
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
            <div
              className="text-center mb-12"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Team
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Meet the people who make our programs possible day in and day
                out.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border border-white/10 bg-wk-darkgray text-white"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <div className="h-[220px] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top" />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-wk-gold">
                      {member.name}
                    </h3>
                    <p className="text-white">{member.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        <CallToAction compact />
      </main>
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

<Footer />
    </div>
    </>
  );
};

export default About;
