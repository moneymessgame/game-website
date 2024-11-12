import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'lucide-react';

import { Container, Wrapper } from '@/components/global';
import { Button, Card, CardDescription, CardHeader, CardTitle, LampContainer, SectionBadge, WobbleCard } from '@/components/ui';
import { TonTokensRu } from '@/constants';
import { cn } from '@/lib/utils';
import CardHover from '@/components/CardHover';

export const metadata: Metadata = {
	title: 'TON и криптоигры',
	description: 'Как зарабатывать на играх с TON токенами',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'TON и криптоигры',
		description: 'Как зарабатывать на играх с TON токенами',
		type: 'article',
		publishedTime: '2024-09-12T00:19:00.000Z',
		authors: 'MoneyMess',
	},
};

const ArticleRu = () => {
	return (
		<div className="w-full relative flex items-center justify-center flex-col py-2">
			{/** Lamp Header */}
			<section id="title">
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<LampContainer>
							<div className="flex flex-col items-center justify-center relative w-full text-center">
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[70%]">
									TON и криптоигры: как зарабатывать на играх с TON токенами
								</h2>
								<p className="text-muted-foreground mt-6 max-w-xl mx-auto text-justify">
									С развитием блокчейн-технологий индустрия криптоигр продолжает
									стремительно развиваться. Одна из наиболее перспективных
									платформ в этом направлении — TON (The Open Network),
									известная своей тесной интеграцией с Telegram и возможностями
									для создания децентрализованных приложений и игр. В этой
									статье мы рассмотрим, как TON интегрируется в криптоигры, как
									работают токены TON, и как вы можете заработать на играх,
									использующих этот блокчейн.
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
							<SectionBadge title="Introduction" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Что такое TON и как он связан с криптоиграми
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/cat3.jpg"
											width={500}
											height={500}
											alt="Play2Earn demo image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									TON — это блокчейн-платформа, первоначально разработанная
									командой Telegram для создания быстрой и масштабируемой сети,
									способной поддерживать децентрализованные приложения (dApps) и
									смарт-контракты. После ряда изменений TON превратилась в
									независимый проект с открытым исходным кодом, и стала одной из
									ведущих платформ для разработки игр и приложений с
									использованием блокчейна.
									<br />
									<br />
									Криптоигры на TON — это игры, которые используют
									инфраструктуру TON для хранения данных, обработки транзакций и
									выпуска внутриигровых активов в виде токенов или NFT
									(Non-Fungible Tokens). Благодаря своей скорости, безопасности
									и тесной интеграции с Telegram, TON предоставляет уникальные
									возможности для разработки и запуска игр с реальными
									финансовыми стимулами.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** How TON works with NFT Games */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Токены TON в играх" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Как работают токены TON в играх
							</h2>
							<p className="text-muted-foreground">
								В основе криптоигр на TON лежат TON токены — цифровые активы,
								которые можно использовать внутри игр для покупки, продажи и
								обмена различных предметов или услуг. Токены TON могут быть
								использованы для:
							</p>
						</div>
					</Container>
					<Container className="flex items-center justify-center">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-10 flex-wrap max-w-4xl">
							{TonTokensRu.map((card) => (
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

					<Container>
						<div className="max-w-xl mx-auto text-center">
							<p className="text-muted-foreground">
								В основе криптоигр на TON лежат TON токены — цифровые активы,
								которые можно использовать внутри игр для покупки, продажи и
								обмена различных предметов или услуг. Токены TON могут быть
								использованы для:
							</p>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** WobbleCard */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative  mt-6">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Как заработать" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-12">
								Как зарабатывать на криптоиграх с TON токенами
							</h2>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
							<WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px] bg-pink-800 ">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									1. Участие в игровой активности:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Выполнение ежедневных заданий, участие в турнирах или
									прохождение уровней может приносить вам вознаграждения в виде
									TON токенов.
								</p>
								<Image
									src="/assets/cat5.png"
									width={350}
									height={350}
									alt="Crypto"
									className="absolute -right-4 lg:-right-[0%] filter -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									2. Создание и продажа NFT:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Если игра поддерживает создание NFT, вы можете создавать
									уникальные внутриигровые предметы и продавать их другим
									игрокам.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									3. Инвестирование в игровую экономику:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									В некоторых играх вы можете инвестировать токены в развитие
									инфраструктуры, что приносит доход от доли в игровом бизнесе.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px] bg-pink-800 ">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									4. Привлечение новых игроков:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Многие игры предлагают партнерские программы, где вы получаете
									бонусы за приглашение друзей и знакомых.
								</p>
								<Image
									src="/assets/cat4.png"
									width={350}
									height={350}
									alt="Crypto"
									className="absolute -right-4 lg:-right-[0%] filter -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** Card Hover Effect */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10 mt-6">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Советы" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Советы по началу игры
							</h2>
						</div>
					</Container>
				</Wrapper>
				<CardHover isRussian={true} />
			</section>

			{/* Conclusion */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Заключение" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Заключение
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/desk.jpg"
											width={350}
											height={350}
											alt="Conclusion"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 flex items-center justify-center">
									Игры с TON-токенами предлагают уникальные возможности для
									заработка, сочетая увлекательный геймплей с реальными
									финансовыми стимулами. Важно выбирать проверенные проекты,
									учитывать особенности токеномики и безопасности, а также быть
									активным участником сообщества. Используя возможности
									блокчейна TON и Telegram, вы сможете не только получать
									удовольствие от игры, но и зарабатывать на этом.
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
