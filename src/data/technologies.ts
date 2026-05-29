export interface Technology {
  id: string;
  name: string;
  category: 'backend' | 'frontend' | 'mobile' | 'database' | 'cloud' | 'ai' | 'marketing' | 'cms' | 'other';
  description: string;
  badge: 'PRIMARY STACK' | 'Expert' | 'Proficient';
  iconName: string;
}

export const technologies: Technology[] = [
  // Backend Frameworks
  {
    id: "laravel",
    name: "Laravel (PHP)",
    category: "backend",
    description: "Our primary backend choice. Powerful MVC framework with built-in queueing, authentication, eloquent ORM, and rapid ecosystem development.",
    badge: "PRIMARY STACK",
    iconName: "Server"
  },
  {
    id: "nodejs",
    name: "Node.js & Express",
    category: "backend",
    description: "Extremely fast, asynchronous, single-threaded V8 javascript engine for building robust real-time backend Restful APIs.",
    badge: "Expert",
    iconName: "Cpu"
  },
  {
    id: "django",
    name: "Django (Python)",
    category: "backend",
    description: "High-level Python web framework that encourages rapid design and practical, clean, and highly secure architecture.",
    badge: "Proficient",
    iconName: "Terminal"
  },
  {
    id: "springboot",
    name: "Spring Boot (Java)",
    category: "backend",
    description: "Robust enterprise Grade Java framework for highly scalable, production-ready microservices and complex computing.",
    badge: "Proficient",
    iconName: "Shield"
  },
  {
    id: "aspnet",
    name: "ASP.NET Core (C#)",
    category: "backend",
    description: "Cross-platform, high-performance, open-source framework for building modern cloud-enabled enterprise level systems.",
    badge: "Proficient",
    iconName: "Layers"
  },
  {
    id: "codeigniter",
    name: "CodeIgniter (PHP)",
    category: "backend",
    description: "Lightweight, powerful PHP framework with very small footprint, built for developers who need simple and elegant toolkits.",
    badge: "Expert",
    iconName: "Code"
  },

  // Frontend Frameworks
  {
    id: "reactjs",
    name: "React.js",
    category: "frontend",
    description: "Modern declarative component-based user interface library with Virtual DOM for powerful SPA development & rich UX.",
    badge: "Expert",
    iconName: "Layout"
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    description: "React framework for production. Hybrid static & server-side rendering, optimized image handling, and built-in SEO setups.",
    badge: "Expert",
    iconName: "Sparkles"
  },
  {
    id: "vuejs",
    name: "Vue.js",
    category: "frontend",
    description: "Progressive JavaScript framework for building intuitive, interactive and fast frontends with reactive data bindings.",
    badge: "Proficient",
    iconName: "Monitor"
  },
  {
    id: "angular",
    name: "Angular",
    category: "frontend",
    description: "Robust TypeScript platform for structuring giant enterprise applications with modular component architectures.",
    badge: "Proficient",
    iconName: "Compass"
  },
  {
    id: "vanilla",
    name: "HTML5 / CSS3 / ES6+",
    category: "frontend",
    description: "Core semantic web standards, high-performance vanilla script structures, and responsive CSS styling natively.",
    badge: "Expert",
    iconName: "Globe"
  },
  {
    id: "tailwind",
    name: "Tailwind & Bootstrap",
    category: "frontend",
    description: "Utility-first CSS frameworks for incredibly swift, responsive styling and adaptive grid components.",
    badge: "Expert",
    iconName: "Palette"
  },

  // Mobile Developments
  {
    id: "flutter",
    name: "Flutter",
    category: "mobile",
    description: "Google's UI software development kit for crafting high-performance, beautiful compiled applications for mobile, web, and desktop from a single codebase.",
    badge: "Expert",
    iconName: "Smartphone"
  },
  {
    id: "reactnative",
    name: "React Native",
    category: "mobile",
    description: "Learn once, write anywhere framework utilizing React paradigm to build truly native iOS and Android apps.",
    badge: "Expert",
    iconName: "Smartphone"
  },
  {
    id: "kotlin",
    name: "Android (Kotlin / Java)",
    category: "mobile",
    description: "Native Android application development featuring Kotlin coroutines, modern Jetpack Compose layouts, and powerful background optimization.",
    badge: "Expert",
    iconName: "Smartphone"
  },
  {
    id: "swift",
    name: "iOS (Swift)",
    category: "mobile",
    description: "Native Apple ecosystems engineering with Swift programming language, customized UI elements, and fast response times.",
    badge: "Proficient",
    iconName: "Smartphone"
  },

  // Databases
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    description: "Standard open-source Relational Database Management System (RDBMS) featuring robust transaction processing and reliability.",
    badge: "Expert",
    iconName: "Database"
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    description: "Advanced relational, object-relational enterprise database known for high compliance, reliability, and robust complex query structures.",
    badge: "Expert",
    iconName: "Database"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    description: "Popular NoSQL, document-oriented database utilizing JSON-like flexible representations for rapidly scaling dynamic schemas.",
    badge: "Expert",
    iconName: "Database"
  },
  {
    id: "firebase",
    name: "Firebase Firestore",
    category: "database",
    description: "Flexible, scalable NoSQL cloud database to store and sync data for client- and server-side development in real-time.",
    badge: "Expert",
    iconName: "Database"
  },
  {
    id: "redis",
    name: "Redis Cache",
    category: "database",
    description: "In-memory data structure store used as a database, cache, and message broker for extremely low-latency requirements.",
    badge: "Expert",
    iconName: "Database"
  },
  {
    id: "sqlite",
    name: "SQLite",
    category: "database",
    description: "Self-contained, serverless, zero-configuration SQL database engine ideal for embedded devices and lightweight operations.",
    badge: "Expert",
    iconName: "Database"
  },

  // Cloud & DevOps
  {
    id: "aws",
    name: "AWS (EC2, S3, Lambda, RDS)",
    category: "cloud",
    description: "Amazon Web Services suite hosting secure servers, file systems, serverless calculations, and auto-managed relational databases.",
    badge: "Expert",
    iconName: "Cloud"
  },
  {
    id: "gcp",
    name: "Google Cloud (GCP)",
    category: "cloud",
    description: "Highly secure, scalable Google-engineered infrastructure offering serverless execution, BigQuery analysis, and flexible containers.",
    badge: "Expert",
    iconName: "Cloud"
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: "cloud",
    description: "Enterprise-grade cloud services system supporting C# services, server deployments, Active Directory integrations, and DevOps pipelines.",
    badge: "Proficient",
    iconName: "Cloud"
  },
  {
    id: "docker",
    name: "Docker & Kubernetes",
    category: "cloud",
    description: "Standard containerization for reliable, reproducible environments across staging & production environments, managed by orchestration.",
    badge: "Expert",
    iconName: "Box"
  },
  {
    id: "cicd",
    name: "CI/CD (GitHub Actions)",
    category: "cloud",
    description: "Continuous integration & deployment methodologies allowing instant automated linters, unit-testing, and deployments on merges.",
    badge: "Expert",
    iconName: "GitBranch"
  },
  {
    id: "linux",
    name: "Linux Server Administration",
    category: "cloud",
    description: "Expert terminal configuration, Nginx, Apache reverse proxies, SSH setup, cron-jobs, and overall network hardening workflows.",
    badge: "Expert",
    iconName: "Server"
  },

  // AI & Chatbot
  {
    id: "openai",
    name: "OpenAI API",
    category: "ai",
    description: "Integrating State-of-the-art LLMs like GPT-4o, building prompt structures, context injections, and smart semantic embeddings.",
    badge: "Expert",
    iconName: "Brain"
  },
  {
    id: "dialogflow",
    name: "Google Dialogflow",
    category: "ai",
    description: "Natural Language Understanding (NLU) platform to design conversational user interfaces for customer service automation.",
    badge: "Expert",
    iconName: "MessageSquareCode"
  },
  {
    id: "rasa",
    name: "Rasa Framework",
    category: "ai",
    description: "Open-source machine learning framework for building bespoke conversational assistants, natural intent models and action triggers.",
    badge: "Proficient",
    iconName: "MessageCircle"
  },
  {
    id: "langchain",
    name: "LangChain",
    category: "ai",
    description: "Powerful framework designed to build stateful LLM chains, agentic RAG structures, and robust cognitive flows.",
    badge: "Expert",
    iconName: "Link"
  },
  {
    id: "nlp",
    name: "Python (NLP / ML)",
    category: "ai",
    description: "Expert machine learning engineering utilizing Scikit-Learn, PyTorch and custom pipelines for data processing.",
    badge: "Expert",
    iconName: "Activity"
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "ai",
    description: "Deep learning library setup for analyzing user trends, computer vision automation, and specialized classification tasks.",
    badge: "Proficient",
    iconName: "Cpu"
  },

  // Digital Marketing
  {
    id: "ga4",
    name: "Google Analytics 4",
    category: "marketing",
    description: "Unraveling advanced cohort traffic, user conversion streams on websites, event tracking triggers, and demographic metrics.",
    badge: "Expert",
    iconName: "BarChart"
  },
  {
    id: "googleads",
    name: "Google Ads (PPC)",
    category: "marketing",
    description: "Crafting search campaigns, high-ROI display ads, lead-generation models, and competitive keyword bid configurations.",
    badge: "Expert",
    iconName: "TrendingUp"
  },
  {
    id: "metaads",
    name: "Meta Ads (FB & Insta)",
    category: "marketing",
    description: "Targeting demographics based on interests, lookalike audiences, retargeting funnels, and optimized pixel trigger integrations.",
    badge: "Expert",
    iconName: "Share2"
  },
  {
    id: "semrush",
    name: "SEMrush & Ahrefs",
    category: "marketing",
    description: "Professional competitor analysis, deep-keyword audits, backlink profiling, on-page optimization, and organic rank boosting.",
    badge: "Expert",
    iconName: "Search"
  },
  {
    id: "mailchimp",
    name: "Mailchimp Campaigns",
    category: "marketing",
    description: "Automated e-mail newsletters, design drip-campaign configurations, list cleaning, and email template optimizations.",
    badge: "Expert",
    iconName: "Mail"
  },
  {
    id: "hubspot",
    name: "HubSpot CRM",
    category: "marketing",
    description: "Integrating powerful marketing funnels, auto customer onboarding trackers, lead segmentation, and customer analytics platforms.",
    badge: "Proficient",
    iconName: "Users"
  },

  // CMS & E-Commerce
  {
    id: "wordpress",
    name: "WordPress + WooCommerce",
    category: "cms",
    description: "Custom themes & plugins development, high-security hardening, elementor structure custom integrations, and e-commerce carts.",
    badge: "Expert",
    iconName: "ShoppingCart"
  },
  {
    id: "shopify",
    name: "Shopify Storefronts",
    category: "cms",
    description: "Setting up liquid templates, backend custom Shopify app extensions, store payment settings, and pixel trackers.",
    badge: "Expert",
    iconName: "ShoppingBag"
  },
  {
    id: "magento",
    name: "Magento Enterprise",
    category: "cms",
    description: "Heavy relational high-volume database inventory configurations, multisite settings, e-commerce cart caching setups.",
    badge: "Proficient",
    iconName: "Layers"
  },
  {
    id: "strapi",
    name: "Strapi (Headless CMS)",
    category: "cms",
    description: "Self-managed API-first CMS mapping flexible content collections, serving lightning-fast Graphql/Rest API structures.",
    badge: "Expert",
    iconName: "Settings"
  },
  {
    id: "ghost",
    name: "Ghost CMS",
    category: "cms",
    description: "Ultra-fast publishing platform ideal for search engine optimized blogs and membership monetization flows.",
    badge: "Expert",
    iconName: "PenTool"
  },

  // Other Tools
  {
    id: "git",
    name: "Git & GitHub / Gitlab",
    category: "other",
    description: "Version-control repository management, branching methodologies (GitFlow), code review PR flows, and release tagging.",
    badge: "Expert",
    iconName: "GitBranch"
  },
  {
    id: "postman",
    name: "Postman",
    category: "other",
    description: "API design and testing utility, continuous automation scripts, mock server configuration and API contract validations.",
    badge: "Expert",
    iconName: "FileCheck"
  },
  {
    id: "figma",
    name: "Figma (UI/UX)",
    category: "other",
    description: "Beautiful clean prototype layout wireframes, screen designs, style guide alignments and user journey mappings.",
    badge: "Expert",
    iconName: "Figma"
  },
  {
    id: "jira",
    name: "Jira / Trello",
    category: "other",
    description: "Agile sprints scheduling, task backlogs, team task assignment boards, and Scrum milestone tracker tools.",
    badge: "Expert",
    iconName: "ClipboardList"
  },
  {
    id: "payment",
    name: "Stripe / Razorpay / PayPal",
    category: "other",
    description: "Safe API merchant ledger configurations, custom webhooks, recurring subscription charges and multi-currency billing pages.",
    badge: "Expert",
    iconName: "CreditCard"
  },
  {
    id: "twilio",
    name: "Twilio (SMS / WhatsApp)",
    category: "other",
    description: "Automated phone notifications, serverless OTP verification codes, automated WhatsApp alert chains and voice routing APIs.",
    badge: "Expert",
    iconName: "Smartphone"
  }
];
