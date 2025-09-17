'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

 const navItems = [
  { name: "Home", id: "hero" },
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(sectionId);
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-20  py-4 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold  text-gray-800 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("hero")}
        >
          <img src={'/assets/logo.png'} alt="Logo" className="h-10 w-auto" />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-14">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
               whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9, rotate: 2 }}
            
              onClick={() => scrollToSection(item.id)}
              className="relative font-medium text-gray-700"
              
            >
              <span
                className={`transition-colors font-bold text-2xl duration-300 ${
                  active === item.id ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.name}
              </span>
              {/* Animated underline */}
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-[2px] bg-blue-600 w-full"
                animate={{ opacity: active === item.id ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center space-y-6 py-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    active === item.id ? "text-blue-600" : "text-gray-700"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
