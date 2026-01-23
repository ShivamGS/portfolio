"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Target,
  ExternalLink,
  BookOpen,
  Award,
  Trophy,
  Code,
  TrendingUp,
  Sparkles,
  FileText,
  Briefcase,
} from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Code, value: "10+", label: "Projects Built", color: "text-purple-500", bgColor: "from-purple-500/20 to-purple-600/20" },
    { icon: Trophy, value: "3x", label: "Hackathon Winner", color: "text-yellow-500", bgColor: "from-yellow-500/20 to-yellow-600/20" },
    { icon: TrendingUp, value: "3.9", label: "GPA", color: "text-green-500", bgColor: "from-green-500/20 to-green-600/20" },
    { icon: FileText, value: "2+", label: "Publications", color: "text-blue-500", bgColor: "from-blue-500/20 to-blue-600/20" },
  ]

  const achievements = [
    {
      title: "TIAA x ASU Spark Challenge 2025",
      badge: "Winner",
      description: "Built serverless fintech platform with AI chatbot",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      link: null,
    },
    {
      title: "Pune Smart Health Hackathon",
      badge: "Winner",
      description: "Developed healthcare solution with ML models",
      icon: Award,
      color: "text-blue-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      link: null,
    },
    {
      title: "TIAA Intercollege 2023",
      badge: "Winner",
      description: "Competed against top engineering colleges",
      icon: Trophy,
      color: "text-purple-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      link: null,
    },
    {
      title: "Anime Face Generation using DC-GANs",
      badge: "Published",
      description: "AIP Conference Proceedings • December 2023",
      icon: BookOpen,
      color: "text-indigo-500",
      bgColor: "from-indigo-500/10 to-blue-500/10",
      link: "https://pubs.aip.org/aip/acp/article-abstract/2981/1/020028/2929156/Anime-face-generation-using-DC-GANs?redirectedFrom=fulltext",
    },
    {
      title: "Indian Sign Language Interpreter",
      badge: "Published",
      description: "IJARIIT Journal • Research Publication",
      icon: BookOpen,
      color: "text-teal-500",
      bgColor: "from-teal-500/10 to-green-500/10",
      link: "https://www.ijariit.com/manuscript/indian-sign-language-interpreter/",
    },
  ]

  // New: Looking For tiles (styled like your old Current Focus)
  const lookingForTiles = [
    {
      icon: Briefcase,
      title: "Opportunities",
      items: ["Full-time", "Co-op", "Internship"],
      accent: "text-green-500",
      border: "border-green-500/20",
      bg: "bg-green-500/10",
    },
    {
      icon: Target,
      title: "Roles",
      items: ["Software Engineer", "Frontend", "Backend", "Full-Stack"],
      accent: "text-blue-500",
      border: "border-blue-500/20",
      bg: "bg-blue-500/10",
    },
    {
      icon: FileText,
      title: "Visa Status",
      items: ["F-1", "OPT eligible (up to 3 years)", "Can work during OPT"],
      accent: "text-purple-500",
      border: "border-purple-500/20",
      bg: "bg-purple-500/10",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-24 xl:py-28 bg-background relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
          className="absolute top-[10%] left-[5%] w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-br from-primary/9 to-primary/4 rounded-full"
          animate={{ y: [0, -24, 0], scale: [1, 1.14, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[48%] right-[9%] w-22 h-26 lg:w-30 lg:h-34"
          animate={{ y: [0, 20, 0], rotate: [0, 16, 0] }}
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
          className="absolute bottom-[22%] left-[18%] w-18 h-18 lg:w-26 lg:h-26 bg-gradient-to-tr from-accent/17 to-accent/7 rounded-full"
          animate={{ y: [0, -22, 0], scale: [1, 0.86, 1] }}
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
            <span className="text-sm font-medium text-primary">Get to know me</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            whileHover={{ scale: 1.02 }}
          >
            About Me
          </motion.h2>

          <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto">
            From childhood curiosity to building scalable systems that power the future
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 overflow-hidden group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="p-6 text-center relative z-10">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Story - Spans 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As a kid, I was fascinated by how technology seemed like magic, the idea that someone could create something from anywhere in the world and impact millions of lives felt revolutionary. That curiosity grew into a passion, driving me to pursue Computer Science not just as a career, but as a way to turn ideas into reality.
                  </p>

                  <p>
                    I began my journey at{" "}
                    <span className="text-foreground font-medium">Savitribai Phule Pune University</span> with a Bachelor's in Information Technology, graduating with honors (GPA 3.88/4.0). There, I discovered my love for building systems that scale, from REST APIs to full-stack applications. I published research on deep learning, won hackathons, and realized that the intersection of creativity and engineering was where I belonged.
                  </p>

                  <p>
                    Today, I'm pursuing my Master's in Computer Science at{" "}
                    <span className="text-foreground font-medium">Arizona State University</span> (GPA 3.9/4.0), diving deeper into cloud computing, serverless architecture, and AI-powered applications. Along the way, I've won{" "}
                    <span className="text-foreground font-medium">3 hackathons</span> including the TIAA x ASU Spark Challenge 2025, built production systems serving hundreds of users, and published research that bridges theory with real-world impact. I thrive at building systems that don't just work, they scale beautifully and solve meaningful problems.
                  </p>
                </div>

              </CardContent>
            </Card>
          </motion.div>

          {/* Right Sidebar - Looking For (styled like old Current Focus) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Looking For</h3>
                </div>

                <div className="space-y-3">
                  {lookingForTiles.map((tile, index) => (
                    <motion.div
                      key={tile.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300 border border-border/50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-9 h-9 rounded-xl ${tile.bg} ${tile.border} border flex items-center justify-center`}>
                          <tile.icon className={`w-4 h-4 ${tile.accent}`} />
                        </div>
                        <h4 className="font-semibold text-sm text-foreground">{tile.title}</h4>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {tile.items.map((item) => (
                          <Badge key={item} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Achievements & Publications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Achievements & Recognition</h3>
            <p className="text-muted-foreground">Hackathon wins, publications, and competitive achievements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 overflow-hidden group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                      <Badge
                        className={`${
                          achievement.badge === "Winner"
                            ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30 text-yellow-600"
                            : "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-blue-600"
                        }`}
                      >
                        {achievement.badge}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 leading-tight">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>

                    {achievement.link && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-white hover:border-primary mt-2"
                        onClick={() => window.open(achievement.link!, "_blank")}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Publication
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
