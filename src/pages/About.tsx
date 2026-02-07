import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';

const About = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const teamMembers = [
        { name: "Siddharth Sharma", role: "Founder & Lead Photographer", image: "/about-bride-1.jpg" },
        { name: "Aditi Gupta", role: "Creative Director", image: "/about-bride-2.jpg" },
        { name: "Rohan Mehta", role: "Senior Cinematographer", image: "/wedding-3.jpg" },
        { name: "Zara Khan", role: "Editor in Chief", image: "/wedding-2.jpg" },
    ];

    return (
        <div className="min-h-screen bg-cream">
            <Navbar variant="transparent" />

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[80vh] overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0">
                    <img
                        src="/soul-cinema-bg.jpg"
                        alt="Yarrow Team"
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <div>
                        <p className="text-white/70 uppercase tracking-[0.4em] text-xs mb-4">The Architects of Memory</p>
                        <h1 className="font-serif text-white text-6xl md:text-8xl">We Are Yarrow</h1>
                    </div>
                </div>
            </section>

            {/* The Story - Editorial Layout */}
            <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-cream">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="lg:sticky lg:top-32">
                        <div className="decorative-line mb-8" />
                        <h2 className="font-serif text-5xl lg:text-6xl mb-8 leading-tight">
                            From a Single Lens to a <span className="italic text-gold">Global Narrative</span>.
                        </h2>
                    </div>
                    <div>
                        <p className="text-black/70 font-light text-lg leading-relaxed mb-8">
                            It started with a simple belief: that weddings aren't just events; they are the closing chapters of one life and the opening lines of another. Ten years ago, we picked up a camera not to document proceedings, but to capture feelings.
                        </p>
                        <p className="text-black/70 font-light text-lg leading-relaxed mb-8">
                            What began in a small studio in Delhi has grown into a global collective of visual storytellers. We've traveled to 25 countries, witnessed thousands of vows, and learned one universal truth: every love story has a rhythm, and our job is to find it.
                        </p>
                        <p className="text-black/70 font-light text-lg leading-relaxed">
                            We don't follow trends. We don't use templates. We approach every wedding as a blank canvas, painting with light, shadow, and unscripted emotion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-16 md:py-24 lg:py-32 bg-cream-dark">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <div className="decorative-line mx-auto mb-6" />
                    <p className="text-gold uppercase tracking-[0.3em] text-xs mb-6">Our Philosophy</p>
                    <h2 className="font-serif text-4xl lg:text-6xl mb-12">"We chase the moments you didn't know were happening."</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div>
                            <h3 className="font-serif text-2xl mb-4 text-gold">Soul</h3>
                            <p className="text-black/60 font-light">We value raw emotion over perfection. We'd rather capture a blurry laugh than a stiff pose.</p>
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl mb-4 text-gold">Cinema</h3>
                            <p className="text-black/60 font-light">Your life is a movie. We film it that way. Wide angles, dramatic lighting, and thoughtful composition.</p>
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl mb-4 text-gold">Legacy</h3>
                            <p className="text-black/60 font-light">We aren't making content for Instagram. We are making heirlooms for your grandchildren.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-8 bg-cream">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="decorative-line mx-auto mb-6" />
                        <h2 className="font-serif text-4xl lg:text-5xl">The Collective</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="aspect-[3/4] overflow-hidden mb-4 relative shadow-lg">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <p className="text-white font-serif italic text-xl px-4 text-center">"Photography is truth."</p>
                                    </div>
                                </div>
                                <h3 className="font-serif text-xl">{member.name}</h3>
                                <p className="text-xs uppercase tracking-widest text-black/50 mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
