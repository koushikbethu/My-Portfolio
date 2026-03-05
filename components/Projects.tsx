'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'AWS Infrastructure Digital Twin',
      subtitle: 'Production-Ready Infrastructure Testing Platform',
      description: 'A universal platform for testing and deploying AWS infrastructure changes safely. Simulate traffic patterns, test auto-scaling, and optimize costs before applying changes to production. Currently in active development.',
      features: [
        'AWS resource import (EC2, RDS, Lambda, ELB, S3)',
        'Real-time CloudWatch metrics integration',
        'Safe simulation lab with no production impact',
        'Load testing and auto-scaling validation',
        'One-click deployment to AWS',
        'Multi-user support with Google OAuth',
        'Cost estimation and optimization',
      ],
      tech: ['Python', 'Flask', 'AWS SDK', 'CloudWatch', 'DynamoDB', 'Lambda', 'CloudFormation', 'OAuth 2.0'],
      github: 'https://github.com/koushikbethu/Server-Servail',
      demo: '#',
      badge: 'In Development',
    },
    {
      title: 'FocusTube',
      subtitle: 'AI-Powered YouTube Focus Engine',
      description: 'An AI-driven content filtering platform that analyzes YouTube videos using the Google Gemini API to classify content, detect clickbait, and measure information depth to help users consume distraction-free content.',
      features: [
        'AI video classification engine',
        'Clickbait detection',
        'Shorts blocking focus mode',
        'Keyword and category filtering',
        'Personal analytics dashboard',
        'OAuth authentication',
      ],
      tech: ['FastAPI', 'React', 'PostgreSQL', 'Gemini API', 'YouTube Data API', 'OAuth 2.0', 'JWT'],
      github: 'https://github.com/koushikbethu/FocusTube-AI-Powered-YouTube-Focus-Preference-Engine',
      demo: '#',
    },
    {
      title: 'Audio-to-ISL',
      subtitle: 'Real-Time Speech to Indian Sign Language Translation',
      description: 'A machine learning system that converts spoken language into Indian Sign Language gestures using MFCC audio feature extraction and a Random Forest classification pipeline.',
      features: [
        'Speech recognition pipeline',
        'MFCC audio feature extraction',
        'Gesture prediction model',
        'REST API architecture',
        'Browser speech integration',
      ],
      tech: ['Python', 'Flask', 'scikit-learn', 'librosa', 'NumPy', 'Web Speech API', 'Render'],
      github: 'https://github.com/koushikbethu/Aud-2-ISL',
      demo: 'https://aud-2-isl.onrender.com/',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-heading font-bold gradient-text">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full border border-accent/50">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-accent mb-4">{project.subtitle}</p>
                <p className="text-textColor/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-secondary">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-textColor/80 flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-secondary">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-accent/20 transition-all"
                  >
                    <FaGithub size={20} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-secondary rounded-lg hover:opacity-90 transition-all"
                  >
                    <FaExternalLinkAlt size={16} />
                    Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-textColor/60 italic">More projects coming soon...</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
