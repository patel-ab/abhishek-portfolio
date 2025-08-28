// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import githubLogo from "./assets/tech_logo/github.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import djangoLogo from "./assets/tech_logo/djangoLogo.png";
import redisLogo from "./assets/tech_logo/redis.png";
import elasticsearchLogo from "./assets/tech_logo/elasticsearch.png";
import awsLogo from "./assets/tech_logo/awslogo.png";
import gcpLogo from "./assets/tech_logo/gcp.png";
import dockerLogo from "./assets/tech_logo/docker.png";
import jenkinsLogo from "./assets/tech_logo/jenkins.png";

// Experience Section Logo's
import msulogo from "./assets/company_logo/MSU-1.png";
import msulogo2 from "./assets/company_logo/MSU-2.png";
import tcslogo from "./assets/company_logo/TCS-1.png";
import tcslogo2 from "./assets/company_logo/TCS-2.png";

// Education Section Logo's
import gtulogo from "./assets/education_logo/GTU-1.png";
import gtulogo2 from "./assets/education_logo/GTU-2.png";
import psscLogo from "./assets/education_logo/pssc.png";

// Project Section Logo's
import udmlogo from "./assets/projects_logo/UDM.png";
import dbmlogo from "./assets/projects_logo/DBM.png";
import gxlogo from "./assets/projects_logo/gamexplorer.png";
import taxlogo from "./assets/projects_logo/tax.png";
import portfoliologo from "./assets/projects_logo/portfolio.png";


// Certification Section Logo's
import awsDeveloperImg from "./assets/Certifications/awsDeveloper.png";
import awsArchitectImg from "./assets/Certifications/awssa.png";
import awsCloudImg from "./assets/Certifications/awscp.png";

