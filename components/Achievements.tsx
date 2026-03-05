'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const achievements = [
    {
      title: 'Top 3% in Department',
      description: 'Ranked among the top 3% of students in the department',
      icon: FaTrophy,
    },
    {
      title: '3rd Rank in State',
      description: 'Secured 3rd rank in state during Intermediate Public Examination',
      icon: FaMedal,
    },
    {
      title: 'Hackathon Finalist',
      description: 'Finalist in multiple hackathons',
      icon: FaAward,
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-primary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            <span className="gradient-text">Achievements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl text-center hover:border-accent/50 transition-all duration-300"
              >
                <div className="inline-block p-4 bg-gradient-to-r from-accent to-secondary rounded-full mb-4">
                  <achievement.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">{achievement.title}</h3>
                <p className="text-textColor/80">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
