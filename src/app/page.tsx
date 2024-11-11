import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { UserIcon } from 'lucide-react';

import { Container, Wrapper } from '@/components/global';
import {
	Marquee,
	SectionBadge,
	NumberTicker,
	PulsatingButton,
} from '@/components/ui';
import { reviews, firstPageStats } from '@/constants';
import { TextGenerateEffectDemo } from '@/components/TextGenerateEffectDemo';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'MoneyMess',
	robots: {
		index: true,
		follow: true,
	},
};

const HomePage = () => {
	const reviewsList = reviews;

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
								<div className="flex flex-col items-center justify-center">
									<h1 className="text-4xl md:text-6xl md:!leading-snug font-black uppercase text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
										MoneyMess
									</h1>
									<div className="flex flex-col text-2xl font-light text-center tracking-tighter leading-10 max-w-xl w-11/12 md:w-full mb-10">
										<TextGenerateEffectDemo subtitle="Become a legend by playing as legends!" />
									</div>
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
								</div>

								<div className="-m-30">
									<p className="text-base md:text-lg text-foreground/80 text-center">
										I envy you, lucky one, because you’ve found the game, the
										one you've heard so much about, the one you’ve seen in your
										dreams and fantasies. An incredible, fantastic, magical game
										– MoneyMess.
									</p>
									<p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
										Off to explore!
									</p>
								</div>
							</div>
						</div>
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
											className="z-20  w-[400px] h-[830px] bottom-0 object-center overflow-hidden"
										/>
									</div>
								</Container>
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
											your character in four traits:&nbsp;
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
			<section id="reviews" className="overflow-x-hidden">
				<Wrapper className="flex flex-col items-center justify-center relative w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg overflow-hidden">
					<Container>
						<div className="px-6">
							<div
								className="max-w-sm md:max-w-xl mx-auto text-center"
								id="intro"
							>
								<SectionBadge title="Game cards" />
								<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
									What do the characters themselves think about the game?
								</h2>
							</div>
						</div>

						<div className="py-10 w-full">
							<div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
								<Marquee pauseOnHover className="[--duration:20s] select-none">
									{reviewsList.map((review) => (
										<figure
											key={review.name}
											className={cn(
												'relative max-w-full cursor-pointer overflow-hidden rounded-xl border p-4',
												'border-zinc-50/[.9] bg-background over:bg-zinc-50/[.15]'
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
									{reviewsList.map((review) => (
										<figure
											key={review.name}
											className={cn(
												'relative max-w-full cursor-pointer overflow-hidden rounded-xl border p-4',
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

			{/** Introduction */}
			<section id="stats">
				<Wrapper className="flex flex-col items-center justify-center relative pt-12">
					<Container>
						<div className="max-w-md mx-auto text-center">
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Not just a game, but a fairy tale
							</h2>
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 h-full ">
							<div className="flex flex-col items-center max-w-3xl w-11/12 md:w-full">
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
									All resemblances are fictional, but, actually, the game
									characters really do have these names. Anything you think you
									saw—well, it was just your imagination. Get lost in the magic
									of the game, it’s thrilling and full of wonder.
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
							<div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4 w-full justify-items-center divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
								{firstPageStats.map((perk) => (
									<div
										key={perk.title}
										className="flex flex-col items-center md:items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4 text-center md:text-start"
									>
										<div className="whitespace-pre-wrap text-6xl font-thin tracking-tighter text-white">
											<NumberTicker value={perk.value} />
										</div>
										<h3 className="text-lg font-medium mt-4">{perk.title}</h3>
										<p className="text-muted-foreground mt-2 text-justify md:text-left">
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
								alt="rock"
								width={300}
								height={300}
								quality={100}
							/>

							<h4 className="text-2xl mt-8 lg:text-3xl md:!leading-snug font-black uppercase text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
								Even this stone has its own story, but you don't.
							</h4>
							<p className="text-center text-muted-foreground mt-6">
								Lately, nothing has been happening with the stone. And even it
								spent the weekend more interestingly than you. Hurry up and
								start playing.
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

export default HomePage;
