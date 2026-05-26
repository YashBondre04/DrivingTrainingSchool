import { useState, useEffect, useRef, useCallback } from 'react';
import BorderGlow from './components/BorderGlow';
import LightRays from './components/LightRays';
import {
  GraduationCap,
  BookOpen,
  FileCheck,
  Tag,
  Phone,
  MapPin,
  Menu,
  X,
  Car,
  ChevronDown,
  Send,
  ArrowRight,
  Eye,
  Maximize,
  GaugeCircle,
  ShieldCheck,
} from 'lucide-react';

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Vehicle Training', id: 'training' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm'
        : 'bg-white border-b border-slate-100'
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-green-800 flex items-center justify-center">
              <Car size={16} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-slate-900 font-bold text-sm leading-tight">Rishab Motor</p>
              <p className="text-green-800 text-xs font-medium leading-tight tracking-wide">Driving School</p>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-slate-600 hover:text-slate-900 text-sm font-medium nav-link-underline transition-colors duration-200"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="bg-green-800 hover:bg-green-900 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200"
            >
              Book a Lesson
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-700 p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-5 py-5 flex flex-col gap-5">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-slate-700 hover:text-slate-900 text-base font-medium text-left transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg w-full"
          >
            Book a Lesson
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────────
const features = [
  {
    icon: GraduationCap,
    label: 'Expert Trainers',
    desc: 'Certified, patient instructors with years of on-road experience.',
  },
  {
    icon: BookOpen,
    label: 'Easy Learning',
    desc: 'A structured, step-by-step curriculum built for all levels.',
  },
  {
    icon: FileCheck,
    label: 'RTO Assistance',
    desc: 'Complete support for license documentation and tests.',
  },
  {
    icon: Tag,
    label: 'Special Offers',
    desc: 'Flexible, affordable packages tailored to your schedule.',
  },
];

function Hero() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="pt-16 md:pt-18 bg-white"
    >
      {/* Relative wrapper: constrains LightRays strictly to the text area */}
      <div className="relative overflow-hidden w-full">

        {/* Blend mode fix: multiply blending allows green to show on white */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#a7f3d0"
          raysSpeed={1.0}
          lightSpread={0.8}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.08}
          className="absolute inset-0 z-0 opacity-70 pointer-events-none"
          style={{ mixBlendMode: 'multiply' }}
        />

        {/* Top band */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-12 md:pt-24 md:pb-16 text-center relative z-10 animate-fade-in-up">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight max-w-3xl mx-auto mb-5">
            Master the Road<br />with Confidence
          </h1>

          {/* Hindi */}
          <p className="text-green-800 text-lg sm:text-xl font-semibold mb-4">
            कार चलाना सीखें सरल व सुरक्षित तरीके से!
          </p>
          <p className="text-slate-500 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Professional driving lessons in the heart of Delhi — safe, structured, and built around your pace.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BorderGlow
              borderRadius={8}
              glowRadius={30}
              glowIntensity={1.5}
              edgeSensitivity={0}
              coneSpread={45}
              backgroundColor="#166534"
              glowColor="142 70 50"
              colors={['#4ade80', '#22c55e', '#86efac']}
              fillOpacity={0.6}
              alwaysGlowOnHover={true}
              autoPlay={true}
              autoPlayInterval={6000}
              className="rounded-lg border-none"
            >
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold text-base px-8 py-3.5 rounded-lg transition-colors duration-200 group w-full h-full"
              >
                Book Your Lesson
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </BorderGlow>
            <a
              href="tel:8448922587"
              className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 font-medium text-base px-6 py-3.5 rounded-lg transition-colors duration-200 bg-white/80 backdrop-blur-xs"
            >
              <Phone size={16} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Hero image strip (safely outside the light rays wrapper) */}
      <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=85&auto=format&fit=crop"
          alt="Open road driving"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5" />
      </div>

      {/* Features row */}
      <div className="bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {features.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-col items-start gap-2">
                <div className="w-9 h-9 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center mb-1">
                  <Icon size={18} className="text-green-800" />
                </div>
                <p className="text-slate-900 font-semibold text-sm">{label}</p>
                <p className="text-slate-500 text-xs leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── OUR TRAINING CAR ──────────────────────────────────────────────────────────
