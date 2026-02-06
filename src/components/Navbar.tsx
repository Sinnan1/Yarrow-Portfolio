import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ChevronDown } from 'lucide-react';

interface NavbarProps {
  variant?: 'default' | 'transparent';
}

const Navbar = ({ variant = 'default' }: NavbarProps) => {
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Photography', href: '/photography' },
    { label: 'Films', href: '/films' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const isTransparent = variant === 'transparent';

  const navClasses = isTransparent
    ? "absolute top-0 left-0 right-0 z-50 bg-transparent py-6"
    : "bg-cream py-6";

  const linkBaseClasses = "text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:text-gold underline-elegant";
  const linkColorClasses = "text-black/80";

  return (
    <nav className={navClasses}>
      <div className="w-full px-8 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none group">
          <span className="font-serif text-xl lg:text-2xl tracking-[0.2em] uppercase text-black group-hover:text-gold transition-all duration-500">
            Yarrow
          </span>
          <span className="font-serif text-xl lg:text-2xl tracking-[0.2em] uppercase text-black group-hover:text-gold transition-all duration-500">
            Weddings
          </span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`${linkBaseClasses} ${linkColorClasses} ${location.pathname === link.href ? 'text-gold' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="#"
            className={`${linkBaseClasses} ${linkColorClasses}`}
          >
            Editorial
          </Link>
          <div className="relative">
            <button
              onClick={() => setShowMoreDropdown(!showMoreDropdown)}
              onMouseEnter={() => setShowMoreDropdown(true)}
              className={`flex items-center gap-1 ${linkBaseClasses} ${linkColorClasses}`}
            >
              More
              <ChevronDown size={14} className={`transition-transform duration-300 ${showMoreDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showMoreDropdown && (
              <div
                className="absolute top-full right-0 mt-3 bg-white shadow-xl rounded-sm py-3 min-w-[160px] border border-gold/10"
                onMouseLeave={() => setShowMoreDropdown(false)}
              >
                <Link
                  to="/about"
                  className="block px-5 py-2.5 text-sm text-black/70 hover:text-gold hover:bg-cream/50 transition-all duration-300"
                >
                  About Us
                </Link>
                <Link
                  to="#"
                  className="block px-5 py-2.5 text-sm text-black/70 hover:text-gold hover:bg-cream/50 transition-all duration-300"
                >
                  Press
                </Link>
                <Link
                  to="#"
                  className="block px-5 py-2.5 text-sm text-black/70 hover:text-gold hover:bg-cream/50 transition-all duration-300"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Social + CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/60 transition-all duration-300 hover:text-gold hover:scale-110"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/60 transition-all duration-300 hover:text-gold hover:scale-110"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/60 transition-all duration-300 hover:text-gold hover:scale-110"
            >
              <Twitter size={18} />
            </a>
          </div>
          <Link
            to="/contact"
            className="bg-gold text-white px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-gold-dark hover:-translate-y-0.5"
            style={{ boxShadow: '0 4px 15px rgba(166, 144, 96, 0.25)' }}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
