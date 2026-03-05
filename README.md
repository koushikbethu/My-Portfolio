# Koushik Bethu - Portfolio Website

A modern, responsive portfolio website built with Next.js, TailwindCSS, and Framer Motion. Features a dark developer aesthetic with smooth animations and glassmorphism effects.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)

## 🚀 Features

- ✨ Modern, minimalistic design with dark theme
- 🎨 Glassmorphism effects and smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Optimized performance with Next.js 14
- 🎭 Framer Motion animations
- 🎯 SEO optimized
- 📧 Contact form integration ready
- 🌐 GitHub Pages / Vercel / Netlify deployment ready

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (React 18)
- **Styling:** TailwindCSS 3.4
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Icons:** React Icons
- **Deployment:** Vercel / GitHub Pages / Netlify

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Experience.tsx      # Work experience
│   ├── Education.tsx       # Education details
│   ├── Achievements.tsx    # Achievements
│   ├── Certifications.tsx  # Certifications
│   ├── GitHub.tsx          # GitHub activity
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/koushikbethu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

**Or use Vercel CLI:**
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `out` folder to Netlify:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=out
   ```

### Deploy to GitHub Pages

1. **Update `next.config.js`** (if using a custom domain):
   ```javascript
   basePath: '/your-repo-name'
   ```

2. **Add deployment script to `package.json`**:
   ```json
   "scripts": {
     "deploy": "next build && next export && touch out/.nojekyll && git add out/ && git commit -m 'Deploy' && git subtree push --prefix out origin gh-pages"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages** in repository settings (use `gh-pages` branch)

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0f172a',    // Background
  accent: '#38bdf8',     // Accent color
  secondary: '#6366f1',  // Secondary accent
  textColor: '#e2e8f0',  // Text color
}
```

### Content

Update content in respective component files:
- Personal info: `components/Hero.tsx`, `components/About.tsx`
- Skills: `components/Skills.tsx`
- Projects: `components/Projects.tsx`
- Experience: `components/Experience.tsx`
- Education: `components/Education.tsx`

### Resume

Place your resume PDF in the `public` folder as `resume.pdf`

## 📧 Contact Form Integration

To enable the contact form, integrate with:
- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- [Web3Forms](https://web3forms.com/)

Update the `handleSubmit` function in `components/Contact.tsx`

## 🔧 Environment Variables

Create a `.env.local` file for sensitive data:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimization

- Static site generation (SSG)
- Image optimization
- Code splitting
- Lazy loading
- Minified CSS/JS

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Koushik Bethu**
- GitHub: [@koushikbethu](https://github.com/koushikbethu)
- LinkedIn: [Koushik Bethu](https://www.linkedin.com/in/koushik-bethu-38b7292b8/)
- Email: koushik.bethu25@gmail.com

## 🙏 Acknowledgments

- Design inspiration from top Silicon Valley engineer portfolios
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ Star this repo if you find it helpful!
