export const info = {
  baseUrl: "https://hernandezguillermo.com",
  name: "Guillermo Hernandez Flores",
  jobDescription: "Full-Stack Web Developer",
  about: `I'm a Full-Stack Web Developer based in SoCal.
   I enjoy creating web applications from 0 to production. I have over 3 years of experience building web applications using technologies such as 
   React, Next.js, Remix, Node.js, Express, Django, Python, Javascript and PHP. I am also comfortable working with DevOps tools and platforms such as AWS. 
   During my free time I enjoy learning new technologies and working on side projects. I also play piano, cycle, watch basketball and play video games.
   If you are looking for an experienced developer to join your team, please feel free to reach out to me.
  `,

  experience: [
    {
      name: "Upwork Web Developer - Contractor                        ",
      location: "Remote",
      startDate: "October 2020",
      endDate: "Present",
      description: [
        "- Developed and integrated React components with Storybook, improved codebase using Git and TypeScript, and utilized GraphQL for efficient data management for ABLE non-profit.",
        "- Designed a full stack application using Remix along with authentication, Tailwind CSS, PostgreSQL, and fly.io services for hosting of application named Repayerment.",
        "- Successfully completed multiple web development projects on Upwork, demonstrating proficiency in technologies such as JavaScript, Python, PostgreSQL, Next.js, and React Native.",
      ],
    },
    {
      name: "Digz.fm - Full Stack Developer (Contract)",
      location: "Remote",
      startDate: "September 2022",
      endDate: "July 2023",
      description: [
        "- Migrated outdated React frontend application to a modern Next.js app with updated styles using TailwindCSS.",
        "- Re-architectured backend infrastructure to decouple database and long-running Django servers. Created staging and production environments using AWS Amplify and ElasticBeanstalk.",
        "- Improved mobile experience by adding responsive breakpoints to the front end, adding new features such as improved search, music roulette, and track submission.",
      ],
    },
    {
      name: "SandboxTogether.com - Full Stack Developer (Contract)",
      location: "Remote",
      startDate: "August 2021",
      endDate: "Match 2023",
      description: [
        "Lead developer for Sandbox web platform. Responsible for:",
        "- Architecture of overall system",
        "- Frontend/Backend implementation along with Database access and deployment",
        "- Built out Slackbot implementation along with Zapier integrations.",
        "- Worked with and mentored 2 internsLead",
      ],
    },
    {
      name: "Hatched Dating - React Native Developer (Contract)",
      location: "Remote",
      startDate: "May 2022",
      endDate: "October 2022",
      description: [
        "- Improved user flows within the React Native application such as onboarding, matching, profile editing, and messaging.",
        "- Helped successfully launch a mobile app to the Apple store by fixing critical bugs.",
      ],
    },
  ],

  education: [
    {
      name: "University of California, Irvine",
      location: "Irvine, California",
      startDate: "2016",
      endDate: "2020",
      description: ["Bachelors in Computer Science"],
    },
    {
      name: "Cloud Developer Nanodegree",
      location: "Remote",
      startDate: "2020",
      endDate: "2020",
      description: [
        "In this Nanodegree from Udacity, I was able to get a hands-on approach to build web applications with AWS. I learned about containerization with Docker and orchestration with Kubernetes. I also created a full-stack application with a serverless backend using the serverless framework.",
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/guilleeh",
    email: "hernandezguillermo27@gmail.com",
    linkedin: "https://www.linkedin.com/in/guillermo-hernandez/",
  },

  projects: [
    {
      title: "Sandbox Together",
      isFeatured: true,
      thumbnail: "/assets/images/projects/sandboxtogether.png",
      liveUrl: "https://sandboxtogether.app/",
    },
    {
      title: "Digz",
      isFeatured: true,
      thumbnail: "/assets/images/projects/digz.png",
      liveUrl: "https://digz.fm",
    },
    {
      title: "Repayerment",
      isFeatured: true,
      thumbnail: "/assets/images/projects/repayerment.png",
      liveUrl: "https://repayerment-production.fly.dev/login",
    },
    {
      title: "eFiling San Diego",
      isFeatured: true,
      thumbnail: "/assets/images/projects/efile.png",
      liveUrl: "https://efile.sandiego.gov/",
    },
  ],
};
