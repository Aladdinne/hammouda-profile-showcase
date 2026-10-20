import { createContext, useContext, type ReactNode } from 'react';

export type Language = 'fr' | 'en';
export const PortfolioLanguage = createContext<Language>('fr');
export function usePortfolioText() {
  const language = useContext(PortfolioLanguage);
  return (fr: string, en: string) => language === 'fr' ? fr : en;
}

/** Même principe que usePortfolioText, mais accepte du texte avec liens (ReactNode). */
export function usePortfolioNode() {
  const language = useContext(PortfolioLanguage);
  return (fr: ReactNode, en: ReactNode) => (language === 'fr' ? fr : en);
}
