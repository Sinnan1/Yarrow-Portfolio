import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, PlayCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import HorizontalScroll from '../components/HorizontalScroll';
import VideoPortal from '../components/VideoPortal';
import MagazineLayout from '../components/MagazineLayout';
import FeaturedWork from '../components/FeaturedWork';
import Testimonials from '../components/Testimonials';
import OurApproach from '../components/OurApproach';


import type { HomeContent } from '../types/content';
import { cmsApi } from '../api/cms';
// ... existing imports

const Home = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [content, setContent] = useState<HomeContent | null>(null);

  useEffect(() => {
    // Load content from CMS
    cmsApi.getContent('home').then((data) => {
      if (data) setContent(data);
    });
  }, []);

  // Fallback content (original hardcoded)
  const defaultContent = {
    hero: {
      title: "A Modern Approach",
      subtitle: "to an Age Old Tradition"
    },
    about: {
      image1: "/about-bride-1.jpg",
      image2: "/about-bride-2.jpg",
      text1: "Considered to be the epitome of Modern Photography and Filmmaking, Yarrow Weddings has transformed the Indian Wedding landscape on a regular basis. For almost a decade we have been creating photographs and films which are timeless and have been etched in memories of thousands of people forever.",
      text2: "Awarded as the Wedding Filmmaker of the year for four consecutive years at the Weddingsutra awards along with numerous other awards, we are the only company listed on IMDB for its award winning films."
    },
    featuredWeddings: [
      { image: '/wedding-1.jpg', couple: 'Reva & Zach', date: 'Oct 7, 2024' },
      { image: '/wedding-2.jpg', couple: 'Manisha & Christopher', date: 'Aug 25, 2024' },
      { image: '/wedding-3.jpg', couple: 'Alia & Ranbir, Mumbai', date: 'Aug 8, 2024' },
      { image: '/wedding-4.jpg', couple: 'Kiara & Siddharth', date: 'Apr 24, 2024' },
    ],
    films: [
      {
        image: '/film-1.jpg',
        title: 'Love In Second Innings.',
        description: "Second marriage, for many, is still a taboo. And this story illustrates why it's not. It's a treatise on how the past doesn't come in the way of love and respect. It's a heroic tale of victory over stereotypes and archaic customs. It's a story of how love always triumphs in the end. Every moment that we spent with Deepali and Nishant convinced us that life can be made beautiful... that tears can be turned into a drizzle of hope; that fear can be turned into the excitement of exploring the unknown; that the end is but a new beginning.",
      },
      {
        image: '/film-2.jpg',
        title: 'Twenty Years in the Making',
        description: "This one is special, very special. Hiba and Akbar's story took us on a journey all the way from Hiba's childhood till their reception in Bhopal and on the way we discovered an all new perspective of filming a wedding. We knew from start that no matter how hard we try we can never justify this wedding in a 5 minute film, but we tried, tried for an year now and this is the best we could do. Its a film which is not just about a wedding, an India Pakistan story which is not about India or Pakistan. For us its much more than that.",
      },
    ],
    weddingStories: [
      { image: '/story-1.jpg', couple: 'TAMANNA & DAN', location: '' },
      { image: '/story-2.jpg', couple: 'ALISHA & RAHUL', location: 'Amalfi Coast, Italy' },
      { image: '/story-3.jpg', couple: 'SALONI & SID', location: 'Bangkok' },
      { image: '/story-4.jpg', couple: 'ZINAB & ZAIN', location: '' },
    ],
    awards: [
      { name: 'LOS ANGELES\nFILM FESTIVAL', subtitle: 'FINALIST\n2020', years: '' },
      { name: 'WEDDING\nFILMMAKER', subtitle: 'OF THE YEAR', years: '2020, 2019, 2018' },
      { name: 'PLATINUM FILM\nOF THE YEAR', subtitle: '2017', years: 'INDIA FILM PROJECT' },
      { name: 'WEDDING\nINFLUENCERS', subtitle: 'OF THE YEAR', years: '2019' },
    ],
    ibtda: {
      title: "our finest Ibtda",
      description: "Ibtda is our finest offering with fine-art editorial style photography lead by Siddharth Sharma, founder of Yarrow Weddings.",
      link: "https://ibtda.co"
    },
    cta: {
      title: "Let's Create Magic Together",
      text: "Every love story deserves to be told beautifully. Let us capture yours."
    }
  };

  const data = content || defaultContent;

  const { featuredWeddings, films, weddingStories, awards } = data;

  const aboutRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const filmsRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const ibtdaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

    [aboutRef, featuredRef, filmsRef, storiesRef, ibtdaRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden">
        <Hero />
        <Navbar variant="transparent" />
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-16 md:py-24 lg:py-20 px-4 sm:px-8 lg:px-16 bg-cream overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 lg:mb-28 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="decorative-line mx-auto mb-10" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              <span className="block italic font-light">{data.hero.title}</span>
              <span className="block not-italic mt-2 sm:mt-4 text-gold">{data.hero.subtitle}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div
              className={`lg:col-span-4 transition-all duration-1000 delay-200 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="aspect-[3/4] overflow-hidden shadow-lg">
                <img
                  src={data.about.image1}
                  alt="Elegant Bride"
                  className="w-full h-full object-cover transition-all duration-700 img-elegant-hover"
                />
              </div>
            </div>

            <div
              className={`lg:col-span-4 py-8 transition-all duration-1000 delay-300 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <p className="text-sm lg:text-base leading-relaxed text-black/80 mb-6 font-light">
                {data.about.text1}
              </p>
              <p className="text-sm lg:text-base leading-relaxed text-black/80 font-light">
                {data.about.text2}
              </p>
              <div className="mt-8">
                <Link to="/photography" className="inline-flex items-center gap-2 text-gold text-sm tracking-wider uppercase hover:gap-4 transition-all duration-300 underline-elegant">
                  View Our Work <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div
              className={`lg:col-span-4 transition-all duration-1000 delay-400 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="aspect-[16/10] overflow-hidden shadow-lg">
                <img
                  src={data.about.image2}
                  alt="Bride in Gown"
                  className="w-full h-full object-cover transition-all duration-700 img-elegant-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Section 1: Horizontal Scroll */}
      <HorizontalScroll />

      {/* Media Logos Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 bg-cream border-y border-gold/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-black/40 mb-8">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20">
            {['VOGUE', 'COSMOPOLITAN', 'HELLO!', 'BRIDES', 'TRAVEL+LEISURE'].map((logo) => (
              <span
                key={logo}
                className="font-serif text-lg lg:text-xl tracking-[0.2em] text-black/40 hover:text-gold transition-colors duration-500 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section - Replaces Gallery Grid */}
      <FeaturedWork />

      {/* Featured Weddings Section */}
      <section ref={featuredRef} id="featured" className="py-16 md:py-24 lg:py-20 px-4 sm:px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="decorative-line mx-auto mb-6" />
            <h3 className="font-serif text-3xl lg:text-4xl mb-2">Featured Weddings</h3>
            <p className="text-sm text-black/50">Stories of love, captured with soul</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredWeddings.map((wedding: any, index: number) => (
              <Link
                key={index}
                to={`/photography/${wedding.couple.toLowerCase().replace(/ & /g, '-').replace(/, /g, '-').replace(/ /g, '-')}`}
                className={`group cursor-pointer transition-all duration-700 hover-lift ${isVisible.featured ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/4] overflow-hidden mb-5 shadow-lg">
                  <img
                    src={wedding.image}
                    alt={wedding.couple}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-serif-alt text-lg lg:text-xl text-black/90 group-hover:text-gold transition-colors duration-300 italic">
                    {wedding.couple}
                  </h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link
              to="/photography"
              className="border-2 border-gold text-gold px-10 py-4 text-sm tracking-widest uppercase transition-all duration-500 hover:bg-gold hover:text-white"
            >
              View All Weddings
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Moved up for better flow */}
      <Testimonials />

      {/* Soul + Cinema Section */}
      <section className="relative bg-cream">
        <div className="relative py-32 lg:py-48">
          <div className="absolute inset-0">
            <img
              src="/soul-cinema-bg.jpg"
              alt="Couple Dancing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-4">Our Philosophy</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">Soul + Cinema</h2>
            <div className="decorative-line mx-auto mb-6 bg-white/30" />
            <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto font-light">
              Every wedding is unique and so are our films. For past 8 years Yarrow Weddings has set new
              benchmarks of storytelling within wedding realm and beyond. We are fortunate to have
              experienced so unique cultures and traditions across 25 countries and to document stories
              that continuously overwhelm us.
            </p>
          </div>
        </div>
      </section>

      {/* Video Portal - Moved here to group with films */}
      <VideoPortal />

      {/* Award Winning Films Section */}
      <section ref={filmsRef} id="films" className="py-16 md:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="decorative-line mx-auto mb-6" />
            <h2
              className={`font-serif text-3xl lg:text-4xl transition-all duration-1000 ${isVisible.films ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              Award Winning Films
            </h2>
          </div>

          {/* Awards Row - Simplified */}
          <div
            className={`flex flex-wrap justify-center gap-8 lg:gap-16 mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${isVisible.films ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {awards.map((award: any, index: number) => (
              <div key={index} className="text-center max-w-[180px]">
                <div className="w-16 h-16 rounded-full border-2 border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10"></div>
                </div>
                <p className="text-xs lg:text-sm font-medium tracking-wide whitespace-pre-line leading-tight text-black/80 mb-2">
                  {award.name}
                </p>
                {award.subtitle && (
                  <p className="text-xs text-gold whitespace-pre-line leading-tight">
                    {award.subtitle}
                  </p>
                )}
                {award.years && (
                  <p className="text-[10px] text-black/40 mt-1">{award.years}</p>
                )}
              </div>
            ))}
          </div>

          {/* Film Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {films.map((film: any, index: number) => (
              <div
                key={index}
                className={`group transition-all duration-1000 ${isVisible.films ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${(index + 2) * 200}ms` }}
              >
                <div className="relative aspect-video overflow-hidden mb-6 cursor-pointer shadow-lg">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/80 transition-all duration-500">
                      <PlayCircle className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-xl lg:text-2xl mb-3 group-hover:text-gold transition-colors duration-300">{film.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed line-clamp-3 font-light">{film.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link
              to="/films"
              className="border-2 border-gold text-gold px-10 py-4 text-sm tracking-widest uppercase transition-all duration-500 hover:bg-gold hover:text-white"
            >
              Watch All Our Films
            </Link>
          </div>
        </div>
      </section>

      {/* Wedding Stories Grid */}
      <section ref={storiesRef} id="stories" className="py-16 md:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="decorative-line mx-auto mb-6" />
            <h3 className="font-serif text-3xl lg:text-4xl mb-2">Wedding Stories</h3>
            <p className="text-sm text-black/50 mb-4">Timeless moments, beautifully captured</p>
            <p className="text-sm lg:text-base leading-relaxed text-black/70 font-light">
              We at Yarrow Weddings celebrate the wild ones, the rule breakers, the travellers, the new age modern couple who are not afraid to experiment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {weddingStories.map((story: any, index: number) => (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-700 hover-lift ${isVisible.stories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.couple}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="font-serif text-2xl lg:text-4xl xl:text-5xl tracking-wide">{story.couple}</h3>
                    {story.location && <p className="text-xs lg:text-sm mt-3 opacity-70 tracking-wider">{story.location}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link
              to="/photography"
              className="border-2 border-gold text-gold px-10 py-4 text-sm tracking-widest uppercase transition-all duration-500 hover:bg-gold hover:text-white"
            >
              View All Wedding Stories
            </Link>
          </div>

          <div className="decorative-line mx-auto mt-16" />
        </div>
      </section>

      {/* Signature Section 3: Magazine Layout */}
      <MagazineLayout />

      {/* Our Approach Section - Moved here for better flow */}
      <OurApproach />

      {/* Ibtda Section */}
      <section ref={ibtdaRef} id="ibtda" className="relative h-auto">
        <div className="relative min-h-[500px] lg:min-h-[600px]">
          <img
            src="/ibtda-bg.jpg"
            alt="Elegant Couple"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 flex items-center min-h-[500px] lg:min-h-[600px]">
            <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
              <div className="max-w-xl py-16 lg:py-20">
                <p
                  className={`text-xs tracking-[0.3em] uppercase text-white/60 mb-4 transition-all duration-1000 ${isVisible.ibtda ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                  Premium Collection
                </p>
                <h2
                  className={`font-serif text-4xl lg:text-6xl text-white mb-6 transition-all duration-1000 delay-100 ${isVisible.ibtda ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                  <span className="block italic font-light text-2xl lg:text-3xl mb-2 text-gold">
                    {data.ibtda.title.replace('Ibtda', '')}
                  </span>
                  <span className="block">Ibtda</span>
                </h2>

                <div className="decorative-line bg-white/30 mb-6" />

                <p
                  className={`text-white/80 text-sm lg:text-base leading-relaxed mb-8 transition-all duration-1000 delay-200 ${isVisible.ibtda ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                  {data.ibtda.description}
                </p>

                <div
                  className={`transition-all duration-1000 delay-400 ${isVisible.ibtda ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                  <a
                    href={data.ibtda.link || "https://ibtda.co"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-white text-white px-8 py-3 text-sm tracking-widest uppercase transition-all duration-500 hover:bg-white hover:text-black"
                  >
                    Visit Ibtda.Co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <div className="decorative-line mx-auto mb-8" />
          <h3 className="font-serif text-3xl lg:text-4xl mb-4">{data.cta.title}</h3>
          <p className="text-sm text-black/60 mb-10 font-light">
            {data.cta.text}
          </p>
          <Link
            to="/contact"
            className="inline-block border-2 border-gold text-gold px-12 py-4 text-sm tracking-widest uppercase transition-all duration-500 hover:bg-gold hover:text-white"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
