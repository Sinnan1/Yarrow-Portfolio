import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const AwardWinningFilms = () => {
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

  const awards = [
    { name: 'LOS ANGELES\nFILM FESTIVAL', subtitle: 'FINALIST\n2020', years: '' },
    { name: 'WEDDING\nFILMMAKER', subtitle: 'OF THE YEAR', years: '2020, 2019, 2018' },
    { name: 'PLATINUM FILM\nOF THE YEAR', subtitle: '2017', years: 'INDIA FILM PROJECT' },
    { name: 'WEDDING\nINFLUENCERS', subtitle: 'OF THE YEAR', years: '2019' },
  ];

  const films = [
    {
      image: '/film-1.jpg',
      title: 'Love In Second Innings.',
      description:
        "Second marriage, for many, is still a taboo. And this story illustrates why it's not. It's a treatise on how the past doesn't come in the way of love and respect. It's a heroic tale of victory over stereotypes and archaic customs. It's a story of how love always triumphs in the end. Every moment that we spent with Deepali and Nishant convinced us that life can be made beautiful... that tears can be turned into a drizzle of hope; that fear can be turned into the excitement of exploring the unknown; that the end is but a new beginning.",
    },
    {
      image: '/film-2.jpg',
      title: 'Twenty Years in the Making',
      description:
        "This one is special, very special. Hiba and Akbar's story took us on a journey all the way from Hiba's childhood till their reception in Bhopal and on the way we discovered an all new perspective of filming a wedding. We knew from start that no matter how hard we try we can never justify this wedding in a 5 minute film, but we tried, tried for an year now and this is the best we could do. It's a film which is not just about a wedding, an India Pakistan story which is not about India or Pakistan. For us its much more than that.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 px-8 lg:px-16 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2
          className={`font-serif text-4xl lg:text-5xl text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          AWARD WINNING FILMS
        </h2>

        {/* Awards Row */}
        <div
          className={`flex flex-wrap justify-center gap-8 lg:gap-12 mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Laurel Wreath SVG */}
              <svg
                viewBox="0 0 120 60"
                className="w-24 lg:w-32 h-12 lg:h-16 mx-auto mb-2"
                fill="none"
              >
                <path
                  d="M60 10C40 10 20 25 10 50M60 10C80 10 100 25 110 50"
                  stroke="#A69060"
                  strokeWidth="1"
                  fill="none"
                />
                {/* Left leaves */}
                {[...Array(8)].map((_, i) => (
                  <ellipse
                    key={`left-${i}`}
                    cx={15 + i * 5}
                    cy={45 - i * 4}
                    rx="8"
                    ry="3"
                    fill="#A69060"
                    transform={`rotate(${-30 + i * 10} ${15 + i * 5} ${45 - i * 4})`}
                  />
                ))}
                {/* Right leaves */}
                {[...Array(8)].map((_, i) => (
                  <ellipse
                    key={`right-${i}`}
                    cx={105 - i * 5}
                    cy={45 - i * 4}
                    rx="8"
                    ry="3"
                    fill="#A69060"
                    transform={`rotate(${30 - i * 10} ${105 - i * 5} ${45 - i * 4})`}
                  />
                ))}
              </svg>
              <p className="text-[10px] lg:text-xs font-medium tracking-wider whitespace-pre-line leading-tight">
                {award.name}
              </p>
              {award.subtitle && (
                <p className="text-[9px] lg:text-[10px] text-black/60 mt-1 whitespace-pre-line leading-tight">
                  {award.subtitle}
                </p>
              )}
              {award.years && (
                <p className="text-[8px] lg:text-[9px] text-black/40 mt-0.5">
                  {award.years}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Film Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {films.map((film, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 200}ms` }}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden mb-6 cursor-pointer">
                <img
                  src={film.image}
                  alt={film.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Film Info */}
              <h3 className="font-serif text-xl lg:text-2xl mb-3">{film.title}</h3>
              <p className="text-sm text-black/70 leading-relaxed line-clamp-6">
                {film.description}
              </p>
            </div>
          ))}
        </div>

        {/* Watch All Button */}
        <div
          className={`flex justify-center mt-12 lg:mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#films"
            className="bg-gold text-white px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-dark"
          >
            Watch All Our Award Winning Films
          </a>
        </div>
      </div>
    </section>
  );
};

export default AwardWinningFilms;
