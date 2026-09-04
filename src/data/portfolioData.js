export const personalInfo = {
  name: "Nishant Ranjan",
  role: "Data Analyst",
  tagline: "I transform data into actionable insights and build reliable software solutions using Python, SQL, Power BI, JavaScript, and modern development tools.",
  greeting: "Hi, I'm",
  status: "Available for full-time roles & projects",
  location: "Bengaluru, India",
  email: "nishantranjan183@gmail.com",
  socials: {
    github: "https://github.com/nishant1800",
    linkedin: "https://linkedin.com/in/nishant1800",
    leetcode: "https://leetcode.com/nishant1800"
  },
  resumeUrl: "https://drive.google.com/file/d/1YudiFjipp9KtwsYgYtqGMv7WX2hVVg8A/view?usp=drive_link"
};

export const aboutData = {
  narrative: [
    "I am a motivated Data Science professional with a passion for analyzing data, finding meaningful insights, and solving real-world problems using data.",
    "I use Python, SQL, Pandas, NumPy, Matplotlib, Seaborn, and Power BI for data analysis, EDA, visualization, and creating interactive dashboards.",
    "I thrive on solving intricate algorithmic problems, designing optimized database schemas, and continuously exploring emerging cloud."
  ],
  passions: [
    { title: "Data Analysis & EDA", desc: "Data cleaning, exploratory data analysis, pattern recognition, and statistical validation." },
    { title: "Dashboard Development", desc: "Crafting intuitive Power BI & BI dashboards with high-impact KPI tracking." },
    { title: "Software Applications", desc: "Designing end-to-end full stack web systems, secure APIs, and relational databases." },
    { title: "Algorithmic Problem Solving", desc: "Practicing data structures and algorithms with active coding on LeetCode." },
    { title: "Cloud & Modern Tech", desc: "Exploring containerization, cloud deployment, and next-gen analytics frameworks." }
  ],
  stats: [
    { label: "Experience / Internships", value: "3 Roles" },
    { label: "Featured Projects", value: "5+ Built" },
    { label: "Technical Skills", value: "20+ Tools" },
    { label: "Location", value: "Bengaluru, IN" }
  ]
};

export const experienceData = [
  {
    id: 1,
    role: "Associate Analyst",
    company: "Redical Minds",
    period: "Sepember 2025 – June 2026",
    location: "Bengaluru, India",
    type: "Full-Time",
    current: false,
    responsibilities: [
      "Help customers troubleshoot login, account, and application issues.",
      "Provide step-by-step technical assistance through chat and calls.",
      "Identify recurring issues and communicate them effectively to the engineering team.",
      "Maintain a professional, responsive, and customer-focused approach with high resolution rates."
    ],
    skills: ["Troubleshooting", "System Diagnosis", "Customer Communication", "Issue Tracking", "Tech Support"]
  },
  {
    id: 2,
    role: "SDE Intern",
    company: "Bluestock",
    period: "June 2025 – August 2025",
    location: "Remote",
    type: "Internship",
    current: false,
    responsibilities: [
      "Developed a modern IPO web application tailored for real-time market tracking.",
      "Built backend REST APIs using Node.js and Express.js for low-latency request handling.",
      "Implemented secure user authentication and authorization using JSON Web Tokens (JWT).",
      "Worked with MongoDB for application data models, indexes, and document queries.",
      "Developed robust APIs for user login, IPO information retrieval, and application submissions."
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "JavaScript"]
  },
  {
    id: 3,
    role: "Java Developer Intern",
    company: "Kodnest",
    period: "January 2025 – June 2025",
    location: "Bengaluru, India",
    type: "Internship",
    current: false,
    responsibilities: [
      "Developed an end-to-end e-commerce web application with full product lifecycles.",
      "Implemented secure user registration, session management, and authentication.",
      "Built interactive product browsing, multi-item cart management, and checkout flows.",
      "Worked on order tracking, status updates, and payment management workflows.",
      "Designed normalized relational database structures in MySQL with optimal query indexing.",
      "Integrated REST APIs to connect UI frontends with backend service layers."
    ],
    skills: ["Java", "MySQL", "Database Design", "REST APIs", "Backend Architecture", "OOP"]
  }
];

