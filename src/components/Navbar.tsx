import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ChevronDown, Menu, X } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface NavbarProps {
  variant?: 'default' | 'transparent';
}

const Navbar = ({ variant = 'default' }: NavbarProps) => {
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollDirection, scrollY } = useScrollDirection();

  const navLinks = [
    { label: 'Photography', href: '/photography' },
    { label: 'Films', href: '/films' },
    { label: 'Contact Us', href: '/contact' },
  ];
  const mobileLinks = [
    ...navLinks,
    { label: 'Editorial', href: '#' },
    { label: 'About Us', href: '/about' },
    { label: 'Press', href: '#' },
    { label: 'FAQ', href: '#' },
  ];

  const isTransparent = variant === 'transparent';
  const isScrolled = scrollY > 50;
  
  // Hide navbar when scrolling down past threshold, show when scrolling up
  const shouldHide = scrollDirection === 'down' && scrollY > 150;
  
  // Background changes based on scroll and variant
  const getNavClasses = () => {
    if (isTransparent && !isScrolled) {
      return "absolute top-0 left-0 right-0 z-50 bg-transparent py-6";
    }
    if (isTransparent && isScrolled) {
      return "fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md shadow-sm py-5";
    }
    return "bg-cream py-6";
  };

  // Text colors based on variant and scroll state
  const linkColorClasses = (isTransparent && !isScrolled) 
    ? "text-white/90 hover:text-white" 
    : "text-black/80 hover:text-gold";
    
  const logoColorClasses = (isTransparent && !isScrolled)
    ? "text-white group-hover:text-gold"
    : "text-black group-hover:text-gold";
    
  const iconColorClasses = (isTransparent && !isScrolled)
    ? "text-white/70"
    : "text-black/60";

  const linkBaseClasses = "text-sm tracking-[0.1em] uppercase transition-all duration-300 underline-elegant";

  return (
    <nav className={`${getNavClasses()} transition-transform duration-500 ${shouldHide ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="w-full px-8 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none group">
          <span className={`font-serif text-xl lg:text-2xl tracking-[0.2em] uppercase transition-all duration-500 ${logoColorClasses}`}>
            Yarrow
          </span>
          <span className={`font-serif text-xl lg:text-2xl tracking-[0.2em] uppercase transition-all duration-500 ${logoColorClasses}`}>
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
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:text-gold hover:scale-110 touch-target touch-feedback ${iconColorClasses}`}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:text-gold hover:scale-110 touch-target touch-feedback ${iconColorClasses}`}
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:text-gold hover:scale-110 touch-target touch-feedback ${iconColorClasses}`}
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
          <Link
            to="/contact"
            className={`hidden sm:inline-flex touch-target touch-feedback ${(isTransparent && !isScrolled)
              ? "border border-white/40 text-white px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-white/10 hover:border-white hover:-translate-y-0.5"
              : "bg-gold text-white px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-gold-dark hover:-translate-y-0.5"}`}
            style={!(isTransparent && !isScrolled) ? { boxShadow: '0 4px 15px rgba(166, 144, 96, 0.25)' } : {}}
          >
            Get In Touch
          </Link>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`lg:hidden transition-all duration-300 hover:text-gold ${iconColorClasses}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gold/10 bg-cream/95 backdrop-blur-md">
          <div className="px-8 py-6 flex flex-col gap-4">
            {mobileLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${linkBaseClasses} text-black/80 hover:text-gold`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
