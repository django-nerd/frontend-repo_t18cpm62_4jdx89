import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText, Award, Briefcase, BarChart3, BrainCircuit, LineChart, Workflow, Globe, Mail, Linkedin, Github as Gh, BookOpen, Database } from 'lucide-react';

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <motion.h2
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="mb-6 bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-[#0F172A]/60 p-6 text-slate-300 backdrop-blur">
        <p>
          Insert a short 120–150 word bio here describing your transition from automation leadership into data science. Highlight your outcomes mindset, hands-on Python and ML practice, and your ability to communicate findings clearly to both execs and engineers. Emphasize curiosity, measurable wins, and your approach to experimentation, testing, and iteration. Mention your interest in ML for operations optimization, customer analytics, and product insights. Invite readers to explore the projects below and reach out for collaboration.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"><BarChart3 size={14}/> 6+ years in tech</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"><Workflow size={14}/> 120+ automations</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"><Award size={14}/> 3 DS certs</span>
        </div>
        <ol className="grid gap-2 text-sm text-slate-400 sm:grid-cols-3">
          <li className="rounded-lg border border-white/10 bg-white/5 p-3">2019–2023 • Automation Lead</li>
          <li className="rounded-lg border border-white/10 bg-white/5 p-3">2024–2025 • Upskilling</li>
          <li className="rounded-lg border border-white/10 bg-white/5 p-3">2025 • DS Projects</li>
        </ol>
      </div>
    </Section>
  );
}

