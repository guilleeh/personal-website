import { Project } from "@/types/project";

export const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = {
  github: "https://github.com/guilleeh",
  linkedin: "https://www.linkedin.com/in/guillermo-hernandez/",
  upwork: "https://www.upwork.com/freelancers/guilleeh",
} as const;

export const aboutMe = {
  title: "Senior Full-Stack Engineer & AI Solutions Developer",
  description: `I'm a UC Irvine Computer Science graduate with over 5 years of experience building high-impact web applications. I specialize in architecting scalable solutions using modern technologies and integrating AI capabilities. My expertise spans from developing warehouse management systems to creating AI-powered chatbots, always focusing on delivering robust, user-centric solutions that drive business value.`,
};

export const education = {
  school: "University of California, Irvine",
  degree: "Bachelor of Science, Computer Science",
  graduationDate: "June 2020",
};

export const skills = {
  programming: ["TypeScript", "Python", "Go"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
  tools: ["Git/Github", "Visual Studio", "Vim", "Cursor"],
  frameworks: ["Next.js", "Remix", "Django", "FastAPI", "Fiber"],
  cloud: ["AWS", "GCP"],
  other: ["Auth0", "Stripe", "LangChain", "OpenAI", "CI/CD"],
};

export const experiences = [
  {
    role: "Full-Stack Web Developer",
    company: "All-In Engineering Consulting",
    period: "Sep 2023 - Dec 2024",
    type: "Contractor",
    description:
      "Led development of enterprise solutions including a Warehouse Management System and AI-powered chatbot. Specialized in building scalable applications using Next.js, Auth0, and modern AI technologies.",
    achievements: [
      "Architected and implemented a complete WMS solution using Next.js, Auth0, and Tailwind",
      "Developed a retrieval-augmented chatbot using Next.js, LangChain, OpenAI, and Qdrant for a global research firm",
      "Scaled a 3PL warehouse automation tool into a multi-tenant SaaS platform with Auth0 and Stripe integration",
    ],
  },
  {
    role: "Independent Web Developer",
    company: "Upwork",
    period: "Oct 2020 - Present",
    type: "Contractor",
    description:
      "Successfully delivered multiple high-impact projects for various clients, specializing in full-stack development with modern technologies.",
    achievements: [
      "Built React components with Storybook and GraphQL integration for ABLE non-profit",
      "Developed a full-stack Remix application with authentication and PostgreSQL",
      "Created accounting system integrations using TypeScript and Rutter for QuickBooks and Sage",
    ],
  },
  {
    role: "Full-Stack Web Developer",
    company: "SandboxTogether",
    period: "Aug 2021 - Mar 2023",
    type: "Contractor",
    description:
      "Led development of a SaaS platform for manager/employee interactions, focusing on scalable architecture and analytics.",
    achievements: [
      "Architected and deployed a Next.js application with Python backend using PostgreSQL and AWS",
      "Built comprehensive admin dashboard for user and company analytics",
      "Implemented CI/CD pipelines with Pytest/Cypress testing",
    ],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Digz",
    period: "Sep 2022 - Jul 2023",
    type: "Contractor",
    description:
      "Modernized legacy application and improved infrastructure scalability.",
    achievements: [
      "Migrated React app to Next.js with TailwindCSS modernization",
      "Re-architected backend infrastructure using AWS Amplify and Elastic Beanstalk",
      "Enhanced mobile experience with responsive design and new features",
    ],
  },
];

export const projects: Project[] = [
  // {
  //   title: "AI-Powered Research Assistant",
  //   description:
  //     "Developed a retrieval-augmented chatbot for a global research firm, enhancing data accessibility and creating new revenue streams.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   tags: ["Next.js", "LangChain", "OpenAI", "Qdrant"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  {
    title: "HelloDock | Efficient BOL Document Management",
    description:
      "Enterprise WMS solution with multi-tenant architecture, authentication, and payment integration.",
    image: "/img/projects/hellodock.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Golang",
      "AWS",
      "ExpressJS",
      "React",
    ],
    liveUrl: "https://hellodock.com",
  },
  {
    title: "SandboxTogether",
    description:
      "SaaS platform for manager/employee interactions with comprehensive analytics and reporting.",
    image: "/img/projects/sandbox.jpg",
    liveUrl: "https://sandboxtogether.com",
    tags: [
      "Next.js",
      "Python",
      "PostgreSQL",
      "AWS",
      "FastAPI",
      "TypeScript",
      "React",
    ],
  },
  // add digz project below
  {
    title: "Digz | E-Digging Evolved",
    description:
      "Modernized legacy application and improved infrastructure scalability.",
    image: "/img/projects/digz.jpg",
    tags: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "AWS",
      "API Integration",
      "React",
      "DevOps",
    ],
    liveUrl: "https://digz.fm",
  },
];
