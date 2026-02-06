import { useEffect, useRef, useState } from 'react';

const GalleryGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    { src: '/gallery-1.jpg', alt: 'Wedding Ceremony', span: 'col-span-1 row-span-2' },
    { src: '/gallery-2.jpg', alt: 'Couple Portrait', span: 'col-span-1 row-span-1' },
    { src: '/gallery-3.jpg', alt: 'Intimate Moment', span: 'col-span-1 row-span-1' },
    { src: '/gallery-4.jpg', alt: 'Joyful Couple', span: 'col-span-1 row-span-2' },
    { src: '/gallery-5.jpg', alt: 'Bride Portrait', span: 'col-span-1 row-span-2' },
    { src: '/gallery-6.jpg', alt: 'Wedding Ritual', span: 'col-span-1 row-span-1' },
    { src: '/wedding-1.jpg', alt: 'Bridal Portrait', span: 'col-span-1 row-span-2' },
    { src: '/wedding-2.jpg', alt: 'Western Couple', span: 'col-span-1 row-span-1' },
    { src: '/wedding-3.jpg', alt: 'Happy Couple', span: 'col-span-1 row-span-1' },
    { src: '/wedding-4.jpg', alt: 'Beach Wedding', span: 'col-span-1 row-span-2' },
    { src: '/story-1.jpg', alt: 'Destination Wedding', span: 'col-span-1 row-span-1' },
    { src: '/story-2.jpg', alt: 'Romantic Moment', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 px-4 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3">
          {galleryImages.slice(0, 5).map((image, index) => (
            <div
              key={index}
              className={`${image.span} overflow-hidden group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}

          {/* Center Text Block */}
          <div
            className={`col-span-1 row-span-2 flex items-center justify-center bg-cream p-4 lg:p-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="text-center">
              <p className="text-xs lg:text-sm tracking-wide text-black/60 mb-2">
                some of the most
              </p>
              <h3 className="font-serif text-4xl lg:text-6xl italic leading-none">
                "ICONIC"
              </h3>
              <p className="text-xs lg:text-sm tracking-wide text-black/60 mt-2">
                wedding images
              </p>
            </div>
          </div>

          {galleryImages.slice(5).map((image, index) => (
            <div
              key={index + 5}
              className={`${image.span} overflow-hidden group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 5) * 50}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
