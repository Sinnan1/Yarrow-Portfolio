import { Link } from 'react-router-dom';

const MagazineLayout = () => {
    return (
        <section className="py-24 px-4 bg-cream overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 px-4 lg:px-12 border-b border-black/10 pb-12">
                    <h2 className="font-serif text-5xl lg:text-7xl leading-none">
                        Editorial <span className="block italic text-gold">Perspectives</span>
                    </h2>
                    <div className="max-w-md mt-8 md:mt-0">
                        <p className="text-black/60 font-light leading-relaxed">
                            We don't just document weddings; we curate memories. Our editorial approach blends fashion-forward aesthetics with raw, documentary storytelling.
                        </p>
                    </div>
                </div>

                {/* Asymmetric Grid */}
                <div className="grid grid-cols-12 gap-y-12 lg:gap-8 auto-rows-min">

                    {/* Large Portrait Item */}
                    <div className="col-span-12 lg:col-span-5 relative group cursor-pointer">
                        <div className="aspect-[3/4] overflow-hidden mb-4">
                            <img
                                src="/gallery-1.jpg"
                                alt="Editorial 1"
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                            />
                        </div>
                        <div className="flex justify-between items-start border-t border-black/10 pt-4">
                            <span className="text-xs uppercase tracking-widest text-black/50">01</span>
                            <h3 className="font-serif text-2xl">The Quiet Moments</h3>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block col-span-1"></div>

                    {/* Stacked Items Column */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-16 lg:mt-32">
                        {/* Small Landscape */}
                        <div className="relative group cursor-pointer w-full lg:w-3/4 self-end">
                            <div className="aspect-video overflow-hidden mb-4">
                                <img
                                    src="/gallery-4.jpg"
                                    alt="Editorial 2"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                            <div className="flex justify-between items-start border-t border-black/10 pt-4">
                                <span className="text-xs uppercase tracking-widest text-black/50">02</span>
                                <h3 className="font-serif text-2xl">Celebration</h3>
                            </div>
                        </div>

                        {/* Text Block */}
                        <div className="bg-black text-cream p-12 lg:-ml-20 z-10 relative max-w-lg">
                            <p className="font-serif italic text-3xl lg:text-4xl leading-relaxed mb-8">
                                "Yarrow captures the feeling, not just the look. Pure art."
                            </p>
                            <Link to="/contact" className="text-xs uppercase tracking-[0.3em] hover:text-gold transition-colors">
                                Start Your Journey
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Wide Item */}
                    <div className="col-span-12 lg:col-span-8 lg:col-start-3 mt-12 relative group cursor-pointer">
                        <div className="aspect-[21/9] overflow-hidden mb-4">
                            <img
                                src="/gallery-5.jpg"
                                alt="Editorial 3"
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 object-top"
                            />
                        </div>
                        <div className="flex justify-between items-start border-t border-black/10 pt-4">
                            <span className="text-xs uppercase tracking-widest text-black/50">03</span>
                            <h3 className="font-serif text-2xl">Destinations</h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MagazineLayout;
