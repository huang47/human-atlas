/// <reference types="vite/client" />

/** Keep public files within the deployment's Vite base path. */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
