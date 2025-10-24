# Portfolio Website - Mark Vincent A. Cueva

## Purpose

This repository contains the personal portfolio website for Mark Vincent A. Cueva, a Software Engineer with professional experience at Softype Inc., Ease Solutions, and Alliance Software Inc.

## About This Project

A modern, responsive portfolio website showcasing professional experience, technical skills, projects, and training. Built with Next.js, React, TypeScript, and Tailwind CSS, featuring smooth animations and an intuitive user experience.

## Key Features

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Modern Animations**: Smooth scroll animations, zoom effects, and page transitions using Framer Motion
- **Professional Sections**:
  - Hero section with animated introduction
  - Professional profile with work history
  - Detailed experience timeline with achievements
  - Skills showcase with technology stack
  - Featured projects section with hero + grid layout
  - Training and certifications
  - Contact information and social links
- **Unified Glass Morphism Design**: Consistent design language throughout with glass cards, gradient effects, and smooth animations
- **Interactive UI**: Sophisticated hover states, micro-interactions, and animated elements
- **Performance Optimized**: Server-side rendering, code splitting, and optimized assets with hardware-accelerated animations

## Technology Stack

### Frontend Framework
- **Next.js 13.3.2** - React framework with SSR/SSG capabilities
- **React 18.2.0** - UI library
- **TypeScript 5.0.4** - Type-safe development

### Styling & UI
- **Tailwind CSS 3.3.2** - Utility-first CSS framework
- **Framer Motion 10.12.18** - Animation library
- **Ant Design 5.11.5** - UI component library
- **React Icons 4.12.0** - Icon library

### Additional Libraries
- **@react-three/fiber** & **@react-three/drei** - 3D graphics with Three.js
- **react-intersection-observer** - Scroll-based animations
- **react-hook-form** - Form management
- **nodemailer** - Contact form backend

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting

## Project Structure

```
portfolio/
├── public/               # Static assets
│   ├── projects/        # Project images
│   ├── skills/          # Technology icons
│   └── ...
├── src/
│   ├── components/      # React components
│   │   ├── nav/        # Navigation components
│   │   ├── newPages/   # Main page sections
│   │   │   ├── hero.tsx          # Hero section with animated intro
│   │   │   ├── profile.tsx       # Professional profile
│   │   │   ├── experience.tsx    # Work experience timeline
│   │   │   ├── techStack.tsx     # Technology stack showcase
│   │   │   ├── skill.tsx         # Individual skill component
│   │   │   ├── projects.tsx      # Featured projects section
│   │   │   ├── project.tsx       # Individual project card (featured/grid)
│   │   │   ├── trainingCard.tsx  # Training & certifications
│   │   │   └── frame.tsx         # Layout wrapper
│   │   ├── context/    # React context providers
│   │   │   └── context.tsx       # Global app context
│   │   ├── PageAnimation.tsx     # Scroll-based animations
│   │   ├── zoomAnimation.tsx     # Zoom effects
│   │   ├── waveCard.tsx          # Wave animation component
│   │   └── bubble.tsx            # Bubble text effect
│   └── pages/
│       ├── _app.tsx    # App wrapper with global styles
│       ├── _document.tsx
│       ├── index.tsx   # Home page
│       ├── resume.tsx  # Resume page
│       └── api/
│           └── data.ts # Portfolio data (projects, experience, skills, training)
├── .claude/
│   └── agents/         # Claude Code custom agents
├── CLAUDE.md           # This file - project documentation
├── tailwind.config.js  # Tailwind CSS configuration with custom theme
└── package.json
```

## Portfolio Highlights

### Professional Experience
- **Softype Inc.** - Software Engineer (Jan 2025 - Present)
  - T3 Stack development, PWA implementation, AI integration
- **Ease Solutions** - Junior Software Engineer (Jun 2024 - Dec 2024)
  - Spring Boot APIs, Selenium automation, Jira plugin development
- **Alliance Software Inc.** - Software Engineer Intern (Jan 2024 - May 2024)
  - React/TypeScript development, Azure automation pipelines

### Technical Skills
- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Backend**: Spring Boot, Express, Python Flask
- **Cloud**: AWS (Lambda, S3, EC2, DynamoDB), Azure
- **AI/ML**: Claude AI, AI Agents, Prompt Engineering, OpenAI GPT
- **DevOps**: Docker, Git, CI/CD
- **Testing**: Selenium, JUnit, Mockito
- **Agile**: Scrum, Jira

### Notable Projects
1. **BRAMK** - Customer support bot with GPT integration and analytics
2. **AskMarked** - Anonymous Q&A platform with QR code generation
3. **Pinewood Bike** - E-commerce showcase for bike models
4. **Mark Chat** - Real-time messaging system
5. **One Blood** - Blood donation management system

### Training & Certifications
- Zuitt AWS Bootcamp - Cloud Architecture & Serverless Development
- Zuitt Java Bootcamp - Advanced Backend Engineering
- Accenture Technology Academy - Backend Development & DevOps

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Environment

- **Node.js**: 18.x or higher
- **Package Manager**: npm
- **Development URL**: http://localhost:3000
- **Production**: Optimized static export

## Design Philosophy

This portfolio emphasizes:
- **Clean, modern aesthetics** with smooth animations
- **Professional presentation** of work experience and skills
- **Easy navigation** with sticky header and smooth scrolling
- **Performance** with optimized images and code splitting
- **Accessibility** with semantic HTML and ARIA labels
- **Responsive design** that works on all devices

