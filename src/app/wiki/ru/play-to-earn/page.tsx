import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight, Gamepad2 } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { playToEarnRu, NFTGamesRu } from '@/constants';
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
	title: 'Что такое Play2Earn и как на этом заработать',
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
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[60%]">
									Что такое Play2Earn и как на этом заработать
								</h2>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto text-justify">
									В последние годы концепция Play2Earn (P2E) привлекла
									значительное внимание в мире видеоигр и криптовалют. Этот
									новый тренд позволяет игрокам зарабатывать деньги, играя в
									игры. В этой статье мы разберём, что такое Play2Earn, как он
									работает, и как можно начать зарабатывать на играх.
								</p>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									4 мин.
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
								Что такое Play2Earn?
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									Play2Earn (играй и зарабатывай) — это модель игр, при которой
									игроки получают реальные деньги или криптовалюту за активное
									участие в игровом процессе. В отличие от традиционных игр, где
									деньги тратятся исключительно на развлечения, в P2E-играх
									игроки могут зарабатывать, выполняя различные задания,
									участвуя в турнирах, или просто играя в игру.
								</p>
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/img2.jpg"
											width={400}
											height={400}
											alt="Play2Earn demo image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** How Play2Earn Games Work */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
					<div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w mx-auto text-center">
							<SectionBadge title="Принцип работы P2E" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Принцип работы Play2Earn игр
							</h2>
							<p className="text-muted-foreground mt-6 max-w-lg mx-auto">
								Play2Earn игры основываются на блокчейн-технологиях, которые
								обеспечивают безопасность и прозрачность транзакций. Основные
								принципы работы таких игр следующие:
							</p>
						</div>
					</Container>
					<Container>
						<div className="flex items-center justify-center mx-auto mt-8">
							{/* <Icons.feature className="w-auto h-80" /> */}
							<Image
								src="/assets/nft.png"
								width={300}
								height={300}
								alt="linear demo image"
							/>
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
								{playToEarnRu.map((feature) => (
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

			{/** Advantages of Play2Earn Games */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-16 relative">
					<Container>
						<div className="max-w-md mx-auto text-center">
							<SectionBadge title="Преимущества P2E" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Преимущества Play2Earn игр
							</h2>
						</div>
					</Container>
					<Container>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
								<div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
									<div className="flex items-center justify-center">
										<Gamepad2 className="w-10 h-10 pb-2 text-muted-foreground" />
									</div>
									<p className="mt-2 text-start lg:text-start">
										<strong>Возможность заработка:</strong> Самое очевидное
										преимущество — возможность зарабатывать деньги, играя. Это
										привлекает много людей, стремящихся монетизировать своё
										время и усилия. предметов.
									</p>
								</div>
								<div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
									<div className="flex items-center justify-center">
										<Gamepad2 className="w-10 h-10 pb-2 text-muted-foreground" />
									</div>
									<p className="mt-2 text-start lg:text-start">
										<strong>Доступ к уникальным активам:</strong> NFT,
										используемые в таких играх, могут иметь значительную
										ценность, особенно если они уникальны или редки. Игроки
										могут зарабатывать на продаже или обмене этих активов.
									</p>
								</div>
								<div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
									<div className="flex items-center justify-center">
										<Gamepad2 className="w-10 h-10 pb-2 text-muted-foreground" />
									</div>
									<p className="mt-2 text-start lg:text-start">
										<strong>Децентрализация:</strong> Блокчейн технологии
										обеспечивают прозрачность и безопасность транзакций,
										уменьшая риск мошенничества и обеспечивая честные условия
										игры.
									</p>
								</div>
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
							<SectionBadge title="Играй и зарабатывай" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-12">
								Как начать играть и зарабатывать
							</h2>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									1. Выбор игры:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Исследуйте различные P2E игры и выберите ту, которая вам
									наиболее интересна. Обратите внимание на репутацию игры, её
									экономическую модель и отзывы игроков.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									2. Создание кошелька:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Для участия в играх на блокчейне вам потребуется
									криптовалютный кошелёк (например, MetaMask), чтобы хранить
									свои токены и NFT.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									3. Покупка NFT или токенов:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									В некоторых играх нужно приобрести начальные активы, такие как
									NFT или токены. Убедитесь, что вы понимаете, как и где делать
									эти покупки безопасно.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									4. Активное участие:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Начните играть в игру, выполнять задания, участвовать в
									соревнованиях и торговать активами, чтобы зарабатывать.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									5. Монетизация:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Если вы накопите достаточное количество ценного контента или
									токенов, вы сможете обменивать их на деньги или криптовалюту
									через специальные платформы или биржи.
								</p>
								<Image
									src="/assets/boy.png"
									width={350}
									height={350}
									alt="Crypto"
									className="absolute -right-4 lg:-right-[0%]  filter -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/* Conclusion */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10 mt-16">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Заключение" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Заключение
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<p className="text-base md:text-lg text-foreground/80 flex items-center justify-center">
									Play2Earn открывает новые возможности для геймеров, позволяя
									им зарабатывать деньги на своём увлечении. Тем не менее, важно
									понимать потенциальные риски и быть готовым к нестабильности
									рынка. Если вы хотите попробовать свои силы в этой модели,
									выберите надёжные игры, изучите их особенности и начните
									зарабатывать, играя!
								</p>
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/cat2.jpg"
											width={400}
											height={400}
											alt="linear demo image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>
		</div>
	);
};

export default ArticleRu;
