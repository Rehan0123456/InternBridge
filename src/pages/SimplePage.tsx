import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Briefcase, CheckCircle2, FlaskConical, Handshake, Mail, Rocket, Users } from "lucide-react";
import Navbar from "@/components/Navbar";

type PageContent = { eyebrow: string; title: string; text: string; cards: [LucideIcon, string, string][] };

const content: Record<string, PageContent> = {
  about: {
    eyebrow: "About InternBridge",
    title: "A student-led bridge between talent and opportunity.",
    text: "InternBridge helps ambitious students discover internships, research experiences, career programs, and growth resources with a polished platform built around access, clarity, and momentum.",
    cards: [[Users, "Student powered", "Led by students who understand the challenge of finding credible early-career opportunities."], [Rocket, "Career acceleration", "We help students build experience, confidence, and professional direction before college and beyond."], [CheckCircle2, "Curated quality", "Opportunities are organized by eligibility, category, deadlines, and direct application paths."]],
  },
  partnerships: {
    eyebrow: "Partnerships",
    title: "Collaborate with InternBridge to reach motivated students.",
    text: "Organizations can partner through cross-promotion, student opportunities, workshops, career resources, mentorship programs, and community campaigns.",
    cards: [[Handshake, "Cross-promotion", "Share programs with the InternBridge community and co-market high-value student resources."], [Briefcase, "Student opportunities", "List internships, ambassador roles, volunteer programs, challenges, and fellowships."], [Mail, "Workshops & resources", "Host resume sessions, industry panels, application clinics, and career readiness events."]],
  },
  research: {
    eyebrow: "Research Opportunities",
    title: "Turn curiosity into credible research experience.",
    text: "InternBridge highlights student research pathways, mentor-led projects, labs, writing programs, and research publication opportunities through Synthica.",
    cards: [[FlaskConical, "Research programs", "Explore lab, virtual, and independent research opportunities across STEM, humanities, and policy."], [CheckCircle2, "Publication readiness", "Build abstracts, posters, papers, and professional research portfolios."], [Handshake, "Synthica pathway", "Access publication-oriented opportunities and academic growth resources through Synthica."]],
  },
  join: {
    eyebrow: "Join Our Team",
    title: "Help build the student opportunity network.",
    text: "Join InternBridge as a researcher, outreach lead, designer, developer, content strategist, or partnerships coordinator and make opportunity more accessible.",
    cards: [[Users, "Community team", "Support student onboarding, events, and peer-to-peer growth."], [Briefcase, "Opportunity research", "Find and organize internships, programs, grants, competitions, and research roles."], [Rocket, "Product & growth", "Improve platform experiences, campaigns, branding, and partner outreach."]],
  },
};

export type SimplePageKind = "about" | "partnerships" | "research" | "join";

const SimplePage = ({ kind }: { kind: SimplePageKind }) => {
  const page = content[kind];
  return <div className="min-h-screen bg-slate-50 text-slate-950"><Navbar /><main className="mx-auto max-w-7xl px-6 py-16"><section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-14"><p className="font-bold uppercase tracking-widest text-blue-600">{page.eyebrow}</p><h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">{page.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{page.text}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/register" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white">Get involved <ArrowRight className="h-4 w-4" /></Link><Link to="/partnerships" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 font-bold text-slate-800">Partner inquiry</Link></div></section><section className="mt-8 grid gap-5 md:grid-cols-3">{page.cards.map(([Icon, title, text]) => <article key={title as string} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><Icon className="mb-5 h-9 w-9 text-blue-600" /><h2 className="text-xl font-black">{title}</h2><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</section></main></div>;
};

export default SimplePage;
