"use client";
import { useEffect, useState } from "react";
import { AnimatedNumber } from "./animated-number";

type Stats = {
  totalRepos: number;
  totalCommits: number;
  totalPRs: number;
  totalStars: number;
};

export function GithubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/github");
        const json = await res.json();
        setStats(json.data);
      } catch (e) {
        console.error("Erro ao carregar stats:", e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <div>Carregando estatísticas...</div>;
  if (!stats) return <div>Erro ao carregar dados do GitHub.</div>;

  return (
    <div className="flex flex-wrap gap-4 max-w-md mx-auto">
      <StatBox label="Repositórios" value={stats.totalRepos} />
      <StatBox label="Commits" value={stats.totalCommits} />
      <StatBox label="Pull Requests" value={stats.totalPRs} />
      <StatBox label="Stars" value={stats.totalStars} />
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-2 rounded-xl text-center">
      <AnimatedNumber value={value} />
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
