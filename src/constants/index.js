import { placeholder } from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiC,
  SiPostman,
  SiGit,
  SiMysql,
  SiFlask,
  SiOpenai,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiVercel,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
  SiFigma,
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
  SiHackerrank,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiExpress,
} from "react-icons/si";

import { DiCss3, DiJava } from "react-icons/di";
import { FaXTwitter, FaDatabase, FaRobot, FaBrain, FaNetworkWired } from "react-icons/fa6";
import { TbApi, TbBrandVscode, TbBrandFramerMotion, TbSql } from "react-icons/tb";
import { RiFlowChart, RiUserSettingsLine } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";

export const resumeLink =
  "https://drive.google.com/drive/u/3/folders/1LHDI0DtDCRQaDOyKDqguWRqpAZvkUmGw?utm_source=chatgpt.com";
export const repoLink = "https://github.com/Ayushm74?utm_source=chatgpt.com";
export const callToAction =
  "https://www.linkedin.com/in/Ayushmishra74/?utm_source=chatgpt.com";

export const profileImage =
  "https://i.postimg.cc/YCrj3ffq/Chat-GPT-Image-Apr-21-2026-06-09-16-PM.png";

export const contactInfo = {
  email: "ayushmishra74992@gmail.com",
  phone: "+91-7499221679",
  location: "Nagpur, Maharashtra, India",
};

export const navLinks = [
  { id: "skills", title: "Skills & Experience" },
  { id: "education", title: "Education" },
  { id: "achievements", title: "Achievements" },
  { id: "projects", title: "Projects" },
  { id: "extraCurricular", title: "AI & CP" },
  { id: "contactMe", title: "Contact Me" },
];

export const educationList = [
  {
    id: "education-1",
    icon: "https://i.postimg.cc/Y2xscSM5/Screenshot-2026-05-22-002345.png",
    title: "Shri Ramdeobaba College of Engineering and Management",
    degree: "B.Tech in Computer Science with Data Science",
    duration: "2023 - 2027",
    content1: "CGPA: 8.94/10",
    content2:
      " Database Management Systems, Data Structures and Algorithms, Machine Learning, Natural Language Processing, Object-Oriented Programming, Probability and Statistics, Artificial Intelligence, Operating Systems, Computer Networks, Azure, GCP, AWS ",
    content3: "Qualified JEE Mains with 94.6 percentile.",
  },
];  

