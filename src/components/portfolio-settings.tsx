import { createContext, useContext } from 'react';

export type Language = 'fr' | 'en';
export const PortfolioLanguage = createContext<Language>('fr');
export function usePortfolioText() {
  const language = useContext(PortfolioLanguage);
  return (fr: string, en: string) => language === 'fr' ? fr : en;
}