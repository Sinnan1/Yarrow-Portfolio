const Hero = () => {
  return (
    <div className="absolute inset-0">
      <img
        src="/hero-couple.jpg"
        alt="Wedding Couple"
        className="w-full h-full object-cover object-top grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-white/50" />
      </div>
    </div>
  );
};

export default Hero;
