import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

interface Wedding {
  id: string;
  slug: string;
  couple: string;
  description: string;
  image: string;
  categories: string[];
}

const Photography = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = ['All', 'International', 'Indian', 'Intimate'];

  const weddings: Wedding[] = [
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
    {
      id: '4',
      slug: 'kiara-siddharth',
      couple: 'Kiara & Siddharth',
      description: 'A full on Punjabi energy.',
      image: '/wedding-4.jpg',
      categories: ['Indian'],
    },
    {
      id: '5',
      slug: 'joanna-matt',
      couple: 'Joanna & Matt',
      description: 'Against the backdrop of the Azure ocean.',
      image: '/story-1.jpg',
      categories: ['International', 'Intimate'],
    },
    {
      id: '6',
      slug: 'raina-darshan',
      couple: 'Raina & Darshan',
      description: 'Athens, Greece was a stunning location.',
      image: '/story-2.jpg',
      categories: ['International', 'Intimate'],
    },
    {
      id: '7',
      slug: 'arpita-kunal',
      couple: 'Arpita & Kunal',
      description: 'Friends then, friends now, friends forever.',
      image: '/story-3.jpg',
      categories: ['Indian'],
    },
    {
      id: '8',
      slug: 'ananya-jahan',
      couple: 'Ananya & Jahan',
      description: 'In a beautiful home, amidst intimacy and ecstasy.',
      image: '/story-4.jpg',
      categories: ['Indian', 'Intimate'],
    },
    {
      id: '9',
      slug: 'meghna-karan',
      couple: 'Meghna & Karan',
      description: 'Rare is that Indian Wedding celebrated with intimacy.',
      image: '/story-5.jpg',
      categories: ['Indian'],
    },
    {
      id: '10',
      slug: 'mona-ahmad',
      couple: 'Mona & Ahmad',
      description: 'A Dubai fairytale.',
      image: '/story-6.jpg',
      categories: ['International'],
    },
    {
      id: '11',
      slug: 'alya-yahia',
      couple: 'Alya & Yahia',
      description: 'Exploring cultures we have never experienced before.',
      image: '/gallery-1.jpg',
      categories: ['International'],
    },
    {
      id: '12',
      slug: 'zina-zain',
      couple: 'Zina & Zain',
      description: 'Two love stories made for the books.',
      image: '/gallery-2.jpg',
      categories: ['Intimate', 'Indian'],
    },
  ];

  const filteredWeddings = activeFilter === 'All'
    ? weddings
    : weddings.filter((w) => w.categories.includes(activeFilter));

  // Split into two columns for masonry effect
  const leftColumn = filteredWeddings.filter((_, i) => i % 2 === 0);
  const rightColumn = filteredWeddings.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen bg-cream">
      <section className="pt-12 pb-32 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black/10 pb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-4">Portfolio</p>
              <h1 className="font-serif text-6xl lg:text-8xl">Curated Galleries</h1>
            </div>

            <div className="flex gap-8 mt-8 md:mt-0">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-sm tracking-widest uppercase transition-all duration-300 ${activeFilter === filter ? 'text-gold underline underline-offset-8 decoration-2' : 'text-black/40 hover:text-black'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Staggered Grid */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-12 lg:gap-24">
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
                  <div className="flex justify-between items-baseline border-b border-black/10 pb-4 group-hover:border-gold/50 transition-colors">
                    <h2 className="font-serif text-3xl group-hover:text-gold transition-colors">{wedding.couple}</h2>
                    <span className="text-xs uppercase tracking-widest text-black/40">{wedding.categories[0]}</span>
                  </div>
                  <p className="mt-4 text-black/60 font-light leading-relaxed max-w-sm">{wedding.description}</p>
                </Link>
              ))}
            </div>

            {/* Right Column - Top Margin for Stagger */}
            <div className="w-full md:w-1/2 flex flex-col gap-12 lg:gap-24 md:mt-32">
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
                  <div className="flex justify-between items-baseline border-b border-black/10 pb-4 group-hover:border-gold/50 transition-colors">
                    <h2 className="font-serif text-3xl group-hover:text-gold transition-colors">{wedding.couple}</h2>
                    <span className="text-xs uppercase tracking-widest text-black/40">{wedding.categories[0]}</span>
                  </div>
                  <p className="mt-4 text-black/60 font-light leading-relaxed max-w-sm">{wedding.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Photography;
