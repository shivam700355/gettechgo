export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  iconName: string;
  description: string;
  heroDescription: string;
  whatWeBuild: string[];
  technologies: string[];
  billingPlans: PricingPlan[];
  progressSteps: string[];
  relatedProjects: string[]; // references PortfolioProject.id
  faq: FAQItem[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "web-development",
    title: "Website & Web Application Development",
    iconName: "Globe",
    description: "Blazing fast React frontends backed by powerful, robust Laravel backend engines. Fully audited for high performance, device-responsive layout and organic search engine discovery.",
    heroDescription: "We craft stunning, highly scalable web solutions custom-tuned to automate client actions, boost brand recognition and handle millions of monthly hits cleanly.",
    whatWeBuild: [
      "Laravel REST API & Inertia.js (React integration) websites",
      "Dynamic Headless CMS portals using Strapi or WordPress",
      "Robust Admin Portals backed by Laravel Filament dashboard suites",
      "Highly Interactive Corporate & Portfolio landing pages with Framer Motion",
      "Custom Software as a Service (SaaS) subscription sites"
    ],
    technologies: ["laravel", "reactjs", "nextjs", "vuejs", "tailwind", "mysql", "postgresql", "redis"],
    progressSteps: [
      "Requirements workshop & responsive wireframe planning",
      "Laravel backend database relational architecture design & API endpoints routing",
      "Tailwind component system execution & dynamic React UI hook pairings",
      "Server caching configuration & organic technical SEO audit",
      "Production deployment via secure AWS or Linux servers"
    ],
    relatedProjects: ["zeta-crm-platform", "fintech-cloud-platform"],
    billingPlans: [
      {
        name: "Basic Website",
        price: "$899",
        period: "one-time",
        description: "Best for startups or freelancers needing beautiful online proof.",
        features: [
          "5 Customized pages designed on React/Tailwind",
          "100% Fully responsive mobile layouts",
          "Contact form mapping to custom business email",
          "Essential organic SEO meta implementation",
          "1 Month dedicated maintenance and bug support"
        ]
      },
      {
        name: "Professional Hub (Laravel + React)",
        price: "$2,499",
        period: "one-time",
        description: "Optimal setup for growing teams needing custom database systems.",
        features: [
          "15 Custom pages + dynamic services directories",
          "Laravel core MVC backend with MySQL schemas",
          "Secure user authentication and email OTP systems",
          "Advanced custom client admin reporting board",
          "Stripe or Razorpay payment integrations included",
          "3 Months priority patch & scale support"
        ]
      },
      {
        name: "Enterprise SaaS Suite",
        price: "$4,999",
        period: "one-time",
        description: "Built for massive custom requirements and scalable multi-tenant apps.",
        features: [
          "Complete multi-tenant corporate subscription capabilities",
          "Tailored database replication & caching using Redis",
          "Custom API integrations & partner webhook gateways",
          "Deployments configured with Docker & AWS EC2 system rules",
          "Full-vibe premium microservices structures",
          "12 Months extensive security and updates agreement"
        ]
      }
    ],
    faq: [
      {
        q: "Why do you recommend Laravel for the backend stack?",
        a: "Laravel is our primary backend technology because of its robust architecture, security credentials, and efficient development tools. It offers native database migration scripts, queue jobs for background email dispatching, and secure session management natively, significantly reducing development timelines."
      },
      {
        q: "Will my custom web application look good on tablets and mobile phones?",
        a: "Absolutely. Every interface we build conforms entirely to responsive design patterns using fluid Tailwind grid structures. We test layouts across Apple iOS, Google Android, tablets, and ultra-wide desktop monitors."
      },
      {
        q: "Do you integrate third-party payment gateways?",
        a: "Yes. We possess expert experience integrating payment merchant gateways including Stripe, Razorpay, PayPal, and recurring SaaS billing modules with auto-generated PDFs."
      }
    ]
  },
  {
    id: "app-development",
    title: "Mobile App Development",
    iconName: "Smartphone",
    description: "Multi-platform iOS and Android native performance. We engineer fluid Flutter and React Native experiences with offline capability and native features.",
    heroDescription: "Enthrall consumers wherever they reside. We map cross-platform mobile services to beautiful, single-codebase React Native or Flutter systems with low-latency APIs.",
    whatWeBuild: [
      "Single-codebase Flutter application suites for Android & iOS",
      "Native Android development using Kotlin or Java",
      "Native Apple iOS app code setups with Swift",
      "Interactive location-based tracking tools",
      "Offline-first apps using local SQLite databases"
    ],
    technologies: ["flutter", "reactnative", "kotlin", "swift", "firebase", "sqlite", "nodejs"],
    progressSteps: [
      "User Journey & Figma high-fidelity touch mockup mapping",
      "Local state database model blueprinting & caching schemas",
      "Cross-platform Flutter / React Native code installation",
      "Real-time sensor, GPS, and push alert integration",
      "Play Store and App Store deployment submissions support"
    ],
    relatedProjects: ["smart-health-delivery-app"],
    billingPlans: [
      {
        name: "Prototype App",
        price: "$1,899",
        period: "one-time",
        description: "Perfect for pitch validation and testing proof of concepts.",
        features: [
          "Fully dynamic interactive UI prototype (up to 8 sheets)",
          "Unified Flutter single-codebase deployment",
          "Offline mock database configurations",
          "Basic social integrations (Google/Facebook login)",
          "App store asset creation package"
        ]
      },
      {
        name: "Standard Mobile Hub",
        price: "$3,999",
        period: "one-time",
        description: "Ideal for businesses wanting to launch a robust commercial app.",
        features: [
          "Unlimited screens with custom user accounts",
          "Live Rest API connection with express or laravel",
          "Real-time Push Notifications for marketing",
          "Full device GPS and Map route integrations",
          "Active Stripe in-app subscription payments",
          "3 Months support + Bug tracking console integration"
        ]
      },
      {
        name: "Enterprise Custom Mobile",
        price: "$6,999",
        period: "one-time",
        description: "Engineered for high concurrent users and offline sync protocols.",
        features: [
          "Dual custom native builds (Kotlin Swift) or Flutter",
          "Advanced offline-first client syncing with server databases",
          "In-app video/audio chat stream or complex modules",
          "Biometric security and keychain hardware validation",
          "Fully automated CI/CD binary building",
          "Lifetime critical patch architecture license"
        ]
      }
    ],
    faq: [
      {
        q: "What are the benefits of choosing Flutter over separate native native code?",
        a: "Flutter allows us to write only one codebase that runs beautifully on both Android and iOS devices. This cuts development and maintenance costs in half while assuring near-native UI frame rates and animations."
      },
      {
        q: "Do you handle the entire app submit process to Apple and Google stores?",
        a: "Yes. We configure core developer certificates, write descriptive app store copy, build icons, set privacy parameters, and guide your listings through initial review cycles successfully."
      }
    ]
  },
  {
    id: "chatbot-development",
    title: "AI Chatbot Development",
    iconName: "Brain",
    description: "Incorporate intelligent conversational capability into your channels. We deploy robust Dialogflow, OpenAI NLP, and LangChain automated agents to save support costs.",
    heroDescription: "Save hours of corporate bandwidth. We construct smart conversational systems mapped to WhatsApp, Telegram, or custom web portals to convert traffic 24 hours a day.",
    whatWeBuild: [
      "Custom LangChain context mapping & RAG (Retrieval-Augmented Generation)",
      "High-accuracy Dialogflow agent configurations for support tickets",
      "Interactive WhatsApp Business conversational paths with Twilio APIs",
      "Automated e-commerce order lookups and invoice trackers",
      "Lead triage bots syncable directly with company CRMs"
    ],
    technologies: ["openai", "dialogflow", "langchain", "rasa", "python", "twilio"],
    progressSteps: [
      "Define agent persona, main scripts, and intent hierarchies",
      "Construct knowledge databases and fine-tune model parameters",
      "API webhook connections to look up orders or product availability",
      "Interactive test chat sessions and training logs audits",
      "Deploy code snippet to target platforms"
    ],
    relatedProjects: ["retail-chatbot-openai"],
    billingPlans: [
      {
        name: "Startup AI Bot",
        price: "$699",
        period: "one-time",
        description: "A gorgeous standalone AI helper embedded in your website.",
        features: [
          "OpenAI API contextual prompt setups",
          "Embedded widget styled to match branding",
          "Up to 20 custom QA knowledge-base files",
          "Email capture and notification trigger",
          "30 Days monitoring and tone adjustments"
        ]
      },
      {
        name: "Corporate Agent",
        price: "$1,799",
        period: "one-time",
        description: "High-accuracy system syncing with your actual inventory databases.",
        features: [
          "Hybrid Dialogflow & OpenAI LLM automation",
          "WhatsApp other API integrations (Twilio platform)",
          "Live database inventory query and status webhook lookups",
          "Direct handover to human support channels feature",
          "Conversation logs dashboard & statistics",
          "90 Days continuous NLU tuning"
        ]
      },
      {
        name: "Enterprise Cognitive Flow",
        price: "$3,499",
        period: "one-time",
        description: "Bespoke on-premise secure chatbot configurations for major tasks.",
        features: [
          "Stateful RAG pipelines mapping massive internal documents safely",
          "No-data-leakage compliance settings",
          "Omnichannel linking (Web, WhatsApp, Slack, Facebook)",
          "Automated CRM sync (HubSpot, Salesforce)",
          "Intelligent system actions (booking calendar events)",
          "1 Year premium developer priority SLA support"
        ]
      }
    ],
    faq: [
      {
        q: "How do you prevent the AI from generating incorrect or fake responses (hallucinations)?",
        a: "We implement RAG (Retrieval-Augmented Generation) frameworks where the LLM is restricted to sourcing answers from a strict, verified corporate document base. If the question lies outside this base, the AI is programmed to say it cannot find that information and politely route to human operators."
      },
      {
        q: "Can the chatbot process actual operations, like rescheduling an appointment?",
        a: "Absolutely. By integrating custom server endpoints with secure API tokens, our systems can securely trigger actions, write customer requests in CRMs, or book dates on Google Calendar."
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO Solutions",
    iconName: "TrendingUp",
    description: "Scale organic traffic and maximize conversion. We manage programmatic Google Ads, social media marketing campaigns, pixel retargeting, and technical SEO structure.",
    heroDescription: "Traffic is worthless without conversions. We plan holistic search and social visibility frameworks designed to put your services directly in front of active buyers.",
    whatWeBuild: [
      "Rigorous technical SEO audits & on-page index optimization",
      "ROI-centric search brand campaigns using Google Ads PPC",
      "Interest-based lead capture setups via Meta Ads (Instagram/FB)",
      "Automated marketing lead nurture funnels using Mailchimp",
      "Dynamic conversion attribution dashboard mapping on GA4"
    ],
    technologies: ["ga4", "googleads", "metaads", "semrush", "mailchimp", "hubspot"],
    progressSteps: [
      "In-depth keyword competitor analysis & backlink mapping",
      "On-page HTML title description meta-tag alignments",
      "Setup Google Analytics, Tag Manager, and custom parameters",
      "Draft promotional graphics and launch testing campaigns",
      "Bi-weekly analysis reports showing direct customer flow"
    ],
    relatedProjects: ["organic-seo-campaigns"],
    billingPlans: [
      {
        name: "SEO Engine Pack",
        price: "$499",
        period: "month",
        description: "Ideal for local companies wanting to break through map results.",
        features: [
          "Advanced competitor audit & local keyword profiling",
          "15 Optimized pages metadata & layout adjustments",
          "Search Console alignment and indexing error fixes",
          "1 high-quality SEO backlink building setup",
          "Monthly progress PDF reporting with stats"
        ]
      },
      {
        name: "Growth Leads Plan",
        price: "$1,199",
        period: "month",
        description: "Optimal configuration to drive sales via Meta and Google campaigns.",
        features: [
          "Full SEO optimization + content guide",
          "Management of Google & Meta pay-per-click ads",
          "Custom visual graphics for social ad banners",
          "Conversion pixel tracking configuration",
          "A/B split testing of ad texts and demographics",
          "Bi-weekly alignment video calls with our marketing lead"
        ]
      },
      {
        name: "Enterprise Domination",
        price: "$2,499",
        period: "month",
        description: "Bespoke omnipresent digital coverage to dominate search niches.",
        features: [
          "Global SEO command and multiple search regions setups",
          "Dedicated marketing manager and copywriter assigned",
          "Large-scale budget management & custom funnels",
          "Continuous email automation with HubSpot CRM",
          "Comprehensive competitor gap intelligence tracking",
          "Weekly dashboards tracking direct target attribution"
        ]
      }
    ],
    faq: [
      {
        q: "How long does it take to see positive organic SEO results?",
        a: "Typically, technical on-page fixes reflect in 2 to 4 weeks. Major competitive rank growth from search campaigns usually begins showing clear compound gains within 3 to 6 months of active content efforts."
      },
      {
        q: "Do your prices include the actual paid ad budgets?",
        a: "No. Our fees cover design, copy, testing and bid-management labor. Custom advertising budgets are paid directly to Google or Meta platforms based on your specified caps."
      }
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    iconName: "Code",
    description: "No two businesses operate exactly alike. We build custom-tailored desktop, server, or cloud-native applications tailored specifically to match your existing business architecture.",
    heroDescription: "Shatter the constraints of off-the-shelf systems. We construct elegant, tailor-made applications to match your exact processes, saving operational hours daily.",
    whatWeBuild: [
      "High-availability custom inventory tracking systems",
      "Internal database integration and secure sync utilities",
      "Automated PDF reporting engines and file generation structures",
      "Specialized desktop widgets and hardware integrations",
      "Bespoke transaction ledgers with full audit trails"
    ],
    technologies: ["laravel", "nodejs", "django", "springboot", "mysql", "postgresql", "docker", "postman"],
    progressSteps: [
      "Comprehensive business bottleneck & workflow mapping",
      "Architecture design, user access charts, and DB schema drafts",
      "Draft modular software microservices and unit testing codes",
      "Integrate legacy systems via custom APIs and test scripts",
      "Launch live under continuous fallback mirror supervision"
    ],
    relatedProjects: ["zeta-crm-platform", "fintech-cloud-platform"],
    billingPlans: [
      {
        name: "MVP Solution",
        price: "$2,999",
        period: "one-time",
        description: "Ideal for validating core bespoke operations with smaller crews.",
        features: [
          "Custom backend platform (Django, Node, or Laravel)",
          "Secure user role access (Admin, User, Viewer)",
          "Structured relational MySQL or Postgres tables",
          "Form capture dashboards and CSV export system",
          "60 Days priority technical bug support"
        ]
      },
      {
        name: "Corporate Engine",
        price: "$5,499",
        period: "one-time",
        description: "Deep bespoke workflow builder with cross-tier automation.",
        features: [
          "Unlimited custom data modules and advanced tables",
          "Multi-role user charts (granular permissions)",
          "Automated third-party background API sync",
          "Advanced chart views & scheduled PDF summaries via email",
          "Robust error monitoring with automated logs",
          "6 Months comprehensive feature upgrades support"
        ]
      },
      {
        name: "Enterprise Core Platform",
        price: "$9,999",
        period: "one-time",
        description: "High security, audited banking-grade architecture built to scale.",
        features: [
          "Microservice architecture containerized in Docker",
          "Automated failovers and active performance alerts",
          "Regulatory data compliance layouts built-in",
          "Dedicated secure server management guidelines",
          "Custom APIs for other external business software",
          "12 Months developer-guided warranty and maintenance agreement"
        ]
      }
    ],
    faq: [
      {
        q: "Do we retain full ownership of the source code once the project is finished?",
        a: "Yes. Once all development payments are successfully cleared, 100% intellectual property, source code custody and server access credentials are handed over in full to you."
      },
      {
        q: "Can you upgrade or interface with older legacy software?",
        a: "Yes. We frequently develop custom bridge interfaces or APIs to connect and export information dynamically between older legacy accounting databases and gorgeous modern dashboards."
      }
    ]
  },
  {
    id: "erp-crm",
    title: "ERP & CRM Solutions",
    iconName: "Layers",
    description: "Manage your client pipelines and physical stock from a central control board. Shivam Maurya brings custom database configurations and workflows to optimize daily schedules.",
    heroDescription: "Coordinate sales, inventory, accounting and delivery schedules. We engineer powerful unified custom business managers with zero recurring per-user software licenses.",
    whatWeBuild: [
      "Custom Client Relationship Management (CRM) tracking platforms",
      "Multi-branch inventory ledger and stock notification alerts",
      "Custom business quote creation and automate bill generators",
      "Employee attendance loggers and target milestone scoreboards",
      "Centralized logistics tracking boards"
    ],
    technologies: ["laravel", "reactjs", "mysql", "postgresql", "redis", "bootstrap", "postman"],
    progressSteps: [
      "Analyze actual operational roles, pipelines, and reporting loops",
      "Database schema definitions and custom dashboard sketches",
      "Laravel core platform security configurations",
      "Build pipeline cards, automated invoices and live calendars",
      "Staff onboarding walkthroughs & production server launch"
    ],
    relatedProjects: ["zeta-crm-platform"],
    billingPlans: [
      {
        name: "Core CRM Essentials",
        price: "$1,499",
        period: "one-time",
        description: "Best for teams up to 10 looking to streamline customer pipelines.",
        features: [
          "Custom pipeline drag & drop card stages",
          "Lead capturing & client contact logs panel",
          "Standard PDF quotation creator component",
          "Support for up to 3 separate user roles",
          "2 Months technical training and bug support"
        ]
      },
      {
        name: "Full ERP Suite",
        price: "$3,499",
        period: "one-time",
        description: "Unified accounting, inventory, and sales tracker system.",
        features: [
          "Inter-departmental multi-tier database syncing",
          "Stock thresholds with live email trigger warnings",
          "Automated PDF tax invoicing & recurring statements",
          "Customer support ticketing panel integration",
          "Google and Outlook calendar integrations",
          "6 Months robust developer maintenance support"
        ]
      },
      {
        name: "Enterprise Multi-Site CRM",
        price: "$6,499",
        period: "one-time",
        description: "Designed for multi-state branches, logistics tracking, and massive inventory catalogs.",
        features: [
          "Multi-branch dynamic pricing and individual registers",
          "Advanced GPS route mappings and active driver dispatch dashboards",
          "SMS automated shipping notifications and twilio APIs",
          "Unlimited staff access keys & granular view restrictions",
          "Advanced custom graphs displaying company margins",
          "1 Year full maintenance support agreement"
        ]
      }
    ],
    faq: [
      {
        q: "What makes custom ERPs better than off-the-shelf HubSpot or Salesforce?",
        a: "Off-the-shelf software charges high monthly rates per user, which escalates quickly as you expand. Our custom ERPs carry a one-time fee with zero recurring monthly subscription costs, and are tailored exactly to your unique workflows without clutter."
      },
      {
        q: "Can we track regional sales performance on different branches?",
        a: "Yes. Our CRM systems can partition data cleanly by state, branch, or individual salesperson, enabling administrators to oversee overall performance on unified charts."
      }
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    iconName: "ShoppingCart",
    description: "Launch rapid, conversion-optimized storefronts. We customize high-volume Shopify sites, WordPress WooCommerce layouts, and high-security standalone stores.",
    heroDescription: "Drive global sales securely. We deliver elegant, fast cart structures optimized for rapid load speeds and high-conversion checkouts.",
    whatWeBuild: [
      "Fully customized WordPress + WooCommerce themes and configurations",
      "Optimized Shopify online layouts and liquid script adjustments",
      "Headless React storefronts with centralized CMS backends",
      "Safe transaction gateways (Stripe, PayPal, Razorpay) integration",
      "Integrated product recommendation and discount triggers"
    ],
    technologies: ["wordpress", "shopify", "reactjs", "mysql", "mongodb", "tailwind", "payment"],
    progressSteps: [
      "Understand inventory volume, shipping matrices, and gateway preferences",
      "Construct visual store sheets and custom cart drawer workflows",
      "Design database taxonomy, product attributes, and tags",
      "Deploy custom checkouts, promotional coupons, and stock scripts",
      "Performance and load-testing audits before going live"
    ],
    relatedProjects: ["eco-grocery-ecommerce"],
    billingPlans: [
      {
        name: "Shopify Quickstart",
        price: "$999",
        period: "one-time",
        description: "Best for brands aiming to launch a gorgeous store in a week.",
        features: [
          "Setup of premium Shopify layout matched to branding",
          "Configuration of up to 50 active products",
          "Integration of custom domain and payment channels",
          "Essential ad tracking pixel hooks integrated",
          "30 Days setup support & store training"
        ]
      },
      {
        name: "WooCommerce Pro Engine",
        price: "$2,299",
        period: "one-time",
        description: "Optimal setup for complete control and zero commission fees.",
        features: [
          "WordPress + WooCommerce setup on fast cloud hosting",
          "Up to 250 initial products with advanced categories",
          "Express cart drawer and custom product sliders",
          "Product variations mapping (Colors, sizes, stocks)",
          "Customer account portal & invoice billing",
          "90 Days full security configuration updates"
        ]
      },
      {
        name: "Custom Headless Storefront",
        price: "$4,499",
        period: "one-time",
        description: "Blazing fast headless React storefront built for heavy organic SEO and loads.",
        features: [
          "Next.js/React frontend syncing via REST API",
          "Centralized Strapi CMS database keeping editing simple",
          "1-Second page loads guaranteeing lower bounce rates",
          "Highly custom styling designs from scratch",
          "Robust multi-location inventory syncing",
          "12 Months ultimate technical priority support"
        ]
      }
    ],
    faq: [
      {
        q: "What is a headless storefront and do I need one?",
        a: "A headless storefront separates the frontend code (React) from the backend database ecommerce engine. It delivers near-instant page load speeds and superior SEO rankings, making it perfect for competitive brands with large marketing budgets."
      },
      {
        q: "Can our store sync with physical POS systems?",
        a: "Yes. We can integrate Shopify or custom WooCommerce extensions to sync inventories seamlessly with physical POS locations."
      }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    iconName: "Cloud",
    description: "Highly secure cloud-hosted container environments. We design AWS setups, Docker containers, Kubernetes patterns, automated GitHub Actions pipelines, and harden Linux command lines.",
    heroDescription: "Say goodbye to server downtime. We build scalable, highly available containerized cloud networks that secure user data and auto-scale to meet demand.",
    whatWeBuild: [
      "Auto-scaling multi-zone AWS (EC2, S3, RDS) network setups",
      "Container solutions using Docker and local Kubernetes configurations",
      "Automated continuous integration and deployment (GitHub Actions)",
      "High-security Nginx reverse proxy and SSL certificate installations",
      "Automatic scheduled server backup scripts and system monitors"
    ],
    technologies: ["aws", "gcp", "azure", "docker", "cicd", "linux", "redis"],
    progressSteps: [
      "Review current infrastructure costs, load constraints, and security compliance",
      "Design cloud network diagrams mapping servers, firewalls, and RDS databases",
      "Script configuration code files and Dockerfile setups",
      "Implement GitHub Actions to deploy on standard code commits",
      "Simulate high-load spikes to verify failover automation structures"
    ],
    relatedProjects: ["fintech-cloud-platform"],
    billingPlans: [
      {
        name: "DevOps Pipeline",
        price: "$799",
        period: "one-time",
        description: "Excellent for teams wanting fast, automated deployments.",
        features: [
          "Custom Docker integration of your existing app",
          "GitHub Actions script deploying to your host on merge",
          "Nginx server reverse proxy setup",
          "SSL certification with automatic renewals",
          "30 Days post-deployment site monitoring"
        ]
      },
      {
        name: "AWS Architecture",
        price: "$1,899",
        period: "one-time",
        description: "A highly secure, load-balanced cloud infrastructure for SaaS apps.",
        features: [
          "AWS VPC network configured with subnets",
          "Multi-zone EC2 server setup with autoscaler thresholds",
          "Relational RDS Database containing automated backups",
          "AWS S3 bucket configured for fast file uploads",
          "Basic serverless AWS Lambda setups if required",
          "90 Days dedicated support SLA metrics"
        ]
      },
      {
        name: "Cloud Enterprise Scale",
        price: "$3,799",
        period: "one-time",
        description: "Complete hands-off network operations with extreme protection levels.",
        features: [
          "High Availability deployment mapping Kubernetes clusters",
          "Redis enterprise cache layer configuration",
          "Full firewall, SSH keys, login rate configurations",
          "Detailed Disaster Recovery backup setups to external clouds",
          "Full log audit monitoring with Slack alerts",
          "12 Months developer-backed continuous cluster updates"
        ]
      }
    ],
    faq: [
      {
        q: "What host is best for hosting a Laravel + MySQL app?",
        a: "A managed AWS EC2 instance combined with RDS MySQL or a dedicated Linux VPS configured with secure Nginx proxies delivers the best cost-to-performance ratio for production Laravel applications."
      },
      {
        q: "How does GitHub Actions automated deployment improve our operations?",
        a: "It eliminates manual FTP/SSH uploads. Whenever you push tested code to the main branch, a secure runner automatically pulls your updates, runs checks, and loads files onto the live server with zero downtime."
      }
    ]
  }
];
