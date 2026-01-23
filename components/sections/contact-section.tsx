"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Sparkles,
  CheckCircle2
} from "lucide-react"

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "sonawaneshivam01@gmail.com",
      href: "mailto:sonawaneshivam01@gmail.com",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (602) 813-9053",
      href: "tel:+16028139053",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-500",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shivam-sonawane",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ShivamGS",
      color: "from-gray-700 to-gray-900",
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-24 xl:py-28 bg-muted/20 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div 
          className="absolute top-[12%] right-[12%] w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full"
          animate={{ y: [0, -28, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-[52%] left-[8%] w-24 h-28 lg:w-32 lg:h-36"
          animate={{ y: [0, 24, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon 
              points="50 0, 93.3 28.75, 93.3 86.25, 50 115, 6.7 86.25, 6.7 28.75" 
              fill="currentColor" 
              className="text-accent/13"
            />
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute bottom-[18%] right-[22%] w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-tr from-accent/18 to-accent/8 rounded-full"
          animate={{ y: [0, -26, 0], scale: [1, 0.84, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Available for opportunities</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Let's Work Together
          </motion.h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
            Open to discussing new opportunities, creative ideas, and potential collaborations
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16"
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <a key={method.title} href={method.href} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:shadow-xl hover:shadow-primary/15 transition-all duration-400 cursor-pointer overflow-hidden group">
                    <CardContent className="p-6 text-center relative z-10">
                      <motion.div
                        className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <IconComponent className={`w-7 h-7 ${method.iconColor}`} />
                      </motion.div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {method.value}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </a>
            )
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Connect on Social Media</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className={`bg-gradient-to-r ${link.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-6`}
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <IconComponent className="h-5 w-5 mr-2" />
                      {link.label}
                    </a>
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Shivam Sonawane. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Designed & Built with Next.js, React, TypeScript, and TailwindCSS
            </p>
          </div>
      </div>
    </section>
  )
}