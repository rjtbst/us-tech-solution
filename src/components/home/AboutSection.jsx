"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "15+ Years of Industry Experience",
  "500+ Successful Projects Delivered",
  "Global Team of Expert Professionals",
  "24/7 Dedicated Support",
];

// Reusable component for feature animation
const FeatureItem = ({ feature }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration: 0.6 }}
      className="flex items-center space-x-3"
    >
      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
      <span className="text-foreground font-medium">{feature}</span>
    </motion.div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" ref={ref} className="bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/assets/about-image.jpg" // ✅ Image must be in public/assets/
                  alt="Professional business team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary rounded-xl opacity-20" />
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary rounded-full opacity-10" />
            </div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 heading-gradient">
              About Our Company
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a leading technology consulting firm dedicated to helping
              businesses navigate the digital landscape. Our team of experts
              combines deep industry knowledge with cutting-edge technology to
              deliver solutions that drive real business value.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <FeatureItem key={feature} feature={feature} />
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button className="btn-hero">Learn More About Us</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
