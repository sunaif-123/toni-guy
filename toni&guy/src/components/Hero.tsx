import { motion } from 'motion/react';
import { Star, ArrowDown, ArrowUpRight, Sparkles, MapPin, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      aria-label="TONI&GUY Mangalore Hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background Image with Cinematic Zoom and Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85"
          alt="TONI&GUY Mangalore Luxury Salon Atmosphere"
          className="w-full h-full object-cover object-center animate-subtle-zoom brightness-[0.42] contrast-[1.1]"
          loading="eager"
          referrerPolicy="no-referrer"
        />

        {/* Multi-layered Cinematic Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0B0B]/40 to-[#0B0B0B]" />
        {/* Subtle Luxury Gold Atmospheric Tint */}
        <div className="absolute inset-0 bg-[#C6A96B]/5 mix-blend-color-dodge" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pt-32 pb-24 text-center flex flex-col items-center">
        {/* Subtle Giant Typographic Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-[0.035] pointer-events-none select-none overflow-hidden">
          <span className="text-[260px] sm:text-[380px] lg:text-[460px] font-serif italic text-white font-light">
            T&amp;G
          </span>
        </div>

        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 border border-[#C6A96B]/50 bg-[#151515]/90 backdrop-blur-md px-5 py-2 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C6A96B]" />
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.4em] text-[#C6A96B] font-bold">
            THE GLOBAL LEADER IN HAIR
          </span>
        </motion.div>

        {/* Main Editorial Headline with Bold Typography Hierarchy */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[116px] font-light italic tracking-tight text-[#F5F2EC] leading-[0.88] mb-8"
        >
          <span>Style.</span>
          <br />
          <span className="text-[#D8CFC2]">Crafted.</span>
          <br />
          <span className="text-[#C6A96B] not-italic font-normal">Perfected.</span>
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-[#D8CFC2] font-light leading-relaxed mb-10 tracking-wide opacity-90"
        >
          Experience international hair artistry and premium salon luxury in the heart of Mangaluru. 
          From bespoke precision cuts to expert lived-in colour, your transformation begins with our specialists.
        </motion.p>

        {/* Dual Primary Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mb-14"
        >
          <button
            type="button"
            onClick={onOpenBooking}
            id="hero-book-appointment-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 border border-[#C6A96B] bg-[#C6A96B] text-[#0B0B0B] hover:bg-transparent hover:text-[#C6A96B] text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 shadow-2xl group cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0B0B0B] group-hover:text-[#C6A96B]" />
            <span>BOOK APPOINTMENT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <a
            href="#services"
            id="hero-explore-services-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 border border-white/20 hover:border-[#C6A96B] text-[#F5F2EC] hover:text-[#C6A96B] text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 backdrop-blur-sm"
          >
            <span>EXPLORE SERVICES</span>
          </a>
        </motion.div>

        {/* Rating & Location Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 border-t border-white/10 pt-8 text-xs text-[#D8CFC2]/90"
        >
          {/* Rating Metric */}
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#C6A96B] leading-none mb-1">{SALON_DATA.rating}</span>
            <span className="text-[10px] uppercase tracking-widest opacity-60">Google Rating</span>
          </div>

          <div className="h-8 w-[1px] bg-white/20" />

          {/* Reviews Metric */}
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#F5F2EC] leading-none mb-1">1,500+</span>
            <span className="text-[10px] uppercase tracking-widest opacity-60">Verified Reviews</span>
          </div>

          <div className="h-8 w-[1px] bg-white/20 hidden sm:block" />

          {/* Location Badge */}
          <a
            href="#location"
            className="flex flex-col items-center hover:text-[#C6A96B] transition-colors"
          >
            <span className="text-sm font-medium text-[#F5F2EC] leading-none mb-1 flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#C6A96B]" />
              <span>Casa Grande Mall</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest opacity-60">Attavar, Mangaluru</span>
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator at Bottom */}
      <a
        href="#about"
        aria-label="Scroll to introduction section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 text-[#888888] hover:text-[#C6A96B] transition-colors group cursor-pointer"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-light">EXPLORE</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 border border-[#444444] group-hover:border-[#C6A96B] flex items-start justify-center p-1 rounded-full transition-colors"
        >
          <div className="w-1 h-2 bg-[#C6A96B] rounded-full" />
        </motion.div>
      </a>
    </section>
  );
}
