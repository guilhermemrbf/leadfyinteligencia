import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeLines = [
  { text: "// 🤖 IA criando seu app...", color: "text-muted-foreground" },
  { text: 'import { App } from "leadfy-ai"', color: "text-primary" },
  { text: "", color: "" },
  { text: "const meuApp = App.criar({", color: "text-foreground" },
  { text: '  nicho: "Restaurantes",', color: "text-accent" },
  { text: '  tipo: "Cardápio Digital",', color: "text-accent" },
  { text: "  valor: 4500,", color: "text-primary" },
  { text: "})", color: "text-foreground" },
  { text: "", color: "" },
  { text: "// ✅ App pronto em 3 minutos!", color: "text-primary" },
  { text: "// 💰 Vendido por R$ 4.500", color: "text-accent" },
  { text: 'meuApp.publicar("producao")', color: "text-foreground" },
];

const AICodeAnimation = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeLines.length) {
      const reset = setTimeout(() => setVisibleLines(0), 3000);
      return () => clearTimeout(reset);
    }
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 400);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="glass-card p-4 md:p-6 rounded-xl border border-primary/20 font-mono text-xs md:text-sm overflow-hidden relative">
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="text-muted-foreground text-[10px] ml-2">leadfy-ai-builder.ts</span>
      </div>

      <div className="space-y-1 min-h-[200px] md:min-h-[260px]">
        <AnimatePresence>
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <span className="text-muted-foreground/40 w-5 text-right select-none text-[10px]">
                {i + 1}
              </span>
              <span className={line.color}>{line.text}</span>
              {i === visibleLines - 1 && (
                <motion.span
                  className="inline-block w-2 h-4 bg-primary"
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="mt-4 pt-3 border-t border-border/30">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
          <span>Progresso da criação</span>
          <span>{Math.round((visibleLines / codeLines.length) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            animate={{ width: `${(visibleLines / codeLines.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AICodeAnimation;
