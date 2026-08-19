import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ArrowUpRight, Navigation, CheckCircle2, Send, Sparkles, MessageCircle, Calendar } from 'lucide-react';
import { SALON_DATA, SERVICES } from '../data/salonData';

interface LocationSectionProps {
  onOpenBooking?: () => void;
}

export default function LocationSection({ onOpenBooking }: LocationSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Haircuts & Precision Styling',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate luxury booking inquiry handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section
      id="location"
      aria-label="Location and Contact Information"
      className="py-24 sm:py-32 bg-[#0E0E0E] relative border-t border-[#1C1C1C]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[#C6A96B] mb-3">
            <span className="w-6 h-[1px] bg-[#C6A96B]" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium">
              VISIT OUR SANCTUARY
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F5F2EC] font-light mb-4">
            LOCATION &amp; INQUIRIES
          </h2>
          <p className="text-sm sm:text-base text-[#D8CFC2]/80 font-light leading-relaxed">
            Conveniently situated on the Ground Floor of Casa Grande Mall in Attavar, Mangaluru.
          </p>
        </div>

        {/* 2-Column Grid: Left Salon Details + Map, Right Contact / Consultation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Salon Details & Interactive Map Embed */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="bg-[#121212] border border-[#222222] p-8 space-y-6">
              
              {/* Address Card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#1B1B1B] text-[#C6A96B] border border-[#2C2C2C] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#C6A96B] font-semibold mb-1">
                    ADDRESS
                  </h3>
                  <p className="text-base text-[#F5F2EC] font-light leading-snug">
                    Ground Floor, CASA GRANDE MALL COMMERCIAL COMPLEX, A, NO G4 AND G5, 17-17-1315/29, Attavar, Mangaluru, Karnataka 575001
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-4 p-4 bg-[#181818] border border-[#222222]">
                  <div className="p-2.5 bg-[#121212] text-[#C6A96B] border border-[#2C2C2C] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#C6A96B] font-semibold mb-0.5">
                      TELEPHONE
                    </h3>
                    <a
                      href={SALON_DATA.phoneTel}
                      className="text-sm sm:text-base text-[#F5F2EC] hover:text-[#C6A96B] transition-colors font-medium block"
                    >
                      {SALON_DATA.phone}
                    </a>
                    <p className="text-[11px] text-[#888888] mt-0.5">Direct Voice Line</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[#181818] border border-[#222222]">
                  <div className="p-2.5 bg-[#121212] text-[#25D366] border border-[#2C2C2C] shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#25D366] font-semibold mb-0.5">
                      WHATSAPP
                    </h3>
                    <a
                      href={SALON_DATA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-[#F5F2EC] hover:text-[#25D366] transition-colors font-medium block"
                    >
                      {SALON_DATA.whatsapp}
                    </a>
                    <p className="text-[11px] text-[#888888] mt-0.5">Chat &amp; Consultations</p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#1B1B1B] text-[#C6A96B] border border-[#2C2C2C] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#C6A96B] font-semibold mb-1">
                    HOURS OF REFINEMENT
                  </h3>
                  <p className="text-sm text-[#F5F2EC] font-light">
                    Monday – Sunday: <span className="text-[#C6A96B]">10:00 AM – 9:00 PM</span>
                  </p>
                  <p className="text-xs text-[#888888] mt-0.5">Appointments and walk-ins welcome</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#1E1E1E] flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center space-x-2 bg-[#C6A96B] text-[#0B0B0B] hover:bg-[#F5F2EC] px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 shadow-md cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#0B0B0B]" />
                  <span>BOOK APPOINTMENT</span>
                </button>

                <a
                  href={SALON_DATA.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="get-directions-btn"
                  className="inline-flex items-center space-x-2 bg-[#F5F2EC] text-[#0B0B0B] hover:bg-[#C6A96B] px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={SALON_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-whatsapp-btn"
                  className="inline-flex items-center space-x-2 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-[#0B0B0B] border border-[#25D366]/40 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WHATSAPP</span>
                </a>

                <a
                  href={SALON_DATA.phoneTel}
                  id="location-call-now-btn"
                  className="inline-flex items-center space-x-2 bg-[#1C1C1C] hover:bg-[#282828] text-[#F5F2EC] hover:text-[#C6A96B] border border-[#333333] px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A96B]" />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>

            {/* Map Preview Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#161616] border border-[#222222] shadow-xl">
              <iframe
                title="TONI&GUY Mangalore Location Map"
                src="https://maps.google.com/maps?q=12.8628,74.8465&hl=en&z=15&output=embed"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[1.2]"
                loading="lazy"
                aria-label="Google Map showing Casa Grande Mall, Attavar, Mangaluru"
              />
              <div className="absolute top-3 left-3 bg-[#0B0B0B]/90 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[11px] text-[#F5F2EC] flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#C6A96B]" />
                <span>CASA GRANDE MALL, Attavar</span>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Consultation / Inquiries Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#121212] border border-[#222222] p-8 sm:p-10 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 text-[#C6A96B] mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                    GET IN TOUCH
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F2EC] font-light mb-2">
                  CONSULTATION &amp; INQUIRIES
                </h3>
                <p className="text-xs text-[#D8CFC2]/70 font-light mb-8">
                  Have a specific styling question or bridal consultation inquiry? Send our team a message or jump directly to instant appointment reservation.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-[#181818] border border-[#C6A96B]/50 text-center space-y-4"
                  >
                    <div className="inline-flex items-center space-x-2 bg-[#C6A96B]/15 border border-[#C6A96B]/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C6A96B]">
                      <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse" />
                      <span>INQUIRY STATUS: PENDING CONFIRMATION</span>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-[#25D366]/20 text-[#25D366] mx-auto flex items-center justify-center border border-[#25D366]/40">
                      <MessageCircle className="w-6 h-6 fill-[#25D366]" />
                    </div>

                    <h4 className="font-editorial text-2xl text-[#F5F2EC]">We will contact you on WhatsApp!</h4>

                    <p className="text-xs text-[#D8CFC2] font-light leading-relaxed max-w-md mx-auto">
                      Thank you for contacting <span className="text-[#C6A96B] font-medium">TONI&amp;GUY Mangalore</span>. Our salon team will message you directly on WhatsApp at <span className="text-white font-semibold">{formData.phone}</span> to assist with your inquiry.
                    </p>

                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/918197456678?text=${encodeURIComponent(`*INQUIRY - TONI&GUY MANGALORE*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message || 'General Inquiry'}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#25D366] text-[#0B0B0B] hover:bg-[#20ba5a] px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-all shadow-lg"
                      >
                        <MessageCircle className="w-4 h-4 fill-[#0B0B0B]" />
                        <span>CHAT ON WHATSAPP NOW (+91 81974 56678)</span>
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs uppercase tracking-widest text-[#D8CFC2] mb-2 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full bg-[#181818] border border-[#2A2A2A] focus:border-[#C6A96B] px-4 py-3 text-sm text-[#F5F2EC] placeholder-[#555555] outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs uppercase tracking-widest text-[#D8CFC2] mb-2 font-medium">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 09876543210"
                        className="w-full bg-[#181818] border border-[#2A2A2A] focus:border-[#C6A96B] px-4 py-3 text-sm text-[#F5F2EC] placeholder-[#555555] outline-none transition-colors"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs uppercase tracking-widest text-[#D8CFC2] mb-2 font-medium">
                        Service of Interest
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2A2A2A] focus:border-[#C6A96B] px-4 py-3 text-sm text-[#F5F2EC] outline-none transition-colors cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#181818] text-[#F5F2EC]">
                            {s.title}
                          </option>
                        ))}
                        <option value="Bridal & Occasion Artistry" className="bg-[#181818] text-[#F5F2EC]">
                          Bridal &amp; Occasion Artistry
                        </option>
                        <option value="General Hair Consultation" className="bg-[#181818] text-[#F5F2EC]">
                          General Hair Consultation
                        </option>
                      </select>
                    </div>

                    {/* Preferred Date & Notes */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs uppercase tracking-widest text-[#D8CFC2] mb-2 font-medium">
                        Preferred Date / Specific Hair Requests
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share your hair goals, preferred stylist or timing..."
                        className="w-full bg-[#181818] border border-[#2A2A2A] focus:border-[#C6A96B] px-4 py-3 text-sm text-[#F5F2EC] placeholder-[#555555] outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-[#F5F2EC] text-[#0B0B0B] hover:bg-[#C6A96B] hover:text-[#0B0B0B] py-3.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-xl disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>SEND INQUIRY</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Direct Booking Link Note */}
              <div className="mt-8 pt-6 border-t border-[#1E1E1E] flex items-center justify-between text-xs">
                <span className="text-[#888888]">Need instant assistance?</span>
                <a
                  href={SALON_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:text-[#F5F2EC] font-medium flex items-center space-x-1"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
