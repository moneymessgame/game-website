import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Wrapper from '@/components/global/wrapper';
import Container from '@/components/global/container';
import { perks, reviews } from '@/constants';
import OrbitIcon from '@/components/global/orbitIcon';
import CardSection from '@/components/CardSection';
import CardFlip from '@/components/CardFlip';

import { ArrowRight, ChevronRight, UserIcon, Zap } from 'lucide-react';
import SectionBadge from '@/components/ui/section-badge';
import Marquee from '@/components/ui/marquee';

import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'MoneyMess',
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

			{/**Header */}
			<section>
				<Wrapper>
					<div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

					<Container>
						<div className="flex flex-col items-center justify-center py-20 h-full">
							<Link
								href="https://t.me/moneymesschannel"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
									<span>
										<span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
									</span>
									<span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
									<span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
									<span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
										<span className="text-lg font-black">
											Tap2Earn game
										</span>
									</span>
								</button>
							</Link>

							<div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
								<div className="flex items-center justify-center">
									<OrbitIcon className="w-16 h-16 mx-4 text-thin fill-100 text-white thin-line-icon" />

									<h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-black uppercase text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
										MoneyMess
									</h1>
								</div>

								<p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
									Ready to become the No.1 in the universe? Start pumping up
									your own planet, form intergalactic alliances with your
									friends, and get ready for even more fun.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/**Characters */}
			<CardSection
				title="Characters"
				description="Choose your character and his/her main trait"
				cards={[
					{
						srcFront: '/characters/middle/card01.png',
						srcBack: '/cards/card-back.jpg',
						altFront: 'Dominion character',
						altBack: 'Dominion character',
						colorTo: '#9c40ff',
						colorFrom: '#ff0f0f',
					},
					// Добавьте остальные карточки
					{
						srcFront: '/characters/middle/card02.png',
						srcBack: '/cards/card-back.jpg',
						altFront: 'Beauty character',
						altBack: 'Richness character',
						colorTo: '#9c40ff',
						colorFrom: '#0ffcff',
					},
					{
						srcFront: '/characters/middle/card03.png',
						srcBack: '/cards/card-back.jpg',
						altFront: 'Popularity character',
						altBack: 'Popularity character',
						colorTo: '#9c40ff',
						colorFrom: '#ffff0f',
					},
					{
						srcFront: '/characters/middle/card04.png',
						srcBack: '/cards/card-back.jpg',
						altFront: 'Popularity character',
						altBack: 'Richness character',
						colorTo: '#9c40ff',
						colorFrom: '#0fff0f',
					},
					
				]}
			/>


			{/** Testimonials */}
			<section id="reviews">
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w-md mx-auto text-start md:text-center">
							<SectionBadge title="Testimonial Replicas" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								What do the characters think about the game?
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

			{/** How it works */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<Container>
						<div className="max-w-md mx-auto text-start md:text-center flex flex-col justify-center items-center">
							<Image
								src="/cards/rock.png"
								alt="planets"
								width={300}
								height={300}
								quality={100}
							/>
							{/* <SectionBadge title="The Process" /> */}
							<h2 className="text-4xl mt-8 md:text-5xl lg:text-xl md:!leading-snug font-black uppercase text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
								And have fun!
							</h2>
							<p className="text-center text-muted-foreground mt-6 ">
								Because the main goal is to have fun and bring you something
								more exciting than a simple Telegram clicker. So buckle up and
								let's get started!
							</p>
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-10 w-full">
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
										<p className="text-muted-foreground mt-2 text-justify">
											{perk.info}
										</p>
									</div>
								))}
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>
		</div>
	);
};

export default HomePage;
