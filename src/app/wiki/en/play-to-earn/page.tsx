import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gamepad2 } from 'lucide-react';

import { Container, Wrapper } from '@/components/global';
import { Button, LampContainer, SectionBadge, WobbleCard } from '@/components/ui';
import { playToEarn } from '@/constants';

export const metadata: Metadata = {
	title: 'What is Play2Earn and How to Make Money with It',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'What is Play2Earn and How to Make Money with It',
		description:
			'What is Play2Earn and How to Make Money with It',
		type: 'article',
		publishedTime: '2024-09-12T00:19:00.000Z',
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
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[60%]">
									What is Play2Earn and How to Make Money with It
								</h2>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto text-justify">
									In recent years, the concept of Play2Earn (P2E) has attracted
									significant attention in the world of video games and
									cryptocurrencies. This new trend allows players to earn money
									by playing games. In this article, we will explore what
									Play2Earn is, how it works, and how you can start making money
									with games.
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
								What is Play2Earn?
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									Play2Earn (Play to Earn) is a gaming model where players
									receive real money or cryptocurrency for actively
									participating in the gameplay. Unlike traditional games, where
									money is spent solely on entertainment, in P2E games, players
									can earn by completing various tasks, participating in
									tournaments, or simply playing the game.
								</p>
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/img2.jpg"
											width={400}
											height={400}
											alt="Play2Earn demo image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** How Play2Earn Games Work */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
					<div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w mx-auto text-center">
							<SectionBadge title="How P2E Games Work" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								How Play2Earn Games Work
							</h2>
							<p className="text-muted-foreground mt-6 max-w-lg mx-auto">
								Play2Earn games are based on blockchain technology, which
								ensures the security and transparency of transactions. The main
								principles of these games are as follows:
							</p>
						</div>
					</Container>
					<Container>
						<div className="flex items-center justify-center mx-auto mt-8">
							{/* <Icons.feature className="w-auto h-80" /> */}
							<Image
								src="/assets/nft.png"
								width={300}
								height={300}
								alt="linear demo image"
							/>
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
								{playToEarn.map((feature) => (
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

			{/** Advantages of Play2Earn Games */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-16 relative">
					<Container>
						<div className="max-w-md mx-auto text-center">
							<SectionBadge title="Advantages of P2E" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Advantages of Play2Earn Games
							</h2>
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
								<div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
									<div className="flex items-center justify-center">
										<Gamepad2 className="w-10 h-10 pb-2 text-muted-foreground" />
									</div>
									<p className="mt-2 text-start lg:text-start">
										<strong>Earning Potential:</strong> The most obvious
										advantage is the ability to earn money while playing. This
										attracts many people looking to monetize their time and
										efforts.
									</p>
								</div>
								<div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
									<div className="flex items-center justify-center">
										<Gamepad2 className="w-10 h-10 pb-2 text-muted-foreground" />
									</div>
									<p className="mt-2 text-start lg:text-start">
										<strong>Access to Unique Assets:</strong> NFTs used in such
										games can have significant value, especially if they are
										unique or rare. Players can earn money by selling or trading
										these assets.
									</p>
								</div>
								<div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
									<div className="flex items-center justify-center">
										<Gamepad2 className="w-10 h-10 pb-2 text-muted-foreground" />
									</div>
									<p className="mt-2 text-start lg:text-start">
										<strong>Decentralization:</strong> Blockchain technology
										provides transparency and security for transactions,
										reducing the risk of fraud and ensuring fair gameplay.
									</p>
								</div>
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
							<SectionBadge title="Play and Earn" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-12">
								How to Start Playing and Earning
							</h2>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									1. Choosing a Game:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Explore various P2E games and choose the one that interests
									you the most. Pay attention to the game's reputation, its
									economic model, and player reviews.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									2. Creating a Wallet:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									To participate in blockchain games, you will need a
									cryptocurrency wallet (e.g., MetaMask) to store your tokens
									and NFTs.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									3. Buying NFTs or Tokens:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									In some games, you need to purchase initial assets, such as
									NFTs or tokens. Make sure you understand how and where to make
									these purchases safely.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									4. Active Participation:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Start playing the game, completing tasks, participating in
									competitions, and trading assets to earn money.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									5. Monetization:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									If you accumulate a sufficient amount of valuable content or
									tokens, you can exchange them for money or cryptocurrency
									through special platforms or exchanges.
								</p>
								<Image
									src="/assets/boy.png"
									width={350}
									height={350}
									alt="Crypto"
									className="absolute -right-4 lg:-right-[0%]  filter -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/* Conclusion */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10 mt-16">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Conclusion" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Conclusion
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<p className="text-base md:text-lg text-foreground/80 flex items-center justify-center">
									Play2Earn opens up new opportunities for gamers, allowing them
									to make money from their passion. However, it is important to
									understand the potential risks and be prepared for market
									volatility. If you want to try your hand at this model, choose
									reliable games, study their features, and start earning by
									playing!
								</p>
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/cat2.jpg"
											width={400}
											height={400}
											alt="linear demo image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>
		</div>
	);
};

export default Article;
