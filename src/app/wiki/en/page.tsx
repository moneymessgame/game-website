import React from 'react';
import { Metadata } from 'next';

import { Container, Wrapper } from '@/components/global';
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
			{/* Article Cards */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full gap-8">
								<CardDemo
									backgroundImage='bg-[url("/assets/bg1.jpg")] bg-cover'
									avatarSrc="/cards/irine.png"
									author="Irine"
									time="3 min read"
									title="NFT Games:"
									description="How Do They Work and How to Earn"
								/>
								<CardDemo
									backgroundImage='bg-[url("/assets/bg2.jpg")] bg-cover'
									avatarSrc="/cards/ihor.png"
									author="Ihor"
									time="4 min read"
									title="What is Play2Earn"
									description="And How to Make Money with It"
								/>
								<CardDemo
									backgroundImage='bg-[url("/assets/bg3.jpg")] bg-cover'
									avatarSrc="/cards/irine.png"
									author="Irine"
									time="3 min read"
									title="How to Earn with Crypto Games on Telegram"
									description="And what strategies and mechanisms exist."
								/>
								<CardDemo
									backgroundImage='bg-[url("/assets/bg4.jpg")] bg-cover'
									avatarSrc="/cards/gus.png"
									author="Gus"
									time="4 min read"
									title="TON and Crypto Games:"
									description="How to Earn with TON Tokens"
								/>
								<CardDemo
									backgroundImage='bg-[url("/assets/bg1.jpg")] bg-cover'
									avatarSrc="/cards/ihor.png"
									author="Ihor"
									time="3 min read"
									title="How to Choose Your First Play2Earn Game to Earn Without Investment"
									description="We will answer these questions and offer strategies for a successful start."
								/>
								<CardDemo
									backgroundImage='bg-[url("/assets/bg2.jpg")] bg-cover'
									avatarSrc="/cards/irine.png"
									author="Irine"
									time="2 min read"
									title="Passive Income in Games:"
									description="Top Strategies for Play2Earn Games"
								/>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>
		</div>
	);
};

export default AllArticles;
