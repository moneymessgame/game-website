import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import { LampContainer } from '@/components/ui/lamp';

import CardDemo from '@/components/blocks/cards-demo-2';

export const metadata: Metadata = {
	title: 'All Articles',
	robots: {
		index: true,
		follow: true,
	},
};

const AllArticles = () => {
	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-2">
			{/** Lamp Header */}
			<section id="title">
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<LampContainer>
							<div className="flex flex-col items-center justify-center relative w-full text-center">
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase">
									NFT games: <br /> how do they work and how to Earn?
								</h2>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									NFT games represent a cutting-edge trend in the video game
									industry, combining blockchain technology and gaming.
								</p>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									3 min read
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

			{/* Article Cards */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
								<CardDemo />
								<CardDemo />
								<CardDemo />
								<CardDemo />
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>
		</div>
	);
};

export default AllArticles;
