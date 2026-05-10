import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, HandHeart } from "lucide-react";

const STORAGE_KEY = "wkf_volunteers_cta_dismissed_v2";

const VolunteersWantedPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setShow(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Volunteers wanted"
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-sm z-50 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="relative bg-wk-charcoal border border-wk-gold/40 rounded-xl shadow-2xl p-4 pr-10">
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
        <div className="flex items-start gap-3">
          <div className="bg-wk-gold/20 p-2 rounded-lg shrink-0">
            <HandHeart className="w-5 h-5 text-wk-gold" />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-semibold text-sm">
              Volunteers Wanted — ASAP
            </h4>
            <p className="text-gray-300 text-xs mt-1 mb-3">
              Help us serve our community. Join the WKF 'ohana today.
            </p>
            <div className="flex gap-2">
              <Button
                asChild
                size="sm"
                className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal font-semibold h-8"
                onClick={dismiss}
              >
                <Link to="/contact">Get Involved</Link>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white h-8"
                onClick={dismiss}
              >
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteersWantedPopup;
