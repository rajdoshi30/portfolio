import React from 'react'

// Section Name: EDUCATION — degrees
export default function Education(){
  return (
    <section id="education" className="py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
        <div className="section-card p-6 rounded-lg">
          <h3 className="font-semibold">Master's in Marketing Analytics</h3>
          <div className="text-slate-300">Pace University, Lubin School of Business — GPA: 3.97</div>
        </div>
        <div className="section-card p-6 rounded-lg">
          <h3 className="font-semibold">Bachelor's in Management Studies</h3>
          <div className="text-slate-300">University of Mumbai</div>
        </div>
      </div>
    </section>
  )
}
