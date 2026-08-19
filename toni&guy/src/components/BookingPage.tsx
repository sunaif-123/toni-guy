import { useState, useId } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Scissors, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowUpRight, 
  MapPin, 
  ShieldCheck, 
  MessageCircle, 
  Star,
  Info,
  CalendarCheck,
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';
import { SALON_DATA, SERVICES } from '../data/salonData';

interface BookingPageProps {
  onBackToHome: () => void;
  preselectedServiceId?: string;
}

interface StylistOption {
  id: string;
  name: string;
  role: string;
  experience: string;
}

const STYLISTS: StylistOption[] = [
  { id: 'any', name: 'First Available Master Stylist', role: 'Certified TONI&GUY Expert', experience: 'Best Match' },
  { id: 'creative-dir', name: 'Creative Style Director', role: 'Precision Architecture & Editorial', experience: '12+ Years' },
  { id: 'colour-master', name: 'Senior Technical Colourist', role: 'Balayage & Dimensional Colour', experience: '8+ Years' },
  { id: 'senior-stylist', name: 'Senior Hair Stylist', role: 'Bespoke Cuts & Texture Specialist', experience: '6+ Years' },
];

const TIME_SLOTS = [
  { time: '10:30 AM', period: 'Morning' },
  { time: '11:30 AM', period: 'Morning' },
  { time: '12:30 PM', period: 'Afternoon' },
  { time: '01:30 PM', period: 'Afternoon' },
  { time: '02:30 PM', period: 'Afternoon' },
  { time: '03:30 PM', period: 'Afternoon' },
  { time: '04:30 PM', period: 'Evening' },
  { time: '05:30 PM', period: 'Evening' },
  { time: '06:30 PM', period: 'Evening' },
  { time: '07:30 PM', period: 'Evening' },
  { time: '08:00 PM', period: 'Evening' },
];