## Unified Design System

### Glass Morphism Theme
The entire portfolio uses a consistent glass morphism design language:

**Core Design Elements:**
- **Glass Cards**: Semi-transparent cards with backdrop blur effects
- **Gradient Overlays**: Subtle primary/purple gradient overlays on hover
- **Glow Effects**: Outer glow effects using blur and gradient combinations
- **Border Treatments**: Glass borders that transition to primary color on interaction
- **Smooth Transitions**: All interactions use smooth 300-700ms transitions

**Color Palette:**
- **Primary**: `#7E31F1` (Purple) - Used for accents, buttons, and interactive elements
- **Purple-500**: Secondary accent for gradients
- **Dark Text**: Main text color with high contrast
- **Dark Text Secondary**: Subtle text for descriptions and labels
- **Glass Border**: Semi-transparent borders for cards
- **Glass Background**: Translucent backgrounds with backdrop blur

**Animation Principles:**
- Hardware-accelerated transforms (scale, translate)
- Smooth opacity transitions for overlays
- Hover-triggered zoom effects on images (110% scale)
- Micro-interactions on buttons and links
- Consistent duration timing (300ms for quick interactions, 500-700ms for premium effects)

### Section-Specific Design Patterns

#### Featured Projects Section
**Layout Strategy:**
- Featured + Grid Hybrid layout
- First project displayed as large hero card
- Remaining projects in responsive 2-column grid
- Creates clear visual hierarchy

**Featured Project Card:**
- Horizontal layout (image left, content right on desktop)
- Large typography (2rem → 2.5rem responsive)
- "Featured Project" badge with animated pulse indicator
- Full tech stack display with interactive hover tags
- Gradient button with glow effect on hover
- Multi-layer glass effects with outer glow
- Image zoom and brightness enhancement on hover

**Grid Project Cards:**
- Vertical layout (image top, content bottom)
- Compact typography (1.4rem title)
- Line-clamped descriptions (3 lines max)
- Tech stack limited to 4 visible tags + "+N more" indicator
- Text-based GitHub link with icon animation
- Title color transition to primary on hover
- Consistent glass morphism with subtle hover gradients

**Responsive Behavior:**
- Mobile: Single column, vertical stacking
- Tablet: 2-column grid for regular projects
- Desktop: Full featured hero + 2-column grid

#### Component Consistency
All sections follow these patterns:
- Section headers: 2rem → 2.5rem responsive sizing
- Section descriptions: 1.05rem with secondary text color
- Vertical spacing: py-20 for sections, mb-16 for headers
- Card padding: 6-10 units responsive scaling
- Border radius: rounded-2xl for cards, rounded-xl for inner elements
- Shadow hierarchy: shadow-glass for cards, shadow-glass-lg for hover, shadow-glow for buttons

### Design Guidelines for Development

**When Adding New Sections:**
1. Use the glass morphism card pattern with `border-glass-border` and `bg-glass-gradient`
2. Add `backdrop-blur-2xl` for the glass effect
3. Include hover states with `hover:border-primary/30` and `hover:shadow-glass-lg`
4. Use smooth transitions: `transition-all duration-300/500/700`
5. Wrap sections in `AnimatedSection` component for scroll animations
6. Follow the established spacing: `py-20` for sections, `mb-16` for headers

**Interactive Elements:**
- Buttons: Use gradient backgrounds with glow effects on hover
- Links: Include icon animations with `group-hover` patterns
- Cards: Add subtle gradient overlays that appear on hover
- Images: Apply zoom (scale-110) and brightness effects on hover
- Tech tags: Interactive with hover color changes to primary

**Typography Scale:**
- Section titles: `text-[2rem] lg:text-[2.5rem]`
- Card titles: `text-[1.4rem]` to `text-[2rem]` depending on prominence
- Body text: `text-[0.95rem]` to `text-[1.05rem]`
- Labels/metadata: `text-xs` or `text-sm`
- Always use `font-semibold` or `font-bold` for titles

**Responsive Design:**
- Mobile-first approach with Tailwind's responsive prefixes
- Common breakpoints: `md:` (768px), `lg:` (1024px)
- Grid layouts: Single column → 2 columns → full layout
- Padding/margins scale up with screen size
- Typography increases on larger screens

**Accessibility:**
- Use semantic HTML (`<article>`, `<section>`, `<nav>`)
- Include proper heading hierarchy (h1 → h2 → h3)
- Add meaningful alt text to all images
- Ensure sufficient color contrast (text/background)
- Make interactive elements keyboard accessible
- Use `rel='noreferrer'` on external links with `target='_blank'`

**Performance:**
- Use CSS transforms for animations (hardware-accelerated)
- Avoid layout thrashing with opacity/transform instead of position changes
- Lazy load images when possible
- Keep component tree shallow
- Split large data arrays wisely

## Contact

- **Email**: cuevamarkvincent@gmail.com
- **Phone**: +63 968 650 6973
- **GitHub**: [market0v0](https://github.com/market0v0)
- **LinkedIn**: [mark-cueva-90a33424a](https://www.linkedin.com/in/mark-cueva-90a33424a/)

## License

This is a personal portfolio project. All rights reserved.

---

Built with ❤️ using Next.js, React, and TypeScript
