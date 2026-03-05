# Customization Guide

Complete guide to customize your portfolio website.

## 🎨 Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#0f172a',    // Main background color
  accent: '#38bdf8',     // Primary accent (cyan)
  secondary: '#6366f1',  // Secondary accent (indigo)
  textColor: '#e2e8f0',  // Text color
}
```

**Popular Color Schemes:**

**Cyberpunk:**
```javascript
primary: '#0a0e27',
accent: '#00ff9f',
secondary: '#ff0080',
textColor: '#e0e0e0',
```

**Sunset:**
```javascript
primary: '#1a1a2e',
accent: '#ff6b6b',
secondary: '#ffd93d',
textColor: '#f0f0f0',
```

**Ocean:**
```javascript
primary: '#0d1b2a',
accent: '#00b4d8',
secondary: '#90e0ef',
textColor: '#e0fbfc',
```

---

## 👤 Personal Information

### Hero Section
File: `components/Hero.tsx`

```typescript
// Update name
<h1>Your Name</h1>

// Update title
<h2>Your Title | Your Role</h2>

// Update tagline
<p>Your professional tagline here</p>

// Update links
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourprofile"
```

### About Section
File: `components/About.tsx`

Replace the entire description with your bio.

---

## 💼 Skills

File: `components/Skills.tsx`

**Add a new skill category:**
```typescript
{
  title: 'Your Category',
  skills: [
    { name: 'Skill 1', icon: SiIcon1 },
    { name: 'Skill 2', icon: SiIcon2 },
  ],
}
```

**Import icons:**
```typescript
import { SiIcon1, SiIcon2 } from 'react-icons/si'
```

Find icons at: [react-icons.github.io](https://react-icons.github.io/react-icons/)

---

## 🚀 Projects

File: `components/Projects.tsx`

**Add a new project:**
```typescript
{
  title: 'Project Name',
  subtitle: 'Project Subtitle',
  description: 'Detailed description...',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ],
  tech: ['Tech1', 'Tech2', 'Tech3'],
  github: 'https://github.com/user/repo',
  demo: 'https://demo-link.com',
}
```

**Remove a project:**
Delete the entire project object from the array.

---

## 💼 Experience

File: `components/Experience.tsx`

**Add new experience:**
```typescript
{
  role: 'Your Role',
  organization: 'Company Name',
  period: 'Start - End',
  responsibilities: [
    'Responsibility 1',
    'Responsibility 2',
  ],
}
```

---

## 🎓 Education

File: `components/Education.tsx`

Update the education details:
```typescript
<h3>Your Degree</h3>
<p>Your University</p>
<p>Location | Years</p>
<p>GPA: X.XX / X.XX</p>
```

**Add coursework:**
```typescript
[
  'Course 1',
  'Course 2',
  'Course 3',
]
```

---

## 🏆 Achievements

File: `components/Achievements.tsx`

**Add achievement:**
```typescript
{
  title: 'Achievement Title',
  description: 'Achievement description',
  icon: FaTrophy, // or FaMedal, FaAward
}
```

---

## 📜 Certifications

File: `components/Certifications.tsx`

**Add certification:**
```typescript
{
  title: 'Certification Name',
  issuer: 'Issuing Organization',
  year: '2024',
}
```

---

## 📧 Contact Information

File: `components/Contact.tsx`

```typescript
// Update email
href="mailto:your.email@example.com"

// Update phone
href="tel:+1234567890"

// Update social links
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourprofile"
```

---

## 🎭 Animations

### Speed
File: `components/[Component].tsx`

```typescript
// Slower animation
transition={{ duration: 1.2 }}

// Faster animation
transition={{ duration: 0.3 }}
```

### Delay
```typescript
transition={{ delay: 0.5 }}
```

### Animation Type
```typescript
// Fade in
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

// Slide up
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}

// Scale
initial={{ scale: 0 }}
animate={{ scale: 1 }}
```

---

## 🖼️ Profile Image

### Option 1: Use Initials (Current)
File: `components/Hero.tsx`

```typescript
<div className="text-6xl font-bold gradient-text">
  YI  {/* Your Initials */}
</div>
```

### Option 2: Use Image
```typescript
<img 
  src="/profile.jpg" 
  alt="Your Name"
  className="w-full h-full rounded-full object-cover"
/>
```

Place image in `public/profile.jpg`

---

## 📄 Resume

1. Add your resume PDF to `public/resume.pdf`
2. Update link in `components/Hero.tsx`:
   ```typescript
   <a href="/resume.pdf" download>
   ```

---

## 🔤 Fonts

File: `tailwind.config.js`

**Change fonts:**
```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
  heading: ['Your Heading Font', 'sans-serif'],
}
```

**Import fonts in `app/globals.css`:**
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

---

## 📱 Navigation

File: `components/Navbar.tsx`

**Add/remove nav items:**
```typescript
const navItems = ['About', 'Skills', 'Projects', 'Contact']
```

**Change logo:**
```typescript
<motion.a href="#hero" className="...">
  Your Logo
</motion.a>
```

---

## 🌐 SEO & Metadata

File: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your description',
  keywords: 'your, keywords, here',
  authors: [{ name: 'Your Name' }],
}
```

---

## 🎨 Background Effects

File: `app/globals.css`

**Add gradient background:**
```css
body {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}
```

**Add animated gradient:**
```css
body {
  background: linear-gradient(135deg, #0f172a, #1e293b, #0f172a);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

---

## 🔧 Advanced Customization

### Add New Section

1. Create component: `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to page:
   ```typescript
   <NewSection />
   ```

### Modify Layout

File: `app/page.tsx`

Reorder sections by changing component order.

### Add Particles Background

```bash
npm install react-tsparticles
```

Create `components/ParticlesBackground.tsx` and add to layout.

---

## 📊 Analytics

### Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:
   ```typescript
   <Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
   ```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

<Analytics />
```

---

## 🎯 Tips

- Test changes locally before deploying
- Keep backups of original files
- Use consistent spacing and formatting
- Optimize images before adding
- Test on multiple devices
- Keep content concise and impactful

---

**Need help? Check the README.md or open an issue on GitHub!**
