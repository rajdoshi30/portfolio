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

export default function App(){
  return (
    <div className="font-sans antialiased">
    
<Helmet>
  <title>Raj Doshi | Marketing Analyst & Digital Strategy Expert</title>
  <meta name="description" content="Official portfolio of Raj Doshi — a marketing and data-driven strategist specializing in performance media, digital marketing, and analytics. Explore work, experience, and connect now!" />
  <meta name="keywords" content="Raj Doshi, Marketing Analyst, Digital Marketing, Performance Media, Portfolio, SEO, Paid Media, Performance Marketing, Marketing Automation, Email Marketing, Omni-channel Marketing, Paid Search, Paid Social, Analytics" />
  <meta name="author" content="Raj Doshi" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Raj Doshi | Marketing Analyst & Digital Strategy Expert" />
  <meta property="og:description" content="Explore Raj Doshi's portfolio — showcasing skills in performance marketing, paid media, and digital strategy." />
  <meta property="og:image" content="https://raw.githubusercontent.com/rajdoshi30/portfolio/main/public/social-share.png" />
  <meta property="og:url" content="https://www.rajdoshi.me/" />
  <meta property="og:type" content="website" />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Raj Doshi | Marketing Analyst & Digital Strategy Expert" />
  <meta name="twitter:description" content="Explore Raj Doshi's portfolio — showcasing skills in performance marketing, paid media, and digital strategy." />
  <meta name="twitter:image" content="https://raw.githubusercontent.com/rajdoshi30/portfolio/main/public/social-share.png" />
</Helmet>



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
