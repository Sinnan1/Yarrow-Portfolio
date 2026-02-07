import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  client: string;
  location: string;
  wedding: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Yarrow captured every moment with such artistry and emotion. Looking at our wedding photos feels like reliving the most beautiful day of our lives. Their attention to detail and ability to capture genuine moments is unparalleled.",
      client: "Reva & Zach",
      location: "Mumbai, India",
      wedding: "October 2024",
    },
    {
      id: 2,
      quote: "We wanted a photographer who understood both cultures, and Yarrow exceeded all expectations. The photos are not just beautiful—they tell our story in a way that brings tears to our eyes every time we look at them.",
      client: "Manisha & Christopher",
      location: "Singapore",
      wedding: "August 2024",
    },
    {
      id: 3,
      quote: "Working with Yarrow was effortless. They made us feel comfortable, captured the most intimate moments, and delivered a collection of images that we'll treasure forever. True artists in every sense.",
      client: "Alia & Ranbir",
      location: "Mumbai, India",
      wedding: "August 2024",
    },
    {
      id: 4,
      quote: "The energy, the moments, the colors—everything was captured so perfectly. Yarrow didn't just photograph our wedding; they created art that tells the story of our love and our celebration.",
      client: "Kiara & Siddharth",
      location: "Delhi, India",
      wedding: "April 2024",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 md:py-32 lg:py-20 px-4 sm:px-8 lg:px-16 bg-warm-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16 lg:mb-24"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4 sm:mb-6">
            Client Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4">
            <span className="italic">Love</span> Stories
          </h2>
          <div className="decorative-line mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[280px] sm:min-h-[350px] lg:min-h-[400px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : -100,
                display: activeIndex === index ? 'block' : 'none',
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold/30 mb-4 sm:mb-6 lg:mb-8" />
                </motion.div>

                {/* Quote Text */}
                <blockquote className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-black/90 mb-6 sm:mb-8 lg:mb-10 italic max-w-4xl px-2">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="space-y-1 sm:space-y-2">
                  <p className="font-serif text-lg sm:text-xl lg:text-2xl text-gold">
                    {testimonial.client}
                  </p>
                  <p className="text-sm tracking-wider text-black/50">
                    {testimonial.location}
                  </p>
                  <p className="text-xs tracking-[0.3em] uppercase text-black/40">
                    {testimonial.wedding}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index
                ? 'bg-gold w-8'
                : 'bg-black/20 hover:bg-black/40'
                }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
