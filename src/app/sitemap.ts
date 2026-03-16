import type { MetadataRoute } from "next";

import { featuredProjects } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/explore", "/about", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date()
    })),
    ...featuredProjects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: new Date()
    }))
  ];
}

