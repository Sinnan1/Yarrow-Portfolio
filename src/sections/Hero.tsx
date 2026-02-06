import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="absolute inset-0">
      <img
        src="/hero-couple.jpg"
        alt="Wedding Couple"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Centered Branding Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[0.15em] mb-4">
            YARROW WEDDINGS
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm md:text-base lg:text-lg tracking-[0.3em] uppercase text-white/80 font-light"
          >
            Luxury Wedding Photography
          </motion.p>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ height: ["16px", "32px", "16px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