function Training() {
  const carFeatures = [
    {
      icon: Eye,
      title: 'Commanding Visibility',
      desc: "The Wagon R's signature 'tall-boy' design offers a wide, unobstructed view, making it much easier to judge edges and corners as a beginner.",
    },
    {
      icon: Maximize,
      title: 'Compact & Maneuverable',
      desc: 'Perfect for Delhi traffic. Its tight turning radius makes U-turns, parallel parking, and navigating narrow lanes stress-free.',
    },
    {
      icon: GaugeCircle,
      title: 'Light Controls',
      desc: 'Smooth steering and a highly responsive, light clutch prevent leg and arm fatigue during your first hour-long sessions.',
    },
    {
      icon: ShieldCheck,
      title: 'Dual-Control Safety',
      desc: 'Fitted with dual-control instructor pedals, ensuring your trainer can instantly intervene if needed, keeping you 100% safe.',
    },
  ];

  return (
    <section id="training" className="bg-white py-20 md:py-28 overflow-hidden relative border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side: Text & Points */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <p className="text-green-800 text-xs font-semibold uppercase tracking-widest mb-3">
                Our Training Vehicle
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Master the basics in the <br className="hidden md:block" />
                <span className="text-green-800">Maruti Wagon R</span>
              </h2>

              {/* Mobile-Only Car Layout (rendered between heading and description on mobile, hidden on lg screens) */}
              <div className="lg:hidden relative w-full h-[220px] sm:h-[300px] flex justify-center items-center my-8 group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-green-500/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-tr from-green-50 to-slate-50 border border-green-100 rounded-full z-0 shadow-inner pointer-events-none"></div>
                <div className="absolute top-5 right-5 w-12 h-12 border-4 border-green-100 rounded-full z-0 opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-5 left-5 w-6 h-6 bg-green-100 rounded-full z-0 opacity-50 pointer-events-none"></div>
                <img
                  src="/wagon-r.png"
                  alt="Rishab Motor Training Wagon R"
                  className="relative z-10 w-full max-w-[240px] sm:max-w-sm scale-110 drop-shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-115"
                />
              </div>

              <p className="text-slate-500 mt-5 text-base max-w-lg leading-relaxed">
                We believe in training you on a vehicle that builds confidence. We exclusively use the Maruti Suzuki Wagon R because it is widely considered the ultimate beginner-friendly hatchback in India.
              </p>
            </div>

            {/* Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {carFeatures.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-start gap-2">
                  <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center mb-2 shadow-sm">
                    <Icon size={18} className="text-green-800" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-base leading-tight">{title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Desktop-Only Car Layout (hidden on mobile, shown on lg screens) */}
          <div className="hidden lg:flex lg:col-span-5 relative w-full h-[450px] justify-center items-center group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-green-50 to-slate-50 border border-green-100 rounded-full z-0 shadow-inner pointer-events-none"></div>
            <div className="absolute top-10 right-10 w-16 h-16 border-4 border-green-100 rounded-full z-0 opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-8 h-8 bg-green-100 rounded-full z-0 opacity-50 pointer-events-none"></div>
            <img
              src="/wagon-r.png"
              alt="Rishab Motor Training Wagon R"
              className="relative z-10 w-full max-w-md scale-125 drop-shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-[1.35] translate-x-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ───────────────────────────────────────────────────────────────────
const VEHICLE_TYPES = ['Compact Hatchback', '4-Seater Sedan', 'Advanced SUV'];

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', vehicle: VEHICLE_TYPES[0] });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Rishab Motor Driving School, I am ${form.name}. My phone number is ${form.phone}. I am interested in learning to drive a ${form.vehicle}.`;
    const url = `https://wa.me/918448922587?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-slate-50 border-t border-slate-200 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-green-800 text-xs font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Start Your Journey Today
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Details + Map */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone size={17} className="text-green-800" />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm mb-1">Call or WhatsApp</p>
                <a
                  href="tel:+918448922587"
                  className="text-slate-600 hover:text-green-800 text-sm block transition-colors font-medium"
                >
                  +91 84489 22587
                </a>
                <a
                  href="tel:+919217484716"
                  className="text-slate-600 hover:text-green-800 text-sm block transition-colors"
                >
                  +91 92174 84716
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={17} className="text-green-800" />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm mb-1">Our Location</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Shyam Vihar, Khatu Shyam Chowk<br />
                  Near Bai Indu Sharma Office<br />
                  Najafgarh, New Delhi
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200 pt-6">
              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-slate-200 h-56 md:h-64">
                <iframe
                  title="Rishab Motor Driving School Location"
                  src="https://maps.google.com/maps?q=Shyam%20Vihar,%20Najafgarh,%20New%20Delhi&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7 md:p-8 shadow-sm">
            <h3 className="text-slate-900 text-xl font-bold mb-1">Book Your Lesson</h3>
            <p className="text-slate-500 text-sm mb-7">
              Fill the form — we'll connect via WhatsApp instantly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-slate-700 text-sm font-medium mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full border border-slate-300 focus:border-green-700 focus:ring-2 focus:ring-green-700/10 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-slate-700 text-sm font-medium mb-1.5"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                  className="w-full border border-slate-300 focus:border-green-700 focus:ring-2 focus:ring-green-700/10 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                />
              </div>

              {/* Vehicle Type */}
              <div>
                <label
                  htmlFor="vehicle"
                  className="block text-slate-700 text-sm font-medium mb-1.5"
                >
                  Preferred Vehicle Type
                </label>
                <div className="relative">
                  <select
                    id="vehicle"
                    name="vehicle"
                    value={form.vehicle}
                    onChange={handleChange}
                    className="w-full appearance-none border border-slate-300 focus:border-green-700 focus:ring-2 focus:ring-green-700/10 rounded-lg px-4 py-2.5 text-sm text-slate-900 outline-none transition-all cursor-pointer bg-white"
                  >
                    {VEHICLE_TYPES.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={15}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-800 hover:bg-green-900 text-white font-semibold text-sm py-3 rounded-lg transition-colors duration-200 mt-2"
              >
                {submitted ? (
                  'Opening WhatsApp ✓'
                ) : (
                  <>
                    <Send size={15} />
                    Send via WhatsApp
                  </>
                )}
              </button>

              <p className="text-slate-400 text-xs text-center pt-1">
                This will open WhatsApp with a pre-filled message. No data is stored on our servers.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────────
const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function Footer() {
  return (
    <footer className="bg-slate-900">
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-green-700 flex items-center justify-center flex-shrink-0">
                <Car size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Rishab Motor</p>
                <p className="text-green-500 text-xs font-medium leading-tight">Driving School</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Teaching Delhi to drive safely and confidently since 2006. RTO-approved curriculum, expert instructors.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Quick Links</p>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Vehicle Training', id: 'training' },
                { label: 'Contact Us', id: 'contact' },
                { label: 'Book a Lesson', id: 'contact' },
              ].map(({ label, id }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+918448922587" className="text-slate-400 hover:text-white text-sm block transition-colors font-medium">
                    +91 84489 22587
                  </a>
                  <a href="tel:+919217484716" className="text-slate-400 hover:text-white text-sm block transition-colors">
                    +91 92174 84716
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  Shyam Vihar, Khatu Shyam Chowk,<br />Near Bai Indu Sharma Office,<br />Najafgarh, New Delhi
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            Copyright © 2026 Rishab Motor Driving School. All Rights Reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Najafgarh, New Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <Hero />
      <Training />
      <Contact />
      <Footer />
    </div>
  );
}
