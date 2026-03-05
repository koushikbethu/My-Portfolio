'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFileDownload, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-accent to-secondary p-1">
            <img
              src="/koushik.jpeg"
              alt="Koushik Bethu"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-4"
        >
          Koushik <span className="gradient-text">Bethu</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl text-accent mb-6"
        >
          AI Engineer | Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-textColor/80 max-w-3xl mx-auto mb-4"
        >
          Building intelligent systems that combine artificial intelligence with scalable software engineering.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="text-2xl md:text-3xl font-bold mb-8"
        >
          I <span className="gradient-text text-3xl md:text-4xl">BUILD</span> what others only <span className="gradient-text text-3xl md:text-4xl">PLAN</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-textColor/90">Open to Work • Collaboration • Freelancing</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://github.com/koushikbethu"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-accent/20 transition-all duration-300 hover:scale-105"
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/koushik-bethu-38b7292b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-secondary/20 transition-all duration-300 hover:scale-105"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-gradient-to-r from-accent to-secondary px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-105 font-semibold"
          >
            <FaFileDownload size={20} />
            Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about">
          <FaChevronDown size={32} className="text-accent" />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
