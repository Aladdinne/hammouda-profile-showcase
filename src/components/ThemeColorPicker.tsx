import { useEffect, useRef, useState } from 'react';
import { Settings, X } from 'lucide-react';
import { usePortfolioText } from './portfolio-settings';

const colors = [
  { id: 'red', fr: 'Rouge', en: 'Red', h: '0 72% 51%' },
  { id: 'orange', fr: 'Orange', en: 'Orange', h: '32 95% 44%' },
  { id: 'teal', fr: 'Sarcelle', en: 'Teal', h: '173 80% 36%' },
  { id: 'blue', fr: 'Bleu', en: 'Blue', h: '221 83% 53%' },
  { id: 'slate', fr: 'Ardoise', en: 'Slate', h: '215 20% 40%' },
] as const;
type ColorId = typeof colors[number]['id'];

export default function ThemeColorPicker() {
  const t = usePortfolioText();
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<ColorId>(() => { try { return (localStorage.getItem('portfolio-color') as ColorId) || 'blue'; } catch { return 'blue'; } });
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.documentElement.dataset.themeColor = color;
    try { localStorage.setItem('portfolio-color', color); } catch { /* optional */ }
  }, [color]);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', close); document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, [open]);
  return (
    <div className="theme-picker" ref={ref}>
      <button type="button" className="theme-picker-toggle" aria-expanded={open} aria-label={t('Couleurs du thème', 'Theme colors')} onClick={() => setOpen(!open)}>
        {open ? <X size={20} /> : <Settings size={20} className="theme-picker-gear" />}
      </button>
      {open && <div className="theme-picker-panel" role="dialog" aria-label={t('Couleurs du thème', 'Theme colors')}>
        <p>{t('Couleurs du thème', 'Theme Colors')}</p>
        <div className="theme-picker-swatches">
          {colors.map(c => <button key={c.id} type="button" title={t(c.fr, c.en)} aria-label={t(c.fr, c.en)} aria-pressed={color === c.id} style={{ background: `hsl(${c.h})` }} onClick={() => setColor(c.id)} />)}
        </div>
      </div>}
    </div>
  );
}
