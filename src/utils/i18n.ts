type Lang = "ptBR" | "en";
type I18nText = string | { ptBR: string; en: string };

export function translate(value: I18nText, lang: Lang) {
  if (typeof value === "string") return value;
  return value[lang] ?? value.ptBR;
}
