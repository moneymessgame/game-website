import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight, ChevronRight, UserIcon, Zap } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { features, perks, NFTGames, reviews } from '@/constants';
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

export const metadata: Metadata = {
	title: 'Как зарабатывать на криптоиграх',
	description: 'Как зарабатывать на криптоиграх в Telegram',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'Как зарабатывать на криптоиграх',
		description: 'Как зарабатывать на криптоиграх в Telegram',
		type: 'article',
		publishedTime: '2024-09-12T00:19:00.000Z',
		authors: 'MoneyMess',
	},
};

const Donate = () => {
	const firstRow = reviews.slice(0, reviews.length / 2);
	const secondRow = reviews.slice(reviews.length / 2);

	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">

			{/** How it works */}
			<section>
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
			</section>

			{/* Features */}
			<section id="features">
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
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
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
			</section>

			{/** Price list */}
			{/* <section id="pricingCards">
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
			</section> */}

			{/** Testimonials */}
			<section id="reviews">
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
			</section>

			{/** Newsletter */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<Container>
						<LampContainer>
							<div className="flex flex-col items-center justify-center relative w-full text-center">
								<h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase mt-8">
									From Idea to Launch <br /> Faster Than Ever
								</h2>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									Craft stunning frontends with AstraDynamic&appos;s modern
									component library and fluid animation tools
								</p>
								<Button variant="white" className="mt-6" asChild>
									<Link href="/sign-in">
										Get started for free
										<ArrowRight className="w-4 h-4 ml-2" />
									</Link>
								</Button>
							</div>
						</LampContainer>
					</Container>
					<Container className="relative z-[999999]">
						<div className="flex items-center justify-center w-full -mt-40">
							<div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
								<div className="flex flex-col items-start gap-4 w-full">
									<h4 className="text-xl md:text-2xl font-semibold text-purple-400">
										Follow my twitter account
									</h4>
									<p className="text-base text-muted-foreground">
										Be up to date with my new undertakings ,Projects and more
									</p>
								</div>
								<div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
									<form
										action="#"
										className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs"
									>
										<Input
											required
											type="email"
											placeholder="Enter your email"
											className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
										/>
										<Button
											type="submit"
											size="sm"
											variant="secondary"
											className="w-full md:w-max"
										>
											Subscribe
										</Button>
									</form>
									<p className="text-xs p-3 text-muted-foreground">
										By subscribing you agree with our{' '}
										<Link href="#">Privacy Policy</Link>
									</p>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>
		</div>
	);
};

export default Donate;
