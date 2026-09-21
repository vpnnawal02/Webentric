import { icons } from './assets.js';
import { images } from './assets.js';

export const projects = [
    {
        title: "School Website",
        description:
            "Modern school website designed to showcase academics, admissions, facilities, achievements, notices, events, and student activities. Provides parents and students with easy access to important information through a professional and user-friendly digital platform.",
        tech: "React • Tailwind",
        image: images.school,
        link: 'https://standrewschoolwebsite.netlify.app/'
    },
    {
        title: "Avanza Survey",
        description:
            "A modern corporate website designed to showcase the company’s services, expertise, leadership, and capabilities through a clean, professional, and responsive digital experience. Built with a focus on performance, usability, and a strong brand presence.",
        tech: "React • Tailwind • Framer Motion • SMTP • Netlify",
        image: images.avanza,
        link: 'https://avanzasurvey.netlify.app/'
    },
    {
        title: "Interior Design",
        description:
            "A sleek interior design website showcasing stylish spaces, services, and easy ways to connect with designers.",
        tech: "React • Tailwind",
        image: images.interior_design,
        link: 'https://69e1fc47d738729194709684--heartfelt-valkyrie-f8acf5.netlify.app/'
    },
    {
        title: "Travel Agency",
        description:
            "A modern travel agency website showcasing destinations, travel packages, and seamless ways for customers to plan and enquire about their next trip.",
        tech: "React • Tailwind",
        image: images.travel_agency,
        link: "https://travel-agency-webentric.netlify.app/"
    },
    {
        title: "Salon Website",
        description:
            "A fully responsive salon landing page built using React, featuring clean UI, smooth animations, and optimized performance for a modern web experience.",
        tech: "React • Tailwind",
        image: images.salon,
        link: 'https://salonwebsitebywebentric.netlify.app/'
    },
    {
        title: "Box Print Company",
        description:
            "Professional website for a box printing company showcasing custom packaging solutions, product catalogs, printing services, quality standards, and easy quote requests. Designed to help businesses present their packaging expertise and generate more customer inquiries online.",
        tech: "React • Tailwind",
        image: images.maple_prints,
        link: 'https://prints-webentric.netlify.app/'
    },
    {
        title: "Cafe Website",
        description:
            "A fully responsive cafe website page built using React, featuring clean UI, smooth animations, and optimized performance for a modern web experience.",
        tech: "React • Tailwind",
        image: images.my_cafe,
        link: 'https://my-cafe-webentric.netlify.app/'
    },
    {
        title: "E-Commerce Store",
        description:
            "Custom online store with product listings, shopping cart functionality, and secure checkout integration.",
        tech: "React • Stripe • Firebase",
        image: images.ecommerce,
        link: 'https://e-commerce-vipin.netlify.app/'
    },
    {
        title: "Business Consulting Website",
        description:
            "Professional business website designed to showcase services and generate leads through optimized landing sections.",
        tech: "React • Tailwind",
        image: images.business,
        link: 'https://webentric.in/'
    },
    {
        title: "Landing Page for a Cafe",
        description:
            "Modern Cafe website featuring your Vibe, Menu, and cats.",
        tech: "React • Tailwind",
        image: images.cafe,
        link: 'https://frabjous-elf-35e678.netlify.app/'
    },
    {
        title: "Dental Clinic Website",
        description:
            "Modern landing page designed for Dental Clinic platform with clear call-to-actions and engaging visuals.",
        tech: "React • Tailwind",
        image: images.dental_clinic,
        link: ''
    },
    {
        title: "Portfolio Website",
        description:
            "Modern Portfolio website featuring your skills, education, and mobile-friendly design.",
        tech: "React • Tailwind",
        image: images.portfolio,
        link: 'https://vipin-portfolio-web.netlify.app/'
    },
    {
        title: "Gym & Fitness Website",
        description:
            "Responsive website for a fitness center including membership plans, trainer profiles, and class schedules.",
        tech: "React • Tailwind",
        image: images.gym,
        link: 'https://gymshala.netlify.app/'
    },

];

