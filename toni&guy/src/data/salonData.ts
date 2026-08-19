export interface ServiceItem {
  id: string;
  category: 'cuts' | 'colour' | 'treatments' | 'styling';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cuts' | 'colour' | 'styling' | 'looks';
  categoryLabel: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
}

export const SALON_DATA = {
  name: 'TONI&GUY Mangalore',
  category: 'Premium Hair Salon / Beauty Salon',
  phone: '+91 81974 56678',
  phoneTel: 'tel:+918197456678',
  whatsapp: '+91 81974 56678',
  whatsappUrl: 'https://wa.me/918197456678?text=Hello%20TONI%26GUY%20Mangalore%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment.',
  address: 'Ground Floor, CASA GRANDE MALL COMMERCIAL COMPLEX, A, NO G4 AND G5, 17-17-1315/29, Attavar, Mangaluru, Karnataka 575001',
  shortAddress: 'CASA GRANDE MALL, Attavar, Mangaluru',
  instagram: 'https://www.instagram.com/toniandguy_mangalore/',
  instagramHandle: '@toniandguy_mangalore',
  rating: 4.7,
  reviewCount: 1529,
  bookingUrl: 'https://booktoniguy.com/toniguy-mangalore/?gad_campaignid=23600727054&wbraid=ClQKCQjwhZDUBhDlARJDAGSy_m0og-B_-p9LQSe7APMx19ClqK--0WL-u90l2JHhBSp7_aut0WYyK2MNrhTcJbNGKAR-W--yzGTzn4m8UkIMBBoC3zU',
  mapsDirectionsUrl: 'https://maps.google.com/?q=TONI%26GUY+Mangalore+CASA+GRANDE+MALL+Attavar+Mangaluru',
  openingHours: 'Monday – Sunday: 10:00 AM – 9:00 PM',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'haircuts-styling',
    category: 'cuts',
    title: 'Haircuts & Precision Styling',
    subtitle: 'Tailored silhouettes and bespoke architecture for every face profile.',
    description: 'Our certified master stylists analyze face shape, hair texture, and natural growth patterns to craft precision cuts that effortlessly hold structure and movement.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    highlights: ['Bespoke Texture Consultation', 'Signature Precision Cutting', 'Blow-dry & Thermal Finishing', 'Aftercare Regimen Guide']
  },
  {
    id: 'hair-colour',
    category: 'colour',
    title: 'Editorial Hair Colour & Balayage',
    subtitle: 'Multi-dimensional shades, seamless melting, and high-gloss luminosity.',
    description: 'From sun-kissed balayage and foil highlights to bespoke global hues and corrective toning, our colour technicians utilize premium international formulations for vibrant, long-lasting brilliance.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    highlights: ['Custom Colour Diagnostic', 'Seamless Balayage & Ombré', 'Global Highlights & Lowlights', 'Gloss & Bond-Repair Infusion']
  },
  {
    id: 'hair-treatments',
    category: 'treatments',
    title: 'Advanced Hair Spa & Restoration',
    subtitle: 'Deep cellular rejuvenation and moisture restoration for compromised hair.',
    description: 'Transform stressed tresses with luxury restorative rituals. Intensive keratin smoothing, deep-scalp detox therapies, and moisture infusions designed to restore elasticity and mirror-like shine.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Intensive Keratin Smoothing', 'Scalp Detox & Rebalancing', 'Deep Hydration Hair Spa', 'Anti-Frizz Cuticle Seal']
  },
  {
    id: 'occasions-styling',
    category: 'styling',
    title: 'Occasion & Editorial Styling',
    subtitle: 'Sophisticated hair design for weddings, gala events, and creative portfolios.',
    description: 'Whether it is red-carpet elegance, modern textured waves, or intricate bridal artistry, our team creates memorable styles that stay flawless from day into night.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Bridal Hair Artistry', 'Red Carpet Glamour Blowouts', 'Avant-Garde Updos & Braids', 'Curated Styling Consultations']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Editorial Precision Bob',
    category: 'cuts',
    categoryLabel: 'Haircuts',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    description: 'Razor-sharp perimeter with seamless interior graduation for high-fashion movement.'
  },
  {
    id: 'gal-2',
    title: 'Sun-Drenched Honey Balayage',
    category: 'colour',
    categoryLabel: 'Hair Colour',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    description: 'Seamless freehand balayage blending warm amber and champagne reflects.'
  },
  {
    id: 'gal-3',
    title: 'Modern Textured Shag',
    category: 'cuts',
    categoryLabel: 'Haircuts',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape',
    description: 'Soft framing layers paired with effortless curtain bangs for lived-in elegance.'
  },
  {
    id: 'gal-4',
    title: 'Glossy Brunette Espresso Melt',
    category: 'colour',
    categoryLabel: 'Hair Colour',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square',
    description: 'Rich multi-dimensional chocolate tones enhanced with high-octane glaze.'
  },
  {
    id: 'gal-5',
    title: 'Bridal Couture Waves',
    category: 'styling',
    categoryLabel: 'Styling',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    description: 'S-pattern sculpted Hollywood waves finished with satin shine spray.'
  },
  {
    id: 'gal-6',
    title: 'Contemporary Men’s Fade & Quiff',
    category: 'looks',
    categoryLabel: 'Looks',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape',
    description: 'Seamless skin fade blended into textured scissor-work on top.'
  },
  {
    id: 'gal-7',
    title: 'Pastel Rose Gold Tonal Accent',
    category: 'colour',
    categoryLabel: 'Hair Colour',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square',
    description: 'Delicate metallic rose hues hand-placed around face-framing sections.'
  },
  {
    id: 'gal-8',
    title: 'Sleek Glass Hair Finish',
    category: 'styling',
    categoryLabel: 'Styling',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    description: 'Ultra-smooth reflective finish achieved through thermo-active sealing.'
  }
];

