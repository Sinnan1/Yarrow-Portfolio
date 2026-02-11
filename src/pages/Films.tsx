import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import { cmsApi } from '../api/cms';
import type { FilmPageContent } from '../types/content';

const Films = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<FilmPageContent | null>(null);

  useEffect(() => {
    setIsVisible(true);
    cmsApi.getContent('films').then(data => {
      if (data) setContent(data);
    })
  }, []);

  const filters = ['All', 'Classic Story Telling', 'New Age Modern', 'Intimates'];

  const defaultContent: FilmPageContent = {
    header: {
      subtitle: "The Screening Room",
      title: "Cinema & Soul"
    },
    films: [
      {
        id: '1',
        title: 'Sobhita & Chay',
        category: 'Classic Story Telling',
        date: 'Hyderabad',
        description: 'A royal union in the city of pearls. Witness the grandeur of tradition meeting modern elegance.',
        thumbnail: '/film-1.jpg',
      },
      {
        id: '2',
        title: 'Monika & Vivek',
        category: 'New Age Modern',
        date: 'Udaipur',
        description: 'They say monuments were built to honour love that stood the test of time. But watching these two, it felt like we were witnessing one being made.',
        thumbnail: '/film-2.jpg',
      },
      {
        id: '3',
        title: 'Karishma & Mikhail',
        category: 'New Age Modern',
        date: 'Goa',
        description: 'Some stories have a way of lingering around you, gently and in the most simplest of ways.. This one is going to stay with us for a long time.',
        thumbnail: '/story-1.jpg',
      },
      {
        id: '4',
        title: 'Kriti & Pulkit',
        category: 'Classic Story Telling',
        date: 'Delhi',
        description: 'From the very first call we had with Kriti and Pulkit we knew this one was going to be special. A full on Punjabi energy was expected but what took us by surprise was the emotional rollercoaster it turned out to be.',
        thumbnail: '/story-2.jpg',
      },
      {
        id: '5',
        title: 'Priya & Prateik',
        category: 'New Age Modern',
        date: 'Mumbai',
        description: 'Some places hold memories and some hold dreams. This home was both.',
        thumbnail: '/story-3.jpg',
      },
      {
        id: '6',
        title: 'Aerin & Rahul',
        category: 'Classic Story Telling',
        date: 'Korea / India',
        description: 'Aerin and Rahul\'s story took us on a journey across two countries and cultures.',
        thumbnail: '/story-4.jpg',
      },
    ]
  };

  const data = content || defaultContent;

  const filteredFilms =
    activeFilter === 'All'
      ? data.films
      : data.films.filter((f) => f.category === activeFilter);

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />

      {/* Header Section */}
      <section className="pt-4 sm:pt-6 md:pt-10 lg:pt-16 pb-6 md:pb-10 lg:pb-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <div className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-3 sm:mb-4">{data.header.subtitle}</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">{data.header.title}</h1>
          </div>

          {/* Filters - separate row */}
          <div className="flex gap-6 sm:gap-8 md:gap-10 overflow-x-auto pb-4 border-b border-gold/10 scrollbar-hide"
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
        </div>
      </section>

      {/* Films List - Single Column Immersive */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-28">
          {filteredFilms.map((film, index) => (
            <div
              key={film.id}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Film Number */}
              <div className="hidden lg:block absolute -left-20 top-0 text-black/10 font-serif text-6xl">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Video Card */}
              <div className="relative aspect-video w-full overflow-hidden mb-8 shadow-lg">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/80 transition-all duration-500">
                    <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 group-hover:text-gold transition-colors">{film.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-black/40 uppercase tracking-wider mb-4">
                    <span>{film.date}</span>
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    <span>{film.category}</span>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-black/60 font-light leading-relaxed text-sm">
                    {film.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Films;
