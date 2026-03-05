'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const [sending, setSending] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    emailjs.send(
      'service_p0qxj24',
      'template_mp4j1wd',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      '3CYmmHsRIcjplh9g5'
    )
    .then(() => {
      alert('Message sent successfully! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    })
    .catch((error) => {
      console.error('Error:', error)
      alert('Failed to send. Please email me at koushik.bethu25@gmail.com')
    })
    .finally(() => {
      setSending(false)
    })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:koushik.bethu25@gmail.com"
                  className="flex items-center gap-4 glass p-4 rounded-xl hover:border-accent/50 transition-all"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <FaEnvelope size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-textColor/60 text-sm">Email</p>
                    <p className="text-lg">koushik.bethu25@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919408208855"
                  className="flex items-center gap-4 glass p-4 rounded-xl hover:border-accent/50 transition-all"
                >
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <FaPhone size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-textColor/60 text-sm">Phone</p>
                    <p className="text-lg">+91 9408208855</p>
                  </div>
                </a>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://github.com/koushikbethu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-xl hover:bg-accent/20 transition-all"
                  >
                    <FaGithub size={28} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/koushik-bethu-38b7292b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-xl hover:bg-secondary/20 transition-all"
                  >
                    <FaLinkedin size={28} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
                <div className="mb-6">
                  <label className="block text-textColor/80 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-primary/50 border border-textColor/20 rounded-lg focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-textColor/80 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-primary/50 border border-textColor/20 rounded-lg focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-textColor/80 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-primary/50 border border-textColor/20 rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 bg-gradient-to-r from-accent to-secondary rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