export const services = [
    {
        icon: icons.globe_icon,
        title: "Business Website Development",
        description:
            "Professional websites designed to give businesses a strong online presence and showcase their services effectively.",
    },
    {
        icon: icons.cart_icon,
        title: "E-Commerce Development",
        description:
            "Custom online stores with secure payment integration, product management, and seamless shopping experiences.",
    },
    {
        icon: icons.refresh_icon,
        title: "Website Redesign",
        description:
            "Modern redesigns that improve usability, speed, and visual appeal for outdated websites.",
    },
    {
        icon: icons.target_icon,
        title: "Landing Page Development",
        description:
            "High-converting landing pages optimized for marketing campaigns, lead generation, and product launches.",
    },
    {
        icon: icons.refresh_icon,
        title: "Website Maintenance & Support",
        description:
            "Regular updates, security monitoring, and performance optimization to keep your website running smoothly.",
    },
    {
        icon: icons.target_icon,
        title: "SEO Optimization",
        description:
            "Technical SEO improvements that help your website rank higher on search engines and attract organic traffic.",
    },
];


export const processSteps = [
    {
        number: "01",
        icon: icons.message_circle_icon,
        title: "Project Consultation",
        description:
            "We begin by understanding your business, goals, and target audience to determine the best website strategy.",
    },
    {
        number: "02",
        icon: icons.layout_icon,
        title: "Wireframe & Design",
        description:
            "We design the structure and visual layout of your website to ensure a modern look and a seamless user experience.",
    },
    {
        number: "03",
        icon: icons.code_icon,
        title: "Website Development",
        description:
            "Your website is developed using modern technologies to ensure speed, responsiveness, and reliability.",
    },
    {
        number: "04",
        icon: icons.rocket_icon,
        title: "Launch & Optimization",
        description:
            "After thorough testing, we launch your website and ensure everything runs smoothly with ongoing improvements.",
    },
];


export const CONTACT_ITEMS = [
    {
        id: "phone",
        label: "Call",
        icon: icons.phone_icon,
        href: "tel:+919560342636",
        bg: "bg-emerald-500",
    },
    {
        id: "whatsapp",
        label: "WhatsApp",
        icon: icons.whatsapp_icon,
        href: "https://wa.me/message/IK7VVIWKOELZL1",
        bg: "bg-green-500",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        icon: icons.linkedin_icon,
        href: "https://www.linkedin.com/company/webentric", // change
        bg: "bg-sky-600",
    },
    {
        id: "facebook",
        label: "Facebook",
        icon: icons.facebook_icon,
        href: "https://www.facebook.com/profile.php?id=61574354051186", // change
        bg: "bg-blue-600",
    },
    {
        id: "instagram",
        label: "Instagram",
        icon: icons.instagram_icon,
        href: "https://www.instagram.com/webentric.in/", // change
        bg: "bg-pink-500",
    },
];

export const testimonials = [
    {
        name: "Vipin",
        role: "Landing Page",
        text: "Tried Webentric for a website project. Pretty satisfied with the work. Design looks modern and the site runs well.",
        avatar: "",
        rating: 5,
    },
    {
        name: "Neha Kumari",
        role: "Salon Owner",
        text: "Had a great experience working with Webentric for our salon website. Vipin was very cooperative, easy to communicate with, and handled all our suggestions patiently. The whole process felt smooth and stress free, especially since it was our first time getting a website made. Really happy with the support and overall experience.",
        avatar: "",
        rating: 5,
    },
    {
        name: "Kishanshu Mehra",
        role: "Startup Founder",
        text: "Working with Webentric was honestly a very smooth experience. Vipin was patient, easy to communicate with, and genuinely interested in understanding our business properly before starting. Since this was our first website, we had a lot of questions and confusion, but everything was explained clearly and the whole process felt comfortable. The support, responsiveness, and attention to detail throughout the project were really appreciated. Would definitely recommend Webentric to anyone looking to get their business online.",
        avatar: "",
        rating: 5,
    },
];

