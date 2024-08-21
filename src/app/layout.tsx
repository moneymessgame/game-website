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
		template: '%s - P2E Game',
	},
	description: 'P2E Game based on Ton & Telegram',
	twitter: {
		card: 'summary_large_image',
	},
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
