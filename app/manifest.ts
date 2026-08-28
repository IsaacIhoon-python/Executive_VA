import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ihoon Isaac — Executive Virtual Assistant",
    short_name: "Ihoon Isaac",
    description: "Executive support backed by digital operations, AI automation and technical capability.",
    start_url: "/",
    display: "standalone",
    background_color: "#07100f",
    theme_color: "#07100f",
    lang: "en",
  };
}
