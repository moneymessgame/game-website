import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight, Gamepad2 } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { playToEarnRu, TonTokens, projects } from '@/constants';
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
import { HoverEffect } from '@/components/ui/card-hover-effect';
import CardHover from '@/components/CardHover';

export const metadata: Metadata = {
	title: 'TON and Crypto Games',
	description: 'How to Earn with TON Tokens',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'TON and Crypto Games',
		description: 'How to Earn with TON Tokens',
		type: 'article',
		publishedTime: '2024-09-20T00:19:00.000Z',
		authors: 'MoneyMess',
	},
};

const Article = () => {
	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-2">
			{/** Lamp Header */}
			<section id="title">
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<LampContainer>
							<div className="flex flex-col items-center justify-center relative w-full text-center">
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[70%]">
									TON and Crypto Games: How to Earn with TON Tokens
								</h2>
								<p className="text-muted-foreground mt-6 max-w-xl mx-auto text-justify">
									With the development of blockchain technology, the crypto
									gaming industry continues to grow rapidly. One of the most
									promising platforms in this field is TON (The Open Network),
									known for its close integration with Telegram and its
									capabilities for creating decentralized applications and
									games. In this article, we will explore how TON integrates
									with crypto games, how TON tokens work, and how you can earn
									by playing games that use this blockchain.
								</p>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									4 min read
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
								What is TON and How is it Related to Crypto Games
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/cat3.jpg"
											width={500}
											height={500}
											alt="Play2Earn demo image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									TON is a blockchain platform initially developed by the
									Telegram team to create a fast and scalable network capable of
									supporting decentralized applications (dApps) and smart
									contracts. After undergoing several changes, TON evolved into
									an independent open-source project and became one of the
									leading platforms for developing games and applications using
									blockchain.
									<br />
									<br />
									Crypto games on TON are games that use TON's infrastructure
									for data storage, transaction processing, and the issuance of
									in-game assets in the form of tokens or NFTs (Non-Fungible
									Tokens). Thanks to its speed, security, and close integration
									with Telegram, TON offers unique opportunities for developing
									and launching games with real financial incentives.
								</p>
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
							<SectionBadge title="TON tokens in games" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								How Do TON Tokens Work in Games
							</h2>
							<p className="text-muted-foreground">
								At the core of crypto games on TON are TON tokens—digital assets
								that can be used within games to buy, sell, and exchange various
								items or services. TON tokens can be used for:At the core of
								crypto games on TON are TON tokens—digital assets that can be
								used within games to buy, sell, and exchange various items or
								services. TON tokens can be used for:
							</p>
						</div>
					</Container>
					<Container className="flex items-center justify-center">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-10 flex-wrap max-w-4xl">
							{TonTokens.map((card) => (
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

					<Container>
						<div className="max-w-xl mx-auto text-center">
							<p className="text-muted-foreground">
								NFTs on the TON platform also play a crucial role in crypto
								games. These unique tokens can represent rare in-game items or
								characters that can be bought, sold, or traded on open markets.
							</p>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** WobbleCard */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="How to earn" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-12">
								How to Earn with Crypto Games Using TON Tokens
							</h2>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
							<WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px] bg-pink-800 ">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									1. Participating in game activities:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Completing daily quests, participating in tournaments, or
									progressing through levels can earn you rewards in the form of
									TON tokens.
								</p>
								<Image
									src="/assets/cat5.png"
									width={350}
									height={350}
									alt="Crypto"
									className="absolute -right-4 lg:-right-[0%] filter -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									2. Creating and selling NFTs:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									If the game supports NFT creation, you can create unique
									in-game items and sell them to other players.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									3. Investing in the game economy:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									In some games, you can invest tokens in developing the
									infrastructure, which generates income from a share in the
									game’s business.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px] bg-pink-800 ">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									4. Attracting new players:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Many games offer affiliate programs where you earn bonuses for
									inviting friends and acquaintances.
								</p>
								<Image
									src="/assets/cat4.png"
									width={350}
									height={350}
									alt="Crypto"
									className="absolute -right-4 lg:-right-[0%] filter -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
						</div>
					</Container>
				</Wrapper>
			</section>

			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10 mt-6">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Tips" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Tips for Getting Started
							</h2>
						</div>
					</Container>
				</Wrapper>
				<CardHover isRussian={false} />
			</section>

			{/* Conclusion */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Conclusion" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Conclusion
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/desk.jpg"
											width={350}
											height={350}
											alt="Conclusion"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 flex items-center justify-center">
									Games with TON tokens offer unique earning opportunities by
									combining engaging gameplay with real financial incentives.
									It's important to choose reputable projects, consider the
									features of tokenomics and security, and be an active
									community participant. By leveraging the capabilities of the
									TON blockchain and Telegram, you can not only enjoy playing
									but also earn from it.
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
