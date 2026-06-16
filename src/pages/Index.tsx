import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, Building2, Globe2, Search, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import { internships } from "@/data/internships";

const metrics = [
  ["1,000+", "students in the community"],
  ["900+", "students helped find internships"],
  ["8+", "international partnerships"],
  ["20", "active interns"],
];

const benefits = [
  { icon: Search, title: "Curated opportunity discovery", text: "Find internships, research roles, fellowships, and career programs without sorting through noisy job boards." },
  { icon: ShieldCheck, title: "Student-first guidance", text: "Access clear eligibility, deadlines, and application links designed for ambitious high school and college students." },
  { icon: Globe2, title: "Global partner network", text: "Connect with international organizations, student communities, and professional development partners." },
  { icon: BookOpen, title: "Research publication pathways", text: "Explore research publication opportunities through Synthica and build academic credibility early." },
];

const partners = ["Synthica", "CYMA", "ViraHacks", "Startup Labs", "Global Youth Network", "STEM Bridge"];
const featured = internships.filter((item) => item.featured).slice(0, 3);

const Index = () => (
  <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
    <Navbar />
    <main>
      <section className="relative px-6 pb-20 pt-16 md:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.20),transparent_32%),linear-gradient(135deg,#f8fbff_0%,#eef6ff_48%,#ffffff_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles className="h-4 w-4" /> Student-led opportunity platform
            </div>
            <h1 className="text-5xl font-black tracking-tight text-slate-950 md:text-7xl">InternBridge</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">Bridging ambitious students to real-world opportunities through internships, research, career development programs, and professional growth resources.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/internships" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700">Explore opportunities <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/register" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-900 shadow-sm transition hover:border-blue-200 hover:text-blue-700">Join the community</Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-2xl shadow-blue-950/10 backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
              <div className="mb-6 flex items-center justify-between"><span className="text-sm font-semibold text-blue-200">Opportunity Dashboard</span><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">Live</span></div>
              <div className="space-y-3">{featured.map((item) => <div key={item.id} className="rounded-2xl border border-white/10 bg-white/10 p-4"><div className="flex items-start justify-between gap-3"><div><p className="font-bold">{item.name}</p><p className="mt-1 text-sm text-slate-300">{item.location} • {item.grade}</p></div><span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-100">{item.field}</span></div></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10"><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">{metrics.map(([number, label]) => <div key={label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="text-3xl font-black text-blue-600">{number}</div><p className="mt-2 text-sm font-medium text-slate-600">{label}</p></div>)}</div></section>

      <section className="px-6 py-16"><div className="mx-auto max-w-7xl"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="font-bold uppercase tracking-widest text-blue-600">Featured opportunities</p><h2 className="mt-2 text-3xl font-black md:text-4xl">Launch your next step</h2></div><Link to="/internships" className="hidden font-bold text-blue-700 md:inline-flex">View all internships →</Link></div><div className="grid gap-5 md:grid-cols-3">{featured.map((item) => <article key={item.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><Briefcase className="mb-5 h-9 w-9 text-blue-600" /><h3 className="text-xl font-black">{item.name}</h3><p className="mt-2 text-slate-600">{item.location} • Deadline: {item.deadline}</p><p className="mt-4 text-sm font-semibold text-slate-500">Eligibility: {item.grade}</p></article>)}</div></div></section>

      <section className="bg-white px-6 py-16"><div className="mx-auto max-w-7xl"><p className="text-center font-bold uppercase tracking-widest text-blue-600">Partner organizations</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">{partners.map((partner) => <div key={partner} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-6 text-center font-black text-slate-700"><Building2 className="mx-auto mb-3 h-6 w-6 text-blue-600" />{partner}</div>)}</div></div></section>

      <section className="px-6 py-20"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">{benefits.map((benefit) => <div key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><benefit.icon className="mb-5 h-9 w-9 text-blue-600" /><h3 className="text-lg font-black">{benefit.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{benefit.text}</p></div>)}</div></section>

      <section className="px-6 pb-24"><div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12"><div className="grid gap-8 md:grid-cols-[1fr_auto]"><div><h2 className="text-3xl font-black md:text-5xl">Ready to bridge ambition with action?</h2><p className="mt-4 max-w-2xl text-slate-300">Create a profile, discover aligned opportunities, or partner with InternBridge to reach driven students.</p></div><div className="flex flex-col justify-center gap-3 sm:flex-row md:flex-col"><Link to="/register" className="rounded-xl bg-blue-600 px-6 py-3.5 text-center font-bold text-white">Register</Link><Link to="/partnerships" className="rounded-xl bg-white px-6 py-3.5 text-center font-bold text-slate-950">Partner with us</Link></div></div></div></section>
    </main>
  </div>
);

export default Index;
