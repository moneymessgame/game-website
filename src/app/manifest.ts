import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MoneyMess - P2E Telegram mini app game based on Ton',
    short_name: 'MoneyMess',
    description: 'Play to Earn Telegram mini app game based on Ton blockchain',
    start_url: '/',
    display: 'fullscreen',
    background_color: '#03070f',
    theme_color: '#18195E',
    icons: [
      {
        src: '/apple-touch-icon.png',
				sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
				sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
				sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
				sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
				sizes: '168x168',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}