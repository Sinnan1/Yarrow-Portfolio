import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { getGallery } from '../data/galleries';

const Gallery = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isVisible, setIsVisible] = useState(false);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gallery = slug ? getGallery(slug) : null;

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [slug]);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage || !gallery) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') {
        const currentIndex = gallery.images.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + gallery.images.length) % gallery.images.length;
        setSelectedImage(gallery.images[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = gallery.images.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % gallery.images.length;
        setSelectedImage(gallery.images[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, gallery]);



  const toggleLike = (index: number) => {
    setLikedImages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  if (!gallery) {
    return (
      <div className="pt-8 pb-16 px-8 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl mb-4">Gallery Not Found</h1>
          <Link to="/photography" className="text-gold hover:underline underline-elegant">
            ← Back to Photography
          </Link>
        </div>
      </div>
    );
  }

  // Generate varied heights for masonry effect
  const getImageHeight = (index: number) => {
    const heights = ['aspect-[3/4]', 'aspect-[4/5]', 'aspect-[2/3]', 'aspect-[3/5]', 'aspect-square', 'aspect-[4/3]'];
    return heights[index % heights.length];
  };

  return (
    <div className="pt-8 pb-16 lg:pb-24 bg-cream min-h-screen">
      {/* Back Button */}
      <div className="px-8 lg:px-16 mb-8">
        <Link
          to="/photography"
          className="inline-flex items-center gap-2 text-sm text-black/70 hover:text-gold transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Photography
        </Link>
      </div>

      {/* Header */}
      <div className="px-8 lg:px-16 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`font-serif text-4xl lg:text-6xl mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {gallery.couple}
          </h1>
          <div
            className={`space-y-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {gallery.description.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-sm lg:text-base text-black/70 leading-relaxed max-w-2xl mx-auto">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Details */}
          {Object.keys(gallery.details).length > 0 && (
            <div
              className={`mt-10 pt-8 border-t border-gold/20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                {gallery.details.planner && (
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-gold uppercase tracking-wider mt-1">Planner</span>
                    <span className="text-sm text-black/80">{gallery.details.planner}</span>
                  </div>
                )}
                {gallery.details.brideOutfit && (
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-gold uppercase tracking-wider mt-1">Bride</span>
                    <span className="text-sm text-black/80">{gallery.details.brideOutfit}</span>
                  </div>
                )}
                {gallery.details.groomOutfit && (
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-gold uppercase tracking-wider mt-1">Groom</span>
                    <span className="text-sm text-black/80">{gallery.details.groomOutfit}</span>
                  </div>
                )}
                {gallery.details.stylists && (
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-gold uppercase tracking-wider mt-1">Stylists</span>
                    <span className="text-sm text-black/80">{gallery.details.stylists}</span>
                  </div>
                )}
                {gallery.details.makeup && (
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-gold uppercase tracking-wider mt-1">Makeup</span>
                    <span className="text-sm text-black/80">{gallery.details.makeup}</span>
                  </div>
                )}
                {gallery.details.hair && (
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-gold uppercase tracking-wider mt-1">Hair</span>
                    <span className="text-sm text-black/80">{gallery.details.hair}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pinterest-style Masonry Gallery */}
      <div className="px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="masonry-grid">
            {gallery.images.map((image, index) => (
              <div
                key={index}
                className={`masonry-item group relative overflow-hidden bg-white/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className={`relative ${getImageHeight(index)} overflow-hidden`}>
                  <img
                    src={image}
                    alt={`${gallery.couple} - ${index + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 img-elegant-hover cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-zoom-in"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-white text-xs tracking-wider">
                        {index + 1} / {gallery.images.length}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(index);
                          }}
                          className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${likedImages.has(index)
                            ? 'bg-gold text-white'
                            : 'bg-white/20 text-white hover:bg-white/40'
                            }`}
                        >
                          <Heart size={16} className={likedImages.has(index) ? 'fill-current' : ''} />
                        </button>
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/40 backdrop-blur-sm transition-all duration-300"
                        >
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[70]"
            onClick={() => setSelectedImage(null)}
          >
            <span className="text-4xl leading-none">&times;</span>
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-[70]"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = gallery.images.indexOf(selectedImage);
              const prevIndex = (currentIndex - 1 + gallery.images.length) % gallery.images.length;
              setSelectedImage(gallery.images[prevIndex]);
            }}
          >
            <ArrowLeft size={32} />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-[70]"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = gallery.images.indexOf(selectedImage);
              const nextIndex = (currentIndex + 1) % gallery.images.length;
              setSelectedImage(gallery.images[nextIndex]);
            }}
          >
            <ArrowLeft size={32} className="rotate-180" />
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest font-serif">
            {gallery.images.indexOf(selectedImage) + 1} / {gallery.images.length}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="px-8 lg:px-16 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-sm text-black/60 mb-6">
            Want us to capture your special day?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-500 hover:bg-gold-dark hover:-translate-y-1"
            style={{ boxShadow: '0 8px 25px rgba(166, 144, 96, 0.3)' }}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
