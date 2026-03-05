'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            <span className="gradient-text">Education</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-2xl hover:border-accent/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <FaGraduationCap size={32} className="text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  B.Tech Computer Science (AI & ML)
                </h3>
                <p className="text-accent text-lg mb-2">Parul University</p>
                <p className="text-textColor/60 mb-4">Vadodara, India | 2023 – 2027</p>
                <p className="text-xl font-semibold text-secondary mb-4">GPA: 8.34 / 10</p>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-accent">Relevant Coursework:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Operating Systems',
                      'Computer Networks',
                      'Object-Oriented Programming',
                      'Database Management Systems',
                    ].map((course) => (
                      <div key={course} className="flex items-center text-textColor/80">
                        <span className="text-secondary mr-2">•</span>
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
