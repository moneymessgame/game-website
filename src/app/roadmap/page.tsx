import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
	ArrowRight,
	ChevronRight,
	Gamepad2,
	Send,
	UserIcon,
	Zap,
} from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { features, perks, pricingCards, reviews } from '@/constants';
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
import Roadmap from '@/components/Roadmap';

export const metadata: Metadata = {
	title: 'Roadmap MoneyMess',
	robots: {
		index: true,
		follow: true,
	},
};

const RoadMap = () => {
	const firstRow = reviews.slice(0, reviews.length / 2);
	const secondRow = reviews.slice(reviews.length / 2);

	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
			{/**Description */}
			<section>
				<Wrapper>
					<div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />
					<Container>
						<div className="flex flex-col items-center justify-center py-20 h-full">
							<div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
								<div className="flex items-center justify-center">
									<h1 className="text-4xl mb-5 md:text-6xl lg:textxl md:!leading-snug font-black uppercase text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
										RoadMap
									</h1>
								</div>

								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
								Our game is an exciting Play2Earn project where players collect and develop unique planets and characters, each with four main attributes: <strong>Attractiveness, Power, Wealth, and Popularity</strong>. The game features 38 unique characters, each possessing special abilities that influence these attributes. A key part of the gameplay is social interaction, allowing players to connect with friends through an integrated Telegram interface.
								</p>
								<p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
								The Roadmap outlines important stages of the game's development, starting with the <strong>Main Game Launch</strong>, introducing all key gameplay mechanics. Following the launch, a <strong>Referral System</strong> will be implemented to attract new players and expand the community. Regular <strong>Daily Rewards</strong> and unique <strong>Special Cards</strong> will add motivation and variety to the gameplay. To enhance player convenience, an <strong>in-game Wallet</strong> will be integrated, allowing for direct management of cryptocurrency assets within the game. We are also actively working on <strong>On-chain infrastructure development</strong> and planning <strong>Partner Blockchain Announcements</strong> to ensure the sustainable growth of the project and strengthen its position within the blockchain community.
								</p>
							</div>
						</div>
						<Roadmap />
					</Container>
				</Wrapper>
			</section>
			<Image
				className="absolute "
				src="/cards/rock2.png"
				alt="planets"
				width={200}
				height={200}
				style={{ left: '90px', bottom: '-80px'}}
			/>
		</div>
	);
};

export default RoadMap;
