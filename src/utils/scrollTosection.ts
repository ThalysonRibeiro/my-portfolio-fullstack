type scrollTypes = "instant" | "smooth";

export const scrollToSection = (id: string, scrollMod: scrollTypes = "smooth") => {
  if (typeof window !== "undefined") {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: scrollMod });
    }
  }
}