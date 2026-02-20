"use client";

import { motion } from "framer-motion";
import content from "@/utils/content.json";
import { useLanguageStore } from "@/store/language-store";

export function TechnicalDecisions() {
  const { lang } = useLanguageStore();
  return (
    <section className="transition-all duration-300 py-24 px-4 bg-zinc-950/20 border-y border-white/5 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            {content.technicalDecisions.title[lang]}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {content.technicalDecisions.description[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.technicalDecisions.decisions.map((decision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-300 relative"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {decision.title[lang]}
              </h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                {decision.description[lang]}
              </p>

              <div className="space-y-4 p-5 bg-black/40 border border-white/5 transition-colors group-hover:border-primary/10">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 uppercase tracking-widest font-bold whitespace-pre-line">
                    {content.technicalDecisions.labels.before[lang]}
                  </span>
                  <span className="text-zinc-400 font-medium text-right whitespace-pre-line">
                    {decision.before[lang]}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-4">
                  <span className="text-zinc-500 uppercase tracking-widest font-bold whitespace-pre-line">
                    {content.technicalDecisions.labels.after[lang]}
                  </span>
                  <span className="text-primary font-semibold text-sm text-right whitespace-pre-line">
                    {decision.after[lang]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
