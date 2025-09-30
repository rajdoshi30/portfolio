import React from 'react'

// Section Name: EXPERIENCE — filled from resume
const timeline = [
  {year:2025, role:'Marketing Analyst (Capstone & Freelance Projects)', org:'Independent / Capstone - Pace University', desc:'Led research on digital advertising impact on luxury retail engagement; built dashboards and presented optimization strategies.'},
  {year:2024, role:'Competition Winner (Team Odyssey)', org:'Broadband Case Competition', desc:'Led analytics and targeting strategy; team won the competition for increasing broadband adoption.'},
  {year:2024, role:'JPMC Excel Skills Simulation (Forage)', org:'JPMorgan Chase & Co.', desc:'Completed advanced Excel tasks: automation with VBA, data cleaning, and reporting.'},
  {year:2024, role:'Lubin Analytics Boot Camp (Certificate)', org:'Lubin School of Business', desc:'Completed intensive analytics training covering Excel, Tableau, and data storytelling.'},
  {year:2023, role:'Graduate Researcher — Luxury Retail Digital Ads', org:'Pace University', desc:'Designed and executed primary survey research, brand comparisons, and advertising strategy analysis.'}
]

export default function Experience(){
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-8 space-y-6">
          {timeline.map((t,i)=> (
            <div key={i} className="p-6 section-card rounded-lg">
              <div className="flex items-start gap-6">
                <div className="text-primary font-bold text-xl w-24">{t.year}</div>
                <div>
                  <div className="font-semibold">{t.role} — {t.org}</div>
                  <div className="text-slate-300 mt-2">{t.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