export const pricingPackages = [
    {
        title: "Starter Website",
        price: "₹7,999",
        delivery: "5–7 Days",
        features: [
            { name: "Up to 5 Pages", desc: "Home, About, Services, Portfolio, Contact pages included." },
            { name: "Mobile Responsive Design", desc: "Fully responsive across all devices and screen sizes." },
            { name: "Basic SEO Setup", desc: "Page titles, meta descriptions, and search indexing." },
            { name: "Advanced UI/UX", desc: "Interactive elements, smooth animations, modern interactions." },
            { name: "Fast Loading Pages", desc: "Optimized images, minified CSS/JS, performance best practices." },
            { name: "Fast Delivery", desc: "Sites to be delivered within 5 days" }
        ],
    },
    {
        title: "Business Website",
        price: "₹14,999",
        delivery: "7–10 Days",
        popular: true,
        features: [
            { name: "Up to 10 Pages", desc: "Everything in Starter + Blog, Team, FAQ pages." },
            { name: "Custom Design", desc: "Unique design tailored to your brand identity." },
            { name: "Contact Form", desc: "Professional form with email notifications and spam protection." },
            { name: "SEO Optimized Structure", desc: "Complete on-page SEO, schema markup, sitemap." },
            { name: "Speed Optimization", desc: "Core Web Vitals, lazy loading, advanced caching." },
            { name: "Social Media Integration", desc: "Instagram, LinkedIn, WhatsApp, Facebook links." },
        ],
    },
    {
        title: "E-Commerce Website",
        price: "₹29,999",
        delivery: "14-25 Days",
        features: [
            { name: "Product Catalog", desc: "Unlimited products with categories and filtering." },
            { name: "Shopping Cart", desc: "Persistent cart, quantity controls, wishlist." },
            { name: "Payment Gateway", desc: "Razorpay, Stripe, UPI, PayPal integration." },
            { name: "Order Management", desc: "Order tracking, status updates, customer dashboard." },
            { name: "Mobile Store", desc: "Optimized e-commerce experience on all devices." },
            { name: "Admin Dashboard", desc: "Complete backend to manage products, orders, customers." },
        ],
    },
];

export const addons = [
    { name: "Extra Page", price: "₹500" },
    { name: "Blog Setup", price: "₹1,000" },
    { name: "SEO Optimization", price: "₹2,000" },
    { name: "Website Maintenance", price: "₹1,500/month" },
    { name: "Speed Optimization", price: "₹1,000" },
    { name: "Content Upload", price: "₹800" },
];

export const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "Most websites take 5–14 days depending on complexity. Starter packages deliver in 5–7 days, while e-commerce sites take 10–14 days.",
    },
    {
        question: "Do you provide hosting?",
        answer: "Yes! We help set up hosting with providers like Vercel, Netlify, or traditional hosting. Deployment and domain setup included.",
    },
    {
        question: "Will my website work on mobile devices?",
        answer: "Absolutely. All websites are fully responsive and optimized for phones, tablets, and desktops using modern responsive frameworks.",
    },
    {
        question: "Can I update my website later?",
        answer: "Yes! We provide documentation and training. Optional maintenance packages available for ongoing updates and support.",
    },
];

export const WEBSITE_TYPES = [
    {
        key: "landing",
        label: "Landing Page",
        desc: "Perfect for product launches & campaigns",
        price: 7999,
        highlights: ["Up to 5-7 pages", "Mobile Responsive Design", "Basic SEO Setup", "Contact Form", "Fast Delivery"],
    },
    {
        key: "business",
        label: "Business Website",
        desc: "Ideal for companies & service providers",
        price: 14999,
        highlights: ["Up to 10-12 pages", "Professional design", "Speed Optimization", "2-3 weeks"],
    },
    {
        key: "ecommerce",
        label: "E-Commerce Store",
        desc: "Full-featured online store with cart & checkout",
        price: 24999,
        highlights: ["Upto 25 pages", "Product catalog", "Cart & checkout", "Admin Dashboard", "Payment Gateway", "4-6 weeks"],
    },
];

export const PRICE_PER_EXTRA_PAGE = 500;
export const BASE_PAGES = 0;

export const FEATURE_LIST = [
    { key: "auth", label: "User Authentication", price: 5000 },
    { key: "payment", label: "Payment Integration", price: 10000 },
    { key: "adminDashboard", label: "Admin Dashboard", price: 7000 },
    { key: "blog", label: "Blog System", price: 10000 },
    { key: "cms", label: "CMS Integration", price: 10000 },
    { key: "api", label: "API Integration", price: 8000 },
    { key: "seo", label: "SEO Optimization", price: 5000 },
    { key: "performance", label: "Performance Optimization", price: 7000 },
    { key: "animations", label: "Custom Animations", price: 3000 },
    { key: "integrations", label: "Third-party Integrations", price: 6000 },
];

export const TIMELINE_OPTIONS = [
    { key: "standard", label: "Standard Timeline", desc: "", price: 0 },
    { key: "fast", label: "Fast Delivery", desc: "20%-30% faster", price: 3000 },
    { key: "priority", label: "Priority Delivery", desc: "Priority Delivery", price: 6000 },
];