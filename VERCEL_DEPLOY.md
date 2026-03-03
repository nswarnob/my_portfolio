# Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

Your portfolio is ready for Vercel deployment! Here's what's configured:

### Files Created:
- **vercel.json** - Vercel build configuration with SPA routing
- **.vercelignore** - Specifies files to exclude from deployment

### Build Status:
```
✓ Production build successful
✓ Bundle size optimized
✓ All dependencies included
✓ SPA routing configured
```

---

## 🚀 Deploy to Vercel (3 Steps)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Prepare portfolio for Vercel deployment"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your "my_portfolio" repository
5. Click "Import"

### Step 3: Configure & Deploy
- **Framework**: Vite (auto-detected)
- **Build Command**: `npm run build` (pre-configured)
- **Output Directory**: `dist` (pre-configured)
- **Install Command**: `npm ci` (default)

Click "Deploy" and wait ~2-3 minutes!

---

## 🌐 After Deployment

### Get Your Live URL:
- Vercel will provide a live URL automatically
- Example: `https://my-portfolio-xxx.vercel.app`

### Custom Domain
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain (e.g., `nswarnob.dev`)

---

## 🔧 Environment Setup (Optional)

If you add environment variables later:

1. Create `.env.local` locally:
   ```bash
   VITE_API_URL=https://api.example.com
   ```

2. In Vercel Dashboard:
   - Go to Settings → Environment Variables
   - Add the same variables

---

## 📊 Build Details

**Production Build Output:**
```
dist/index.html               0.46 kB (gzip: 0.30 kB)
dist/assets/index.css        17.25 kB (gzip: 4.01 kB)
dist/assets/index.js         16.71 kB (gzip: 6.90 kB)
dist/assets/Tooltip.js       46.89 kB (gzip: 17.27 kB)
dist/assets/react.js        378.47 kB (gzip: 122.06 kB)

Total Gzip Size: ~150 KB ✓ (Good performance)
```

---

## ✨ Features Ready for Production

✅ React 19 + Vite (fast build)
✅ Tailwind CSS (optimized)
✅ Framer Motion (animations preserved)
✅ GitHub Calendar (API calls from client)
✅ React Router (SPA routing)
✅ Dark theme with meteor background
✅ Animated borders on cards
✅ Responsive design (mobile-friendly)
✅ SEO metadata (can add later)

---

## 🛑 Known Limitations

1. **GitHub Calendar** - Renders client-side from your public profile
2. **Images** - Uses external URLs from Unsplash (update in data file as needed)
3. **Contact Form** - Currently UI-only (implement EmailJS or similar)

---

## 📝 Update Portfolio After Deploy

To update content after deployment:

1. Edit `src/data/portfolioData.js`
2. Push to GitHub: `git push origin main`
3. Vercel auto-redeploys automatically!

---

## 🆘 Troubleshooting

### "Build Failed" Error
- Check console logs in Vercel Dashboard
- Ensure all dependencies are in package.json
- Verify `npm run build` works locally

### Blank Page on Load
- Check browser console (F12) for errors
- Verify API calls (GitHub Calendar might take time)
- Clear browser cache

### Meteor Background Not Showing
- Browser might have disabled Canvas
- Check browser console for canvas errors
- Background degrades gracefully

---

## 💡 Next Steps (Optional)

1. **Add Analytics**: Integrate Vercel Analytics
2. **Add SEO**: Update `index.html` meta tags
3. **Add Forms**: Integrate EmailJS for contact form
4. **Add Blog**: Create a blog section with MDX
5. **Add CMS**: Use Sanity, Strapi, or similar

---

**Ready to deploy? Push to GitHub and connect to Vercel!** 🎉
