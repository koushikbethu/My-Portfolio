'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiLeetcode } from 'react-icons/si'
import { FaCode, FaTrophy, FaFire } from 'react-icons/fa'

const LeetCode = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { label: 'Problems Solved', value: '315+', icon: FaCode, color: 'text-accent' },
    { label: 'Contest Rating', value: '1430', icon: FaTrophy, color: 'text-secondary' },
    { label: 'Max Streak', value: '30 days', icon: FaFire, color: 'text-orange-500' },
  ]

  const problemStats = [
    { difficulty: 'Easy', solved: 171, total: 200, color: 'bg-green-500' },
    { difficulty: 'Medium', solved: 126, total: 200, color: 'bg-yellow-500' },
    { difficulty: 'Hard', solved: 18, total: 100, color: 'bg-red-500' },
  ]

  return (
    <section id="leetcode" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            LeetCode <span className="gradient-text">Activity</span>
          </h2>

          <div className="glass p-8 rounded-2xl mb-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <SiLeetcode size={32} className="text-yellow-500" />
              <a
                href="https://leetcode.com/koushikbethu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-heading font-bold hover:text-accent transition-colors"
              >
                @koushikbethu
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-primary/50 p-6 rounded-xl text-center"
                >
                  <stat.icon size={32} className={`${stat.color} mx-auto mb-3`} />
                  <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-textColor/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-primary/50 p-4 rounded-xl text-center">
                <p className="text-2xl font-bold text-accent mb-1">798</p>
                <p className="text-textColor/60 text-sm">Submissions (2024)</p>
              </div>
              <div className="bg-primary/50 p-4 rounded-xl text-center">
                <p className="text-2xl font-bold text-secondary mb-1">154</p>
                <p className="text-textColor/60 text-sm">Active Days</p>
              </div>
              <div className="bg-primary/50 p-4 rounded-xl text-center col-span-2 md:col-span-1">
                <p className="text-2xl font-bold text-yellow-500 mb-1">🏆</p>
                <p className="text-textColor/60 text-sm">100 Days Badge</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold mb-4 text-center">
                Problem Solving Progress
              </h3>
              {problemStats.map((stat, idx) => (
                <motion.div
                  key={stat.difficulty}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="bg-primary/50 p-4 rounded-xl"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{stat.difficulty}</span>
                    <span className="text-textColor/60">
                      {stat.solved} / {stat.total}
                    </span>
                  </div>
                  <div className="w-full bg-primary/80 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${(stat.solved / stat.total) * 100}%` } : {}}
                      transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                      className={`h-full ${stat.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-heading font-semibold mb-4 text-center">
              Recent Submissions
            </h3>
            <div className="bg-primary/50 p-4 rounded-xl">
              <img
                src="https://leetcard.jacoblin.cool/koushikbethu?theme=dark&font=Ubuntu&ext=activity"
                alt="LeetCode Stats"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LeetCode
