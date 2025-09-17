"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    img: "/assets/hero-2.jpg",
    title: "Digital Technology Services",
    description:
      "Our specialized digital services division, Dimiour, delivers exceptional digital services to our clients, empowering them to revolutionize their businesses.",
    linkText: "Discover Our Digital Services",
    link: "#",
  },
  {
    id: 2,
    img: "/assets/hero-3.jpg",
    title: "Staffing & Talent Management",
    description:
      "We are a digital consulting company that believes in technology-enabled transformations to create changes that matter. Our expertise helps our clients find, recruit, and place specialized talents, ensuring that they succeed in their journey today and in the future.",
    linkText: "Learn About Our Talent Expert",
    link: "#",
  },
  {
    id: 3,
    img: "/assets/hero-3.jpg",
    title: "Business Strategy & Consulting",
    description:
      "We guide businesses with strategic insights and actionable solutions, helping them stay ahead in the market and achieve sustainable growth.",
    linkText: "Explore Our Consulting Services",
    link: "#",
  },
];

// Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" },
};

const WhatWeDo = () => {
  return (
    <section id="whatWeDo" className="w-full overflow-hidden">
      {/* Intro */}
      <motion.div
        className="md:w-[60%] flex flex-col gap-6 mb-12 ml-4 md:ml-2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-gray-500 uppercase tracking-wide">What we do</h3>
        <h1 className="text-xl md:text-5xl font-semibold">
          Your platform for success.
        </h1>
        <p className="text-lg md:text-xl leading-7 text-gray-700">
          Being one of the USA’s top business consulting services, we support
          businesses by solving complex challenges and creating new
          opportunities. We are a specialist digital consulting firm driving
          the change to provide our clients across the globe with a platform
          for success.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 py-10 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white rounded-xl overflow-hidden cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-[50vh] object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-gray-600 text-sm md:text-base">
                {service.description}
              </p>
              <a
                href={service.link}
                className="mt-auto text-primary font-medium hover:underline"
              >
                {service.linkText}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhatWeDo;
