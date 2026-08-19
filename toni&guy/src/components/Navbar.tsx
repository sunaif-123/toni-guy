import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, ArrowUpRight, MapPin, MessageCircle } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface NavbarProps {
  onOpenBooking?: () => void;
  onGoHome?: () => void;
  isBookingPage?: boolean;
}

export default function Navbar({ onOpenBooking, onGoHome, isBookingPage = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why TONI&GUY', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & Contact', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    if (isBookingPage && onGoHome) {
      onGoHome();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md py-4 border-b border-[#222222] shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <button
          type="button"
          onClick={() => {
            if (onGoHome) onGoHome();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          id="nav-brand-logo"
          className="group flex flex-col focus:outline-none text-left cursor-pointer"
        >
          <span className="font-editorial text-2xl sm:text-3xl font-semibold tracking-widest text-[#F5F2EC] group-hover:text-[#C6A96B] transition-colors duration-300">
            TONI&amp;GUY
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D8CFC2]/70 font-sans -mt-1 group-hover:text-[#F5F2EC] transition-colors duration-300">
            MANGALORE
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-xs uppercase tracking-[0.2em] text-[#D8CFC2] hover:text-[#C6A96B] transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A96B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
          
          <button
            type="button"
            onClick={onOpenBooking}
            className={`text-xs uppercase tracking-[0.2em] transition-colors duration-200 py-1 font-semibold cursor-pointer ${
              isBookingPage ? 'text-[#C6A96B] underline underline-offset-8' : 'text-[#C6A96B] hover:text-[#F5F2EC]'
            }`}
          >
            Book Appointment
          </button>
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center space-x-5">
          <a
            href={SALON_DATA.phoneTel}
            id="nav-phone-call"
            className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D8CFC2] hover:text-[#C6A96B] transition-colors py-2"
            title="Call TONI&GUY Mangalore"
          >
            <Phone className="w-3.5 h-3.5 text-[#C6A96B]" />
            <span>{SALON_DATA.phone}</span>
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            id="nav-book-appointment-btn"
            className="inline-flex items-center space-x-2 bg-[#C6A96B] text-[#0B0B0B] hover:bg-[#F5F2EC] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none shadow-lg shadow-black/30 group cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#0B0B0B]" />
            <span>BOOK APPOINTMENT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button
            type="button"
            onClick={onOpenBooking}
            className="bg-[#C6A96B] text-[#0B0B0B] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-none cursor-pointer flex items-center space-x-1"
          >
            <Calendar className="w-3 h-3" />
            <span>Book</span>
          </button>

          <button
            type="button"
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#F5F2EC] p-2 hover:text-[#C6A96B] focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#121212] border-b border-[#282828] overflow-hidden px-6 py-8"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick(link.href);
                  }}
                  className="text-lg font-editorial text-[#F5F2EC] hover:text-[#C6A96B] tracking-wider transition-colors border-b border-[#1E1E1E] pb-3 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#C6A96B]/60 font-sans tracking-widest">→</span>
                </a>
              ))}

              <div className="pt-4 flex flex-col space-y-4">
                <div className="flex items-start space-x-3 text-xs text-[#D8CFC2]/80">
                  <MapPin className="w-4 h-4 text-[#C6A96B] shrink-0 mt-0.5" />
                  <span>Ground Floor, CASA GRANDE MALL, Attavar, Mangaluru</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={SALON_DATA.phoneTel}
                    className="flex items-center justify-center space-x-2 text-xs text-[#F5F2EC] hover:text-[#C6A96B] transition-colors py-2.5 bg-[#1A1A1A] border border-[#2A2A2A]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C6A96B]" />
                    <span>Call Us</span>
                  </a>

                  <a
                    href={SALON_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 text-xs text-[#25D366] hover:text-[#F5F2EC] transition-colors py-2.5 bg-[#25D366]/10 border border-[#25D366]/30"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenBooking) onOpenBooking();
                  }}
                  className="w-full bg-[#C6A96B] text-[#0B0B0B] py-3.5 text-center text-xs font-semibold uppercase tracking-widest hover:bg-[#F5F2EC] transition-colors flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK APPOINTMENT NOW</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
