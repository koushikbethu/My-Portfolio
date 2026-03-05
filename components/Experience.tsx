'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      role: 'Google Student Ambassador',
      organization: 'Google',
      period: 'Dec 2024 - Present',
      location: 'Remote, India',
      type: 'Part-time',
      responsibilities: [
        'Selected as a Google Student Ambassador, representing Google initiatives on campus',
        'Actively engaging in community building and promoting Google programs',
        'Organizing AI & cloud learning initiatives and events',
        'Supporting students in upskilling through Google platforms',
        'Gaining hands-on exposure to leadership, communication, and program management',
      ],
    },
    {
      role: 'Senior Core Member – Coding Club',
      organization: 'CodexFusion',
      period: 'Sep 2024 - Present',
      location: 'Gujarat, India',
      type: 'Part-time',
      responsibilities: [
        'Guiding peers in coding challenges and explaining algorithms and concepts',
        'Supporting juniors in problem-solving under faculty mentorship',
        'Contributing to knowledge-sharing sessions and discussions',
        'Facilitating collaborative learning within the club',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-primary/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            <span className="gradient-text">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.2 }}
                className="glass p-8 rounded-2xl hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <FaBriefcase size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold mb-1">{exp.role}</h3>
                    <p className="text-accent text-lg mb-1">{exp.organization} • {exp.type}</p>
                    <p className="text-textColor/60 mb-1">{exp.period}</p>
                    <p className="text-textColor/60 text-sm mb-4">{exp.location}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp) => (
                        <li key={resp} className="text-textColor/80 flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
