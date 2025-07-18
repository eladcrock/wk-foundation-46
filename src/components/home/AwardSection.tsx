import { Award } from "lucide-react";

const AwardSection = () => {
  return (
    <section className="bg-wk-darkgray section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className="flex flex-col gap-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              City Council Award
            </h2>
            <div className="inline-flex items-center bg-wk-dark px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-wk-gold mr-2" />
              <span className="text-white font-medium">Achievement</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg">
              We are proud to announce that the Wahiawa Kajukenbo Foundation has
              won the city council award for Fairfield Parades walking division.
              This recognition celebrates our commitment to community engagement. </p>
          </div>

          {/* Image */}
     
            <img
              src="/lovable-uploads/parade.png"
              alt="City Council Award for Fairfield Parades Walking Division"
              className="w-full h-[400px] object-contain block rounded-lg"
              style={{ marginTop: "-50px", marginBottom: "-50px" }}
              />
        </div>
      </div>
    </section>
  );
};

export default AwardSection;