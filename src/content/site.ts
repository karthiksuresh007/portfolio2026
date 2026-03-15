import {
  type AchievementItem,
  type CaseStudyProject,
  type CredentialItem,
  type EducationItem,
  type ProofItem,
  type SiteConfig,
  type SkillGroup,
  type TimelineItem
} from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Karthik Suresh",
  role: "Full-Stack Web Developer",
  headline:
    "Full-stack web developer building clean, responsive products with React, Next.js, Node.js, and practical AI integrations.",
  founderPitch:
    "I like products that turn complexity into a simple user flow - whether that is interview prep, agricultural advisory, commerce, or backend-heavy insight platforms.",
  engineeringPov:
    "My work leans frontend-first in feel, but full-stack in ownership: usable interfaces, structured APIs, predictable application flow, and production-minded implementation.",
  brandPromise: "Building useful web products with clean UX and dependable engineering.",
  shortBio:
    "Full-stack web developer with strong React and Next.js experience, focused on shipping responsive products that are clear, fast, and practical to use.",
  longBio:
    "I enjoy building software that feels simple on the surface and solid underneath. My projects span AI-driven learning tools, agricultural advisory systems, commerce flows, and backend-heavy analysis platforms. Across all of them, I focus on UI clarity, reliable system structure, and making the product easier to understand at first glance.",
  availability: "Open to product engineering roles, web development internships, and startup teams.",
  availabilityDetail:
    "Best fit for teams building modern web apps, AI-enabled products, internal tools, and user-facing platforms where both execution speed and interface quality matter.",
  basedIn: "Kerala, India",
  yearsLabel: "B.Tech CSE",
  resumeHref: "/resume/12216314_KarthikSuresh_LATEST.pdf",
  primaryLinks: [
    {
      label: "View projects",
      href: "/work"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/karthiksuresh007",
      event: "github_click"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/karthik-suresh007/",
      event: "linkedin_click"
    },
    {
      label: "Resume",
      href: "/resume/12216314_KarthikSuresh_LATEST.pdf",
      event: "resume_click"
    }
  ],
  contactLinks: [
    {
      label: "Email",
      href: "mailto:karthiksuresh897@gmail.com",
      event: "contact_click"
    },
    {
      label: "Phone",
      href: "tel:+919496935553",
      event: "contact_click"
    },
    {
      label: "GitHub",
      href: "https://github.com/karthiksuresh007",
      event: "github_click"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/karthik-suresh007/",
      event: "linkedin_click"
    },
    {
      label: "Resume",
      href: "/resume/12216314_KarthikSuresh_LATEST.pdf",
      event: "resume_click"
    }
  ]
};

