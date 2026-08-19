import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Phone, Shield, Star, MessageCircle, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface BookingCTAProps {
  onOpenBooking?: () => void;
}

export default function BookingCTA({ onOpenBooking }: BookingCTAProps) {
  return (
    <section
      id="booking-cta"
      aria-label="Book Appointment at TONI&GUY Mangalore"
      className="py-28 sm:py-36 bg-[#0B0B0B] relative overflow-hidden text-center border-t border-[#1C1C1C]"
    >
      {/* Background Graphic / Image Treatment */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1800&q=80"
          alt="TONI&GUY Mangalore High Fashion Hair"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.2] opacity-40 scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-[#C6A96B]/5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 flex flex-col items-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 border border-[#C6A96B]/40 bg-[#161616]/80 px-4 py-1.5 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C6A96B]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#F5F2EC] font-medium">
            STEP INTO LUXURY
          </span>
        </motion.div>

        {/* Dramatic Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-editorial text-5xl sm:text-7xl md:text-8xl text-[#F5F2EC] font-light leading-[0.95] tracking-tight mb-8"
        >
          YOUR NEXT LOOK
          <br />
          <span className="italic text-[#C6A96B] font-normal">STARTS HERE.</span>
        </motion.h2>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl text-base sm:text-lg text-[#D8CFC2] font-light leading-relaxed mb-10"
        >
          Ready for a transformation? Reserve your bespoke salon experience with our master stylists at Casa Grande Mall, Attavar.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-4 w-full mb-10"
        >
          <button
            type="button"
            onClick={onOpenBooking}
            id="bottom-cta-book-appointment-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#C6A96B] text-[#0B0B0B] hover:bg-[#F5F2EC] px-9 py-4 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 shadow-2xl shadow-[#C6A96B]/20 group cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0B0B0B]" />
            <span>BOOK APPOINTMENT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <a
            href={SALON_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="bottom-cta-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#25D366] text-[#0B0B0B] hover:bg-[#20ba5a] px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 shadow-2xl shadow-[#25D366]/20 group"
          >
            <MessageCircle className="w-4 h-4 fill-[#0B0B0B]" />
            <span>WHATSAPP (+91 81974 56678)</span>
          </a>

          <a
            href={SALON_DATA.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-[#333333] hover:border-[#C6A96B] text-[#F5F2EC] px-6 py-4 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 backdrop-blur-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#C6A96B]" />
            <span>CALL: {SALON_DATA.phone}</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#888888]">
          <div className="flex items-center space-x-1.5">
            <Star className="w-3.5 h-3.5 fill-[#C6A96B] text-[#C6A96B]" />
            <span>4.7 Rating (1,529 Reviews)</span>
          </div>
          <span className="text-[#444444]">|</span>
          <div className="flex items-center space-x-1.5">
            <Shield className="w-3.5 h-3.5 text-[#C6A96B]" />
            <span>International Salon Quality</span>
          </div>
          <span className="text-[#444444]">|</span>
          <span>Casa Grande Mall, Mangaluru</span>
        </div>

      </div>
    </section>
  );
}
