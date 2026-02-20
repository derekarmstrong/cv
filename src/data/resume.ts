export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  summary: string;
  email: string;
  socials: {
    linkedin?: string;
    github?: string;
  };
}

export const profile: Profile = {
  name: "Derek Armstrong",
  title: "Solutions Architect and Software Engineer",
  location: "Stockholm, Sweden",
  summary: "Full-Stack Developer and Systems Engineer with 10+ years of experience shipping real software and infrastructure solutions. US citizen currently residing in Stockholm with the intent of permanent residence and contributing to Sweden’s technology and gaming sectors.",
  email: "cv@derekarm.com",
  socials: {
    linkedin: "https://linkedin.com/in/derek-allen-armstrong",
    github: "https://github.com/derekarmstrong",
  }
};

export const experience: Experience[] = [
  {
    id: "poynters",
    company: "Poynter’s Business Solutions",
    role: "IT Manager",
    period: "September 2025 - January 2026",
    location: "Marietta, Ohio",
    description: [
      "Performed pre-sales engineering to build project plans for client hardware upgrades.",
      "Digitized processes for our sales department, improving their annual business reviews.",
      "Onboarded and offboarded customers to the company’s managed IT solutions platform.",
      "Quickly and efficiently responded to a customer’s cybersecurity situation.",
      "Designed marketing collateral, including a products and services catalog, multiple fliers, and visual updates to the company’s website.",
      "Consolidated legacy hardware by building virtualization plans for older servers, introducing containers and moving certain services off-site.",
      "Managed personnel, systems, and assets within the Information Technology department."
    ]
  },
  {
    id: "idatp",
    company: "Intuitive Data and Technology Products",
    role: "Technician & Developer",
    period: "June 2024 - September 2025",
    location: "Belpre, Ohio",
    description: [
      "Provided help desk and technical support services to employees and our clients.",
      "Ensured high-quality website development practices by performing QA duties on outgoing projects, noting common issues and updating internal processes to account.",
      "Owned the development and release of two full-stack business workflow applications (time, mileage, and payroll app for a trucking organization; and a livestock processing workflow app for a local butcher and grocer) using Directus, Node, Express, and React.",
      "Developed internal project and business management tools using Directus, Node, Express, and React.",
      "Investigated and implemented basic LLM-enabled workflow improvements using Claude Code and GitHub CoPilot.",
      "Developed a volunteer time tracking application for a local nonprofit organization using Google AppSheet, then trained the organization’s director on iterative improvements."
    ]
  },
  {
    id: "paradynamix-it-director",
    company: "Paradynamix",
    role: "Technology Director",
    period: "2021 - 2023",
    location: "Marietta, Ohio",
    description: [
      "Managed the software development lifecycle for web, mobile, and desktop applications.",
      "Published multiple mobile apps through Apple’s App Store and Google Play Store.",
      "Hired a team of software developers and IT technicians and managed internal KPIs to encourage career growth and the team overall.",
      "Worked continuously to improve our Managed Services division by staying up-to-date with current security threats, client needs, and opportunities to increase market value.",
      "Implemented automated testing frameworks using BrowserStack and Sentry.",
      "Created and maintained a cloud-based business phone system by hosting 3CX on AWS and utilizing Raspberry Pis as session border controllers amongst client networks.",
      "Developed a boutique, web-based video surveillance system for a pet boarding organization and their clients using existing hardware and self-hosted computer vision using Python, OpenCV, ASP.NET, and Handbrake.",
      "Built and implemented a FOSS self-hosted alternative to popular cloud services using Proxmox, Docker, Wazuh, TacticalRMM, Duplicati.",
      "Investigated and implemented basic LLM-enabled workflow improvements using ChatGPT and Claude Code."
    ]
  },
  {
    id: "paradynamix-manager",
    company: "Paradynamix",
    role: "Support & Implementation Manager",
    period: "2020 - 2021",
    location: "Marietta, Ohio",
    description: [
      "Built a Managed Services division for the organization, replacing our breakfix model with proactive cybersecurity, monitoring and management tools such as Acronis, SentinelOne, NinjaOne, and Huntress.",
      "Worked with vendors and industry partners to increase our buying power and deliver more effective technology solutions to our clients.",
      "Reviewed client business processes to identify inefficiencies and gaps in their technology workflows, improving their productivity and our own managed services.",
      "Project management for multiple web, mobile, and desktop line-of-business applications, written using Blazor, Xamarin, ASP.NET, WinForms, and React (MERN).",
      "Managed cloud-based infrastructure across platforms, including Amazon Web Services (Lightsail, RDS, IAM, Elastic Search), Google Cloud (Kubernetes), and GitLab."
    ]
  },
  {
    id: "paradynamix-dev",
    company: "Paradynamix",
    role: "Technician & Developer",
    period: "2020",
    location: "Marietta, Ohio",
    description: [
      "Provided help desk and support services, and training to employees and our clients.",
      "Built disaster recovery, cybersecurity, and backoffice technology solutions for our clients.",
      "Compiled technical documentation for software systems, creating system diagrams, user manuals within Confluence, and tutorial videos for employees and end-users.",
      "Ensured high-quality website development practices by performing QA duties on outgoing projects, noting common issues and updating internal processes to account.",
      "Assisted with development of new and existing software projects, primarily written in Node, Express, Vue, and MySQL.",
      "Adopted legacy Visual Basic/.NET software and worked to upgrade them to more modern C#/.NET, ASP.NET, and cloud-based environments.",
      "Migrated organizations to and from Microsoft 365, Google Cloud, and on-prem systems."
    ]
  },
  {
    id: "on-the-edge-dev",
    company: "On The Edge Brands",
    role: "Full-Stack Developer",
    period: "2018 - 2020",
    location: "Moultrie, Georgia",
    description: [
      "Responsible for design, development, security, and stability for nine e-commerce sites.",
      "Maintained all infrastructure related to web servers, databases, and load balancers.",
      "Improved search engine visibility by implementing modern SEO practices in our ASP.NET WebForms / MVC e-commerce websites by utilizing Google Search Console and Bing Webmaster Tools to identify and resolve improper redirects and errors.",
      "Managed releases for the IT department within TFS (later Azure DevOps).",
      "Developed SOAP and REST APIs to expose public data to other developers and tools.",
      "Brought the company into omnichannel commerce by publishing our inventory as product feeds to Google Shopping, Amazon, eBay, Wish, and Walmart.",
      "Managed the implementation of Cloudflare Enterprise across 90 domains, with a focus on content delivery, vanity domain services, and image optimization algorithms.",
      "Developed boutique e-commerce websites for successful product lines and categories, including the prepper-oriented subscription box service SHTF Survival."
    ]
  },
  {
    id: "on-the-edge-artist",
    company: "On The Edge Brands",
    role: "Production Artist",
    period: "2016 - 2018",
    location: "Moultrie, Georgia",
    description: [
      "Design, editing, and proofing of the BUDK, Kennesaw Cutlery, CH Kadels, True Swords, and United Cutlery catalogs using Adobe InDesign, Illustrator, and Photoshop.",
      "Design for marketing content used by our websites, email campaigns, newsletters, and other collateral using Adobe Illustrator and Photoshop.",
      "Introduced workflow improvements to the Creative and Multimedia departments, including a new video production workflow using automations within Adobe Premiere Pro, Audition, Lightroom, and Photoshop.",
      "Provided help desk support to macOS users within the Creative and Multimedia departments, including onboarding and offboarding of technology assets.",
      "Developed a digital catalog pagination tool to reduce errors within the Creative and Merchandising departments when designing catalog pages."
    ]
  },
  {
    id: "on-the-edge-analyst",
    company: "On The Edge Brands",
    role: "IT Business Analyst",
    period: "2016",
    location: "Moultrie, Georgia",
    description: [
      "Worked closely with department leaders to develop automated reports in a C#/.NET console application, using data from our Microsoft SQL Server database, Microsoft Dynamics GP, and JDA Ecometry to empower decision makers.",
      "Converted older reporting tools into modern utilities hosted within our company intranet, developed using ASP.NET WebForms, Microsoft SQL Server, and IIS.",
      "Provided help desk support to employees and managed computer hardware, including servers, network devices, and office phones.",
      "Created an automated computer imaging solution with FOG Project, Linux, and PXE to increase IT department efficiency by removing unnecessary downtime.",
      "Built a digital signage solution using YoDeck and Raspberry Pi single-board computers to communicate messages and metrics through our offices and the warehouse."
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    title: "Programming Languages & Frameworks",
    skills: ["JavaScript", "Node.js", "Vue.js", "React", "Express", "TypeScript", "C#", ".NET", "Python", "SQL", "HTML", "CSS", "Drupal"]
  },
  {
    title: "Back-End & Databases",
    skills: ["Supabase", "Directus", "PostgreSQL", "SQL Server", "MySQL", "REST APIs"]
  },
  {
    title: "Infrastructure & DevOps",
    skills: ["Proxmox", "Hyper-V", "Docker", "Kubernetes", "Linux", "Ubuntu", "Debian", "Windows Server", "Cloudflare", "GitHub", "AWS", "GCP", "Azure", "n8n", "IT Auditing", "Disaster Recovery", "Section 508 Compliance"]
  },
  {
    title: "AI & Agentic LLMs",
    skills: ["Claude Code", "GitHub CoPilot", "OpenClaw", "Antigravity"]
  },
  {
    title: "Graphic Design",
    skills: ["Adobe Creative Cloud", "Photoshop", "Illustrator", "InDesign", "Premiere Pro", "Figma", "UI/UX Design", "Interactive Prototyping"]
  }
];

export const projects: Project[] = [
  {
    id: "trucking-app",
    title: "Trucking Workflow App",
    role: "Full-Stack Developer",
    period: "2024",
    description: [
      "Comprehensive business workflow application for time, mileage, and payroll.",
      "Built using Directus, Node, Express, and React for a trucking organization."
    ],
    tech: ["Directus", "Node.js", "Express", "React", "PostgreSQL"]
  },
  {
    id: "butcher-app",
    title: "Livestock Processing App",
    role: "Full-Stack Developer",
    period: "2024",
    description: [
      "Livestock processing workflow app for a local butcher and grocer.",
      "Streamlined digital tracking of physical production workflows."
    ],
    tech: ["Directus", "Node.js", "Express", "React", "PostgreSQL"]
  },
  {
    id: "volunteer-tracker",
    title: "Volunteer Time Tracker",
    role: "Developer",
    period: "2024",
    description: [
      "Volunteer time tracking application for a local nonprofit organization.",
      "Developed using Google Appsheet with iterative improvement training."
    ],
    tech: ["Google Appsheet"]
  },
  {
    id: "surveillance-system",
    title: "Video Surveillance System",
    role: "Technology Director",
    period: "2022",
    description: [
      "Boutique web-based video surveillance system with self-hosted computer vision.",
      "Utilized Python, OpenCV, ASP.NET, and Handbrake."
    ],
    tech: ["Python", "OpenCV", "ASP.NET", "Handbrake"]
  },
  {
    id: "private-cloud",
    title: "Private Cloud Solution",
    role: "Technology Director",
    period: "2023",
    description: [
      "FOSS self-hosted alternative to popular cloud services.",
      "Utilized Proxmox, Docker, Wazuh, TacticalRMM, and Duplicati."
    ],
    tech: ["Proxmox", "Docker", "Linux", "Networking"]
  },
  {
    id: "pagination-tool",
    title: "Digital Catalog Pagination Tool",
    role: "Production Artist",
    period: "2018",
    description: [
      "Digital catalog pagination tool to reduce errors in design process.",
      "Bridged the gap between Creative and IT departments."
    ],
    tech: ["C#", ".NET", "Automation"]
  },
  {
    id: "omnichannel-commerce",
    title: "Omnichannel Commerce Implementation",
    role: "Full-Stack Developer",
    period: "2019",
    description: [
      "Brought the company into omnichannel commerce via product feeds.",
      "Integrated with Google Shopping, Amazon, eBay, Wish, and Walmart."
    ],
    tech: [".NET", "SQL Server", "REST APIs", "SOAP"]
  },
  {
    id: "athens-machine",
    title: "Tire Mold Manufacturer Infrastructure Rebuild",
    role: "Technology Director",
    period: "2022",
    description: [
      "Complete IT infrastructure audit and rebuild for tire mold machining company.",
      "Established granular control of file server access and disaster recovery plans."
    ],
    tech: ["IT Auditing", "Disaster Recovery", "Networking", "Windows Server"]
  },
  {
    id: "bobs-market",
    title: "Greenhouse Management System",
    role: "Technology Director",
    period: "2022",
    description: [
      "Developed a modern in-house management system for tracking seed packets across five acres of greenhouses.",
      "Replaced outdated DOS-based symbol scanners with real-time wireless sync on Windows tablets."
    ],
    tech: ["Custom Software Development", "Windows Server", "Networking"]
  },
  {
    id: "carolina-rides",
    title: "Cycle Rental Company CMS",
    role: "Technology Director",
    period: "2023",
    description: [
      "Creation of a dedicated, rental-focused CMS website to separate electric vehicle rental operations.",
      "Fast-loading, mobile-optimized experience with cohesive brand identity."
    ],
    tech: ["UI/UX Design", "Custom Web Styling", "Responsive Design"]
  },
  {
    id: "jefferson-county",
    title: "County Government Web Ecosystem",
    role: "Technology Director",
    period: "2022",
    description: [
      "Multi-phase redesign and rebuild of three independent web environments using Drupal.",
      "Achieved Section 508 compliance and implemented department-level role-based permissions."
    ],
    tech: ["Drupal", "UI/UX Design", "Section 508 Compliance", "Server Management"]
  },
  {
    id: "ovsc-ecommerce",
    title: "Gas Chromatography Supplier E-commerce Modernization",
    role: "Technology Director",
    period: "2023",
    description: [
      "Redesign and modernization of an e-commerce site for a gas chromatography equipment manufacturer.",
      "Created an intuitive user flow and fully responsive design across all devices."
    ],
    tech: ["UI/UX Design", "Responsive Design", "Branding"]
  },
  {
    id: "pm-company",
    title: "Property Management Company Work Order Application",
    role: "Technology Director",
    period: "2023",
    description: [
      "Complete rewrite of a legacy maintenance work order application into Vue.js.",
      "Desktop/mobile integration for real-time task switching and time entry export."
    ],
    tech: ["Vue.js", "UI/UX Design", "Custom Web App Development"]
  },
  {
    id: "the-proz-jobtrax",
    title: "Restaurant Cleaning Scheduling CRM",
    role: "Technology Director",
    period: "2022",
    description: [
      "Custom software development for job scheduling, CRM, and real-time photo documentation.",
      "Significant improvement in onsite accountability and reporting efficiency."
    ],
    tech: ["UI/UX Design", "Real-time Data Tracking", "CRM Integration"]
  },
  {
    id: "thomsons-landscaping",
    title: "Landscaping POS System",
    role: "Technology Director",
    period: "2023",
    description: [
      "In-house Point of Sale program to replace a difficult-to-use legacy system.",
      "Reduced transaction times and simplified navigation while retaining familiar hotkeys."
    ],
    tech: ["UI/UX Design", "POS Systems", "Inventory System Integration"]
  },
  {
    id: "united-bank",
    title: "Regional Bank Website Rethink",
    role: "Technology Director",
    period: "2022",
    description: [
      "Complete website retheme and redesign on Drupal focused on simplifying backend administration.",
      "Developed a custom front-end page builder to simplify the administrative editing process."
    ],
    tech: ["Drupal", "UI/UX Design", "Interactive Prototyping"]
  },
  {
    id: "water-doctors",
    title: "Vehicle Servicing Company Tech Portal",
    role: "Technology Director",
    period: "2022",
    description: [
      "Multi-portal web and mobile application connecting dealerships, franchisees, and technicians.",
      "Improved daily task planning and direct scheduling from mobile apps."
    ],
    tech: ["UI/UX Design", "Custom Web Application", "Mobile App Integration"]
  }
];
