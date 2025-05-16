import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState("25");
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountChange = (value: string) => {
    setDonationAmount(value);
    if (value !== "custom") {
      setCustomAmount("");
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const handlePayPalDonation = () => {
    const amount = donationAmount === "custom" ? customAmount : donationAmount;
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert("Please enter a valid donation amount");
      return;
    }

    // Replace with your PayPal.me link or business PayPal URL
    window.open(
      `https://www.paypal.com/donate/?hosted_button_id=YOUR_PAYPAL_BUTTON_ID&amount=${amount}`,
      "_blank"
    );
  };

  const handleVenmoDonation = () => {
    const amount = donationAmount === "custom" ? customAmount : donationAmount;
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert("Please enter a valid donation amount");
      return;
    }

    // Replace with your Venmo username
    window.open(
      `https://venmo.com/YOUR_VENMO_USERNAME?txn=pay&amount=${amount}&note=Donation%20to%20WK%20Foundation`,
      "_blank"
    );
  };

  const suggestedAmounts = ["25", "50", "100", "250", "custom"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with brighter overlay */}
        <section className="bg-wk-dark py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
            src="https://static.wixstatic.com/media/4f8116_f841597e0e0e435e8a331a29e2db03ec~mv2.jpg/v1/fill/w_684,h_353,al_c,lg_1,q_80,enc_avif,quality_auto/helping-hands.jpg"
          alt="Support Our Mission"
              className="w-full h-full object-cover opacity-40" /* Increased opacity from 20 to 40 */
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

        {/* Donation Options */}
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
                <Card className="shadow-lg bg-wk-darkgray border border-white/10">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-wk-gold mb-6">
                      Donate Now
                    </h3>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">
                        Select Amount
                      </h4>
                      <RadioGroup
                        value={donationAmount}
                        onValueChange={handleAmountChange}
                        className="grid grid-cols-3 gap-4"
                      >
                        {suggestedAmounts.map((amount) => (
                          <div
                            key={amount}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={amount}
                              id={`amount-${amount}`}
                            />
                            <Label
                              htmlFor={`amount-${amount}`}
                              className="font-medium text-gray-300"
                            >
                              {amount === "custom" ? "Custom" : `$${amount}`}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>

                      {donationAmount === "custom" && (
                        <div className="mt-4">
                          <Label
                            htmlFor="custom-amount"
                            className="text-gray-300"
                          >
                            Enter Amount ($)
                          </Label>
                          <Input
                            id="custom-amount"
                            type="number"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="mt-1 bg-wk-charcoal border-white/20 text-white"
                          />
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-4">
                        Payment Method
                      </h4>
                      <div className="grid grid-cols-1 gap-4">
                        <Button
                          onClick={handlePayPalDonation}
                          className="flex items-center justify-center py-6 bg-white text-wk-charcoal border-2 border-wk-darkgray hover:bg-white/90 transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M7.08,10.28a.47.47,0,0,0-.46.52.45.45,0,0,0,.46.44.47.47,0,0,0,.46-.51A.44.44,0,0,0,7.08,10.28Zm9.12-3.55V9.85h3.92V18H9.51V9.85h5.13V8.53a1.73,1.73,0,0,0-1.73-1.73H9.8V3.92h6.13C21.59,3.92,21.59,6.73,16.2,6.73ZM5.6,6.73V9.85h.86V6.73H7.9V9.85h.85V6.73h.86v3.7a1.66,1.66,0,0,1,.52,1.21,1.74,1.74,0,0,1-1.72,1.73,1.15,1.15,0,0,1-.29,0A1.76,1.76,0,0,1,6.45,11.6a1.66,1.66,0,0,1,.52-1.21v-3.7Z"></path>
                          </svg>
                          Donate with PayPal
                        </Button>
                        <Button
                          onClick={handleVenmoDonation}
                          className="flex items-center justify-center py-6 border-2 border-white text-wk-charcoal bg-white hover:bg-white/90 transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19.5,7.17h-15a.5.5,0,0,0-.5.5v9.16a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V7.67A.5.5,0,0,0,19.5,7.17Z"></path>
                            <path d="M13.86,16.83h.71a.24.24,0,0,0,.24-.24v-.22a.72.72,0,0,0,.48-.28.76.76,0,0,0,.14-.63.74.74,0,0,0-.34-.5.85.85,0,0,0-.64-.09,1,1,0,0,0-.63.43.24.24,0,0,0,.06.32.22.22,0,0,0,.31-.05.52.52,0,0,1,.32-.21.31.31,0,0,1,.28,0,.28.28,0,0,1,.12.19.33.33,0,0,1-.5.2.41.41,0,0,1-.28.1h-.25a.24.24,0,0,0-.23.24.23.23,0,0,0,.23.23H14a.44.44,0,0,1,.33.15.31.31,0,0,1,.06.22.27.27,0,0,1-.13.18.31.31,0,0,1-.28,0,.53.53,0,0,1-.28-.24.22.22,0,0,0-.3-.08.23.23,0,0,0-.09.31,1,1,0,0,0,.59.48v.21A.24.24,0,0,0,14.14,18h.16a.24.24,0,0,0,.24-.24v-.22a.69.69,0,0,0,.44-.85.73.73,0,0,0-.46-.42.72.72,0,0,0-.66,0ZM9.58,16.83h.16a.24.24,0,0,0,.23-.24V16a.78.78,0,0,0,.48-.29.76.76,0,0,0,.14-.63.74.74,0,0,0-.34-.5.89.89,0,0,0-.64-.09,1,1,0,0,0-.63.43.23.23,0,0,0,.05.32.23.23,0,0,0,.32-.05.47.47,0,0,1,.31-.21.34.34,0,0,1,.29,0,.28.28,0,0,1,.12.19.28.28,0,0,1-.6.2.37.37,0,0,1-.28.1H9.48a.24.24,0,0,0-.24.24.23.23,0,0,0,.24.23h.25a.46.46,0,0,1,.32.15.31.31,0,0,1,.06.22A.27.27,0,0,1,10,17a.3.3,0,0,1-.28,0,.56.56,0,0,1-.29-.24.22.22,0,0,0-.3-.08.23.23,0,0,0-.09.31,1,1,0,0,0,.6.48v.21a.24.24,0,0,0,.23.24Z"></path>
                            <path d="M12,9.17a.44.44,0,0,0-.44.44v5.28a.44.44,0,0,0,.44.44.45.45,0,0,0,.45-.44V9.61A.45.45,0,0,0,12,9.17Z"></path>
                            <path d="M9.59,13.67a.43.43,0,0,0-.42,0,.45.45,0,0,0-.23.36v1.78h.09a.87.87,0,0,1-.09-.38A.81.81,0,0,1,9.59,14Z"></path>
                            <path d="M13.86,13.67a.42.42,0,0,0-.41,0,.44.44,0,0,0-.23.36v1.78h.09a.87.87,0,0,1-.09-.38A.81.81,0,0,1,13.86,14Z"></path>
                          </svg>
                          Donate with Venmo
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-300">
                      <p>
                        Wahaiwa Kajukenbo Foundation is a registered 501(c)(3)
                        nonprofit organization.
                        <br />
                        All donations are tax-deductible.
                      </p>
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
                        Mail a check to: Wahaiwa Kajukenbo Foundation, 254 D
                        Sunset Ave, Suisun City, CA, United States, California
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
        
        
      </main>
      
      
      <Footer />
    </div>
  );
};

export default Donate;
