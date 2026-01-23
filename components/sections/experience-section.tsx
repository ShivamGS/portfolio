"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp, Briefcase } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    title: "Software Engineering TA",
    company: "Arizona State University",
    companyUrl: "https://www.asu.edu/",
    location: "Tempe, Arizona, USA",
    period: "Aug 2025 - Present",
    // type: "Teaching Assistant",
    achievements: [
      "Conducted technical code reviews for 300+ Java/Spring Boot projects weekly, evaluating REST API design, JUnit testing coverage, MySQL schema optimization, and MVC architecture patterns.",
      "Mentored 150+ students on REST API design patterns, database normalization, and version control workflows, improving code quality scores by 30% through one-on-one technical guidance.",
      "Provided comprehensive feedback on software engineering best practices including design patterns, testing strategies, and database optimization techniques.",
      "Facilitated student learning in full-stack development, helping students understand complex concepts in backend architecture and frontend integration.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "JUnit",
      "MySQL",
      "MVC Architecture",
      "Git",
      "Code Review",
      "Database Optimization",
    ],
  },
  {
    title: "Software Engineer",
    company: "LEIFII",
    companyUrl: "https://leifii.com/",
    location: "Pune, Maharashtra, India",
    period: "July 2023 - June 2024",
    // type: "Full-time",
    achievements: [
      "Built full-stack web application for HR management using React, Node.js, Express, and MongoDB, streamlining workflows for 200+ employees and reducing manual effort by 40%.",
      "Designed responsive UI with Tailwind CSS and reusable React components using Context API, improving page load speed by 25% and ensuring consistency across 5+ modules.",
      "Integrated secure REST APIs with JWT authentication and RBAC using Express middleware, optimizing MongoDB aggregation pipelines to reduce query latency by 30%.",
      "Implemented role-based access control system enabling granular permissions management across different departments and user roles.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Context API",
      "JWT",
      "RBAC",
      "REST API",
      "Aggregation Pipelines",
    ],
  },
  {
    title: "Software Developer",
    company: "Softanic Solutions",
    location: "Pune, Maharashtra, India",
    period: "Jan 2023 - June 2023",
    // type: "Full-time",
    achievements: [
      "Developed REST APIs using Spring Boot for IT helpdesk system handling 1,000+ monthly tickets, improving support efficiency by 25% through intelligent routing and escalation workflows.",
      "Optimized MySQL database schemas and implemented indexed queries, reducing query response time by 30% and enabling real-time dashboard analytics.",
      "Designed and implemented intelligent ticket routing system with priority-based escalation workflows to optimize support team productivity.",
      "Built real-time analytics dashboards providing actionable insights into ticket resolution metrics and team performance indicators.",
    ],
    technologies: [
      "Spring Boot",
      "Java",
      "MySQL",
      "REST API",
      "Database Optimization",
      "Indexing",
      "Analytics Dashboards",
      "Workflow Automation",
    ],
  },
]

