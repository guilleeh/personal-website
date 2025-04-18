"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useAnimation,
} from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative min-h-screen bg-background">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-teal z-50"
          style={{ scaleX, transformOrigin: "0%" }}
        />

        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center">
            <div className="flex items-center gap-2">
              <Link href="/" className="font-bold text-xl">
                <span className="text-teal">Guillermo </span>Hernandez
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center ml-auto">
              <div className="flex items-center gap-6">
                {["About", "Projects", "Experience", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium transition-colors hover:text-teal"
                  >
                    {item}
                  </Link>
                ))}
                <ThemeToggle />
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center ml-auto gap-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-16 inset-x-0 bg-background border-b"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="container py-4 flex flex-col space-y-4">
                {["About", "Projects", "Experience", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium transition-colors hover:text-teal py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </header>

        <main className="container mx-auto py-8 md:py-12">
          {/* Hero Section */}
          <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, Im <span className="text-teal">Guillermo</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Full Stack Web Developer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I build accessible, user-friendly web applications with modern
                technologies. Passionate about creating beautiful interfaces and
                exceptional user experiences.
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-teal hover:bg-teal/90 text-white">
                    <Link href="#contact">Get in touch</Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-2 border-teal text-teal hover:bg-teal/10"
                  >
                    <Link href="#projects">View my work</Link>
                  </Button>
                </motion.div>
              </div>
              <div className="flex justify-center gap-4 pt-6">
                <SocialButton
                  icon={<Github className="h-5 w-5" />}
                  href="https://github.com/yourusername"
                  label="GitHub"
                />
                <SocialButton
                  icon={<Linkedin className="h-5 w-5" />}
                  href="https://linkedin.com/in/yourusername"
                  label="LinkedIn"
                />
                <SocialButton
                  icon={<Mail className="h-5 w-5" />}
                  href="mailto:your.email@example.com"
                  label="Email"
                />
              </div>
            </motion.div>
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="#about"
                className="flex flex-col items-center text-muted-foreground hover:text-teal transition-colors"
              >
                <span className="text-sm mb-2">Scroll down</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                  }}
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 md:py-24 scroll-mt-16">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold relative z-10">About Me</h2>
                <div className="h-1 w-20 bg-yellow mx-auto mt-4" />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div
                    className="relative h-[400px] w-full rounded-lg overflow-hidden border-2 border-navy"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Your Name"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-teal">My Journey</h3>
                  <p>
                    I&apos;m a passionate developer with expertise in building
                    modern web applications. With over X years of experience,
                    I&apos;ve worked on a variety of projects ranging from small
                    business websites to complex enterprise applications.
                  </p>
                  <p>
                    My approach combines technical expertise with a strong focus
                    on user experience. I believe in creating solutions that are
                    not only functional but also intuitive and enjoyable to use.
                  </p>
                  <div className="pt-4">
                    <h4 className="text-lg font-semibold mb-2">My Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Node.js",
                        "Tailwind CSS",
                        "Framer Motion",
                        "UI/UX Design",
                        "Responsive Design",
                      ].map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-navy/10 hover:bg-navy/20 transition-colors border-navy/20"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 md:py-24 scroll-mt-16">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold relative z-10">
                  My Projects
                </h2>
                <div className="h-1 w-20 bg-yellow mx-auto mt-4" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Project One",
                    description:
                      "A modern web application built with Next.js and Tailwind CSS.",
                    image: "/placeholder.svg?height=300&width=500",
                    tags: ["Next.js", "React", "Tailwind CSS"],
                    liveUrl: "#",
                    githubUrl: "#",
                  },
                  {
                    title: "Project Two",
                    description:
                      "An e-commerce platform with a custom CMS and payment integration.",
                    image: "/placeholder.svg?height=300&width=500",
                    tags: ["React", "Node.js", "MongoDB"],
                    liveUrl: "#",
                    githubUrl: "#",
                  },
                  {
                    title: "Project Three",
                    description:
                      "A mobile-first web application with real-time data visualization.",
                    image: "/placeholder.svg?height=300&width=500",
                    tags: ["TypeScript", "D3.js", "Firebase"],
                    liveUrl: "#",
                    githubUrl: "#",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    asChild
                    className="border-2 border-teal text-teal hover:bg-teal/10"
                  >
                    <Link href="#" className="inline-flex items-center gap-2">
                      View all projects
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-16 md:py-24 scroll-mt-16">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold relative z-10">Experience</h2>
                <div className="h-1 w-20 bg-yellow mx-auto mt-4" />
              </div>
              <div className="space-y-12 max-w-3xl mx-auto">
                {[
                  {
                    role: "Senior Frontend Developer",
                    company: "Company Name",
                    period: "2022 - Present",
                    description:
                      "Led the development of the company's flagship product, improving performance by 40%. Mentored junior developers and implemented best practices for code quality.",
                  },
                  {
                    role: "Frontend Developer",
                    company: "Another Company",
                    period: "2020 - 2022",
                    description:
                      "Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components.",
                  },
                  {
                    role: "Web Developer Intern",
                    company: "Startup Inc.",
                    period: "2019 - 2020",
                    description:
                      "Assisted in the development of various web projects. Gained experience in modern frontend technologies and agile development methodologies.",
                  },
                ].map((experience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-coral"
                  >
                    <motion.div
                      className="absolute w-5 h-5 bg-coral rounded-full -left-[11px] top-1"
                      whileHover={{ scale: 1.2 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-teal">
                        {experience.role}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <span>{experience.company}</span>
                        <span>•</span>
                        <span>{experience.period}</span>
                      </div>
                      <p>{experience.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 md:py-24 scroll-mt-16">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold relative z-10">
                  Get In Touch
                </h2>
                <div className="h-1 w-20 bg-yellow mx-auto mt-4" />
              </div>
              <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                I&apos;m currently open to new opportunities and collaborations.
                Feel free to reach out if you have a project in mind or just
                want to connect!
              </p>
              <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-teal/20 overflow-hidden relative">
                  <CardHeader className="relative">
                    <CardTitle className="text-teal">
                      Contact Information
                    </CardTitle>
                    <CardDescription>
                      Here&apos;s how you can reach me
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-teal/10">
                        <Mail className="h-4 w-4 text-teal" />
                      </div>
                      <Link
                        href="mailto:your.email@example.com"
                        className="hover:text-teal transition-colors"
                      >
                        your.email@example.com
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-teal/10">
                        <Linkedin className="h-4 w-4 text-teal" />
                      </div>
                      <Link
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        className="hover:text-teal transition-colors"
                      >
                        linkedin.com/in/yourusername
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-teal/10">
                        <Github className="h-4 w-4 text-teal" />
                      </div>
                      <Link
                        href="https://github.com/yourusername"
                        target="_blank"
                        className="hover:text-teal transition-colors"
                      >
                        github.com/yourusername
                      </Link>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        asChild
                        className="bg-teal hover:bg-teal/90 text-white"
                      >
                        <Link href="mailto:your.email@example.com">
                          Send me an email
                        </Link>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatedSection>
          </section>
        </main>

        <footer className="border-t border-teal/20 py-6 md:py-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Your Name. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <SocialButton
                icon={<Github className="h-4 w-4" />}
                href="https://github.com/yourusername"
                label="GitHub"
              />
              <SocialButton
                icon={<Linkedin className="h-4 w-4" />}
                href="https://linkedin.com/in/yourusername"
                label="LinkedIn"
              />
              <SocialButton
                icon={<Mail className="h-4 w-4" />}
                href="mailto:your.email@example.com"
                label="Email"
              />
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group border-teal/20 hover:border-teal/40 transition-colors">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-teal">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-navy/10 border-navy/20"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hover:bg-teal/10 hover:text-teal transition-colors"
          >
            <Link
              href={project.liveUrl}
              target="_blank"
              className="inline-flex items-center gap-1"
            >
              Live Demo
              <ExternalLink className="h-3 w-3" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hover:bg-teal/10 hover:text-teal transition-colors"
          >
            <Link
              href={project.githubUrl}
              target="_blank"
              className="inline-flex items-center gap-1"
            >
              Code
              <Github className="h-3 w-3" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

// Theme Toggle Component
function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle theme"
        className="relative"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </motion.div>
  );
}

// Social Button Component
function SocialButton({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button variant="ghost" size="icon" asChild>
        <Link href={href} target="_blank" aria-label={label}>
          <div className="text-muted-foreground hover:text-teal transition-colors">
            {icon}
          </div>
        </Link>
      </Button>
    </motion.div>
  );
}

// Animated Section Component
function AnimatedSection({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {children}
    </motion.div>
  );
}
