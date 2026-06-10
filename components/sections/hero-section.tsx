"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Mail } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false })
  const controls = useAnimation()

  const roles = [
    'Software Engineer',
    'AI Engineer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Cloud Developer',
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentText = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText !== currentText) {
        setDisplayText(currentText.slice(0, displayText.length + 1))
      } else if (isDeleting && displayText !== '') {
        setDisplayText(currentText.slice(0, displayText.length - 1))
      } else if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1200)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }
    }, isDeleting ? 60 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  // Animate on scroll
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  if (!mounted) return null

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12 bg-background" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-pulse" />
      
      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={
              {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }
            }
          />
        ))}
      </div>

      {/* New floating shapes - circles and hexagons instead of squares */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle */}
        <motion.div 
          className="absolute top-20 left-10 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Medium hexagon shape */}
        <motion.div
          className="absolute top-32 right-20 w-20 h-24 lg:w-24 lg:h-28"
          animate={{
            y: [0, 25, 0],
            rotate: [0, 15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon 
              points="50 0, 93.3 28.75, 93.3 86.25, 50 115, 6.7 86.25, 6.7 28.75" 
              fill="currentColor" 
              className="text-accent/15"
            />
          </svg>
        </motion.div>
        
        {/* Small circle with gradient */}
        <motion.div
          className="absolute bottom-32 left-20 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-tr from-accent/20 to-accent/5 rounded-full"
          animate={{
            y: [0, -30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Medium ring/donut shape */}
        <motion.div
          className="absolute bottom-20 right-10 w-28 h-28 lg:w-36 lg:h-36 rounded-full border-8 border-primary/10"
          style={{
            background: 'radial-gradient(circle, transparent 40%, rgba(var(--primary-rgb, 0, 0, 0), 0.05) 40%)',
          }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
        />
        
        {/* Small hexagon */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-14 h-16 lg:w-16 lg:h-18"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon 
              points="50 0, 93.3 28.75, 93.3 86.25, 50 115, 6.7 86.25, 6.7 28.75" 
              fill="currentColor" 
              className="text-muted/20"
            />
          </svg>
        </motion.div>

        {/* Dotted circle */}
        <motion.div
          className="absolute top-2/3 right-1/3 w-20 h-20 lg:w-24 lg:h-24"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeDasharray="5 10"
              className="text-primary/20"
            />
          </svg>
        </motion.div>
      </div>

      {/* Match navbar container and padding */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 xl:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-4 lg:space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-foreground text-lg lg:text-xl xl:text-2xl font-semibold"
              >
                Hi, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
              >
                Shivam Sonawane
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-medium min-h-[50px] flex items-center"
              >
                <span className="text-foreground">{displayText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-primary ml-1"
                >
                  |
                </motion.span>
              </motion.div>
            </div>

            {/* High-signal hero copy (broad, recruiter-friendly) */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="space-y-3 max-w-2xl lg:max-w-3xl"
>
  {/* One-line identity (education + grad) */}
  <div className="flex flex-wrap items-center gap-2 text-sm lg:text-base">
    <span className="px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground font-medium">
      MS CS @ ASU • GPA 3.9
    </span>
    <span className="px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground font-medium">
      MS CS Graduate, May 2026
    </span>
    <span className="px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground font-medium">
      SW Engineer Intern @ Cequence AI
    </span>
    <span className="px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground font-medium">
      Open to Full-Time roles
    </span>
  </div>

  {/* 3 punchy lines (general SWE vibe) */}
  <div className="text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed">
    <p>
  MS Computer Science graduate from{" "}
  <span className="text-foreground font-semibold">Arizona State University</span>{" "}
  (GPA 3.9), currently at{" "}
  <span className="text-foreground font-semibold">Cequence AI</span>{" "}
  building agentic AI systems for SRE using Claude Agent SDK and MCP servers.
  Open to{" "}
  <span className="text-foreground font-semibold">full-time Software Engineering</span>{" "}
  and{" "}
  <span className="text-foreground font-semibold">AI Engineering</span>{" "}
  roles.
</p>


  </div>

  {/* Quick chips (broad skills) */}
  <div className="flex flex-wrap gap-2 pt-1">
    {["Full-Stack", "Backend APIs", "Cloud", "AI/ML", "Real-time Systems"].map((t) => (
      <span
        key={t}
        className="text-xs lg:text-sm px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted transition"
      >
        {t}
      </span>
    ))}
  </div>
</motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 lg:gap-5"
            >
              {/* LinkedIn */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover:bg-primary/20 hover:text-foreground hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm h-11 lg:h-12 px-5 lg:px-6 text-sm lg:text-base" 
                  asChild
                >
                  <a href="https://linkedin.com/in/shivam-sonawane" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-300 hover:scale-110" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </Button>
              </motion.div>

              {/* GitHub */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover:bg-primary/20 hover:text-foreground hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm h-11 lg:h-12 px-5 lg:px-6 text-sm lg:text-base" 
                  asChild
                >
                  <a href="https://github.com/ShivamGS" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-300 hover:rotate-12" />
                    <span className="font-medium">GitHub</span>
                  </a>
                </Button>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover:bg-primary/20 hover:text-foreground hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm h-11 lg:h-12 px-5 lg:px-6 text-sm lg:text-base" 
                  asChild
                >
                  <a href="mailto:sonawaneshivam01@gmail.com">
                    <Mail className="mr-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-300 hover:scale-110" />
                    <span className="font-medium">Email</span>
                  </a>
                </Button>
              </motion.div>

              {/* Resume */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline"
                  size="lg" 
                  className="hover:bg-primary/20 hover:text-foreground hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm h-11 lg:h-12 px-5 lg:px-6 text-sm lg:text-base" 
                  asChild
                >
                  <a href="/Shivam_Sonawane_Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-300 hover:animate-bounce" />
                    <span className="font-medium">Resume</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-border"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">3.9</div>
                <div className="text-sm lg:text-base text-muted-foreground mt-1">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">10+</div>
                <div className="text-sm lg:text-base text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">2+</div>
                <div className="text-sm lg:text-base text-muted-foreground mt-1">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Square Portrait (Smaller) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Square portrait container - smaller size */}
              <motion.div 
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-120 rounded-2xl overflow-hidden border-4 border-border/50 bg-gradient-to-br from-muted/20 to-muted/5 backdrop-blur-sm"
                whileHover={{
                  borderColor: "rgba(var(--primary), 0.5)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/shivam-portrait.png"
                  alt="Shivam Sonawane"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </motion.div>

              {/* Floating tech icons around the portrait */}
              <motion.div 
                className="absolute -top-4 -right-4 w-14 h-14 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-primary/30"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <div className="w-7 h-7 bg-primary/30 rounded-lg" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-accent/30"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{ scale: 1.2, rotate: -20 }}
              >
                <div className="w-7 h-7 bg-accent/30 rounded-lg" />
              </motion.div>

              {/* Small floating dots */}
              <motion.div
                className="absolute top-1/4 -right-6 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 -left-6 w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full"
                animate={{
                  y: [20, -20, 20],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}