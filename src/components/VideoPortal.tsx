import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
                    className="relative w-full h-full max-w-[95%] max-h-[90%] overflow-hidden shadow-2xl"
                >
                    <img
                        src="/soul-cinema-bg.jpg" // Using existing image as placeholder for video
                        alt="Cinematic Moment"
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-black/30" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <p className="text-white/70 uppercase tracking-[0.4em] text-xs mb-6">The Experience</p>
                            <h2 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl">
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
