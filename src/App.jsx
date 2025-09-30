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

export default function App(){
  return (
    <div className="font-sans antialiased">
      <TopNav />
      <main className="w-full">
        <Hero />
        <About />
        <Clients />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
