"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Github, Linkedin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SocialButton } from "@/components/social-button";
import { AnimatedSection } from "@/components/animated-section";
import { ProjectCard } from "@/components/project-card";
import {
  aboutMe,
  education,
  experiences,
  projects,
  skills,
  socialLinks,
} from "@/lib/constants";

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

        <Header />

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
                Hi, I&apos;m Guillermo, a Senior Full-Stack Engineer building
                high-impact, scalable web applications with modern tech and
                strategic AI integration.
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
                  href={socialLinks.github}
                  label="GitHub"
                />
                <SocialButton
                  icon={<Linkedin className="h-5 w-5" />}
                  href={socialLinks.linkedin}
                  label="LinkedIn"
                />
                <SocialButton
                  icon={<User className="h-5 w-5" />}
                  href={socialLinks.upwork}
                  label="Upwork"
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
                      src="/img/me.jpg"
                      alt="Guillermo"
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
                  <h3 className="text-2xl font-bold text-teal">
                    {aboutMe.title}
                  </h3>
                  <p>{aboutMe.description}</p>
                  <div className="pt-4">
                    <h4 className="text-lg font-semibold mb-4">Education</h4>
                    <p className="text-muted-foreground">
                      {education.school}
                      <br />
                      {education.degree}
                      <br />
                      {education.graduationDate}
                    </p>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Technical Skills
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(skills).map(
                        ([category, items], index) => (
                          <div key={category}>
                            <p className="text-sm font-medium text-muted-foreground capitalize mb-1">
                              {category}:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {items.map((skill, skillIndex) => (
                                <motion.div
                                  key={skill}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay: index * 0.1 + skillIndex * 0.05,
                                    duration: 0.3,
                                  }}
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
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </section>

          <section id="projects" className="py-16 md:py-24 scroll-mt-16">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold relative z-10">
                  My Projects
                </h2>
                <div className="h-1 w-20 bg-yellow mx-auto mt-4" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
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
              {/* <div className="text-center mt-12">
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
              </div> */}
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
                {experiences.map((experience, index) => (
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
                        <span>•</span>
                        <span>{experience.type}</span>
                      </div>
                      <p className="mb-3">{experience.description}</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
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
                        <User className="h-4 w-4 text-teal" />
                      </div>
                      <Link
                        href={socialLinks.upwork}
                        target="_blank"
                        className="hover:text-teal transition-colors"
                      >
                        {socialLinks.upwork}
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-teal/10">
                        <Linkedin className="h-4 w-4 text-teal" />
                      </div>
                      <Link
                        href={socialLinks.linkedin}
                        target="_blank"
                        className="hover:text-teal transition-colors"
                      >
                        {socialLinks.linkedin}
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-teal/10">
                        <Github className="h-4 w-4 text-teal" />
                      </div>
                      <Link
                        href={socialLinks.github}
                        target="_blank"
                        className="hover:text-teal transition-colors"
                      >
                        {socialLinks.github}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
