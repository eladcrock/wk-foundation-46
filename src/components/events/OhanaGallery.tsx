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
      src: "/lovable-uploads/OhanaFest2024_socialmedia-3.jpg",
      alt: "Ohana Fest 2024 - Social Media 3",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-4.jpg",
      alt: "Ohana Fest 2024 - Social Media 4",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-6.jpg",
      alt: "Ohana Fest 2024 - Social Media 6",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-7.jpg",
      alt: "Ohana Fest 2024 - Social Media 7",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-15.jpg",
      alt: "Ohana Fest 2024 - Social Media 15",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-20.jpg",
      alt: "Ohana Fest 2024 - Social Media 20",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-21.jpg",
      alt: "Ohana Fest 2024 - Social Media 21",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-35.jpg",
      alt: "Ohana Fest 2024 - Social Media 35",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-38.jpg",
      alt: "Ohana Fest 2024 - Social Media 38",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-100.jpg",
      alt: "Ohana Fest 2024 - Social Media 100",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-119.jpg",
      alt: "Ohana Fest 2024 - Social Media 119",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-134.jpg",
      alt: "Ohana Fest 2024 - Social Media 134",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-220.jpg",
      alt: "Ohana Fest 2024 - Social Media 220",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-240.jpg",
      alt: "Ohana Fest 2024 - Social Media 240",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-243.jpg",
      alt: "Ohana Fest 2024 - Social Media 243",
    },
    {
      src: "/lovable-uploads/OhanaFest2024_socialmedia-256.jpg",
      alt: "Ohana Fest 2024 - Social Media 256",
    },
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
          slides={galleryImages.map((image) => ({ src: image.src }))}
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
                src={image.src}
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
        slides={galleryImages.map((image) => ({ src: image.src }))}
      />
    </>
  );
};

export default OhanaGallery;