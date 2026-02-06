import { useState, useEffect } from 'react';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guestCount: '',
    location: '',
    dates: '',
    message: '',
    services: [] as string[],
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you. We will be in touch shortly.');
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <div className="min-h-screen bg-cream text-black flex flex-col">
      {/* Navbar handled by App.tsx */}

      <div className="flex-grow flex flex-col lg:flex-row relative">
        {/* Left Side - Visual / Atmosphere */}
        <div className="w-full lg:w-1/2 relative min-h-[40vh] lg:min-h-[auto]">
          <img
            src="/about-bride-2.jpg"
            alt="Contact Atmosphere"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/10" />

          <div className={`absolute inset-0 flex flex-col justify-center px-12 lg:px-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-white uppercase tracking-[0.3em] text-xs mb-6 drop-shadow-md">The Beginning</p>
            <h1 className="font-serif text-5xl lg:text-7xl text-white leading-none mb-8 drop-shadow-lg">
              Let's Start <br /> Your Story.
            </h1>
            <p className="text-white/90 font-light leading-relaxed max-w-sm drop-shadow-md mb-12">
              Every great film begins with a conversation. Tell us about your vision, your dreams, and the moments you want to keep forever.
            </p>

            <div className="space-y-3 text-sm text-white/90 drop-shadow-md">
              <p>hello@yarrowweddings.com</p>
              <p>+91 99647 87383</p>
              <div className="flex gap-6 mt-8">
                <Instagram className="w-5 h-5 hover:text-gold transition-colors cursor-pointer text-white" />
                <Facebook className="w-5 h-5 hover:text-gold transition-colors cursor-pointer text-white" />
                <Twitter className="w-5 h-5 hover:text-gold transition-colors cursor-pointer text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - The "Letter" Form */}
        <div className="w-full lg:w-1/2 bg-cream px-8 py-16 lg:px-24 lg:py-24 flex items-center">
          <div className={`w-full max-w-xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder-black/40 focus:border-gold focus:outline-none transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder-black/40 focus:border-gold focus:outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Event Dates"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder-black/40 focus:border-gold focus:outline-none transition-colors"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    required
                  />
                </div>
                <div className="group">
                  <input
                    type="text"
                    placeholder="Location / Venue"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder-black/40 focus:border-gold focus:outline-none transition-colors"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-black/50 mb-6">Services</label>
                <div className="flex flex-wrap gap-8">
                  {['Photography', 'Cinematography', 'Both'].map((service) => (
                    <label key={service} className="flex items-center gap-3 cursor-pointer group/item">
                      <div className={`w-4 h-4 rounded-full border border-black/30 flex items-center justify-center transition-colors group-hover/item:border-gold ${formData.services.includes(service) ? 'border-gold' : ''}`}>
                        {formData.services.includes(service) && <div className="w-2 h-2 bg-gold rounded-full" />}
                      </div>
                      <span className={`text-sm tracking-wide transition-colors ${formData.services.includes(service) ? 'text-black' : 'text-black/50 group-hover/item:text-black'}`}>{service}</span>
                      <input
                        type="checkbox"
                        className="hidden"
                        onChange={() => handleServiceChange(service)}
                        checked={formData.services.includes(service)}
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="group">
                <textarea
                  rows={4}
                  placeholder="Tell us about your story..."
                  className="w-full bg-transparent border-b border-black/20 py-3 text-black placeholder-black/40 focus:border-gold focus:outline-none transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="group flex items-center gap-4 text-gold uppercase tracking-[0.2em] text-sm hover:text-black transition-colors"
                >
                  Send Inquiry
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
