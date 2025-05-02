export interface Skill {
  name: string
  level: number // 1-5
  category: "frontend" | "backend" | "database" | "devops" | "other"
  icon?: string
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    level: 5,
    category: "frontend",
  },
  {
    name: "Next.js",
    level: 5,
    category: "frontend",
  },
  {
    name: "TypeScript",
    level: 4,
    category: "frontend",
  },
  {
    name: "JavaScript",
    level: 5,
    category: "frontend",
  },
  {
    name: "HTML/CSS",
    level: 5,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    level: 4,
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    level: 4,
    category: "backend",
  },
  {
    name: "Express",
    level: 4,
    category: "backend",
  },
  {
    name: "PHP",
    level: 5,
    category: "backend",
  },
  {
    name: "Laravel",
    level: 5,
    category: "backend",
  },

  // Database
  {
    name: "MongoDB",
    level: 4,
    category: "database",
  },
  {
    name: "MySQL",
    level: 5,
    category: "database",
  },
  {
    name: "PostgreSQL",
    level: 4,
    category: "database",
  },

  // DevOps
  {
    name: "Docker",
    level: 4,
    category: "devops",
  },
  {
    name: "Kubernetes",
    level: 3,
    category: "devops",
  },
  {
    name: "CI/CD",
    level: 4,
    category: "devops",
  },
  {
    name: "AWS",
    level: 4,
    category: "devops",
  },

  // Other
  {
    name: "Git",
    level: 5,
    category: "other",
  },
  {
    name: "RESTful APIs",
    level: 5,
    category: "other",
  },
  {
    name: "GraphQL",
    level: 3,
    category: "other",
  },
]
