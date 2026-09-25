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
import kubernetesLogo from "./assets/tech_logo/kubernetes.svg";
import kafkaLogo from "./assets/tech_logo/kafka.svg";
import githubActionsLogo from "./assets/tech_logo/githubactions.svg";
import junitLogo from "./assets/tech_logo/junit.svg";
import sonarqubeLogo from "./assets/tech_logo/sonarqube.svg";
import swaggerLogo from "./assets/tech_logo/swagger.svg";
import jwtLogo from "./assets/tech_logo/jwt.svg";
import openaiLogo from "./assets/tech_logo/openai.svg";
import ragLogo from "./assets/tech_logo/rag.svg";
import llmLogo from "./assets/tech_logo/llm.svg";
import promptEngineeringLogo from "./assets/tech_logo/promptengineering.svg";
import bedrockLogo from "./assets/tech_logo/bedrock.svg";
import graphqlLogo from "./assets/tech_logo/graphql.svg";

// Experience Section Logo's
import msulogo from "./assets/company_logo/MSU-1.png";
import msulogo2 from "./assets/company_logo/MSU-2.png";
import tcslogo from "./assets/company_logo/TCS-1.png";
import tcslogo2 from "./assets/company_logo/TCS-2.png";
// import ctp1 from "./assets/company_logo/CTP-1.png";
import epiclogo from "./assets/company_logo/epic_logo.png";

// Education Section Logo's
import gtulogo from "./assets/education_logo/GTU-1.png";
import gtulogo2 from "./assets/education_logo/GTU-2.png";
import psscLogo from "./assets/education_logo/pssc.png";

