import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { categories, internships } from "@/data/internships";
import heroBg from "@/assets/hero-bg.jpg";

const categoryColors = [
  "bg-emerald-100 text-emerald-700",
  "bg-secondary text-secondary-foreground",
  "bg-purple-100 text-purple-700",
  "bg-accent/30 text-accent-foreground",
  "bg-sky-100 text-sky-700",
  "bg-primary/10 text-primary",
  "bg-rose-100 text-rose-700",
  "bg-orange-100 text-orange-700",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground mb-6">
            <Sparkles className="w-4 h-4" />
            {internships.length}+ Opportunities Live
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            Your Trajectory<br />
            <span className="text-primary">Starts Here</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Discover amazing internship opportunities across STEM, law, arts,
            business, and more. Built for high school students ready to make an impact.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              to="/internships"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Explore Internships
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-background border border-border text-foreground px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-secondary transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[i % categoryColors.length]}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
