import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="absolute inset-0">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="/hero-couple.jpg"
          alt="Wedding Couple"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Centered Branding Overlay with Parallax */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-center px-4"
        >
          <motion.h1 
            className="font-serif text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-display mb-6 leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            YARROW WEDDINGS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '4rem' }}
            transition={{ duration: 0.8, delay: 1 }}
            className="h-px bg-gold/60 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-sm md:text-base lg:text-lg tracking-[0.3em] uppercase text-white/80 font-light"
          >
            Luxury Wedding Photography
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <motion.span 
          className="text-white/60 text-xs tracking-[0.3em] uppercase"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ 
            height: ["20px", "40px", "20px"],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-gradient-to-b from-white/50 via-white/80 to-transparent"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
