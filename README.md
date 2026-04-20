# Earnytics LLC - Business Solutions Website

A modern, responsive Next.js website showcasing comprehensive business solutions.

## Features

- 🎨 **Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 🎯 **Key Sections**:
  - Hero section with video background and compelling call-to-action
  - Services showcase with 6 core offerings
  - Portfolio gallery with real project screenshots
  - Comprehensive pricing plans (6 tiers)
  - Professional footer with contact information

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd nextstudio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
nextstudio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Hero.tsx            # Hero section with video
│   ├── Services.tsx        # Services grid
│   ├── Portfolio.tsx       # Portfolio showcase
│   ├── Pricing.tsx         # Pricing plans
│   └── Footer.tsx          # Footer with contact
├── public/                 # Static assets
└── package.json            # Dependencies
```

## Components Overview

### Navbar
- Sticky navigation with scroll effects
- Transparent to dark background transition
- Backdrop blur for modern look

### Hero Section
- Video background
- Eye-catching content
- Clear value proposition
- Call-to-action button

### Services Section
- 6 service cards with colorful gradient icons
- Hover effects and animations
- Clean, organized layout

### Portfolio Section
- Real project screenshots
- Category tags
- Hover effects with "View Project" button
- Scale animations

### Pricing Section
- 6 pricing tiers
- Feature comparison
- Monthly/Yearly toggle
- Highlighted "Most Popular" plan

### Footer
- Earnytics LLC branding
- Contact information
- Quick links
- Back to top button

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- Primary: Orange (#FF6B35)
- Navy: Custom dark blue gradient
- Background: White/Gray

### Content
Update component files in the `components/` directory to modify:
- Service offerings
- Pricing plans
- Portfolio items
- Contact information

## Build for Production

```bash
npm run build
npm start
```

## License

This project is for demonstration purposes.

## Support

For questions or support, contact info@earnytics.com
