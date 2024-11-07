import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { LampContainer } from '@/components/ui/lamp';
import { Cover } from '@/components/ui/cover';
import CopyToClipboard from '@/components/ui/copy-to-clipboard';

export const metadata: Metadata = {
	title: 'Donate to MoneyMess',
	robots: {
		index: true,
		follow: true,
	},
};

const Donate = () => {
	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-2">
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-2 relative">
					<Container>
						<LampContainer>
							<div className="flex flex-col items-center justify-center relative w-full text-center">
								<h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase mt-8 w-[80%]">
									A great idea is born with <br /> the help of small
									contributions
								</h2>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									From small contributions, a great idea takes shape.
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

			{/** Donation Wallets */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]" />
					<Container>
						<div className="flex flex-col items-center justify-center py-6 md:py-6 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900 gap-7">
								<div>
									<p>
										TON wallet:
									</p>
									<CopyToClipboard
										text={'UQBgfOQ1ukrW_-cWsYFMy7rM_RtkO-VL8UpN3Rg68jjNAzIy'}
										currency={'TON'}
									/>
								</div>
								<div>
									<p>
										ETHEREUM wallet:
									</p>
									<CopyToClipboard
										text={'0x357d8fA29bb2C6a65EC34AD744C887fBab6CCF01'}
										currency={'ETH'}
									/>
								</div>
								<div>
									<p>
										SOLANA wallet:
									</p>
									<CopyToClipboard
										text={'91aLofMAABaNAc8n62yet3Y23czjmnmGVRGhZGhbRcsL'}
										currency={'SOL'}
									/>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** Introduction */}
			<section id="intro">
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="max-w-md mx-auto text-center">
							<SectionBadge title="Donations" />
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
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
									Everyone who supports us and our project at this stage can
									expect a significant return on their investment, unique
									rewards and bonuses, and their name will forever go down in
									the history of the game universe as one of its{' '}
									<b>
										<i>Patriarch</i>
									</b>{' '}
									or, of course,{' '}
									<b>
										<i>Matriarch</i>
									</b>{' '}
									of the game.
								</p>
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
									<b>To develop and promote the game, we need:</b>
								</p>
								<div className="font-black text-6xl md:text-9xl py-5 ">
									<Cover>$500,000</Cover>
								</div>
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
									These funds will be used for initial marketing, team
									expansion, and bringing in top specialists. All this is to
									show players, investors, and interested people what a web3
									project can be when it is made with passion. We are truly
									creating a revolution in the world of web3 game development.
									This isn’t just another “tap-to-play” game, but the future, a
									great future, the greatest future. A world where every
									player’s efforts will truly be rewarded. We are building a new
									world, a gaming metaverse on the TON blockchain, where every
									second of your time and every action you take has value.
								</p>
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
									A free donation to support the project can be made to any of
									our wallets across various blockchain networks. It’s quick and
									simple. And we will be endlessly grateful for your support and
									help.
								</p>
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
									Okay, okay, maybe not{' '}
									<b>
										<i>endlessly</i>
									</b>
									. After all, as programmers, we know that infinity is, well, a
									lot!
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** Donation Wallets */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]" />
					<Container>
						<div className="flex flex-col items-center justify-center py-6 md:py-6 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900 gap-7">
								<div>
									<p>
										Copy the address of our wallet <br /> in the TON network:
									</p>
									<CopyToClipboard
										text={'UQBgfOQ1ukrW_-cWsYFMy7rM_RtkO-VL8UpN3Rg68jjNAzIy'}
										currency={'TON'}
									/>
								</div>
								<div>
									<p>
										Copy the address of our wallet <br /> in the ETHEREUM
										network:
									</p>
									<CopyToClipboard
										text={'0x357d8fA29bb2C6a65EC34AD744C887fBab6CCF01'}
										currency={'ETH'}
									/>
								</div>
								<div>
									<p>
										Copy the address of our wallet <br /> in the SOLANA network:
									</p>
									<CopyToClipboard
										text={'91aLofMAABaNAc8n62yet3Y23czjmnmGVRGhZGhbRcsL'}
										currency={'SOL'}
									/>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>
		</div>
	);
};

export default Donate;
