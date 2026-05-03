import { useEffect, useState } from "react";
import { Accessibility, X, Plus, Minus, Palette, Link2 } from "lucide-react";

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [invertColors, setInvertColors] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale * 100}%`;
  }, [fontScale]);

  useEffect(() => {
    document.body.style.filter = invertColors ? "invert(1) hue-rotate(180deg)" : "";
  }, [invertColors]);

  useEffect(() => {
    const id = "a11y-link-style";
    let el = document.getElementById(id) as HTMLStyleElement | null;
    if (highlightLinks) {
      if (!el) {
        el = document.createElement("style");
        el.id = id;
        el.textContent = `a { text-decoration: underline !important; outline: 2px dashed hsl(var(--secondary)) !important; outline-offset: 2px; }`;
        document.head.appendChild(el);
      }
    } else if (el) el.remove();
  }, [highlightLinks]);

  return (
    <>
      <button
        type="button"
        aria-label="Abrir opções de acessibilidade"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{ position: "fixed", bottom: "96px", right: "24px", width: "48px", height: "48px" }}
        className="z-40 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft hover:scale-110 transition"
      >
        <Accessibility />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Opções de acessibilidade"
          style={{ position: "fixed", bottom: "160px", right: "24px", width: "288px" }}
          className="z-40 rounded-2xl border border-border bg-card p-4 shadow-soft"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-primary">Acessibilidade</h3>
            <button onClick={() => setOpen(false)} aria-label="Fechar"><X className="h-4 w-4" /></button>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span>Tamanho do texto</span>
              <div className="flex items-center gap-2">
                <button aria-label="Diminuir texto" onClick={() => setFontScale((s) => Math.max(0.8, s - 0.1))} className="rounded bg-muted p-1"><Minus className="h-3 w-3" /></button>
                <span className="w-10 text-center font-mono">{Math.round(fontScale * 100)}%</span>
                <button aria-label="Aumentar texto" onClick={() => setFontScale((s) => Math.min(1.5, s + 0.1))} className="rounded bg-muted p-1"><Plus className="h-3 w-3" /></button>
              </div>
            </div>
            <label className="flex items-center justify-between">
              <span className="flex items-center gap-2"><Palette className="h-4 w-4" /> Inverter cores</span>
              <input type="checkbox" checked={invertColors} onChange={(e) => setInvertColors(e.target.checked)} className="h-5 w-5 accent-primary" />
            </label>
            <label className="flex items-center justify-between">
              <span className="flex items-center gap-2"><Link2 className="h-4 w-4" /> Destacar links</span>
              <input type="checkbox" checked={highlightLinks} onChange={(e) => setHighlightLinks(e.target.checked)} className="h-5 w-5 accent-primary" />
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityWidget;
