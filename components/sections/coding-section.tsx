"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ExternalLink, Code, Trophy, TrendingUp } from "lucide-react"
import { fetchLeetCodeStats, fetchRecentSubmissions, type LeetCodeStats, type LeetCodeSubmission } from "@/lib/leetcode"

export function CodingSection() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null)
  const [submissions, setSubmissions] = useState<LeetCodeSubmission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [statsData, submissionsData] = await Promise.all([
          fetchLeetCodeStats("vsonawane"),
          fetchRecentSubmissions("vsonawane"),
        ])

        setStats(statsData)
        setSubmissions(submissionsData)
      } catch (error) {
        console.error("Error loading coding data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-64 mx-auto mb-4" />
              <div className="h-4 bg-muted rounded w-96 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Competitive Programming</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Actively practicing algorithms and data structures with consistent progress
          </p>
        </motion.div>

        {stats && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stats.totalSolved}</div>
                  <div className="text-sm text-muted-foreground">Problems Solved</div>
                  <div className="text-xs text-muted-foreground mt-1">of {stats.totalQuestions} total</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stats.acceptanceRate}%</div>
                  <div className="text-sm text-muted-foreground">Acceptance Rate</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stats.ranking.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Global Ranking</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      R
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stats.reputation}</div>
                  <div className="text-sm text-muted-foreground">Reputation</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem Breakdown */}
          {stats && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Problem Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Easy</span>
                        <span className="text-sm text-muted-foreground">{stats.easySolved}</span>
                      </div>
                      <Progress value={(stats.easySolved / stats.totalSolved) * 100} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Medium</span>
                        <span className="text-sm text-muted-foreground">{stats.mediumSolved}</span>
                      </div>
                      <Progress value={(stats.mediumSolved / stats.totalSolved) * 100} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Hard</span>
                        <span className="text-sm text-muted-foreground">{stats.hardSolved}</span>
                      </div>
                      <Progress value={(stats.hardSolved / stats.totalSolved) * 100} className="h-2" />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <Button asChild className="w-full">
                      <a href="https://leetcode.com/u/vsonawane" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View LeetCode Profile
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Recent Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {submissions.map((submission, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-sm">{submission.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            variant={
                              submission.difficulty === "Easy"
                                ? "secondary"
                                : submission.difficulty === "Medium"
                                  ? "default"
                                  : "destructive"
                            }
                            className="text-xs"
                          >
                            {submission.difficulty}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{submission.lang}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-green-500 font-medium">{submission.statusDisplay}</div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(submission.timestamp).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
