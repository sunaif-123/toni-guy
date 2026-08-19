import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import InstagramSection from './components/InstagramSection';
import LocationSection from './components/LocationSection';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { SALON_DATA } from './data/salonData';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'booking'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [showFloatingBar, setShowFloatingBar] = useState(false);

  useEffect(() => {
    // Check initial hash
    if (window.location.hash === '#book-appointment' || window.location.hash === '#book' || window.location.hash === '#booking') {
      setCurrentView('booking');
    }

    const handleHashChange = () => {
      if (window.location.hash === '#book-appointment' || window.location.hash === '#book' || window.location.hash === '#booking') {
        setCurrentView('booking');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '' || window.location.hash === '#') {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingBar(true);
      } else {
        setShowFloatingBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setCurrentView('booking');
    window.location.hash = 'book-appointment';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setCurrentView('home');
    if (window.location.hash === '#book-appointment' || window.location.hash === '#book' || window.location.hash === '#booking') {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F2EC] flex flex-col selection:bg-[#C6A96B] selection:text-[#0B0B0B]">
      {/* Sticky Header Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onGoHome={handleGoHome}
        isBookingPage={currentView === 'booking'}
      />

      {/* Main Content Sections or Dedicated Booking Experience */}
      <main className="flex-1">
        {currentView === 'booking' ? (
          <BookingPage 
            onBackToHome={handleGoHome} 
            preselectedServiceId={selectedServiceId}
          />
        ) : (
          <>
            <Hero onOpenBooking={() => handleOpenBooking()} />
            <Intro />
            <Services onOpenBooking={(id) => handleOpenBooking(id)} />
            <Gallery />
            <WhyUs />
            <Reviews />
            <InstagramSection />
            <LocationSection onOpenBooking={() => handleOpenBooking()} />
            <BookingCTA onOpenBooking={() => handleOpenBooking()} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
        onGoHome={handleGoHome}
        isBookingPage={currentView === 'booking'}
      />

      {/* Floating WhatsApp Quick Action Button (Desktop & Tablet) */}
      <a
        href={SALON_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp with TONI&GUY Mangalore"
        className="hidden lg:flex fixed bottom-8 right-8 z-40 items-center space-x-3 bg-[#25D366] hover:bg-[#20ba5a] text-[#0B0B0B] font-semibold px-4 py-3 shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 group border border-white/20"
      >
        <MessageCircle className="w-5 h-5 fill-[#0B0B0B]" />
        <div className="text-left leading-tight pr-1">
          <span className="block text-[10px] uppercase tracking-widest text-[#0B0B0B]/80 font-bold">WhatsApp Us</span>
          <span className="block text-xs font-mono font-bold tracking-tight text-[#0B0B0B]">{SALON_DATA.whatsapp}</span>
        </div>
      </a>

      {/* Mobile Floating Quick Action Bar */}
      {showFloatingBar && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111111]/95 backdrop-blur-lg border-t border-[#262626] p-2.5 shadow-2xl grid grid-cols-3 gap-2 animate-in fade-in slide-in-from-bottom duration-300">
          <a
            href={SALON_DATA.phoneTel}
            className="inline-flex items-center justify-center space-x-1 bg-[#1C1C1C] border border-[#333333] text-[#F5F2EC] py-2.5 text-[11px] font-semibold uppercase tracking-wider hover:bg-[#252525] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C6A96B]" />
            <span>Call</span>
          </a>

          <a
            href={SALON_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-1 bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] py-2.5 text-[11px] font-semibold uppercase tracking-wider hover:bg-[#25D366] hover:text-[#0B0B0B] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => handleOpenBooking()}
            id="mobile-bar-book-appointment-btn"
            className="inline-flex items-center justify-center space-x-1 bg-[#C6A96B] text-[#0B0B0B] py-2.5 text-[11px] font-semibold uppercase tracking-wider hover:bg-[#F5F2EC] transition-colors shadow-lg cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>
        </div>
      )}
    </div>
  );
}
