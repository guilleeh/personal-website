import { Project } from "@/types/project";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
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
          {project.liveUrl && (
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
          )}
          {project.githubUrl && (
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
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
