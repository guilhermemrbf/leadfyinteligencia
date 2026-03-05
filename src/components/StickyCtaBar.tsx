import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const StickyCtaBar = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-primary/20 py-3 px-4"
        >
          <div className="container max-w-5xl mx-auto flex items-center justify-between gap-3">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold">
                🔥 <span className="text-primary">Oferta por tempo limitado</span> — Garanta seu acesso antes que acabe
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href="#preco"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-6 py-2.5 rounded-lg glow-primary-sm hover:brightness-110 active:scale-[0.98] transition-all"
              >
                GARANTIR VAGA
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setDismissed(true)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCtaBar;
