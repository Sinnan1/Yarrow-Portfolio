import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cmsApi } from '../api/cms';
import type { FAQPageContent } from '../types/content';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

const FAQ = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<FAQPageContent | null>(null);

  useEffect(() => {
    setIsVisible(true);
    cmsApi.getContent('faq').then((data) => {
      if (data) setContent(data);
    });
  }, []);

  const defaultContent: FAQPageContent = {
    hero: {
      title: "Questions & Answers",
      subtitle: "Everything You Need to Know",
      image: "/about-bride-1.jpg"
    },
    intro: {
      text: "We believe in transparency and openness. Here are the answers to the questions we hear most often. If there's anything else on your mind, we'd love to hear from you."
    },
    categories: [
      {
        title: 'Booking & Availability',
        subtitle: 'Starting Your Journey',
        items: [
          {
            question: 'How far in advance should we book?',
            answer: 'We recommend reaching out 8–12 months before your wedding date to ensure availability. Our calendar fills quickly, especially during peak wedding season (October–February). For destination weddings, earlier booking is ideal so we can plan logistics together.',
          },
          // ... other default items
        ]
      },
      // ... other default categories
    ]
  };

  const data = content || defaultContent;

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={data.hero.image}
            alt="Yarrow Weddings FAQ"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div
            className={`transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
              }`}
          >
            <p className="text-white/70 uppercase tracking-[0.4em] text-xs mb-4">
              {data.hero.subtitle}
            </p>
            <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl">
              {data.hero.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-8 lg:px-24 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-black/60 font-light text-lg leading-relaxed">
              {data.intro.text}{' '}
              <Link
                to="/contact"
                className="text-gold hover:text-gold-dark underline-elegant transition-colors duration-300"
              >
                hear from you
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections with Sticky Scroll */}
      {data.categories.map((category, index) => (
        <FAQCategorySection
          key={category.title}
          category={category}
          index={index}
        />
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-black text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="px-8"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-6">
            Still Have Questions?
          </p>
          <h2 className="font-serif text-white text-4xl lg:text-6xl mb-8">
            Let's Talk.
          </h2>
          <p className="text-white/50 font-light max-w-md mx-auto mb-12">
            We're always happy to chat — no commitment needed. Reach out and
            let's start a conversation about your story.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-gold text-gold px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-all duration-500"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

const FAQCategorySection = ({
  category,
  index,
}: {
  category: FAQCategory;
  index: number;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 lg:py-32 px-8 lg:px-24 border-t border-gold/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column — Sticky Question Category */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="text-gold/40 font-serif text-7xl lg:text-8xl leading-none block mb-4">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">
              {category.subtitle}
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              {category.title}
            </h2>
            <div className="decorative-line mt-8 hidden lg:block" />
          </motion.div>
        </div>

        {/* Right Column — Scrolling Q&A */}
        <div className="lg:col-span-8">
          <div className="space-y-0">
            {category.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: '-50px' }}
                className="border-b border-black/10"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                >
                  <h3 className="font-serif text-xl lg:text-2xl group-hover:text-gold transition-colors duration-300">
                    {item.question}
                  </h3>
                  <span className="mt-1 flex-shrink-0 text-gold">
                    {openIndex === i ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${openIndex === i
                      ? 'max-h-[500px] opacity-100 pb-8'
                      : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-black/60 font-light leading-relaxed text-base lg:text-lg pr-8">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