export const featuredProjects: CaseStudyProject[] = [
  {
    slug: "prepmate-ai",
    title: "PrepMate-AI",
    eyebrow: "AI Interview Assistant",
    outcome:
      "An AI-powered interview preparation platform with role-specific technical Q&A, saved sessions, and secure user flows.",
    summary:
      "PrepMate-AI is a strong full-stack product story because it combines AI integration, authentication, session design, and a clean frontend experience in one coherent workflow. It shows how I build practical AI features around a real user need instead of treating AI as just a demo layer.",
    role: "Full-stack / MERN / Gemini AI",
    timeline: "Nov 2023",
    stack: ["React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Gemini AI", "JWT"],
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "A collaborative workspace representing interview preparation and AI-assisted learning.",
    accent: "from-[#eee2d3] via-[#dce5dc] to-[#f8f0e6]",
    featured: true,
    metrics: [
      {
        value: "AI Q&A",
        label: "Role-based technical question generation"
      },
      {
        value: "JWT",
        label: "Secure auth and saved sessions"
      },
      {
        value: "MERN",
        label: "End-to-end full-stack implementation"
      }
    ],
    chapters: [
      {
        title: "Context",
        body:
          "Interview preparation platforms often feel static or repetitive. PrepMate-AI was built around a more adaptive experience - helping users prepare with technical questions and explanations that feel more tailored to the role they are targeting."
      },
      {
        title: "Challenge",
        body:
          "The core challenge was to combine AI-generated content with a product flow that still felt structured and reliable. That meant handling authentication, saved sessions, pinned content, and dynamic question progression without letting the interface become messy."
      },
      {
        title: "Build Decisions",
        body:
          "I used the MERN stack to keep the product cohesive across client and server. React and Tailwind helped create a clean, responsive UI, while Node.js, Express.js, and MongoDB handled user/session management. Gemini AI was integrated for role-specific Q&A and explanation generation, and JWT auth kept the user flow secure."
      },
      {
        title: "Outcome",
        body:
          "PrepMate-AI proves that I can build AI-enhanced products in a practical way: not just connecting an API, but wrapping it in a usable experience with persistence, security, and a clear workflow."
      }
    ],
    lessons: [
      "AI is most useful when it improves a real user loop, not just content generation.",
      "Session structure matters when a product is meant to be used repeatedly.",
      "Good AI UX still depends on predictability, clarity, and trust."
    ],
    projectLinks: [
      {
        label: "Browse GitHub profile",
        href: "https://github.com/karthiksuresh007",
        event: "project_open"
      }
    ]
  },
  {
    slug: "digital-krishi-officer",
    title: "Digital Krishi Officer",
    eyebrow: "AI Agricultural Advisory",
    outcome:
      "A full-stack advisory platform that lets farmers submit crop queries and receive structured AI-powered recommendations.",
    summary:
      "Digital Krishi Officer stands out because it applies AI in a practical, domain-specific way. It is not just an interface exercise - it connects farmer inputs, advisory generation, and system workflows into one usable platform with a clear social and product purpose.",
    role: "Full-stack / Next.js / AI workflow",
    timeline: "Dec 2023",
    stack: ["Next.js", "React", "Node.js", "Express.js", "Firebase Auth", "Firestore", "Gemini AI", "TailwindCSS"],
    heroImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "An agricultural field representing an AI advisory platform for farmers.",
    accent: "from-[#dde7d7] via-[#efe6d8] to-[#d3ddd2]",
    featured: true,
    metrics: [
      {
        value: "AI Advice",
        label: "Structured agricultural recommendations"
      },
      {
        value: "Next.js",
        label: "Responsive farmer-facing frontend"
      },
      {
        value: "REST APIs",
        label: "Backend workflows for query processing"
      }
    ],
    chapters: [
      {
        title: "Context",
        body:
          "Digital Krishi Officer was built to support farmers with actionable field guidance. The product challenge was to make crop query submission simple while ensuring the advisory output felt structured, understandable, and useful in practice."
      },
      {
        title: "Challenge",
        body:
          "Agricultural workflows have real-world consequences, so the platform could not just return generic AI text. The system needed a clean query flow, reliable processing, and a frontend that felt accessible to users who care more about clear guidance than software complexity."
      },
      {
        title: "Build Decisions",
        body:
          "I built the frontend with React and Next.js for a responsive and modern query experience. On the backend, Node.js and Express.js handled REST APIs and advisory workflows, while Gemini AI processed queries into structured responses. Firebase Auth and Firestore supported user and system data management."
      },
      {
        title: "Outcome",
        body:
          "This project demonstrates my ability to work on products where technical systems need to support a meaningful domain problem. It is a clear example of combining AI, frontend usability, and workflow design into a focused end-to-end product."
      }
    ],
    lessons: [
      "Domain-specific products need structure more than feature overload.",
      "AI output becomes more useful when the surrounding workflow is clear.",
      "A strong frontend matters even more when the product serves non-technical users."
    ],
    projectLinks: [
      {
        label: "Browse GitHub profile",
        href: "https://github.com/karthiksuresh007",
        event: "project_open"
      }
    ]
  },
  {
    slug: "chakravyuh-ai",
    title: "Chakravyuh AI",
    eyebrow: "Global Conflict Impact Analyzer",
    outcome:
      "A backend-focused platform built to analyze how global conflicts affect supply chains, fuel availability, and trade.",
    summary:
      "Chakravyuh AI is the most system-heavy project in the portfolio. It shows backend thinking, API design, data ingestion, and architecture work aimed at turning large, multi-source datasets into usable insights for a frontend layer.",
    role: "Backend-focused full-stack engineer",
    timeline: "May 2024",
    stack: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Data Processing"],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Analytics dashboard screens representing geopolitical and supply-chain analysis.",
    accent: "from-[#ece3d7] via-[#dbe3da] to-[#f4ece4]",
    featured: true,
    metrics: [
      {
        value: "REST APIs",
        label: "Insight delivery to the frontend"
      },
      {
        value: "Pipelines",
        label: "Multi-source data ingestion and processing"
      },
      {
        value: "Scale",
        label: "Architecture built for large datasets"
      }
    ],
    chapters: [
      {
        title: "Context",
        body:
          "Chakravyuh AI was built around a high-information problem: understanding how global conflicts influence supply chains, fuel availability, and trade. The product value came from transforming complex external data into insight the frontend could actually use."
      },
      {
        title: "Challenge",
        body:
          "The main challenge was not visual design - it was building a backend platform capable of collecting, processing, and serving large amounts of geopolitical and economic data while staying scalable and near real-time in its update model."
      },
      {
        title: "Build Decisions",
        body:
          "I developed REST APIs with Node.js and Express.js to process and expose insights to the frontend. MongoDB supported the data layer, while ingestion pipelines handled information from multiple sources. The backend architecture was designed to keep the system scalable as data volume and update frequency increased."
      },
      {
        title: "Outcome",
        body:
          "Chakravyuh AI adds a strong backend and systems signal to the portfolio. It shows that I am comfortable working beyond UI-heavy projects and can design the data-handling layer needed for products built around analysis and dynamic insights."
      }
    ],
    lessons: [
      "Insight platforms depend on data flow quality as much as API quality.",
      "Scalable architecture choices matter early when the dataset can grow quickly.",
      "Backend-heavy products still need to think about how insight becomes usable."
    ],
    projectLinks: [
      {
        label: "Browse GitHub profile",
        href: "https://github.com/karthiksuresh007",
        event: "project_open"
      }
    ]
  }
];

