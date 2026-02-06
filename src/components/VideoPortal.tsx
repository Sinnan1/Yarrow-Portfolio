import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

const VideoPortal = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], ["40px", "0px", "40px"]);

    return (
        <section ref={containerRef} className="relative h-[150vh] bg-cream pt-20">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale, borderRadius }}
                    className="relative w-full h-full max-w-[95%] max-h-[90%] overflow-hidden shadow-2xl group cursor-pointer"
                >
                    <img
                        src="/soul-cinema-bg.jpg"
                        alt="Cinematic Moment"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 group-hover:bg-gold/80 group-hover:border-gold transition-all duration-500"
                        >
                            <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                        </motion.div>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <p className="text-white/70 uppercase tracking-[0.4em] text-xs mb-6">The Experience</p>
                            <h2 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl mb-32">
                                Unscripted <br /> <span className="italic text-gold">Emotion</span>
                            </h2>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoPortal;
