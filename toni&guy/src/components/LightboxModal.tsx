import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem, SALON_DATA } from '../data/salonData';

interface LightboxModalProps {
  selectedItem: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export default function LightboxModal({
  selectedItem,
  items,
  onClose,
  onSelect,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === selectedItem.id);
        const nextIndex = (currentIndex + 1) % items.length;
        onSelect(items[nextIndex]);
      }
      if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === selectedItem.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onSelect(items[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, items, onClose, onSelect]);

  if (!selectedItem) return null;

  const currentIndex = items.findIndex((i) => i.id === selectedItem.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#070707]/95 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl bg-[#121212] border border-[#2B2B2B] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-20 bg-[#0B0B0B]/80 text-[#F5F2EC] hover:text-[#C6A96B] p-2.5 border border-white/10 hover:border-[#C6A96B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left / Navigation Image Container */}
          <div className="lg:col-span-7 relative bg-[#090909] flex items-center justify-center min-h-[340px] sm:min-h-[460px] overflow-hidden">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-full max-h-[70vh] object-cover object-center"
            />

            {/* Prev / Next Controls */}
            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#0B0B0B]/70 text-[#F5F2EC] hover:text-[#C6A96B] p-2 backdrop-blur-sm border border-white/10 hover:border-[#C6A96B] transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#0B0B0B]/70 text-[#F5F2EC] hover:text-[#C6A96B] p-2 backdrop-blur-sm border border-white/10 hover:border-[#C6A96B] transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Right Editorial Info Panel */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#121212]">
            <div>
              <div className="inline-flex items-center space-x-2 text-[#C6A96B] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
                  {selectedItem.categoryLabel}
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F2EC] font-light mb-4">
                {selectedItem.title}
              </h3>

              <p className="text-sm text-[#D8CFC2]/80 leading-relaxed font-light mb-6">
                {selectedItem.description}
              </p>

              <div className="space-y-3 py-4 border-t border-b border-[#222222] text-xs text-[#888888]">
                <div className="flex justify-between">
                  <span className="text-[#D8CFC2]">Crafted At:</span>
                  <span>TONI&amp;GUY Mangalore</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D8CFC2]">Location:</span>
                  <span>CASA GRANDE MALL, Attavar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D8CFC2]">Consultation:</span>
                  <span className="text-[#C6A96B]">Personalized Diagnostic</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6">
              <a
                href={SALON_DATA.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#F5F2EC] text-[#0B0B0B] hover:bg-[#C6A96B] py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors shadow-lg"
              >
                <span>BOOK THIS LOOK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <p className="text-[11px] text-center text-[#666666] mt-3">
                Use our official booking engine to secure your preferred stylist.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
