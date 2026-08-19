import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/salonData';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'cuts', label: 'Haircuts' },
    { id: 'colour', label: 'Hair Colour' },
    { id: 'styling', label: 'Styling' },
    { id: 'looks', label: 'Looks' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
      aria-label="TONI&GUY Mangalore Hair Artistry Gallery"
      className="py-24 sm:py-32 bg-[#0E0E0E] relative border-t border-[#1C1C1C]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#222222] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#C6A96B] mb-3">
              <span className="w-6 h-[1px] bg-[#C6A96B]" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium">
                EDITORIAL PORTFOLIO
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F5F2EC] font-light">
              THE ART OF HAIR
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 font-medium ${
                  activeFilter === f.id
                    ? 'bg-[#C6A96B] text-[#0B0B0B]'
                    : 'bg-[#181818] text-[#D8CFC2] hover:bg-[#252525] border border-[#282828]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry/Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-[3/4] overflow-hidden bg-[#161616] border border-[#222222] hover:border-[#C6A96B]/60 cursor-pointer transition-all duration-500 shadow-lg"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter grayscale-[10%] group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0B0B0B]/80 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-[#C6A96B] px-2.5 py-1">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Eye Icon Hover */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0B0B0B]/70 border border-white/20 flex items-center justify-center text-[#F5F2EC] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Eye className="w-4 h-4 text-[#C6A96B]" />
                </div>

                {/* Bottom Caption Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#F5F2EC] group-hover:text-[#C6A96B] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#D8CFC2]/70 line-clamp-2 font-light">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center space-x-1.5 text-[11px] uppercase tracking-widest text-[#C6A96B] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore Look</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        selectedItem={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </section>
  );
}
