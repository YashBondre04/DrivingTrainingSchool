import { useState, useEffect, useRef, useCallback } from 'react';
import carWebp from './assets/car.webp';
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
    const [scrolledPastHero, setScrolledPastHero] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);

            const heroEl = document.getElementById('home');
            if (heroEl) {
                const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
                setScrolledPastHero(window.scrollY > heroBottom - 80);
            } else {
                setScrolledPastHero(window.scrollY > 750);
            }
        };
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledPastHero ? '-translate-y-full opacity-0' : 'translate-y-0'
                } ${scrolled
                    ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm'
                    : 'bg-white border-b border-slate-100'
                }`}
        >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="flex items-center justify-between h-16 md:h-18">
                    {/* Logo */}
                    <button
                        onClick={() => scrollTo('home')}
                        className="text-left group -ml-[64px] sm:-ml-[68px] md:-ml-[72px]"
                    >
                        <div className="flex items-center gap-2 md:gap-3">
                            <img
                                src={carWebp}
                                alt="Rishabh Motor Driving Training School Logo"
                                width="57"
                                height="44"
                                className="h-9 w-auto object-contain md:h-11"
                            />
                            <div className="flex flex-col justify-center">
                                <span className="text-red-600 font-black text-lg sm:text-2xl uppercase tracking-tight leading-none">
                                    Rishabh Motor
                                </span>
                                <span className="text-slate-700 font-bold text-[8px] sm:text-sm uppercase tracking-wide leading-none mt-0.5 sm:mt-1">
                                    Driving Training School
                                </span>
                            </div>
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
                        Professional car driving training in Najafgarh, New Delhi — safe, structured, and tailored to your pace.
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

            <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden">
                <img
                    src="/open-road.webp"
                    alt="Student learning to drive on Delhi roads with Rishab Motor"
                    width="1000"
                    height="666"
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
                                    src="/wagon-r.webp"
                                    alt="Maruti Suzuki Wagon R dual control training car at Rishab Motor Driving School Najafgarh"
                                    width="384"
                                    height="384"
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
                                    <h3 className="text-slate-900 font-bold text-base leading-tight">{title}</h3>
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
                            src="/wagon-r.webp"
                            alt="Maruti Suzuki Wagon R training vehicle with dual pedal control for safe driving instruction at Rishab Motor"
                            width="448"
                            height="448"
                            className="relative z-10 w-full max-w-md scale-125 drop-shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-[1.35] translate-x-4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── LOCAL SEO / FAQ SECTION ───────────────────────────────────────────────────
function SEOSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Which is the best motor driving school in Najafgarh, Delhi?",
            answer: "Rishab Motor Driving Training School is one of the best motor driving schools in Shyam Vihar & Najafgarh, New Delhi. We provide structured, beginner-friendly car driving classes with patient, certified instructors.",
            icon: ShieldCheck
        },
        {
            question: "Do you provide RTO driving license assistance in Najafgarh?",
            answer: "Yes, we provide end-to-end guidance for obtaining both learning licenses and permanent driving licenses. We support you with the required RTO guidelines and test preparation.",
            icon: FileCheck
        },
        {
            question: "Are there special car driving classes for women/ladies?",
            answer: "Absolutely! We focus on a comfortable and patient learning environment, offering private car driving classes for female students to build real on-road confidence.",
            icon: Car
        },
        {
            question: "Which locations in Najafgarh and South-West Delhi do you cover?",
            answer: "We cover Shyam Vihar, Khatu Shyam Chowk, Dinpur, Chhawla, Goyla Khurd, Najafgarh Extension, Dwarka, and surrounding areas. We offer flexible batch timings to fit your schedule.",
            icon: MapPin
        },
        {
            question: "What are your course fees and timings?",
            answer: "We offer highly affordable driving course packages with flexible timings from early morning to evening. Contact us via phone or WhatsApp for details on fees and duration.",
            icon: Tag
        }
    ];

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section id="faq" className="bg-white py-20 md:py-28 border-b border-slate-100">
            <div className="max-w-4xl mx-auto px-5 sm:px-8">
                <div className="text-center mb-16">
                    <p className="text-green-800 text-xs font-semibold uppercase tracking-widest mb-3">
                        Najafgarh Driving School Guide & FAQ
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-4">
                        Najafgarh's Top-Rated Motor Driving School
                    </h2>
                    <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
                        Everything you need to know about learning to drive a car and getting your license in Najafgarh, Delhi.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map(({ question, answer, icon: Icon }, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors duration-200"
                            >
                                <button
                                    onClick={() => toggle(idx)}
                                    className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                                            <Icon size={16} className="text-green-800" />
                                        </div>
                                        <span className="font-bold text-slate-900 text-sm sm:text-base">{question}</span>
                                    </div>
                                    <ChevronDown
                                        size={16}
                                        className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 border-t border-slate-200' : 'max-h-0'
                                        }`}
                                >
                                    <p className="p-5 text-slate-600 text-sm leading-relaxed bg-white">
                                        {answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// ─── CONTACT ───────────────────────────────────────────────────────────────────

function Contact() {
    const [form, setForm] = useState({ name: '', phone: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = `Hi Rishab Motor Driving School, I am ${form.name}. My phone number is ${form.phone}. I am interested in learning to drive.`;
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
                                    className="text-slate-600 hover:text-green-800 text-sm block py-2 transition-colors font-medium"
                                >
                                    +91 84489 22587
                                </a>
                                <a
                                    href="tel:+919217484716"
                                    className="text-slate-600 hover:text-green-800 text-sm block py-2 transition-colors"
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
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.987003530869!2d77.0034167!3d28.600166700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM2JzAwLjYiTiA3N8KwMDAnMTIuMyJF!5e0!3m2!1sen!2sin!4v1779881754749!5m2!1sen!2sin"
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

                            <p className="text-slate-500 text-xs text-center pt-1">
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
                            <img
                                src="/favicon.svg"
                                alt="Rishab Motor Driving School Logo"
                                width="32"
                                height="32"
                                className="w-8 h-8 rounded-lg object-contain bg-white flex-shrink-0"
                            />
                            <div>
                                <p className="text-white font-bold text-sm leading-tight">Rishab Motor</p>
                                <p className="text-green-500 text-xs font-medium leading-tight">Driving School</p>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            Najafgarh's trusted motor driving school since 2006. RTO-approved training curriculum and expert car driving instructors.
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
                                        className="text-slate-500 hover:text-white text-sm transition-colors duration-200 text-left"
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
                                <Phone size={14} className="text-green-500 mt-1.5 flex-shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+918448922587" className="text-slate-500 hover:text-white text-sm block py-1.5 transition-colors font-medium">
                                        +91 84489 22587
                                    </a>
                                    <a href="tel:+919217484716" className="text-slate-500 hover:text-white text-sm block py-1.5 transition-colors">
                                        +91 92174 84716
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <MapPin size={14} className="text-green-500 mt-1 flex-shrink-0" />
                                <p className="text-slate-500 text-sm leading-relaxed">
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
            <main>
                <Hero />
                <Training />
                <SEOSection />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
