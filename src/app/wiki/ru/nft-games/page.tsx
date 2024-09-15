import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight, Gem } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { featuresRu, NFTGamesRu } from '@/constants';
import { Icons } from '@/components';
import { cn } from '@/lib/utils';
import { LampContainer } from '@/components/ui/lamp';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { WobbleCard } from '@/components/ui/wobble-card';

export const metadata: Metadata = {
	title: 'Игры с NFT: как они работают и как заработать',
	robots: {
		index: true,
		follow: true,
	},
};

const ArticleRu = () => {
	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-2">
			{/** Lamp Header */}
			<section id="title">
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<LampContainer>
							<div className="flex flex-col items-center justify-center relative w-full text-center">
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[70%]">
									Игры с NFT: <br /> как они работают и как заработать?
								</h2>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto text-justify">
									NFT-игры представляют собой революционное направление в
									индустрии видеоигр, объединяющее блокчейн-технологии и
									гейминг.
								</p>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									3 мин.
								</p>
								<Button variant="white" className="mt-6" asChild>
									<Link href="#intro">
										Читать далее
										<ArrowRight className="w-4 h-4 ml-2" />
									</Link>
								</Button>
							</div>
						</LampContainer>
					</Container>
				</Wrapper>
			</section>

			{/** Intro */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="max-w-xl mx-auto text-center" id="intro">
							<SectionBadge title="Введение" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								NFT-игры: зарабатывать, играя в мире блокчейна
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/img1.jpg"
											width={500}
											height={500}
											alt="Play2Earn demo image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									NFT-игры представляют собой революционное направление в
									индустрии видеоигр, объединяющее блокчейн-технологии и
									гейминг. Эти игры предоставляют уникальные возможности для
									игроков, которые хотят не только развлекаться, но и
									зарабатывать на своих виртуальных активах. В этой статье мы
									разберем, что такое NFT-игры, как они работают, и какие
									стратегии заработка доступны игрокам.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** What are NFTs */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-16 relative">
					<Container>
						<div className="max-w-md mx-auto text-center">
							<SectionBadge title="NFT" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Что такое NFT и как они работают в играх?
							</h2>
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
								<div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
									<div className="flex items-center justify-center">
										<Gem className="w-10 h-10 pb-2 text-muted-foreground" />
									</div>
									<p className="mt-2 text-start lg:text-start">
										<strong>NFT (Невзаимозаменяемый Токен)</strong> — это
										уникальный цифровой актив, записанный в блокчейне, который
										представляет собой предмет или объект, имеющий
										индивидуальные характеристики. В отличие от взаимозаменяемых
										токенов, таких как биткоин, NFT не могут быть заменены, что
										делает их идеальными для создания уникальных цифровых
										предметов.
									</p>
								</div>
								<div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
									<div className="flex items-center justify-center">
										<Gem className="w-10 h-10 pb-2 text-muted-foreground" />
									</div>
									<p className="mt-2 text-start lg:text-start">
										В контексте игр, <strong>NFT</strong> могут быть
										использованы для создания уникальных персонажей, предметов
										или даже целых игровых миров. Эти активы могут быть куплены,
										проданы или обменены на специализированных платформах, что
										предоставляет игрокам возможность заработать на своих
										виртуальных достижениях.
									</p>
								</div>
								<div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
									<div className="flex items-center justify-center">
										<Gem className="w-10 h-10 pb-2 text-muted-foreground" />
									</div>
									<p className="mt-2 text-start lg:text-start">
										<strong>NFT</strong> в играх добавляют уникальность и
										ценность каждому элементу, что делает игровой процесс более
										увлекательным и прибыльным.
									</p>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** Successful NFT Games */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Популярные NFT-игры" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Примеры успешных NFT-игр
							</h2>
						</div>
					</Container>
					<Container className="flex items-center justify-center">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
							{NFTGamesRu.map((card) => (
								<Card
									key={card.title}
									className={cn(
										'flex flex-col w-full border-neutral-700',
										card.title === 'Unlimited Saas' && 'border-2 border-primary'
									)}
								>
									<CardHeader className="border-b border-border">
										<span>{card.title}</span>
										<CardTitle
											className={cn(
												card.title !== 'Unlimited Saas' &&
													'text-muted-foreground'
											)}
										></CardTitle>
										<CardDescription>{card.description}</CardDescription>
									</CardHeader>
								</Card>
							))}
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** How to Earn in NFT Games */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
					<div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w mx-auto text-center">
							<SectionBadge title="Зарабатывать в NFT-играх" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Как зарабатывают в NFT-играх?
							</h2>
							<p className="text-muted-foreground mt-6">
								В NFT-играх существует несколько основных способов заработка:
							</p>
						</div>
					</Container>
					<Container>
						<div className="flex items-center justify-center mx-auto mt-8">
							<Icons.feature className="w-auto h-80" />
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
								{featuresRu.map((feature) => (
									<div
										key={feature.title}
										className="flex flex-col items-start lg:items-start px-0 md:px-0"
									>
										<div className="flex items-center justify-center">
											<feature.icon className="w-8 h-8" />
										</div>
										<h3 className="text-lg font-medium mt-4">
											{feature.title}
										</h3>
										<p className="text-muted-foreground mt-2 text-start lg:text-start">
											{feature.info}
										</p>
									</div>
								))}
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** WobbleCard */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Играй и инвестируй" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Как начать играть и инвестировать в NFT-игры
							</h2>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
							<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
								<Image
									src="/assets/crypto2.webp"
									width={350}
									height={350}
									alt="linear demo image"
									className="absolute -right-10 md:-right-[40%] lg:-right-[-3%] -bottom-10 object-contain rounded-2xl"
								/>
								<div className="max-w-sm">
									<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										1. Выбор игры
									</h2>
									<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
										Исследуйте различные NFT-игры и выберите ту, которая
										соответствует вашим интересам и целям. Ознакомьтесь с
										механикой игры, внутренними токенами и возможностями
										заработка.
									</p>
								</div>
							</WobbleCard>
							<WobbleCard
								containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
								className=""
							>
								<div className="max-w-xs">
									<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										2. Создание криптовалютного кошелька
									</h2>
									<p className="mt-4 text-left  text-base/6 text-neutral-200">
										Для покупки и хранения NFT вам потребуется криптовалютный
										кошелек, поддерживающий стандарт токенов, используемый в
										выбранной игре.
									</p>
								</div>
								<Image
									src="/assets/crypto.webp"
									width={350}
									height={350}
									alt="linear demo image"
									className="absolute -right-4 lg:-right-[5%]  filter -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									3. Покупка NFT
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Используйте обменные платформы или внутренние маркетплейсы
									игры для покупки уникальных игровых предметов или активов.
									Оцените их стоимость и редкость, чтобы сделать выгодные
									вложения.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
								<div className="max-w-sm">
									<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										4. Участие в игре
									</h2>
									<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
										Играйтесь в игру, выполняйте задания, зарабатывайте токены и
										управляйте своими NFT. Регулярное участие в игре может
										увеличить ваши шансы на получение более ценных предметов.
									</p>
								</div>
								<Image
									src="/assets/crypto3.webp"
									width={350}
									height={350}
									alt="Participate in the game"
									className="absolute -right-10 md:-right-[40%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/* Conclusion */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Заключение" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								NFT-игры: виртуальные активы и реальные возможности
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/cat.jpg"
											width={500}
											height={500}
											alt="linear demo image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 flex items-center justify-center">
									NFT-игры представляют собой динамично развивающийся сегмент
									игровой индустрии, который сочетает в себе элементы
									блокчейн-технологий и гейминга. NFT-токены, используемые в
									таких играх, позволяют создавать уникальные цифровые активы,
									которые могут быть куплены, проданы или обменены, принося
									доход своим владельцам.
									<br />
									Тем не менее, стоит помнить о рисках, связанных с инвестициями
									в NFT-игры. Ценность NFT и внутриигровых токенов может
									колебаться в зависимости от рыночного спроса и динамики самой
									игры. Поэтому важно внимательно изучать рынок, понимать
									механизмы игры и инвестировать только те средства, которые вы
									готовы потерять.
									<br />
									NFT-игры — это не только способ развлечения, но и возможность
									стать частью растущей экосистемы, где ваши виртуальные
									достижения могут приносить реальные выгоды. Понимание основ,
									исследование успешных проектов и грамотное управление своими
									цифровыми активами помогут вам эффективно использовать
									потенциал NFT-игр и извлекать из них максимальную прибыль.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>
		</div>
	);
};

export default ArticleRu;
