import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0.2]);

  return (
    <div className="absolute inset-0">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src="/hero-couple.jpg"
          alt="Wedding Couple"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
    </div>
  );
};

export default Hero;
