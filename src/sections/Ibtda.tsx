import { useEffect, useRef, useState } from 'react';

const Ibtda = () => {
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
    <section ref={sectionRef} className="relative py-0 bg-cream">
      {/* Full Width Image */}
      <div className="relative h-[70vh] lg:h-[80vh]">
        <img
          src="/ibtda-bg.jpg"
          alt="Elegant Couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
            <div className="max-w-xl">
              {/* Title */}
              <h2
                className={`font-serif text-5xl lg:text-7xl text-white mb-6 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="block italic font-light text-3xl lg:text-4xl mb-2">
                  our finest
                </span>
                <span className="block">IBTDA</span>
              </h2>

              {/* Description */}
              <p
                className={`text-white/90 text-sm lg:text-base leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Ibtda is our finest offering with fine-art editorial style photography lead by Siddharth
                Sharma, founder of Yarrow Weddings. The essence of Ibtda is to create
                photographs that stand the test of time. The classic, non-intrusive approach to
                documenting the most important day of your life with bright and airy images that take
                you back in time. This is an exclusive package which we offer to selected weddings only
                and we believe this deserves a website of its own. Click below to visit Ibtda Co.
              </p>

              {/* CTA Button */}
              <div
                className={`transition-all duration-1000 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <a
                  href="https://ibtda.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold text-white px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-dark"
                >
                  Visit Ibtda.Co
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ibtda;
