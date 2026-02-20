"use client";

import { useLanguageStore } from "@/store/language-store";
import content from "@/utils/content.json";

export default function PrivacyPolicyPage() {
  const { lang } = useLanguageStore();
  const t = content.privacyPolicy;

  if (!t) return null;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{t.header.title[lang]}</h1>
        <p className="text-muted-foreground">
          {t.header.lastUpdate[lang]}:{" "}
          {new Date().toLocaleDateString(lang === "ptBR" ? "pt-BR" : "en-US")}
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.sections.overview.title[lang]}</h2>
        <p className="text-muted-foreground">{t.sections.overview.content[lang]}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.sections.dataCollected.title[lang]}</h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-medium">{t.sections.dataCollected.providedByYou.title[lang]}</h3>
            <p className="text-muted-foreground">
              {t.sections.dataCollected.providedByYou.content[lang]}
            </p>
          </div>
          <div>
            <h3 className="font-medium">{t.sections.dataCollected.usageMetrics.title[lang]}</h3>
            <p className="text-muted-foreground">
              {t.sections.dataCollected.usageMetrics.content[lang]}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.sections.howWeUse.title[lang]}</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          {t.sections.howWeUse.items.map((item, index) => (
            <li key={index}>{item[lang]}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.sections.dataSharing.title[lang]}</h2>
        <p className="text-muted-foreground">{t.sections.dataSharing.content[lang]}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.sections.yourRights.title[lang]}</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          {t.sections.yourRights.items.map((item, index) => (
            <li key={index}>{item[lang]}</li>
          ))}
        </ul>
      </section>

      <section id="cookies" className="space-y-4">
        <h2 className="text-xl font-semibold">{t.sections.cookiePolicy.title[lang]}</h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-medium">{t.sections.cookiePolicy.whatAre.title[lang]}</h3>
            <p className="text-muted-foreground">{t.sections.cookiePolicy.whatAre.content[lang]}</p>
          </div>
          <div>
            <h3 className="font-medium">{t.sections.cookiePolicy.consent.title[lang]}</h3>
            <p className="text-muted-foreground">{t.sections.cookiePolicy.consent.content[lang]}</p>
          </div>
          <div>
            <h3 className="font-medium">{t.sections.cookiePolicy.googleAnalytics.title[lang]}</h3>
            <p className="text-muted-foreground">
              {t.sections.cookiePolicy.googleAnalytics.content[lang]}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.sections.retention.title[lang]}</h2>
        <p className="text-muted-foreground">{t.sections.retention.content[lang]}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.sections.contact.title[lang]}</h2>
        <p className="text-muted-foreground">
          {t.sections.contact.content[lang]}
          <span className="font-medium"> rafinha.head@gmail.com</span>.
        </p>
      </section>
    </main>
  );
}
