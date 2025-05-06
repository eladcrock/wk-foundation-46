
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-wk-charcoal shadow-sm sticky top-0 z-50 text-white">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-wk-gold">
            WK Foundation
          </Link>
          
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
            <Button asChild className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal">
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
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/events" 
                className="text-gray-300 hover:text-wk-gold transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/programs" 
                className="text-gray-300 hover:text-wk-gold transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-wk-gold transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-wk-gold transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal w-full">
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
