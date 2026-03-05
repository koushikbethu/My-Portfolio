# Component Architecture Map

Visual guide to understand the portfolio structure and component relationships.

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      app/layout.tsx                         │
│                    (Root Layout)                            │
│  - Metadata & SEO                                           │
│  - Font Configuration                                       │
│  - Global Styles                                            │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      app/page.tsx                           │
│                    (Main Page)                              │
│  - Imports all components                                   │
│  - Defines page structure                                   │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │   Component Hierarchy   │
              └─────────────────────────┘
```

## 📦 Component Structure

```
app/page.tsx
│
├── Navbar.tsx                    [Fixed Navigation]
│   ├── Logo/Brand
│   ├── Navigation Links
│   └── Mobile Menu Toggle
│
├── Hero.tsx                      [Full Screen Introduction]
│   ├── Profile Image/Initials
│   ├── Name & Title
│   ├── Tagline
│   ├── Social Links (GitHub, LinkedIn)
│   ├── Resume Download Button
│   └── Scroll Indicator
│
├── About.tsx                     [Professional Bio]
│   └── Glass Card with Description
│
├── Skills.tsx                    [Technical Skills]
│   └── Grid of Skill Categories
│       ├── Programming
│       ├── Frontend
│       ├── Backend
│       ├── Databases
│       ├── Cloud & DevOps
│       └── AI/ML
│
├── Projects.tsx                  [Project Showcase]
│   └── Grid of Project Cards
│       ├── Project 1: FocusTube
│       │   ├── Title & Subtitle
│       │   ├── Description
│       │   ├── Features List
│       │   ├── Tech Stack Tags
│       │   └── Links (GitHub, Demo)
│       │
│       └── Project 2: Audio-to-ISL
│           ├── Title & Subtitle
│           ├── Description
│           ├── Features List
│           ├── Tech Stack Tags
│           └── Links (GitHub, Demo)
│
├── Experience.tsx                [Work Experience]
│   └── Experience Card
│       ├── Role & Organization
│       ├── Time Period
│       └── Responsibilities List
│
├── Education.tsx                 [Academic Background]
│   └── Education Card
│       ├── Degree & Specialization
│       ├── University & Location
│       ├── Duration & GPA
│       └── Relevant Coursework
│
├── Achievements.tsx              [Notable Accomplishments]
│   └── Grid of Achievement Cards
│       ├── Achievement 1: Top 3%
│       ├── Achievement 2: State Rank
│       └── Achievement 3: Hackathons
│
├── Certifications.tsx            [Professional Certifications]
│   └── Certification Card
│       ├── Certificate Name
│       ├── Issuing Organization
│       └── Year
│
├── GitHub.tsx                    [GitHub Activity]
│   ├── GitHub Username Link
│   ├── Contribution Graph
│   └── Stats (Repos, Contributions, Projects)
│
├── Contact.tsx                   [Contact Information & Form]
│   ├── Contact Information
│   │   ├── Email
│   │   ├── Phone
│   │   └── Social Links
│   │
│   └── Contact Form
│       ├── Name Input
│       ├── Email Input
│       ├── Message Textarea
│       └── Submit Button
│
└── Footer.tsx                    [Footer]
    ├── Copyright
    └── Tech Stack Credits
```

## 🎨 Component Features

### Navbar
```typescript
Features:
- Sticky positioning
- Scroll-based background change
- Smooth scroll navigation
- Mobile responsive menu
- Animated transitions

State:
- isOpen (mobile menu)
- scrolled (background change)
```

### Hero
```typescript
Features:
- Full viewport height
- Staggered animations
- Profile display
- CTA buttons
- Animated scroll indicator

Animations:
- Scale in (profile)
- Fade + slide up (text)
- Bounce (scroll indicator)
```

### About
```typescript
Features:
- Glassmorphism card
- Scroll-triggered animation
- Responsive text sizing

Animation:
- Fade + slide up on scroll
```

### Skills
```typescript
Features:
- Categorized skills
- Icon integration
- Grid layout
- Hover effects

Data Structure:
skillCategories = [
  {
    title: string,
    skills: [{ name: string, icon: IconType }]
  }
]
```

### Projects
```typescript
Features:
- Interactive cards
- Hover lift effect
- Tech stack tags
- External links
- Expandable (add more projects)

Data Structure:
projects = [
  {
    title: string,
    subtitle: string,
    description: string,
    features: string[],
    tech: string[],
    github: string,
    demo: string
  }
]
```

### Experience
```typescript
Features:
- Timeline layout
- Icon badges
- Expandable list

Data Structure:
experiences = [
  {
    role: string,
    organization: string,
    period: string,
    responsibilities: string[]
  }
]
```

### Education
```typescript
Features:
- Academic details
- GPA display
- Coursework list
- Icon badge

