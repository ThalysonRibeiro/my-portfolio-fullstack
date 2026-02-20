"use client";

import { Download, Eye, Rocket, Server, Layout, LucideIcon } from "lucide-react";

export function getIcon(value: string): LucideIcon {
  switch (value) {
    case "liveDemo":
      return Eye;
    case "downloadApp":
      return Download;
    case "frontend":
      return Rocket;
    case "backend":
      return Server;
    case "fullstack":
      return Layout;
    case "end-to-end":
      return Rocket;
    default:
      return Rocket;
  }
}
