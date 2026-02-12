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
  summary: "Experienced Solutions Architect and Software Engineer with a strong background in pre-sales engineering, solution design, and cloud migration. Proven track record of managing technical lifecycles, optimizing infrastructure, and leading cross-functional teams.",
  email: "cv@derekarm.com",
  socials: {
    linkedin: "https://linkedin.com/in/derek-allen-armstrong",
    github: "https://github.com/derekarmstrong",
  }
};

export const experience: Experience[] = [
  {
    id: "poynters",
    company: "Poynter's Business Solutions",
    role: "IT Manager",
    period: "September 2025 - January 2026",
    location: "Marietta, Ohio",
    description: [
      "Acted as the primary Subject Matter Expert (SME) for client engagements, building custom IT service packages and cloud migration strategies utilizing MSP frameworks.",
      "Performed comprehensive infrastructure audits for internal and client environments; identified critical security vulnerabilities in legacy Windows Server and firewall configurations.",
      "Leveraged a dual background in development and creative suites (Adobe InDesign, Photoshop, Illustrator) to assemble a comprehensive technical product catalog.",
      "Managed the full technical lifecycle for hardware and software procurement, overseeing vendor relationships and contract renewals."
    ]
  },
  {
    id: "idatp",
    company: "IDATP",
    role: "Systems Technician & Developer",
    period: "June 2024 - September 2025",
    location: "Belpre, Ohio",
    description: [
      "Managed DevOps for a comprehensive greenhouse management ecosystem using .NET Core and React; improved on-prem server clusters and offline-first data verification.",
      "Engineered mobile-first workflows for field technicians, integrating ruggedized Android tablets and barcode scanning hardware.",
      "Leveraged Directus as a headless CMS and database accelerator to drastically reduce development cycles.",
      "Conducted deep-dive business analysis for the agricultural, logistics, and livestock industries; mapped physical production workflows into structured digital tracking systems.",
      "Managed a diverse portfolio of client websites (WordPress/WooCommerce), providing high-level support and performance optimization."
    ]
  },
  {
    id: "paradynamix",
    company: "Paradynamix",
    role: "Technology Director",
    period: "April 2022 - December 2023",
    location: "United States",
    description: [
      "Developed a high-precision lumber tracking system utilizing LiDAR and FLIR on Android mobile devices; transitioned legacy VB.NET logic to a modern Blazor Hybrid (MAUI) architecture.",
      "Built a 'Business in a Box' private cloud solution utilizing Docker and virtualization to provide high-availability alternatives to SaaS monopolies.",
      "Established and scaled the firm’s Managed Service Provider (MSP) division; managed vendor partnerships with Pax8, NinjaOne, and cybersecurity platforms.",
      "Directed a hybrid team of developers and technicians, encouraging a 'Security-First' culture and implementing lean operational frameworks."
    ]
  },
  {
    id: "paradynamix-pm",
    company: "Paradynamix",
    role: "Implementation & Support Manager",
    period: "October 2020 - April 2022",
    location: "United States",
    description: [
      "Managed the migration of a legacy ERP system from Microsoft Access to a modern Blazor Server (.NET Core) architecture.",
      "Provided technical advisory for public sector and financial institutions; performed security audits to identify and mitigate critical CVEs.",
      "Assumed leadership of critical 'rescue' projects, maintaining technical continuity across organizational shifts."
    ]
  },
  {
    id: "paradynamix-dev",
    company: "Paradynamix",
    role: "Developer & Technician",
    period: "June 2020 - October 2020",
    location: "United States",
    description: [
      "Built and maintained a suite of diverse SaaS applications (Node.js, Express, Vue) for industries ranging from field service logistics to high-end construction documentation.",
      "Championed the adoption of enterprise UI frameworks (Syncfusion, Radzen) to enforce visual consistency.",
      "Managed a multi-tenant cloud environment utilizing AWS Lightsail, S3, RDS, and other tools.",
      "Shifted from .NET to Node.js environments, implementing structural patterns to maintain code reliability."
    ]
  },
  {
    id: "budk",
    company: "Bud K Worldwide, Inc.",
    role: "Full-Stack Developer",
    period: "October 2018 - June 2020",
    location: "Moultrie, Georgia",
    description: [
      "Engineered a custom self-service framework within the corporate Intranet, allowing non-technical employees to rapidly deploy and manage specialized e-commerce micro-sites.",
      "Led performance optimization initiatives and Cloudflare Enterprise implementation to bypass platform reach restrictions.",
      "Migrated source control and project management from legacy Team Foundation Server (TFS) to Azure DevOps and Asana.",
      "Maintained high-availability for multiple high-traffic e-commerce platforms (10,000+ monthly active users)."
    ]
  },
  {
    id: "budk-artist",
    company: "Bud K Worldwide, Inc.",
    role: "Production Artist",
    period: "August 2016 - October 2018",
    location: "Moultrie, Georgia",
    description: [
      "Designed and co-developed a visual pagination tool within the corporate intranet, digitizing a legacy paper-based catalog design process.",
      "Served as the primary technical bridge between the Creative and IT departments; managed enterprise macOS deployments.",
      "Re-engineered the video production workflow to accommodate 4K high-bitrate assets and drone cinematography."
    ]
  },
  {
    id: "budk-analyst",
    company: "Bud K Worldwide, Inc.",
    role: "Information Technology Business Analyst",
    period: "January 2016 - August 2016",
    location: "Moultrie, GA",
    description: [
      "Contributed to the automated reports application that aggregated siloed data from JDA Ecometry, SAP, Microsoft Dynamics, and website databases.",
      "Expanded the company Intranet (written in ASP.NET), moving the organization from spreadsheet-based workflows to a centralized web-based ecosystem.",
      "Worked with department leads to identify bottlenecks in procurement and customer service."
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: ["TypeScript", "React", "Node.js", ".NET Core", "C#", "Blazor", "Vue.js", "Express", "Python"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Azure", "AWS", "Docker", "Kubernetes", "Linux", "Windows Server", "Cloudflare"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Directus", "WordPress", "WooCommerce", "Adobe Creative Suite", "Figma"]
  }
];

export const projects: Project[] = [
  {
    id: "woodworks",
    title: "Lumber Tracking System",
    role: "Lead Developer",
    period: "2023",
    description: [
      "High-precision tracking using LiDAR and FLIR on Android.",
      "Real-time data processing with Blazor Hybrid (MAUI)."
    ],
    tech: ["Blazor Hybrid", "MAUI", "LiDAR", "FLIR", "Android"]
  },
  {
    id: "greenhouse-ops",
    title: "Greenhouse Operations System",
    role: "DevOps Engineer",
    period: "2024",
    description: [
      "IoT and Edge infrastructure for greenhouse management.",
      "Offline-first data verification for high-interference environments."
    ],
    tech: [".NET Core", "React", "IoT", "Edge Computing"]
  },
  {
    id: "business-in-a-box",
    title: "Private Cloud Infrastructure",
    role: "System Architect",
    period: "2022",
    description: [
      "Self-hosted private cloud solution using Docker and virtualization.",
      "Provided high-availability alternative to proprietary SaaS platforms."
    ],
    tech: ["Docker", "Linux", "Virtualization", "Networking"]
  },
  {
    id: "logistics-platform",
    title: "Logistics Platform Re-platforming",
    role: "Full-Stack Developer",
    period: "2024",
    description: [
      "Modernized logistics tool into a Node.js/Directus environment.",
      "Visual builder integration for non-technical team schema design."
    ],
    tech: ["Node.js", "Directus", "Vue.js", "PostgreSQL"]
  },
  {
    id: "erp-modernization",
    title: "ERP Modernization",
    role: "Strategy Lead",
    period: "2022",
    description: [
      "Migrated mission-critical ERP from MS Access to Blazor Server.",
      "Architected cloud-native SQL Server environment."
    ],
    tech: ["Blazor Server", "SQL Server", "Azure", "System Architecture"]
  },
  {
    id: "pagination-tool",
    title: "Digital Catalog Pagination Tool",
    role: "Full-Stack Developer",
    period: "2018",
    description: [
      "Visual tool digitizing paper-based catalog layout process.",
      "Enables real-time collaboration between marketing and design."
    ],
    tech: ["ASP.NET", "C#", "JavaScript", "SQL"]
  },
  {
    id: "microsites",
    title: "Multi-Tenant Micro-Sites",
    role: "Engineer",
    period: "2019",
    description: [
      "Self-service framework for spinning up product-specific retail sites.",
      "Allowed non-technical staff to deploy instances on demand."
    ],
    tech: ["ASP.NET", "MVC", "IIS", "Automation"]
  }
];
