"use client";
import { useEffect, useState } from "react";
import { AnimatedNumber } from "./animated-number";
import { cn } from "@/utils/cn";
import { GitCommit, GitPullRequest, Star, FolderGit2 } from "lucide-react";
import content from "@/utils/content.json";
import { Lang } from "@/store/language-store";

type Stats = {
  totalRepos: number;
  totalCommits: number;
  totalPRs: number;
  totalStars: number;
};

export function GithubStats({ lang }: { lang: Lang }) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  const statsArray = [
    {
      value: stats?.totalRepos ?? 0,
      label: content.githubStats.repos[lang],
      icon: FolderGit2,
      color: "text-blue-400"
    },
    {
      value: stats?.totalCommits ?? 0,
      label: content.githubStats.commits[lang],
      icon: GitCommit,
      color: "text-emerald-400"
    },
    {
      value: stats?.totalPRs ?? 0,
      label: content.githubStats.prs[lang],
      icon: GitPullRequest,
      color: "text-purple-400"
    },
    {
      value: stats?.totalStars ?? 0,
      label: content.githubStats.stars[lang],
      icon: Star,
      color: "text-yellow-400"
    }
  ];

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/github", {
          cache: "force-cache",
          next: { revalidate: 86400 }
        });
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

  if (loading) {
    return (
      <div className="flex gap-8 animate-pulse opacity-50">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-10 w-24 bg-white/5 rounded-none" />
        ))}
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
      {statsArray.map((stat, index) => (
        <div key={index} className="flex items-center gap-3 group transition-all">
          <div
            className={cn(
              "p-2 bg-white/5 group-hover:bg-white/10 transition-colors rounded-none",
              stat.color
            )}
          >
            <stat.icon size={18} />
          </div>
          <div className="flex flex-col items-start translate-y-0.5">
            <span className="text-xl font-bold tracking-tighter tabular-nums leading-none mb-1">
              <AnimatedNumber value={stat.value} />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 whitespace-nowrap">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
