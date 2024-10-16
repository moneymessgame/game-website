import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { LampContainer } from '@/components/ui/lamp';
import { WobbleCard } from '@/components/ui/wobble-card';

export const metadata: Metadata = {
	title: 'How to Choose Your First Play2Earn Game',
	description:
		'How to Choose Your First Play2Earn Game to Earn Without Investment',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'How to Choose Your First Play2Earn Game',
		description:
			'How to Choose Your First Play2Earn Game to Earn Without Investment',
		type: 'article',
		publishedTime: '2024-09-12T00:19:00.000Z',
		authors: 'MoneyMess',
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
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[80%]">
									How to Choose Your First Play2Earn Game to Earn Without
									Investment
								</h2>
								<p className="text-muted-foreground mt-6 max-w-xl mx-auto text-justify">
									The Play2Earn industry, or games that allow players to earn
									money, is rapidly evolving. For many newcomers, the important
									question is: how to choose the first game that will allow you
									to earn without investment and with minimal risks? In this
									article, we will answer these questions and offer strategies
									for a successful start.
								</p>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									3 min
								</p>
								<Button variant="white" className="mt-6" asChild>
									<Link href="#intro">
										Read More
										<ArrowRight className="w-4 h-4 ml-2" />
									</Link>
								</Button>
							</div>
						</LampContainer>
					</Container>
				</Wrapper>
			</section>

			{/** Games Without Investment */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="max-w-xl mx-auto text-center" id="intro">
							<SectionBadge title="P2E without investment" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								How to Find Play2Earn Games Without Investment
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto">
										<Image
											src="/assets/dice2.jpg"
											width={500}
											height={500}
											alt="Income image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									Play2Earn (P2E) are games that allow players to earn real
									money or cryptocurrency by completing various game tasks,
									winning competitions, or selling in-game items. Unlike
									traditional games, where money is spent on purchasing content,
									here players can profit from the time spent in the game.
									<br />
									<br />
									Many games require initial investments to buy characters,
									items, or currency. However, there are also games without
									investment, where you can start earning from scratch. Here are
									some tips on how to find such games:
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto">
										<Image
											src="/assets/dice1.jpg"
											width={500}
											height={500}
											alt="Income image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									- Look for projects with free entry: Some games provide free
									characters or starter items that can be used to start playing
									and earning.
									<br />
									<br />
									- Participate in Airdrops and contests: Many new games run
									token and game asset giveaways, where you can get initial
									capital.
									<br />
									<br />
									- Pay attention to Free-to-Play projects: There are games
									originally designed to be free, but they allow earning without
									requiring in-game purchases.
									<br />
									<br />- Explore gaming communities: Forums and social media
									often discuss new games where you can start earning without
									investment.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** WobbleCard */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative mt-12">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Increase Your Earnings" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								How to Increase Earnings Without Investment
							</h2>
							<p className="text-muted-foreground mt-6 mb-12 max-w-xl mx-auto text-justify">
								Once you've started a game without investment, it's important to
								use the available resources as efficiently as possible to
								increase your income. Here are some strategies:
							</p>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
							<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-yellow-800">
								<Image
									src="/assets/kitty2.png"
									width={350}
									height={350}
									alt="Income image"
									className="absolute -right-10 md:-right-[40%] lg:-right-[-3%] -bottom-10 object-contain rounded-2xl"
								/>
								<div className="max-w-sm">
									<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										1. Active participation in the game:
									</h2>
									<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
										Regularly completing daily tasks and participating in events
										will help you accumulate tokens and rare items that can be
										sold.
									</p>
								</div>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] bg-green-800">
								<div className="max-w-xs">
									<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										2. Selling NFTs:
									</h2>
									<p className="mt-4 text-left  text-base/6 text-neutral-200">
										If the game supports NFTs, you can sell rare items or
										characters to other players. Often, games with NFTs offer
										significant income without requiring investments.
									</p>
								</div>
								<Image
									src="/assets/kitty3.png"
									width={350}
									height={350}
									alt="Income image"
									className="absolute -right-4 lg:-right-[5%]  filter -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									3. Affiliate programs:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Inviting friends and acquaintances to the game through
									referral links can bring bonuses that will increase your
									income.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-blue-800">
								<div className="max-w-sm">
									<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										4. Participate in communities:
									</h2>
									<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
										On forums and social media, you can find valuable tips and
										life hacks from more experienced players.
									</p>
								</div>
								<Image
									src="/assets/kitty1.png"
									width={350}
									height={350}
									alt="Income image"
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
								Conclusion
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
								<Container>
									<div className="flex items-center justify-center mx-auto">
										<Image
											src="/assets/game.jpg"
											width={350}
											height={350}
											alt="Conclusion"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 flex items-center justify-center">
									Choosing your first Play2Earn game without investment can be a
									great start to getting to know the world of cryptocurrencies
									and blockchain games. It's important to carefully select
									projects, study their features, and use proven strategies to
									increase your income. Remember, success in P2E games depends
									on your activity, skills, and ability to take advantage of the
									opportunities the game provides.
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