export const WHY_TONI_GUY = [
  {
    number: '01',
    title: 'EXPERTISE',
    subtitle: 'Global Standards & Mastery',
    description: 'Stylists trained in international TONI&GUY cutting and colouring methodologies, continually updated on modern global fashion runways.'
  },
  {
    number: '02',
    title: 'PERSONALIZED',
    subtitle: 'Bespoke Consultation',
    description: 'Every appointment begins with an in-depth diagnosis of your hair structure, facial harmony, lifestyle, and individual aesthetic aspirations.'
  },
  {
    number: '03',
    title: 'QUALITY',
    subtitle: 'Premium International Products',
    description: 'We strictly employ world-class salon formulations, bond-builders, and luxury care ranges to protect and enhance your hair’s integrity.'
  },
  {
    number: '04',
    title: 'STYLE',
    subtitle: 'Contemporary Artistry',
    description: 'From timeless elegance to forward-thinking street style, our creations blend British fashion heritage with contemporary Indian sophistication.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Customer review',
    rating: 5,
    date: 'Recent visit',
    service: 'Haircut & Styling',
    comment: 'Exceptional experience at TONI&GUY Mangalore. The stylist gave great advice during the consultation and the cut turned out exactly how I wanted. Professional atmosphere and great attention to detail.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Customer review',
    rating: 5,
    date: 'Recent visit',
    service: 'Hair Colour & Balayage',
    comment: 'The balayage blending was flawless. The team at Casa Grande Mall is courteous, welcoming, and takes time to ensure hair health isn’t compromised. Highly recommend for hair colour.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Customer review',
    rating: 5,
    date: 'Recent visit',
    service: 'Hair Spa & Treatment',
    comment: 'One of the best hair spas in Mangalore. My hair feels rejuvenated, smooth, and manageable. The salon maintains immaculate cleanliness and international standards.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Customer review',
    rating: 5,
    date: 'Recent visit',
    service: 'Precision Styling',
    comment: 'Consistently outstanding service. Friendly staff, skilled stylists, and very easy online booking. Casa Grande Mall location in Attavar is very convenient with ample parking.',
    verified: true
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80',
    caption: 'Backstage energy & signature precision styling at @toniandguy_mangalore ✨',
    likes: '420'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    caption: 'Luminous tones & sunlit dimensions. The ultimate hair transformation 💫',
    likes: '584'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    caption: 'Healthy hair is the foundation of extraordinary style. Book your ritual today.',
    likes: '392'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80',
    caption: 'Sculpted waves for the modern muse. Step into luxury at Casa Grande Mall.',
    likes: '618'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80',
    caption: 'Precision silhouettes defined by craft. TONI&GUY Mangalore.',
    likes: '495'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80',
    caption: 'Dimension that turns heads. Experience contemporary hair artistry with us.',
    likes: '710'
  }
];
