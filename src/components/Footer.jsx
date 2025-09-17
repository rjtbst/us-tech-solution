'use client'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import {motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black py-2 text-white">
     <motion.div
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay:0.2 }}
    viewport={{ once: false, amount: 0.2 }}>
      <div className="container mx-auto px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">US Tech Solutions</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Leading the future of digital transformation with innovative solutions that empower businesses to achieve their full potential in the digital age.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@ustechsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Business District, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              {/* <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li> */}
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#digital-transformation" className="hover:text-primary transition-colors">Digital Transformation</a></li>
              <li><a href="#team-augmentation" className="hover:text-primary transition-colors">Team Augmentation</a></li>
              <li><a href="#consulting" className="hover:text-primary transition-colors">Innovation Consulting</a></li>
              <li><a href="#enterprise" className="hover:text-primary transition-colors">Enterprise Solutions</a></li>
              <li><a href="#support" className="hover:text-primary transition-colors">24/7 Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8  flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary-foreground/70 mb-4 md:mb-0">
            © 2024 US Tech Solutions. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      </motion.div>
    </footer>
  );
};

export default Footer;