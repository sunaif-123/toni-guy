import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, Sparkles, MessageCircle, Scissors, Flame, Droplets, HeartHandshake, Calendar } from 'lucide-react';
import { SERVICES, ServiceItem, SALON_DATA } from '../data/salonData';

interface ServicesProps {
  onOpenBooking?: (serviceId?: string) => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services', icon: Sparkles },
    { id: 'cuts', label: 'Haircuts & Styling', icon: Scissors },
    { id: 'colour', label: 'Hair Colour', icon: Flame },
    { id: 'treatments', label: 'Hair Treatments', icon: Droplets },
    { id: 'styling', label: 'Occasion & Looks', icon: HeartHandshake },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      aria-label="TONI&GUY Mangalore Services"
      className="py-24 sm:py-32 bg-[#0B0B0B] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#222222] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#C6A96B] mb-3">
              <span className="w-6 h-[1px] bg-[#C6A96B]" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium">
                HAIR ARTISTRY
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F5F2EC] font-light">
              OUR SERVICES
            </h2>
          </div>

          <div className="mt-4 md:mt-0 max-w-md text-sm text-[#D8CFC2]/70 font-light">
            Every service is preceded by a personalized one-on-one diagnostic consultation to understand your face shape, texture, and aesthetic goals.
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap inline-flex items-center space-x-2 px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-all duration-300 font-medium ${
                  isActive
                    ? 'bg-[#C6A96B] text-[#0B0B0B] shadow-lg shadow-[#C6A96B]/20'
                    : 'bg-[#151515] text-[#D8CFC2] hover:bg-[#202020] hover:text-[#F5F2EC] border border-[#262626]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0B0B0B]' : 'text-[#C6A96B]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={service.id}
                id={`service-card-${service.id}`}
                className="group bg-[#121212] border border-[#222222] hover:border-[#C6A96B]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Card Top: Image Header */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />

                  <div className="absolute top-4 right-4 bg-[#0B0B0B]/80 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-[#C6A96B]">
                    Signature Ritual
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F2EC] mb-2 group-hover:text-[#C6A96B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#C6A96B]/90 font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-[#D8CFC2]/80 leading-relaxed font-light mb-6">
                      {service.description}
                    </p>

                    {/* Highlights List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 pt-4 border-t border-[#1F1F1F]">
                      {service.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-[#D8CFC2]/70 font-light">
                          <Check className="w-3.5 h-3.5 text-[#C6A96B] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-[#1F1F1F] flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-[#888888] font-light italic">
                      Customized pricing per consultation
                    </span>

                    <button
                      type="button"
                      onClick={() => onOpenBooking ? onOpenBooking(service.id) : undefined}
                      className="inline-flex items-center space-x-2 bg-[#1C1C1C] hover:bg-[#C6A96B] text-[#F5F2EC] hover:text-[#0B0B0B] border border-[#333333] hover:border-[#C6A96B] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 group/btn cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#C6A96B] group-hover/btn:text-[#0B0B0B]" />
                      <span>Book Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Booking Note */}
        <div className="mt-16 p-6 sm:p-8 bg-[#141414] border border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#C6A96B]/10 border border-[#C6A96B]/30 flex items-center justify-center text-[#C6A96B] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-editorial text-xl text-[#F5F2EC]">Looking for a bespoke hair transformation?</h4>
              <p className="text-xs text-[#D8CFC2]/70 font-light mt-1">
                Consult with our senior master stylists for tailored texture &amp; colour recommendations.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenBooking ? onOpenBooking() : undefined}
              className="inline-flex items-center space-x-2 bg-[#C6A96B] text-[#0B0B0B] hover:bg-[#F5F2EC] px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 shadow-lg cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0B0B0B]" />
              <span>BOOK APPOINTMENT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
