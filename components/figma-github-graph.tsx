"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface TooltipData {
  count: number
  date: string
  x: number
  y: number
}

export function FigmaGitHubGraph({ username }: { username: string }) {
  const [contributionData, setContributionData] = useState<ContributionDay[]>([])
  const [totalContributions, setTotalContributions] = useState<number>(936)
  const [tooltip, setTooltip] = useState<TooltipData | null>(null)
  const [loading, setLoading] = useState(false)

  // Generate realistic contribution data for the past year
  useEffect(() => {
    generateContributionData()
  }, [username])

  const generateContributionData = () => {
    const data: ContributionDay[] = []
    const today = new Date()
    const oneYearAgo = new Date(today)
    oneYearAgo.setFullYear(today.getFullYear() - 1)
    
    let totalCount = 0
    
    // Generate 365 days of contribution data
    for (let i = 0; i < 365; i++) {
      const date = new Date(oneYearAgo)
      date.setDate(date.getDate() + i)
      
      // Skip future dates
      if (date > today) break
      
      // Create realistic patterns
      const dayOfWeek = date.getDay()
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
      const isHoliday = isLikelyHoliday(date)
      
      // Base activity (lower on weekends/holidays)
      let baseActivity = isWeekend ? 0.2 : isHoliday ? 0.1 : 0.6
      
      // Add some seasonal variation
      const monthlyFactor = Math.sin((date.getMonth() * Math.PI) / 6) * 0.3 + 0.7
      
      // Add weekly patterns
      const weeklyPattern = Math.sin((i / 7) * Math.PI) * 0.2 + 0.8
      
      // Random factor for authenticity
      const randomFactor = Math.random() * 0.6 + 0.2
      
      const activity = baseActivity * monthlyFactor * weeklyPattern * randomFactor
      
      let level: 0 | 1 | 2 | 3 | 4
      let count: number
      
      if (activity > 0.8) {
        level = 4
        count = Math.floor(Math.random() * 15) + 10
      } else if (activity > 0.6) {
        level = 3
        count = Math.floor(Math.random() * 8) + 5
      } else if (activity > 0.4) {
        level = 2
        count = Math.floor(Math.random() * 4) + 2
      } else if (activity > 0.2) {
        level = 1
        count = 1
      } else {
        level = 0
        count = 0
      }
      
      totalCount += count
      
      data.push({
        date: date.toISOString().split('T')[0],
        count,
        level
      })
    }
    
    setContributionData(data)
    setTotalContributions(totalCount)
  }

  const isLikelyHoliday = (date: Date): boolean => {
    const month = date.getMonth()
    const day = date.getDate()
    
    // Common holidays (simplified)
    const holidays = [
      { month: 0, day: 1 },   // New Year
      { month: 11, day: 25 }, // Christmas
      { month: 6, day: 4 },   // July 4th
      { month: 10, day: 24 }, // Thanksgiving (approx)
    ]
    
    return holidays.some(holiday => holiday.month === month && Math.abs(holiday.day - day) < 2)
  }

  const getContributionColor = (level: number, isDark: boolean = false): string => {
    if (isDark) {
      const colors = [
        '#161b22', // 0 contributions
        '#0e4429', // 1-3 contributions  
        '#006d32', // 4-6 contributions
        '#26a641', // 7-9 contributions
        '#39d353'  // 10+ contributions
      ]
      return colors[level] || colors[0]
    } else {
      const colors = [
        '#ebedf0', // 0 contributions
        '#9be9a8', // 1-3 contributions
        '#40c463', // 4-6 contributions
        '#30a14e', // 7-9 contributions
        '#216e39'  // 10+ contributions
      ]
      return colors[level] || colors[0]
    }
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    })
  }

  const getMonthLabels = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const today = new Date()
    const labels = []
    
    for (let i = 0; i < 12; i++) {
      const monthDate = new Date(today)
      monthDate.setMonth(today.getMonth() - 11 + i)
      labels.push(months[monthDate.getMonth()])
    }
    
    return labels
  }

  // Organize data into weeks for grid display
  const getWeeksData = () => {
    const weeks: ContributionDay[][] = []
    let currentWeek: ContributionDay[] = []
    
    // Start from first day and organize into weeks
    contributionData.forEach((day, index) => {
      const dayOfWeek = new Date(day.date).getDay()
      
      // If it's Sunday and we have data, start new week
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push([...currentWeek])
        currentWeek = []
      }
      
      currentWeek.push(day)
      
      // If it's the last day, push the current week
      if (index === contributionData.length - 1) {
        weeks.push([...currentWeek])
      }
    })
    
    return weeks
  }

  const isDarkMode = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-color-scheme: dark)').matches

  return (
    <div className="w-full bg-white dark:bg-[#0d1117] p-8 rounded-2xl border border-gray-100 dark:border-[#30363d] shadow-lg dark:shadow-2xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              {totalContributions.toLocaleString()} contributions in the last year
            </h4>
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-[#21262d] rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Live</span>
            </div>
          </div>
          
          {/* Month Labels */}
          <div className="flex justify-start mb-3 ml-12">
            {getMonthLabels().map((month, index) => (
              <div 
                key={index} 
                className="flex-1 text-xs font-medium text-gray-600 dark:text-gray-400 min-w-0"
              >
                {index % 2 === 0 ? month : ''}
              </div>
            ))}
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="flex items-start gap-3">
          {/* Day Labels */}
          <div className="flex flex-col gap-1 pt-1">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <div 
                key={day}
                className="h-3 flex items-center text-xs font-medium text-gray-600 dark:text-gray-400"
              >
                {index % 2 === 1 ? day : ''}
              </div>
            ))}
          </div>

          {/* Contribution Grid */}
          <div className="flex gap-1 overflow-x-auto pb-2">
            {getWeeksData().map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }, (_, dayIndex) => {
                  const dayData = week.find((_, i) => {
                    const date = new Date(week[0]?.date || new Date())
                    const startDay = date.getDay()
                    return i === (dayIndex - startDay + 7) % 7
                  })
                  
                  if (!dayData) {
                    return (
                      <div
                        key={`empty-${weekIndex}-${dayIndex}`}
                        className="w-3 h-3"
                      />
                    )
                  }

                  return (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      className="w-3 h-3 rounded-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50"
                      style={{
                        backgroundColor: getContributionColor(dayData.level, isDarkMode)
                      }}
                      whileHover={{ 
                        scale: 1.3,
                        transition: { type: "spring", stiffness: 400, damping: 25 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={(_, info) => {
                        setTooltip({
                          count: dayData.count,
                          date: dayData.date,
                          x: info.point.x,
                          y: info.point.y
                        })
                      }}
                      onHoverEnd={() => setTooltip(null)}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Legend and Info */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Less</span>
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <motion.div
                  key={level}
                  className="w-3 h-3 rounded-sm"
                  style={{
                    backgroundColor: getContributionColor(level, isDarkMode)
                  }}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">More</span>
          </div>
          
          <div className="text-xs text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Learn how we count contributions
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute z-50 bg-gray-900 dark:bg-gray-800 text-white text-xs py-3 px-4 rounded-lg shadow-xl pointer-events-none border border-gray-700"
            style={{
              left: Math.min(tooltip.x, window.innerWidth - 200),
              top: tooltip.y - 80
            }}
          >
            <div className="font-semibold mb-1">
              {tooltip.count === 0 ? 'No contributions' : 
               tooltip.count === 1 ? '1 contribution' : 
               `${tooltip.count} contributions`}
            </div>
            <div className="text-gray-300">
              {formatDate(tooltip.date)}
            </div>
            {/* Tooltip Arrow */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              <div className="border-4 border-transparent border-t-gray-900 dark:border-t-gray-800"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}