export function ExperienceSection() {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({})
  const [expandedTechnologies, setExpandedTechnologies] = useState<Record<number, boolean>>({})

  const toggleExpanded = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const toggleTechnologies = (index: number) => {
    setExpandedTechnologies((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section id="experience" className="py-20 lg:py-24 xl:py-28 bg-background relative overflow-hidden">
      {/* New background shapes - circles and hexagons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle */}
        <motion.div 
          className="absolute top-[12%] left-[6%] w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-br from-primary/9 to-primary/4 rounded-full"
          animate={{
            y: [0, -22, 0],
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Medium hexagon */}
        <motion.div
          className="absolute top-[55%] right-[8%] w-22 h-26 lg:w-28 lg:h-32"
          animate={{
            y: [0, 18, 0],
            rotate: [0, 12, 0],
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
              className="text-accent/14"
            />
          </svg>
        </motion.div>
        
        {/* Small circle */}
        <motion.div
          className="absolute bottom-[28%] left-[18%] w-18 h-18 lg:w-24 lg:h-24 bg-gradient-to-tr from-accent/18 to-accent/6 rounded-full"
          animate={{
            y: [0, -18, 0],
            scale: [1, 0.88, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Dotted circle ring */}
        <motion.div
          className="absolute top-[25%] right-[82%] w-22 h-22 lg:w-28 lg:h-28"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.08, 1],
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
              className="text-primary/16"
            />
          </svg>
        </motion.div>

        {/* Small hexagon */}
        <motion.div
          className="absolute bottom-[12%] right-[65%] w-14 h-16 lg:w-18 lg:h-22"
          animate={{
            y: [0, -12, 0],
            rotate: [0, -22, 0],
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
      </div>

      {/* Match navbar/hero padding */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Experience
          </motion.h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto">
            My journey across software engineering, teaching, and product-focused development.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line - hidden on mobile, visible on lg */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.period}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot - hidden on mobile, visible on lg */}
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 z-20">
                  <motion.div
                    className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
                    whileHover={{ scale: 1.5 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(var(--primary-rgb, 59, 130, 246), 0.4)",
                        "0 0 0 8px rgba(var(--primary-rgb, 59, 130, 246), 0)",
                        "0 0 0 0 rgba(var(--primary-rgb, 59, 130, 246), 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>

                {/* Alternating layout for desktop */}
                <div className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Card */}
                  <motion.div
                    className={index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}
                    whileHover={{ y: -6, scale: 1.01 }}
                  >
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <div className="relative z-10">
                        <CardHeader className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-3 flex-1">
                              {/* Company icon/badge */}
                              {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                                <Briefcase className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">{experience.type}</span>
                              </div> */}

                              <div>
                                <CardTitle className="text-xl lg:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                  {experience.title}
                                </CardTitle>
                                <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                                  <div className="flex items-center gap-2 group-hover:text-foreground transition-colors duration-300">
                                    <ExternalLink className="h-4 w-4 flex-shrink-0 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                                    <a
                                      href={experience.companyUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-medium hover:text-primary hover:underline transition-all duration-300"
                                    >
                                      {experience.company}
                                    </a>
                                  </div>
                                  <div className="flex items-center gap-2 group-hover:text-foreground transition-colors duration-300">
                                    <MapPin className="h-4 w-4 flex-shrink-0 group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                                    <span>{experience.location}</span>
                                  </div>
                                  <div className="flex items-center gap-2 group-hover:text-foreground transition-colors duration-300">
                                    <Calendar className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-all duration-300" />
                                    <span>{experience.period}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-5">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                              <div className="w-1 h-4 bg-primary rounded-full" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {experience.achievements
                                .slice(0, expandedCards[index] ? experience.achievements.length : 2)
                                .map((achievement, achievementIndex) => (
                                  <motion.li
                                    key={achievementIndex}
                                    className="flex items-start gap-3 hover:bg-primary/5 rounded-lg p-2 -m-2 transition-all duration-300 group/item cursor-default"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                    whileHover={{ x: 4 }}
                                  >
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 group-hover/item:bg-accent transition-all duration-300" />
                                    <p className="text-muted-foreground leading-relaxed text-sm group-hover/item:text-foreground transition-colors duration-300">
                                      {achievement}
                                    </p>
                                  </motion.li>
                                ))}
                              {experience.achievements.length > 2 && (
                                <motion.li className="flex items-center gap-2 mt-3" whileHover={{ x: 2 }}>
                                  <button
                                    onClick={() => toggleExpanded(index)}
                                    className="flex items-center gap-2 text-primary hover:text-primary/80 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-all duration-300 text-sm font-medium group/btn border border-transparent hover:border-primary/30"
                                  >
                                    {expandedCards[index] ? (
                                      <>
                                        <ChevronUp className="h-4 w-4 group-hover/btn:scale-125 transition-all duration-300" />
                                        Show Less
                                      </>
                                    ) : (
                                      <>
                                        <ChevronDown className="h-4 w-4 group-hover/btn:scale-125 transition-all duration-300" />
                                        +{experience.achievements.length - 2} more
                                      </>
                                    )}
                                  </button>
                                </motion.li>
                              )}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                              <div className="w-1 h-4 bg-accent rounded-full" />
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies
                                .slice(0, expandedTechnologies[index] ? experience.technologies.length : 6)
                                .map((tech, techIndex) => (
                                  <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: techIndex * 0.04 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                  >
                                    <Badge
                                      variant="secondary"
                                      className="text-xs hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
                                    >
                                      {tech}
                                    </Badge>
                                  </motion.div>
                                ))}
                              {experience.technologies.length > 6 && (
                                <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                                  <Badge
                                    variant="outline"
                                    className="text-xs hover:bg-accent/20 hover:text-accent hover:border-accent/50 transition-all duration-300 cursor-pointer select-none"
                                    onClick={() => toggleTechnologies(index)}
                                  >
                                    {expandedTechnologies[index] ? (
                                      <>
                                        <ChevronUp className="h-3 w-3 mr-1" />
                                        Less
                                      </>
                                    ) : (
                                      `+${experience.technologies.length - 6}`
                                    )}
                                  </Badge>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}