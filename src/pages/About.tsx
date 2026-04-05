import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Compass } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const values = [
  {
    icon: Target,
    title: "Curated Quality",
    description: "Every opportunity is hand-picked and verified, ensuring students access only the best internships.",
  },
  {
    icon: Users,
    title: "Student-First",
    description: "Built specifically for high school students, our platform understands your unique needs and ambitions.",
  },
  {
    icon: Compass,
    title: "Career Discovery",
    description: "Explore 50+ fields from STEM to arts, helping you discover passions before choosing a college path.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">About Us</p>
          <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight mb-4">
            Bridging Students<br />
            <span className="text-primary">to Opportunity</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            InternBridge is a curated directory of high school internship opportunities. We believe every student deserves access to real-world experience that shapes their future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-6 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <v.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-foreground text-background rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="max-w-2xl mx-auto text-background/70 mb-8">
            We're on a mission to democratize access to career-building experiences. No matter your background, zip code, or connections — the right internship is out there for you.
          </p>
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Start Exploring
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
