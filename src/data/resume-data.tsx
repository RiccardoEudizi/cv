import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
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
    "As a Full Stack Engineer, I have successfully taken multiple features from 0 to 1. Currently, I work mostly with JavaScript, Angular, React, Node.js, Java, and SQL. I have over 3 years of experience in working with large and small projects.",
  avatarUrl: "/DKReFJH__400x400.jpg",
  personalWebsiteUrl: "https://riccardoeudizi.vercel.app",
  contact: {
    email: "rik.eudizi@gmail.com",
    tel: "+393703634743",
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
    "JavaScript",
    "TypeScript",
    "Java",
    "C#",
    "Go",
    "React/Next.js",
    "Astro",
    "Solid JS",
    "Node.js",
    "SQL",
  ],
  projects: [
    {
      title: "Life Percentage",
      techStack: ["Side Project", "TypeScript", "Astro", "Vite", "SolidJs"],
      description:
        "App that calculate yor life percentage  based on WHO(World Health Organization) data, it gets your life expectancy based on your age and country, and then gets the percentage. (Just for europe for now)",

      link: {
        label: "life-estimate.com",
        href: "https://life-estimate.vercel.app/",
      },
    },
    {
      title: "Code VisualX",
      techStack: ["Side Project", "TypeScript", "Astro", "SolidJs"],
      description:
        "An app that create images of your code to use in tutorials, social media posts, etc.",
      link: {
        label: "code-visualX.com",
        href: "https://code-visualx.vercel.app/",
      },
    },
    {
      title: "Free News Project",
      techStack: ["Side Project", "Astro", "SolidJS", "Playwright"],
      description:
        "Web App that scrape the content of any online article and let you read it without  annoying ads ",
      link: {
        label: "free-news-project.com",
        href: "https://free-news-project.vercel.app/",
      },
    },
    {
      title: "Intergalactic Radio",
      techStack: ["Side Project", "Astro", "SolidJS"],
      description:
        "An example app to show usage of Supabase Realtime, users can set the URL to a YouTube Music track, other users can listen to the same track by having the link to the room",
      link: {
        label: "intergalacticradio.com",
        href: "https://intergalactic-radio.vercel.app/landing",
      },
    },
    {
      title: "Steganography Project",
      techStack: ["Side Project", "Qwik", "Go Fiber"],
      description:
        "A project that I made to play with Go, using steganography, a technique used to encrypt messages into files. This app let you upload a photo and a message, and return the photo with the message encoded in it. It let you decode it as well. The back-end is written in Go using Go Fiber, the front-end is built with Qwik JS",
      link: {
        label: "stegano.com",
        href: "https://qwik-app-two.vercel.app/",
      },
    },
  ],
} as const;
