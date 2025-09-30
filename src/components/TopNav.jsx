import React from 'react'
import { motion } from 'framer-motion'

export default function TopNav(){
  return (
    <motion.header initial={{opacity:0}} animate={{opacity:1}} className="fixed top-4 left-0 right-0 z-50 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold">Raj Doshi</div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#about">About</a>
          <a href="#clients">Clients</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </motion.header>
  )
}