export function Skills() {
  const tabs = {
    'DS/ML': [
      { name: 'Python', level: 90, note: 'expert • current' },
      { name: 'pandas', level: 85, note: 'advanced • current' },
      { name: 'scikit-learn', level: 80, note: 'advanced • current' },
      { name: 'NLP', level: 70, note: 'intermediate • 2025' },
    ],
    'Analytics/Viz': [
      { name: 'SQL', level: 85, note: 'advanced • current' },
      { name: 'Tableau/Power BI', level: 75, note: 'advanced • 2025' },
      { name: 'Plotly', level: 70, note: 'intermediate • 2025' },
    ],
    'MLOps': [
      { name: 'Docker', level: 70, note: 'intermediate • 2025' },
      { name: 'MLflow', level: 60, note: 'working • 2025' },
      { name: 'Airflow', level: 55, note: 'working • 2024' },
    ],
    'Web/Automation': [
      { name: 'JavaScript', level: 75, note: 'advanced • 2025' },
      { name: 'APIs/RPA', level: 80, note: 'advanced • 2024' },
      { name: 'FastAPI', level: 65, note: 'intermediate • 2025' },
    ],
  };
  const [current, setCurrent] = React.useState('DS/ML');

  return (
    <Section id="skills" title="Skills">
      <div className="rounded-2xl border border-white/10 bg-[#0F172A]/60 p-4 backdrop-blur">
        <div className="mb-4 flex flex-wrap gap-2">
          {Object.keys(tabs).map((t) => (
            <button
              key={t}
              onClick={() => setCurrent(t)}
              className={`rounded-full border px-3 py-1 text-xs ${
                current === t
                  ? 'border-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid gap-4">
          {tabs[current].map((s) => (
            <div key={s.name} className="">
              <div className="mb-1 flex items-end justify-between text-sm">
                <span className="text-slate-200">{s.name}</span>
                <span className="text-xs text-slate-400">{s.note}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProjectCard({ title, outcome, tags, highlights, stack }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-[#0F172A]/60 p-5 text-slate-300 shadow-sm transition hover:translate-y-[-2px] hover:border-white/20">
      <div className="mb-2 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wide">
            {t}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      <p className="mb-3 text-sm text-slate-400">{outcome}</p>
      <ul className="mb-4 list-disc space-y-1 pl-4 text-sm">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs">{s}</span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href="#" className="inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-white"><FileText size={14}/> Case Study</a>
          <a href="#" className="inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-white"><Github size={14}/> GitHub</a>
          <a href="#" className="inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-white"><ExternalLink size={14}/> Live</a>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const data = [
    {
      title: 'Churn Prediction Pipeline',
      outcome: 'Reduced churn by 14% on pilot cohort',
      tags: ['Classification', 'Pipeline'],
      highlights: ['EDA + feature store', 'Model monitoring', 'Cost-sensitive training'],
      stack: ['Python', 'sklearn', 'MLflow'],
    },
    {
      title: 'Time Series Forecasting',
      outcome: 'Improved MAPE by 18% vs baseline',
      tags: ['Forecasting'],
      highlights: ['Prophet + XGBoost hybrid', 'Cross-validation', 'Feature engineering'],
      stack: ['Python', 'Prophet', 'XGBoost'],
    },
    {
      title: 'NLP Support Triage',
      outcome: 'Auto-routed 45% of tickets',
      tags: ['NLP'],
      highlights: ['BERT embeddings', 'Topic modeling', 'Active learning loop'],
      stack: ['Python', 'spaCy', 'HuggingFace'],
    },
    {
      title: 'AB Testing Platform',
      outcome: 'Shipped 10+ experiments/quarter',
      tags: ['Experimentation'],
      highlights: ['Sequential testing', 'Power analysis', 'Dashboards'],
      stack: ['Python', 'FastAPI', 'Plotly'],
    },
    {
      title: 'Data Quality Monitor',
      outcome: 'Cut data incidents by 60%',
      tags: ['Observability'],
      highlights: ['Great Expectations', 'Anomaly alerts', 'Ownership model'],
      stack: ['Python', 'Airflow', 'GX'],
    },
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#0F172A]/60 p-5">
          <h3 className="mb-2 font-semibold text-slate-100">Relevant DS</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Built churn model improving retention by 14%</li>
            <li>• Automated demand forecasts reducing stockouts by 9%</li>
            <li>• Created ML dashboards for model drift and data quality</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">Python</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">SQL</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">MLflow</span>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#0F172A]/60 p-5">
          <h3 className="mb-2 font-semibold text-slate-100">Prior Leadership & Automation</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Led 7-person team shipping 120+ automations</li>
            <li>• Saved 8,000+ hours annually through RPA and APIs</li>
            <li>• Partnered with product/ops to standardize KPIs</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">Leadership</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">Stakeholder mgmt</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">Change mgmt</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function CertsBlogContact() {
  return (
    <>
      <Section id="certs" title="Certifications & Education">
        <div className="flex flex-wrap gap-3">
          {['AWS ML', 'Google Data Analytics', 'DBT Fundamentals', 'Azure DP-100'].map((c) => (
            <span key={c} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200" title="Certification">
              <Award className="mr-2 inline" size={16} /> {c}
            </span>
          ))}
        </div>
      </Section>

      <Section id="blog" title="Blog Insights">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: 'How to frame ML problems', r: '5 min read' },
            { t: 'From dashboards to decisions', r: '6 min read' },
            { t: 'MLOps for small teams', r: '7 min read' },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-white/10 bg-[#0F172A]/60 p-4">
              <h4 className="font-semibold text-slate-100">{b.t}</h4>
              <p className="text-sm text-slate-400">One actionable idea per post to improve how you ship DS.</p>
              <span className="mt-2 inline-block text-xs text-slate-500">{b.r}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid gap-6 md:grid-cols-2">
          <form className="rounded-2xl border border-white/10 bg-[#0F172A]/60 p-4">
            <div className="grid gap-3">
              <input className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your name" />
              <input className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Email" />
              <textarea rows="4" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Message" />
              <button className="group w-max rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 p-[1px]">
                <span className="block rounded-[11px] bg-[#0F172A] px-5 py-2 text-sm font-semibold text-slate-100 transition group-hover:bg-transparent">Send</span>
              </button>
            </div>
          </form>
          <div className="rounded-2xl border border-white/10 bg-[#0F172A]/60 p-4 text-slate-300">
            <p className="mb-3">Find me online</p>
            <div className="flex gap-3">
              <a aria-label="GitHub" href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:border-white/20"><Gh size={18}/></a>
              <a aria-label="LinkedIn" href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:border-white/20"><Linkedin size={18}/></a>
              <a aria-label="Kaggle" href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:border-white/20"><BarChart3 size={18}/></a>
              <a aria-label="Medium" href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:border-white/20"><BookOpen size={18}/></a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
