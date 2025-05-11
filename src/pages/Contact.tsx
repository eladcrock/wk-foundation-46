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

  const SERVICE_ID = 'service_8j58wfv';
  const TEMPLATE_ID = 'template_0up19cl';
  const PUBLIC_KEY = 'ndXabdHGeAcilHTB7';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
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
        <section className="bg-wk-dark py-16 md:py-24 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDl_bFJ1dYotTQKkdqkcFvgsoIY-bS8CZtgQ&s" 
              alt="Get Involved" 
              className="w-full h-full object-cover opacity-50"
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;