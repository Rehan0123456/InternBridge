import { motion } from "framer-motion";
import { Users, MessagesSquare, GraduationCap } from "lucide-react";

const groups = [
  { emoji: "💼", label: "Business & Startups", members: "8,420" },
  { emoji: "💻", label: "Technology", members: "12,150" },
  { emoji: "🩺", label: "Healthcare", members: "6,730" },
  { emoji: "⚙️", label: "Engineering", members: "7,890" },
  { emoji: "🔬", label: "Research", members: "5,410" },
  { emoji: "🚀", label: "Entrepreneurship", members: "9,230" },
];

const pillars = [
  { icon: Users, title: "Student Directory", desc: "Discover peers by school, interest, and goals." },
  { icon: GraduationCap, title: "Mentorship Hub", desc: "Connect with mentors who've been there." },
  { icon: MessagesSquare, title: "Discussion Forums", desc: "Ask, share wins, and trade application tips." },
];

const CommunitySection = () => {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-mono tracking-widest text-primary uppercase mb-2">
            Community
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            A movement, not a marketplace
          </h2>
          <p className="text-muted-foreground">
            Join interest groups, find mentors, and build your network.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-background border border-border rounded-2xl p-5"
              >
                <Icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {groups.map((g, i) => (
            <motion.button
              key={g.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="bg-background border border-border rounded-xl p-4 text-left hover:border-primary hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-2">{g.emoji}</div>
              <div className="font-semibold text-sm text-foreground">{g.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{g.members} members</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
