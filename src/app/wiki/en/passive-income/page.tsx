import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { LampContainer } from '@/components/ui/lamp';
import { BentoGridDemo } from '@/components/BentoGridSecondDemo';
import { WobbleCard } from '@/components/ui/wobble-card';

export const metadata: Metadata = {
	title: 'Passive Income',
	description: 'Top Strategies for Play2Earn Games',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'Passive Income in Games',
		description: 'Top Strategies for Play2Earn Games',
		type: 'article',
		publishedTime: '2024-09-12T00:19:00.000Z',
		authors: 'MoneyMess',
	},
};

const Article = () => {
	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
			{/** Lamp Header */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<LampContainer>
							<div className="flex flex-col items-center justify-center relative w-full text-center">
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[80%]">
									Passive Income in Games: Top Strategies for Play2Earn Games
								</h2>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									5 min
								</p>
								<Button variant="white" className="mt-6" asChild>
									<Link href="#intro">
										Читать далее
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
								What is Passive Income in Play2Earn Games
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/income.jpg"
											width={500}
											height={500}
											alt="Income image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									With the rise in popularity of Play2Earn games, more users are
									looking for ways to earn with minimal time investment. Passive
									income in games is becoming an attractive option for those who
									want a stable income without spending much time on active
									gameplay. In this article, we will explore the best strategies
									for creating passive income in Play2Earn projects.
									<br />
									<br />
									Passive income is earnings you receive without the need for
									constant participation. In the context of Play2Earn games, it
									means the ability to accumulate in-game currency or other
									assets with minimal actions on your part. Such games typically
									offer mechanics that automate the earning process or allow you
									to profit from invested assets.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** Bento Grid */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10 mt-6">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="How to Choose" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-12">
								How to Choose a Game with Passive Mechanics
							</h2>
							<p className="text-muted-foreground mt-6 max-w-md mx-auto mb-12">
								To generate passive income in Play2Earn games, it's important to
								choose a project that offers suitable mechanics. Here are a few
								criteria to help you select such a game:
							</p>
						</div>
					</Container>
				</Wrapper>
				<BentoGridDemo />
				<Image
					src="/assets/boy2.png"
					width={250}
					height={250}
					alt="Crypto"
					className="absolute -right-4 lg:-right-[0%]  filter -bottom-[-2%] object-contain rounded-2xl"
				/>
			</section>

			{/* Strategies */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10 mt-20">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Strategies" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Strategies for Creating Passive Income in Play2Earn Games
							</h2>
							<p className="text-muted-foreground mt-6 max-w-md mx-auto mb-12">
								There are various strategies for generating passive income in
								blockchain-based games. Here are some of the most effective:
							</p>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
								{/* Левая колонка с картинкой */}
								<div className="flex items-center justify-center mx-auto">
									<Image
										src="/assets/strategies1.jpg"
										width={350}
										height={350}
										alt="Strategies"
										className="rounded-2xl"
									/>
								</div>
								{/* Правая колонка с текстом */}
								<div>
									<h2 className="text-xl lg:text-xl font-black uppercase mt-6 mb-6">
										Farming and Staking.
									</h2>
									<ul className="text-base md:text-lg text-foreground/80 space-y-4">
										<p>
											Farming and staking are mechanics that allow you to earn
											income through holding or using game tokens:
										</p>
										<li>
											- <strong>Farming:</strong> Some games allow you to farm
											in-game currency by providing assets to a liquidity pool
											or performing other actions. For example, you might use
											your tokens for farming and earn a percentage of the
											generated income.
										</li>
										<li>
											- <strong>Staking:</strong> In some games, you can stake
											tokens or NFTs to receive passive income. The longer you
											hold assets in staking, the higher your income.
										</li>
									</ul>
								</div>

								{/* Левая колонка с картинкой */}
								<div className="flex items-center justify-center mx-auto">
									<Image
										src="/assets/strategies2.jpg"
										width={350}
										height={350}
										alt="Strategies"
										className="rounded-2xl"
									/>
								</div>
								{/* Правая колонка с текстом */}
								<div>
									<h2 className="text-xl lg:text-xl font-black uppercase mt-10 mb-6">
										NFT Renting.
									</h2>
									<ul className="text-base md:text-lg text-foreground/80 space-y-4 ">
										<p>
											If the game supports NFTs, you can rent your assets to
											other players:
										</p>
										<li>
											- <strong>Renting Characters or Items:</strong> In some
											games, you can rent out your characters, equipment, or
											other assets, earning a steady income from their use by
											other players.
										</li>
										<li>
											- <strong>Benefits from Rare Assets:</strong> If you have
											rare or powerful in-game items, renting them out can
											generate significant income.
										</li>
									</ul>
								</div>

								{/* Левая колонка с картинкой */}
								<div className="flex items-center justify-center mx-auto">
									<Image
										src="/assets/strategies3.jpg"
										width={350}
										height={350}
										alt="Strategies"
										className="rounded-2xl"
									/>
								</div>
								{/* Правая колонка с текстом */}
								<div>
									<h2 className="text-xl lg:text-xl font-black uppercase mt-10 mb-6">
										Affiliate Programs.
									</h2>
									<ul className="text-base md:text-lg text-foreground/80 space-y-4 ">
										<p>
											Many Play2Earn games offer affiliate programs that allow
											you to earn passive income by attracting new players:
										</p>
										<li>
											- <strong>Referral Links:</strong> Earn bonuses for each
											player you bring in who registers and starts playing
											through your referral link.
										</li>
										<li>
											- <strong>Activity Bonuses:</strong> Some games provide
											additional rewards if your referrals actively play and
											earn.
										</li>
									</ul>
								</div>

								{/* Левая колонка с картинкой */}
								<div className="flex items-center justify-center mx-auto">
									<Image
										src="/assets/strategies4.jpg"
										width={350}
										height={350}
										alt="Strategies"
										className="rounded-2xl"
									/>
								</div>
								{/* Правая колонка с текстом */}
								<div>
									<h2 className="text-xl lg:text-xl font-black uppercase mt-10 mb-6">
										Examples of Games with Passive Income.
									</h2>
									<ul className="text-base md:text-lg text-foreground/80 space-y-4 ">
										<p>
											Here are a few popular games that offer mechanics for
											passive earning:
										</p>
										<li>
											- <strong>Axie Infinity:</strong> In this game, you can
											rent out your Axie to other players or participate in
											staking AXS tokens.
										</li>
										<li>
											- <strong>Alien Worlds:</strong> The game offers the
											ability to farm in-game currency and stake TLM tokens for
											income.
										</li>
										<li>
											- <strong>The Sandbox:</strong> In The Sandbox, you can
											rent out virtual land or use it to create content that
											generates income.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** WobbleCard */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative mt-6 mb-12">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Maximizing Passive Income" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-12">
								Tips for Maximizing Passive Income
							</h2>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-2xl font-black uppercase tracking-[-0.015em] text-white">
									1. Diversify Assets:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Don’t limit yourself to one game. Spread your assets across
									multiple projects to reduce risks.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-2xl font-black uppercase tracking-[-0.015em] text-white">
									2. Stay Updated:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Regularly monitor game news and updates to seize profitable
									opportunities.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-800">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-2xl font-black uppercase tracking-[-0.015em] text-white">
									3. Use Automation:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									If the game supports process automation, take advantage of
									this feature to boost your income.
								</p>
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
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/success.jpg"
											width={350}
											height={350}
											alt="Conclusion"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 flex items-center justify-center">
									Creating passive income in Play2Earn games is a real
									opportunity to earn a stable income with minimal time
									investment. By choosing games with suitable mechanics and
									applying effective strategies, you can build a sustainable
									income source in the cryptocurrency world. Remember to
									carefully study projects and diversify assets to minimize
									risks and maximize profits.
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