export default function BookingPage({ onBackToHome, preselectedServiceId }: BookingPageProps) {
  // Generate dates for next 7 days
  const today = new Date();
  const availableDates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);
    return {
      dateString: d.toISOString().split('T')[0],
      dayName: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' }),
      formatted: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    };
  });

  const initialService = SERVICES.find(s => s.id === preselectedServiceId)?.title || SERVICES[0].title;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState<string>(initialService);
  const [selectedStylist, setSelectedStylist] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0].dateString);
  const [selectedTime, setSelectedTime] = useState<string>('11:30 AM');
  
  // Client info form
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const nameInputId = useId();
  const phoneInputId = useId();
  const emailInputId = useId();
  const notesInputId = useId();

  const [copiedRef, setCopiedRef] = useState(false);

  const getWhatsAppMessageUrl = (refCode: string) => {
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    const stylistObj = STYLISTS.find(s => s.id === selectedStylist);
    
    const message = `*APPOINTMENT RESERVATION - TONI&GUY MANGALORE*%0A%0A` +
      `*Status:* Pending Confirmation%0A` +
      `*Booking Ref:* ${refCode}%0A` +
      `*Client:* ${clientName}%0A` +
      `*Phone:* ${clientPhone}%0A` +
      `*Service:* ${selectedService}%0A` +
      `*Date:* ${formattedDate}%0A` +
      `*Time:* ${selectedTime}%0A` +
      `*Stylist:* ${stylistObj?.name}%0A` +
      (notes ? `*Client Notes:* ${notes}%0A` : '') +
      `%0A*Location:* Ground Floor, CASA GRANDE MALL, Attavar, Mangaluru%0A%0A` +
      `_Hello TONI&GUY Team, please confirm my appointment slot._`;

    return `https://wa.me/918197456678?text=${message}`;
  };

  const handleCopyRef = () => {
    if (bookingRef) {
      navigator.clipboard.writeText(bookingRef);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  const handleCompleteBooking = (viaWhatsApp: boolean = false) => {
    if (!clientName || !clientPhone) {
      alert('Please fill in your name and phone number to complete the booking reservation.');
      return;
    }

    setIsSubmitting(true);
    const refCode = `TG-MNG-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);

    if (viaWhatsApp) {
      const whatsappUrl = getWhatsAppMessageUrl(refCode);
      window.open(whatsappUrl, '_blank');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmed(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F2EC] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Top Breadcrumbs & Back Trigger */}
      <div className="max-w-5xl mx-auto mb-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D8CFC2] hover:text-[#C6A96B] transition-colors py-2 px-3 bg-[#141414] border border-[#262626] group cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO SALON HOME</span>
        </button>

        <div className="hidden sm:flex items-center space-x-2 text-xs text-[#888888]">
          <span className="text-[#C6A96B]">TONI&amp;GUY Mangalore</span>
          <span>/</span>
          <span>Bespoke Appointment Booking</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto">
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 border border-[#C6A96B]/40 bg-[#141414] px-4 py-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A96B]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#F5F2EC] font-medium">
              RESERVE YOUR BESPOKE EXPERIENCE
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2EC] font-light italic mb-4">
            Book Your Appointment
          </h1>
          <p className="text-sm sm:text-base text-[#D8CFC2]/80 font-light leading-relaxed">
            Select your desired salon rituals and preferred time at our sanctuary on the Ground Floor of Casa Grande Mall, Attavar.
          </p>
        </div>

        {bookingConfirmed ? (
          /* Confirmation & Pending Review State */
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#121212] border border-[#C6A96B]/50 p-6 sm:p-10 max-w-2xl mx-auto shadow-2xl space-y-6"
          >
            {/* Status Header Badge */}
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center space-x-2.5 bg-[#C6A96B]/10 border border-[#C6A96B]/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A96B]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C] animate-pulse" />
                <span>RESERVATION STATUS: PENDING CONFIRMATION</span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EC] font-light">
                Your Reservation is Received!
              </h2>
              <p className="text-xs sm:text-sm text-[#D8CFC2] max-w-lg mx-auto leading-relaxed">
                Thank you for choosing <span className="text-[#C6A96B] font-medium">TONI&amp;GUY Mangalore</span>. We have placed your appointment in our confirmation queue.
              </p>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="bg-[#16271D] border border-[#25D366]/40 p-4 sm:p-5 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F5F2EC]">
                    We will contact you on WhatsApp shortly
                  </h4>
                  <p className="text-[12px] text-[#A7D9B8] leading-relaxed mt-0.5 font-light">
                    Our salon desk will message you at <span className="font-semibold text-white">{clientPhone}</span> to confirm stylist slot availability.
                  </p>
                </div>
              </div>

              <a
                href={getWhatsAppMessageUrl(bookingRef)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-[#0B0B0B] px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4 fill-[#0B0B0B]" />
                <span>CONFIRM ON WHATSAPP NOW</span>
              </a>
            </div>

            {/* 3-Step Progress Tracker */}
            <div className="bg-[#171717] border border-[#262626] p-4 text-xs">
              <span className="text-[10px] uppercase tracking-widest text-[#888888] font-semibold block mb-3 text-left">
                RESERVATION TIMELINE &amp; STEPS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="bg-[#1C1C1C] p-2.5 border border-[#2E2E2E]">
                  <div className="flex items-center space-x-1.5 text-[#25D366] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="font-semibold text-[11px]">1. Request Received</span>
                  </div>
                  <p className="text-[10px] text-[#888888] leading-tight">Details logged in salon queue</p>
                </div>

                <div className="bg-[#241F15] p-2.5 border border-[#C6A96B]/40">
                  <div className="flex items-center space-x-1.5 text-[#C6A96B] mb-1">
                    <Clock className="w-3.5 h-3.5 animate-spin" />
                    <span className="font-semibold text-[11px]">2. WhatsApp Verification</span>
                  </div>
                  <p className="text-[10px] text-[#D8CFC2]/80 leading-tight">Desk contacts you via WhatsApp</p>
                </div>

                <div className="bg-[#1C1C1C] p-2.5 border border-[#2E2E2E] opacity-70">
                  <div className="flex items-center space-x-1.5 text-[#888888] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-semibold text-[11px]">3. Confirmed VIP Visit</span>
                  </div>
                  <p className="text-[10px] text-[#666666] leading-tight">Casa Grande Mall sanctuary</p>
                </div>
              </div>
            </div>

            {/* Detailed Booking Receipt */}
            <div className="bg-[#171717] border border-[#2A2A2A] p-5 sm:p-6 text-left space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-[#262626] pb-2.5">
                <span className="text-[#888888]">Booking Reference:</span>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[#C6A96B] font-bold text-sm tracking-wider">{bookingRef}</span>
                  <button
                    type="button"
                    onClick={handleCopyRef}
                    className="text-[#888888] hover:text-[#F5F2EC] p-1 border border-[#333333] hover:border-[#C6A96B] transition-colors"
                    title="Copy Reference"
                  >
                    {copiedRef ? <Check className="w-3 h-3 text-[#25D366]" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between border-b border-[#262626] pb-2">
                <span className="text-[#888888]">Client Name:</span>
                <span className="text-[#F5F2EC] font-medium">{clientName}</span>
              </div>

              <div className="flex justify-between border-b border-[#262626] pb-2">
                <span className="text-[#888888]">Contact / WhatsApp Number:</span>
                <span className="text-[#F5F2EC] font-mono">{clientPhone}</span>
              </div>

              <div className="flex justify-between border-b border-[#262626] pb-2">
                <span className="text-[#888888]">Service Selected:</span>
                <span className="text-[#C6A96B] font-medium">{selectedService}</span>
              </div>

              <div className="flex justify-between border-b border-[#262626] pb-2">
                <span className="text-[#888888]">Preferred Stylist:</span>
                <span className="text-[#F5F2EC]">{STYLISTS.find(s => s.id === selectedStylist)?.name}</span>
              </div>

              <div className="flex justify-between border-b border-[#262626] pb-2">
                <span className="text-[#888888]">Requested Date &amp; Slot:</span>
                <span className="text-[#F5F2EC] font-medium">{selectedDate} at {selectedTime}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#888888]">Salon Location:</span>
                <span className="text-[#D8CFC2] text-right font-light">
                  Ground Floor, CASA GRANDE MALL, Attavar, Mangaluru
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppMessageUrl(bookingRef)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#25D366] text-[#0B0B0B] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#20ba5a] transition-all shadow-xl shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4 fill-[#0B0B0B]" />
                <span>OPEN IN WHATSAPP (+91 81974 56678)</span>
              </a>

              <a
                href={SALON_DATA.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#1C1C1C] border border-[#333333] hover:border-[#C6A96B] text-[#F5F2EC] px-5 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#262626] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A96B]" />
                <span>CALL: {SALON_DATA.phone}</span>
              </a>

              <button
                type="button"
                onClick={onBackToHome}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent text-[#888888] hover:text-[#F5F2EC] px-4 py-3.5 text-xs font-medium uppercase tracking-wider transition-colors"
              >
                <span>RETURN TO HOMEPAGE</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* Step-by-Step Interactive Booking Engine */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Form Controls */}
            <div className="lg:col-span-8 bg-[#121212] border border-[#222222] p-6 sm:p-8 space-y-8">
              
              {/* Step 1: Service Selection */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-[#C6A96B] text-[#0B0B0B] text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-[#F5F2EC]">
                      SELECT SALON SERVICE
                    </h2>
                  </div>
                  <span className="text-[11px] text-[#C6A96B] uppercase tracking-wider">Step 1 of 3</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => {
                    const isSelected = selectedService === s.title;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.title)}
                        className={`p-4 text-left border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#1C1A14] border-[#C6A96B] text-[#F5F2EC] shadow-md shadow-[#C6A96B]/10'
                            : 'bg-[#161616] border-[#262626] text-[#D8CFC2] hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs uppercase tracking-wider font-semibold">
                            {s.title}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C6A96B]" />}
                        </div>
                        <p className="text-[11px] text-[#888888] line-clamp-2 leading-relaxed">
                          {s.subtitle}
                        </p>
                      </button>
                    );
                  })}
                  
                  {/* Additional Specialty Services */}
                  <button
                    type="button"
                    onClick={() => setSelectedService('Bridal & Luxury Occasion Styling')}
                    className={`p-4 text-left border transition-all duration-200 cursor-pointer ${
                      selectedService === 'Bridal & Luxury Occasion Styling'
                        ? 'bg-[#1C1A14] border-[#C6A96B] text-[#F5F2EC] shadow-md shadow-[#C6A96B]/10'
                        : 'bg-[#161616] border-[#262626] text-[#D8CFC2] hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs uppercase tracking-wider font-semibold">
                        Bridal &amp; Occasion Styling
                      </span>
                      {selectedService === 'Bridal & Luxury Occasion Styling' && <CheckCircle2 className="w-4 h-4 text-[#C6A96B]" />}
                    </div>
                    <p className="text-[11px] text-[#888888] leading-relaxed">
                      Haute couture bridal artistry and bespoke gala finishing.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedService('Keratin Smoothing & Anti-Frizz Ritual')}
                    className={`p-4 text-left border transition-all duration-200 cursor-pointer ${
                      selectedService === 'Keratin Smoothing & Anti-Frizz Ritual'
                        ? 'bg-[#1C1A14] border-[#C6A96B] text-[#F5F2EC] shadow-md shadow-[#C6A96B]/10'
                        : 'bg-[#161616] border-[#262626] text-[#D8CFC2] hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs uppercase tracking-wider font-semibold">
                        Keratin Smoothing &amp; Anti-Frizz
                      </span>
                      {selectedService === 'Keratin Smoothing & Anti-Frizz Ritual' && <CheckCircle2 className="w-4 h-4 text-[#C6A96B]" />}
                    </div>
                    <p className="text-[11px] text-[#888888] leading-relaxed">
                      Long-lasting silkening and intense humidity defense.
                    </p>
                  </button>
                </div>
              </div>

              {/* Step 2: Date, Time & Stylist */}
              <div className="border-t border-[#1F1F1F] pt-8 space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-[#C6A96B] text-[#0B0B0B] text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-[#F5F2EC]">
                    DATE, TIME &amp; STYLIST PREFERENCE
                  </h2>
                </div>

                {/* Day selector */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#D8CFC2] mb-2 font-medium">
                    Select Date
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
                    {availableDates.map((item) => {
                      const isDateSelected = selectedDate === item.dateString;
                      return (
                        <button
                          key={item.dateString}
                          type="button"
                          onClick={() => setSelectedDate(item.dateString)}
                          className={`p-2.5 text-center border transition-all cursor-pointer ${
                            isDateSelected
                              ? 'bg-[#C6A96B] text-[#0B0B0B] border-[#C6A96B] font-semibold'
                              : 'bg-[#161616] border-[#282828] text-[#D8CFC2] hover:border-white/40'
                          }`}
                        >
                          <span className="block text-[10px] uppercase tracking-wider opacity-80">
                            {item.dayName}
                          </span>
                          <span className="block text-xs font-bold mt-0.5">
                            {item.formatted}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time slot selector */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#D8CFC2] mb-2 font-medium">
                    Select Time Slot (Salon Hours: 10:00 AM – 9:00 PM)
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {TIME_SLOTS.map((slot) => {
                      const isTimeSelected = selectedTime === slot.time;
                      return (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() => setSelectedTime(slot.time)}
                          className={`py-2 px-1 text-center border text-xs transition-colors cursor-pointer ${
                            isTimeSelected
                              ? 'bg-[#C6A96B] text-[#0B0B0B] border-[#C6A96B] font-semibold'
                              : 'bg-[#161616] border-[#282828] text-[#D8CFC2] hover:border-white/40'
                          }`}
                        >
                          {slot.time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Stylist Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#D8CFC2] mb-2 font-medium">
                    Stylist Level
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {STYLISTS.map((st) => {
                      const isStylistSelected = selectedStylist === st.id;
                      return (
                        <button
                          key={st.id}
                          type="button"
                          onClick={() => setSelectedStylist(st.id)}
                          className={`p-3 text-left border transition-colors cursor-pointer ${
                            isStylistSelected
                              ? 'bg-[#1C1A14] border-[#C6A96B] text-[#F5F2EC]'
                              : 'bg-[#161616] border-[#282828] text-[#D8CFC2] hover:border-white/30'
                          }`}
                        >
                          <div className="flex justify-between items-center text-xs font-semibold">
                            <span>{st.name}</span>
                            <span className="text-[10px] text-[#C6A96B] font-mono">{st.experience}</span>
                          </div>
                          <span className="text-[11px] text-[#888888] block">{st.role}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Step 3: Client Details */}
              <div className="border-t border-[#1F1F1F] pt-8 space-y-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#C6A96B] text-[#0B0B0B] text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-[#F5F2EC]">
                    YOUR CONTACT INFORMATION
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={nameInputId} className="block text-xs uppercase tracking-widest text-[#D8CFC2] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id={nameInputId}
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Pooja Hegde"
                      className="w-full bg-[#181818] border border-[#2A2A2A] focus:border-[#C6A96B] px-4 py-2.5 text-sm text-[#F5F2EC] placeholder-[#555555] outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor={phoneInputId} className="block text-xs uppercase tracking-widest text-[#D8CFC2] mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id={phoneInputId}
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#181818] border border-[#2A2A2A] focus:border-[#C6A96B] px-4 py-2.5 text-sm text-[#F5F2EC] placeholder-[#555555] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={emailInputId} className="block text-xs uppercase tracking-widest text-[#D8CFC2] mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    id={emailInputId}
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="e.g. client@example.com"
                    className="w-full bg-[#181818] border border-[#2A2A2A] focus:border-[#C6A96B] px-4 py-2.5 text-sm text-[#F5F2EC] placeholder-[#555555] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor={notesInputId} className="block text-xs uppercase tracking-widest text-[#D8CFC2] mb-1.5">
                    Special Requests / Hair History Notes (Optional)
                  </label>
                  <textarea
                    id={notesInputId}
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention previous colour treatments, scalp sensitivities, or specific styling visions..."
                    className="w-full bg-[#181818] border border-[#2A2A2A] focus:border-[#C6A96B] px-4 py-2.5 text-sm text-[#F5F2EC] placeholder-[#555555] outline-none resize-none"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Booking Summary & Direct Action Card */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-[#141414] border border-[#2A2A2A] p-6 shadow-2xl space-y-6">
                <div className="border-b border-[#242424] pb-4">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#C6A96B] font-semibold block mb-1">
                    APPOINTMENT SUMMARY
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F2EC] font-light">
                    TONI&amp;GUY Mangalore
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="text-[#888888] block text-[10px] uppercase tracking-wider">Chosen Service:</span>
                    <span className="text-[#F5F2EC] font-medium text-sm block mt-0.5">{selectedService}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 border-t border-[#222222] pt-3">
                    <div>
                      <span className="text-[#888888] block text-[10px] uppercase tracking-wider">Date:</span>
                      <span className="text-[#C6A96B] font-medium">{selectedDate}</span>
                    </div>
                    <div>
                      <span className="text-[#888888] block text-[10px] uppercase tracking-wider">Time:</span>
                      <span className="text-[#C6A96B] font-medium">{selectedTime}</span>
                    </div>
                  </div>

                  <div className="border-t border-[#222222] pt-3">
                    <span className="text-[#888888] block text-[10px] uppercase tracking-wider">Stylist:</span>
                    <span className="text-[#F5F2EC]">{STYLISTS.find(s => s.id === selectedStylist)?.name}</span>
                  </div>

                  <div className="border-t border-[#222222] pt-3">
                    <span className="text-[#888888] block text-[10px] uppercase tracking-wider">Location:</span>
                    <span className="text-[#D8CFC2] leading-tight block mt-0.5">
                      Ground Floor, Casa Grande Mall, Attavar, Mangaluru
                    </span>
                  </div>
                </div>

                {/* Primary Booking Actions */}
                <div className="pt-4 border-t border-[#242424] space-y-3">
                  {/* Instant WhatsApp Reservation Button */}
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => handleCompleteBooking(true)}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-[#0B0B0B] py-3.5 px-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#0B0B0B]" />
                    <span>BOOK VIA WHATSAPP (INSTANT)</span>
                  </button>

                  {/* Standard In-App Confirm Button */}
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => handleCompleteBooking(false)}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#C6A96B] hover:bg-[#F5F2EC] text-[#0B0B0B] py-3.5 px-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>{isSubmitting ? 'PROCESSING...' : 'REQUEST RESERVATION'}</span>
                  </button>

                  <div className="bg-[#1A1A1A] border border-[#2B2B2B] p-2.5 flex items-start space-x-2 text-[11px] text-[#A7D9B8] leading-tight">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                    <span>Our salon concierge will contact you on WhatsApp to verify &amp; confirm your appointment.</span>
                  </div>
                </div>

                {/* Direct Telephone Support */}
                <div className="bg-[#1A1A1A] p-3 text-center border border-[#282828] text-xs">
                  <span className="text-[#888888] block text-[10px] uppercase tracking-wider mb-1">Prefer to speak directly?</span>
                  <a
                    href={SALON_DATA.phoneTel}
                    className="text-[#F5F2EC] hover:text-[#C6A96B] font-semibold flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C6A96B]" />
                    <span>{SALON_DATA.phone}</span>
                  </a>
                </div>
              </div>

              {/* Trust Badge Card */}
              <div className="bg-[#121212] border border-[#222222] p-4 text-xs text-[#888888] space-y-2">
                <div className="flex items-center space-x-2 text-[#C6A96B]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-semibold uppercase tracking-wider text-[10px]">TONI&amp;GUY Guarantee</span>
                </div>
                <p className="text-[11px] text-[#D8CFC2]/70 leading-relaxed font-light">
                  Complimentary pre-service hair &amp; scalp diagnostic with all reservations. No cancellation fee.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
