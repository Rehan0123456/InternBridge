import { motion } from "framer-motion";
import { internships, fieldColors } from "@/data/internships";

const placements = internships.slice(0, 10);

const LatestPlacements = () => {
  return (
    <section className="py-16 border-y border-border bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
              Latest Placements
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Where students are landing
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            LIVE
          </div>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {placements.map((p, i) => (
            <motion.li
              key={p.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-12 items-center gap-4 py-4 px-2 hover:bg-secondary/60 transition-colors group"
              >
                <span className="col-span-1 font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-6 md:col-span-5 font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {p.name}
                </span>
                <span className="col-span-3 hidden md:block">
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-semibold ${
                      fieldColors[p.field] || "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {p.field}
                  </span>
                </span>
                <span className="col-span-5 md:col-span-3 text-right text-xs text-muted-foreground truncate">
                  {p.location}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LatestPlacements;
