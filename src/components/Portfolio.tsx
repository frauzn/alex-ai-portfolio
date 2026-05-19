import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  MessageSquare,
  Smartphone,
  Layers,
  Activity,
  Database,
} from 'lucide-react';

const techStack = [
  { name: 'GPT-4', color: '#c084fc' },
  { name: 'n8n', color: '#8b5cf6' },
  { name: 'Telegram Bot', color: '#38bdf8' },
  { name: 'OpenAI API', color: '#a78bfa' },
];

const problemPoints = [
  'Instant responses',
  'Automated communication',
  '24/7 availability',
  'Scalable customer support',
];

const solutionPoints = [
  'Receives Telegram messages',
  'Processes requests through AI',
  'Generates natural responses',
  'Automates communication',
  'Stores lead information automatically',
];

const featureCards = [
  {
    title: '24/7 AI Support',
    description: 'Always-on assistance that keeps conversations moving, even outside business hours.',
    icon: Zap,
  },
  {
    title: 'Smart Lead Qualification',
    description: 'Automatic lead scoring and categorization to keep the sales pipeline clean.',
    icon: ShieldCheck,
  },
  {
    title: 'Instant AI Responses',
    description: 'Fast, conversational replies that feel natural and human-led.',
    icon: MessageSquare,
  },
  {
    title: 'Workflow Automation',
    description: 'Multi-step automation that connects Telegram, n8n, GPT-4, and customer data stores.',
    icon: Layers,
  },
];

const results = [
  'Faster customer communication',
  'Automated lead collection',
  'Instant response time',
  'Reduced manual workload',
  'Improved user experience',
];

const leadTechStack = [
  { name: 'GPT-4', color: '#c084fc' },
  { name: 'n8n', color: '#8b5cf6' },
  { name: 'Automation', color: '#38bdf8' },
  { name: 'CRM Integration', color: '#a78bfa' },
];

const leadProblemPoints = [
  'Automated lead filtering',
  'Faster response times',
  'AI-based qualification',
  'Scalable sales automation',
];

const leadSolutionPoints = [
  'Captures incoming leads',
  'Analyzes user intent',
  'Qualifies prospects using AI',
  'Filters low-quality requests',
  'Stores data automatically',
];

const leadFeatureCards = [
  {
    title: 'AI Lead Scoring',
    description: 'Smart scoring that ranks prospects and highlights high-potential opportunities.',
    icon: Activity,
  },
  {
    title: 'CRM Automation',
    description: 'Seamless data flow into CRM systems for faster follow-up and team handoff.',
    icon: Database,
  },
  {
    title: 'Smart Qualification',
    description: 'AI-driven qualification that separates quality leads from low-value requests.',
    icon: ShieldCheck,
  },
  {
    title: 'Automated Pipelines',
    description: 'Workflow automation that routes leads into the right sales sequence automatically.',
    icon: Layers,
  },
];

