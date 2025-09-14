import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SafeCity',
    short_name: 'SafeCity',
    description: 'A Next.js PWA example',
    start_url: '/',
    display: 'standalone',
    theme_color: "#ed2c2c",
    background_color: "#ed2c2c",
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}