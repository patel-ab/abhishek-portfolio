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
    desc: "TA for CSE-335 Object Oriented Software Development, mentoring students in Java and C++ through real-world coding challenges and debugging. Led 15 Learning Assistants to deliver structured technical support, improve course outcomes, and help students build confidence in writing clean, maintainable code.",
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
    desc: "Worked as a Fullstack Engineer, delivering scalable backend microservices and performant frontend applications using Java, Spring Boot and Angular. Collaborated with cross-functional Agile teams to build and optimize a Credit Bureau Integration platform, improving database response times by 40% and enhancing user experience with lazy loading and route-based code splitting.",
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
    desc: "Pursuing Master’s in Computer Science at MSU, with a strong foundation in programming, software development, and computer science principles. Coursework includes Data Structures and Algorithms, Advanced Software Engineering, Distributed Systems. Actively engaging in workshops and technical events to enhance practical knowledge and professional growth. Expected to graduate in December 2025.",
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
    desc: "Completed Higher Secondary Education with a focus on Science and Technology, laying a strong foundation in analytical reasoning and problem-solving skills. Gained exposure to fundamental concepts in computing and logical thinking, which supported a smooth transition into technical education and programming ",
    degree: "Higher Secondary Education",
  },
];

export const projects1 = [
  {
    id: 0,
    title: "Undisclosed Debt Monitoring — Equifax",
    description:
      "Developed real-time monitoring features to detect undisclosed borrower credit activity during the loan process. Helped reduce lending risks by enabling early identification of new tradelines, inquiries, and delinquencies.Enhanced alert accuracy and reporting logic to support proactive decision-making by lenders. Collaborated with cross-functional teams to improve data reliability and system scalability.",
    image: udmlogo,
    tags: ["Java", "Spring Boot", "JavaScript", "Angular", "API", "GCP"],
    github:
      "https://www.equifax.com/business/product/undisclosed-debt-monitoring/",
  },
  {
    id: 1,
    title: "Dual Bureau Monitoring — Equifax",
    description:
      "Extended Undisclosed Debt Monitoring to dual‑bureau coverage (Equifax + TransUnion) to eliminate blind spots and improve credit risk detection. Built routing and reconciliation logic to surface discrepant tradelines, inquiries, and balance shifts between bureaus. Improved alert accuracy and reporting to support faster underwriting decisions and reduce undisclosed debt exposure.",
    image: dbmlogo,
    tags: ["Java", "Spring Boot", "JavaScript", "Angular", "API", "GCP"],
    github:
      "https://www.equifax.com/business/blog/-/insight/article/how-to-monitor-your-pipeline-for-undisclosed-debt/",
  },
];
export const projects2 = [
  {
    id: 2,
    title: "Need to Add",
    description:
      "Need to ADD",
    image: udmlogo,
    tags: [],
    github: "",
  },
  {
    id: 3,
    title: "Need to Add",
    description:
      "Need to ADD",
    image: udmlogo,
    tags: [],
    github: "",
  },
  {
    id: 4,
    title: "Need to Add",
    description:
      "Need to ADD",
    image: udmlogo,
    tags: [],
    github: "",
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