Data:
- Degree & specialization
- University & location
- Duration & GPA
- Relevant courses
```

### Achievements
```typescript
Features:
- Grid layout
- Icon badges
- Hover scale effect
- Gradient backgrounds

Data Structure:
achievements = [
  {
    title: string,
    description: string,
    icon: IconType
  }
]
```

### Certifications
```typescript
Features:
- List layout
- Icon badges
- Hover effects

Data Structure:
certifications = [
  {
    title: string,
    issuer: string,
    year: string
  }
]
```

### GitHub
```typescript
Features:
- Contribution graph (external)
- Stats display
- Profile link

Stats:
- Repositories count
- Contributions count
- Projects count
```

### Contact
```typescript
Features:
- Two-column layout
- Contact information cards
- Interactive form
- Form validation
- Social links

State:
formData = {
  name: string,
  email: string,
  message: string
}
```

### Footer
```typescript
Features:
- Copyright notice
- Tech stack credits
- Centered layout
```

## 🔄 Data Flow

```
User Interaction
      ↓
Component State Update
      ↓
Re-render Component
      ↓
Animation Trigger (Framer Motion)
      ↓
Visual Feedback
```

## 🎭 Animation System

```
Framer Motion Hooks:
├── motion.div          - Animated containers
├── useInView          - Scroll-triggered animations
├── initial            - Starting state
├── animate            - End state
├── transition         - Animation config
└── whileHover         - Hover animations
```

## 📱 Responsive Breakpoints

```
Mobile:    < 768px    (sm)
Tablet:    768-1024px (md)
Desktop:   > 1024px   (lg, xl)

TailwindCSS Classes:
- Default: Mobile first
- md:      Tablet and up
- lg:      Desktop and up
```

## 🎨 Styling System

```
TailwindCSS Utilities
├── Layout:     flex, grid, container
├── Spacing:    p-*, m-*, gap-*
├── Colors:     bg-*, text-*, border-*
├── Effects:    glass, gradient-text
└── Responsive: sm:*, md:*, lg:*

Custom Classes (globals.css):
├── .glass              - Glassmorphism effect
├── .gradient-text      - Gradient text effect
└── Scrollbar styles    - Custom scrollbar
```

## 🔧 Configuration Files

```
next.config.js
├── output: 'export'           - Static site generation
└── images.unoptimized: true   - Image optimization

tailwind.config.js
├── Custom colors              - Brand colors
├── Custom fonts               - Typography
└── Custom animations          - Animation keyframes

tsconfig.json
├── TypeScript settings        - Type checking
└── Path aliases               - Import shortcuts
```

## 📦 Dependencies

```
Production:
├── react              - UI library
├── react-dom          - React renderer
├── next               - React framework
├── framer-motion      - Animations
└── react-icons        - Icon library

Development:
├── typescript         - Type safety
├── tailwindcss        - Styling
├── postcss            - CSS processing
├── autoprefixer       - CSS prefixes
└── eslint             - Code linting
```

## 🚀 Build Process

```
Development:
npm run dev
    ↓
Next.js Dev Server
    ↓
Hot Module Replacement
    ↓
Live Preview

Production:
npm run build
    ↓
Next.js Build
    ↓
Static Site Generation
    ↓
Optimized Output (out/)
    ↓
Ready for Deployment
```

## 📊 Component Complexity

```
Simple (Easy to modify):
├── Footer.tsx          ⭐
├── Navbar.tsx          ⭐⭐
└── About.tsx           ⭐⭐

Medium (Moderate):
├── Hero.tsx            ⭐⭐⭐
├── Education.tsx       ⭐⭐⭐
├── Experience.tsx      ⭐⭐⭐
├── Achievements.tsx    ⭐⭐⭐
└── Certifications.tsx  ⭐⭐⭐

Complex (Advanced):
├── Skills.tsx          ⭐⭐⭐⭐
├── Projects.tsx        ⭐⭐⭐⭐
├── Contact.tsx         ⭐⭐⭐⭐
└── GitHub.tsx          ⭐⭐⭐⭐
```

## 🎯 Customization Priority

```
High Priority (Must customize):
1. Hero.tsx           - Personal info
2. About.tsx          - Bio
3. Contact.tsx        - Contact details
4. Projects.tsx       - Your projects

Medium Priority (Should customize):
5. Skills.tsx         - Your skills
6. Experience.tsx     - Work history
7. Education.tsx      - Academic background

Low Priority (Optional):
8. Achievements.tsx   - Accomplishments
9. Certifications.tsx - Certificates
10. GitHub.tsx        - GitHub stats
```

---

**Use this map to understand and navigate the codebase efficiently!**