export const skillsData = [
  {
    category: "Data Analytics",
    iconName: "TrendingUp",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Data Visualization",
      "Statistical Analysis"
    ]
  },
  {
    category: "Business Intelligence",
    iconName: "BarChart3",
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling",
      "Dashboard Development",
      "KPI Analysis"
    ]
  },
  {
    category: "Databases",
    iconName: "Database",
    skills: [
      "SQL",
      "MongoDB",
      "SQL Workbench"
    ]
  },
  {
    category: "Programming",
    iconName: "Code2",
    skills: [
      "Java",
      "Python",
      "SQL",
      "JavaScript",
      "HTML",
      "CSS"
    ]
  },
  {
    category: "Web Development",
    iconName: "Globe",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Bootstrap",
      "Material UI"
    ]
  },
  {
    category: "Tools & Platforms",
    iconName: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "PowerBI",
      "AWS",
      "Linux",
      "Docker",
      "MS-Excel",
      "VS Code",
      "Jupyter Notebook",
      "Canva",
      "Antigravity"
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Banking System",
    category: "Data Analytics",
    tag: "Dashboard",
    description: "This project focuses on analyzing banking customer data to identify important business insights and customer trends.",
    details: "The analysis helps understand customer demographics, account information, financial behavior, and other important banking-related patterns.",
    technologies: ["Python", "NumPy", "Pandas", "SQL", "Matplotlib", "Seaborn", "PowerBI"],
    githubUrl: "https://github.com/nishant1800/Banking-System",
    liveUrl: null,
    featured: true,
    metrics: "Data-Driven Banking Insights"
  },
  {
    id: 2,
    title: "Customer Behavior Analysis",
    category: "Data Analytics",
    tag: "Business Intelligence",
    description: "An analytical project focused on cleaning sales data, performing exploratory analysis, identifying business trends, and creating an interactive Power BI dashboard.",
    details: "Processed multi-year regional sales datasets using Python (Pandas/NumPy), modeled data with Power Query & DAX measures, and created visual executive KPI reports.",
    technologies: ["Python", "Pandas", "NumPy", "Power BI", "SQL", "DAX"],
    githubUrl: "https://github.com/nishant1800/Customer-Behavior-Analysis",
    liveUrl: null,
    featured: true,
    metrics: "Identified 18% YoY growth patterns"
  },
  {
    id: 3,
    title: "Netflix Data Analysis",
    category: "Data Analytics",
    tag: "EDA",
    description: "Exploratory data analysis project investigating content distribution, genres, seasons, ratings, and other patterns in streaming data.",
    details: "In-depth Jupyter analysis analyzing international content releases, director-cast graphs, genre distribution, runtime evolution, and sentiment across catalog tags.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    githubUrl: "https://github.com/nishant1800/Netflix-Data-Analysis",
    liveUrl: null,
    featured: true,
    metrics: "8,800+ titles processed & visualized"
  },
  {
    id: 4,
    title: "Weather App",
    category: "Web Development",
    tag: "Featured App",
    description: "A responsive weather application that retrieves real-time weather information through an external API and presents it through a clean and intuitive interface.",
    details: "Features dynamic temperature unit switching, multi-day forecasts, atmospheric pressure, wind metrics, geolocation lookup, and animated responsive weather cards.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Material UI", "Weather API"],
    githubUrl: "https://github.com/nishant1800/Weather-App",
    liveUrl: "https://weatherappfor.vercel.app/",
    featured: true,
    metrics: "Real-time weather data integration using external API"
  },
  {
    id: 5,
    title: "Airbnb",
    category: "Web Development",
    tag: "Featured App",
    description: "A property rental platform where users can explore listings, view property details, and manage bookings through a seamless and user-friendly interface.",
    details: "Features property search, advanced filters, detailed listings, location-based discovery, booking management, and a seamless rental experience.",
    technologies: ["React", "HTML", "CSS", "Material UI", "NodeJs", "ExpressJs", "EJS", "MongoDB"],
    githubUrl: "https://github.com/nishant1800/Airbnb",
    liveUrl: "https://airbnb-a04e.onrender.com",
    featured: true,
    metrics: "End-to-end booking management"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Masters of Technology",
    institution: "Teerthanker Mahaveer University, Moradabad",
    department: "Machine Learning & Data Science",
    period: "2026 – Present",
    location: "India",
    current: true
  },
  {
    id: 2,
    degree: "Bachelors of Technology",
    institution: "Bihar Engineering University, Patna",
    // department: "Civil Engineering",
    period: "2020 – 2024",
    location: "India",
    current: false
  }
];