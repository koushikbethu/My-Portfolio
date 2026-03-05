# Complete Setup Instructions

Follow these steps to get your portfolio up and running.

## 📋 Prerequisites

Before you begin, ensure you have:
- ✅ Node.js 18.x or higher ([Download](https://nodejs.org/))
- ✅ npm, yarn, or pnpm package manager
- ✅ Git ([Download](https://git-scm.com/))
- ✅ Code editor (VS Code recommended)
- ✅ GitHub account (for deployment)

### Check Your Setup
```bash
node --version    # Should be v18.x or higher
npm --version     # Should be 9.x or higher
git --version     # Should be 2.x or higher
```

---

## 🚀 Step 1: Installation

### Option A: Fresh Installation
```bash
# Navigate to the portfolio directory
cd d:\portfolio

# Install dependencies
npm install

# This will install:
# - Next.js 14
# - React 18
# - TailwindCSS 3.4
# - Framer Motion
# - TypeScript
# - React Icons
```

### Option B: Using Yarn
```bash
yarn install
```

### Option C: Using pnpm
```bash
pnpm install
```

---

## 🎨 Step 2: Customize Content

### 2.1 Update Personal Information

**File: `components/Hero.tsx`**

Find and replace:
```typescript
// Line 25 - Your name
Koushik Bethu → Your Name

// Line 33 - Your title
AI Engineer | Full Stack Developer → Your Title

// Line 41 - Your tagline
Building intelligent systems... → Your tagline

// Line 52 - GitHub URL
https://github.com/koushikbethu → your-github-url

// Line 61 - LinkedIn URL
https://www.linkedin.com/in/koushik-bethu-38b7292b8/ → your-linkedin-url
```

### 2.2 Update About Section

**File: `components/About.tsx`**

Replace lines 23-35 with your professional bio.

### 2.3 Update Skills

**File: `components/Skills.tsx`**

Modify the `skillCategories` array (starting line 11) to match your skills.

### 2.4 Update Projects

**File: `components/Projects.tsx`**

Edit the `projects` array (starting line 11) with your projects.

### 2.5 Update Experience

**File: `components/Experience.tsx`**

Modify the `experiences` array (starting line 11) with your work history.

### 2.6 Update Education

**File: `components/Education.tsx`**

Update your educational background (lines 20-50).

### 2.7 Update Contact Info

**File: `components/Contact.tsx`**

```typescript
// Line 48 - Email
koushik.bethu25@gmail.com → your-email@example.com

// Line 61 - Phone
+91 9408208855 → your-phone-number

// Lines 76-92 - Social links
Update GitHub and LinkedIn URLs
```

### 2.8 Add Your Resume

1. Place your resume PDF in the `public/` folder
2. Name it `resume.pdf`
3. Delete `resume-placeholder.txt`

---

## 🎨 Step 3: Customize Design (Optional)

### 3.1 Change Colors

**File: `tailwind.config.js`**

```javascript
colors: {
  primary: '#0f172a',    // Change background color
  accent: '#38bdf8',     // Change accent color
  secondary: '#6366f1',  // Change secondary color
  textColor: '#e2e8f0',  // Change text color
}
```

### 3.2 Change Fonts

**File: `app/globals.css`**

Update the Google Fonts import URL (line 4).

---

## 🧪 Step 4: Test Locally

```bash
# Start development server
npm run dev

# Server will start at http://localhost:3000
```

### Testing Checklist
- [ ] All sections load correctly
- [ ] Animations work smoothly
- [ ] Links open correctly
- [ ] Contact form displays
- [ ] Mobile responsive
- [ ] No console errors

### Test on Multiple Devices
- Desktop (1920x1080)
- Laptop (1366x768)
- Tablet (768x1024)
- Mobile (375x667)

---

## 🏗️ Step 5: Build for Production

```bash
# Create production build
npm run build

# This creates an optimized build in the 'out' folder
```

### Verify Build
```bash
# Test production build locally
npm start

# Or serve the static files
npx serve out
```

---

## 🌐 Step 6: Deploy

### Option A: Deploy to Vercel (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! Your site is live

3. **Or use Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

### Option B: Deploy to GitHub Pages

1. **Update repository name in `next.config.js`** (if needed):
   ```javascript
   basePath: '/your-repo-name'
   ```

2. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will auto-deploy on push

4. **Access your site:**
   - `https://yourusername.github.io/portfolio`

### Option C: Deploy to Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=out
   ```

---

## 🔧 Step 7: Post-Deployment

### 7.1 Verify Deployment
- [ ] Site loads correctly
- [ ] All sections visible
- [ ] Links work
- [ ] Images load
- [ ] Mobile responsive
- [ ] Fast load times

### 7.2 Test Performance
- Run [PageSpeed Insights](https://pagespeed.web.dev/)
- Target: 90+ score on all metrics

### 7.3 Setup Custom Domain (Optional)

**For Vercel:**
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records

**For GitHub Pages:**
1. Add `CNAME` file to `public/` folder with your domain
2. Update DNS records
3. Enable HTTPS in settings

**For Netlify:**
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

---

## 📊 Step 8: Add Analytics (Optional)

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Add to `app/layout.tsx`:
   ```typescript
   import Script from 'next/script'
   
   // In the return statement
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_MEASUREMENT_ID');
     `}
   </Script>
   ```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

// In the return statement
<Analytics />
```

---

## 🔐 Step 9: Setup Contact Form (Optional)

### Using EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create email service and template
3. Get your credentials

4. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```

5. Create `.env.local`:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. Update `components/Contact.tsx`:
   ```typescript
   import emailjs from '@emailjs/browser'
   
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault()
     
     emailjs.send(
       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
       formData,
       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
     ).then(() => {
       alert('Message sent successfully!')
       setFormData({ name: '', email: '', message: '' })
     })
   }
   ```

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Port Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Reinstall dependencies
npm install
```

### TypeScript Errors

```bash
# Check TypeScript
npx tsc --noEmit
```

### Styling Issues

```bash
# Rebuild Tailwind
npm run dev
# Clear browser cache
```

---

## 📚 Additional Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

### Learning Resources
- [Next.js Tutorial](https://nextjs.org/learn)
- [TailwindCSS Tutorial](https://tailwindcss.com/docs/installation)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)
- [GitHub Discussions](https://github.com/vercel/next.js/discussions)

---

## ✅ Final Checklist

Before going live:
- [ ] All personal information updated
- [ ] Resume PDF added
- [ ] Projects updated with correct links
- [ ] Contact information correct
- [ ] Tested on multiple devices
- [ ] No console errors
- [ ] Build succeeds
- [ ] Deployed successfully
- [ ] Custom domain configured (if applicable)
- [ ] Analytics setup (if desired)
- [ ] Contact form working (if configured)

---

## 🎉 Congratulations!

Your portfolio is now live! Share it with:
- Recruiters and hiring managers
- Your professional network
- On LinkedIn and Twitter
- In your resume and email signature

---

## 📞 Need Help?

- Check [README.md](README.md) for detailed documentation
- Review [CUSTOMIZATION.md](CUSTOMIZATION.md) for customization options
- See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment details
- Open an issue on GitHub for bugs
- Email: koushik.bethu25@gmail.com

**Good luck with your job search! 🚀**
