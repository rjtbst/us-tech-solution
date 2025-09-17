"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Info, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    image: "/assets/hero-1.jpg",
    title: "Transform Your Business",
    subtitle: "  Leading digital transformation solutions for modern enterprises",
    cta: "Get Started",
    section: "brands",
    variant: "gradient",
    icon: <ArrowRight />,
  },
  {
    id: 2,
    image: "/assets/hero-2.jpg",
    title: "Expert Teams, Proven Results",
    subtitle: " Collaborative  solutions that drive innovation and growth",
    cta: "Learn More",
    section: "whatWeDo",
    variant: "ghost",
    icon: <Users />,
  },
  {
    id: 3,
    image: "/assets/hero-3.jpg",
    title: "Future-Ready Technology",
    subtitle: " Cutting-edge solutions that prepare your business for tomorrow",
    cta: "Explore Services",
    section: "services",
    variant: "neon",
    icon: <Info />,
  },
  {
    id: 4,
    image: "/assets/hero-4.jpg",
    title: "Partnership for Success",
    subtitle: " Building lasting relationships through exceptional service delivery",
    cta: "Contact Us",
    section: "contact",
    variant: "pill",
    icon: <Mail />,
  },
];

const variants = {
  enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function HeroCarousel() {
  const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const frameRef = useRef(null);

  const paginate = (newDirection) => {
    setCurrentSlide(([prev]) => {
      const next = (prev + newDirection + slides.length) % slides.length;
      return [next, newDirection];
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

// Typing effect using requestAnimationFrame
useEffect(() => {
  const subtitle = slides[currentSlide].subtitle;
  setTypedSubtitle(""); // reset

  let startTime = null;
  let index = 0;
  let cancelled = false;

  const typeStep = (timestamp) => {
    if (cancelled) return;

    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    // Add letters based on elapsed time (40ms per character)
    const nextIndex = Math.min(subtitle.length, Math.floor(elapsed / 40));
    if (nextIndex > index) {
      setTypedSubtitle(subtitle.slice(0, nextIndex));
      index = nextIndex;
    }

    if (index < subtitle.length) {
      requestAnimationFrame(typeStep);
    }
  };

  requestAnimationFrame(typeStep);

  return () => {
    cancelled = true; // stop typing immediately if slide changes
  };
}, [currentSlide]);


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-[100vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.35, 0.45, 0.45, 0.94] }}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

          {/* Content */}
          <div className="relative z-10 ml-12 flex h-full items-center">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-3xl">
                <motion.h1
                  className="mb-6 text-5xl font-bold leading-tight text-white lg:text-7xl"
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 150 : -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -150 : 150 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  className="mb-8 text-xl leading-relaxed text-white/90 lg:text-2xl font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {typedSubtitle}
                  {typedSubtitle.length < slides[currentSlide].subtitle.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </motion.p>

                <motion.div
                  custom={direction}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button
                    className="text-white text-lg p-6"
                    icon={slides[currentSlide].icon}
                    variant={slides[currentSlide].variant}
                    onClick={() => scrollToSection(slides[currentSlide].section)}
                  >
                    {slides[currentSlide].cta}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide([index, index > currentSlide ? 1 : -1])}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
