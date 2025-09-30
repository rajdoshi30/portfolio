import React from 'react'

// Section Name: PROJECTS — populated with resume-based placeholders
const sampleProjects = [
  {title:'Impact of Digital Advertising on Consumer Engagement (Luxury)', year:2024, tools:'Tableau, Python, Excel, Survey', desc:'Capstone research: survey + secondary research; built an interactive Tableau dashboard to compare brand tactics (popups, cookies, social, loyalty).'},
  {title:'Paid Search Optimization Simulator', year:2024, tools:'Tableau, Excel', desc:'Interactive spend reallocation model showing projected ROI lifts. Includes parameter-driven scenarios.'},
  {title:'Broadband Adoption Strategy — Case Competition', year:2024, tools:'Excel, PowerPoint, Primary Research', desc:'Winner: Developed strategy to increase awareness and users in Oklahoma using persona targeting and channel mix.'},
  {title:'JPMC Excel Automation Project', year:2024, tools:'Excel (VBA)', desc:'Automation scripts and dashboards to streamline reporting tasks—reduced manual hours.'}
]

export default function Projects(){
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Selected Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {sampleProjects.map((p,i)=> (
            <div key={i} className="p-6 section-card rounded-lg">
              <div className="font-semibold">{p.title}</div>
              <div className="text-slate-400 text-sm mt-2">{p.year} · {p.tools}</div>
              <div className="mt-4 text-slate-300">{p.desc}</div>
              <div className="mt-6 flex gap-3">
                <a className="text-primary underline" href="#">View Dashboard</a>
                <a className="text-slate-300 underline" href="#">Read Case Study</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
