# Deployment Guide

This guide covers deployment to Vercel, Netlify, and GitHub Pages.

## 🚀 Quick Deploy

### Vercel (Recommended - Easiest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Next.js - click "Deploy"
6. Done! Your site is live

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

## 📦 Netlify Deployment

### Method 1: Netlify UI

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `out` folder
4. Your site is live!

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=out
```

### Method 3: Continuous Deployment

1. Push code to GitHub
2. Connect repository in Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy!

---

## 🐙 GitHub Pages Deployment

### Prerequisites
- GitHub repository
- GitHub Pages enabled in repository settings

### Method 1: GitHub Actions (Automated)

The `.github/workflows/deploy.yml` file is already configured.

**Steps:**
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Source: Select "GitHub Actions"
4. Push to main branch - auto-deploys!

### Method 2: Manual Deployment

1. **Update `next.config.js`** if using repo name in URL:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
     basePath: '/your-repo-name', // Add this line
   }
   ```

2. **Build and export:**
   ```bash
   npm run build
   ```

3. **Deploy to gh-pages branch:**
   ```bash
   # Install gh-pages
   npm install -g gh-pages

   # Deploy
   gh-pages -d out
   ```

4. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / `root`
   - Save

5. **Access your site:**
   - `https://yourusername.github.io/repo-name`

### Method 3: Using Git Subtree

```bash
# Build
npm run build

# Add .nojekyll to prevent Jekyll processing
touch out/.nojekyll

# Deploy
git add out/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

---

## 🔧 Custom Domain Setup

### Vercel
1. Project Settings → Domains
2. Add domain
3. Update DNS:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Netlify
1. Site Settings → Domain Management
2. Add custom domain
3. Update DNS:
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

### GitHub Pages
1. Add `CNAME` file to `public` folder:
   ```
   yourdomain.com
   ```
2. Update DNS:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

---

## 🌍 Environment Variables

For production deployments with contact form:

### Vercel
```bash
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

### Netlify
Site Settings → Environment Variables → Add variables

### GitHub Pages
Use GitHub Secrets in repository settings

---

## ✅ Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All sections visible
- [ ] Links work (GitHub, LinkedIn)
- [ ] Contact form functional
- [ ] Resume downloads
- [ ] Mobile responsive
- [ ] Fast load times
- [ ] SEO meta tags present
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Images Not Loading
- Ensure `images.unoptimized: true` in `next.config.js`
- Check image paths are correct

### 404 on Refresh (GitHub Pages)
- Add `.nojekyll` file to `out` folder
- Use hash routing or configure 404.html

### Styles Not Applied
- Check TailwindCSS config
- Verify `globals.css` is imported
- Clear browser cache

---

## 📊 Performance Optimization

### Before Deployment
```bash
# Analyze bundle size
npm run build

# Check for unused dependencies
npx depcheck

# Optimize images
# Use WebP format, compress images
```

### After Deployment
- Test with [PageSpeed Insights](https://pagespeed.web.dev/)
- Check [GTmetrix](https://gtmetrix.com/)
- Verify [Lighthouse](https://developers.google.com/web/tools/lighthouse) scores

---

## 🔄 Continuous Deployment

All three platforms support automatic deployments:

**Vercel & Netlify:**
- Auto-deploy on push to main branch
- Preview deployments for PRs

**GitHub Pages:**
- Uses GitHub Actions workflow
- Auto-deploy on push to main

---

## 📞 Support

If you encounter issues:
1. Check deployment logs
2. Verify build succeeds locally
3. Review platform-specific documentation
4. Check GitHub Issues for similar problems

---

**Happy Deploying! 🚀**
