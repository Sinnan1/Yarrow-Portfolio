import { useEffect, useRef, useState } from 'react';

const SoulCinema = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-cream">
      {/* Top Angled Edge */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-cream z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L1440 0V120H0Z"
            fill="#F5F0E8"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative py-32 lg:py-48">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/soul-cinema-bg.jpg"
            alt="Couple Dancing"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2
            className={`font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            SOUL + CINEMA
          </h2>
          <p
            className={`text-white/90 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Every wedding is unique and so are our films. For past 8 years HOTC has set new
            benchmarks of storytelling within wedding realm and beyond. We are fortunate to have experienced
            so unique cultures and traditions across 25 countries and to document stories that
            continuously overwhelm us.
          </p>
        </div>
      </div>

      {/* Bottom Angled Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-cream z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L1440 120V0H0Z"
            fill="#F5F0E8"
          />
        </svg>
      </div>
    </section>
  );
};

export default SoulCinema;
