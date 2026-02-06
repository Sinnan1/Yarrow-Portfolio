import { useEffect, useRef, useState } from 'react';

const FeaturedWeddings = () => {
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

  const weddings = [
    {
      image: '/wedding-1.jpg',
      couple: 'Reva & Zach',
      date: 'Oct 7, 2024',
    },
    {
      image: '/wedding-2.jpg',
      couple: 'Aug 25, 2024',
      date: '',
    },
    {
      image: '/wedding-3.jpg',
      couple: 'Alia & Ranbir, Mumbai',
      date: 'Aug 8, 2024',
    },
    {
      image: '/wedding-4.jpg',
      couple: 'Kiara & Siddharth',
      date: 'Apr 24, 2024',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 px-8 lg:px-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Wedding Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {weddings.map((wedding, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={wedding.image}
                  alt={wedding.couple}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="text-center">
                <h4 className="font-serif text-lg lg:text-xl text-black/90">
                  {wedding.couple}
                </h4>
                {wedding.date && (
                  <p className="text-sm text-black/60 mt-1">{wedding.date}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Photography Blog Button */}
        <div
          className={`flex justify-center mt-12 lg:mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#blog"
            className="bg-gold text-white px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-dark"
          >
            Photography Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWeddings;
