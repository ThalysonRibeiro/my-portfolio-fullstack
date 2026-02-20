"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import content from "@/utils/content.json";
import { useLanguageStore } from "@/store/language-store";

export function CookieConsent() {
  const { lang } = useLanguageStore();
  const [showWarning, setShowWarning] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      requestAnimationFrame(() => setShowWarning(true));
    }
    const open = () => setShowWarning(true);
    window.addEventListener("openCookieConsent", open);
    return () => {
      window.removeEventListener("openCookieConsent", open);
    };
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("cookieConsent", accepted ? "accepted" : "declined");
    setShowWarning(false);

    // Dispara evento para o GoogleAnalytics carregar
    window.dispatchEvent(new Event("cookieConsentUpdate"));
  };

  if (!showWarning) return null;
  return (
    <Card className="fixed bottom-2 left-2 max-w-sm z-50">
      <CardContent>
        <p className="text-muted-foreground">{content.cookieConsent.message[lang]}</p>
      </CardContent>
      <CardFooter className="flex items-center">
        <Button variant="link" size="sm" className="mr-auto text-xs">
          <Link href="/privacy-policy">{content.cookieConsent.privacy[lang]}</Link>
        </Button>
        <Button
          className="ml-auto cursor-pointer"
          size="sm"
          variant="ghost"
          onClick={() => handleConsent(false)}
        >
          {content.cookieConsent.decline[lang]}
        </Button>
        <Button
          className="ml-auto cursor-pointer"
          size="sm"
          variant="secondary"
          onClick={() => handleConsent(true)}
        >
          {content.cookieConsent.accept[lang]}
        </Button>
      </CardFooter>
    </Card>
  );
}
