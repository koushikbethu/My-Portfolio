'use client'

import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-textColor/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-textColor/60 mb-2">
          © 2026 Koushik Bethu. All rights reserved.
        </p>
        <p className="text-textColor/60 flex items-center justify-center gap-2">
          Built with <FaHeart className="text-accent" /> using React, TailwindCSS and Framer Motion
        </p>
      </div>
    </footer>
  )
}

export default Footer
