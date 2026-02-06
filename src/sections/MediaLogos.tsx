import { useEffect, useRef, useState } from 'react';

const MediaLogos = () => {
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

  const logos = [
    { name: 'VOGUE', style: 'font-serif tracking-[0.2em] text-2xl lg:text-3xl' },
    { name: 'COSMOPOLITAN', style: 'font-sans tracking-[0.15em] text-xl lg:text-2xl font-medium' },
    { name: 'HELLO!', style: 'font-sans tracking-[0.1em] text-2xl lg:text-3xl font-bold' },
    { name: 'BRIDES', style: 'font-serif tracking-[0.2em] text-2xl lg:text-3xl italic' },
    { name: 'TRAVEL+LEISURE', style: 'font-sans tracking-[0.1em] text-lg lg:text-xl font-medium' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 lg:py-20 px-8 lg:px-16 bg-cream border-y border-black/5"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-wrap justify-center items-center gap-8 lg:gap-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {logos.map((logo, index) => (
            <span
              key={logo.name}
              className={`${logo.style} text-black/60 hover:text-black/80 transition-colors duration-300 cursor-default`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaLogos;
