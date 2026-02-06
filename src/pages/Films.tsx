import { useState, useEffect } from 'react';
import { Play, ArrowDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Film {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  thumbnail: string;
}

const Films = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = ['All', 'Classic Story Telling', 'New Age Modern', 'Intimates'];

  const films: Film[] = [
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
      categories: ['New Age Modern']
    },
    {
      id: '6',
      title: 'Aerin & Rahul',
      category: 'Classic Story Telling',
      date: 'Korea / India',
      description: 'Aerin and Rahul\'s story took us on a journey across two countries and cultures.',
      thumbnail: '/story-4.jpg',
      categories: ['Classic Story Telling']
    },
  ] as Film[]; // Explicit cast to allow custom properties if needed, though interface matches

  const filteredFilms =
    activeFilter === 'All'
      ? films
      : films.filter((f) => f.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-cream">
      <Navbar variant="transparent" />

      {/* Header Section */}
      <section className="pt-40 pb-20 px-8 lg:px-16 relative overflow-hidden">
        <div className={`max-w-[1400px] mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-6">The Screening Room</p>
          <h1 className="font-serif text-5xl lg:text-8xl text-white mb-8">Cinema & Soul</h1>
          <p className="max-w-xl mx-auto text-white/60 font-light leading-relaxed">
            A collection of our finest films. Each piece is a labor of love, crafted not just to document a day, but to preserve a feeling forever.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
          <ArrowDown size={20} />
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-0 z-40 bg-black/90 backdrop-blur-md py-6 border-b border-white/10 px-8">
        <div className="max-w-[1400px] mx-auto flex overflow-x-auto gap-8 justify-center no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${activeFilter === filter ? 'text-gold scale-105' : 'text-white/40 hover:text-white'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Films List - Single Column Immersive */}
      <section className="py-20 px-4 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-24 lg:gap-32">
          {filteredFilms.map((film, index) => (
            <div
              key={film.id}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Film Number */}
              <div className="hidden lg:block absolute -left-20 top-0 text-white/10 font-serif text-6xl">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Video Card */}
              <div className="relative aspect-video w-full overflow-hidden mb-8 border border-white/10">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500">
                    <Play className="w-6 h-6 text-white ml-1 group-hover:text-gold transition-colors" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                  <h3 className="font-serif text-3xl lg:text-4xl text-white mb-2 group-hover:text-gold transition-colors">{film.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-white/40 uppercase tracking-wider mb-4">
                    <span>{film.date}</span>
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    <span>{film.category}</span>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-white/60 font-light leading-relaxed text-sm">
                    {film.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Films;
