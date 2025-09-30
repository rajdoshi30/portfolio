import React from 'react'

// Section Name: CONTACT — contact form, mailto, call, calendar links
export default function Contact(){
  return (
    <section id="contact" className="py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="section-card p-6 rounded-lg">
          <h3 className="text-xl font-bold">Get in touch</h3>
          <p className="text-slate-300 mt-2">Interested in working together? Pick a way to connect.</p>

          <div className="mt-6 space-y-3">
            <a className="block p-3 section-card rounded-lg" href="mailto:rajdoshi30@gmail.com">Email: rajdoshi30@gmail.com</a>
            <a className="block p-3 section-card rounded-lg" href="tel:+16464963034">Call: +1 (646) 496-3034</a>
            <a className="block p-3 section-card rounded-lg" href="#" id="calendly-link">Schedule (Calendly)</a>
            <a className="block p-3 section-card rounded-lg" href="#" id="zoom-link">Schedule Call (Zoom)</a>
          </div>
        </div>

        <div className="section-card p-6 rounded-lg">
          <h3 className="text-xl font-bold">Message</h3>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-4 space-y-4">
            <input name="name" placeholder="Your name" className="w-full p-3 rounded bg-transparent border border-slate-700" />
            <input name="email" placeholder="you@domain.com" className="w-full p-3 rounded bg-transparent border border-slate-700" />
            <textarea name="message" placeholder="How can I help?" className="w-full p-3 rounded bg-transparent border border-slate-700 h-32" />
            <button type="submit" className="px-5 py-3 bg-primary text-black rounded font-semibold">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
