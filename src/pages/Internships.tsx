import { useState, useMemo } from "react";
import { Search, ExternalLink, MapPin, Calendar, Tag, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { internships, fieldColors } from "@/data/internships";

const Internships = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return internships;
    const q = query.toLowerCase();
    return internships.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.field.toLowerCase().includes(q) ||
        i.location.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">
            High School Internships
          </h1>
          <p className="text-muted-foreground">
            Discover amazing internship opportunities across STEM, law, arts, business, and more
          </p>
          <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1.5">
            <GraduationCap className="w-4 h-4" />
            {filtered.length} of {internships.length} opportunities
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, field, or location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-card border border-border rounded-2xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="space-y-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="bg-card border border-border rounded-2xl p-5 flex items-start justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-base font-bold text-foreground">{item.name}</h3>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                      fieldColors[item.field] || "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <Tag className="w-3 h-3" />
                    {item.field}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {item.deadline}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">Grade: {item.grade}</p>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Learn More
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internships;
