# Quick Start Guide

Get your portfolio running in 5 minutes!

## ⚡ Installation

```bash
# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Essential Customizations

### 1. Update Personal Info (2 minutes)

**File: `components/Hero.tsx`**
- Line 25: Change name
- Line 33: Update title
- Line 41: Modify tagline
- Lines 52-72: Update GitHub, LinkedIn, Resume links

### 2. Update About Section (1 minute)

**File: `components/About.tsx`**
- Lines 23-35: Replace with your bio

### 3. Update Contact Info (1 minute)

**File: `components/Contact.tsx`**
- Line 48: Update email
- Line 61: Update phone number
- Lines 76-92: Update social links

### 4. Add Your Resume (30 seconds)

Place your `resume.pdf` in the `public/` folder.

## 🚀 Deploy (1 minute)

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main
```
Enable GitHub Pages in repository settings.

## ✅ You're Done!

Your portfolio is now live and ready to impress recruiters!

## 📝 Next Steps

- [ ] Customize colors in `tailwind.config.js`
- [ ] Add your projects in `components/Projects.tsx`
- [ ] Update skills in `components/Skills.tsx`
- [ ] Add experience in `components/Experience.tsx`
- [ ] Configure custom domain

## 📚 Full Documentation

- [README.md](README.md) - Complete documentation
- [CUSTOMIZATION.md](CUSTOMIZATION.md) - Detailed customization guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment instructions

## 🆘 Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Need help?** Open an issue on GitHub!

---

**Happy coding! 🎉**
