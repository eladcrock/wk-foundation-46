
import { Award } from "lucide-react";

const AwardSection = () => {
  return (
    <section className="bg-wk-darkgray section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="order-2 md:order-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="inline-flex items-center bg-wk-dark px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-wk-gold mr-2" />
              <span className="text-white font-medium">Achievement</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              City Council Award Winner
            </h2>

            <p className="text-gray-300 mb-6 text-lg">
              We are proud to announce that the Wahiawa Kajukenbo Foundation has won the city council award for Fairfield Parades walking division. This recognition celebrates our commitment to community engagement and our dedication to representing the values of Kajukenbo in public events.
            </p>
          </div>

          <div
            className="rounded-lg overflow-hidden shadow-lg order-1 md:order-2"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src="/lovable-uploads/bc9c62f8-57a9-446c-9f03-c8b56b04707c.png"
              alt="City Council Award for Fairfield Parades Walking Division"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
