export const portfolio = {
  profile: {
    name: "Sharifur Rahman",
    designation: "Full Stack Developer & UI/UX Enthusiast",
    bio: "Crafting beautiful, performant web experiences. Passionate about React, Node.js, and modern web technologies.",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sharifur",
    resume: null, // Set to "/resume.pdf" to enable download
    socials: [
      { name: "GitHub", icon: "FiGithub", url: "https://github.com" },
      { name: "LinkedIn", icon: "FiLinkedin", url: "https://linkedin.com" },
      { name: "Twitter", icon: "FiTwitter", url: "https://twitter.com" },
      { name: "Email", icon: "FiMail", url: "mailto:hello@example.com" },
    ],
  },

  about: `I'm a passionate full-stack developer with 5+ years of experience building web applications. I specialize in React, Node.js, and cloud technologies. When I'm not coding, I enjoy contributing to open-source projects and sharing knowledge with the community.`,

  experience: [
    {
      id: 1,
      company: "Tech Startup Inc",
      role: "Senior Frontend Developer",
      duration: "2022 - Present",
      icon: "🚀",
      description: "Leading frontend development for 50+ features",
    },
    {
      id: 2,
      company: "Digital Solutions Co",
      role: "Full Stack Developer",
      duration: "2020 - 2022",
      icon: "💻",
      description: "Built scalable web applications",
    },
    {
      id: 3,
      company: "Web Agency Ltd",
      role: "Junior Developer",
      duration: "2019 - 2020",
      icon: "⚡",
      description: "Created responsive websites for clients",
    },
  ],

  skills: {
    frontend: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "Framer Motion", level: 80 },
      { name: "Vue.js", level: 75 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Python", level: 75 },
      { name: "Firebase", level: 85 },
    ],
    tools: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },

  projects: [
    {
      id: 1,
      slug: "realtime-chat-app",
      title: "Realtime Chat Application",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=300&fit=crop",
      description:
        "A real-time messaging app with user authentication, typing indicators, and message history.",
      fullDescription:
        "Built a full-featured real-time chat application using React, Socket.io, and Node.js. Features include user authentication with JWT, real-time messaging with typing indicators, message persistence, and a responsive UI.",
      technologies: [
        "React",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Tailwind CSS",
      ],
      challenges:
        "Implementing real-time synchronization across multiple clients. Handling connection drops gracefully.",
      improvements:
        "Add voice/video calling, End-to-end encryption, Message search functionality",
      liveUrl: "https://chat-app-demo.vercel.app",
      repoUrl: "https://github.com",
    },
    {
      id: 2,
      slug: "ecommerce-platform",
      title: "Full-Stack E-Commerce Platform",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      description:
        "A complete e-commerce solution with payment integration, inventory management, and admin dashboard.",
      fullDescription:
        "Developed a complete e-commerce platform with product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard for inventory control.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      challenges:
        "Implementing secure payment processing. Managing concurrent inventory updates.",
      improvements:
        "Add recommendation engine, Review system, Mobile app version",
      liveUrl: "https://ecommerce-demo.vercel.app",
      repoUrl: "https://github.com",
    },
    {
      id: 3,
      slug: "task-management-app",
      title: "Collaborative Task Management App",
      date: "2022",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      description:
        "A team collaboration tool for managing projects, tasks, and deadlines with real-time updates.",
      fullDescription:
        "Created a project management application with team collaboration features, real-time updates, drag-and-drop task management, and progress tracking.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      challenges:
        "Managing complex state with multiple users. Real-time updates without lag.",
      improvements:
        "Add calendar view, Gantt charts, Time tracking, Notifications",
      liveUrl: "https://taskapp-demo.vercel.app",
      repoUrl: "https://github.com",
    },
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institute: "State University",
      year: "2019",
      icon: "🎓",
    },
    {
      id: 2,
      degree: "Full Stack Web Development Bootcamp",
      institute: "TechAcademy",
      year: "2019",
      icon: "📚",
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "John Doe",
      handle: "@johndoe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      message:
        "Exceptional developer! Delivered the project on time with high quality code. Highly recommended!",
    },
    {
      id: 2,
      name: "Jane Smith",
      handle: "@janesmith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      message:
        "Great communication and problem-solving skills. Pleasure to work with on our React migration.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      handle: "@mikej",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      message:
        "Senior-level expertise at a reasonable rate. Transformed our app's performance significantly.",
    },
  ],

  contact: {
    email: "hello@example.com",
    phone: "+1 (555) 123-4567",
    whatsapp: "+1 (555) 123-4567",
    message:
      "Feel free to reach out for collaborations or just a friendly hello!",
  },
};
