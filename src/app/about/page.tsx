import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'lucide-react';

import { Container, Wrapper } from '@/components/global';
import { Button, LampContainer } from '@/components/ui';
import TeamSection from '@/components/TeamSection';

export const metadata: Metadata = {
	title: 'About MoneyMess',
	robots: {
		index: true,
		follow: true,
	},
};

const AboutUs = () => {
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
					<div
						className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]"
						id="intro"
					/>
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
			<div className="flex justify-center">
				<TeamSection
					title="Team"
					description="Meet the team behind MoneyMess"
					cards={[
						{
							src: '/cards/ihor.png',
							alt: 'Founder & CEO',
							colorTo: '#9c40ff',
							colorFrom: '#ff0f0f',
							email: 'moneymessgame@gmail.com',
							linkedIn: 'https://www.linkedin.com/in/mafstat',
							gitHub: 'https://github.com/moneymessgame',
							hyperText: 'Founder & CTO',
							subtitle:
								"They say I'm the visionary and mastermind behind our project, laying the backbone of the entire system. But honestly, I prefer to see myself as just a humble contributor to a fantastic team effort. My technical expertise helps shape the architecture of our game’s metaverse, and to integrate blockchain for processing transactions. With a deep passion for AI, blockchain, and Web3, I’m constantly pushing the limits of innovation, ensuring that every technical element aligns with our ambitious vision.",
						},
						{
							src: '/cards/irine.png',
							alt: 'Co-founder & WebDev',
							colorTo: '#9c40ff',
							colorFrom: '#0ffcff',
							email: 'isemichasova@gmail.com',
							linkedIn: 'https://www.linkedin.com/in/irina-semichasova',
							gitHub: 'https://github.com/Irine7',
							hyperText: 'Co-founder & WebDev',
							subtitle:
								'A constant learner and a driving force behind our tech innovations. They say I lay the foundation of the project. My thoughts? Let’s push boundaries and innovate! I’m responsible for building and perfecting our Telegram mini app, handling both client and server sides. Developing seamless web application, and optimizing Play2Earn mechanics are my primary focus. I make sure our interfaces shine, and constantly optimize processes to ensure top-quality code and an exceptional user experience.',
						},
						{
							src: '/cards/gus.png',
							alt: 'Creative inspirer',
							colorTo: '#9c40ff',
							colorFrom: '#ffff0f',
							email: 'moneymessgame@gmail.com',
							linkedIn: 'https://www.linkedin.com/in/mafstat',
							gitHub: 'https://github.com/moneymessgame',
							hyperText: 'Creative inspirer',
							subtitle:
								"Just a cute and charming guy. They say I'm the heart and core of the team. And what do I think? Hmm... Let’s hardcore! I’m always here to lift spirits and motivate everyone around me. I thrive on collaboration, helping to turn ideas into reality. I believe in embracing challenges and exploring new possibilities. This is it! Together, we’re building something extraordinary, and I can’t wait to see where this journey takes us. Let’s make magic happen!",
						},
					]}
					columns={3}
				/>
			</div>
		</div>
	);
};

export default AboutUs;
