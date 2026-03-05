import { useState, useEffect } from "react";

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

  const progress = Math.round((visibleLines / codeLines.length) * 100);

  return (
    <div className="glass-card p-3 md:p-6 rounded-xl border border-primary/20 font-mono text-[11px] md:text-sm overflow-hidden relative">
      {/* Terminal header */}
      <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4 pb-2 md:pb-3 border-b border-border/30">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-destructive/60" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary/60" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-accent/60" />
        <span className="text-muted-foreground text-[9px] md:text-[10px] ml-1 md:ml-2">leadfy-ai-builder.ts</span>
      </div>

      <div className="space-y-0.5 md:space-y-1 min-h-[180px] md:min-h-[260px]">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 md:gap-2 animate-fade-up"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <span className="text-muted-foreground/40 w-4 md:w-5 text-right select-none text-[9px] md:text-[10px]">
              {i + 1}
            </span>
            <span className={line.color}>{line.text}</span>
            {i === visibleLines - 1 && (
              <span className="inline-block w-1.5 md:w-2 h-3.5 md:h-4 bg-primary animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-border/30">
        <div className="flex items-center justify-between text-[9px] md:text-[10px] text-muted-foreground mb-1">
          <span>Progresso da criação</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1 md:h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AICodeAnimation;
