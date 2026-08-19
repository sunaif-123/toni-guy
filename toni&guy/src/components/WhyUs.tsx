import { motion } from 'motion/react';
import { WHY_TONI_GUY } from '../data/salonData';

export default function WhyUs() {
  return (
    <section
      id="why-us"
      aria-label="Why Choose TONI&GUY Mangalore"
      className="py-24 sm:py-32 bg-[#0B0B0B] relative border-t border-[#1C1C1C]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[#C6A96B] mb-3">
            <span className="w-6 h-[1px] bg-[#C6A96B]" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium">
              THE STANDARD
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F5F2EC] font-light mb-6">
            WHY TONI&amp;GUY
          </h2>
          <p className="text-sm sm:text-base text-[#D8CFC2]/80 font-light leading-relaxed">
            More than half a century of British hair-fashion heritage, delivered with modern precision in Mangaluru.
          </p>
        </div>

        {/* 4 Feature Blocks with Large Numbers and Minimal Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_TONI_GUY.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group p-8 bg-[#111111] border border-[#222222] hover:border-[#C6A96B]/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Large Stylized Minimal Number */}
                <div className="font-editorial text-5xl sm:text-6xl text-[#C6A96B]/30 group-hover:text-[#C6A96B] transition-colors duration-500 font-light mb-8">
                  {item.number}
                </div>

                <h3 className="font-editorial text-2xl text-[#F5F2EC] mb-2 tracking-wide">
                  {item.title}
                </h3>

                <p className="text-xs uppercase tracking-wider text-[#C6A96B]/90 font-medium mb-4">
                  {item.subtitle}
                </p>

                <p className="text-sm text-[#D8CFC2]/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#1C1C1C] flex items-center justify-between text-[11px] uppercase tracking-widest text-[#666666] group-hover:text-[#D8CFC2] transition-colors">
                <span>Casa Grande Mall</span>
                <span className="text-[#C6A96B]">●</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
