
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu on route change and scroll to top
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="bg-wk-dark shadow-md sticky top-0 z-50 text-white border-b border-white/10">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-wk-gold">
            WK Foundation
          </Link>
          
          <div className="flex items-center gap-4 ml-auto">
            {/* T4L Logo */}
            <a 
              href="https://train4life.info" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
              aria-label="Visit Train 4 Life website"
            >
              <img 
                src="/lovable-uploads/d164278b-fa3d-427c-9623-5bc54ef71660.png" 
                alt="Train 4 Life Logo" 
                className="h-8 w-auto"
                data-aos="fade-in"
                data-aos-duration="800"
              />
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden focus:outline-none text-white" 
              onClick={toggleMenu}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-wk-gold transition font-medium">
              Home
            </Link>
            <Link to="/events" className="text-gray-300 hover:text-wk-gold transition font-medium">
              Events
            </Link>
            <Link to="/programs" className="text-gray-300 hover:text-wk-gold transition font-medium">
              Programs
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-wk-gold transition font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-wk-gold transition font-medium">
              Contact
            </Link>
            <Button asChild className="bg-transparent hover:bg-wk-gold/20 text-wk-gold border border-wk-gold">
              <Link to="/donate">Donate</Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-wk-gold transition font-medium"
              >
                Home
              </Link>
              <Link 
                to="/events" 
                className="text-gray-300 hover:text-wk-gold transition font-medium"
              >
                Events
              </Link>
              <Link 
                to="/programs" 
                className="text-gray-300 hover:text-wk-gold transition font-medium"
              >
                Programs
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-wk-gold transition font-medium"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-wk-gold transition font-medium"
              >
                Contact
              </Link>
              <Button asChild className="bg-transparent hover:bg-wk-gold/20 text-wk-gold border border-wk-gold w-full">
                <Link to="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
