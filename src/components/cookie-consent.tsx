"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";

export function CookieConsent() {
  const [showWarning, setShowWarning] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      requestAnimationFrame(() => setShowWarning(true));
    }
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
        <p className="text-muted-foreground">
          Coletamos cookies analíticos apenas para melhorar sua experiência.
        </p>
      </CardContent>
      <CardFooter className="flex items-center">
        <Button variant="link" size="sm" className="mr-auto text-xs">
          <Link href="/privacy-policy">Política de Privacidade</Link>
        </Button>
        <Button
          className="ml-auto cursor-pointer"
          size="sm"
          variant="ghost"
          onClick={() => handleConsent(false)}
        >
          Excluir
        </Button>
        <Button
          className="ml-auto cursor-pointer"
          size="sm"
          variant="secondary"
          onClick={() => handleConsent(true)}
        >
          Aceitar
        </Button>
      </CardFooter>
    </Card>
  );
}
