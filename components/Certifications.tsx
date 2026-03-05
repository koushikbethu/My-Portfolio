'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCertificate } from 'react-icons/fa'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const certifications = [
    {
      title: 'Smart Coder - Bronze Certificate',
      issuer: 'Smart Interviews',
      year: '2024',
      description: 'Data Structures & Algorithms',
    },
    {
      title: 'Computer Networks and Internet Protocol',
      issuer: 'NPTEL — IIT Kharagpur',
      year: '2024',
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            <span className="gradient-text">Certifications</span>
          </h2>

          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.2 }}
                className="glass p-6 rounded-2xl hover:border-secondary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <FaCertificate size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-1">{cert.title}</h3>
                    <p className="text-accent">{cert.issuer}</p>
                    {cert.description && (
                      <p className="text-textColor/60 text-sm mt-1">{cert.description}</p>
                    )}
                    <p className="text-textColor/60 text-sm mt-1">{cert.year}</p>
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

export default Certifications
