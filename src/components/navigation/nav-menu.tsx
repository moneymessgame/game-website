'use client';

import * as React from 'react';

import Link from 'next/link';

import { Icons } from '@/components/icons';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const components: { title: string; href: string; description: string }[] = [
	{
		title: 'NFT Games',
		href: '/docs/primitives/alert-dialog',
		description: 'How Do They Work and How to Earn',
	},
	{
		title: 'What is Play2Earn',
		href: '/docs/primitives/hover-card',
		description: 'And How to Make Money with It',
	},
	{
		title: 'How to Choose Your First Play2Earn Game',
		href: '/docs/primitives/progress',
		description:
			'How to Choose Your First Play2Earn Game to Earn Without Investment',
	},
	{
		title: 'Passive Income in Games',
		href: '/docs/primitives/scroll-area',
		description: 'Top Strategies for Play2Earn Games',
	},
	{
		title: 'How to Earn with Crypto Games',
		href: '/docs/primitives/tooltip',
		description: 'How to Earn with Crypto Games on Telegram',
	},
	{
		title: 'TON and Crypto Games',
		href: '/docs/primitives/tabs',
		description: 'How to Earn with TON Tokens',
	},
];

export function NavMenu() {
	return (
		<div className="hidden md:block">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>About game</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<a
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-ring p-6 no-underline outline-none focus:shadow-md"
											href="/"
										>
											<Icons.logo className="h-6 w-6" />
											<div className="mb-2 mt-4 text-xl font-black uppercase">
												moneymess
											</div>
											<p className="text-sm leading-tight text-white">
												Beautifully designed components that you can copy and
												paste into your apps. Accessible. Customizable. Open
												Source.
											</p>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem href="/docs" title="About">
									Re-usable components built using Radix UI and Tailwind CSS.
								</ListItem>
								<ListItem href="/docs/installation" title="WhitePaper">
									How to install dependencies and structure your app.
								</ListItem>
								<ListItem href="/docs/primitives/typography" title="Roadmap">
									Styles for headings, paragraphs, lists...etc
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>WIKI</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/donate" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Donate
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
