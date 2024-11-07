import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { LampContainer } from '@/components/ui/lamp';
import CardFlip from '@/components/CardFlip';
import CardSection from '@/components/CardSection';
import { getRandomCharacters } from '@/utils/characterUtils';
import NumberTicker from '@/components/ui/number-ticker';
import { aboutSeason } from '@/constants';

import Marquee from '@/components/ui/marquee';

import PulsatingButton from '@/components/ui/pulsating-button';

import characters from '@/constants/characters';
import GameCardFront from '@/components/moneymess/Card/GameCardFront';

import { cn } from '@/lib/utils';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import GameAttribute from '@/components/moneymess/Card/GameAttribute';

export const metadata: Metadata = {
	title: 'First season of MoneyMess',
	robots: {
		index: true,
		follow: true,
	},
};

const FirstSeason = () => {
	const dominion = characters.filter(
		(char) => char.characteristic === 'dominion'
	);

	dominion.sort(() => Math.random() - 0.5);

	const richness = characters.filter(
		(char) => char.characteristic === 'richness'
	);

	richness.sort(() => Math.random() - 0.5);

	const attractiveness = characters.filter(
		(char) => char.characteristic === 'attractiveness'
	);

	attractiveness.sort(() => Math.random() - 0.5);

	const popularity = characters.filter(
		(char) => char.characteristic === 'popularity'
	);

	popularity.sort(() => Math.random() - 0.5);

	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-2">
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-2 relative">
					<LampContainer>
						<div className="flex flex-col items-center justify-center relative w-full text-center">
							<h1 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase mt-8 w-[80%]">
								moneymess <br /> first season started right now
							</h1>
							<p className="text-muted-foreground mt-6 max-w-md mx-auto">
								From small contributions, a great idea takes shape.
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
							{/* <Button variant="white" className="mt-6" asChild>
								<Link href="#intro">
									Read more
									<ArrowRight className="w-4 h-4 ml-2" />
								</Link>
							</Button> */}
						</div>
					</LampContainer>
				</Wrapper>
			</section>

			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="max-w-xl mx-auto text-center" id="intro">
							<SectionBadge title="About First Season" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Whew, so what awaits us in the game, and specifically in First Season?
							</h2>
						</div>

						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 ">
								{/* Text */}
								<Container>
									<div className="text-base md:text-lg p-4 justify-center">
										<h3 className="text-2xl lg:text-3xl font-black uppercase mt-6 mb-6">
											Collect and gather unique game cards
										</h3>
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
									<div className="text-base md:text-lg p-4 items-center justify-center">
										<h3 className="text-2xl lg:text-3xl font-black uppercase mt-6 mb-6">
											First season of MoneyMess
										</h3>
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
								{/* Image */}
								<Container>
									<div className="relative flex items-center justify-center mx-auto mt-8">
										<div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem] " />
										<Image
											src="/assets/hero-4.png"
											alt="MoneyMess"
											width={700}
											height={482}
											quality={80}
											className="z-20 object-cover w-full h-full bottom-0 object-center overflow-hidden"
										/>
									</div>
								</Container>

								<Container>
									<div className="text-base md:text-lg p-4 justify-center">
										<h3 className="text-2xl lg:text-3xl font-black uppercase mt-6 mb-6">
											Collect and gather unique game cards
										</h3>
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
								</Container>

								<Container>
									<div className="text-base md:text-lg p-4 justify-center">
										<h3 className="text-2xl lg:text-3xl font-black uppercase mt-6 mb-6">
											Collect and gather unique game cards
										</h3>
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
								</Container>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** Introduction */}
			<section id="intro">
				<Wrapper className="flex flex-col items-center justify-center relative pt-12">
					<Container>
						<div className="max-w-md mx-auto text-center">
							{/* <SectionBadge title="Donations" /> */}
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								«With a little help from my friends»
							</h2>
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 h-full ">
							<div className="flex flex-col items-center max-w-3xl w-11/12 md:w-full">
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
									Let’s start by introducing ourselves. We are the team of
									developers and enthusiasts behind the game MoneyMess. We are
									creating a large-scale, ambitious gaming project. To further
									develop it and attract users, we need to secure early
									investments. The game is cyclical, and with each new season,
									we will be adding interesting and unique mechanics, while
									players’ achievements will be saved on the blockchain and
									carried over to the next season.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			<section>
				<Wrapper>
					<Container>
						<div className="flex flex-col items-start justify-start h-full">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-10 col-span-1 xl:col-span-2 justify-items-center items-center">
								<div className="relative">
									<div className="absolute top-1/2 left-1/2 -z-10 gradient-richness w-3/4 -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

									<div className="flex flex-col items-start justify-start h-full">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:col-span-2 justify-items-center items-center">
											<div className="">
												<CardFlip
													srcFront={richness[0].srcFront}
													srcFrontBg={richness[0].srcFrontBg}
													srcBack={richness[0].srcBack}
													altFront={richness[0].altFront}
													altBack={richness[0].altBack}
													colorTo={richness[0].colorTo}
													colorFrom={richness[0].colorFrom}
													name={richness[0].name}
													firstname={richness[0].firstname}
													lastname={richness[0].lastname}
													number={richness[0].number}
													characteristic={richness[0].characteristic}
												/>
											</div>

											<div className="col-span-1">
												<div className="max-w-lg mx-auto text-start md:text-center pb-6">
													<h3 className="text-2xl lg:text-3xl font-black uppercase pb-2">
														Richness
													</h3>
													<p className="text-muted-foreground">
														Increases the card's profitability, providing more
														resources
													</p>
												</div>
												<p className="text-justify">
													Rich characters can 'buy' the assistance of other
													cards, speed up task completion, or even bribe
													opponents. In critical moments, wealth is a versatile
													tool that can solve many problems with minimal losses.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="relative">
									<div className="absolute top-1/2 left-1/2 -z-10 gradient-dominion w-3/4 -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]" />

									<div className="flex flex-col items-center justify-center h-full">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:col-span-2 justify-items-center items-center">
											<div className="">
												<CardFlip
													srcFront={dominion[0].srcFront}
													srcFrontBg={dominion[0].srcFrontBg}
													srcBack={dominion[0].srcBack}
													altFront={dominion[0].altFront}
													altBack={dominion[0].altBack}
													colorTo={dominion[0].colorTo}
													colorFrom={dominion[0].colorFrom}
													name={dominion[0].name}
													firstname={dominion[0].firstname}
													lastname={dominion[0].lastname}
													number={dominion[0].number}
													characteristic={dominion[0].characteristic}
												/>
											</div>

											<div className="col-span-1">
												<div className="max-w-lg mx-auto text-start md:text-center pb-6">
													<h3 className="text-2xl lg:text-3xl font-black uppercase pb-2">
														Dominion
													</h3>
													<p className="text-muted-foreground">
														Increases the character's influence over in-game
														events
													</p>
												</div>
												<p className="text-justify">
													Cards with a high level of Dominion can 'subdue' other
													characters in situations of conflict or cooperation.
													This opens up additional paths for completing quests,
													giving you more choices and control over interaction
													outcomes.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="relative">
									<div className="absolute top-1/2 left-1/2 -z-10 gradient-popularity w-3/4 -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

									<div className="flex flex-col items-center justify-center h-full">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:col-span-2 justify-items-center items-center">
											<div className="">
												<CardFlip
													srcFront={popularity[0].srcFront}
													srcFrontBg={popularity[0].srcFrontBg}
													srcBack={popularity[0].srcBack}
													altFront={popularity[0].altFront}
													altBack={popularity[0].altBack}
													colorTo={popularity[0].colorTo}
													colorFrom={popularity[0].colorFrom}
													name={popularity[0].name}
													firstname={popularity[0].firstname}
													lastname={popularity[0].lastname}
													number={popularity[0].number}
													characteristic={popularity[0].characteristic}
												/>
											</div>

											<div className="col-span-1">
												<div className="max-w-lg mx-auto text-start md:text-center pb-6">
													<h3 className="text-2xl lg:text-3xl font-black uppercase pb-2">
														Popularity
													</h3>
													<p className="text-muted-foreground">
														Allows the card to gain more fans and bonuses
													</p>
												</div>
												<p className="text-justify">
													The higher the popularity, the more the character can
													'inspire' others, helping to manipulate their actions.
													Popular cards attract more attention and can earn
													additional bonuses from players' favor.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="relative">
									<div className="absolute top-1/2 left-1/2 -z-10 gradient-attractiveness w-3/4 -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]" />

									<div className="flex flex-col items-start justify-start h-full">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-10  xl:col-span-2 justify-items-center items-center">
											<div className="">
												<CardFlip
													srcFront={attractiveness[0].srcFront}
													srcFrontBg={attractiveness[0].srcFrontBg}
													srcBack={attractiveness[0].srcBack}
													altFront={attractiveness[0].altFront}
													altBack={attractiveness[0].altBack}
													colorTo={attractiveness[0].colorTo}
													colorFrom={attractiveness[0].colorFrom}
													name={attractiveness[0].name}
													firstname={attractiveness[0].firstname}
													lastname={attractiveness[0].lastname}
													number={attractiveness[0].number}
													characteristic={attractiveness[0].characteristic}
												/>
											</div>

											<div className="col-span-1">
												<div className="max-w-lg mx-auto text-start md:text-center pb-6">
													<h3 className="text-2xl lg:text-3xl font-black uppercase pb-2">
														Attractiveness
													</h3>
													<p className="text-muted-foreground">
														Enhances the character's external attractiveness
													</p>
												</div>
												<p className="text-justify">
													Cards with high attractiveness can 'charm' other
													characters, turning them into allies or weakening
													opponents' influence. Your character can use this to
													form alliances and gain bonuses in quests.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			<section id="cards">
				<Wrapper className="flex flex-col items-center justify-center relative pt-12">
					<Container>
						<div className="max-w-md mx-auto text-center">
							{/* <SectionBadge title="Donations" /> */}
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								«With a little help from my friends»
							</h2>
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 h-full ">
							<div className="flex flex-col items-center max-w-3xl w-11/12 md:w-full">
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
									Let’s start by introducing ourselves. We are the team of
									developers and enthusiasts behind the game MoneyMess. We are
									creating a large-scale, ambitious gaming project. To further
									develop it and attract users, we need to secure early
									investments. The game is cyclical, and with each new season,
									we will be adding interesting and unique mechanics, while
									players’ achievements will be saved on the blockchain and
									carried over to the next season.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			<section>
				<Wrapper className="flex flex-col items-center justify-center relative py-12">
					<Container>
						<div className=" w-full">
							<div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
								<div className="absolute top-1/2 left-1/2 -z-10 gradient w-1/4 -translate-x-1/2 h-1/8 -translate-y-1/2 inset-0 blur-[10rem]" />

								<Marquee pauseOnHover className="[--duration:20s] select-none">
									{characters.map((review) => (
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
															srcFrontBg={review.srcFrontBg}
															srcBack={review.srcBack}
															colorTo={review.colorTo}
															colorFrom={review.colorFrom}
															name={review.name}
															firstname={review.firstname}
															lastname={review.lastname}
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

			{/** Introduction */}
			<section id="stats">
				<Wrapper className="flex flex-col items-center justify-center relative pt-12">
					<Container>
						<div className="max-w-md mx-auto text-center">
							{/* <SectionBadge title="Donations" /> */}
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								«With a little help from my friends»
							</h2>
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 h-full ">
							<div className="flex flex-col items-center max-w-3xl w-11/12 md:w-full">
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
									Let’s start by introducing ourselves. We are the team of
									developers and enthusiasts behind the game MoneyMess. We are
									creating a large-scale, ambitious gaming project. To further
									develop it and attract users, we need to secure early
									investments. The game is cyclical, and with each new season,
									we will be adding interesting and unique mechanics, while
									players’ achievements will be saved on the blockchain and
									carried over to the next season.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** How it works */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="absolute top-1/2 left-1/2 -z-10 gradient-stone w-1/4 -translate-x-1/2 h-1/8 -translate-y-1/2 inset-0 blur-[10rem]" />
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-10 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
								{aboutSeason.map((perk) => (
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

					<Container>
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
					</Container>
				</Wrapper>
			</section>
		</div>
	);
};

export default FirstSeason;
