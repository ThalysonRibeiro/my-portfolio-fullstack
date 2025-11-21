"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    requestAnimationFrame(() => setConsentGiven(consent === "accepted"));

    // Escuta mudanças no localStorage (quando usuário aceitar)
    const handleStorage = () => {
      const updated = localStorage.getItem("cookieConsent");
      setConsentGiven(updated === "accepted");
    };

    window.addEventListener("storage", handleStorage);

    // Evento customizado para mesma aba
    window.addEventListener("cookieConsentUpdate", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("cookieConsentUpdate", handleStorage);
    };
  }, []);

  if (!consentGiven || !GA_TRACKING_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
