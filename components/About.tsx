'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="glass p-8 md:p-12 rounded-2xl">
            <p className="text-lg md:text-xl text-textColor/90 leading-relaxed mb-6">
              I'm an <span className="text-accent font-semibold">AI-focused software engineer</span> and full-stack developer currently pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence and Machine Learning at Parul University.
            </p>
            <p className="text-lg md:text-xl text-textColor/90 leading-relaxed mb-6">
              I build intelligent web systems, scalable backend architectures, and AI-driven applications that solve real-world problems. My experience spans machine learning systems, REST API design, cloud deployment, and modern frontend frameworks.
            </p>
            <p className="text-lg md:text-xl text-textColor/90 leading-relaxed">
              I'm passionate about applied AI, system design, and building engineering solutions that improve productivity and accessibility.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
