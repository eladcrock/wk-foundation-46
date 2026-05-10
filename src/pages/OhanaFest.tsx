import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OhanaGallery from "@/components/events/OhanaGallery";
import SponsorCTA from "@/components/common/SponsorCTA";
import { Calendar, MapPin, Sparkles, Camera, ArrowRight } from "lucide-react";

const OhanaFest = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-wk-dark py-16 md:py-24 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/ohanaHero.jpg"
              alt="Ohana Fest"
              className="w-full h-full object-cover opacity-60"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-wk-dark/0 to-wk-dark"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <div className="inline-flex items-center bg-wk-gold/20 px-4 py-2 rounded-full mb-4">
                <Calendar className="w-5 h-5 text-wk-gold mr-2" />
                <span className="text-wk-gold font-medium">
                  Annual Signature Event
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ohana Fest
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Our signature annual celebration of community, martial arts, and
                Hawaiian culture — featuring island-style vendors, food, live
                performances, and activities for the whole family.
              </p>
            </div>
          </div>
        </section>

        {/* Featured 2025 Recap Video + 2026 CTA */}
        <section className="py-16 bg-wk-charcoal">
          <div className="container-custom">
            <div
              className="grid lg:grid-cols-5 gap-8 items-center"
              data-aos="fade-up"
            >
              <div className="lg:col-span-3 rounded-xl overflow-hidden bg-wk-charcoal border border-white/10 shadow-2xl aspect-video">
                <video
                  src="https://www.dropbox.com/scl/fi/80yc8wj51hwzy2ynhcgmu/OHANA-FEST-2025-new-song.mp4?rlkey=6wph5bvepnp28w2vd8518jg5r&raw=1"
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-2 bg-gradient-to-br from-wk-darkgray to-wk-charcoal rounded-xl p-6 md:p-8 border border-wk-gold/30">
                <div className="inline-flex items-center bg-wk-red/20 px-3 py-1 rounded-full mb-3">
                  <Sparkles className="w-4 h-4 text-wk-red mr-1.5" />
                  <span className="text-wk-red text-xs font-semibold uppercase tracking-wide">
                    Save the Date
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Don't Miss Ohana Fest 2026!
                </h2>
                <p className="text-gray-300 mb-4">
                  Watch the 2025 recap and see what awaits you next year.
                  Saturday, September 12, 2026 · 10am–4pm at Suisun City
                  Waterfront — followed by Concert in the Park.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal font-semibold"
                  >
                    <a
                      href="/deck.pdf#pagemode=FullScreen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Sponsor Deck
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-wk-gold text-wk-gold hover:bg-wk-gold hover:text-wk-charcoal"
                  >
                    <Link to="/contact">Become a Sponsor</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Save the Date + Mahalo Sponsors flyers */}
        <section className="py-16 bg-wk-dark">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up">
              <div className="bg-wk-darkgray rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-wk-gold mb-4 text-center">
                  Save the Date
                </h3>
                <img
                  src="/lovable-uploads/ohana-fest-2026-save-the-date.png"
                  alt="Ohana Fest 2026 Save the Date Flyer"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="bg-wk-darkgray rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-wk-gold mb-4 text-center">
                  Mahalo to Last Year's Sponsors
                </h3>
                <img
                  src="/lovable-uploads/ohana-fest-2026-mahalo-sponsors.png"
                  alt="Mahalo to Last Year's Sponsors"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Ohana Fest */}
        <section className="py-16 bg-wk-charcoal">
          <div className="container-custom">
            <div
              className="bg-wk-darkgray rounded-xl p-6 md:p-8 border border-white/10"
              data-aos="fade-up"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-wk-gold mb-4">
                About Ohana Fest
              </h2>
              <p className="text-gray-300 mb-6">
                Join us for the annual Ohana Fest at Suisun Waterfront Harbor.
                Experience the art of Kajukenbo while connecting with community
                members through island-style vendors, food, and live
                performances.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-wk-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Date</h4>
                    <p className="text-gray-300">
                      Saturday, September 12, 2026 · 10am – 4pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-wk-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">
                      Harbor Plaza · Suisun Waterfront · Main St × Solano St
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-wk-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">After Party</h4>
                    <p className="text-gray-300">
                      Concert in the Park immediately after — in collaboration
                      with the City of Suisun
                    </p>
                  </div>
                </div>
              </div>
              <SponsorCTA variant="banner" />
            </div>
          </div>
        </section>

        {/* Archive Gallery */}
        <section className="py-16 bg-wk-dark">
          <div className="container-custom">
            <div
              className="bg-wk-darkgray rounded-xl p-6 md:p-8 border border-white/10"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-2 mb-6">
                <Camera className="w-5 h-5 text-wk-gold" />
                <h3 className="text-xl font-bold text-white">
                  Ohana Fest 2024 Archive
                </h3>
              </div>
              <OhanaGallery />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-wk-charcoal">
          <div className="container-custom text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Involved with Ohana Fest 2026
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Sponsor, vendor, performer, or volunteer — there's a place for
              everyone in our 'ohana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal font-semibold"
              >
                <a
                  href="/deck.pdf#pagemode=FullScreen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Sponsor Packages <ArrowRight size={16} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-wk-gold text-wk-gold hover:bg-wk-gold hover:text-wk-charcoal"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OhanaFest;
