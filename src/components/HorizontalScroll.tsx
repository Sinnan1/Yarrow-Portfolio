import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScroll = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const items = [
        {
            id: 1,
            title: "The Beginning",
            year: "2015",
            img: "/story-1.jpg",
            desc: "Where it all started. A small camera and a big dream.",
        },
        {
            id: 2,
            title: "First Destination",
            year: "2017",
            img: "/story-2.jpg",
            desc: "Our first international commission in the hills of Tuscany.",
        },
        {
            id: 3,
            title: "Vogue Feature",
            year: "2019",
            img: "/story-3.jpg",
            desc: "Recognized globally for our editorial approach.",
        },
        {
            id: 4,
            title: "Expanding Horizons",
            year: "2021",
            img: "/story-4.jpg",
            desc: "Launching our specialized cinema division.",
        },
        {
            id: 5,
            title: "The Signature Style",
            year: "2023",
            img: "/wedding-1.jpg",
            desc: "Defining the modern luxury aesthetic.",
        },
        {
            id: 6,
            title: "Global Presence",
            year: "2025",
            img: "/wedding-2.jpg",
            desc: "Studios in Dubai, London, and Mumbai.",
        },
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-16 px-16">
                    <div className="flex-shrink-0 w-[400px] flex flex-col justify-center">
                        <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Journey</p>
                        <h2 className="font-serif text-white text-5xl lg:text-7xl leading-tight">
                            A Decade of <br /> <span className="italic text-white/50">Excellence</span>
                        </h2>
                    </div>
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-[60vh] w-[400px] flex-shrink-0 overflow-hidden bg-cream/5"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-700" />
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
                                <span className="text-gold font-serif italic text-2xl mb-2 block">{item.year}</span>
                                <h3 className="text-white font-serif text-3xl mb-2">{item.title}</h3>
                                <p className="text-white/60 text-sm font-light">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScroll;
