import { Link, useLocation } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone,
  MapPin
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import SponsorCTA from "../common/SponsorCTA";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <footer className="bg-wk-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="container-custom">
        {/* Sponsor CTA Section */}
        <div className="mb-12">
          <SponsorCTA variant="compact" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              
            </div>
            {/* <p className="text-gray-300 mb-5">
              Building strength, character and community through the traditions and 
              values of Kajukenbo martial arts training.
            </p> */}
            <div className="flex flex-wrap items-center space-x-4">

              
              
              <a href="https://www.facebook.com/wkfoundation707/" className="text-gray-400 hover:text-wk-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/wkfoundationsolano?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-wk-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a 
                href="https://train4life.info" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-2"
                data-aos="fade-in"
                data-aos-duration="800"
              >
                
                <img 
                  src="/lovable-uploads/tfl.png" 
                  alt="Train 4 Life Logo" 
                  className="h-10 w-auto mt-2" 
                />
              </a>
              <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/WKFlogo.png"
                alt="WKF Logo"
                className="h-20 w-auto"
              />
          </Link>

            </div>
          </div>
          
          <div  style={{ marginTop: "0rem" }}>
          <ul className="flex justify-center md:justify-start space-x-4">
  <li>
    <Link to="/" className="text-gray-300 hover:text-wk-gold transition-colors">
      Home
    </Link>
  </li>
  <li>
    <Link to="/events" className="text-gray-300 hover:text-wk-gold transition-colors">
      Events
    </Link>
  </li>
  <li>
    <Link to="/about" className="text-gray-300 hover:text-wk-gold transition-colors">
      About Us
    </Link>
  </li>
  <li>
    <Link to="/programs" className="text-gray-300 hover:text-wk-gold transition-colors">
      Programs
    </Link>
  </li>
</ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-wk-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="group">
                <a href="tel:+17074217200" className="flex items-center gap-2">
                  <Phone size={16} className="text-wk-gold group-hover:text-wk-gold" />
                  <span className="text-gray-300 group-hover:text-wk-gold transition-colors">(707) 421-7200</span>
                </a>
              </li>
              <li className="group">
                <a href="mailto:WKFboard@gmail.com" className="flex items-center gap-2">
                  <Mail size={16} className="text-wk-gold group-hover:text-wk-gold" />
                  <span className="text-gray-300 group-hover:text-wk-gold transition-colors">WKFboard@gmail.com</span>
                </a>
              </li>
              <li className="group">
                <a href="https://maps.google.com/?q=254D+Sunset+Ave,+Suisun+City,+CA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MapPin size={16} className="text-wk-gold group-hover:text-wk-gold" />
                  <span className="text-gray-300 group-hover:text-wk-gold transition-colors">254 D Sunset Ave, Suisun City, CA</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 space-y-3">
              <Button asChild className="bg-wk-red hover:bg-red-700 w-full">
                <Link to="/contact">Get Involved</Link>
              </Button>
              <Button asChild className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal w-full">
                <Link to="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="text-sm text-gray-400 flex justify-center items-center">
          <p>
            &copy; {currentYear} Wahiawa Kajukenbo Foundation. <br/>Built by 
            <a 
              href="https://nimbuswolf.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-red-400 hover:text-wk-gold ml-1"
            >
              Nimbus Wolf Studios
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;