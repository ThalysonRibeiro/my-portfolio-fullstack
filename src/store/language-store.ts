"use client";

import { create } from "zustand";

export type Lang = "ptBR" | "en";

type LanguageState = {
  lang: Lang;
  hydrated: boolean;
  hydrate: () => void;
  setLang: (lang: Lang) => void;
};

const KEY = "portfolio-language";

export const useLanguageStore = create<LanguageState>((set, get) => ({
  lang: "ptBR",
  hydrated: false,

  hydrate: () => {
    if (get().hydrated) return;
    const stored = (localStorage.getItem(KEY) as Lang | null) ?? "ptBR";
    set({ lang: stored, hydrated: true });
  },

  setLang: (lang) => {
    localStorage.setItem(KEY, lang);
    set({ lang });
  }
}));
