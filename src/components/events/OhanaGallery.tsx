
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Images } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface OhanaGalleryProps {
  variant?: 'home' | 'events';
}

const OhanaGallery = ({ variant = 'events' }: OhanaGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images for Ohana Fest
  const galleryImages = [
    {
      src: "/lovable-uploads/ohana-fest-main.webp",
      alt: "Ohana Fest 2025 Main Event",
      thumbnail: "/lovable-uploads/ohana-fest-main.webp"
    }
    // Add more images here when provided
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  if (variant === 'home') {
    return (
      <>
        <div className="mt-6">
          <Button
            onClick={() => openLightbox(0)}
            variant="outline"
            className="bg-wk-darkgray border-wk-gold text-wk-gold hover:bg-wk-gold hover:text-wk-charcoal"
          >
            <Images className="w-4 h-4 mr-2" />
            View Gallery
          </Button>
        </div>
        
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentImageIndex}
          slides={galleryImages}
        />
      </>
    );
  }

  return (
    <>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-white mb-4">Event Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={image.thumbnail}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentImageIndex}
        slides={galleryImages}
      />
    </>
  );
};

export default OhanaGallery;
