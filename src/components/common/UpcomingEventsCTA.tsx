import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles, ArrowRight } from "lucide-react";

interface UpcomingEventsCTAProps {
  /** "section" wraps in a full <section> with bg + padding. "inline" renders only the card grid. */
  variant?: "section" | "inline";
  heading?: string;
  subheading?: string;
}

const events = [
  {
    id: "fireworks",
    badge: "Fundraiser",
    title: "4th of July Fireworks Booth",
    date: "June 27 – July 4, 2026 · 9am–9pm daily",
    location: "Black Bear Diner Parking Lot, Fairfield",
    description:
      "Support our free programs by volunteering at our fireworks booth. Volunteers must be 18+.",
    cta: { label: "Volunteer", to: "/contact" },
    badgeBg: "bg-wk-red/20",
    badgeText: "text-wk-red",
  },
  {
    id: "ohana-fest",
    badge: "Annual Event",
    title: "Ohana Fest 2026",
    date: "Saturday, September 12, 2026 · 10am–4pm",
    location: "Suisun City Waterfront",
    description:
      "Our signature celebration of community, martial arts, and Hawaiian culture. Stay for Concert in the Park right after!",
    cta: { label: "View Details", to: "/ohana-fest" },
    badgeBg: "bg-wk-gold/20",
    badgeText: "text-wk-gold",
  },
];

const UpcomingEventsCTA = ({
  variant = "section",
  heading = "Upcoming Events",
  subheading = "Join our 'ohana at these upcoming community events.",
}: UpcomingEventsCTAProps) => {
  const grid = (
    <div className="grid md:grid-cols-2 gap-6">
      {events.map((event, index) => (
        <div
          key={event.id}
          className="bg-wk-darkgray rounded-xl p-6 border border-white/10 hover:border-wk-gold/40 transition-colors flex flex-col"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className={`inline-flex items-center px-3 py-1 rounded-full ${event.badgeBg}`}>
              {event.id === "ohana-fest" ? (
                <Calendar className={`w-4 h-4 ${event.badgeText} mr-1.5`} />
              ) : (
                <Sparkles className={`w-4 h-4 ${event.badgeText} mr-1.5`} />
              )}
              <span className={`${event.badgeText} text-xs font-semibold uppercase tracking-wide`}>
                {event.badge}
              </span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
          <p className="text-wk-gold text-sm font-medium mb-1">{event.date}</p>
          <p className="text-gray-400 text-sm mb-3">{event.location}</p>
          <p className="text-gray-300 text-sm mb-5 flex-grow">{event.description}</p>
          <Button
            asChild
            className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal font-semibold w-full sm:w-auto"
          >
            <Link to={event.cta.to} className="flex items-center justify-center gap-2">
              {event.cta.label} <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );

  if (variant === "inline") {
    return grid;
  }

  return (
    <section className="py-16 bg-wk-charcoal">
      <div className="container-custom">
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="inline-flex items-center bg-wk-gold/20 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-5 h-5 text-wk-gold mr-2" />
            <span className="text-wk-gold font-medium">Mark Your Calendar</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{heading}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{subheading}</p>
        </div>
        {grid}
        <div className="text-center mt-10" data-aos="fade-up">
          <Button asChild size="lg" className="bg-wk-red hover:bg-red-700 text-white">
            <Link to="/events" className="flex items-center gap-2">
              See All Events <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsCTA;
