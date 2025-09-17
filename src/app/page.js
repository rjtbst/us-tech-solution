"use client";

import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import Brand from "@/components/home/Brand";
import ContactSection from "@/components/home/ContactSection";
import AboutSection from "@/components/home/AboutSection";
import { motion } from "framer-motion";
import WhatWeDo from "@/components/home/WhatWeDo";

// 🔹 Reusable scroll animation wrapper
 const ScrollReveal = ({ children, delay = 0, className = "" }) => {
return(  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, ease: "easeOut", delay }}
    viewport={{ once: false, amount: 0.2 }}
    className={className}
  >
    {children}
  </motion.div>)
 };

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <div className="px-20">
        <HeroSection />
      </div>

      {/* Brand Section */}
      <ScrollReveal delay={0.1} className="">
        <Brand />
      </ScrollReveal>

        <ScrollReveal delay={0.1} className="px-20 ">
        <WhatWeDo />
      </ScrollReveal>

      {/* Services Section */}
      <ScrollReveal className="px-20 flex flex-col items-center justify-center" delay={0.1}>
        <ServicesSection />
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal className="px-20" delay={0.2}>
        <AboutSection />
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal delay={0.4}>
        <ContactSection />
      </ScrollReveal>
    </div>
  );
}
