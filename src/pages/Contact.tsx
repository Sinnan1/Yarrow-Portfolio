import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Facebook, Twitter, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cmsApi } from '../api/cms';
import type { ContactPageContent } from '../types/content';

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<ContactPageContent | null>(null);

  useEffect(() => {
    setIsVisible(true);
    cmsApi.getContent('contact').then((data) => {
      if (data) setContent(data);
    });
  }, []);

  const defaultContent: ContactPageContent = {
    hero: {
      title: "Let's Start Your Story",
      subtitle: "The Beginning",
      image: "/about-bride-2.jpg"
    },
    intro: {
      text: "Every great film begins with a conversation. Tell us about your vision, your dreams, and the moments you want to keep forever. Have questions first? Visit our FAQ page."
    },
    info: {
      title: "Contact Us",
      subtitle: "Get In Touch",
      email: "hello@yarrowweddings.com",
      phone: "+91 99647 87383",
      location: "Worldwide — Based in India"
    }
  };

  const data = content || defaultContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    location: '',
    message: '',
    services: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you. We will be in touch shortly.');
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={data.hero.image}
            alt="Yarrow Weddings Contact"
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
      <section className="py-16 md:py-20 px-6 md:px-8 lg:px-24 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-black/60 font-light text-base md:text-lg leading-relaxed">
              {data.intro.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section with Sticky Sidebar */}
      <section className="py-12 md:py-20 lg:py-32 px-6 md:px-8 lg:px-24 border-t border-gold/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column — Sticky Contact Info */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="text-gold/40 font-serif text-7xl lg:text-8xl leading-none block mb-4">
                01
              </span>
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">
                {data.info.subtitle}
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8">
                {data.info.title}
              </h2>
              <div className="decorative-line mb-8 hidden lg:block" />

              <div className="space-y-6">
                <a
                  href={`mailto:${data.info.email}`}
                  className="flex items-center gap-4 group"
                >
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-black/60 font-light group-hover:text-gold transition-colors duration-300">
                    {data.info.email}
                  </span>
                </a>
                <a
                  href={`tel:${data.info.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-black/60 font-light group-hover:text-gold transition-colors duration-300">
                    {data.info.phone}
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-black/60 font-light">
                    {data.info.location}
                  </span>
                </div>
              </div>

              <div className="flex gap-6 mt-10">
                <a href="#" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-black/40 hover:text-gold transition-colors duration-300 cursor-pointer" />
                </a>
                <a href="#" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-black/40 hover:text-gold transition-colors duration-300 cursor-pointer" />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter className="w-5 h-5 text-black/40 hover:text-gold transition-colors duration-300 cursor-pointer" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Scrollable Form */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label className="block text-xs uppercase tracking-widest text-black/50 mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder-black/30 focus:border-gold focus:outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label className="block text-xs uppercase tracking-widest text-black/50 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder-black/30 focus:border-gold focus:outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label className="block text-xs uppercase tracking-widest text-black/50 mb-3">
                      Event Dates
                    </label>
                    <input
                      type="text"
                      placeholder="When is your event?"
                      className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder-black/30 focus:border-gold focus:outline-none transition-colors"
                      value={formData.dates}
                      onChange={(e) =>
                        setFormData({ ...formData, dates: e.target.value })
                      }
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label className="block text-xs uppercase tracking-widest text-black/50 mb-3">
                      Location / Venue
                    </label>
                    <input
                      type="text"
                      placeholder="Where is your event?"
                      className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder-black/30 focus:border-gold focus:outline-none transition-colors"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <label className="block text-xs uppercase tracking-widest text-black/50 mb-6">
                    Services
                  </label>
                  <div className="flex flex-wrap gap-6 md:gap-8">
                    {['Photography', 'Cinematography', 'Both'].map(
                      (service) => (
                        <label
                          key={service}
                          className="flex items-center gap-3 cursor-pointer group/item"
                        >
                          <div
                            className={`w-4 h-4 rounded-full border border-black/30 flex items-center justify-center transition-colors group-hover/item:border-gold ${formData.services.includes(service)
                                ? 'border-gold'
                                : ''
                              }`}
                          >
                            {formData.services.includes(service) && (
                              <div className="w-2 h-2 bg-gold rounded-full" />
                            )}
                          </div>
                          <span
                            className={`text-sm tracking-wide transition-colors ${formData.services.includes(service)
                                ? 'text-black'
                                : 'text-black/50 group-hover/item:text-black'
                              }`}
                          >
                            {service}
                          </span>
                          <input
                            type="checkbox"
                            className="hidden"
                            onChange={() => handleServiceChange(service)}
                            checked={formData.services.includes(service)}
                          />
                        </label>
                      )
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <label className="block text-xs uppercase tracking-widest text-black/50 mb-3">
                    Your Story
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your vision, your dreams, and the moments you want to keep forever..."
                    className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder-black/30 focus:border-gold focus:outline-none transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="pt-4 md:pt-8"
                >
                  <button
                    type="submit"
                    className="group flex items-center gap-4 text-gold uppercase tracking-[0.2em] text-sm hover:text-black transition-colors"
                  >
                    Send Inquiry
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-black text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="px-6 md:px-8"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-6">
            Have Questions?
          </p>
          <h2 className="font-serif text-white text-4xl lg:text-6xl mb-8">
            Visit Our FAQ
          </h2>
          <p className="text-white/50 font-light max-w-md mx-auto mb-12">
            Find answers to common questions about booking, deliverables,
            pricing, and more.
          </p>
          <Link
            to="/faq"
            className="inline-block border border-gold text-gold px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-all duration-500"
          >
            View FAQ
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
