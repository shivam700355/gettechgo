export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  image: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    company: "Zeta Logistics Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    text: "Shivam Maurya and the GetTechGo team built an outstanding Laravel based CRM system integrated with our fleet tracking. The Laravel back-end is lightning fast, and they handled all our complex multi-tenant client databases cleanly. Excellent 24/7 technical support!"
  },
  {
    id: "review-2",
    name: "Samantha Miller",
    role: "Chief Operating Officer",
    company: "Apex Global Retailers",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    text: "Our Shopify and WordPress WooCommerce store upgrade was flawlessly executed. The team did incredible customization on custom checkout gateways with Stripe. Our conversion rates increased by 35% after launching their custom headless React storefront."
  },
  {
    id: "review-3",
    name: "Amit Patel",
    role: "Product Owner",
    company: "Hearth Care Clinics",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    text: "We needed a safe patient schedule portal and custom AI automation chatbot using Dialogflow. Shivam delivered an exceptionally polished system. Their Flutter application runs flawlessly on both iOS and Android. They are our go-to technology partners."
  }
];
