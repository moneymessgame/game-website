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
import { Icons } from '@/components';
import { clickersEn } from '@/constants';
import { WobbleCard } from '@/components/ui/wobble-card';

export const metadata: Metadata = {
	title: 'How to Earn with Crypto Games',
	description: 'How to Earn with Crypto Games on Telegram',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'How to Earn with Crypto Games',
		description: 'How to Earn with Crypto Games on Telegram',
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
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[65%]">
									How to Earn with Crypto Games on Telegram
								</h2>
								<p className="text-muted-foreground mt-6 max-w-xl mx-auto text-justify">
									Clickers on Telegram are gaining popularity as a way to earn
									money by performing simple tasks. These apps and bots allow
									users to make money by completing click-based tasks using
									their smartphones, making them accessible and appealing to a
									broad audience. Clickers are applications that require users
									to perform various actions, such as clicks or taps on the
									screen, for which they are rewarded. Tappers automate this
									process, enabling users to earn more with less effort.
								</p>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									5 min
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

			{/** How to Earn in NFT Games */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
					<div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w mx-auto text-center">
							<SectionBadge title="Crypto Games" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Types of Crypto Games
							</h2>
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
								{clickersEn.map((feature) => (
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
				<Wrapper className="flex flex-col items-center justify-center relative mt-12">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Earning with Crypto Games" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								How to Earn with Crypto Games on Telegram
							</h2>
							<p className="text-muted-foreground mt-6 mb-12 max-w-xl mx-auto text-justify">
								To start earning with crypto games on Telegram, follow these
								steps:
							</p>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
							<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-yellow-800">
								<Image
									src="/assets/pair3.png"
									width={350}
									height={350}
									alt="Income image"
									className="absolute -right-10 md:-right-[40%] lg:-right-[-3%] -bottom-10 object-contain rounded-2xl"
								/>
								<div className="max-w-sm">
									<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										1. Choose a bot or app:
									</h2>
									<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
										Find a reliable bot or app with a good reputation. Pay
										attention to reviews and ratings.
									</p>
								</div>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] bg-green-800">
								<div className="max-w-xs">
									<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										2. Register and set up::
									</h2>
									<p className="mt-4 text-left  text-base/6 text-neutral-200">
										Create an account with your real information. Set up your
										personal account settings and connect a wallet if necessary.
									</p>
								</div>
								<Image
									src="/assets/pair1.png"
									width={350}
									height={350}
									alt="Income image"
									className="absolute -right-4 lg:-right-[5%]  filter -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									3. Complete tasks:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Perform tasks that pay. These may include click-based tasks,
									participation in farming, or running a miner.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-blue-800">
								<div className="max-w-sm">
									<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										4. Withdraw earnings:
									</h2>
									<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
										The accumulated cryptocurrency or in-game resources can be
										withdrawn to a wallet or exchanged for fiat through
										exchanges or internal exchanges.
									</p>
								</div>
								<Image
									src="/assets/pair2.png"
									width={340}
									height={340}
									alt="Income image"
									className="absolute -right-10 md:-right-[40%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** History */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative mt-20">
					<Container>
						<div className="max-w-xl mx-auto text-center" id="intro">
							<SectionBadge title="History" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								The History of Crypto Games
							</h2>
							<p className="text-muted-foreground mt-6 max-w-xl mx-auto text-justify">
								The idea of earning from crypto tasks emerged in the fall of
								2023 thanks to the Open Builders team. The first successful
								product to gain recognition in the crypto community was Notcoin.
								This project went through several development stages:
							</p>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/smile.jpg"
											width={500}
											height={500}
											alt="Income image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									- Beta version: The game’s test launch took place in the fall
									of 2023.
									<br />
									<br />
									- Release: In January 2024, after completing the tests, the
									number of users exceeded 5 million.
									<br />
									<br />
									- Popularization: Within 30 days of the release, the game’s
									audience reached 20 million users, attracting the attention of
									TON Foundation.
									<br />
									<br />
									The Notcoin project became the starting point for many other
									crypto games and tappers on Telegram, which continue to gain
									popularity.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/* Conclusion */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10 mt-12">
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
									Earning with crypto games on Telegram is an interesting and
									accessible way to generate additional income. With clickers
									and miners, users can earn crypto- or fiat currency by
									performing simple actions on their smartphones. The automation
									of processes and the low entry barrier make these games
									appealing to a wide audience.
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
