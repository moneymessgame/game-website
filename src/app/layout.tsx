import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import '@/styles/globals.scss';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/navigation/footer';

export const metadata: Metadata = {
	title: {
		default: 'MoneyMess',
		template: '%s - P2E Telegram mini app game based on Ton',
	},
	description: 'P2E Game based on Ton & Telegram',
	generator: 'Next.js',
	applicationName: 'MoneyMess',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'MoneyMess',
		'P2E Game',
		'Play2Earn',
		'Ton',
		'Telegram',
		'Cryptocurrency',
		'Сrypto Games',
		'Crypto Ecosystem',
		'Mini app',
		'Mini app games',
		'Web3',
		'Web3 games',
		'Web3 ecosystem',
	],
	authors: { name: 'KitPes', url: 'https://kitpes.fun' },
	creator: 'KitPes',
	publisher: 'KitPes',
	openGraph: {
		title: 'MoneyMess P2E Game',
		description: 'MoneyMess is a mini app P2E Game based on Ton & Telegram',
		siteName: 'MoneyMess',
		url: 'https://moneymess.fun',
		locale: 'en-US',
		type: 'website',
		images: [
			{
				url: '/assets/og-image.png', // Must be an absolute URL
				width: 1280,
				height: 720,
				alt: 'MoneyMess P2E Game',
			},
		],
		// videos: [
		// 	{
		// 		url: 'https://moneymess.fun/og.mp4', // Must be an absolute URL
		// 		width: 1280,
		// 		height: 720,
		// 	},
		// ],
	},
	twitter: {
    card: 'summary_large_image',
		title: 'MoneyMess P2E Game',
		description: 'MoneyMess is a mini app P2E Game based on Ton & Telegram',
    creator: 'KitPes',
    // images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  },
	verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
	},
	category: 'web3',
};

const font = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['cyrillic-ext'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden',
					font.className,
					montserrat.className
				)}
			>
				<div className="flex flex-col items-center w-full">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
