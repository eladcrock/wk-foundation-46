
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wk-lightgray pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-wk-blue mb-4">WK Foundation</h3>
            <p className="text-wk-gray mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-wk-gray hover:text-wk-blue transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-wk-gray hover:text-wk-blue transition">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-wk-gray hover:text-wk-blue transition">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-wk-gray hover:text-wk-blue transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs#breathe" className="text-wk-gray hover:text-wk-blue transition">
                  BREATHE
                </Link>
              </li>
              <li>
                <Link to="/programs#senior-boxing" className="text-wk-gray hover:text-wk-blue transition">
                  Senior Boxing
                </Link>
              </li>
              <li>
                <Link to="/programs#self-defense" className="text-wk-gray hover:text-wk-blue transition">
                  Women's Self Defense
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <Link to="/contact" className="inline-block btn-primary mb-3">
              Get Involved
            </Link>
            <Link to="/donate" className="inline-block btn-secondary">
              Donate
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-wk-gray">
          <p>&copy; {currentYear} WK Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
