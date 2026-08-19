import { motion } from 'motion/react';
import { Instagram, ArrowUpRight, Heart } from 'lucide-react';
import { INSTAGRAM_POSTS, SALON_DATA } from '../data/salonData';

export default function InstagramSection() {
  return (
    <section
      id="instagram"
      aria-label="TONI&GUY Mangalore Instagram Feed"
      className="py-24 sm:py-32 bg-[#0B0B0B] relative border-t border-[#1C1C1C]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 border-b border-[#222222] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#C6A96B] mb-3">
              <Instagram className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium">
                SOCIAL JOURNAL
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#F5F2EC] font-light">
              FOLLOW THE STYLE
            </h2>
            <p className="text-sm text-[#C6A96B] font-medium tracking-wider mt-1">
              {SALON_DATA.instagramHandle}
            </p>
          </div>

          <div className="mt-6 sm:mt-0">
            <a
              href={SALON_DATA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              id="instagram-follow-btn"
              className="inline-flex items-center space-x-2 bg-[#181818] hover:bg-[#C6A96B] text-[#F5F2EC] hover:text-[#0B0B0B] border border-[#2E2E2E] hover:border-[#C6A96B] px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 group"
            >
              <Instagram className="w-4 h-4" />
              <span>FOLLOW ON INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* 6-Item Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post, index) => (
            <motion.a
              key={post.id}
              href={SALON_DATA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative aspect-square overflow-hidden bg-[#161616] border border-[#222222] hover:border-[#C6A96B]/50 transition-all duration-500"
            >
              <img
                src={post.image}
                alt="TONI&GUY Mangalore Instagram Post"
                className="w-full h-full object-cover object-center filter grayscale-[15%] group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#0B0B0B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                <div className="flex justify-end text-[#C6A96B]">
                  <Instagram className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-[11px] text-[#F5F2EC] line-clamp-3 font-light leading-snug mb-2">
                    {post.caption}
                  </p>
                  <div className="flex items-center space-x-1.5 text-[10px] text-[#C6A96B]">
                    <Heart className="w-3 h-3 fill-[#C6A96B]" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