const leadResults = [
  'Faster lead processing',
  'Improved sales efficiency',
  'Reduced manual work',
  'Better lead quality',
  'Scalable automation system',
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#07030f]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),_transparent_42%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(circle_at_bottom,_rgba(80,59,167,0.12),_transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-28">
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] items-center"
        >
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-violet-500/15 backdrop-blur-xl text-xs uppercase tracking-[0.3em] text-violet-300">
              <Sparkles className="w-3 h-3 text-violet-300" />
              AI Automation
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white font-syne tracking-tight">
                AI Telegram Assistant
              </h1>
              <p className="text-base md:text-xl text-zinc-300 max-w-2xl leading-8">
                Smart AI-powered Telegram chatbot that automates customer communication, answers questions instantly, and improves lead handling.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-zinc-200"
                >
                  <span
                    className="inline-flex h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }}
                  />
                  <span className="ml-2">{tech.name}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
              <span className="text-sm text-zinc-500">Premium AI startup case study with cinematic polish.</span>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d081a]/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(20,8,53,0.35)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(99,102,241,0.12),_transparent_45%)]" />
            <img
              src="/images/telegram-premium-visual.jpg"
              alt="AI Telegram Assistant premium visual"
              className="h-full w-full object-cover mix-blend-screen opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />
            <div className="absolute bottom-8 left-8 rounded-3xl border border-white/[0.08] bg-white/5 p-6 backdrop-blur-xl max-w-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300 mb-3">Telegram AI Assist</p>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Automated lead journeys built for speed.</h2>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Designed to feel premium, precise, and effortless across every customer touchpoint.
              </p>
            </div>
          </div>
        </motion.div>

        {/* PROBLEM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center space-y-6"
        >
          <div className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-violet-300">
            <span className="h-px w-12 bg-violet-500/40" />
            The Problem
            <span className="h-px w-12 bg-violet-500/40" />
          </div>
          <p className="text-xl font-semibold text-white font-syne">The business spent too much time answering repetitive Telegram messages manually.</p>
          <p className="text-zinc-400 max-w-xl mx-auto leading-8">
            Slow replies reduced customer engagement and caused missed leads. The client needed:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {problemPoints.map((point) => (
              <div
                key={point}
                className="rounded-3xl border border-white/[0.06] bg-white/[0.03] px-6 py-5 text-left text-sm text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <span className="font-semibold text-white">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SOLUTION / ARCHITECTURE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid gap-10 lg:grid-cols-[1fr_1.05fr] items-center"
        >
          <div className="rounded-[2rem] border border-white/[0.08] bg-[#0d0719]/80 p-6 shadow-[0_30px_80px_rgba(10,5,25,0.35)] backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_45%)]" />
            <div className="relative rounded-[1.75rem] overflow-hidden border border-white/[0.06] bg-[#100a1f]/95">
              <img
                src="/images/telegram-flow-screenshot.jpg"
                alt="Telegram assistant workflow"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(10,5,20,0.25),_rgba(10,5,20,0.55))]" />
              <div className="absolute top-6 left-6 rounded-3xl border border-white/[0.08] bg-white/5 px-4 py-3 backdrop-blur-xl text-sm text-zinc-200">
                Architecture overview
              </div>
              <div className="absolute bottom-6 right-6 rounded-3xl border border-violet-500/20 bg-violet-500/8 px-4 py-2 text-xs uppercase tracking-[0.3em] text-violet-200">
                AI pipeline
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300 mb-3">The Solution</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-syne">I created an AI-powered Telegram assistant using GPT-4 and n8n automation.</h2>
            </div>
            <p className="text-zinc-400 leading-8 max-w-2xl">
              The system receives Telegram messages, processes requests through AI, generates natural responses, automates communication, and stores lead information automatically.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {solutionPoints.map((point) => (
                <div key={point} className="rounded-3xl border border-white/[0.06] bg-white/[0.03] px-6 py-5 text-sm text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FEATURES SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300 mb-3">Key Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-syne">Premium automation capabilities.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -6 }}
                  className="group rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-8 shadow-[0_25px_60px_rgba(5,1,20,0.2)] transition-all duration-400"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300 mb-6 shadow-[0_15px_40px_rgba(99,102,241,0.08)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm leading-7 text-zinc-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* TELEGRAM ASSISTANT PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[2rem] border border-white/[0.08] bg-[#0e0816]/70 p-8 shadow-[0_40px_120px_rgba(10,4,30,0.45)] backdrop-blur-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.16),_transparent_35%)]" />
          <div className="relative grid gap-8 xl:grid-cols-[0.7fr_0.9fr] items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300">AI Assistant Preview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-syne max-w-xl">Human-like AI conversations directly inside Telegram.</h2>
              <p className="text-zinc-400 max-w-xl leading-8">
                A dark, premium preview of how the assistant manages questions, shares follow-ups, and drives lead capture with polished, cinematic motion.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="rounded-[2rem] border border-white/[0.08] bg-[#09050f]/95 p-5 shadow-[0_35px_80px_rgba(12,6,35,0.45)]">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Telegram</p>
                    <p className="text-sm text-zinc-400">Live assistant preview</p>
                  </div>
                  <Smartphone className="h-5 w-5 text-violet-300" />
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl bg-white/[0.03] p-4 text-sm text-zinc-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                      <span className="text-xs uppercase tracking-[0.3em] text-violet-300">AI Assistant</span>
                    </div>
                    <p className="leading-7">Hi there! How can I help with your order or lead capture today?</p>
                  </div>
                  <div className="rounded-3xl bg-violet-500/10 p-4 text-sm text-zinc-100 border border-violet-500/10 shadow-[0_20px_40px_rgba(99,102,241,0.09)]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-violet-300" />
                      <span className="text-xs uppercase tracking-[0.3em] text-violet-300">Customer</span>
                    </div>
                    <p className="leading-7">Can you share my order ETA and send me the next steps?</p>
                  </div>
                  <div className="rounded-3xl bg-white/[0.03] p-4 text-sm text-zinc-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                      <span className="text-xs uppercase tracking-[0.3em] text-violet-300">AI Assistant</span>
                    </div>
                    <p className="leading-7">Absolutely. I’ve confirmed your delivery window and will collect your details for the next step.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RESULTS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300 mb-3">Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-syne">High-impact outcomes for modern businesses.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {results.map((result) => (
              <div
                key={result}
                className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 text-sm text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <p className="font-semibold text-white mb-3">{result}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI LEAD QUALIFICATION CASE STUDY */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-28"
        >
          <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-violet-500/15 backdrop-blur-xl text-xs uppercase tracking-[0.3em] text-violet-300">
                <Sparkles className="w-3 h-3 text-violet-300" />
                AI Lead Qualification
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white font-syne tracking-tight">
                  AI Lead Qualification System
                </h1>
                <p className="text-base md:text-xl text-zinc-300 max-w-2xl leading-8">
                  Automated AI workflow that captures, filters, and qualifies leads before sending them directly into the sales pipeline.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {leadTechStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-zinc-200"
                  >
                    <span
                      className="inline-flex h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }}
                    />
                    <span className="ml-2">{tech.name}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Get In Touch
                </a>
                <span className="text-sm text-zinc-500">Premium AI lead automation case study with cinematic polish.</span>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d081a]/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(20,8,53,0.35)]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(99,102,241,0.12),_transparent_45%)]" />
              <img
                src="/images/lead-premium-visual.jpg"
                alt="AI Lead Qualification System premium visual"
                className="h-full w-full object-cover mix-blend-screen opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />
              <div className="absolute bottom-8 left-8 rounded-3xl border border-white/[0.08] bg-white/5 p-6 backdrop-blur-xl max-w-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-violet-300 mb-3">Lead Qualification</p>
                <h2 className="text-xl md:text-2xl font-semibold text-white">AI workflows built for sales efficiency.</h2>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  Designed to feel premium, clean, and high-performing for modern sales teams.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center space-y-6"
          >
            <div className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-violet-300">
              <span className="h-px w-12 bg-violet-500/40" />
              The Problem
              <span className="h-px w-12 bg-violet-500/40" />
            </div>
            <p className="text-xl font-semibold text-white font-syne">The client manually reviewed every lead, wasting time on low-quality requests.</p>
            <p className="text-zinc-400 max-w-xl mx-auto leading-8">
              The business needed automated lead filtering, faster response times, AI-based qualification, and scalable sales automation.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {leadProblemPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-3xl border border-white/[0.06] bg-white/[0.03] px-6 py-5 text-left text-sm text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  <span className="font-semibold text-white">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="grid gap-10 lg:grid-cols-[1.05fr_1fr] items-center"
          >
            <div className="rounded-[2rem] border border-white/[0.08] bg-[#0d0719]/80 p-6 shadow-[0_30px_80px_rgba(10,5,25,0.35)] backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_45%)]" />
              <div className="relative rounded-[1.75rem] overflow-hidden border border-white/[0.06] bg-[#100a1f]/95">
                <img
                  src="/images/lead-qualification-screenshot.jpg"
                  alt="Lead qualification workflow"
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(10,5,20,0.25),_rgba(10,5,20,0.55))]" />
                <div className="absolute top-6 left-6 rounded-3xl border border-white/[0.08] bg-white/5 px-4 py-3 backdrop-blur-xl text-sm text-zinc-200">
                  Workflow overview
                </div>
                <div className="absolute bottom-6 right-6 rounded-3xl border border-violet-500/20 bg-violet-500/8 px-4 py-2 text-xs uppercase tracking-[0.3em] text-violet-200">
                  Sales automation
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-violet-300 mb-3">The Solution</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-syne">I built an AI lead qualification workflow that automatically analyzes incoming leads, scores them using AI, and routes high-quality prospects into the sales pipeline.</h2>
              </div>
              <p className="text-zinc-400 leading-8 max-w-2xl">
                The automation captures incoming leads, analyzes user intent, qualifies prospects using AI, filters low-quality requests, and stores data automatically.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {leadSolutionPoints.map((point) => (
                  <div key={point} className="rounded-3xl border border-white/[0.06] bg-white/[0.03] px-6 py-5 text-sm text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-10"
          >
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300 mb-3">Key Features</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-syne">Premium AI automation capabilities.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {leadFeatureCards.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    whileHover={{ y: -6 }}
                    className="group rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-8 shadow-[0_25px_60px_rgba(5,1,20,0.2)] transition-all duration-400"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300 mb-6 shadow-[0_15px_40px_rgba(99,102,241,0.08)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-sm leading-7 text-zinc-300">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-300 mb-3">Results</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-syne">High-impact outcomes for modern businesses.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {leadResults.map((result) => (
                <div
                  key={result}
                  className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 text-sm text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  <p className="font-semibold text-white mb-3">{result}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* FINAL CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[2rem] border border-violet-500/20 bg-[#10081c]/90 p-12 text-center shadow-[0_45px_120px_rgba(20,8,60,0.35)] backdrop-blur-xl"
        >
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Need AI automation for your business?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-syne leading-tight">Let’s build a custom AI system tailored to your workflow.</h2>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
