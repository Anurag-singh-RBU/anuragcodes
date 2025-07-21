import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anurag Singh",
  initials: "AS",
  url: "https://anuragcodes.vercel.app/",
  location: "Nagpur Maharashtra, India",
  locationLink: "",
  description:
    "Building ShadYx UI and other SaaS Products where design meets code with style.",
  summary:
    "I am a Code-savvy Software and Java developer with experience in TypeScript and JavaScript alongwith modern technologies like Tailwind Css, ShadCn UI and Docker. I have expertise in frameworks like React Js, Node Js and Next Js. I leverage AWS Services to create efficient and reliable solutions. MongoDB and PostgreSQL for database management, Clerk and Zustand for effective authentication and state management. I don't just write code — I architect digital spells in Java. Your ideas and my code — a perfect fusion for impactful creations !",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next Js",
    "Typescript",
    "Node",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Java",
    "C",
    "Kubernetes",
    "Tailwind CSS",
    "ShadCn UI",
    "AWS",
    "MongoDB",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Three Js",
    "Express",
    "MySQL",
    "NeonDB",
    "Prisma",
    "EJS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://www.shadyxui.in", icon: NotebookIcon, label: "Shadyx Ui", download: false },

  ],
  contact: {
    email: "anuragsingh260805@gmail.com",
    tel: "+91 7387857715",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Anurag-singh-RBU",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anuragsinghrbu/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/anuragRBU",
        icon: Icons.x,

        navbar: true,
      },
      youtube: {
        name: "Leetcode",
        url: "#",
        icon: Icons.youtube,

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Navodita Infotech",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Frontend Intern",
      logoUrl: "/atomic.png",
      start: "1 month",
      end: "",
      description:
        "Designed and developed a dynamic eCommerce product catalog for a real-world client project using React.js and Tailwind CSS, implementing key features like responsive layout, real-time product filtering, and dynamic rendering of product data based on user interactions.",
    },
    {
      company: "Contributions",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Active Contributions",
      logoUrl: "/contri.png",
      start: "",
      end: "Present",
      description:
        "Contributed to the development of a web application for a local business. Worked in a team to design and implement a project and gained experience of React Tanstack Query and Backend Stuff.",
    },
    {
      company: "AlgoPrep X",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Mentor Challenge",
      logoUrl: "/nvidia.png",
      start: "",
      end: "Present",
      description:
        "Built a full-stack Media Player with user authentication , playlist management , and audio controls using MERN Stack. Developed a real-time Chat Application using Firebase for seamless authentication and live messaging",
    },
  ],
  education: [
    {
      school: "Gandhi City Public School",
      href: "https://buildspace.so",
      degree: "Primary Education",
      logoUrl: "/gcps.jpg",
      start: "2008",
      end: "2021",
    },
    {
      school: "RK High School",
      href: "https://uwaterloo.ca",
      degree: "High School Education",
      logoUrl: "/jee.jpg",
      start: "2021",
      end: "2023",
    },
    {
      school: "Ramdeobaba University",
      href: "https://wlu.ca",
      degree: "Btech in Computer Science",
      logoUrl: "/rbu.jpg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://github.com/Anurag-singh-RBU",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store) and I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Anurag-singh-RBU",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chatcollect.png",
      video:
        "",
    },
    {
      title: "Shadyx UI",
      href: "https://github.com/Anurag-singh-RBU/SHADYX-UI",
      dates: "May 2025 - Present",
      active: true,
      description:
        "UI components library that offers awesome reusable components for building web applications , create stunning websites and enjoy the flow from COPY to VIBE.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Aceternity UI",
        "Spectrum UI",
        "Magic UI",
        "Figma",
      ],
      links: [
        {

          type: "Website",
          href: "https://www.shadyxui.in/",
          icon: <Icons.globe className="size-3" />,

        },
        {
          type: "Source",
          href: "https://github.com/Anurag-singh-RBU/SHADYX-UI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/jobit.png",
      video: "",
    },
    {
      title: "CricVortex",
      href: "https://cricvortex.netlify.app/??",
      dates: "Jan 2025 - March 2025",
      active: true,
      description:
        "Web-based platform that allows users to watch live match scores , upcoming fixtures , and real time cricket insights all in one place , alongwith a manual scorecard feature.",
      technologies: [
        "React",
        "Javascript",
        "Cricapi",
        "Local Storage",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://cricvortex.netlify.app/??",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anurag-singh-RBU/CrickVortex",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cricvortex.png",
      video: "",
    },
    {
      title: "Scrivo",
      href: "https://github.com/Anurag-singh-RBU",
      dates: "May 2025 - Present",
      active: true,
      description:
        "A full-featured project management platform designed to streamline task tracking and team collaboration through dashboards , customizable workflows , and real-time updates.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Clerk",
        "TailwindCSS",
        "Shadcn UI",
        "NeonDB",
        "Aceternity UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Anurag-singh-RBU",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/scrivo.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "HackSagon 2025",
      dates: "Febuary 18th - July 28th 2025",
      location: "Gwalior, India",
      description:
        "Developed an AI-powered study companion that summarizes lectures, generates quizzes, and crafts personalized study plans from PDFs or notes",
      image:
        "https://img.freepik.com/premium-vector/hs-logo-vector_724449-171.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FlipKart Grid 7.0",
      dates: "June 18th - Present 2025",
      location: "FlipKart HQ Bangalore, India",
      description:
        "A national level hackathon where students solve real-world challenges faced by Flipkart",
      image:
        "https://www.citypng.com/public/uploads/preview/hd-flipkart-round-logo-icon-transparent-png-701751694966204grvmunpzzf.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
