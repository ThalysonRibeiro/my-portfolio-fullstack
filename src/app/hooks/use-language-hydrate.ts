"use client";

import { useLanguageStore } from "@/store/language-store";
import { useEffect } from "react";

export function useLanguageHydrate() {
  const hydrate = useLanguageStore((s) => s.hydrate);
  useEffect(() => hydrate(), [hydrate]);
}
