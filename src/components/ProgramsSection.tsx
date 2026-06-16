import { motion } from "framer-motion";
import { Rocket, FlaskConical, Crown, HeartHandshake } from "lucide-react";

const programs = [
  {
    icon: Rocket,
    stat: "82%",
    statLabel: "Placement rate",
    tag: "Land your first internship",
    title: "Internship Accelerator",
    desc: "A guided track that pairs students with companies, polishes their applications, and preps them for interviews.",
    accent: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: FlaskConical,
    stat: "450+",
    statLabel: "Mentors",
    tag: "Do real research",
    title: "Research Fellowship",
    desc: "Connect with university labs and mentors to work on publishable research alongside experts.",
    accent: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: Crown,
    stat: "12K",
    statLabel: "Graduates",
    tag: "Train future leaders",
    title: "Leadership Academy",
    desc: "Develop the communication, project, and team skills to lead chapters, clubs, and community initiatives.",
    accent: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    icon: HeartHandshake,
    stat: "1.2M",
    statLabel: "Service hours",
    tag: "Make change locally",
    title: "Community Impact Program",
    desc: "Find volunteer and nonprofit opportunities and track the measurable impact you create.",
    accent: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-mono tracking-widest text-primary uppercase mb-2">
            Programs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            More than a job board — a launchpad
          </h2>
          <p className="text-muted-foreground">
            Structured programs that take students from curious to accepted.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${p.accent}`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-black ${p.accent}`}>{p.stat}</div>
                    <div className="text-xs text-muted-foreground">{p.statLabel}</div>
                  </div>
                </div>
                <div className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-1">
                  {p.tag}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