export const supportingProjects: CaseStudyProject[] = [
  {
    slug: "food-delivery-website",
    title: "Food Delivery Website",
    eyebrow: "MERN Commerce Platform",
    outcome:
      "A fully functional MERN-based food delivery platform built around responsive browsing and efficient order processing.",
    summary:
      "This project is a solid full-stack foundation piece. It shows practical MERN implementation, responsive frontend development, and backend workflow handling for an ordering platform.",
    role: "Full-stack / MERN",
    timeline: "Mar 2024",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    heroImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Food and dining image representing a delivery platform.",
    accent: "from-[#ede2d4] via-[#e3e9df] to-[#f7efe6]",
    featured: false,
    metrics: [
      {
        value: "MERN",
        label: "End-to-end stack implementation"
      },
      {
        value: "Orders",
        label: "Backend designed for processing flow"
      },
      {
        value: "Responsive",
        label: "Frontend built for seamless browsing"
      }
    ],
    chapters: [
      {
        title: "Context",
        body:
          "This platform was built as a practical full-stack commerce experience, with the frontend focused on a smooth ordering journey and the backend built to support efficient processing."
      },
      {
        title: "Challenge",
        body:
          "Food ordering products need to stay responsive and easy to navigate while still handling data, state, and backend actions cleanly."
      },
      {
        title: "Build Decisions",
        body:
          "I used React.js for a dynamic frontend experience and Node.js with Express.js for backend processing. MongoDB handled data management and helped support a more fluid real-time experience."
      },
      {
        title: "Outcome",
        body:
          "The project demonstrates a dependable MERN foundation and shows how I approach standard full-stack products with clean structure and usability in mind."
      }
    ],
    lessons: [
      "Commerce experiences benefit from simple visual hierarchy and stable state handling.",
      "A strong MERN project is still a useful signal when the execution is clean."
    ],
    projectLinks: [
      {
        label: "Browse GitHub profile",
        href: "https://github.com/karthiksuresh007",
        event: "project_open"
      }
    ]
  }
];

