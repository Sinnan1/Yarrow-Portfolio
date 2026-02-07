import { useRef, type KeyboardEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SCROLL_DISTANCE = 240;

const HorizontalScroll = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    const handleMobileKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const listElement = listRef.current;
        if (!listElement) {
            return;
        }
        if (event.key === "ArrowRight") {
            event.preventDefault();
            listElement.scrollBy({ left: SCROLL_DISTANCE, behavior: "smooth" });
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            listElement.scrollBy({ left: -SCROLL_DISTANCE, behavior: "smooth" });
        } else if (event.key === "Home") {
            event.preventDefault();
            listElement.scrollTo({ left: 0, behavior: "smooth" });
        } else if (event.key === "End") {
            event.preventDefault();
            listElement.scrollTo({ left: listElement.scrollWidth, behavior: "smooth" });
        }
    };

    const items = [
        {
            id: 1,
            title: "The Beginning",
            year: "2015",
            img: "/story-1.jpg",
            desc: "Where it all started. A small camera and a big dream.",
            width: 500,
            height: "70vh",
        },
        {
            id: 2,
            title: "First Destination",
            year: "2017",
            img: "/story-2.jpg",
            desc: "Our first international commission in the hills of Tuscany.",
            width: 450,
            height: "60vh",
        },
        {
            id: 3,
            title: "Vogue Feature",
            year: "2019",
            img: "/story-3.jpg",
            desc: "Recognized globally for our editorial approach.",
            width: 500,
            height: "65vh",
        },
        {
            id: 4,
            title: "Expanding Horizons",
            year: "2021",
            img: "/story-4.jpg",
            desc: "Launching our specialized cinema division.",
            width: 400,
            height: "60vh",
        },
        {
            id: 5,
            title: "The Signature Style",
            year: "2023",
            img: "/wedding-1.jpg",
            desc: "Defining the modern luxury aesthetic.",
            width: 480,
            height: "68vh",
        },
        {
            id: 6,
            title: "Global Presence",
            year: "2025",
            img: "/wedding-2.jpg",
            desc: "Studios in Dubai, London, and Mumbai.",
            width: 420,
            height: "62vh",
        },
    ];

    return (
        <>
            <section className="bg-black py-16 md:hidden">
                <div className="px-6">
                    <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Journey</p>
                    <h2 id="journey-heading" className="font-serif text-white text-4xl leading-tight">
                        A Decade of <br /> <span className="italic text-white/50">Excellence</span>
                    </h2>
                </div>
                <div
                    className="relative mt-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    role="region"
                    aria-labelledby="journey-heading"
                    tabIndex={0}
                    onKeyDown={handleMobileKeyDown}
                >
                    <ul
                        ref={listRef}
                        className="flex gap-6 overflow-x-auto px-6 pb-6 snap-x snap-mandatory"
                        role="list"
                        aria-label="Our Journey timeline entries"
                    >
                        {items.map((item) => (
                            <li
                                key={item.id}
                                tabIndex={0}
                                className="group relative flex-shrink-0 overflow-hidden bg-cream/5 w-[80vw] h-[50vh] snap-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-700" />
                                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
                                    <span className="text-gold font-serif italic text-2xl mb-2 block">{item.year}</span>
                                    <h3 className="text-white font-serif text-2xl mb-2">{item.title}</h3>
                                    <p className="text-white/60 text-sm font-light">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-black to-transparent" />
                </div>
            </section>
            <section ref={targetRef} className="relative hidden md:block h-[300vh] bg-black">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-8 px-16">
                        <div className="flex-shrink-0 w-full md:w-[550px] flex flex-col justify-center pr-8">
                            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Journey</p>
                            <h2 className="font-serif text-white text-5xl lg:text-7xl leading-tight">
                                A Decade of <br /> <span className="italic text-white/50">Excellence</span>
                            </h2>
                        </div>
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="group relative flex-shrink-0 overflow-hidden bg-cream/5"
                                style={{ height: item.height, width: `${item.width}px` }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-700" />
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
        </>
    );
};

export default HorizontalScroll;
