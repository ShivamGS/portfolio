"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Sparkles } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [isHovering, setIsHovering] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 150

      if (scrollPosition < 200) {
        setActiveSection("")
        return
      }

      let currentSection = ""
      let maxVisibility = 0

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          const sectionTop = offsetTop - 150
          const sectionBottom = offsetTop + offsetHeight - 150

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const visibility = Math.min(scrollPosition - sectionTop, sectionBottom - scrollPosition)
            if (visibility > maxVisibility) {
              maxVisibility = visibility
              currentSection = section
            }
          }
        }
      }

      if (!currentSection) {
        let minDistance = Infinity
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const distance = Math.abs(element.offsetTop - scrollPosition)
            if (distance < minDistance) {
              minDistance = distance
              currentSection = section
            }
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const scrollToSection = (href: string) => {
    const targetSection = href.slice(1)
    const element = document.querySelector(href)

    if (element) {
      setActiveSection(targetSection)
      const offset = 120
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      setTimeout(() => {
        setActiveSection(targetSection)
      }, 100)
    }
    setIsOpen(false)
  }

  const scrollToTop = () => {
    setActiveSection("")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = "/Shivam_Sonawane_Resume.pdf" // or external URL
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Shivam_Sonawane_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl shadow-2xl shadow-primary/10 border-b border-primary/20"
          : "bg-background/40 backdrop-blur-xl border-b border-border/30"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Enhanced Logo Section */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 transition-all duration-300 relative"
            >
              {/* Logo with glow effect */}
              <motion.div 
                className="relative w-12 h-12 lg:w-14 lg:h-14"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Image
                  src="/images/sslogo.png"
                  alt="Shivam Sonawane Logo"
                  fill
                  className="object-contain transition-all duration-300 group-hover:scale-105 relative z-10"
                  priority
                />
              </motion.div>

              {/* Enhanced Name with gradient */}
              <div className="hidden sm:flex flex-col">
                <motion.span 
                  className="text-lg lg:text-xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-none tracking-tight group-hover:from-primary group-hover:via-accent group-hover:to-primary transition-all duration-500"
                  style={{ backgroundSize: "200% auto" }}
                >
                  Shivam Sonawane
                </motion.span>
                <span className="text-xs lg:text-sm text-muted-foreground/80 group-hover:text-primary/70 transition-colors duration-300 mt-0.5">
                  Software Engineer
                </span>
              </div>
            </button>
          </motion.div>

          {/* Desktop Navigation - Enhanced Glassmorphism */}
          <div className="hidden md:flex items-center gap-4">
            {/* Navigation Pills */}
            <motion.div 
              className="flex items-center gap-1 px-2 py-2 rounded-full bg-muted/30 backdrop-blur-xl border border-border/50 shadow-lg shadow-primary/5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  onMouseEnter={() => setIsHovering(item.href)}
                  onMouseLeave={() => setIsHovering(null)}
                  className={`relative px-4 lg:px-5 py-2.5 rounded-full text-sm lg:text-base font-medium transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active state background */}
                  <AnimatePresence>
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-lg shadow-primary/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ backgroundSize: "200% auto" }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Hover effect */}
                  {isHovering === item.href && activeSection !== item.href.slice(1) && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}

                  <span className="relative z-10">{item.name}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* CTA Button - Download Resume */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleDownloadResume}
                className="relative group overflow-hidden bg-gradient-to-r from-primary to-accent text-background font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Sparkle effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{
                    background: [
                      "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Resume
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button - Enhanced */}
          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="relative group hover:bg-primary/10 border border-primary/30 hover:border-primary/50 transition-all duration-300 rounded-full p-2.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6 relative z-10 text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6 relative z-10 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`relative block w-full text-left px-5 py-3.5 rounded-xl font-medium transition-all duration-300 group overflow-hidden ${
                    activeSection === item.href.slice(1)
                      ? "text-background shadow-lg shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? "bg-gradient-to-r from-primary to-accent opacity-100"
                        : "bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-300" />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    <motion.div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeSection === item.href.slice(1)
                          ? "bg-background scale-100"
                          : "bg-primary scale-0 group-hover:scale-100"
                      }`}
                      animate={activeSection === item.href.slice(1) ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                    {item.name}
                  </span>
                </motion.button>
              ))}

              {/* Mobile Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <Button
                  onClick={handleDownloadResume}
                  className="w-full relative group overflow-hidden bg-gradient-to-r from-primary to-accent text-background font-semibold py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Resume
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}