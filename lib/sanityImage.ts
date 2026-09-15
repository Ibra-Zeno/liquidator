/**
 * Appends Sanity's on-the-fly CDN image transform params to an existing
 * asset URL. Used where we render plain <img> tags (e.g. masonry grids)
 * that can't go through next/image, so images aren't served at full
 * original resolution regardless of how large they were uploaded.
 */
export function sanityImageUrl(url: string, width: number, quality = 75) {
  if (!url) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}w=${width}&auto=format&fit=max&q=${quality}`;
}