export const SkillsInfo = [
  {
    title: "Coding Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "C++", logo: cppLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Angular", logo: angularLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Django", logo: djangoLogo },
    ],
  },
  {
    title: "Cloud and DevOps",
    skills: [
      { name: "AWS", logo: awsLogo },
      { name: "GCP", logo: gcpLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Jenkins", logo: jenkinsLogo },
      { name: "GitHub", logo: githubLogo },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "Elasticsearch", logo: elasticsearchLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Redis", logo: redisLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Teaching Assistant",
    company: "Michigan State University",
    img: msulogo,
    img2: msulogo2,
    date: "January 2025 - May 2025",
    desc: "TA for CSE-335 Object Oriented Software Development, mentoring students in Java and C++ through real-world coding challenges and debugging. Led 15 Learning Assistants to deliver structured academic support, improve course outcomes, and help students build confidence in writing clean, maintainable code.",
    skills: [
      "Object Oriented Programming",
      "Java",
      "C++",
      "Leadership",
      "Mentoring",
      "Debugging",
      "Design Patterns",
    ],
  },
  {
    id: 1,
    role: "Software Engineer",
    company: "Tata Consultancy Services",
    img: tcslogo,
    img2: tcslogo2,
    date: "July 2021 - December 2023",
    desc: "Worked as a Fullstack Developer, delivering scalable backend microservices and performant frontend applications using Java, Spring Boot and Angular. Collaborated with cross-functional Agile teams to build and enhance a leading Credit Bureau Integration platform.",
    skills: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "Angular",
      "Jenkins",
      "Docker",
      "GCP",
      "Elasticsearch",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Michigan State University",
    img: msulogo,
    img2: msulogo2,
    date: "January 2024 - December 2025",
    desc: "Pursuing Master’s in Computer Science at MSU, with a strong foundation in programming, development, and software engineering principles. Coursework includes subjects like Data Structures and Algorithms, Advanced Software Engineering, Distributed Systems etc. Actively engaging in workshops and technical events to enhance practical knowledge and professional growth. Graduating in December 2025.",
    degree: "Master of Science in Computer Science",
  },
  {
    id: 1,
    school: "Gujarat Technological University",
    img: gtulogo,
    img2: gtulogo2,
    date: "August 2017 - June 2021",
    desc: "Completed Bachelor’s in Computer Science from GTU, building a solid foundation in computing and software development. Studied core subjects including Data Structures, Algorithms, Object-Oriented Programming, Web Development, and Database Management Systems, and applied theoretical knowledge to real-world projects through practical, hands-on work.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    school: "Parth School of Science",
    img: psscLogo,
    img2: psscLogo,
    date: "August 2015 - June 2017",
    desc: "Completed Higher Secondary Education with a focus on Science and Technology, laying a strong foundation in analytical reasoning and problem-solving skills. Gained exposure to fundamental concepts in computing and logical thinking, which supported a smooth transition into technical education and programming.",
    degree: "Higher Secondary Education",
  },
];

export const projects1 = [
  {
    id: 0,
    title: "Undisclosed Debt Monitoring — Equifax",
    description:
      "Contributed to the development of real-time monitoring features to detect undisclosed borrower credit activity during the loan process. Helped reduce lending risks by enabling early identification of new tradelines, inquiries, and delinquencies. Enhanced alert accuracy and reporting logic to support proactive decision-making by lenders. Collaborated with cross-functional teams to improve data reliability and system scalability.",
    image: udmlogo,
    tags: ["Java", "Spring Boot", "JavaScript", "Angular","GCP"],
    github:
      "https://www.equifax.com/business/product/undisclosed-debt-monitoring/",
  },
  {
    id: 1,
    title: "Dual Bureau Monitoring — Equifax",
    description:
      "Contributed to extending Undisclosed Debt Monitoring to dual-bureau coverage, eliminating blind spots and improving credit risk detection. Developed routing and reconciliation logic to surface discrepant tradelines, inquiries, and balance shifts between bureaus. Enhanced alert accuracy and reporting to support faster underwriting decisions and reduced undisclosed debt exposure.",
    image: dbmlogo,
    tags: ["Java", "Spring Boot", "JavaScript", "Angular", "GCP"],
    github:
      "https://www.equifax.com/business/blog/-/insight/article/how-to-monitor-your-pipeline-for-undisclosed-debt/",
  },
];
export const projects2 = [
  {
    id: 2,
    title: "GameXplorer",
    description:
      "Built a full‑stack game discovery platform using Angular and Spring Boot with a MySQL backend, exposing REST APIs for game search, details, and user favorites. Implemented JSON-based screenshot persistence with JPA/Hibernate. Integrated frontend with backend services to enable seamless user interactions and real-time data rendering.",
    image: gxlogo,
    tags: ["Java", "Spring Boot", "Angular","Javascript", "Typescript"],
    github: "https://github.com/patel-ab/gameXplorer",
  },
  {
    id: 3,
    title: "Tax Invoice Generator",
    description:
      "Implemented Spring Boot-based invoice generation tool with dual OCR support (Tesseract + Google Cloud Vision) to extract data from scanned receipts. Designed regex-driven parsing logic to structure raw OCR text into billable line items. Enabled dynamic PDF generation via RESTful endpoints using multipart file uploads and location-based customization. Followed best practices for modular service design, externalized configuration, and scalability across different OCR providers.",
    image: taxlogo,
    tags: ["Java", "Spring Boot", "Google-API", "Tesseract OCR", "Javascript"],
    github: "https://github.com/patel-ab/tax-invoice-generator",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Developed a responsive, portfolio application using React and Tailwind CSS to showcase personal projects, skills, and certifications. Implemented modular components with smooth scroll, section routing, and contact form integration via EmailJS. Optimized performance with Vite bundler and deployed the site on GitHub Pages using CI-based build scripts. Ensured accessibility, mobile responsiveness, and scalable code architecture.",
    image: portfoliologo,
    tags: ["React", "Javascript", "EmailJS", "HTML", "CSS"],
    github: "https://github.com/patel-ab/abhishek-portfolio",
  },
];

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Developer",
    link: "https://www.credly.com/badges/6710e687-969f-405b-b8b4-3a348f9670a2",
    image: awsDeveloperImg,
  },
  {
    id: 3,
    title: "AWS Certified Cloud Practitioner",
    link: "https://www.credly.com/badges/5c1e21d7-28eb-4752-9ba2-ec02736d988e",
    image: awsCloudImg,
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    link: "https://www.credly.com/badges/7f988268-a1c4-4917-aed4-909e9247691d",
    image: awsArchitectImg,
  },
];
