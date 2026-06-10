"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, ExternalLink } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Arizona State University",
    schoolUrl: "https://www.asu.edu/",
    location: "Tempe, Arizona, USA",
    period: "Aug 2024 - May 2026",
    gpa: "3.9/4.0",
    highlights: [
      "Graduated May 2026 with GPA 3.9/4.0",
      "Focus areas: Full-stack systems, cloud architecture, and AI-powered applications",
      "Software Engineering TA — mentoring, code reviews, and technical guidance at scale",
    ],
    tags: ["MS CS", "GPA 3.9", "ASU", "Graduated 2026"],
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    school: "Savitribai Phule Pune University",
    schoolUrl: "https://www.unipune.ac.in/",
    location: "Pune, Maharashtra, India",
    period: "Aug 2020 - May 2024",
    gpa: "3.88/4.0",
    highlights: [
      "Built a strong foundation in software engineering, databases, and web development",
      "Graduated with honors (GPA 3.88/4.0)",
      "Early projects in ML and full-stack development that shaped my interests",
    ],
    tags: ["BE IT", "GPA 3.88", "SPPU"],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-24 xl:py-28 bg-background relative overflow-hidden">
      {/* Background shapes (match Experience/About vibe) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[12%] right-[6%] w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-br from-primary/9 to-primary/4 rounded-full"
          animate={{ y: [0, -22, 0], scale: [1, 1.12, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[55%] left-[7%] w-22 h-26 lg:w-28 lg:h-32"
          animate={{ y: [0, 18, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon
              points="50 0, 93.3 28.75, 93.3 86.25, 50 115, 6.7 86.25, 6.7 28.75"
              fill="currentColor"
              className="text-accent/14"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] right-[18%] w-18 h-18 lg:w-24 lg:h-24 bg-gradient-to-tr from-accent/18 to-accent/6 rounded-full"
          animate={{ y: [0, -18, 0], scale: [1, 0.88, 1] }}
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
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Education
          </motion.h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto">
            Academic foundation that shaped my engineering thinking
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {education.map((ed, index) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="relative z-10">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                          <GraduationCap className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">
                            {index === 0 ? "Graduate" : "Undergraduate"}
                          </span>
                        </div>

                        <CardTitle className="text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                          {ed.degree}
                        </CardTitle>

                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <ExternalLink className="h-4 w-4 flex-shrink-0 group-hover:text-primary transition-colors duration-300" />
                          <a
                            href={ed.schoolUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:text-primary hover:underline transition-all duration-300"
                          >
                            {ed.school}
                          </a>

                          <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                            GPA: {ed.gpa}
                          </Badge>
                        </div>

                        <div className="flex flex-col gap-1 text-muted-foreground text-sm pt-1">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span>{ed.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>{ed.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                        <div className="w-1 h-4 bg-primary rounded-full" />
                        Highlights
                      </h4>

                      <ul className="space-y-2">
                        {ed.highlights.map((h, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 hover:bg-primary/5 rounded-lg p-2 -m-2 transition-all duration-300 group/item cursor-default"
                            whileHover={{ x: 4 }}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 group-hover/item:bg-accent transition-all duration-300" />
                            <p className="text-muted-foreground leading-relaxed text-sm group-hover/item:text-foreground transition-colors duration-300">
                              {h}
                            </p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {ed.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Small bottom note (optional) */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-muted/40 rounded-2xl border border-border/50">
            <span className="text-sm text-muted-foreground">
              Graduating <span className="text-foreground font-medium">May 2026</span> • Open to full-time roles
            </span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
