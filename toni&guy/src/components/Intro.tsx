import { motion } from 'motion/react';
import { ArrowUpRight, Award, Scissors, Sparkles, ShieldCheck } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function Intro() {
  return (
    <section
      id="about"
      aria-label="About TONI&GUY Mangalore"
      className="py-24 sm:py-32 bg-[#0E0E0E] relative border-t border-[#1C1C1C] overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A96B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center space-x-2 text-[#C6A96B] mb-6">
              <span className="w-8 h-[1px] bg-[#C6A96B]" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium">
                THE PHILOSOPHY
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F5F2EC] leading-[1.08] mb-8 font-light">
              MORE THAN A SALON.
              <br />
              <span className="italic text-[#C6A96B] font-normal">IT&apos;S YOUR STYLE.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#D8CFC2] leading-relaxed mb-6 font-light">
              At TONI&amp;GUY Mangalore, we believe great hair is not an accident—it is a tailored architectural craft. 
              Bridging British fashion heritage with contemporary elegance, our master stylists create bespoke cuts, 
              dimensional colours, and transformative treatments that elevate your individuality.
            </p>

            <p className="text-sm sm:text-base text-[#D8CFC2]/70 leading-relaxed mb-10 font-light">
              Located on the Ground Floor of the prestigious Casa Grande Mall in Attavar, our salon is designed as a sanctuary of refinement. 
              Every consultation is personal, every formulation is customized, and every visit is an indulgent experience.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#222222]">
              <div>
                <span className="block font-editorial text-3xl sm:text-4xl text-[#C6A96B] font-light">4.7★</span>
                <span className="text-[11px] uppercase tracking-wider text-[#888888]">Google Rating</span>
              </div>
              <div>
                <span className="block font-editorial text-3xl sm:text-4xl text-[#F5F2EC] font-light">1,529+</span>
                <span className="text-[11px] uppercase tracking-wider text-[#888888]">Verified Reviews</span>
              </div>
              <div>
                <span className="block font-editorial text-3xl sm:text-4xl text-[#F5F2EC] font-light">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#888888]">Bespoke Craft</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#151515] border border-[#242424] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
                  alt="TONI&GUY Salon Experience"
                  className="w-full h-full object-cover object-center filter grayscale-[20%] contrast-[1.05] hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />

                {/* Bottom Image Tag */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#F5F2EC] backdrop-blur-md bg-[#0B0B0B]/60 p-4 border border-white/10">
                  <div className="flex items-center space-x-2">
                    <Scissors className="w-4 h-4 text-[#C6A96B]" />
                    <span className="uppercase tracking-widest font-medium text-[11px]">Casa Grande Mall, Attavar</span>
                  </div>
                  <span className="text-[#C6A96B] uppercase tracking-wider text-[10px]">Mangaluru</span>
                </div>
              </div>

              {/* Overlapping Floating Feature Box */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#161616] border border-[#C6A96B]/30 p-5 shadow-2xl backdrop-blur-md max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#C6A96B]/20 flex items-center justify-center text-[#C6A96B]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#F5F2EC] font-semibold">
                    Global Standards
                  </span>
                </div>
                <p className="text-xs text-[#D8CFC2]/70 leading-relaxed font-light">
                  Direct lineage to TONI&amp;GUY international precision cutting and colour theory.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
