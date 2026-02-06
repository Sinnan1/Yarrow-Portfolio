import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const WeddingStories = () => {
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

  const stories = [
    {
      image: '/story-1.jpg',
      couple: 'TAMANNA & DAN',
      location: '',
    },
    {
      image: '/story-2.jpg',
      couple: 'ALISHA & RAHUL',
      location: 'Amalfi Coast, Italy',
    },
    {
      image: '/story-3.jpg',
      couple: 'SALONI & SID',
      location: 'Bangkok',
    },
    {
      image: '/story-4.jpg',
      couple: 'ZINAB & ZAIN',
      location: '',
    },
    {
      image: '/story-5.jpg',
      couple: 'PREETI & NEERAJ',
      location: '',
    },
    {
      image: '/story-6.jpg',
      couple: 'ESHITA & SARTHAK',
      location: '',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 px-8 lg:px-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Intro Text */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm lg:text-base leading-relaxed text-black/80">
            We at Yarrow Weddings celebrate the wild ones, the rule breakers, the travellers, the new age modern couple who are not afraid to experiment. We believe the ultimate goal of a wedding photographer is to justify the vibe of the wedding and the personalities of the couple. And this approach has helped us experience weddings in a two bedroom apartments to weddings spread over 2 continents.
          </p>
          <p className="text-sm lg:text-base leading-relaxed text-black/80 mt-4">
            Here are some selected weddings from past couple of years to showcase the union of two people in the most authentic way possible.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={story.image}
                  alt={story.couple}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <p className="text-[10px] lg:text-xs tracking-[0.3em] uppercase mb-2 opacity-80">
                    Yarrow Weddings
                  </p>
                  <h3 className="font-serif text-3xl lg:text-5xl xl:text-6xl tracking-wide">
                    {story.couple}
                  </h3>
                  {story.location && (
                    <p className="text-sm lg:text-base mt-2 opacity-80">
                      {story.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingStories;
