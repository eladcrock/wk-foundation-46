
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // EmailJS configuration variables - replace these with your actual values
  const SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your service ID
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your public key

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS integration with proper variables
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone_number: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with brighter overlay */}
        <section className="bg-wk-dark py-16 md:py-24 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDl_bFJ1dYotTQKkdqkcFvgsoIY-bS8CZtgQ&s" 
              alt="Get Involved" 
              className="w-full h-full object-cover opacity-40" /* Increased opacity from 20 to 40 */
            />
            <div className="absolute inset-0 bg-gradient-to-b from-wk-dark/0 to-wk-dark"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Involved</h1>
              <p className="text-lg text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="100">
                Connect with us to learn more about our programs, volunteer opportunities, 
                or ways to support our mission.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-wk-charcoal">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <div data-aos="fade-right" data-aos-delay="100">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
                <p className="text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="150">
                  We'd love to hear from you! Fill out the form and our team will get back to you 
                  as soon as possible. Whether you have questions about our programs or want to get involved, 
                  we're here to help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start transition-all hover:transform hover:translate-y-[-5px]" data-aos="fade-up" data-aos-delay="200">
                    <a href="mailto:Wkfoundation@gmail.com" className="flex items-start group w-full">
                      <div className="bg-wk-dark p-3 rounded-full mr-4 group-hover:bg-wk-blue transition-colors">
                        <Mail className="h-6 w-6 text-wk-gold group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-gray-300">Wkfoundation@gmail.com</p>
                      </div>
                    </a>
                  </div>
                  
                  <div className="flex items-start transition-all hover:transform hover:translate-y-[-5px]" data-aos="fade-up" data-aos-delay="250">
                    <a href="tel:+17074217200" className="flex items-start group w-full">
                      <div className="bg-wk-dark p-3 rounded-full mr-4 group-hover:bg-wk-blue transition-colors">
                        <Phone className="h-6 w-6 text-wk-gold group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <p className="text-gray-300">(707) 421-7200</p>
                      </div>
                    </a>
                  </div>
                  
                  <div className="flex items-start transition-all hover:transform hover:translate-y-[-5px]" data-aos="fade-up" data-aos-delay="300">
                    <a href="https://maps.google.com/?q=254D+Sunset+Ave,+Suisun+City,+CA,+United+States,+California" target="_blank" rel="noopener noreferrer" className="flex items-start group w-full">
                      <div className="bg-wk-dark p-3 rounded-full mr-4 group-hover:bg-wk-blue transition-colors">
                        <MapPin className="h-6 w-6 text-wk-gold group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Address</h3>
                        <p className="text-gray-300">254D Sunset Ave, Suisun City, CA, United States, California</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              <Card className="bg-wk-darkgray border border-white/10" data-aos="fade-left" data-aos-delay="150">
                <CardHeader>
                  <CardTitle className="text-white">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
                        <Label htmlFor="name" className="text-gray-200">Your Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          required 
                          className="bg-wk-charcoal border-white/10 text-white"
                        />
                      </div>
                      <div className="space-y-2" data-aos="fade-up" data-aos-delay="250">
                        <Label htmlFor="email" className="text-gray-200">Email Address</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required 
                          className="bg-wk-charcoal border-white/10 text-white"
                        />
                      </div>
                      <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
                        <Label htmlFor="phone" className="text-gray-200">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-wk-charcoal border-white/10 text-white"
                        />
                      </div>
                      <div className="space-y-2" data-aos="fade-up" data-aos-delay="350">
                        <Label htmlFor="subject" className="text-gray-200">Subject</Label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          value={formData.subject}
                          onChange={handleChange}
                          required 
                          className="bg-wk-charcoal border-white/10 text-white"
                        />
                      </div>
                      <div className="space-y-2" data-aos="fade-up" data-aos-delay="400">
                        <Label htmlFor="message" className="text-gray-200">Your Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          rows={4} 
                          value={formData.message}
                          onChange={handleChange}
                          required 
                          className="bg-wk-charcoal border-white/10 text-white"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-wk-blue hover:bg-blue-600"
                        disabled={isSubmitting}
                        data-aos="fade-up" 
                        data-aos-delay="450"
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="section-padding bg-wk-dark">
          <div className="container-custom">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-white mb-4">Ways to Get Involved</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                There are many ways to support our mission and make a difference in our community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border border-white/10 bg-wk-darkgray hover:bg-wk-darkgray/80 transition-colors" data-aos="fade-up" data-aos-delay="100">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-wk-dark p-4 inline-block rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-wk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Volunteer</h3>
                  <p className="text-gray-300">
                    Contribute your time and skills to help with classes, events, administration, or outreach.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-white/10 bg-wk-darkgray hover:bg-wk-darkgray/80 transition-colors" data-aos="fade-up" data-aos-delay="200">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-wk-dark p-4 inline-block rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-wk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sponsor</h3>
                  <p className="text-gray-300">
                    Support specific programs or events through financial contributions or in-kind donations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-white/10 bg-wk-darkgray hover:bg-wk-darkgray/80 transition-colors" data-aos="fade-up" data-aos-delay="300">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-wk-dark p-4 inline-block rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-wk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Attend Events</h3>
                  <p className="text-gray-300">
                    Show your support by participating in our community events, fundraisers, and demonstrations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
