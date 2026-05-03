import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Prefs = { functional: true; preferences: boolean; statistics: boolean; marketing: boolean };
const KEY = "osa-cookie-consent";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ functional: true, preferences: false, statistics: false, marketing: false });

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setOpen(true);
  }, []);

  const save = (p: Prefs) => {
    localStorage.setItem(KEY, JSON.stringify({ ...p, ts: Date.now() }));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div role="dialog" aria-labelledby="cc-title" aria-describedby="cc-desc"
      className="fixed inset-x-2 bottom-2 z-50 mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-soft md:inset-x-auto md:right-6 md:left-auto">
      <div className="flex items-start justify-between gap-4">
        <h2 id="cc-title" className="text-lg font-bold text-primary">Gerenciar o consentimento</h2>
        <button aria-label="Fechar" onClick={() => save({ functional: true, preferences: false, statistics: false, marketing: false })} className="rounded p-1 hover:bg-muted">
          <X className="h-4 w-4" />
        </button>
      </div>
      <p id="cc-desc" className="mt-2 text-sm text-muted-foreground">
        Para fornecer as melhores experiências, usamos tecnologias como cookies para armazenar e/ou acessar
        informações do dispositivo. Não consentir pode afetar negativamente certos recursos.
      </p>

      {showPrefs && (
        <div className="mt-4 space-y-2 rounded-lg bg-muted/50 p-4 text-sm">
          {([
            { k: "functional", label: "Funcional", desc: "Estritamente necessário.", locked: true },
            { k: "preferences", label: "Preferências", desc: "Armazenar preferências do usuário.", locked: false },
            { k: "statistics", label: "Estatísticas", desc: "Uso anônimo para fins estatísticos.", locked: false },
            { k: "marketing", label: "Marketing", desc: "Perfis de usuário para publicidade.", locked: false },
          ] as const).map((c) => (
            <label key={c.k} className="flex items-start justify-between gap-3 py-1">
              <span>
                <span className="font-semibold text-primary">{c.label}</span>
                <span className="block text-xs text-muted-foreground">{c.desc}</span>
              </span>
              <input
                type="checkbox"
                disabled={c.locked}
                checked={c.locked ? true : (prefs as any)[c.k]}
                onChange={(e) => setPrefs((p) => ({ ...p, [c.k]: e.target.checked }))}
                className="mt-1 h-5 w-5 accent-primary"
              />
            </label>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={() => save({ functional: true, preferences: true, statistics: true, marketing: true })}
          className="flex-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
          Aceitar
        </button>
        <button onClick={() => save({ functional: true, preferences: false, statistics: false, marketing: false })}
          className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-primary hover:bg-muted">
          Negar
        </button>
        {!showPrefs ? (
          <button onClick={() => setShowPrefs(true)} className="flex-1 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground hover:opacity-90">
            Ver preferências
          </button>
        ) : (
          <button onClick={() => save(prefs)} className="flex-1 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground hover:opacity-90">
            Salvar preferências
          </button>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
