import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Montserrat } from 'next/font/google';

import { cn } from '@/lib/utils';
import '@/styles/globals.scss';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/navigation/footer';
import { ScrollToTop } from '@/components/ui';
import { Toaster } from '@/components/ui/toaster';
import { Wrapper } from '@/components/global';

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_BASE_URL || 'https://moneymess.fun'
	),
	title: {
		default: 'MoneyMess | P2E Telegram Game',
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
	authors: {
		name: 'KitPes',
		url: process.env.NEXT_PUBLIC_BASE_DEVELOPERS_URL || 'https://kitpes.fun',
	},
	creator: 'KitPes',
	publisher: 'KitPes',
	openGraph: {
		title: 'MoneyMess - P2E Telegram Mini App Game',
		description: 'MoneyMess is a mini app P2E Game based on Ton & Telegram',
		siteName: 'MoneyMess',
		url: process.env.NEXT_PUBLIC_BASE_URL || 'https://moneymess.fun',
		locale: 'en-US',
		type: 'website',
		// images: [
		// 	{
		// 		url: '/assets/opengraph-image.png', // Must be an absolute URL
		// 		width: 1200,
		// 		height: 630,
		// 		alt: 'MoneyMess P2E Game',
		// 	},
		// ],
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
					'min-h-screen bg-background text-foreground antialiased max-w-full ',
					font.className,
					montserrat.className
				)}
			>
				<div className="flex flex-col items-center w-full">
					<Navbar />
					{children}
					<Wrapper>
						<ScrollToTop />
					</Wrapper>
					<Footer />

					<Toaster />
				</div>
				<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
			</body>
		</html>
	);
}
