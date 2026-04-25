import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-wk-dark py-16 md:py-24 relative">
  <div className="absolute inset-0 z-0">
    <img
      src="https://static.wixstatic.com/media/4f8116_f841597e0e0e435e8a331a29e2db03ec~mv2.jpg/v1/fill/w_684,h_353,al_c,lg_1,q_80,enc_avif,quality_auto/helping-hands.jpg"
      alt="Support Our Mission"
      className="w-full h-full object-cover opacity-40"
      style={{ objectPosition: "center" }}
    />
  </div>
  <div className="container-custom relative z-10">
    <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Support Our Mission
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Your generosity helps us continue providing quality martial arts
        programs to our community and supports our mission of building
        strength, character, and community.
      </p>
    </div>
  </div>
</section>

      <section className="section-padding bg-wk-charcoal">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-white mb-6">
                Make a Difference
              </h2>
              <p className="text-gray-300 mb-4">
                Your donation directly supports our programs that serve youth,
                seniors, and women in our community. Every contribution, no
                matter the size, helps us continue our mission.
              </p>
              <p className="text-gray-300 mb-6">
                As a 501(c)(3) nonprofit organization, your donations are
                tax-deductible and help us maintain affordable access to our
                programs for all members of our community.
              </p>

              <div className="bg-wk-lightgray p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-wk-dark mb-4">
                  Your Impact
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-wk-blue mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-wk-dark">
                      $25 provides materials for one youth in the BREATHE
                      program
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-wk-blue mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-wk-dark">
                      $50 sponsors a senior for one month of boxing classes
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-wk-blue mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-wk-dark">
                      $100 supports a self-defense workshop for 5 women
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-wk-blue mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-wk-dark">
                      $250 helps fund program supplies and equipment
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div data-aos="fade-left">
              <Card className="shadow-lg bg-wk-darkgray border border-white/10 overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 pb-0">
                    <h3 className="text-2xl font-bold text-wk-gold mb-2">
                      Donate Now
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Secure donations powered by Zeffy — 100% of your gift goes to WK Foundation.
                    </p>
                  </div>

                  <div className="w-full bg-white" style={{ height: "1100px" }}>
                    <iframe
                      title="Donation form powered by Zeffy"
                      src="https://www.zeffy.com/embed/donation-form/donate-to-change-lives-12790"
                      allow="payment *; clipboard-write *"
                      allowTransparency={true}
                      loading="lazy"
                      className="w-full h-full border-0 block"
                      scrolling="no"
                    />
                  </div>

                  <div className="p-6 pt-4 text-center text-sm text-gray-300 border-t border-white/10">
                    <p>
                      Wahiawa Kajukenbo Foundation is a registered 501(c)(3)
                      nonprofit organization.
                      <br />
                      All donations are tax-deductible.
                    </p>
                    <a
                      href="https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-12790"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-wk-gold hover:underline font-medium"
                    >
                      Open donation form in a new tab →
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 bg-wk-lightgray p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-wk-dark mb-4">
                  Other Ways to Donate
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7  w-7 text-wk-blue mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span className="text-wk-dark">
                      Mail a check to: Wahiawa Kajukenbo Foundation, 821 Texas Street, Fairfield, CA 94533
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-wk-blue mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                      />
                    </svg>
                    <span className="text-wk-dark">
                      Make an in-kind donation (contact us for details)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-wk-blue mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-wk-dark">
                      Set up a recurring donation (monthly, quarterly, or
                      annually)
                    </span>
                  </li>
                </ul>

                <div className="mt-4">
                  <Link
                    to="/contact"
                    className="text-wk-blue hover:underline font-medium"
                  >
                    Contact us for more information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Donate;
