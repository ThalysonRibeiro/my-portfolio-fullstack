// pages/api/github.ts
import { NextResponse } from "next/server";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  const query = `
  {
    user(login: "${GITHUB_USERNAME}") {
      repositories(ownerAffiliations: OWNER, first: 100) {
        totalCount
        nodes {
          stargazerCount
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 0) {
                  totalCount
                }
              }
            }
          }
        }
      }
      pullRequests {
        totalCount
      }
    }
  }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  if (!res.ok) return NextResponse.json({ error: "GitHub GraphQL failed" }, { status: 500 });

  const { data } = await res.json();

  interface Repository {
    stargazerCount: number;
    defaultBranchRef?: {
      target?: {
        history?: {
          totalCount: number;
        };
      };
    };
  }

  const repos = data.user.repositories.nodes as Repository[];
  const totalRepos = data.user.repositories.totalCount;
  const totalStars = repos.reduce((sum: number, r: Repository) => sum + r.stargazerCount, 0);
  const totalCommits = repos.reduce(
    (sum: number, r: Repository) => sum + (r.defaultBranchRef?.target?.history?.totalCount ?? 0),
    0
  );
  const totalPRs = data.user.pullRequests.totalCount;

  return NextResponse.json({
    success: true,
    data: {
      username: GITHUB_USERNAME,
      totalRepos,
      totalStars,
      totalPRs,
      totalCommits
    }
  });
}
