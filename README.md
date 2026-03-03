# My Portfolio Website 🚀

A modern, dark-themed developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features animated background, smooth scroll navigation, project showcase, and fully responsive design.

## 🎨 Features

- **Animated Meteor Background** - Canvas-based animated background on the hero section
- **Sticky Navigation** - Smart navbar with active section indicators and mobile hamburger menu
- **Dark Premium Theme** - Modern dark UI with subtle gradients and glass-morphism effects
- **Smooth Animations** - Framer Motion animations throughout with prefers-reduced-motion support
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Project Showcase** - Featured projects with detail pages
- **Skills Section** - Animated progress bars for different skill categories
- **Work Experience** - Timeline-style experience display
- **Education Section** - Education history with icons
- **Testimonials/Sponsors** - Client testimonials section
- **Contact Form** - Contact section with integrated form (ready for EmailJS/Formspree)
- **GitHub Contributions** - Ready for GitHub calendar integration
- **Social Links** - Quick access to all social profiles
- **Resume Download** - Download resume button (configure in data)

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Page routing
- **Lucide React & React Icons** - Icon libraries

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm/yarn

### Steps

```bash
# Navigate to project directory
cd "My Portfolio"

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## 📝 Customization Guide

All content is managed in a single data file. Edit `src/data/portfolio.js` to personalize the portfolio:

### 1. **Profile Information**

```javascript
profile: {
  name: "Your Name",
  designation: "Your Title",
  bio: "Your bio text",
  photo: "URL or path to your photo",
  resume: "/resume.pdf", // or null to disable download
  socials: [ /* your social links */ ]
}
```

### 2. **Adding Your Photo**

- Place image in `src/assets/` folder
- Update `profile.photo` path: `"/src/assets/photo.jpg"`
- **Or** use a URL to an online image (recommended for deployment)
- Image should be ~300x300px for best results

### 3. **Adding Resume**

- Place PDF in `public/` folder
- Update `profile.resume: "/resume.pdf"`
- Users can click "Download Resume" button to download

### 4. **Update Skills**

Edit the `skills` object with your expertise levels (0-100):

```javascript
skills: {
  frontend: [
    { name: "React", level: 95 },
    // Add more...
  ],
  backend: [ ... ],
  tools: [ ... ]
}
```

### 5. **Add/Edit Projects**

Add projects to the `projects` array:

```javascript
{
  id: 1,
  slug: "project-slug", // used in URL
  title: "Project Name",
  date: "2024",
  image: "image-url",
  description: "Short description",
  fullDescription: "Detailed description for detail page",
  technologies: ["React", "Node.js"],
  challenges: "What challenges you faced",
  improvements: "Future plans",
  liveUrl: "https://project-link.com",
  repoUrl: "https://github.com/user/repo",
}
```

### 6. **Update Social Links**

Edit the `socials` array with your profiles:

```javascript
socials: [
  { name: "GitHub", icon: "FiGithub", url: "https://github.com/yourname" },
  {
    name: "LinkedIn",
    icon: "FiLinkedin",
    url: "https://linkedin.com/in/yourname",
  },
  // ...
];
```

### 7. **Contact Information**

Update contact details:

```javascript
contact: {
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  whatsapp: "+1 (555) 123-4567",
  message: "Feel free to reach out..."
}
```

### 8. **Experience**

Add work experience to show your career:

```javascript
experience: [
  {
    id: 1,
    company: "Company Name",
    role: "Your Role",
    duration: "2023 - Present",
    icon: "🚀",
    description: "What you did",
  },
];
```

### 9. **Education**

Add education history:

```javascript
education: [
  {
    id: 1,
    degree: "Degree Name",
    institute: "Institute Name",
    year: "2019",
    icon: "🎓",
  },
];
```

### 10. **Testimonials**

Add client testimonials:

```javascript
testimonials: [
  {
    id: 1,
    name: "Client Name",
    handle: "@handle",
    avatar: "avatar-url",
    message: "Testimonial text",
  },
];
```

## 🚀 Deployment

### Netlify (Recommended)

```bash
# Build
npm run build

# Deploy to Netlify
# 1. Drag & drop the 'dist' folder to Netlify
# Or use: npm install -g netlify-cli && netlify deploy
```

### Vercel

```bash
npm install -g vercel
vercel
```

### GitHub Pages

1. Update `vite.config.js` with base path if needed
2. Run `npm run build`
3. Deploy `dist` folder to GitHub Pages

## 🎯 Features Ready to Implement

### Email Form Integration (TODO)

Currently, the contact form is frontend-only. To enable email sending:

**Option 1: EmailJS**

```bash
npm install @emailjs/browser
```

Then update `src/components/Contact.jsx` with EmailJS code.

**Option 2: Formspree**

- Visit [formspree.io](https://formspree.io)
- Create form and integrate endpoint

### GitHub Contributions Heatmap (TODO)

```bash
npm install react-github-calendar
```

Then add to a new section component.

## 🎨 Theming

The portfolio uses a dark theme by default. To modify colors:

1. Edit `tailwind.config.js` to change the color palette
2. The dark colors are defined under `theme.extend.colors.dark`
3. Update primary gradient: change `from-blue-400 to-cyan-400` in components

## ⚡ Performance

- **Lazy loaded images** - Images load on scroll
- **Optimized animations** - Respects prefers-reduced-motion
- **Code splitting** - React Router handles lazy loading
- **CSS optimization** - Tailwind purges unused styles in production
- **Vite builds** - Fast production builds with minification

Target Lighthouse scores:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔧 Development

### Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Testimonials.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── MeteorBackground.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── ProjectsPage.jsx
│   └── ProjectDetail.jsx
├── data/               # Data
│   └── portfolio.js
├── assets/             # Images and static files
├── App.jsx
├── main.jsx
└── index.css
```

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🐛 Troubleshooting

### Port 5173 already in use

```bash
npm run dev -- --port 3000
```

### Styles not loading

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images not loading

- Ensure images are in `src/assets/` folder
- Use relative paths: `/src/assets/image.jpg`
- Or use full URLs from CDN

## 📄 License

This project is open source under the MIT License. Feel free to fork, modify, and use for your own portfolio.

## 🤝 Support

For issues or questions:

1. Check the troubleshooting section
2. Review the customization guide
3. Ensure all dependencies are installed: `npm install`

## ✨ Credits

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Icons from [Lucide React](https://lucide.dev)
- Built with [Vite](https://vitejs.dev)

---

**Made with ❤️ | © 2024 Sharifur Rahman**
