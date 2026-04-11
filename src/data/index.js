import {
  Code,
  Layout,
  Server,
  Database,
  Smartphone,
  PenTool,
  Bot,
  Brain,
} from "lucide-react";

export const siteData = {
  hero: {
    name: "Manthan Davra",
    title: "Software Developer & AI Enthusiast",
    taglines: [

      "I explore AI and machine learning."

    ],
  },
  about: {
    description:
      "I am a 6th semester Computer Engineering student at Silver Oak University with a strong interest in software development and emerging technologies. I am passionate about building practical solutions and continuously improving my technical skills through hands-on projects.\n\nCurrently, I serve as the Treasurer of the IEEE Computer Society Student Branch Chapter at Silver Oak University, where I manage financial operations and contribute to organizing technical events and initiatives. This role has strengthened my leadership, responsibility, and teamwork skills.",
    bulletPoints: [],
  },
  skills: [
    {
      category: "Languages & Technologies",
      items: [
        { name: "C", level: 85 },
        { name: "C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
      ],
      icon: Code,
    },
  ],
  projects: [
    {
      id: 1,
      title: "Phishing Website Detection",
      description:
        "A machine learning based system designed to detect and prevent phishing attacks by analyzing website URLs and structural features to ensure digital security.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
      tech: ["Python", "Machine Learning", "Data Analysis"],
      githubUrl: "https://github.com/Manthan251q/Phishing-Web-Detaction",
      liveUrl: "https://github.com/Manthan251q/Phishing-Web-Detaction",
    },
  ],
  experience: [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      duration: "2022 - Present",
      description:
        "Spearheaded the redesign of the core SaaS platform, improving rendering performance by 40% and increasing user retention through an intuitive UX overhaul.",
    },
    {
      id: 2,
      role: "Full Stack Engineer",
      company: "WebSolutions Agency",
      duration: "2020 - 2022",
      description:
        "Developed and deployed over a dozen customized client applications. Integrated complex third-party APIs and implemented robust CI/CD pipelines.",
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Startup Hub",
      duration: "2018 - 2020",
      description:
        "Assisted in the development of a real-time collaborative workspace app. Gained deep knowledge of React state management and WebSocket communication.",
    },
  ],
  socials: {
    github: "https://github.com/Manthan251q",
    linkedin: "https://www.linkedin.com/in/manthan-davra-a266a431b/",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    email: "mailto:manthandavra90@gmail.com",
  },
};
