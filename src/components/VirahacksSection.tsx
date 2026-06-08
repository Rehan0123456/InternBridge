import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const STORAGE_KEY = "virahacks_sponsored_dismissed";

const VirahacksSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) !== "1") setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  const handleClick = () => {
    console.log("Virahacks clicked");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="px-6 pt-4"
        >
          <div className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-background p-6 md:p-8 shadow-sm">
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="absolute top-3 right-3 p-1.5 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl md:text-3xl font-black text-emerald-400 tracking-tighter">
                  VH
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                  Partner Opportunity
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
                  Featured Opportunity with Virahacks
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2 max-w-2xl">
                  The infrastructure layer for high-school healthcare innovation — localized hackathons that solve real clinical challenges. Join 326+ participants across 21 chapter nodes and build impactful solutions in a student-run environment.
                </p>
                <p className="text-xs text-muted-foreground/80 font-medium">
                  Powered by Virahacks × InternBridge
                </p>
              </div>

              <div className="md:flex-shrink-0">
                <a
                  href="https://www.virahacks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-emerald-500 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default VirahacksSection;
