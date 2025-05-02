export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with the MERN stack. Includes product management, cart functionality, user authentication, and payment processing.",
    image:
      "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    // demoUrl: "https://example.com",
    // githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "cms-dashboard",
    title: "CMS Dashboard",
    description:
      "A content management system with a modern dashboard built with Laravel and Vue.js. Features include user management, content editing, and analytics.",
    image:
      "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
    tags: ["Laravel", "PHP", "Vue.js", "MySQL"],
    // demoUrl: "https://example.com",
    // githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "real-estate-app",
    title: "Real Estate Application",
    description:
      "A real estate listing application with property search, filtering, and user accounts. Built with Next.js and a headless CMS.",
    image:
      "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi"],
    // demoUrl: "https://example.com",
    // githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management System",
    description:
      "A collaborative task management system with real-time updates, team management, and project tracking.",
    image:
      "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
    tags: ["React", "Firebase", "Material UI"],
    // demoUrl: "https://example.com",
    // githubUrl: "https://github.com",
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description:
      "A modern blogging platform with markdown support, categories, and user authentication.",
    image:
      "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
    tags: ["Laravel", "Alpine.js", "Tailwind CSS", "MySQL"],
    // demoUrl: "https://example.com",
    // githubUrl: "https://github.com",
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    description:
      "An inventory management system for small businesses with barcode scanning, stock alerts, and reporting.",
    image:
      "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
    tags: ["PHP", "jQuery", "Bootstrap", "MySQL"],
    // demoUrl: "https://example.com",
    // githubUrl: "https://github.com",
  },
  {
    id: "Bosphorus-line",
    title: "Bosphorus line",
    description:
      "Bosphorus Line is a modern travel agency platform built with React, Laravel, Inertia.js, and Tailwind CSS, offering seamless and visually appealing user experiences for travel planning.",
    image:
      "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
    tags: ["React", "Laravel", "Inertia.js", "Tailwind CSS"],
    // demoUrl: "https://example.com",
    // githubUrl: "https://github.com",
  },
  {
    id: "Sbey",
    title: "Sbey",
    description:
      "Saby Media aims for professional, reliable reporting by analyzing events deeply and connecting overlooked details. Starting on social media, it plans to expand to radio and TV, filling gaps in today’s media.",
    image:
      "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
    tags: ["Next js", "Laravel", "Inertia.js", "Tailwind CSS"],
    // demoUrl: "https://example.com",
    // githubUrl: "https://github.com",
  },
  {
    id: "Sbey-Research",
    title: "Sbey Research",
    description:
      "SBEY Research is a burgeoning research center dedicated to fostering evidence-based policymaking and facilitating informed public discourse within the Kurdistan region.",
    image:
      "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
    tags: ["Next js", "Laravel", "Inertia.js", "Tailwind CSS"],
    // demoUrl: "https://example.com",
    // githubUrl: "https://github.com",
  },
  {
    id: "morall-Research",
    title: "Morall",
    description:
      "Morall is News website for Kurdistan region that provides news and information about the region.",
    image:
      "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
    tags: ["Next js", "Framer Motion", "Tailwind CSS"],
    // demoUrl: "https://example.com",
    // githubUrl: "https://github.com",
  },
];
