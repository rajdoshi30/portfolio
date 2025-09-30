import React from 'react'
import { motion } from 'framer-motion'

// Section Name: ABOUT — short bio + key KPIs
export default function About(){
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-slate-300">Performance-driven Marketing Analyst with experience in paid search, paid social, automation, and analytics. I use SQL, Tableau, Python and GA4 to drive insight-led decisions and measurable growth across campaigns.</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 section-card rounded-lg">
              <div className="text-sm text-slate-300">Years Experience</div>
              <div className="text-2xl font-bold">3+</div>
            </div>
            <div className="p-4 section-card rounded-lg">
              <div className="text-sm text-slate-300">Completed Projects</div>
              <div className="text-2xl font-bold">12+</div>
            </div>
            <div className="p-4 section-card rounded-lg">
              <div className="text-sm text-slate-300">Competitions Won</div>
              <div className="text-2xl font-bold">1 (Odyssey)</div>
            </div>
            <div className="p-4 section-card rounded-lg">
              <div className="text-sm text-slate-300">Certifications</div>
              <div className="text-2xl font-bold">Lubin, Forage</div>
            </div>
          </div>
        </div>

        <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} className="p-6 section-card rounded-2xl">
          <h3 className="font-semibold">Core Skills</h3>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>GA4 · SQL · Tableau · Python · R</li>
            <li>Paid Search · Paid Social · Programmatic</li>
            <li>Marketing Automation · Klaviyo · Make · HubSpot</li>
            <li>Data Storytelling · A/B Testing · Funnel Analysis</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
