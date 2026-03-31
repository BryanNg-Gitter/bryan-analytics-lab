import React, { useEffect } from "react";
import { SITE_URL } from "../seo/siteConfig.js";

function upsertMeta(attrName, attrValue, content) {
  const selector = `meta[${attrName}="${attrValue}"]`;
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attrName, attrValue);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let node = document.head.querySelector(`link[rel="${rel}"]`);
  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", rel);
    document.head.appendChild(node);
  }
  node.setAttribute("href", href);
}

function SEOHead({
  title,
  description,
  path = "/",
  image = "/og-image.svg",
  type = "website",
  noindex = false,
  keywords = "",
  structuredData = [],
}) {
  useEffect(() => {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta(
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    );
    if (keywords) upsertMeta("name", "keywords", keywords);

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", "Bryan Analytics Lab");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    upsertLink("canonical", canonicalUrl);

    const existing = document.getElementById("seo-structured-data");
    if (existing) existing.remove();

    if (structuredData.length > 0) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "seo-structured-data";
      script.text = JSON.stringify(structuredData.length === 1 ? structuredData[0] : structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, path, image, type, noindex, keywords, structuredData]);

  return null;
}

export default SEOHead;
