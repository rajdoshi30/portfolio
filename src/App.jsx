import { Helmet } from 'react-helmet';
import React from 'react'
import Hero from './components/01_Hero'
import About from './components/02_About'
import Clients from './components/03_Clients'
import Experience from './components/04_Experience'
import Education from './components/05_Education'
import Projects from './components/06_Projects'
import Contact from './components/07_Contact'
import Footer from './components/08_Footer'
import TopNav from './components/TopNav'
import { motion } from "framer-motion";
import "./styles/tailwind.css";

const App = () => {
  return (
    <main className="bg-[#0b0f14] text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm Raj Doshi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-xl"
        >
          A marketing analyst & digital strategy expert focused on paid media, performance marketing, and data-driven campaigns.
        </motion.p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm passionate about crafting and scaling marketing strategies that combine creativity and analytics. From managing six-figure paid media budgets to building full-funnel reporting dashboards, I thrive at the intersection of data and storytelling.
        </p>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-[#11161d] max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold">Paid Media Strategist</h3>
            <p className="text-sm text-gray-400 mb-2">GroupM Nexus | 2024–Present</p>
            <p>Managed search & social campaigns with budgets > $500K, drove 40% increase in ROAS using AI-driven optimizations.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Marketing Analytics Intern</h3>
            <p className="text-sm text-gray-400 mb-2">JPMorgan Chase & Co. | 2023</p>
            <p>Built Excel automation tools, analyzed campaign KPIs, and supported marketing dashboards used by 12+ teams.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
        <p className="mb-6 text-lg">
          I'm open to full-time roles, freelance consulting, or just a good conversation. Drop me a message!
        </p>
        <a
          href="mailto:hello@rajdoshi.me"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Email Me
        </a>
      </section>
    </main>
  );
};

export default App;
