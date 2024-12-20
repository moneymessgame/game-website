import React from 'react';
import { Metadata } from 'next';

import { Container, Wrapper } from '@/components/global';
import CardDemo from '@/components/blocks/cards-demo-2';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'All Articles',
	robots: {
		index: true,
		follow: true,
	},
};

const AllArticles = () => {
	return (
		<div className="w-full relative flex items-center justify-center flex-col py-2">
			{/* Article Cards */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full gap-8">
								<Link href="/wiki/ru/nft-games">
									<CardDemo
										backgroundImage='bg-[url("/assets/bg1.jpg")] bg-cover'
										avatarSrc="/cards/irine.png"
										author="Irine"
										time="3 мин."
										title="Игры с NFT:"
										description="Как они работают и как заработать"
									/>
								</Link>
								<Link href="/wiki/ru/play-to-earn">
									<CardDemo
										backgroundImage='bg-[url("/assets/bg2.jpg")] bg-cover'
										avatarSrc="/cards/ihor.png"
										author="Ihor"
										time="4 мин."
										title="Что такое Play2Earn"
										description="И как на этом заработать"
									/>
								</Link>
								<Link href="/wiki/ru/telegram-ton-games">
									<CardDemo
										backgroundImage='bg-[url("/assets/bg3.jpg")] bg-cover'
										avatarSrc="/cards/irine.png"
										author="Irine"
										time="5 мин."
										title="Как зарабатывать на криптоиграх в Telegram"
										description="Как можно зарабатывать с помощью криптоигр в Telegram и какие существуют стратегии и механизмы."
									/>
								</Link>
								<Link href="/wiki/ru/ton-games">
									<CardDemo
										backgroundImage='bg-[url("/assets/bg4.jpg")] bg-cover'
										avatarSrc="/cards/gus.png"
										author="Gus"
										time="4 мин."
										title="TON и криптоигры:"
										description="Как зарабатывать на играх с TON токенами"
									/>
								</Link>
								<Link href="/wiki/ru/choose-first-game">
									<CardDemo
										backgroundImage='bg-[url("/assets/bg4.jpg")] bg-cover'
										avatarSrc="/cards/ihor.png"
										author="Ihor"
										time="3 мин."
										title="Как выбрать первую Play2Earn игру для заработка без вложений"
										description="Ответим на эти вопросы и предложим стратегии для успешного старта."
									/>
								</Link>
								<Link href="/wiki/ru/passive-income">
									<CardDemo
										backgroundImage='bg-[url("/assets/bg4.jpg")] bg-cover'
										avatarSrc="/cards/irine.png"
										author="Irine"
										time="5 мин."
										title="Пассивный доход на играх:"
										description="Лучшие стратегии для Play2Earn игр"
									/>
								</Link>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>
		</div>
	);
};

export default AllArticles;
