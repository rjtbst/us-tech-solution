"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ui/scroll-reveal";
import AnimatedText from "@/components/ui/animated-text";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@ustechsolution.com",
      link: "mailto:info@ustechsolution.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Research Triangle Park, NC",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-10 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Get In <span className="text-primary">Touch</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
              Ready to collaborate on your next project? Let's discuss how our
              expertise can advance your research and development goals.
            </p>
          </AnimatedText>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal direction="left" delay={0.6}>
            <Card className="p-8 bg-gray-50 shadow-xl rounded-2xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "subject"].map((field, idx) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <Input
                      type={field === "email" ? "email" : "text"}
                      placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                      value={formData[field]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      className="bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300 min-h-32"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-brand text-black font-medium rounded-lg shadow-md flex items-center justify-center px-6 py-3 text-lg transition-all duration-200 ${
                      loading ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                    whileHover={{
                      scale: loading ? 1 : 1.03,
                      boxShadow: loading ? "none" : "0 8px 20px rgba(0,0,0,0.25)",
                    }}
                    whileTap={{
                      scale: loading ? 1 : 0.97,
                      boxShadow: loading ? "none" : "0 4px 6px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                  </motion.button>
                </motion.div>
              </form>
            </Card>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right" delay={0.6}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Contact Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We're here to help you advance your research and development
                  initiatives. Reach out to discuss your specific requirements
                  and learn how we can collaborate on innovative solutions.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    // href={info.link}
                    className="flex items-center p-4 bg-gray-50 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 "
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-800">{info.title}</h4>
                      <p className="text-gray-700">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Office Hours */}
              <motion.div
                className="mt-12 p-6 bg-gray-50 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <h4 className="font-semibold mb-2 text-gray-800">Office Hours</h4>
                <p className="text-gray-700 text-sm">
                  Monday - Friday: 8:00 AM - 6:00 PM EST
                  <br />
                  Saturday: 9:00 AM - 2:00 PM EST
                  <br />
                  Sunday: Closed
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
