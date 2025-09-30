import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 border-t border-gray-800 text-center">
      <div className="max-w-6xl mx-auto px-6 text-slate-400 text-sm">© {new Date().getFullYear()} Raj Doshi — Built with React + Tailwind</div>
    </footer>
  )
}