// Project Section Logo's
import udmlogo from "./assets/projects_logo/UDM.png";
import dbmlogo from "./assets/projects_logo/DBM.png";
import gxlogo from "./assets/projects_logo/gamexplorer.png";
import taxlogo from "./assets/projects_logo/tax.png";
import PCPLogo from "./assets/projects_logo/PCPLogo.png";
// import PRILogo from "./assets/projects_logo/SeedsDB.png";
// import WIPLogo from "./assets/projects_logo/WIP.png";
import BHLogo from "./assets/projects_logo/BrightHire.png";
import MRPLogo from "./assets/projects_logo/MRP.png";
import ECRLogo from "./assets/projects_logo/ECR.png";
import ECALogo from "./assets/projects_logo/ECA.png";
import ECTLogo from "./assets/projects_logo/ECT.png";

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
    title: "AI & LLM",
    skills: [
      { name: "OpenAI API", logo: openaiLogo },
      { name: "RAG", logo: ragLogo },
      { name: "LLM Integration", logo: llmLogo },
      { name: "Prompt Engineering", logo: promptEngineeringLogo },
      { name: "AWS Bedrock", logo: bedrockLogo },
    ],
  },
  {
    title: "Cloud and DevOps",
    skills: [
      { name: "AWS", logo: awsLogo },
      { name: "GCP", logo: gcpLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Kubernetes", logo: kubernetesLogo },
      { name: "Jenkins", logo: jenkinsLogo },
      { name: "GitHub Actions", logo: githubActionsLogo },
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
  {
    title: "APIs, Testing & Auth",
    skills: [
      { name: "Apache Kafka", logo: kafkaLogo },
      { name: "REST APIs", logo: swaggerLogo },
      { name: "GraphQL", logo: graphqlLogo },
      { name: "JWT / OAuth2", logo: jwtLogo },
      { name: "JUnit", logo: junitLogo },
      { name: "SonarQube", logo: sonarqubeLogo },
    ],
  },
];

export const experiences = [
  {
  id: 0,
  role: "Software Engineer",
  company: "Epic Medical Research",
  img: epiclogo,
  img2: epiclogo,
  date: "January 2026 - Present",
  desc: "Designing and building AI-powered tools for clinical research operations, including a conversational patient-eligibility screener, a retrieval-augmented chat assistant grounded in clinical protocol documents, and background-job automation for patient outreach. Focused on making LLM features fast, cost-controlled, and secure enough for a HIPAA-regulated environment, while collaborating cross-functionally with clinical and product teams to translate research workflows into software.",
  skills: [
    "Python",
    "OpenAI API",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Java",
    "Spring Boot",
    "MSSQL",
    "AWS Lambda",
    "DynamoDB",
    "AWS Bedrock",
    "AWS Elastic Beanstalk",
    "OAuth2",
    "JWT",
  ],
},
  // {
  // id: 0,
  // role: "Software Engineer Intern",
  // company: "Changing The Present",
  // img: ctp1,
  // img2: ctp1,
  // date: "January 2026 - Present",
  // desc: "Worked on improving backend systems for a multi-tenant e-commerce platform with a focus on data reliability, system performance, and efficient processing workflows. Contributed to building scalable services, improving overall platform efficiency, and supporting reliable application behavior across distributed storefront operations.",
  // skills: [
  //   "Python",
  //   "PostgreSQL",
  //   "Amazon RDS",
  //   "AWS CloudFront",
  //   "AWS Lambda",
  //   "Backend Development"
  // ],
  // },
  // {
  // id: 1,
  // role: "Web Developer",
  // company: "Michigan State University | Lowry Lab",
  // img: msulogo,
  // img2: msulogo2,
  // date: "October 2025 - December 2025",
  // desc: "Developed the MSU Plant Biology Department website for Seeds Collection Research Project to highlight ongoing research, faculty profiles, and academic initiatives. Focused on building responsive layouts, improving accessibility, and integrating dynamic content updates to enhance user engagement and visibility.",
  // skills: [
  //   "Angular",
  //   "JavaScript",
  //   "HTML",
  //   "CSS",
  //   "Web Development",
  //   "UI/UX Design",
  //   "Accessibility",
  //   "Responsive Design",
  // ],
  // },
  {
    id: 2,
    role: "Graduate Teaching Assistant",
    company: "Michigan State University",
    img: msulogo,
    img2: msulogo2,
    date: "January 2025 - May 2025",
    desc: "TA for CSE 335 - Object Oriented Software Development, mentoring students in Java through real-world coding challenges and debugging. Led 15 Learning Assistants to deliver structured academic support, improve course outcomes, and help students build confidence in writing clean, maintainable code.",
    skills: [
      "Object Oriented Programming",
      "Java",
      "Leadership",
      "Mentoring",
      "Debugging",
      "Software Design Patterns",
      "Software Design Principles",
    ],
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Tata Consultancy Services",
    img: tcslogo,
    img2: tcslogo2,
    date: "July 2021 - December 2023",
    desc: "Built and maintained backend microservices for a large-scale credit-monitoring platform, including event-driven webhook services and scheduled data-ingestion pipelines that replaced manual processes. Worked in agile sprints with continuous integration and containerized deployments, and maintained high automated test coverage to keep releases reliable across a fast-moving codebase.",
    skills: [
      "Java",
      "Spring Boot",
      "Python",
      "Docker",
      "Kubernetes",
      "AWS",
      "Elasticsearch",
      "Microservices",
      "REST APIs",
      "Webhooks",
      "JUnit",
      "Mockito",
      "CI/CD",
      "Agile",
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
    desc: "Completed Master’s in Computer Science at MSU, with a strong foundation in programming, development, and software engineering principles. Coursework includes subjects like Data Structures and Algorithms, Advanced Software Engineering, Distributed Systems etc. Actively engaging in workshops and technical events to enhance practical knowledge and professional growth. Graduating in December 2025.",
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
      "Real-time monitoring service that flags undisclosed borrower credit activity during the loan process, helping lenders catch risk before it closes.",
    highlights: [
      { label: "Early risk detection", detail: "surfaced new tradelines, inquiries, and delinquencies in real time so lenders could act before loan close" },
      { label: "Sharper alerting", detail: "improved alert accuracy and reporting logic to cut noise and support proactive lending decisions" },
      { label: "Cross-functional delivery", detail: "worked with distributed teams to improve data reliability and scale the system for production credit-bureau volume" },
    ],
    image: udmlogo,
    tags: ["Java", "Spring Boot", "AWS", "Elasticsearch","Jenkins", "Docker"],
    github:
      "https://www.equifax.com/business/product/undisclosed-debt-monitoring/",
  },
  {
    id: 6,
    title: "eClinRecruit — AI Clinical Trial Recruitment Platform",
    description:
      "Full-stack recruitment platform, architected and built solo, that clinical research staff use to source, screen, and book patients for clinical trials with the help of an AI voice-screening agent.",
    highlights: [
      { label: "Built solo, end to end", detail: "owned the full backend (.NET 8), frontend (React), and deployment pipeline" },
      { label: "AI voice-screening agent", detail: "outbound/inbound call handling that runs live eligibility screening conversations, not just static SMS scripts" },
      { label: "Lead-to-booking pipeline", detail: "ingests leads from Meta ad campaigns, tracks patients through screening, and books qualified patients via calendar integration" },
      { label: "Bidirectional sync engine", detail: "designed the patient-status state machine that decides whether an inbound sync updates, rejects, or leaves a record untouched — without ever overwriting an already-booked patient" },
      { label: "Shipped to production", detail: "Azure Pipelines building and deploying to AWS Elastic Beanstalk" },
    ],
    image: ECRLogo,
    tags: ["C#", ".NET 8", "Entity Framework Core", "React", "SignalR", "Twilio Voice SDK", "Azure AD SSO", "AWS Elastic Beanstalk", "Meta Ads API", "AI Voice Agent"],
    github: "https://epicmedresearch.eclinrecruit.ai/login",
  },
  {
    id: 7,
    title: "Study Assistant (EclinAsk) — RAG-Powered Clinical Protocol Assistant",
    description:
      "Document-grounded Q&A platform, built solo, that lets clinical research staff ask plain-English questions about a trial's protocol and get answers with page-level citations back to the source PDF.",
    highlights: [
      { label: "Full RAG pipeline, solo", detail: "chunked PDF ingestion with atomic re-indexing, hybrid retrieval (vector similarity + full-text search + clinical-synonym expansion), and diversity re-ranking across source documents" },
      { label: "Citation hallucination guard", detail: "validates every citation the model emits against what was actually retrieved — a fabricated citation in a clinical context is worse than none at all" },
      { label: "Page-level source citations", detail: "answers link straight back to the exact page of the protocol PDF instead of asking staff to trust the model" },
      { label: "Auto-generated reference tabs", detail: "eligibility criteria, prohibited medications, and schedule of events pre-built so common lookups skip the chat entirely" },
    ],
    image: ECALogo,
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "pgvector", "Deno Edge Functions", "OpenAI API", "RAG", "Vite", "Tailwind CSS"],
    github: "https://eclinask.com/login",
  },
  {
    id: 8,
    title: "eClinTrials — Patient Recruitment & Eligibility Screening Site",
    description:
      "Two-sided platform, built solo end to end: a public site where patients screen themselves for clinical trials, and a staff dashboard for managing trials and sync health.",
    highlights: [
      { label: "Full two-sided build", detail: "public trial-browsing + screening site, plus a staff dashboard for trial management, submission review, and sync monitoring" },
      { label: "Deterministic eligibility engine", detail: "evaluates inclusion/exclusion criteria and flags duplicate submissions in real time" },
      { label: "Hardest problem: external sync", detail: "bidirectional sync with the company's trial-management platform — normalizing inconsistent data, batching outbound updates, and reconciling webhook confirmations" },
      { label: "Fail-safe audit logging", detail: "sync failures are still logged even when the surrounding transaction rolls back" },
      { label: "SSO-only auth", detail: "Azure AD login with no password-based path at all" },
    ],
    image: ECTLogo,
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "React", "TypeScript", "Azure AD SSO", "AWS S3", "REST APIs"],
    github: "https://uat.eclinconnect.com/",
  },
];
export const projects2 = [
  {
    id: 2,
    title: "GameXplorer",
    description:
      "Full-stack game discovery platform with a normalized MySQL schema and indexed REST endpoints built to keep search-heavy queries fast.",
    highlights: [
      { label: "Indexed data layer", detail: "normalized MySQL schema and indexed REST endpoints for fast game search, details, and favorites lookups" },
      { label: "JSON-based persistence", detail: "screenshot data persisted via JPA/Hibernate without a separate media store" },
      { label: "Full-stack integration", detail: "Angular frontend wired to Spring Boot services for real-time, seamless data rendering" },
    ],
    image: gxlogo,
    tags: ["Angular","Javascript", "Typescript", "Java", "Spring Boot"],
    github: "https://github.com/patel-ab/gameXplorer",
  },
  {
    id: 3,
    title: "BrightHire — Intelligent Recruitment Platform",
    description:
      "Event-driven recruitment platform with an NLP-based ranking engine that scores candidate-job fit by semantic similarity instead of keyword matching.",
    highlights: [
      { label: "Event-driven architecture", detail: "asynchronous pipelines built on Kafka handle large application volumes with real-time updates and horizontal scalability" },
      { label: "Semantic candidate ranking", detail: "NLP-based engine scores candidate-job fit using embeddings, beating keyword-based shortlisting on relevance" },
      { label: "Secure by design", detail: "OAuth2/JWT authentication with Redis-backed session management across candidate and recruiter workflows" },
    ],
    image: BHLogo,
    tags: ["Java", "Spring Boot", "React", "JavaScript", "Python", "Apache Kafka", "Redis", "MongoDB", "OAuth 2.0", "JWT", "Docker", "Amazon S3"],
    github: "https://github.com/patel-ab/BrightHire",
  },

      {
    id: 4,
    title: "Movie Revenue Predictor",
    description:
      "ML forecasting system that predicts box office revenue by combining numerical, categorical, and BERT-embedded textual movie data into one modeling pipeline.",
    highlights: [
      { label: "Unified modeling pipeline", detail: "feature engineering and preprocessing across numerical, categorical, and text inputs into one revenue-prediction model" },
      { label: "BERT text embeddings", detail: "applied BERT-based embeddings plus PCA-driven dimensionality reduction to feed a neural network predictor" },
      { label: "External signal enrichment", detail: "extended the pipeline with automated rating enrichment to pull in outside movie-review signals" },
    ],
    image: MRPLogo,
    tags: ["Python", "TensorFlow", "Keras", "BERT", "PCA", "Neural Networks", "NumPy", "Pandas", "Scikit-learn", "BeautifulSoup", "REST APIs"],
    github: "https://github.com/patel-ab/Movie-Revenue-Predictor",
  },
    {
    id: 4,
    title: "Tax Invoice Generator",
    description:
      "Spring Boot invoice tool with dual OCR support (Tesseract + Google Cloud Vision) that turns scanned receipts into structured, billable line items.",
    highlights: [
      { label: "Dual OCR pipeline", detail: "swappable Tesseract / Google Cloud Vision providers behind one modular service interface" },
      { label: "Regex-driven parsing", detail: "structures raw OCR text into clean, billable line items" },
      { label: "Dynamic PDF generation", detail: "RESTful endpoints with multipart uploads and location-based invoice customization" },
    ],
    image: taxlogo,
    tags: ["Java", "Spring Boot", "Google-API", "Tesseract OCR", "Javascript"],
    github: "https://github.com/patel-ab/tax-invoice-generator",
  },
  {
    id: 5,
    title: "Pattern Recognition ML Pipeline",
    description:
      "Modular ML pipeline that compares algorithmic tradeoffs across five classifier families, tuned with cross-validation and grid search.",
    highlights: [
      { label: "Five classifiers compared", detail: "SVM, Random Forest, Logistic Regression, k-NN, and Naïve Bayes, each tuned via cross-validation and grid search" },
      { label: "Rigorous evaluation", detail: "precision, recall, F1-score, and confusion matrices with comparative visualization in Matplotlib" },
      { label: "Built for reuse", detail: "modular preprocessing, feature scaling, and PCA reduction designed to plug into new classification datasets" },
    ],
    image: PCPLogo,
    tags: ["Python", "Machine Learning", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/patel-ab/ML-pattern-classification-pipeline",
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
