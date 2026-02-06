import { motion } from 'framer-motion';
import { Camera, Heart, Film, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const OurApproach = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      number: '01',
      icon: Heart,
      title: 'Connection First',
      description:
        'We begin by understanding your story, your vision, and what makes your love unique. Every couple is different, and we tailor our approach to capture your authentic selves.',
    },
    {
      number: '02',
      icon: Camera,
      title: 'Cinematic Vision',
      description:
        'Our editorial approach blends documentary storytelling with fine-art composition. We capture genuine moments while creating frames worthy of magazine covers.',
    },
    {
      number: '03',
      icon: Film,
      title: 'Seamless Experience',
      description:
        "On your wedding day, we're invisible when we need to be and present when it matters. Our team works quietly and efficiently, letting you focus on celebrating.",
    },
    {
      number: '04',
      icon: Sparkles,
      title: 'Timeless Artistry',
      description:
        'Your collection is carefully curated and color-graded to perfection. Each image is a work of art designed to evoke emotion and stand the test of time.',
    },
  ];

  return (
    <section className="py-32 lg:py-48 px-8 lg:px-16 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-24 lg:mb-32"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6">
            Our Philosophy
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
            The <span className="italic text-gold">Yarrow</span> Approach
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-base lg:text-lg leading-relaxed text-black/70 font-light">
            We believe wedding photography is more than capturing moments—it's about preserving emotions, 
            telling stories, and creating art that transcends time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group"
              >
                <div className="flex items-start gap-6">
                  {/* Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <span className="font-serif text-6xl lg:text-7xl text-gold/20 absolute -top-4 -left-2">
                        {step.number}
                      </span>
                      <div className="relative z-10 w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-500 mt-6">
                        <Icon className="w-7 h-7 text-gold" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-6">
                    <h3 className="font-serif text-3xl lg:text-4xl mb-4 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-24 lg:mt-32"
        >
          <p className="text-lg text-black/70 mb-8 font-light">
            Ready to start your journey?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 border-2 border-gold text-gold px-12 py-4 text-sm tracking-widest uppercase transition-all duration-500 hover:bg-gold hover:text-white group"
          >
            <span>Let's Connect</span>
            <Heart size={18} className="transition-transform group-hover:scale-110" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;
