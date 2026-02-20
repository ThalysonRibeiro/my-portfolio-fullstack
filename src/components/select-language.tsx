"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Lang, useLanguageStore } from "@/store/language-store";

export function SelectLanguage() {
  const { lang, setLang } = useLanguageStore();
  return (
    <Select value={lang} onValueChange={(value) => setLang(value as Lang)}>
      <SelectTrigger className="max-w-36 w-fif min-h-12 border-l-0 border-b-0">
        <SelectValue placeholder="PT-BR" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ptBR">PT-BR</SelectItem>
        <SelectItem value="en">EN</SelectItem>
      </SelectContent>
    </Select>
  );
}
