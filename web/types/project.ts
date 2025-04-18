// make a type for project
// title: "Project One",
// description:
//   "A modern web application built with Next.js and Tailwind CSS.",
// image: "/placeholder.svg?height=300&width=500",
// tags: ["Next.js", "React", "Tailwind CSS"],
// liveUrl: "#",
// githubUrl: "#",
// },

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};
