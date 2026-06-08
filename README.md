# Rishab Motor Driving Training School

A modern, professional website for **Rishab Motor Driving Training School** — a motor driving training institute located in Najafgarh, New Delhi. This project is a freelance web development gig built with cutting-edge front-end technologies.

🌐 **Live Site:** [rishabh-driving-training-school.vercel.app](https://rishabh-driving-training-school.vercel.app)

---

## 📋 Overview

This is a single-page application (SPA) designed to:
- Showcase the driving school's services and training vehicle (Maruti Suzuki Wagon R)
- Provide location and contact information
- Enable online lesson booking via WhatsApp integration
- Improve local SEO for Najafgarh and surrounding areas in Delhi
- Deliver a fast, responsive, and visually engaging user experience

**Target Audience:** Students in Najafgarh, Dwarka, Vikas Puri, and South-West Delhi looking for professional car driving training.

---

## 🛠️ Tech Stack

### Frontend
- **React 19** — Modern UI library for component-based architecture
- **TypeScript** — Type-safe JavaScript for scalability
- **Vite** — Ultra-fast build tool and dev server
- **Tailwind CSS** — Utility-first CSS framework for responsive design
- **PostCSS + Autoprefixer** — Advanced CSS processing

### Animation & Visual Effects
- **Framer Motion** — Smooth, performant animations
- **OGL** — WebGL-powered 3D graphics for advanced visual effects
- **Lucide React** — Beautiful, minimal icon library

### Deployment
- **Vercel** — Serverless deployment with automatic CI/CD

---

## 📁 Project Structure

```
DrivingTrainingSchool/
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main app component with all sections
│   ├── index.css             # Global styles
│   └── assets/
│       └── car.webp          # Logo and branding images
├── public/
│   ├── open-road.webp        # Hero section background image
│   ├── wagon-r.webp          # Training vehicle showcase image
│   └── favicon.svg           # Brand icon
├── index.html                # HTML entry point (SEO & metadata)
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

---

## 🎨 Key Features

### 1. **Responsive Navigation**
- Sticky navbar that hides on scroll
- Mobile hamburger menu
- Smooth scroll anchoring to sections

### 2. **Hero Section**
- Eye-catching headline with animated light rays
- Dual CTA buttons (Book Lesson + Call Now)
- Hero image with gradient overlay
- Feature highlights (Expert Trainers, Easy Learning, RTO Assistance, Special Offers)

### 3. **Training Vehicle Section**
- Showcase of Maruti Suzuki Wagon R
- Feature highlights with icons:
  - Commanding Visibility
  - Compact & Maneuverable
  - Light Controls
  - Dual-Control Safety
- Responsive layout (stacks on mobile, side-by-side on desktop)

### 4. **Local SEO & FAQ Section**
- Schema markup (LocalBusiness JSON-LD)
- Accordion-style FAQs targeting local searches
- Covers common questions about driving training in Najafgarh
- Optimized for Google search results

### 5. **Contact Section**
- Contact form integrated with WhatsApp API
- Location map embedding (Google Maps)
- Multiple phone numbers
- Full address with postal details

### 6. **Footer**
- Brand information
- Quick navigation links
- Contact details and location
- Copyright notice

### 7. **Custom Visual Effects**
- **BorderGlow Component** — Animated glowing borders on CTA buttons
- **LightRays Component** — Subtle animated light particles following mouse movement
- Smooth animations and micro-interactions throughout

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and npm/yarn installed
- Basic knowledge of React and Tailwind CSS

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YashBondre04/DrivingTrainingSchool.git
   cd DrivingTrainingSchool
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the production build locally**
   ```bash
   npm run preview
   ```

---

## 📝 Environment & Configuration

### Vite Configuration
The project uses Vite with React plugin for fast development and optimized builds.

### Tailwind CSS
Custom Tailwind configuration includes:
- Extended color palette with green tones (brand color)
- Responsive breakpoints
- Custom animations

### SEO & Metadata
- **HTML Meta Tags** for Open Graph (Facebook, WhatsApp sharing)
- **Schema Markup** for LocalBusiness (Google Rich Results)
- **Google Site Verification** for search console
- Semantic HTML structure for better accessibility

---

## 🔧 Customization

### Updating Content

**Business Information:**
- Edit phone numbers in `src/App.jsx` (Contact section)
- Update address in index.html meta tags and App.jsx
- Modify coordinates in Google Maps embed

**Images & Assets:**
- Logo: `public/favicon.svg`
- Hero background: `public/open-road.webp`
- Car image: `public/wagon-r.webp`

**FAQ Section:**
Located in `src/App.jsx` → `SEOSection()` component. Add or modify questions/answers in the `faqs` array.

**Colors:**
Tailwind green palette (`green-800`, `green-500`, etc.) is used throughout. Modify in `tailwind.config.js` for global color changes.

---

## 📱 Responsive Design

The website is fully responsive across:
- **Mobile** (< 640px)
- **Tablet** (640px - 1024px)
- **Desktop** (> 1024px)

Uses Tailwind breakpoints (`sm:`, `md:`, `lg:`) for adaptive layouts.

---

## 🔐 Data & Privacy

- **WhatsApp Integration:** Contact form uses WhatsApp Web API to open chats with pre-filled messages
- **No Backend:** Purely frontend — no data is stored on servers
- **Google Maps:** Embedded with `referrerPolicy="no-referrer-when-downgrade"` for privacy

---

## 📊 Performance

- **Fast Loading:** Vite optimized builds with code splitting
- **WebP Images:** Modern image format for reduced file sizes
- **Lazy Loading:** Images load lazily for better performance
- **CSS Optimization:** Tailwind purges unused styles in production
- **SEO-Friendly:** Semantic HTML and schema markup for search engines

---

## 🎯 Local SEO Strategy

1. **Location-Specific Keywords:**
   - "Motor driving school in Najafgarh, Delhi"
   - "Driving classes in Shyam Vihar"
   - "RTO assistance in South-West Delhi"

2. **Schema Markup:**
   - LocalBusiness JSON-LD with coordinates
   - Service area defined (Najafgarh, Dwarka, Vikas Puri)
   - Multiple contact phone numbers

3. **FAQ Page:**
   - Optimized for "People Also Ask" snippets
   - Natural language queries matching local searches

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| React | ^19.2.6 | UI library |
| React DOM | ^19.2.6 | React rendering |
| Vite | ^8.0.12 | Build tool & dev server |
| TypeScript | ~6.0.2 | Type safety |
| Tailwind CSS | ^3.4.19 | Styling |
| Framer Motion | ^12.40.0 | Animations |
| Lucide React | ^1.16.0 | Icons |
| OGL | ^1.0.11 | WebGL graphics |

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on each push
4. Environment-specific builds handled automatically

```bash
npm run build  # Creates optimized production build
```

The built files are in `dist/` directory.

---

## 🤝 Contributing

This is a freelance project maintained by the client. For modifications or feature requests:
1. Contact the project owner
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary and created as a freelance service for **Rishab Motor Driving Training School**. Unauthorized use or reproduction is prohibited.

---

## 📞 Support & Contact

For issues, feature requests, or questions about the codebase:

**Project Owner:** Yash Bondre  
**GitHub:** [@YashBondre04](https://github.com/YashBondre04)

**Business Contact (Rishab Motor Driving School):**
- 📱 +91 84489 22587
- 📱 +91 92174 84716
- 📍 Shyam Vihar, Khatu Shyam Chowk, Najafgarh, New Delhi

---

## ✨ Highlights

✅ Modern React architecture with TypeScript  
✅ Fully responsive and mobile-optimized  
✅ Advanced animations with Framer Motion & OGL  
✅ Local SEO optimized with schema markup  
✅ WhatsApp CRM integration for leads  
✅ Fast Vite-powered builds  
✅ Production-ready on Vercel  
✅ Accessible semantic HTML  

---

**Built with ❤️ for Rishab Motor Driving Training School, Delhi**
