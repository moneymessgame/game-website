import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
	ArrowRight,
	ChevronRight,
	Gamepad2,
	Send,
	UserIcon,
	Zap,
} from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { features, perks, pricingCards, reviews } from '@/constants';
import { Icons } from '@/components';
import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import { LampContainer } from '@/components/ui/lamp';
import { Input } from '@/components/ui/input';
import OrbitIcon from '@/components/global/orbitIcon';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Roadmap from '@/components/Roadmap';

export const metadata: Metadata = {
	title: 'Roadmap MoneyMess',
	robots: {
		index: true,
		follow: true,
	},
};

const HomePage = () => {
	const firstRow = reviews.slice(0, reviews.length / 2);
	const secondRow = reviews.slice(reviews.length / 2);

	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
			{/**Description */}
			<section>
				<Wrapper>
					<div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />
					<Container>
						<div className="flex flex-col items-center justify-center py-20 h-full">
							<div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
								<div className="flex items-center justify-center">
									<h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-black uppercase text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
										RoadMap
									</h1>
								</div>

								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
								Our game is an exciting Play2Earn project where players collect and develop unique planets and characters, each with four main attributes: <strong>Attractiveness, Power, Wealth, and Popularity</strong>. The game features 38 unique characters, each possessing special abilities that influence these attributes. A key part of the gameplay is social interaction, allowing players to connect with friends through an integrated Telegram interface.
								</p>
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
								The Roadmap outlines important stages of the game's development, starting with the <strong>Main Game Launch</strong>, introducing all key gameplay mechanics. Following the launch, a <strong>Referral System</strong> will be implemented to attract new players and expand the community. Regular <strong>Daily Rewards</strong> and unique <strong>Special Cards</strong> will add motivation and variety to the gameplay. To enhance player convenience, an <strong>in-game Wallet</strong> will be integrated, allowing for direct management of cryptocurrency assets within the game. We are also actively working on <strong>On-chain infrastructure development</strong> and planning <strong>Partner Blockchain Announcements</strong> to ensure the sustainable growth of the project and strengthen its position within the blockchain community.
								</p>
							</div>
						</div>
						<Roadmap />
					</Container>
				</Wrapper>
			</section>

			{/** How it works */}
			{/* <div>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<Container>
						<div className="max-w-md mx-auto text-start md:text-center">
							<SectionBadge title="The Process" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Three Clicks to Your Dream Site
							</h2>
							<p className="text-muted-foreground mt-6">
								Vision to Reality in 3 Simple Steps
							</p>
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
								{perks.map((perk) => (
									<div
										key={perk.title}
										className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
									>
										<div className="flex items-center justify-center">
											<perk.icon className="w-8 h-8" />
										</div>
										<h3 className="text-lg font-medium mt-4">{perk.title}</h3>
										<p className="text-muted-foreground mt-2 text-start lg:text-start">
											{perk.info}
										</p>
									</div>
								))}
							</div>
						</div>
					</Container>
				</Wrapper>
			</div> */}

			{/* Features */}
			{/* <div id="features">
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
					<div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w mx-auto text-start md:text-center">
							<SectionBadge title="Features" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Discover Astra's powerful features
							</h2>
							<p className="text-muted-foreground mt-6">
								AstraDynamic offers a range of features to help you build a
								stunning website in no time
							</p>
						</div>
					</Container>
					<Container>
						<div className="flex items-center justify-center mx-auto mt-8">
							<Icons.feature className="w-auto h-80" />
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
								{features.map((feature) => (
									<div
										key={feature.title}
										className="flex flex-col items-start lg:items-start px-0 md:px-0"
									>
										<div className="flex items-center justify-center">
											<feature.icon className="w-8 h-8" />
										</div>
										<h3 className="text-lg font-medium mt-4">
											{feature.title}
										</h3>
										<p className="text-muted-foreground mt-2 text-start lg:text-start">
											{feature.info}
										</p>
									</div>
								))}
							</div>
						</div>
					</Container>
				</Wrapper>
			</div> */}

			{/** Price list */}
			{/* <div id="pricingCards">
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w-md mx-auto text-start md:text-center">
							<SectionBadge title="Pricing" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Unlock the right plan for your business
							</h2>
							<p className="text-muted-foreground mt-6">
								Choose the best plan for your business and start building your
								dream website today
							</p>
						</div>
					</Container>
					<Container className="flex items-center justify-center">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
							{pricingCards.map((card) => (
								<Card
									key={card.title}
									className={cn(
										'flex flex-col w-full border-neutral-700',
										card.title === 'Unlimited Saas' && 'border-2 border-primary'
									)}
								>
									<CardHeader className="border-b border-border">
										<span>{card.title}</span>
										<CardTitle
											className={cn(
												card.title !== 'Unlimited Saas' &&
													'text-muted-foreground'
											)}
										>
											{card.price}
										</CardTitle>
										<CardDescription>{card.description}</CardDescription>
									</CardHeader>
									<CardContent className="pt-6 space-y-3">
										{card.features.map((feature) => (
											<div key={feature} className="flex items-center gap-2">
												<Zap className="w-4 h-4 fill-primary text-primary" />
												<p>{feature}</p>
											</div>
										))}
									</CardContent>
									<CardFooter className="mt-auto">
										<Link
											href="#"
											className={cn(
												'w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium',
												card.title !== 'Unlimited Saas' &&
													'!bg-foreground !text-background'
											)}
										>
											{card.buttonText}
										</Link>
									</CardFooter>
								</Card>
							))}
						</div>
					</Container>
				</Wrapper>
			</div> */}

			{/** Testimonials */}
			{/* <div id="reviews">
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w-md mx-auto text-start md:text-center">
							<SectionBadge title="Testimonial Replicas" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Moving Testimonials
							</h2>
							<p className="text-muted-foreground mt-6">
								Discover how AstraDynamic elevates web design across industries.
								See what developers are saying online
							</p>
						</div>
					</Container>
					<Container>
						<div className="py-10 md:py-20 w-full">
							<div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
								<Marquee pauseOnHover className="[--duration:20s] select-none">
									{firstRow.map((review) => (
										<figure
											key={review.name}
											className={cn(
												'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
												'border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]'
											)}
										>
											<div className="flex flex-row items-center gap-2">
												<UserIcon className="w-6 h-6" />
												<div className="flex flex-col">
													<figcaption className="text-sm font-medium">
														{review.name}
													</figcaption>
													<p className="text-xs font-medium text-muted-foreground">
														{review.username}
													</p>
												</div>
											</div>
											<blockquote className="mt-2 text-sm">
												{review.body}
											</blockquote>
										</figure>
									))}
								</Marquee>
								<Marquee
									reverse
									pauseOnHover
									className="[--duration:20s] select-none"
								>
									{secondRow.map((review) => (
										<figure
											key={review.name}
											className={cn(
												'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
												'border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]'
											)}
										>
											<div className="flex flex-row items-center gap-2">
												<UserIcon className="w-6 h-6" />
												<div className="flex flex-col">
													<figcaption className="text-sm font-medium">
														{review.name}
													</figcaption>
													<p className="text-xs font-medium text-muted-foreground">
														{review.username}
													</p>
												</div>
											</div>
											<blockquote className="mt-2 text-sm">
												{review.body}
											</blockquote>
										</figure>
									))}
								</Marquee>
								<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
								<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</div> */}

		</div>
	);
};

export default HomePage;
