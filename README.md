# The Fashion Fable - React

A modern, responsive React website for a fashion design business, inspired by "The Fashion Fable" original website. This project replicates and enhances the original website with improved responsive design, modern React architecture, and enhanced user experience.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, elegant interface with smooth animations
- **Course Management**: Comprehensive fashion design course catalog (9 different courses)
- **Portfolio Gallery**: Filterable collections showcase with categories
- **Contact System**: Business information and contact details
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Fast loading with Vite build system

## 🚀 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **React Router** - Client-side routing
- **Lucide React** - Beautiful, customizable icons

## 📱 Pages

1. **Home** - Hero section, services overview, featured collections
2. **Courses** - 9 fashion design courses (Basic to Advanced levels)
3. **Collections** - Portfolio gallery with 6 categories (Blouse, Dress, Chaniya Choli, Partywear, Bridal, Kutchi Art)
4. **About** - Designer profile (Minaxiben Prajapati), mission & vision
5. **Contact** - Business information, timings, location in Kutch, Gujarat
6. **Course Details** - Individual course pages with detailed curriculum

## 🎨 Design Features

- **Color Scheme**: Primary (Orange) and Secondary (Pink) with professional grays
- **Typography**: Inter for body text, Playfair Display for headings
- **Layout**: Mobile-first responsive design
- **Animations**: Smooth hover effects and transitions
- **Icons**: Consistent Lucide React icons throughout

## 🛠️ Installation & Setup

1. **Clone and navigate to the project**
   ```bash
   cd "The Fashion Fable - React"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Original Website Reference

This project is based on the original "The Fashion Fable" website at https://thefashionfable.vercel.app/ and includes:

- Complete course catalog with Gujarati content
- All 9 courses from Basic (1 month) to Certificate Course (3 months)
- Portfolio collections with proper categorization
- Contact information for Kutch, Gujarat location
- Instagram integration
- Designer profile and business information

## 📦 Course Structure

The website includes detailed information about:

1. **Certificate Course (90 Days)** - Comprehensive training
2. **Unique Course (3 months)** - Specialized designs
3. **Basic Course (1 month)** - Beginner level
4. **Dress Course (1 month)** - Various dress styles
5. **Kurti Design Course (1 month)** - Kurti patterns
6. **Simple Blouse Course (1 month)** - Basic blouse making
7. **Blouse Pattern Design (1 month)** - Advanced patterns
8. **Special Course (1 month)** - Exclusive designs
9. **Advanced Course (1 month)** - Expert level techniques

Each course includes detailed curriculum, materials required, and pricing information.

## 🌐 Live Website

The development server runs at: http://localhost:5173

## 👩‍💼 Business Information

- **Designer**: Minaxiben Prajapati  
- **Location**: Hamiparavas, Old-Main Bazar, Bhachau, Kutch, Gujarat
- **Phone**: +91-9714785080
- **Timings**: Monday to Saturday, 10:00 AM - 7:00 PM
- **Instagram**: @fashionbyfable12

## 📄 License

© 2025 The Fashion Fable. All rights reserved.

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Main page components
│   ├── Home.tsx        # Landing page
│   ├── Courses.tsx     # Course catalog
│   ├── Collections.tsx # Portfolio gallery
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── CourseDetail.tsx # Individual course pages
├── assets/             # Static assets
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎯 Key Improvements Over Original

1. **Modern React Architecture**: Uses latest React patterns and hooks
2. **Enhanced Responsiveness**: Better mobile and tablet experience
3. **Improved Navigation**: Smooth client-side routing
4. **Better Typography**: Professional font choices and hierarchy
5. **Enhanced UX**: Loading states, hover effects, and animations
6. **Type Safety**: Full TypeScript implementation
7. **Performance**: Optimized images and lazy loading
8. **Accessibility**: Proper semantic HTML and ARIA labels

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Orange shades */ },
  secondary: { /* Pink shades */ }
}
```

### Content
- Course data: Update in `src/pages/Courses.tsx`
- Portfolio items: Update in `src/pages/Collections.tsx`
- Contact info: Update in `src/pages/Contact.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

The site is ready for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist`
