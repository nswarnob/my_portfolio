<!-- My Portfolio - Project Customization Guide -->

# My Portfolio Website - Customization Instructions

## Quick Start

To personalize this portfolio with your own information, edit **`src/data/portfolio.js`** - this is the only file you need to modify for content changes.

## What to Change First

### 1. **Your Personal Information** (Required)

In `src/data/portfolio.js`, update the `profile` object:

```javascript
profile: {
  name: "Sharif Uddin Arnob",  // Change to your name
  designation: "Web Developer | Tech Enthusiast",  // e.g., "Full Stack Developer", "Frontend Engineer"
  bio: "",  // Update your biography
  photo: "https://drive.google.com/file/d/1kUktrEb1o72skJF5YRnj2rPHINFaIMH-/view?usp=drivesdk",  // Add your photo URL
  resume: "/resume.pdf",  // Set to null if no resume yet
  socials: [
    { name: "GitHub", icon: "FiGithub", url: "https://github.com/nswarnob" },
    { name: "LinkedIn", icon: "FiLinkedin", url: "https://linkedin.com/in/nswarnob" },
    // ... update all social links
  ]
}
```

### 2. **Add Your Projects**

Replace the sample projects with your own in the `projects` array:

```javascript
projects: [
  {
    id: 1,
    slug: "my-first-project", // URL-friendly name
    title: "Project Name",
    date: "2024",
    image: "https://image-url.com/project.jpg",
    description: "Short description (2-3 lines)",
    fullDescription: "Detailed description for the project detail page",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    challenges: "What problems did you solve?",
    improvements: "What would you add next?",
    liveUrl: "https://project-live-link.com",
    repoUrl: "https://github.com/username/repo",
  },
  // Add more projects...
];
```

### 3. **Update Your Skills**

Edit the `skills` object with your expertise levels (0-100):

```javascript
skills: {
  frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    // ... add/remove skills
  ],
  backend: [
    { name: "Node.js", level: 88 },
    // ...
  ],
  tools: [
    { name: "Git", level: 95 },
    // ...
  ]
}
```

### 4. **Add Work Experience**

Update the `experience` array:

```javascript
experience: [
  {
    id: 1,
    company: "Company Name",
    role: "Job Title",
    duration: "2023 - Present",
    icon: "🚀", // Any emoji
    description: "Brief description of your role",
  },
  // Add more experiences...
];
```

### 5. **(Optional) Add Education**

Update the `education` array if desired:

```javascript
education: [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institute: "University Name",
    year: "2020",
    icon: "🎓",
  },
];
```

### 6. **(Optional) Add Testimonials**

Add client testimonials:

```javascript
testimonials: [
  {
    id: 1,
    name: "Client Name",
    handle: "@handle",
    avatar: "https://avatar-url.com/avatar.jpg",
    message: "Great experience working with you!",
  },
];
```

### 7. **Update Contact Information**

Edit the `contact` object:

```javascript
contact: {
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  whatsapp: "+1 (555) 123-4567",
  message: "Feel free to reach out for collaborations!"
}
```

## Adding Your Photo

### Option 1: Use an Online Image (Recommended)

- Upload your photo to a service like Imgur, Cloudinary, or your own hosting
- Use the full URL in `profile.photo`

### Option 2: Store Locally

1. Place your image in `/public/` folder (e.g., `/public/my-photo.jpg`)
2. Update `profile.photo: "/my-photo.jpg"`

## Adding Your Resume

1. Place your resume PDF in `/public/` folder (e.g., `/public/resume.pdf`)
2. Update `profile.resume: "/resume.pdf"`
3. The "Download Resume" button will appear automatically

To disable the resume button, set: `profile.resume: null`

## Adding Your Own Images to Projects

For project images:

1. Use image URLs from Unsplash, Pexels, or Pixabay for quick setup
2. Or upload images to `/public/` and reference them

Example:

```javascript
image: "https://unsplash.com/photos/random-image-url";
// OR
image: "/project-screenshot.jpg";
```

## Connecting Email Form (Next Step)

The contact form is currently a frontend placeholder. To enable emails:

### Option 1: EmailJS (Recommended)

```bash
npm install @emailjs/browser
```

Then add to `src/components/Contact.jsx`:

```javascript
import emailjs from "@emailjs/browser";

// Initialize (get keys from emailjs.com)
emailjs.init("YOUR_PUBLIC_KEY");

// Modify handleSubmit to:
const handleSubmit = (e) => {
  e.preventDefault();
  emailjs
    .send("SERVICE_ID", "TEMPLATE_ID", formData)
    .then((response) => console.log("Email sent!", response))
    .catch((error) => console.error("Error:", error));
};
```

### Option 2: Formspree

1. Visit [formspree.io](https://formspree.io)
2. Create a form and get the endpoint
3. Update the form's action in `Contact.jsx`

## Deploying Your Portfolio

### To Vercel (Easiest)

```bash
npm install -g vercel
vercel
```

### To Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to netlify.com
```

### To GitHub Pages

1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in repository settings
4. Deploy the `dist` folder

## Customizing Colors and Theme

The portfolio uses a dark theme with blue/cyan accents. To change:

1. Open `tailwind.config.js`
2. Look for `theme.extend.colors.dark`
3. Modify color values or gradients throughout components
4. Change `from-blue-400 to-cyan-400` gradients to your preferred colors

## Common Customizations

### Change Hero Background

The hero uses a meteor animation. To disable it:

- Open `src/components/Hero.jsx`
- Remove or comment out the `<MeteorBackground />` component

### Change Navbar Title

In `src/components/Navbar.jsx`, change the `SR` text to your initials or name.

### Modify Animations Speed

In individual components, adjust Framer Motion `transition={{ duration: 0.5 }}` values.

### Change Social Media List

Remove or add social links in `profile.socials` array in `portfolio.js`.

## Need Help?

- **Styles not working?** Run `npm install` and `npm run dev` again
- **Images not showing?** Use full URLs instead of local paths
- **Building errors?** Check that all dependencies installed: `npm install`

## Project Structure Reference

```
src/
├── data/
│   └── portfolio.js          ← EDIT THIS FILE FOR CONTENT
├── components/
│   ├── Navbar.jsx            ← Navigation bar
│   ├── Hero.jsx              ← Top section with name
│   ├── About.jsx             ← About you section
│   ├── Experience.jsx        ← Work history
│   ├── Skills.jsx            ← Skills display
│   ├── Projects.jsx          ← Featured projects
│   ├── Contact.jsx           ← Contact form
│   └── ... other components
├── pages/
│   ├── Home.jsx              ← Main page
│   ├── ProjectsPage.jsx      ← All projects view
│   └── ProjectDetail.jsx     ← Individual project page
└── App.jsx
```

---

**Last Updated:** March 2024
**For Issues:** Check README.md or edit src/data/portfolio.js
