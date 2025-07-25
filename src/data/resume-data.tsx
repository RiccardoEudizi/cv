import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Riccardo Eudizi",
  initials: "RE",
  location: "Rome, Italy, CET",
  locationLink: "https://www.google.com/maps/place/Rome",
  about:
    "Full Stack Engineer focused on building products that have a useful context and help users doing complex tasks in a simple way",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple features from 0 to 1. Currently, I work mostly with JavaScript, Angular, React, Node.js, Java, and SQL. I have over 5 years of experience in working with large and small projects.",
  avatarUrl: "/profile.jpeg",
  personalWebsiteUrl: "https://riccardoeudizi.vercel.app",
  contact: {
    email: "rik.eudizi@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RiccardoEudizi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/riccardo-eudizi-7a53a9205",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/riccardiin0",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "I.I.S G. Marconi",
      degree: "High school degree in IT",
      start: "2015",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Sogei S.p.A.",
      link: "https://sogei.it",
      badges: ["Rome"],
      title: "Full Stack Developer",
      start: "2021",
      end: "current",
      description:
        "Implemented new features, deployed new versions of various apps, Technologies: Java, JavaScript, TypeScript, React, SQL, HTML, CSS",
    },
    {
      company: "BSA S.R.L",
      link: "https://bsa-assicurazioni.it/",
      badges: ["Rome"],
      title: "Full Stack Developer",
      start: "2021",
      end: "2021",
      description:
        "Helped to rebuild a management app from scratch. Built new pages for the app. Technologies: C#, JavaScript, TypeScript, SQL, ASP.NET MVC, HTML, CSS",
    },
    {
      company: "Infoservice Srl",
      link: "https://www.infos.it/",
      badges: ["Rome"],
      title: "Full-Stack Developer .NET",
      start: "2020",
      end: "2020",
      description:
        "Helped in the development of a new feature, fixed bugs. Technologies: C#, JavaScript, TypeScript, SQL, ASP.NET MVC, HTML, CSS",
    },
  ],
  skills: [
    // "JavaScript",
    "TypeScript",
    "Java",
    "C#",
    "Go",
    "SQL",
    "React/Next.js",
    "Astro",
    "Solid JS",
    "Node.js",
    ,
  ],
  projects: [
    {
      title: "open-docs",
      techStack: ["Side Project", "NextJS", "AI SDK", "TailwindCSS"],
      description: "AI-Powered documentation generation and repository analysis",
      link: {
        label: "open-docs.com",
        href: "https://open-docs.vercel.app/",
      }
    },
    {
      title: "PDF Summarizer",
      techStack: ["Side Project", "Solidjs", "AI SDK", "TailwindCSS"],
      description: "Summarize text PDFs into chapters or plain summaries with AI",
      link: {
        label: "pdf-summarize.com",
        href: "https://pdf-summarize-inky.vercel.app/",
      }
    },
    {
      title: "Ssetto",
      techStack: ["Package", "TypeScript", "SolidJs"],
      description: "An unstyled drawer with a sheet animation on top of it",
      link: {
        label: "ssetto.com",
        href: "https://ssetto.vercel.app/",
      },
    },
    {
      title: "Sonner-Solid",
      techStack: ["Package", "TypeScript", "SolidJs"],
      description: "An opinionated toast component for Solid Js",
      link: {
        label: "sonner-solid.com",
        href: "https://sonner-solid.vercel.app/",
      },
    },
    {
      title: "Free News Project",
      techStack: ["Side Project", "Astro", "SolidJS", "Cheerio"],
      description:
        "Web App that scrape the content of any online article and let you read it without annoying ads",
      link: {
        label: "free-news-project.com",
        href: "https://free-news-project.vercel.app/",
      },
    },
    {
      title: "AI News",
      techStack: ["Side Project", "NextJS", "AI SDK", "TailwindCSS", "Cheerio"],
      description:
        "AI generated news and daily report",
      link: {
        label: "ai-news-terminal.com",
        href: "https://ai-news-terminal.vercel.app/",
      },

    },
    {
      title: "Dotify",
      techStack: ["Side Project", "NextJS", "Transformers js", "TailwindCSS"],
      description:
        "Transform your portraits into beautiful dot art, ascii art or dither, with AI-powered background removal",
      link: {
        label: "dotify.com",
        href: "https://dotify-tau.vercel.app/",
      }
    },

    {
      title: "Cities",
      techStack: ["Side Project", "SolidStart", "SolidJS", "TailwindCSS", "Overpass API"],
      description:
        "Discover the unique architecture and layout of cities worldwide through an interactive visualization tool.",

      link: {
        label: "cities.com",
        href: "https://cities-omega.vercel.app/",
      }
    },
    {
      title: "Steganography Project",
      techStack: ["Side Project", "React"],
      description:
        "Hide secret messages within images or decode messages from images that contain hidden data.",
      link: {
        label: "steganography-project.com",
        href: "https://steganography-rouge.vercel.app/",
      },
    },
    {
      title: "TextOS Weather",
      techStack: ["Side Project", "SolidJS"],
      description: "A simple weather app with ascii animations",
      link: {
        label: "textos-weather.com",
        href: "https://text-os-weather.vercel.app/",
      },
    },
    // {
    //   title: "Intergalactic Radio",
    //   techStack: ["Side Project", "Astro", "SolidJS"],
    //   description:
    //     "An example app to show usage of Supabase Realtime, users can set the URL to a YouTube Music track, other users can listen to the same track by having the link to the room",
    //   link: {
    //     label: "intergalacticradio.com",
    //     href: "https://intergalactic-radio.vercel.app/landing",
    //   },
    // },
  ],
} as const;