export const proofItems: ProofItem[] = [
  {
    title: "Frontend strength with real full-stack breadth",
    body:
      "The project set spans React, Next.js, Node.js, Express.js, MongoDB, Firebase, and AI integrations - which makes the portfolio useful to recruiters looking for both UI strength and full-stack execution."
  },
  {
    title: "AI work grounded in actual products",
    body:
      "Projects like PrepMate-AI, Digital Krishi Officer, and Chakravyuh AI show that I use AI as part of a complete workflow, not just as a surface feature."
  },
  {
    title: "Comfortable across user-facing and backend-heavy work",
    body:
      "From responsive interfaces to REST APIs, auth flows, session logic, and data pipelines, I can contribute on both the visible product layer and the supporting system layer."
  }
];

export const approachItems: ProofItem[] = [
  {
    title: "Responsive interfaces first",
    body:
      "I care about the first impression of a product - clear hierarchy, readable layout, and a UI that feels intentional without becoming heavy."
  },
  {
    title: "Practical full-stack ownership",
    body:
      "I build the frontend, structure the API layer, and keep the data and workflow logic understandable as the product grows."
  },
  {
    title: "Useful over noisy",
    body:
      "I prefer minimal but effective product design: enough context to feel credible, enough polish to feel strong, and no excess writing that slows the reader down."
  }
];

export const timeline: TimelineItem[] = [
  {
    year: "2023",
    title: "AI and applied product work",
    detail: "Built PrepMate-AI and Digital Krishi Officer, combining practical AI workflows with responsive full-stack product development."
  },
  {
    year: "2024",
    title: "Backend analysis and MERN delivery",
    detail: "Expanded into backend-heavy work with Chakravyuh AI while continuing to strengthen consumer-style product flows with a food delivery platform."
  },
  {
    year: "Now",
    title: "Recruiter-ready product engineering profile",
    detail: "Focused on becoming a stronger product-oriented full-stack developer with a portfolio that shows both implementation quality and project range."
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["C++", "JavaScript", "C", "PHP", "Python", "Java"]
  },
  {
    title: "Frameworks",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "TailwindCSS"]
  },
  {
    title: "Tools & Platforms",
    items: ["MySQL", "MongoDB", "Firebase"]
  },
  {
    title: "Soft Skills",
    items: ["Problem-Solving", "Team Player", "Project Management", "Adaptability"]
  }
];

export const education: EducationItem[] = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    detail: "Bachelor of Technology in Computer Science and Engineering, CGPA: 7.5",
    timeline: "Since August 2022"
  },
  {
    institution: "St. Ephrems, Mannanam",
    location: "Mannanam, Kerala",
    detail: "Intermediate, Percentage: 90.6%",
    timeline: "April 2020 - March 2022"
  },
  {
    institution: "Holy Cross HSS, Thellakom",
    location: "Thellakom, Kerala",
    detail: "Matriculation, Percentage: 98%",
    timeline: "April 2019 - March 2020"
  }
];

export const certificates: CredentialItem[] = [
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy - Abdul Bari",
    timeline: "Mar 2024"
  },
  {
    title: "Building Web Applications in PHP",
    issuer: "Coursera",
    timeline: "May 2024"
  },
  {
    title: "Server-side JavaScript with Node.js",
    issuer: "Coursera",
    timeline: "July 2023"
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp for 2024",
    issuer: "Udemy - Dr. Angela Yu",
    timeline: "Sep 2023"
  },
  {
    title: "Social Network Analysis",
    issuer: "NPTEL",
    timeline: "Dec 2023"
  }
];

export const achievements: AchievementItem[] = [
  {
    title: "4-Star HackerRank Ratings",
    detail: "Achieved 4-star ratings in C++, Java, and Problem Solving."
  },
  {
    title: "Certified 4-Star Coder",
    detail: "Strong problem-solving profile supported by structured programming practice."
  }
];

export const allProjects = [...featuredProjects, ...supportingProjects];
