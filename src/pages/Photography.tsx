import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { cmsApi } from '../api/cms';
import type { PhotographyPageContent } from '../types/content';

const Photography = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<PhotographyPageContent | null>(null);

  useEffect(() => {
    setIsVisible(true);
    cmsApi.getContent('photography').then(data => {
      if (data) setContent(data);
    })
  }, []);

  const filters = ['All', 'International', 'Indian', 'Intimate'];

  const defaultContent: PhotographyPageContent = {
    header: {
      subtitle: "Portfolio",
      title: "Curated Galleries"
    },
    weddings: [
      {
        id: '1',
        slug: 'reva-zach',
        couple: 'Reva & Zach',
        description: 'Let\'s call this our "Happy New Year Wedding".',
        image: '/wedding-1.jpg',
        categories: ['Indian'],
      },
      {
        id: '2',
        slug: 'manisha-christopher',
        couple: 'Manisha & Christopher',
        description: 'An evening of love, style and blend of two cultures in the heart of Singapore.',
        image: '/wedding-2.jpg',
        categories: ['International'],
      },
      {
        id: '3',
        slug: 'alia-ranbir',
        couple: 'Alia & Ranbir',
        description: 'Two of the greatest actors of this generation.',
        image: '/wedding-3.jpg',
        categories: ['Indian', 'Intimate'],
      },
      // ... (rest of default content can be omitted in source for brevity if desired, but good to have fallback)
    ]
  };

  const data = content || defaultContent;


  const filteredWeddings = activeFilter === 'All'
    ? data.weddings
    : data.weddings.filter((w) => w.categories.includes(activeFilter));

  // Split into two columns for masonry effect
  const leftColumn = filteredWeddings.filter((_, i) => i % 2 === 0);
  const rightColumn = filteredWeddings.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />
      <section className="pt-4 sm:pt-6 md:pt-10 lg:pt-16 pb-6 md:pb-10 lg:pb-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <div className="mb-8 md:mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-3 sm:mb-4">{data.header.subtitle}</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">{data.header.title}</h1>
          </div>

          {/* Filters - separate row */}
          <div className="flex gap-6 sm:gap-8 md:gap-10 overflow-x-auto pb-4 border-b border-gold/10 scrollbar-hide mb-10 sm:mb-12 md:mb-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 whitespace-nowrap pb-4 -mb-4 ${activeFilter === filter ? 'text-gold border-b-2 border-gold' : 'text-black/40 hover:text-black'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Staggered Grid */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-8 sm:gap-10 lg:gap-20">
              {leftColumn.map((wedding) => (
                <Link
                  key={wedding.id}
                  to={`/photography/${wedding.slug}`}
                  className={`group block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                >
                  <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                    <img
                      src={wedding.image}
                      alt={wedding.couple}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="flex justify-between items-baseline border-b border-black/10 pb-3 sm:pb-4 group-hover:border-gold/50 transition-colors">
                    <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl group-hover:text-gold transition-colors">{wedding.couple}</h2>
                    <span className="text-xs uppercase tracking-widest text-black/40">{wedding.categories[0]}</span>
                  </div>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-black/60 font-light leading-relaxed max-w-sm">{wedding.description}</p>
                </Link>
              ))}
            </div>

            {/* Right Column - Top Margin for Stagger */}
            <div className="w-full md:w-1/2 flex flex-col gap-8 sm:gap-10 lg:gap-20 md:mt-32">
              {rightColumn.map((wedding) => (
                <Link
                  key={wedding.id}
                  to={`/photography/${wedding.slug}`}
                  className={`group block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: '150ms' }}
                >
                  <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                    <img
                      src={wedding.image}
                      alt={wedding.couple}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="flex justify-between items-baseline border-b border-black/10 pb-3 sm:pb-4 group-hover:border-gold/50 transition-colors">
                    <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl group-hover:text-gold transition-colors">{wedding.couple}</h2>
                    <span className="text-xs uppercase tracking-widest text-black/40">{wedding.categories[0]}</span>
                  </div>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-black/60 font-light leading-relaxed max-w-sm">{wedding.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photography;
