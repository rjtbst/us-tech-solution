'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ui/scroll-reveal";
import AnimatedText from "@/components/ui/animated-text";
import { 
  FlaskConical, 
  CloudSnow, 
  Monitor, 
  Settings, 
  BarChart3, 
  Shield 
} from "lucide-react";

const ServicesSection = () => {
const services = [
  {
    icon: FlaskConical,
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility on search engines with targeted SEO strategies tailored to your business goals.",
    features: ["Keyword Research", "On-Page Optimization", "Backlink Strategy"]
  },
  {
    icon: CloudSnow,
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Drive instant traffic and maximize ROI with highly optimized paid campaigns across Google, Bing, and social platforms.",
    features: ["Campaign Strategy", "Ad Creation", "Performance Tracking"]
  },
  {
    icon: Monitor,
    title: "Social Media Marketing",
    description: "Engage and grow your audience through strategic campaigns on platforms like Instagram, LinkedIn, and Facebook.",
    features: ["Content Creation", "Community Management", "Analytics & Reporting"]
  },
  {
    icon: Settings,
    title: "Content Marketing",
    description: "Craft compelling content that educates, engages, and converts your target audience across blogs, videos, and more.",
    features: ["Blog Writing", "Video Content", "Email Newsletters"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with advanced analytics and clear reporting on website, social, and campaign performance.",
    features: ["Traffic Analysis", "Conversion Tracking", "ROI Reporting"]
  },
  {
    icon: Shield,
    title: "Brand Strategy & Consulting",
    description: "Develop a strong brand identity and strategy that differentiates your business and drives growth.",
    features: ["Brand Audits", "Market Research", "Strategic Roadmaps"]
  }
];



  return (
    <section id="services" className=" relative">
     
     <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut", delay:0.2 }}
    viewport={{ once: false, amount: 0.2 }}
    className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Expertise</span>
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={0.4}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to grow your brand, engage your audience, and maximize ROI across all online channels.

            </p>
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.6 + index * 0.1}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
               <Card className="bg-white border border-gray-200 p-8 h-full group cursor-pointer shadow-md hover:shadow-xl rounded-xl transition-all duration-300">
  <motion.div
    className="mb-6"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ duration: 0.3 }}
  >
    <service.icon className="w-12 h-12 text-primary" />
  </motion.div>

  <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
    {service.title}
  </h3>

  <p className="text-gray-600 mb-6 leading-relaxed">
    {service.description}
  </p>

  <ul className="space-y-2">
    {service.features.map((feature, featureIndex) => (
      <motion.li
        key={featureIndex}
        className="flex items-center text-sm text-gray-600"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.05 }}
      >
        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
        {feature}
      </motion.li>
    ))}
  </ul>
</Card>

                
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;