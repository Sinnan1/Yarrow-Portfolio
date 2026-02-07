import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import LazyImage from './LazyImage';

interface FeaturedItem {
  id: number;
  image: string;
  couple: string;
  category: string;
  slug: string;
  featured?: boolean;
}

const FeaturedWork = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredItems: FeaturedItem[] = [
    {
      id: 1,
      image: '/wedding-1.jpg',
      couple: 'Reva & Zach',
      category: 'Indian Wedding',
      slug: 'reva-zach',
      featured: true,
    },
    {
      id: 2,
      image: '/wedding-2.jpg',
      couple: 'Manisha & Christopher',
      category: 'International',
      slug: 'manisha-christopher',
    },
    {
      id: 3,
      image: '/gallery-1.jpg',
      couple: 'Alya & Yahia',
      category: 'Destination',
      slug: 'alya-yahia',
    },
    {
      id: 4,
      image: '/story-2.jpg',
      couple: 'Raina & Darshan',
      category: 'Greece',
      slug: 'raina-darshan',
      featured: true,
    },
    {
      id: 5,
      image: '/wedding-4.jpg',
      couple: 'Kiara & Siddharth',
      category: 'Punjabi',
      slug: 'kiara-siddharth',
    },
    {
      id: 6,
      image: '/story-3.jpg',
      couple: 'Arpita & Kunal',
      category: 'Intimate',
      slug: 'arpita-kunal',
    },
  ];

  return (
    <section className="py-20 md:py-32 lg:py-0 px-4 sm:px-8 lg:px-8 bg-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6">Selected Works</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            Recent <span className="italic text-gold">Highlights</span>
          </h2>
          <div className="decorative-line mx-auto mt-8" />
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Large Featured Image - Top Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-12 md:col-span-8 lg:col-span-7 row-span-2"
          >
            <Link
              to={`/photography/${featuredItems[0].slug}`}
              className="group relative block h-[600px] lg:h-[700px] overflow-hidden"
            >
              <LazyImage
                src={featuredItems[0].image}
                alt={featuredItems[0].couple}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Caption - Always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-2">
                    {featuredItems[0].category}
                  </p>
                  <h3 className="font-serif text-4xl lg:text-5xl text-white mb-3">
                    {featuredItems[0].couple}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <span className="text-sm tracking-wider">View Gallery</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Stacked Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 md:col-span-4 lg:col-span-5"
          >
            <Link
              to={`/photography/${featuredItems[1].slug}`}
              className="group relative block h-[290px] lg:h-[340px] overflow-hidden mb-4 lg:mb-6"
            >
              <LazyImage
                src={featuredItems[1].image}
                alt={featuredItems[1].couple}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-1">
                    {featuredItems[1].category}
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white">
                    {featuredItems[1].couple}
                  </h3>
                </div>
              </div>
            </Link>

            <Link
              to={`/photography/${featuredItems[2].slug}`}
              className="group relative block h-[290px] lg:h-[340px] overflow-hidden"
            >
              <LazyImage
                src={featuredItems[2].image}
                alt={featuredItems[2].couple}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-1">
                    {featuredItems[2].category}
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white">
                    {featuredItems[2].couple}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Bottom Row - Three Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-12 md:col-span-4 lg:col-span-5"
          >
            <Link
              to={`/photography/${featuredItems[3].slug}`}
              className="group relative block h-[350px] lg:h-[450px] overflow-hidden"
            >
              <img
                src={featuredItems[3].image}
                alt={featuredItems[3].couple}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-1">
                    {featuredItems[3].category}
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white">
                    {featuredItems[3].couple}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="col-span-12 md:col-span-4 lg:col-span-4"
          >
            <Link
              to={`/photography/${featuredItems[4].slug}`}
              className="group relative block h-[350px] lg:h-[450px] overflow-hidden"
            >
              <img
                src={featuredItems[4].image}
                alt={featuredItems[4].couple}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-1">
                    {featuredItems[4].category}
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white">
                    {featuredItems[4].couple}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-12 md:col-span-4 lg:col-span-3"
          >
            <Link
              to={`/photography/${featuredItems[5].slug}`}
              className="group relative block h-[350px] lg:h-[450px] overflow-hidden"
            >
              <img
                src={featuredItems[5].image}
                alt={featuredItems[5].couple}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-1">
                    {featuredItems[5].category}
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white">
                    {featuredItems[5].couple}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-16 lg:mt-24"
        >
          <Link
            to="/photography"
            className="group inline-flex items-center gap-3 border-2 border-gold text-gold px-12 py-4 text-sm tracking-widest uppercase transition-all duration-500 hover:bg-gold hover:text-white"
          >
            <span>Explore Full Portfolio</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
