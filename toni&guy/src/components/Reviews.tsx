import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';
import { REVIEWS, SALON_DATA } from '../data/salonData';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews"
      aria-label="Customer Reviews for TONI&GUY Mangalore"
      className="py-24 sm:py-32 bg-[#0E0E0E] relative border-t border-[#1C1C1C] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Rating Showcase Hero Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 sm:mb-20">
          
          {/* Left: Prominent Rating Hero Box */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-[#141414] border border-[#C6A96B]/30 shadow-2xl relative">
            <div className="inline-flex items-center space-x-2 text-[#C6A96B] mb-3">
              <span className="w-6 h-[1px] bg-[#C6A96B]" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium">
                VERIFIED SATISFACTION
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl text-[#F5F2EC] font-light mb-6">
              EXCELLENCE IN EVERY STRAND
            </h2>

            {/* Huge Rating Number */}
            <div className="flex items-baseline space-x-3 mb-3">
              <span className="font-editorial text-6xl sm:text-7xl font-semibold text-[#F5F2EC]">
                {SALON_DATA.rating}
              </span>
              <span className="text-2xl text-[#888888] font-light">/ 5.0</span>
            </div>

            {/* Stars */}
            <div className="flex items-center space-x-1.5 text-[#C6A96B] mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C6A96B]" />
              ))}
            </div>

            <div className="text-sm text-[#D8CFC2] font-medium">
              Based on <span className="text-[#C6A96B] font-semibold">{SALON_DATA.reviewCount.toLocaleString()} Verified Google Reviews</span>
            </div>

            <div className="mt-6 pt-6 border-t border-[#222222] flex items-center justify-between text-xs text-[#888888]">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C6A96B]" />
                <span>Casa Grande Mall, Attavar</span>
              </span>
              <span className="text-[#D8CFC2]">Mangaluru</span>
            </div>
          </div>

          {/* Right: Interactive Carousel / Review Slider */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#121212] border border-[#242424] p-8 sm:p-12 min-h-[320px] flex flex-col justify-between">
              
              <Quote className="w-10 h-10 text-[#C6A96B]/20 mb-6" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-1 text-[#C6A96B]">
                    {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C6A96B]" />
                    ))}
                  </div>

                  <p className="text-base sm:text-lg text-[#F5F2EC] font-light leading-relaxed italic">
                    &ldquo;{REVIEWS[currentIndex].comment}&rdquo;
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1E1E1E]">
                    <div>
                      <div className="text-sm font-medium text-[#F5F2EC]">
                        {REVIEWS[currentIndex].author}
                      </div>
                      <div className="text-xs text-[#888888]">
                        {REVIEWS[currentIndex].service} • {REVIEWS[currentIndex].date}
                      </div>
                    </div>

                    <div className="inline-flex items-center space-x-1.5 text-xs text-[#C6A96B] bg-[#C6A96B]/10 px-3 py-1 border border-[#C6A96B]/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Google Review</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls & Pagination */}
              <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#1C1C1C]">
                <div className="flex items-center space-x-2">
                  {REVIEWS.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to review ${idx + 1}`}
                      className={`h-1.5 transition-all duration-300 ${
                        idx === currentIndex
                          ? 'w-8 bg-[#C6A96B]'
                          : 'w-2 bg-[#333333] hover:bg-[#555555]'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous review"
                    className="p-2.5 bg-[#1A1A1A] hover:bg-[#C6A96B] text-[#F5F2EC] hover:text-[#0B0B0B] border border-[#2B2B2B] hover:border-[#C6A96B] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next review"
                    className="p-2.5 bg-[#1A1A1A] hover:bg-[#C6A96B] text-[#F5F2EC] hover:text-[#0B0B0B] border border-[#2B2B2B] hover:border-[#C6A96B] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
