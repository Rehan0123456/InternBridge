import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { internships, fieldColors } from "@/data/internships";

const featured = internships.filter((i) => i.featured);

const FeaturedSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">
          Trending Now
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-10">Featured Opportunities</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-5 hover:shadow-lg transition-shadow group"
            >
              <span
                className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold mb-3 ${
                  fieldColors[item.field] || "bg-secondary text-secondary-foreground"
                }`}
              >
                {item.field}
              </span>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.deadline}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
