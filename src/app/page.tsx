import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Wrapper from '@/components/global/wrapper';
import Container from '@/components/global/container';
import { perks, reviews } from '@/constants';
import OrbitIcon from '@/components/global/orbitIcon';
import { UserIcon } from 'lucide-react';
import SectionBadge from '@/components/ui/section-badge';
import Marquee from '@/components/ui/marquee';
import { FocusCards } from '@/components/ui/focus-cards';
import { TextGenerateEffectDemo } from '@/components/TextGenerateEffectDemo';
import { cn } from '@/lib/utils';
import { TweetComponent } from '@/components/TweetComponent';
import CardSpread from '@/components/animata/Card/card-spread';
import { cards, tweets } from '@/constants/index';
import CardSectionGenerate from '@/components/CardSectionGenerate';

import NumberTicker from '@/components/ui/number-ticker';

import PulsatingButton from '@/components/ui/pulsating-button';

import characters from '@/constants/characters';
import CardSection from '@/components/CardSection';

import GameCardFront from '@/components/moneymess/Card/GameCardFront';

export const metadata: Metadata = {
	title: 'MoneyMess',
	robots: {
		index: true,
		follow: true,
	},
};

const HomePage = () => {
	const firstRow = characters.slice(0, characters.length / 2);
	const secondRow = characters.slice(characters.length / 2);

	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 pt-8">
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
										<span className="text-lg font-black">Tap2Earn game</span>
									</span>
								</button>
							</Link>

							<div className="flex flex-col items-center max-w-3xl w-11/12 md:w-full">
								<div className="flex items-center justify-center">
									<h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-black uppercase text-center mb-10 bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
										MoneyMess
									</h1>
								</div>

								<div className="relative flex items-center">
									<div className="absolute top-1/2 left-1/2 -z-10 gradient w-full -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]" />

									<Image
										src="/assets/hero-4.png"
										alt="MoneyMess"
										width={700}
										height={482}
										className="z-20 object-cover min-w-full min-h-full bottom-0 object-center overflow-hidden"
									/>

									{/* <Image
											src="/assets/hero-3.png"
											alt="MoneyMess"
											width={400}
											height={830}
											quality={80}
											className="z-20 object-cover w-full bottom-0 object-center overflow-hidden"
										/> */}

									{/* <Image
											src="/assets/hero-5.png"
											alt="MoneyMess"
											width={700}
											height={454}
											quality={80}
											className="z-20 object-cover w-full bottom-0 object-center overflow-hidden"
										/> */}
								</div>

								<div className="-m-30">
									<p className="text-base md:text-lg text-foreground/80 text-center">
										I envy you, lucky one, because you’ve found the game, the
										one you've heard so much about, the one you’ve seen in your
										dreams and fantasies. An incredible, fantastic, magical game
										– MoneyMess.
									</p>
									<p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
										Onward to adventure!
									</p>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			<section>
				<Wrapper className="flex flex-col items-center justify-center pb-20 relative">
					<div className="absolute top-1/2 left-1/2 -z-10 gradient w-full -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
					<Container>
						<div className="flex flex-col text-2xl font-thin text-center tracking-tighter leading-10 max-w-4xl w-11/12 md:w-full">
							<TextGenerateEffectDemo
								subtitle="Welcome to MoneyMess — an alternate reality where the world’s most famous and influential personalities are at the heart of a sprawling game metropolis. In this city, every strategy and decision you make can shift the balance of power, allowing legendary figures to become your allies in the battle for power, popularity, wealth, and attractiveness. MoneyMess is a unique collectible card game, built on the TON blockchain and integrated into Telegram. Every day brings new text-based quests with multiple choices, where each decision impacts your characters' growth and boosts specific traits. The right strategy is the key to victory!"
							/>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/* <FocusCards cards={cards} /> */}

			{/**Characters */}
			{/* <CardSection
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
						name: 'Elan Mosk',
					},
					{
						srcFront: '/characters/middle/card02.png',
						srcBack: '/cards/card-back.jpg',
						altFront: 'Beauty character',
						altBack: 'Richness character',
						colorTo: '#9c40ff',
						colorFrom: '#0ffcff',
						name: 'Kim Kong-fun',
					},
					{
						srcFront: '/characters/middle/card25.png',
						srcBack: '/cards/card-back.jpg',
						altFront: 'Richness character',
						altBack: 'Richness character',
						colorTo: '#9c40ff',
						colorFrom: '#ffff0f',
						name: 'Charleez Tiron',
					},
					{
						srcFront: '/characters/middle/card20.png',
						srcBack: '/cards/card-back.jpg',
						altFront: 'Popularity character',
						altBack: 'Popularity character',
						colorTo: '#9c40ff',
						colorFrom: '#0fff0f',
						name: 'Papi Frank',
					},
				]}
				colorTo={''}
				colorFrom={''}
			/> */}

			{/* <CardSectionGenerate
				title="Characters"
				description="Choose your character and his/her main trait"
				numberOfCharacters={4}
			/> */}

			{/** Intro */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="max-w-xl mx-auto text-center" id="intro">
							<SectionBadge title="Introduction" />
							<h2 className="text-2xl lg:text-3xl font-black uppercase mt-6 mb-6">
								What challenges will players face in the game?
							</h2>
						</div>
						
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 ">
								{/* Image */}
								<Container>
									<div className="relative flex items-center justify-center mx-auto mt-8">
										<div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem] " />
										<Image
											src="/assets/hero-3.png"
											alt="MoneyMess"
											width={400}
											height={830}
											quality={80}
											className="z-20 object-cover w-[400px] h-[830px] bottom-0 object-center overflow-hidden"
										/>
									</div>
								</Container>
								{/* Text */}
								<Container>
									<div className="text-base md:text-lg text-foreground/80 p-4 justify-center">
										<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
											Collect and gather unique game cards
										</h2>
										<p>
											Expand your collection of game cards, level up acquired
											characters, creating a unique personality for each one.
											Turn your game card into an NFT.
										</p>
										<Link
											href="https://t.me/moneymesschannel"
											target="_blank"
											rel="noopener noreferrer"
										>
											<PulsatingButton className="mt-8">
												Play right now
											</PulsatingButton>
										</Link>
									</div>
									<div className="text-base md:text-lg text-foreground/80 p-4 items-center justify-center">
										<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
											First season of MoneyMess
										</h2>
										<p>
											Complete various exciting tasks and quests daily. Level up
											your character in four attributes:&nbsp;
											<span className="text-[#ffff0f]">dominion</span>,&nbsp;
											<span className="text-[#0ffcff]">popularity</span>,&nbsp;
											<span className="text-[#0fff0f]">richness</span> and&nbsp;
											<span className="text-[#ff0f0f]">attractiveness</span>.
										</p>
										<Link
											href="https://t.me/moneymesschannel"
											target="_blank"
											rel="noopener noreferrer"
										>
											<PulsatingButton className="mt-8">
												More details about the first season
											</PulsatingButton>
										</Link>
									</div>
								</Container>
							</div>
						</div>
						
					</Container>
				</Wrapper>
			</section>

			{/** Testimonials */}
			<section id="reviews">
				<Wrapper className="flex flex-col items-center justify-center relative">
					<div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="px-6">
							<div
								className="max-w-md md:max-w-xl mx-auto text-center"
								id="intro"
							>
								<SectionBadge title="Game cards" />
								<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
									Unique characters with individual personalities
								</h2>
							</div>
						</div>

						<div className="py-10 w-full">
							<div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
								<div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]" />

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
												<div className="m-4 w-[285px] h-[390px] rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
													<div className="w-[100%] h-[100%] overflow-hidden relative rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1">
														<GameCardFront
															key={review.name}
															srcFront={review.srcFront}
															colorTo={review.colorTo}
															colorFrom={review.colorFrom}
															name={review.name}
															characteristic={review.characteristic}
															number={review.number}
															altFront={review.altFront}
														/>
													</div>
												</div>
											</div>
											{/* <blockquote className="mt-2 text-sm">
												{review.body}
											</blockquote> */}
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
												<div className="m-4 w-[285px] h-[390px] rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
													<div className="w-[100%] h-[100%] overflow-hidden relative rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1">
														<GameCardFront
															key={review.name}
															srcFront={review.srcFront}
															colorTo={review.colorTo}
															colorFrom={review.colorFrom}
															name={review.name}
															characteristic={review.characteristic}
															number={review.number}
															altFront={review.altFront}
														/>
													</div>
												</div>
											</div>
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

			{/* Tweets */}
			{/* <section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<Container>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
							{tweets.map((tweet, index) => {
								return (
									<div key={index} className={`shadow-md rounded-lg p-4 `}>
										<TweetComponent
											username={tweet.username}
											handle={tweet.handle}
											avatarUrl={tweet.avatarUrl}
											replyTo={tweet.replyTo}
											text={tweet.text}
											time={tweet.time}
											date={tweet.date}
											likes={tweet.likes}
											replies={tweet.replies}
										/>
									</div>
								);
							})}
						</div>
					</Container>
				</Wrapper>
			</section> */}

			{/** How it works */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					{/* <Container>
						<div className="max-w-md mx-auto text-start md:text-center flex flex-col justify-center items-center">
							<Image
								src="/cards/rock.png"
								alt="planets"
								width={300}
								height={300}
								quality={100}
							/>
							
							<h2 className="text-4xl mt-8 md:text-5xl lg:text-xl md:!leading-snug font-black uppercase text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
								And have fun!
							</h2>
							<p className="text-center text-muted-foreground mt-6 ">
								Because the main goal is to have fun and bring you something
								more exciting than a simple Telegram clicker. So buckle up and
								let's get started!
							</p>
						</div>
					</Container> */}
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-10 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
								{perks.map((perk) => (
									<div
										key={perk.title}
										className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
									>
										{/* <div className="flex items-center justify-center">
											<perk.icon className="w-8 h-8" />
										</div> */}
										<div className="whitespace-pre-wrap text-6xl font-thin tracking-tighter text-white">
											<NumberTicker value={perk.value} />
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
