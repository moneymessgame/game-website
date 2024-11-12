import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { Container, Wrapper } from '@/components/global';
import { Button, LampContainer, SectionBadge, WobbleCard } from '@/components/ui';
import { Icons } from '@/components';
import { clickersRu } from '@/constants';

export const metadata: Metadata = {
	title: 'Как зарабатывать на криптоиграх',
	description: 'Как зарабатывать на криптоиграх в Telegram',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'Как зарабатывать на криптоиграх',
		description: 'Как зарабатывать на криптоиграх в Telegram',
		type: 'article',
		publishedTime: '2024-09-12T00:19:00.000Z',
		authors: 'MoneyMess',
	},
};

const ArticleRu = () => {
	return (
		<div className="w-full relative flex items-center justify-center flex-col py-2">
			{/** Lamp Header */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<LampContainer>
							<div className="flex flex-col items-center justify-center relative w-full text-center">
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[65%]">
									Как зарабатывать на криптоиграх в Telegram
								</h2>
								<p className="text-muted-foreground mt-6 max-w-xl mx-auto text-justify">
									Кликеры и тапалки в Telegram набирают популярность как способ
									заработка на выполнении простых действий. Эти приложения и
									боты позволяют пользователям зарабатывать, выполняя кликовые
									задания с помощью смартфона, что делает их доступными и
									привлекательными для широкой аудитории. Кликеры — это
									приложения, которые требуют от пользователя совершать
									различные действия, такие как клики или нажатия на экран, за
									что начисляется награда. Тапалки автоматизируют этот процесс,
									что позволяет зарабатывать больше, затрачивая меньше усилий.
								</p>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									5 мин.
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

			{/** How to Earn in NFT Games */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					<div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
					<div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
					<Container>
						<div className="max-w mx-auto text-center">
							<SectionBadge title="Типы Криптоигр" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
								Типы Криптоигр
							</h2>
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
								{clickersRu.map((feature) => (
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
				<Wrapper className="flex flex-col items-center justify-center relative mt-12">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Заработок на Криптоиграх" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Как Зарабатывать на Криптоиграх в Telegram
							</h2>
							<p className="text-muted-foreground mt-6 mb-12 max-w-xl mx-auto text-justify">
								Чтобы начать зарабатывать на криптоиграх в Telegram, нужно
								выполнить несколько шагов:
							</p>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
							<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-yellow-800">
								<Image
									src="/assets/pair3.png"
									width={350}
									height={350}
									alt="Income image"
									className="absolute -right-10 md:-right-[40%] lg:-right-[-3%] -bottom-10 object-contain rounded-2xl"
								/>
								<div className="max-w-sm">
									<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										1. Выбор бота или приложения:
									</h2>
									<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
										Найдите надежного бота или приложение с хорошей репутацией.
										Обратите внимание на отзывы и рейтинг.
									</p>
								</div>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] bg-green-800">
								<div className="max-w-xs">
									<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										2. Регистрация и настройка:
									</h2>
									<p className="mt-4 text-left  text-base/6 text-neutral-200">
										Создайте учетную запись с указанием реальных данных.
										Настройте параметры личного кабинета и подключите кошелек,
										если необходимо.
									</p>
								</div>
								<Image
									src="/assets/pair1.png"
									width={350}
									height={350}
									alt="Income image"
									className="absolute -right-4 lg:-right-[5%]  filter -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									3. Выполнение заданий:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Выполняйте задания, за которые платят. Это могут быть кликовые
									задания, участие в фармилках или запуск майнера.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-blue-800">
								<div className="max-w-sm">
									<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										4. Вывод прибыли:
									</h2>
									<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
										Накопленную криптовалюту или игровые ресурсы можно вывести
										на кошелек или обменять на фиат через биржи или внутренние
										обменники.
									</p>
								</div>
								<Image
									src="/assets/pair2.png"
									width={340}
									height={340}
									alt="Income image"
									className="absolute -right-10 md:-right-[40%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** History */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative mt-20">
					<Container>
						<div className="max-w-xl mx-auto text-center" id="intro">
							<SectionBadge title="История" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								История Появления Криптоигр
							</h2>
							<p className="text-muted-foreground mt-6 max-w-xl mx-auto text-justify">
								Идея заработка на криптозаданиях появилась осенью 2023 года
								благодаря команде Open Builders. Первым успешным продуктом,
								который получил признание криптосообщества, стал Ноткоин. Этот
								проект прошел несколько этапов развития:
							</p>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/smile.jpg"
											width={500}
											height={500}
											alt="Income image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									- Beta-версия: Запуск теста игры осенью 2023 года.
									<br />
									<br />
									- Релиз: В январе 2024 года после завершения тестов число
									пользователей превысило 5 миллионов.
									<br />
									<br />
									- Популяризация: В течение 30 дней после релиза аудитория игры
									достигла 20 миллионов пользователей, что привлекло внимание
									TON Foundation.
									<br />
									<br />
									Проект Ноткоин стал отправной точкой для множества других
									криптоигр и тапалок в Telegram, которые продолжают набирать
									популярность.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/* Conclusion */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10 mt-12">
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
									<div className="flex items-center justify-center mx-auto">
										<Image
											src="/assets/game.jpg"
											width={350}
											height={350}
											alt="Conclusion"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 flex items-center justify-center">
									Заработок на криптоиграх в Telegram — это интересный и
									доступный способ получить дополнительный доход. С помощью
									тапалок, кликеров и майнеров пользователи могут зарабатывать
									криптовалюту или фиат, выполняя простые действия на своем
									смартфоне. Автоматизация процессов и низкий порог входа делают
									такие игры привлекательными для широкой аудитории.
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
