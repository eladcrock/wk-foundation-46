
import { Link } from "react-router-dom";
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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wk-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-wk-gold mb-4">WK Foundation</h3>
            <p className="text-gray-300 mb-6">
              Building strength, character and community through the traditions and 
              values of Kajukenbo martial arts training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-wk-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-wk-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-wk-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-wk-gold transition-colors flex items-center gap-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-wk-gold transition-colors flex items-center gap-2">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-wk-gold transition-colors flex items-center gap-2">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-wk-gold transition-colors flex items-center gap-2">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-wk-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-wk-gold" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-wk-gold" />
                <span className="text-gray-300">info@wkfoundation.org</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-wk-gold" />
                <span className="text-gray-300">Wahiawa, HI</span>
              </li>
            </ul>
            <div className="mt-6 space-y-3">
              <Button asChild className="bg-wk-red hover:bg-red-700 w-full">
                <Link to="/contact">Get Involved</Link>
              </Button>
              <Button asChild className="bg-wk-blue hover:bg-blue-600 text-white w-full">
                <Link to="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Wahiawa Kajukenbo Foundation. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-wk-gold transition-colors mr-4">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-wk-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
