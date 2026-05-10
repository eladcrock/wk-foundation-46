import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const STORAGE_KEY = "wkf_volunteers_popup_dismissed_v1";

const VolunteersWantedPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl p-0 bg-wk-charcoal border-wk-gold/40 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Volunteers Wanted</DialogTitle>
          <DialogDescription>
            WK Foundation is recruiting volunteers. Tap Get Involved to contact us.
          </DialogDescription>
        </VisuallyHidden>
        <div className="bg-white">
          <img
            src="/volunteers-wanted-flyer.svg"
            alt="Volunteers Wanted - WK Foundation flyer"
            className="w-full h-auto block"
          />
        </div>
        <div className="p-4 flex flex-col sm:flex-row gap-3 justify-center bg-wk-charcoal">
          <Button
            asChild
            className="bg-wk-gold hover:bg-yellow-500 text-wk-charcoal font-semibold"
            onClick={() => handleOpenChange(false)}
          >
            <Link to="/contact">Get Involved</Link>
          </Button>
          <Button
            variant="outline"
            className="border-wk-gold text-wk-gold hover:bg-wk-gold hover:text-wk-charcoal"
            onClick={() => handleOpenChange(false)}
          >
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteersWantedPopup;
