import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cream py-12 lg:py-16 px-8 lg:px-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Social */}
          <div className="lg:col-span-1">
            <a href="#" className="flex flex-col leading-none mb-6">
              <span className="font-serif text-2xl lg:text-3xl tracking-[0.15em] uppercase text-black">
                Yarrow
              </span>
              <span className="font-serif text-2xl lg:text-3xl tracking-[0.15em] uppercase text-black">
                Weddings
              </span>
            </a>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-black/70 hover:text-black transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-black/70 hover:text-black transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-black/70 hover:text-black transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div className="lg:col-span-1">
            <p className="text-sm text-black/80">
              Mumbai . Bangalore
            </p>
            <a
              href="#"
              className="text-sm text-black/80 hover:text-black transition-colors duration-300 mt-2 inline-block"
            >
              Privacy Policy
            </a>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 lg:text-right">
            <p className="text-sm text-black/80">
              <a
                href="tel:+919964787383"
                className="hover:text-black transition-colors duration-300"
              >
                +91 99647 87383
              </a>
            </p>
            <p className="text-sm text-black/80 mt-2">
              <a
                href="mailto:hello@yarrowweddings.com"
                className="hover:text-black transition-colors duration-300"
              >
                hello@yarrowweddings.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-black/5 text-center">
          <p className="text-xs text-black/50">
            © {new Date().getFullYear()} Yarrow Weddings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
