import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight, Gem } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { features, NFTGames } from '@/constants';
import { Icons } from '@/components';
import { cn } from '@/lib/utils';
import { LampContainer } from '@/components/ui/lamp';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { WobbleCard } from '@/components/ui/wobble-card';
import CardDemo from '@/components/blocks/cards-demo-2';

export const metadata: Metadata = {
	title: 'NFT Games: How Do They Work and How to Earn',
	robots: {
		index: true,
		follow: true,
	},
};

const Article = () => {
	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-2">
			{/** Lamp Header */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<LampContainer>
							<div className="flex flex-col items-center justify-center relative w-full text-center">
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[70%]">
									NFT games: <br /> how do they work and how to Earn?
								</h2>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto ">
									NFT games represent a cutting-edge trend in the video game
									industry, combining blockchain technology and gaming.
								</p>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									3 min read
								</p>
								<Button variant="white" className="mt-6" asChild>
									<Link href="#intro">
										Read more
										<ArrowRight className="w-4 h-4 ml-2" />
									</Link>
								</Button>
							</div>
						</LampContainer>
					</Container>
				</Wrapper>
			</section>

			{/** Intro */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="max-w-xl mx-auto text-center" id="intro">
							<SectionBadge title="Introduction" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								NFT Games: Merging Fun and Profit in the Blockchain Era
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/img1.jpg"
											width={500}
											height={500}
											alt="Play2Earn demo image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									NFT games represent a cutting-edge trend in the video game
									industry, combining blockchain technology and gaming. These
									games offer unique opportunities for players who want not only
									to have fun but also to earn from their virtual assets. In
									this article, we will discuss what NFT games are, how they
									work, and what earning strategies are available to players.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** What are NFTs */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-16 relative">
					<Container>
						<div className="max-w-md mx-auto text-center">
							<SectionBadge title="NFT" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								What are NFTs and how do they work in games?
							</h2>
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
								<div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
									<div className="flex items-center justify-center">
										<Gem className="w-10 h-10 pb-2 text-muted-foreground" />
									</div>
									<p className="mt-2 text-start lg:text-start">
										<strong> NFT (Non-Fungible Token) </strong> is a unique
										digital asset recorded on the blockchain, representing an
										item or object with individual characteristics. Unlike
										fungible tokens like Bitcoin, NFTs cannot be replaced,
										making them ideal for creating unique digital items.
									</p>
								</div>
								<div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
									<div className="flex items-center justify-center">
										<Gem className="w-10 h-10 pb-2 text-muted-foreground" />
									</div>
									<p className="mt-2 text-start lg:text-start">
										In the context of games, <strong>NFTs</strong> can be used
										to create unique characters, items, or even entire game
										worlds. These assets can be bought, sold, or traded on
										specialized platforms, providing players with the
										opportunity to earn from their virtual achievements.
									</p>
								</div>
								<div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
									<div className="flex items-center justify-center">
										<Gem className="w-10 h-10 pb-2 text-muted-foreground" />
									</div>
									<p className="mt-2 text-start lg:text-start">
										<strong>NFTs</strong> in games add uniqueness and value to
										every element, making the gameplay more engaging and
										profitable.
									</p>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** Successful NFT Games */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Successful NFT Games" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Examples of Successful NFT Games
							</h2>
						</div>
					</Container>
					<Container className="flex items-center justify-center">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
							{NFTGames.map((card) => (
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
										></CardTitle>
										<CardDescription>{card.description}</CardDescription>
									</CardHeader>
								</Card>
							))}
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** How to Earn in NFT Games */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
					<div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w mx-auto text-center">
							<SectionBadge title="Earn" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								How to Earn in NFT Games?
							</h2>
							<p className="text-muted-foreground mt-6">
								There are several main ways to earn in NFT games:
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
			</section>

			{/** WobbleCard */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Play & Invest" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								How to Start Playing and Investing in NFT Games
							</h2>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
							<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
								<Image
									src="/assets/crypto2.webp"
									width={350}
									height={350}
									alt="linear demo image"
									className="absolute -right-10 md:-right-[40%] lg:-right-[-3%] -bottom-10 object-contain rounded-2xl"
								/>
								<div className="max-w-sm">
									<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										1. Choosing a Game
									</h2>
									<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
										Explore various NFT games and choose the one that aligns
										with your interests and goals. Familiarize yourself with the
										game mechanics, in-game tokens, and earning opportunities.
									</p>
								</div>
							</WobbleCard>
							<WobbleCard
								containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
								className=""
							>
								<div className="max-w-xs">
									<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										2. Creating a Cryptocurrency Wallet
									</h2>
									<p className="mt-4 text-left  text-base/6 text-neutral-200">
										To buy and store NFTs, you will need a cryptocurrency wallet
										that supports the token standard used in the chosen game.
									</p>
								</div>
								<Image
									src="/assets/crypto.webp"
									width={350}
									height={350}
									alt="linear demo image"
									className="absolute -right-4 lg:-right-[5%]  filter -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									3. Purchasing NFTs
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Use exchange platforms or the game's internal marketplaces to
									buy unique game items or assets. Assess their value and rarity
									to make profitable investments.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
								<div className="max-w-sm">
									<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										4. Participating in the Game
									</h2>
									<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
										Play the game, complete tasks, earn tokens, and manage your
										NFTs. Regular participation in the game can increase your
										chances of obtaining more valuable items.
									</p>
								</div>
								<Image
									src="/assets/crypto3.webp"
									width={350}
									height={350}
									alt="Participate in the game"
									className="absolute -right-10 md:-right-[40%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/* Conclusion */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Conclusion" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								NFT Games: Virtual Assets and Real Opportunities
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/cat.jpg"
											width={500}
											height={500}
											alt="linear demo image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 flex items-center justify-center">
									NFT games represent a rapidly developing segment of the gaming
									industry that combines elements of blockchain technology and
									gaming. NFT tokens used in such games allow the creation of
									unique digital assets that can be bought, sold, or traded,
									generating income for their owners.
									<br />
									However, it is important to remember the risks associated with
									investing in NFT games. The value of NFTs and in-game tokens
									can fluctuate depending on market demand and the dynamics of
									the game itself. Therefore, it is crucial to study carefully
									the market, understand the game mechanics, and invest only
									what you are willing to lose.
									<br />
									NFT games are not just a form of entertainment but also an
									opportunity to become part of a growing ecosystem where your
									virtual achievements can bring real rewards. Understanding the
									basics, researching successful projects, and wisely managing
									your digital assets will help you effectively leverage the
									potential of NFT games and maximize your profits.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>
		</div>
	);
};

export default Article;
