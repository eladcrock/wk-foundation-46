import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-wk-charcoal">
        <section className="bg-wk-dark py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-gray-300">
                Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <p className="text-gray-300 mb-8" data-aos="fade-up">
              Wahiawa Kajukenbo Foundation ("WKF," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services, in accordance with the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).
            </p>

            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="info-collected" className="border border-white/10 rounded-lg px-4 bg-wk-dark" data-aos="fade-up">
                <AccordionTrigger className="text-white hover:text-wk-gold text-left text-lg font-semibold">
                  Information We Collect
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-3">
                  <p><strong className="text-white">Personal Information:</strong> Name, email address, phone number, and mailing address when you voluntarily provide it through our contact form, donation process, or program registration.</p>
                  <p><strong className="text-white">Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages, and referring URLs collected automatically through cookies and similar technologies.</p>
                  <p><strong className="text-white">Donation Information:</strong> Payment details processed securely through third-party payment processors. We do not store credit card numbers on our servers.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="use-info" className="border border-white/10 rounded-lg px-4 bg-wk-dark" data-aos="fade-up" data-aos-delay="50">
                <AccordionTrigger className="text-white hover:text-wk-gold text-left text-lg font-semibold">
                  How We Use Your Information
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-3">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Respond to inquiries and contact form submissions</li>
                    <li>Process donations and provide tax receipts</li>
                    <li>Administer programs and events</li>
                    <li>Send updates about our programs and events (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ccpa" className="border border-white/10 rounded-lg px-4 bg-wk-dark" data-aos="fade-up" data-aos-delay="100">
                <AccordionTrigger className="text-white hover:text-wk-gold text-left text-lg font-semibold">
                  Your California Privacy Rights (CCPA/CPRA)
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-3">
                  <p>As a California resident, you have the following rights:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Right to Know:</strong> You may request details about the categories and specific pieces of personal information we have collected about you.</li>
                    <li><strong className="text-white">Right to Delete:</strong> You may request deletion of your personal information, subject to certain exceptions.</li>
                    <li><strong className="text-white">Right to Correct:</strong> You may request correction of inaccurate personal information.</li>
                    <li><strong className="text-white">Right to Opt-Out:</strong> You may opt out of the sale or sharing of your personal information. <em>We do not sell your personal information.</em></li>
                    <li><strong className="text-white">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
                  </ul>
                  <p>To exercise any of these rights, contact us at <a href="mailto:WKFboard@gmail.com" className="text-wk-gold hover:underline">WKFboard@gmail.com</a> or call <a href="tel:+17074217200" className="text-wk-gold hover:underline">(707) 421-7200</a>. We will respond within 45 days.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sharing" className="border border-white/10 rounded-lg px-4 bg-wk-dark" data-aos="fade-up" data-aos-delay="150">
                <AccordionTrigger className="text-white hover:text-wk-gold text-left text-lg font-semibold">
                  Information Sharing & Disclosure
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-3">
                  <p>We do not sell, rent, or trade your personal information. We may share information with:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Service Providers:</strong> Third-party vendors who assist with payment processing, email delivery, and website hosting.</li>
                    <li><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
                    <li><strong className="text-white">Safety:</strong> To protect the rights, property, or safety of WKF, our participants, or the public.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cookies" className="border border-white/10 rounded-lg px-4 bg-wk-dark" data-aos="fade-up" data-aos-delay="200">
                <AccordionTrigger className="text-white hover:text-wk-gold text-left text-lg font-semibold">
                  Cookies & Tracking Technologies
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-3">
                  <p>We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. Disabling cookies may limit some website functionality.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="children" className="border border-white/10 rounded-lg px-4 bg-wk-dark" data-aos="fade-up" data-aos-delay="250">
                <AccordionTrigger className="text-white hover:text-wk-gold text-left text-lg font-semibold">
                  Children's Privacy
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-3">
                  <p>Our website is not directed to children under 13. We do not knowingly collect personal information from children under 13 without verifiable parental consent. For our youth programs, parental or guardian consent is obtained directly during registration.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="security" className="border border-white/10 rounded-lg px-4 bg-wk-dark" data-aos="fade-up" data-aos-delay="300">
                <AccordionTrigger className="text-white hover:text-wk-gold text-left text-lg font-semibold">
                  Data Security
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-3">
                  <p>We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="changes" className="border border-white/10 rounded-lg px-4 bg-wk-dark" data-aos="fade-up" data-aos-delay="350">
                <AccordionTrigger className="text-white hover:text-wk-gold text-left text-lg font-semibold">
                  Changes to This Policy
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-3">
                  <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contact" className="border border-white/10 rounded-lg px-4 bg-wk-dark" data-aos="fade-up" data-aos-delay="400">
                <AccordionTrigger className="text-white hover:text-wk-gold text-left text-lg font-semibold">
                  Contact Us
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-3">
                  <p>If you have questions about this Privacy Policy or wish to exercise your California privacy rights, contact us:</p>
                  <p>Wahiawa Kajukenbo Foundation<br />821 Texas Street, Fairfield, CA 94533<br />Email: <a href="mailto:WKFboard@gmail.com" className="text-wk-gold hover:underline">WKFboard@gmail.com</a><br />Phone: <a href="tel:+17074217200" className="text-wk-gold hover:underline">(707) 421-7200</a></p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
