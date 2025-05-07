
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 md:py-24 bg-wk-charcoal">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <div className="text-6xl font-bold text-wk-gold mb-6">404</div>
            <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-gray-300 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been removed,
              had its name changed, or is temporarily unavailable.
            </p>
            <Button asChild className="bg-wk-blue hover:bg-blue-600">
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
