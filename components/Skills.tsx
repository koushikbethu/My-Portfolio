'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiPython, SiJavascript, SiReact, SiNextdotjs, SiAngular, SiNodedotjs, SiExpress, SiFlask, SiFastapi, SiMysql, SiMongodb, SiPostgresql, SiAmazonaws, SiMicrosoftazure, SiDocker, SiScikitlearn, SiNumpy, SiPandas } from 'react-icons/si'
import { FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaCloud } from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'Java', icon: FaJava },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'SQL', icon: FaDatabase },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Angular', icon: SiAngular },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'Flask', icon: SiFlask },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'REST API', icon: FaCloud },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: SiMysql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: SiAmazonaws },
        { name: 'Azure', icon: SiMicrosoftazure },
        { name: 'Docker', icon: SiDocker },
        { name: 'CI/CD', icon: FaCloud },
      ],
    },
    {
      title: 'AI / Machine Learning',
      skills: [
        { name: 'scikit-learn', icon: SiScikitlearn },
        { name: 'NumPy', icon: SiNumpy },
        { name: 'pandas', icon: SiPandas },
        { name: 'NLP', icon: SiPython },
        { name: 'ML Models', icon: SiPython },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-primary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-xl hover:border-accent/50 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-semibold mb-4 text-accent">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 text-textColor/90 hover:text-accent transition-colors"
                    >
                      <skill.icon size={24} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
