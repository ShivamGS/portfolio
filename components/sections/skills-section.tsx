"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Database, Code2, Brain, Server, Layers, Sparkles } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
    color: "text-purple-500",
    bgColor: "from-purple-500/10 to-purple-500/5",
    borderColor: "border-purple-500/20",
  },
  {
    title: "Frontend Development",
    icon: Layers,
    skills: ["React", "Next.js", "TailwindCSS", "HTML5", "CSS3", "React Router"],
    color: "text-blue-500",
    bgColor: "from-blue-500/10 to-blue-500/5",
    borderColor: "border-blue-500/20",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express", "Spring Boot", "Flask", "REST APIs", "GraphQL", "WebSockets"],
    color: "text-green-500",
    bgColor: "from-green-500/10 to-green-500/5",
    borderColor: "border-green-500/20",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "DynamoDB", "MySQL", "Database Optimization"],
    color: "text-orange-500",
    bgColor: "from-orange-500/10 to-orange-500/5",
    borderColor: "border-orange-500/20",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS Lambda", "AWS S3", "API Gateway", "AWS CDK", "GCP", "Git", "Docker"],
    color: "text-cyan-500",
    bgColor: "from-cyan-500/10 to-cyan-500/5",
    borderColor: "border-cyan-500/20",
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["Claude Agent SDK", "MCP Servers", "Agentic AI", "LangChain", "OpenAI API", "FAISS", "XGBoost", "RoBERTa", "CNN"],
    color: "text-pink-500",
    bgColor: "from-pink-500/10 to-pink-500/5",
    borderColor: "border-pink-500/20",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-24 xl:py-28 bg-muted/20 relative overflow-hidden">
      {/* New background shapes - circles and hexagons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle */}
        <motion.div 
          className="absolute top-[8%] right-[10%] w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-br from-primary/10 to-primary/4 rounded-full"
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
        
        {/* Medium hexagon */}
        <motion.div
          className="absolute top-[50%] left-[7%] w-24 h-28 lg:w-32 lg:h-36"
          animate={{
            y: [0, 22, 0],
            rotate: [0, 18, 0],
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
              className="text-accent/12"
            />
          </svg>
        </motion.div>
        
        {/* Small circle */}
        <motion.div
          className="absolute bottom-[20%] right-[18%] w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-tr from-accent/16 to-accent/6 rounded-full"
          animate={{
            y: [0, -25, 0],
            scale: [1, 0.85, 1],
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
          className="absolute top-[68%] left-[82%] w-24 h-24 lg:w-32 lg:h-32"
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
              className="text-primary/14"
            />
          </svg>
        </motion.div>

        {/* Small hexagon */}
        <motion.div
          className="absolute bottom-[15%] left-[25%] w-16 h-18 lg:w-20 lg:h-24"
          animate={{
            y: [0, -18, 0],
            rotate: [0, -28, 0],
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
              className="text-muted/18"
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6 cursor-default"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto cursor-default"
            whileHover={{
              color: "hsl(var(--foreground))",
              scale: 1.01,
              transition: { duration: 0.3 },
            }}
          >
            Technologies I use to build and ship software
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 group-hover:border-primary/30 cursor-pointer overflow-hidden relative">
                {/* Animated background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <CardHeader className="pb-4 relative z-10">
                  <motion.div 
                    className="flex items-center gap-3 mb-3" 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.3 },
                      }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.bgColor} border ${category.borderColor} group-hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
                    >
                      {/* Icon glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
                      <category.icon
                        className={`h-6 w-6 ${category.color} group-hover:scale-110 transition-transform duration-300 relative z-10`}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </CardTitle>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {category.skills.length} skills
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Skill count bar */}
                  <div className="relative h-1 bg-muted/30 rounded-full overflow-hidden">
                    <motion.div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.bgColor.replace('/10', '/60').replace('/5', '/40')} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.15 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 0.3,
                            delay: index * 0.1 + skillIndex * 0.05,
                          },
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-muted/50 hover:bg-primary/20 text-foreground hover:text-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30 relative group/badge"
                        >
                          {/* Sparkle effect on hover */}
                          <motion.div
                            className="absolute -top-1 -right-1 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          >
                            <Sparkles className="w-3 h-3 text-primary" />
                          </motion.div>
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}