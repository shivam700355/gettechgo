export interface PortfolioProject {
  id: string;
  title: string;
  tags: string[];
  category: 'web' | 'app' | 'chatbot' | 'ecommerce' | 'marketing';
  description: string;
  image: string;
  client: string;
  year: string;
  impactBadge?: string;
  demoUrl?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "zeta-crm-platform",
    title: "Multi-Tenant Enterprise ERP / CRM System",
    category: "web",
    tags: ["Laravel", "React.js", "MySQL", "Tailwind CSS", "Redis"],
    description: "Designed and built a complex web application for multi-device enterprise CRM automation. Employs modular customer tracking, custom dashboard charts, invoice auto-generation, and Stripe & Razorpay gateway integrations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    client: "Zeta Logistics Solutions Ltd",
    year: "2025",
    impactBadge: "45% Operations Boost",
    demoUrl: "#"
  },
  {
    id: "smart-health-delivery-app",
    title: "Smart Care On-Demand Mobile App",
    category: "app",
    tags: ["Flutter", "Node.js", "Express", "MongoDB", "Twilio API"],
    description: "A fast, fully responsive cross-platform native smartphone patient scheduling and consultation tracker. Allows live push status updates, prescription generation, and automated Twilio OTP verification workflows.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80",
    client: "Hearth Care Clinics Association",
    year: "2025",
    impactBadge: "99.9% App Uptime",
    demoUrl: "#"
  },
  {
    id: "retail-chatbot-openai",
    title: "AI Conversational Commerce Assistant",
    category: "chatbot",
    tags: ["OpenAI API", "Python", "LangChain", "Dialogflow", "FastAPI"],
    description: "A custom fine-tuned GPT and LangChain automated assistant answering product questions, confirming purchase orders, pulling live stock counts, and handling customer complaints natively in real-time.",
    image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?w=600&auto=format&fit=crop&q=80",
    client: "Zenith Apparel Group",
    year: "2024",
    impactBadge: "70% Chat Automated",
    demoUrl: "#"
  },
  {
    id: "eco-grocery-ecommerce",
    title: "EcoFresh Next-Gen Online Grocery Portal",
    category: "ecommerce",
    tags: ["WordPress", "WooCommerce", "MySQL", "Tailwind CSS", "Stripe"],
    description: "Custom WooCommerce redesign with custom-engineered fast caching, dynamic geo-fenced product pricing calculations, smart product search, and responsive mobile-first payment UI designs.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
    client: "EcoFresh Farm Distributors",
    year: "2024",
    impactBadge: "+120% Sales Uplift",
    demoUrl: "#"
  },
  {
    id: "fintech-cloud-platform",
    title: "SaaS Accounting Dashboard Migration",
    category: "web",
    tags: ["Laravel", "Vue.js", "Docker", "AWS (EC2/RDS)", "CI/CD"],
    description: "Successfully re-engineered a serverless accounting platform by upgrading legacy PHP systems to Laravel, moving MySQL databases to secure cloud RDS with high-availability master/slave backups, and containerizing with Docker.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    client: "FinBalance FinTech",
    year: "2024",
    impactBadge: "3x Faster Load Speeds",
    demoUrl: "#"
  },
  {
    id: "organic-seo-campaigns",
    title: "Hyper-Targeted Digital Marketing Campaign",
    category: "marketing",
    tags: ["Google Analytics 4", "Google Ads", "Meta Ads", "SEMrush"],
    description: "Created and scaled comprehensive lead capture systems, programmatic Google Search ads, and deep on-page technical SEO rank alignments to triple monthly inbound corporate leads.",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&auto=format&fit=crop&q=80",
    client: "Vedic Lifestyle Inc",
    year: "2023",
    impactBadge: "+350% Traffic Growth",
    demoUrl: "#"
  }
];
