'use client';

import * as React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import OrbitIcon from '@/components/global/orbitIcon';
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

import { wikiRu, wikiEn } from '@/constants';

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
											<div className='flex w-6 h-6 items-center justify-center '>
												<OrbitIcon className="w-6 h-6 font-light fill-200 text-white light-line-icon" />
											</div>
											
											<div className=" mt-2 text-xl font-black uppercase">
												moneymess
											</div>
											<p className="mb-2 text-sm leading-tight text-white">
												Tap2Earn mini app
											</p>
											<Image
												src="/game/qr-moneymess.jpg"
												alt="QR code"
												width={200}
												height={200}
												className="rounded-xl"
											/>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem href="/about" title="About">
									Re-usable components built using Radix UI and Tailwind CSS.
								</ListItem>
								<ListItem href="/whitepaper" title="WhitePaper">
									How to install dependencies and structure your app.
								</ListItem>
								<ListItem href="/roadmap" title="Roadmap">
									Styles for headings, paragraphs, lists...etc
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>WIKI EN</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{wikiEn.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									>
										{component.info}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>WIKI RU</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{wikiRu.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									>
										{component.info}
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
