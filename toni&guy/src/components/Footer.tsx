import { ArrowUp, Instagram, Phone, MapPin, ArrowUpRight, Clock, Star, MessageCircle, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface FooterProps {
  onOpenBooking?: () => void;
  onGoHome?: () => void;
  isBookingPage?: boolean;
}

export default function Footer({ onOpenBooking, onGoHome, isBookingPage }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Art of Hair', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Location & Contact', href: '#location' },
  ];

  return (
    <footer
      id="main-footer"
      className="bg-[#070707] text-[#D8CFC2] border-t border-[#181818] pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1A1A1A]">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="font-editorial text-3xl text-[#F5F2EC] font-semibold tracking-widest block">
                TONI&amp;GUY
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-[#C6A96B] font-sans block mt-0.5">
                MANGALORE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#D8CFC2]/70 font-light leading-relaxed max-w-sm">
              International hair fashion, bespoke precision styling, and luxurious salon rituals. Located at Casa Grande Mall in Attavar.
            </p>

            <div className="flex items-center space-x-2 text-xs text-[#888888]">
              <div className="flex text-[#C6A96B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#C6A96B]" />
                ))}
              </div>
              <span>4.7 Rating (1,529 Verified Reviews)</span>
            </div>

            <div className="pt-2">
              <a
                href={SALON_DATA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D8CFC2] hover:text-[#C6A96B] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C6A96B]" />
                <span>@toniandguy_mangalore</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#F5F2EC] font-semibold mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[#888888] hover:text-[#C6A96B] transition-colors inline-block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#F5F2EC] font-semibold mb-6">
              SALON DETAILS
            </h4>

            <div className="space-y-4 text-xs font-light">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C6A96B] shrink-0 mt-0.5" />
                <p className="text-[#D8CFC2]/90 leading-relaxed">
                  Ground Floor, CASA GRANDE MALL COMMERCIAL COMPLEX, A, NO G4 AND G5, 17-17-1315/29, Attavar, Mangaluru, Karnataka 575001
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C6A96B] shrink-0" />
                <a
                  href={SALON_DATA.phoneTel}
                  className="text-[#F5F2EC] hover:text-[#C6A96B] transition-colors font-medium text-sm"
                >
                  {SALON_DATA.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={SALON_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F2EC] hover:text-[#25D366] transition-colors font-medium text-sm"
                >
                  WhatsApp: {SALON_DATA.whatsapp}
                </a>
              </div>

              <div className="flex items-center space-x-3 text-[#888888]">
                <Clock className="w-4 h-4 text-[#C6A96B] shrink-0" />
                <span>Mon – Sun: 10:00 AM – 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center space-x-2 bg-[#C6A96B] text-[#0B0B0B] hover:bg-[#F5F2EC] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 shadow-lg group cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#0B0B0B]" />
                <span>BOOK APPOINTMENT</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={SALON_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-btn"
                className="inline-flex items-center space-x-2 bg-[#25D366] text-[#0B0B0B] hover:bg-[#20ba5a] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 shadow-lg group"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#0B0B0B]" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p>© {new Date().getFullYear()} TONI&amp;GUY Mangalore. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a
              href={SALON_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href={SALON_DATA.phoneTel}
              className="hover:text-[#C6A96B] transition-colors"
            >
              {SALON_DATA.phone}
            </a>
            <a
              href={SALON_DATA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C6A96B] transition-colors"
            >
              Instagram
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center space-x-1.5 text-[#D8CFC2] hover:text-[#C6A96B] transition-colors py-1 cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
