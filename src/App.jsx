import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Skills, Projects, Experience, CertsBlogContact } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0B1220] text-slate-200">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4">
        <Hero />
        <div className="space-y-16 py-16">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <CertsBlogContact />
        </div>
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Your-Name. Built with React & Tailwind.</footer>
    </div>
  );
}

export default App;
