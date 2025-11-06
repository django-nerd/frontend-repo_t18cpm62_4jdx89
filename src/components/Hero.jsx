import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

function AuroraBackground() {
  const prefersReduced = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute -left-1/3 top-[-20%] h-[120vh] w-[160vw] rounded-full opacity-30 blur-3xl transition-[filter] duration-[8000ms] ease-linear ${
          prefersReduced ? '' : 'animate-[spin_40s_linear_infinite]'
        }`}
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, #22D3EE, #6366F1, #22D3EE)'
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.12),transparent_60%)]" />
    </div>
  );
}

function Particles() {
  useEffect(() => {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight * 0.9);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    const onMove = (e) => {
      const mx = e.clientX;
      const my = e.clientY;
      particles.forEach(p => {
        p.x += (mx - w / 2) * 0.0005 * p.r;
        p.y += (my - h / 2) * 0.0005 * p.r;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(226,232,240,0.6)';
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    let raf = requestAnimationFrame(draw);
    window.addEventListener('mousemove', onMove);
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight * 0.9; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas id="particles" className="pointer-events-none absolute inset-0" />;
}

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[#0B1220] pt-28 text-slate-200">
      <AuroraBackground />
      <Particles />
      <div className="mx-auto max-w-7xl px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur"
          >
            Data Science Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
          >
            From Automation Lead → Data Scientist.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="mt-4 max-w-2xl text-slate-300"
          >
            I turn messy data into measurable outcomes with Python, ML, and clear storytelling.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="group rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 p-[1px]">
              <span className="block rounded-[11px] bg-[#0F172A] px-5 py-3 text-sm font-semibold text-slate-100 transition group-hover:bg-transparent">
                View Projects
              </span>
            </a>
            <a href="#contact" className="group rounded-xl bg-gradient-to-r from-orange-400 to-rose-500 p-[1px]">
              <span className="block rounded-[11px] bg-[#0F172A] px-5 py-3 text-sm font-semibold text-slate-100 transition group-hover:bg-transparent">
                Download CV
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
