import { useEffect, useRef, useState } from 'react';

const About = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-8 lg:px-16 bg-cream overflow-hidden"
    >
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-64 opacity-20">
        <img
          src="/about-bride-2.jpg"
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            <span className="block italic font-light">A MODERN APPROACH</span>
            <span className="block not-italic mt-2">to an AGE OLD TRADITION</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Image */}
          <div
            className={`lg:col-span-4 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/about-bride-1.jpg"
                alt="Elegant Bride"
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Center Text */}
          <div
            className={`lg:col-span-4 py-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm lg:text-base leading-relaxed text-black/80 mb-6">
              Considered to be the epitome of Modern Photography and Filmmaking,
              Yarrow Weddings has transformed the Indian Wedding landscape on a regular basis. For
              almost a decade Yarrow Weddings has been creating photographs and
              films which are timeless and have been etched in memories of thousands of
              people forever.
            </p>
            <p className="text-sm lg:text-base leading-relaxed text-black/80">
              Awarded as the Wedding Filmmaker of the year for four consecutive years at
              the Weddingsutra awards along with numerous other awards, Yarrow Weddings is the
              only company listed on IMDB for its award winning films.
            </p>
          </div>

          {/* Right Image */}
          <div
            className={`lg:col-span-4 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/about-bride-2.jpg"
                alt="Bride in Gown"
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
