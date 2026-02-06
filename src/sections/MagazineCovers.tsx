import { useEffect, useRef, useState } from 'react';

const MagazineCovers = () => {
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

  const magazines = [
    { name: 'HELLO!', color: '#E8B4B8' },
    { name: 'BRIDES', color: '#C9B8D4' },
    { name: 'PEACOCK', color: '#B8D4C9' },
    { name: 'Conde Nast\nTRAVELLER', color: '#B8D4E8' },
    { name: 'VOGUE', color: '#D4C9B8' },
    { name: 'DESTINATION\nWEDDING', color: '#E8D4B8' },
    { name: 'VOGUE', color: '#D4B8C9' },
  ];

  return (
    <section ref={sectionRef} className="py-12 lg:py-20 px-8 lg:px-16 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-wrap justify-center items-end gap-4 lg:gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {magazines.map((mag, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 80}ms`,
                transform: `translateY(${index % 2 === 0 ? '0' : '10px'})`,
              }}
            >
              {/* Magazine Cover Mockup */}
              <div
                className="w-20 h-28 lg:w-28 lg:h-40 shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                style={{ backgroundColor: mag.color }}
              >
                {/* Cover Image */}
                <div className="absolute inset-0">
                  <img
                    src={`/gallery-${(index % 6) + 1}.jpg`}
                    alt={mag.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                
                {/* Magazine Title */}
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-3 bg-gradient-to-b from-black/40 via-transparent to-transparent">
                  <span className="text-white text-[8px] lg:text-[10px] font-bold tracking-wider text-center whitespace-pre-line leading-tight drop-shadow-lg">
                    {mag.name}
                  </span>
                </div>

                {/* Cover Lines */}
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="h-0.5 w-full bg-white/60 mb-1" />
                  <div className="h-0.5 w-3/4 bg-white/40" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagazineCovers;
