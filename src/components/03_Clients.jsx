import React from 'react'

// Section Name: CLIENTS — placeholder logos and descriptions
export default function Clients(){
  const logos = ['/assets/logo-placeholder-1.svg','/assets/logo-placeholder-2.svg','/assets/logo-placeholder-3.svg','/assets/logo-placeholder-4.svg','/assets/logo-placeholder-5.svg','/assets/logo-placeholder-6.svg']
  return (
    <section id="clients" className="py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Clients & Companies</h2>
        <p className="text-slate-400 mt-2">Organizations and teams I have worked with (replace these placeholders with real logos in <code>/public/assets</code>).</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
          {logos.map((l,idx)=> (
            <div key={idx} className="p-4 section-card rounded-lg flex items-center justify-center h-28">
              <img src={l} alt={`client-${idx}`} className="max-h-16 opacity-80" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
