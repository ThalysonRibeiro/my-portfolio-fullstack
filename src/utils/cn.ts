import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge"; // opcional, veja abaixo

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs)); // se usar tailwind-merge, senão: return clsx(...inputs);
}
