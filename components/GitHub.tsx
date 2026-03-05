'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub } from 'react-icons/fa'

const GitHub = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="github" className="py-20 px-4 bg-primary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            GitHub <span className="gradient-text">Activity</span>
          </h2>

          <div className="glass p-8 rounded-2xl">
            <div className="flex items-center justify-center gap-3 mb-8">
              <FaGithub size={32} className="text-accent" />
              <a
                href="https://github.com/koushikbethu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-heading font-bold hover:text-accent transition-colors"
              >
                @koushikbethu
              </a>
            </div>

            <div className="bg-primary/50 p-6 rounded-xl mb-6">
              <img
                src="https://ghchart.rshah.org/38bdf8/koushikbethu"
                alt="GitHub Contribution Graph"
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-primary/50 p-4 rounded-xl text-center">
                <p className="text-3xl font-bold gradient-text mb-2">50+</p>
                <p className="text-textColor/60">Repositories</p>
              </div>
              <div className="bg-primary/50 p-4 rounded-xl text-center">
                <p className="text-3xl font-bold gradient-text mb-2">500+</p>
                <p className="text-textColor/60">Contributions</p>
              </div>
              <div className="bg-primary/50 p-4 rounded-xl text-center">
                <p className="text-3xl font-bold gradient-text mb-2">10+</p>
                <p className="text-textColor/60">Projects</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHub
