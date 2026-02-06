import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cream pt-12 lg:pt-16 pb-8 px-8 lg:px-16 border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Logo & Social */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col leading-none mb-8 group">
              <span className="font-serif text-xl lg:text-2xl tracking-[0.2em] uppercase text-black group-hover:text-gold transition-colors duration-300">
                Yarrow
              </span>
              <span className="font-serif text-xl lg:text-2xl tracking-[0.2em] uppercase text-black group-hover:text-gold transition-colors duration-300">
                Weddings
              </span>
            </Link>
            <p className="text-sm text-black/50 mb-6 font-light leading-relaxed">
              Capturing timeless moments of love across the world.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/40 hover:text-gold transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/40 hover:text-gold transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/40 hover:text-gold transition-all duration-300 hover:scale-110"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xs tracking-[0.2em] uppercase text-black/40 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/photography" className="text-sm text-black/60 hover:text-gold transition-colors duration-300">
                  Photography
                </Link>
              </li>
              <li>
                <Link to="/films" className="text-sm text-black/60 hover:text-gold transition-colors duration-300">
                  Films
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-black/60 hover:text-gold transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-black/60 hover:text-gold transition-colors duration-300">
                  Editorial
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-1">
            <h4 className="text-xs tracking-[0.2em] uppercase text-black/40 mb-6">Locations</h4>
            <p className="text-sm text-black/60 mb-2">Mumbai</p>
            <p className="text-sm text-black/60 mb-4">Bangalore</p>
            <Link
              to="#"
              className="text-sm text-black/40 hover:text-gold transition-colors duration-300 underline-elegant"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-xs tracking-[0.2em] uppercase text-black/40 mb-6">Get In Touch</h4>
            <p className="text-sm text-black/60 mb-2">
              <a
                href="tel:+919964787383"
                className="hover:text-gold transition-colors duration-300"
              >
                +91 99647 87383
              </a>
            </p>
            <p className="text-sm text-black/60">
              <a
                href="mailto:hello@yarrowweddings.com"
                className="hover:text-gold transition-colors duration-300"
              >
                hello@yarrowweddings.com
              </a>
            </p>
          </div>
        </div>

        {/* Decorative line */}
        <div className="decorative-line mx-auto mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-black/40 tracking-wider">
            © {new Date().getFullYear()} Yarrow Weddings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
