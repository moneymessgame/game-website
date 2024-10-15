import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight, ChevronRight, UserIcon, Zap } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { features, perks, NFTGames, reviews } from '@/constants';
import { Icons } from '@/components';
import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import { LampContainer } from '@/components/ui/lamp';
import { Input } from '@/components/ui/input';
import OrbitIcon from '@/components/global/orbitIcon';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import CardSection from '@/components/CardSection';
import TeamSection from '@/components/TeamSection';

import CardFlip from '@/components/CardFlip';

export const metadata: Metadata = {
	title: 'About MoneyMess',
	robots: {
		index: true,
		follow: true,
	},
};

const HomePage = () => {
	const firstRow = reviews.slice(0, reviews.length / 2);
	const secondRow = reviews.slice(reviews.length / 2);

	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
			{/** Lamp Header */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<LampContainer>
							<div className="flex flex-col items-center justify-center relative w-full text-center">
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[100%]">
									About us: <br /> behind the scenes
								</h2>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto ">
									Our team is a group of young blockchain and technology
									enthusiasts, creating not just a game, but an entire metaverse
									filled with innovation and creativity. We are building a
									unique world with mysterious heroes, where players decide what
									is real and what is an illusion.
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

			{/** About us */}
			<section>
				<Wrapper>
					<div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]"  id="intro"/>
					<Container>
						<div className="flex flex-col items-center justify-center pt-10 pb-20 h-full ">
							<div className="flex flex-col items-center max-w-3xl w-11/12 md:w-full">
								<div className="flex items-center justify-center">
									<h1 className="text-4xl mb-5 md:text-6xl lg:text-xl md:!leading-snug font-black uppercase text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
										About Us
									</h1>
								</div>
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
									Our team is a young and dynamic group of blockchain and
									technology enthusiasts, united by a shared vision of creating
									something more than just a game—an entire metaverse. We are
									passionate believers in the power of innovation and
									creativity, with each of us pouring a piece of ourselves into
									this project, striving to bring something extraordinary to the
									world beyond just a mobile app.
								</p>
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
									We have crafted a unique world where the heroes aren’t always
									who they seem to be. Perhaps they remind you of someone from
									real life, or maybe you’ve stumbled into a parallel reality.
									Our project is filled with mysteries and surprises, and it’s
									up to you to decide what’s real and what’s merely an illusion.
									We’re not just building a game; we’re creating a world that
									will immerse you in its captivating and multi-layered story.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** Team */}
			<div className="flex justify-center mb-20">
				<TeamSection
					title="Team"
					description="Meet the team behind MoneyMess"
					cards={[
						{
							src: '/cards/ihor.png',
							alt: 'Founder and CEO',
							colorTo: '#9c40ff',
							colorFrom: '#ff0f0f',
						},
						{
							src: '/cards/irine.png',
							alt: 'Co-founder and CTO',
							colorTo: '#9c40ff',
							colorFrom: '#0ffcff',
						},
						{
							src: '/cards/gus.png',
							alt: 'Creative inspirer',
							colorTo: '#9c40ff',
							colorFrom: '#ffff0f',
						},
					]}
					columns={3}
				/>
			</div>
		</div>
	);
};

export default HomePage;
