import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ExternalLink, Handshake } from "lucide-react";
import cymaLogo from "@/assets/cyma-logo.jpeg.asset.json";
import virahacksLogo from "@/assets/virahacks-logo.png.asset.json";

type Partner = {
  name: string;
  tagline: string;
  description: string;
  url?: string;
  logo?: string;
  initials: string;
  accent: string;
};

const partners: Partner[] = [
  {
    name: "CYMA",
    tagline: "Innovation & Internship Sponsor",
    description:
      "CYMA partners with InternBridge to offer hands-on internships for high school students, giving them real-world experience working alongside an innovative team while building skills that matter for their futures.",
    logo: cymaLogo.url,
    initials: "CY",
    accent: "from-blue-500/10 via-indigo-500/10",
  },
  {
    name: "Caivo",
    tagline: "Career Discovery Platform",
    description:
      "Caivo helps students explore career pathways and connects them to mentors across industries. Together we're making it easier for ambitious students to translate curiosity into concrete next steps.",
    initials: "CA",
    accent: "from-purple-500/10 via-fuchsia-500/10",
  },
  {
    name: "YRI Fellowship",
    tagline: "Youth Research Initiative",
    description:
      "The YRI Fellowship trains the next generation of student researchers, pairing fellows with academic mentors on original projects. InternBridge surfaces YRI cohorts to a wider community of high-school researchers.",
    initials: "YR",
    accent: "from-emerald-500/10 via-teal-500/10",
  },
  {
    name: "Vira",
    tagline: "Healthcare Hackathon Network",
    description:
      "Vira (Virahacks) builds chapter-based healthcare hackathons for high-school students. With 21+ chapters and 300+ participants, Vira gives InternBridge users a hands-on entry point into health innovation.",
    url: "https://www.virahacks.com/",
    logo: virahacksLogo.url,
    initials: "VR",
    accent: "from-teal-500/10 via-emerald-500/10",
  },
  {
    name: "NSRI",
    tagline: "National Student Research Institute",
    description:
      "NSRI mentors high-school students through publishable research and competitions. Together we connect students with the research opportunities, labs, and mentors that turn ideas into measurable impact.",
    initials: "NS",
    accent: "from-orange-500/10 via-amber-500/10",
  },
];

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 mb-5">
            <Handshake className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Partnerships
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-5">
            Built with our <span className="text-primary">partners</span>.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            InternBridge collaborates with organizations that share our mission: opening doors
            for high-school students. Meet the partners powering our opportunities, programs,
            and community.
          </p>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-5">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`relative bg-gradient-to-br ${p.accent} to-background border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow overflow-hidden`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-background/70 border border-border flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {p.logo ? (
                    <img src={p.logo} alt={`${p.name} logo`} className="w-full h-full object-contain p-1.5" />
                  ) : (
                    <span className="text-xl font-black text-foreground">{p.initials}</span>
                  )}
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-foreground leading-tight">{p.name}</h2>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">
                    {p.tagline}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {p.description}
              </p>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Visit {p.name}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-10 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Want to partner with InternBridge?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            We work with mission-aligned organizations to bring more opportunities to high-school
            students everywhere. Reach out and let's build something together.
          </p>
          <a
            href="mailto:hello@internbridge.app"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Partnerships;
