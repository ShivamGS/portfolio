"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Trophy, Filter, ChevronDown, ChevronUp } from "lucide-react"

type Category = "All" | "Full-Stack" | "AI/ML" | "Backend" | "Frontend" | "Cloud"

type Project = {
  title: string
  subtitle: string
  description: string
  achievements: string[]
  technologies: string[]
  githubUrl: string | null
  liveUrl: string | null
  award: string | null
  categories: Exclude<Category, "All">[]
}

// Order required: 1,2,3,4,8,7,5,6
const projects: Project[] = [
  // 1) Loan Platform
  {
    title: "Student Loan Retirement Match Platform",
    subtitle: "Serverless Fintech Platform with AI Chatbot",
    description:
      "Architected serverless fintech platform using Python, AWS CDK, Lambda, and DynamoDB, enabling ASU employees to calculate SECURE 2.0 retirement benefits through event-driven processing and real-time dashboards.",
    achievements: [
      "Winner - TIAA x ASU Spark Challenge 2025",
      "Engineered automated eligibility pipeline using AWS Lambda and DynamoDB streams",
      "Reduced manual computation time by 35%",
      "AI-powered chatbot with <2s response time using LangChain and Claude API",
    ],
    technologies: ["Python", "AWS CDK", "Lambda", "DynamoDB", "LangChain", "Claude API", "WebSockets", "React"],
    githubUrl: "https://github.com/ShivamGS/loan-platform",
    liveUrl: null,
    award: "Hackathon Winner",
    categories: ["Full-Stack", "Cloud"],
  },

  // 2) LinkedIn Assistant
  {
    title: "LinkedIn Assistant",
    subtitle: "Explainable Job-Search Copilot (Rasch/Guttman Scoring)",
    description:
      "Built an explainable job-search copilot that parses a resume, searches a curated Excel dataset (~31K roles), and scores each requirement using Rasch/Guttman math with transparent per-item probabilities in a modern multi-step UI.",
    achievements: [
      "Parsed PDF/DOC/DOCX/TXT resumes and estimated candidate ability (θ)",
      "Dataset search with keyword + fuzzy matching across ~31K roles",
      "Rasch/Guttman scoring exposes per-requirement match probabilities for explainability",
      "Four-step workflow UI (resume → dataset → scoring → chat) with intent-aware guidance",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "FastAPI", "Python", "Pandas", "Scikit-learn", "RapidFuzz"],
    githubUrl: "https://github.com/SayantikaPaul-12/CSE573-LinkedIn-Assistant",
    liveUrl: null,
    award: null,
    categories: ["Full-Stack", "AI/ML", "Backend"],
  },

  // 3) Edge Face Recognition
  {
    title: "Edge-Based Face Recognition Pipeline",
    subtitle: "AWS IoT Greengrass + Lambda + SQS (Edge → Cloud Inference)",
    description:
      "Designed a hybrid edge-cloud face recognition pipeline where Greengrass runs MTCNN detection at the edge and cloud Lambda performs FaceNet recognition via SQS request/response queues for low-latency, event-driven inference.",
    achievements: [
      "Edge detection with MTCNN deployed as a Greengrass component",
      "Event-driven orchestration via SQS request/response queues",
      "Cloud inference using Lambda + FaceNet; results returned asynchronously",
      "Security design with IAM least-privilege + TLS device authentication",
    ],
    technologies: ["AWS IoT", "Greengrass", "Lambda", "SQS", "MQTT", "MTCNN", "FaceNet", "Python"],
    githubUrl: "https://github.com/ShivamGS/Edge-Face-Recognition-Pipeline",
    liveUrl: null,
    award: null,
    categories: ["Cloud", "AI/ML", "Backend"],
  },

  // 4) Collab Editor
  {
    title: "Collaborative Document Editor",
    subtitle: "Real-time Multi-User Document Collaboration",
    description:
      "Built real-time collaborative editor using React, Node.js with JavaScript with Yjs CRDTs and WebSockets supporting 100+ concurrent users with conflict-free synchronization.",
    achievements: [
      "Supports 100+ concurrent users with conflict-free synchronization",
      "Sub-100ms sync latency across distributed sessions",
      "JWT authentication and role-based access control",
      "Live presence features including autosave and typing indicators",
    ],
    technologies: ["React", "Node.js", "JavaScript", "Yjs CRDTs", "WebSockets", "JWT", "Real-time Collaboration"],
    githubUrl: "https://github.com/ShivamGS/collab-editor",
    liveUrl: null,
    award: null,
    categories: ["Full-Stack", "Backend"],
  },

  // 8) Leifii Website
  {
    title: "Leifii Website",
    subtitle: "Animation-Heavy Creative Site (React + Framer Motion + GSAP)",
    description:
      "Developed a highly creative, animation-forward marketing website from scratch using React, Framer Motion, and GSAP, featuring 50+ unique interactions including mouse followers, scroll animations, and hover effects.",
    achievements: [
      "Implemented 50+ unique animations and interactive motion effects",
      "Shipped an animation-heavy, modern UI with reusable motion patterns",
      "Deployed on Vercel for reliability and performance",
      "Built consistent interactions across pages and sections",
    ],
    technologies: ["React", "Framer Motion", "GSAP", "Tailwind CSS", "Vercel"],
    githubUrl: null,
    liveUrl: "https://leifii.com",
    award: null,
    categories: ["Frontend"],
  },

  // 7) Fake Detection
  {
    title: "Fake Content Detection System",
    subtitle: "AI-Powered Content Verification Platform",
    description:
      "Created full-stack AI platform detecting fake text/images using Flask APIs, React dashboard, and hybrid ML models (XGBoost, RoBERTa, CNN) achieving 93% accuracy.",
    achievements: [
      "93% accuracy using hybrid ML models",
      "Real-time credibility scoring with fact-checking APIs",
      "Feedback-based model retraining for continuous improvement",
      "Multilingual dataset support for global content verification",
    ],
    technologies: ["Flask", "React", "XGBoost", "RoBERTa", "CNN", "Python", "Machine Learning", "AI"],
    githubUrl: "https://github.com/ShivamGS/fake-detection",
    liveUrl: null,
    award: null,
    categories: ["AI/ML", "Full-Stack"],
  },

  // 5) HR System
  {
    title: "HR Management System",
    subtitle: "Full-Stack Employee Workflow Platform",
    description:
      "Built full-stack web application for HR management using React, Node.js, Express, and MongoDB at LEIFII, streamlining workflows for 200+ employees and reducing manual effort by 40%.",
    achievements: [
      "Streamlined workflows for 200+ employees",
      "Reduced manual effort by 40%",
      "Improved page load speed by 25%",
      "Optimized MongoDB queries reducing latency by 30%",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Context API", "JWT", "RBAC"],
    githubUrl: null,
    liveUrl: null,
    award: null,
    categories: ["Full-Stack", "Frontend"],
  },

  // 6) Vaccine Provenance
  {
    title: "Vaccine Provenance",
    subtitle: "ERC-721 Supply Chain + IPFS Document Anchoring",
    description:
      "Built a vaccine supply chain system where 1 token = 1 vaccine lot (ERC-721). Custody follows token ownership, lifecycle transitions are enforced by a state machine, temperature events flag breaches, and documents are pinned to IPFS with on-chain CID anchoring.",
    achievements: [
      "Lifecycle state machine enforced on-chain for custody + status transitions",
      "Temperature events automatically mark first out-of-range breach",
      "Documents stored on IPFS; latest CID anchored on-chain per document type",
      "Regulator recalls supported with reason CID independent of lifecycle",
    ],
    technologies: ["Solidity", "Hardhat", "OpenZeppelin", "ethers.js", "IPFS", "Web3.storage"],
    githubUrl: "https://github.com/rstone-11/CSE540_P1",
    liveUrl: null,
    award: null,
    categories: ["Backend", "Cloud"],
  },
]

const categories: Category[] = ["All", "Full-Stack", "AI/ML", "Backend", "Frontend", "Cloud"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")
  const [expanded, setExpanded] = useState(false)

  // Collapse back to top-4 when filter changes (nice UX)
  useEffect(() => {
    setExpanded(false)
  }, [selectedCategory])

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(selectedCategory as Exclude<Category, "All">))

  const visibleCount = expanded ? 8 : 4
  const visibleProjects = filteredProjects.slice(0, visibleCount)

  return (
    <section id="projects" className="py-20 lg:py-24 xl:py-28 bg-muted/20 relative overflow-hidden">
      {/* Background shapes (unchanged) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[10%] right-[8%] w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full"
          animate={{ y: [0, -25, 0], scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[45%] left-[5%] w-24 h-28 lg:w-32 lg:h-36"
          animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon
              points="50 0, 93.3 28.75, 93.3 86.25, 50 115, 6.7 86.25, 6.7 28.75"
              fill="currentColor"
              className="text-accent/12"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-[25%] right-[15%] w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-tr from-accent/15 to-accent/5 rounded-full"
          animate={{ y: [0, -20, 0], scale: [1, 0.85, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div
          className="absolute top-[70%] left-[85%] w-24 h-24 lg:w-32 lg:h-32"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
              className="text-primary/15"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-[10%] left-[20%] w-16 h-18 lg:w-20 lg:h-24"
          animate={{ y: [0, -15, 0], rotate: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon
              points="50 0, 93.3 28.75, 93.3 86.25, 50 115, 6.7 86.25, 6.7 28.75"
              fill="currentColor"
              className="text-muted/18"
            />
          </svg>
        </motion.div>
      </div>

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
            Projects
          </motion.h2>

          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto mb-8">
            A curated set of my strongest work across full-stack, cloud, and AI.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span>Filter:</span>
            </div>

            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-accent text-background shadow-lg shadow-primary/30"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid (top 4, expandable to 8) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${expanded}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="relative z-10">
                    <CardHeader className="space-y-4 pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-wrap gap-2">
                            {project.categories.map((cat) => (
                              <Badge
                                key={cat}
                                variant="outline"
                                className="text-xs border-primary/30 text-primary bg-primary/10"
                              >
                                {cat}
                              </Badge>
                            ))}
                          </div>

                          <CardTitle className="text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                            {project.title}
                          </CardTitle>

                          <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                            {project.subtitle}
                          </p>
                        </div>

                        {project.award && (
                          <motion.div
                            className="flex-shrink-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 px-3 py-2 rounded-xl"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Trophy className="h-5 w-5 text-yellow-500" />
                          </motion.div>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="hover:bg-primary/10 hover:text-primary hover:border-primary hover:scale-105 transition-all duration-300"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}

                        {project.liveUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="hover:bg-accent/10 hover:text-accent hover:border-accent hover:scale-105 transition-all duration-300"
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                          <div className="w-1 h-4 bg-primary rounded-full" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              className="flex items-start gap-3 hover:bg-primary/5 rounded-lg p-2 -m-2 transition-all duration-300 group/item cursor-default"
                              whileHover={{ x: 4 }}
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 group-hover/item:bg-accent transition-all duration-300" />
                              <p className="text-muted-foreground text-sm leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                                {achievement}
                              </p>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                          <div className="w-1 h-4 bg-accent rounded-full" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.03 }}
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
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Expand / Collapse control */}
        {filteredProjects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <Button
              variant="outline"
              onClick={() => setExpanded((v) => !v)}
              className="px-6 py-5 rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary transition-all"
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  Show More
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