export const achievements = [
  {
    id: "a-1",
     icon: "https://i.postimg.cc/2SnWJ1ft/axis-logo.webp",
    event: "Axis 2025 Web Reshape Hackathon - NIT Nagpur",
    position: "2nd Place",
    content1: "Built a polished web experience under hackathon constraints.",
    content2: "Recognized for execution quality, UI, and product thinking.",
  },
  {
    id: "a-2",
    icon: "https://i.postimg.cc/8CVRPhHQ/lc-logo.png",
    event: "LeetCode Competitive Programming",
    position: "1790 rating | Top 8.28% globally",
    content1: "Solved 823+ DSA problems using C++.",
    content2: "Participated in 39+ contests with global rank 70,636 / 874,349.",
    content3: "Earned 25 badges, 366+ active days, and the 500 Days Badge.",
    project: "https://leetcode.com/u/Ayushmishra74992/?utm_source=chatgpt.com",
   
  },
  {
    id: "a-3",
    icon: "https://i.postimg.cc/c1VMbynC/sih-image-Ct-Cyz0b.jpg",
    event: "Smart India Hackathon 2025",
    position: "Institute Level Qualifier",
    content1: "Qualified through institute-level evaluation.",
    content2: "Worked on solution framing, prototype delivery, and team execution.",
  },
  {
    id: "a-4",
    icon: "https://i.postimg.cc/525HgDwq/codeclash-logo.jpg",
    event: "Codechash - IIT Jodhpur",
    position: "National Rank 164",
    content1: "Secured rank 164 nationally in a competitive programming contest.",
  },
  {
    id: "a-6",
    icon: "https://i.postimg.cc/gjwXKJDc/ravant-media-logo.jpg",
    event: "FindScan Technical Assessment",
    position: "Selected from 1000+ applicants",
    content1: "Built a TradingView-style Bollinger Bands indicator.",
    content2: "Secured an INR 18,000/month internship opportunity with a Dubai-based startup.",
    project: "https://find-scan-awc3.vercel.app/?utm_source=chatgpt.com",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      { id: "pl-1", icon: SiC, name: "C" },
      { id: "pl-2", icon: SiCplusplus, name: "C++" },
      { id: "pl-3", icon: SiPython, name: "Python" },
      { id: "pl-4", icon: DiJava, name: "Java" },
      { id: "pl-5", icon: SiJavascript, name: "JavaScript" },
      { id: "pl-6", icon: TbSql, name: "SQL" },
      { id: "pl-7", icon: AiFillHtml5, name: "HTML" },
      { id: "pl-8", icon: DiCss3, name: "CSS" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { id: "f-1", icon: SiReact, name: "ReactJS" },
      { id: "f-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "f-3", icon: SiExpress, name: "Express.js" },
      { id: "f-4", icon: SiNextdotjs, name: "Next.js" },
      { id: "f-5", icon: SiTailwindcss, name: "TailwindCSS" },
      { id: "f-6", icon: SiFlask, name: "Flask" },
      { id: "f-7", icon: SiStreamlit, name: "Streamlit" },
      { id: "f-8", icon: SiScikitlearn, name: "Scikit-learn" },
      { id: "f-9", icon: SiNumpy, name: "NumPy" },
      { id: "f-10", icon: SiPandas, name: "Pandas" },
      { id: "f-11", icon: FaBrain, name: "NLTK" },
      { id: "f-12", icon: RiFlowChart, name: "LangChain" },
    ],
  },
  {
    title: "Databases & Platforms",
    items: [
      { id: "d-1", icon: SiMongodb, name: "MongoDB" },
      { id: "d-2", icon: SiMysql, name: "MySQL" },
      { id: "d-3", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "d-4", icon: SiSqlite, name: "SQLite" },
      { id: "t-1", icon: SiGit, name: "Git" },
      { id: "t-2", icon: AiFillGithub, name: "GitHub" },
      { id: "t-3", icon: SiPostman, name: "Postman" },
      { id: "t-4", icon: SiFirebase, name: "Firebase" },
      { id: "t-5", icon: RiFlowChart, name: "n8n" },
      { id: "t-6", icon: SiFigma, name: "Figma" },
      { id: "t-7", icon: TbBrandVscode, name: "VS Code" },
      { id: "t-8", icon: SiVercel, name: "Vercel" },
    ],
  },
  {
    title: "Core Skills",
    items: [
      { id: "c-1", icon: FaNetworkWired, name: "Full Stack" },
      { id: "c-2", icon: TbApi, name: "REST APIs" },
      { id: "c-3", icon: FaRobot, name: "AI Agents" },
      { id: "c-4", icon: FaBrain, name: "NLP" },
      { id: "c-5", icon: RiFlowChart, name: "Automation" },
      { id: "c-6", icon: SiOpenai, name: "Prompting" },
      { id: "c-7", icon: FaDatabase, name: "DB Design" },
      { id: "c-8", icon: RiUserSettingsLine, name: "Auth Systems" },
    ],
  },
];

export const experiences = [
  {
    organisation: "Nile Wellness",
    logo: "https://i.postimg.cc/Rhz5gp1t/Screenshot-2026-05-22-002002.png",
    link: "https://drive.google.com/drive/folders/1r1A7Q8Wqz-yxLlxfVLltvnGHFSrDicwU?usp=sharing&utm_source=chatgpt.com",
    positions: [
      {
        title: "Software Developer Intern",
        duration: "April 2025 - June 2025",
        content: [
          { text: "Developed responsive frontend interfaces and RESTful APIs using ReactJS, Node.js, and MongoDB.", link: "" },
          { text: "Supported scalable health and wellness modules serving 5,000+ users.", link: "" },
          { text: "Automated generation of 4,000+ doctor pages and 1,000+ hospital pages with Python, reducing deployment time by 90%.", link: "" },
          { text: "Integrated WhatsApp workflows for patient-doctor communication, reducing patient response time by 40%.", link: "" },
          { text: "Implemented multilingual accessibility with Google Translate API and contributed 147+ GitHub commits.", link: "" },
          { text: "Integrated AI agents for medical report summarization and structured data extraction using LLMs and LangChain.", link: "" },
          { text: "Built n8n workflows for automated consultation form filling and patient onboarding.", link: "" },
        ],
      },
    ],
  },
];

const projectImage =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80";

export const projects = [
  {
    id: "project-1",
    title: "DomusVesta",
    github: "https://github.com/Ayushm74/Domusvesta?utm_source=chatgpt.com",
    link: "",
    image: projectImage,
    content:
      "Scalable home services marketplace with verified professional discovery, booking, JWT authentication, role-based access, optimized MongoDB schemas, AI quotation generation, provider matching, and LangChain/n8n workflow orchestration.",
    stack: [
      { id: "p1-1", icon: SiNextdotjs, name: "Next.js" },
      { id: "p1-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "p1-3", icon: SiMongodb, name: "MongoDB" },
      { id: "p1-4", icon: DiCss3, name: "CSS" },
      { id: "p1-5", icon: RiFlowChart, name: "LangChain" },
      { id: "p1-6", icon: RiFlowChart, name: "n8n" },
    ],
  },
  {
    id: "project-2",
    title: "LLMDocify",
    github: "https://github.com/Ayushm74/LLMDocify?utm_source=chatgpt.com",
    link: "",
    image: projectImage,
    content:
      "OpenAI-powered developer documentation tool using AST parsing, Flask APIs, OpenAI and DeepSeek V3 integrations, reducing manual documentation effort by 80% with CI/CD-friendly endpoints.",
    stack: [
      { id: "p2-1", icon: SiPython, name: "Python" },
      { id: "p2-2", icon: SiFlask, name: "Flask" },
      { id: "p2-3", icon: SiOpenai, name: "OpenAI API" },
      { id: "p2-4", icon: FaBrain, name: "DeepSeek V3" },
    ],
  },
  {
    id: "project-3",
    title: "Online Learning Platform",
    github: "",
    link: "https://ayush-bjhc.vercel.app/?utm_source=chatgpt.com",
    image: projectImage,
    content:
      "Hackathon-winning e-learning platform built in 3 hours with structured learning flows, intuitive UI, and immersive 3D Spline integrations for higher engagement.",
    stack: [
      { id: "p3-1", icon: SiReact, name: "ReactJS" },
      { id: "p3-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "p3-3", icon: SiMongodb, name: "MongoDB" },
      { id: "p3-4", icon: TbBrandFramerMotion, name: "3D UI" },
    ],
  },
  {
    id: "project-4",
    title: "FindScan",
    github: "https://github.com/Ayushm74/FindScan/?utm_source=chatgpt.com",
    link: "https://find-scan-awc3.vercel.app/?utm_source=chatgpt.com",
    image: projectImage,
    content:
      "TradingView-style Bollinger Bands indicator with configurable chart indicators, styling controls, KLineCharts integration, and a polished TypeScript/Tailwind interface.",
    stack: [
      { id: "p4-1", icon: SiReact, name: "ReactJS" },
      { id: "p4-2", icon: SiTypescript, name: "TypeScript" },
      { id: "p4-3", icon: SiTailwindcss, name: "TailwindCSS" },
      { id: "p4-4", icon: FaDatabase, name: "KLineCharts" },
    ],
  },
  {
    id: "project-5",
    title: "ForestWatch AI",
    github: "",
    link: "",
    image: projectImage,
    content:
      "Geospatial AI platform for deforestation detection using NDVI analysis, Landsat and Sentinel satellite imagery, Google Earth Engine APIs, hotspot visualization, and GeoJSON export.",
    stack: [
      { id: "p5-1", icon: SiNextdotjs, name: "Next.js" },
      { id: "p5-2", icon: TbApi, name: "FastAPI" },
      { id: "p5-3", icon: SiPython, name: "Python" },
      { id: "p5-4", icon: FaBrain, name: "Google Earth Engine" },
    ],
  },
  {
    id: "project-6",
    title: "Nistula AI Guest Handler",
    github: "https://github.com/Ayushm74/nistula-technical-assessment?utm_source=chatgpt.com",
    link: "",
    image: projectImage,
    content:
      "AI-powered guest communication system with webhook architecture, query classification, reply generation, and scalable PostgreSQL conversation management using Prisma.",
    stack: [
      { id: "p6-1", icon: SiNodedotjs, name: "Node.js" },
      { id: "p6-2", icon: SiNextdotjs, name: "Next.js" },
      { id: "p6-3", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "p6-4", icon: FaRobot, name: "Claude AI" },
    ],
  },
  {
    id: "project-7",
    title: "NLP-to-SQL Multi-Agent AI",
    github: "https://github.com/Ayushm74/NLP-to-SQL?utm_source=chatgpt.com",
    link: "",
    image: projectImage,
    content:
      "Multi-agent text-to-SQL system that converts natural language into executable SQL queries with a self-correcting loop driven by database feedback, reducing SQL failures by 90%.",
    stack: [
      { id: "p7-1", icon: SiPython, name: "Python" },
      { id: "p7-2", icon: FaBrain, name: "NLTK" },
      { id: "p7-3", icon: RiFlowChart, name: "LangGraph" },
      { id: "p7-4", icon: BsFiletypeSql, name: "SQL" },
    ],
  },
];

export const blogPosts = [];

export const stats = [
  { id: "stats-1", title: "LeetCode Rating", value: "1790" },
  { id: "stats-2", title: "Problems Solved", value: "823+" },
  { id: "stats-3", title: "Contests", value: "39" },
  { id: "stats-4", title: "Global Top", value: "8.28%" },
];

export const extraCurricular = [
  {
    id: 1,
    organisation: "AI Workflow Automation",
    title: "LangChain, LangGraph, n8n, Prompt Engineering",
    duration: "Product-focused AI systems",
    content: [
      { text: "Builds intelligent agents for structured extraction, summarization, onboarding, and workflow execution.", link: "" },
      { text: "Focuses on reliable LLM orchestration, clean data handoff, and practical automation for real users.", link: "" },
    ],
    logo: placeholder,
  },
  {
    id: 2,
    organisation: "Competitive Programming",
    title: "LeetCode, CodeChef, Codeforces, GFG, HackerRank",
    duration: "823+ problems solved",
    content: [
      { text: "Maintains strong DSA practice with C++, 25 LeetCode badges, and a 366+ active-days streak.", link: "https://leetcode.com/u/Ayushmishra74992/?utm_source=chatgpt.com" },
      { text: "Active across major coding platforms and contests.", link: "https://codolio.com/profile/Ayushm74992?utm_source=chatgpt.com" },
    ],
    logo: placeholder,
  },
  {
    id: 3,
    organisation: "Portfolio Keywords",
    title: "Full Stack Developer | AI Engineer | MERN Stack Developer",
    duration: "Developer brand",
    content: [
      { text: "LangChain Developer, AI Workflow Automation, NLP Engineer, AI Agent Builder.", link: "" },
      { text: "Hackathon Developer and Competitive Programmer with real-world product execution.", link: "" },
    ],
    logo: placeholder,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/Ayushmishra74/?utm_source=chatgpt.com",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Ayushm74?utm_source=chatgpt.com",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:ayushmishra74992@gmail.com",
  },
  {
    id: "social-media-4",
    icon: FaXTwitter,
    link: "https://x.com/Ayushm74?utm_source=chatgpt.com",
  },
  {
    id: "social-media-5",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/Ayushmishra74992/?utm_source=chatgpt.com",
  },
  {
    id: "social-media-6",
    icon: SiGeeksforgeeks,
    link: "https://www.geeksforgeeks.org/user/ayushmishbmsq?utm_source=chatgpt.com",
  },
  {
    id: "social-media-7",
    icon: SiCodechef,
    link: "https://www.codechef.com/users/ayushmishra74?utm_source=chatgpt.com",
  },
  {
    id: "social-media-8",
    icon: SiCodeforces,
    link: "https://codeforces.com/profile/ayushmishra74992?utm_source=chatgpt.com",
  },
  {
    id: "social-media-9",
    icon: SiHackerrank,
    link: "https://www.hackerrank.com/profile/ayushmishra74992?utm_source=chatgpt.com",
  },
];

export const aboutMe = {
  name: "Ayush Mishra",
  githubUsername: "Ayushm74",
  title: "Full Stack & AI Developer",
  tagLine:
    "Ex SDE Intern @ Nile Wellness | Solved LeetCode 800+ (1750+ Rating) | 2nd Place @ WebReshape Hackathon (NIT Nagpur) | CSE (DS) | RCOEM'27",
  intro:
    "Full Stack & AI Developer pursuing B.Tech in Computer Science with Data Science at RCOEM, Nagpur. I build scalable full-stack applications, AI-powered workflow automation systems, NLP applications, and intelligent agents using LangChain and n8n.",
};
