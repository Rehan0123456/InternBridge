import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import cymaLogo from "@/assets/cyma-logo.jpeg.asset.json";

const STORAGE_KEY = "cyma_sponsored_dismissed";

const SponsoredSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) !== "1") setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  const handleClick = () => {
    console.log("Cyma internship clicked");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="px-6 pt-6"
        >
          <div className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-accent/20 to-background p-6 md:p-8 shadow-sm">
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="absolute top-3 right-3 p-1.5 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <img
                src={cymaLogo.url}
                alt="CYMA logo"
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-contain bg-background/50 p-1 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 bg-primary/15 text-primary rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Opportunity
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
                  Featured Internship Opportunity with CYMA
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2 max-w-2xl">
                  Gain hands-on experience working with an innovative team while building valuable professional skills. Apply today to take the next step in your career journey.
                </p>
                <p className="text-xs text-muted-foreground/80 font-medium">
                  Powered by Cyma × InternBridge
                </p>
              </div>

              <div className="md:flex-shrink-0">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeEYfjnnL2RJmKLIMbYwoUmaKWqo3lrwoApOearUmiVx9JVMA/viewform?urp=gmail_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity"
                >
                  Apply Now
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

export default SponsoredSection;
