import { motion } from "framer-motion";

const stats = [
  { value: "225+", label: "Opportunities" },
  { value: "50+", label: "Fields" },
  { value: "100+", label: "Locations" },
  { value: "HS", label: "Grade Level" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-black text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
