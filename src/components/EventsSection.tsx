import { motion } from "framer-motion";
import { Users2, ArrowRight } from "lucide-react";

const events = [
  { month: "Jun", day: "23", type: "Webinar", title: "How to Land a Tech Internship in High School", when: "Jun 23 · 5:00 PM PT", rsvp: "1,240" },
  { month: "Jun", day: "26", type: "Networking", title: "Student Founders Networking Night", when: "Jun 26 · 6:30 PM PT", rsvp: "540" },
  { month: "Jul", day: "01", type: "Workshop", title: "Crafting a Standout Research Application", when: "Jul 1 · 4:00 PM PT", rsvp: "870" },
  { month: "Jul", day: "14", type: "Conference", title: "National Student Leadership Conference", when: "Jul 14 · 9:00 AM PT", rsvp: "3,200" },
];

const typeColors: Record<string, string> = {
  Webinar: "bg-sky-100 text-sky-700",
  Networking: "bg-purple-100 text-purple-700",
  Workshop: "bg-emerald-100 text-emerald-700",
  Conference: "bg-orange-100 text-orange-700",
};

const EventsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-mono tracking-widest text-primary uppercase mb-2">
              Events
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Learn live, together
            </h2>
            <p className="text-muted-foreground">
              Webinars, networking nights, workshops, and conferences.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Full calendar <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-5 flex items-center gap-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-16 text-center bg-secondary rounded-xl py-3">
                <div className="text-xs font-bold text-muted-foreground uppercase">{e.month}</div>
                <div className="text-2xl font-black text-foreground leading-none">{e.day}</div>
              </div>
              <div className="flex-1 min-w-0">
                <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mb-2 ${typeColors[e.type] || "bg-secondary"}`}>
                  {e.type}
                </span>
                <h3 className="font-bold text-foreground leading-snug mb-1 truncate">{e.title}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{e.when}</span>
                  <span className="flex items-center gap-1">
                    <Users2 className="w-3 h-3" />
                    {e.rsvp}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
