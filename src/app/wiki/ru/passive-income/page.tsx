import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { LampContainer } from '@/components/ui/lamp';
// import { BentoGridDemo } from '@/components/BentoGridSecondDemoRu';
import { WobbleCard } from '@/components/ui/wobble-card';

export const metadata: Metadata = {
	title: 'Пассивный доход',
	description: 'Лучшие стратегии для Play2Earn игр',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'Пассивный доход на играх',
		description: 'Лучшие стратегии для Play2Earn игр',
		type: 'article',
		publishedTime: '2024-09-12T00:19:00.000Z',
		authors: 'MoneyMess',
	},
};

const ArticleRu = () => {
	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
			{/** Lamp Header */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<LampContainer>
							<div className="flex flex-col items-center justify-center relative w-full text-center">
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[80%]">
									Пассивный доход на играх: лучшие стратегии для Play2Earn игр
								</h2>
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

			{/** Intro */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="max-w-xl mx-auto text-center" id="intro">
							<SectionBadge title="Введение" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Что такое пассивный доход в Play2Earn играх
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/income.jpg"
											width={500}
											height={500}
											alt="Income image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									С ростом популярности Play2Earn игр все больше пользователей
									ищут способы заработка с минимальными временными затратами.
									Пассивный доход в играх становится привлекательным вариантом
									для тех, кто хочет получать стабильный доход, не тратя много
									времени на активную игру. В этой статье мы рассмотрим лучшие
									стратегии для создания пассивного дохода в Play2Earn проектах.
									<br />
									<br />
									Пассивный доход— это заработок, который вы получаете без
									необходимости постоянного участия. В контексте Play2Earn игр,
									это означает возможность накапливать игровую валюту или другие
									активы с минимальными действиями с вашей стороны. Такие игры
									обычно предлагают механики, позволяющие автоматизировать
									процесс заработка или получать прибыль от вложенных активов.
								</p>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** Bento Grid */}
			{/* <section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10 mt-6">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Как выбрать игру" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-12">
								Как выбрать игру с пассивными механиками дохода
							</h2>
							<p className="text-muted-foreground mt-6 max-w-md mx-auto mb-12">
								Чтобы создать пассивный доход в Play2Earn играх, важно правильно
								выбрать проект, который предлагает подходящие механики. Вот
								несколько критериев, которые помогут вам выбрать такую игру:
							</p>
						</div>
					</Container>
				</Wrapper>
				
				<Image
					src="/assets/boy2.png"
					width={250}
					height={250}
					alt="Crypto"
					className="absolute -right-4 lg:-right-[0%]  filter -bottom-[-2%] object-contain rounded-2xl"
				/>
			</section> */}

			{/* Strategies */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative pt-10 mt-20">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Стратегии" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Стратегии для создания пассивного дохода в Play2Earn играх
							</h2>
							<p className="text-muted-foreground mt-6 max-w-md mx-auto mb-12">
								Существуют различные стратегии для создания пассивного дохода в
								играх, основанных на блокчейне. Вот несколько наиболее
								эффективных:
							</p>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 ">
								{/* Левая колонка с картинкой */}
								<div className="flex items-center justify-center mx-auto">
									<Image
										src="/assets/strategies1.jpg"
										width={400}
										height={400}
										alt="Strategies"
										className="rounded-2xl"
									/>
								</div>
								{/* Правая колонка с текстом */}
								<div>
									<h2 className="text-xl lg:text-xl font-black uppercase mt-6 mb-6">
										Фарминг и стейкинг.
									</h2>
									<ul className="text-base md:text-lg text-foreground/80 space-y-4">
										<p>
											Фарминг и стейкинг — это механики, которые позволяют
											получать доход за счет удержания или использования токенов
											игры:
										</p>
										<li>
											- <strong>Фарминг:</strong> Некоторые игры позволяют
											фармить внутриигровую валюту, предоставляя активы в пул
											ликвидности или выполняя другие действия. Например, вы
											можете использовать свои токены для фарминга и получать
											процент от созданного дохода.
										</li>
										<li>
											- <strong>Стейкинг:</strong> В некоторых играх можно
											стейкать токены или NFT для получения пассивного дохода.
											Чем дольше вы удерживаете активы в стейке, тем больше
											доход вы получаете.
										</li>
									</ul>
								</div>

								{/* Левая колонка с картинкой */}
								<div className="flex items-center justify-center mx-auto">
									<Image
										src="/assets/strategies2.jpg"
										width={400}
										height={400}
										alt="Strategies"
										className="rounded-2xl"
									/>
								</div>
								{/* Правая колонка с текстом */}
								<div>
									<h2 className="text-xl lg:text-xl font-black uppercase mt-10 mb-6">
										Аренда NFT.
									</h2>
									<ul className="text-base md:text-lg text-foreground/80 space-y-4 ">
										<p>
											Если игра поддерживает NFT, вы можете сдавать свои активы
											в аренду другим игрокам:
										</p>
										<li>
											- <strong>Аренда персонажей или предметов:</strong> В
											некоторых играх можно сдавать в аренду своих персонажей,
											экипировку или другие активы, получая стабильный доход от
											их использования другими игроками.
										</li>
										<li>
											- <strong>Выгода от редких активов:</strong> Если у вас
											есть редкие или мощные игровые предметы, их аренда может
											приносить значительный доход.
										</li>
									</ul>
								</div>

								{/* Левая колонка с картинкой */}
								<div className="flex items-center justify-center mx-auto">
									<Image
										src="/assets/strategies3.jpg"
										width={400}
										height={400}
										alt="Strategies"
										className="rounded-2xl"
									/>
								</div>
								{/* Правая колонка с текстом */}
								<div>
									<h2 className="text-xl lg:text-xl font-black uppercase mt-10 mb-6">
										Партнерские программы.
									</h2>
									<ul className="text-base md:text-lg text-foreground/80 space-y-4 ">
										<p>
											Многие Play2Earn игры предлагают партнерские программы,
											которые позволяют получать пассивный доход за привлечение
											новых игроков:
										</p>
										<li>
											- <strong>Реферальные ссылки:</strong> Получайте бонусы за
											каждого привлеченного игрока, который зарегистрируется и
											начнет играть по вашей реферальной ссылке.
										</li>
										<li>
											- <strong>Бонусы за активность:</strong> Некоторые игры
											предоставляют дополнительные награды, если ваши рефералы
											активно играют и зарабатывают.
										</li>
									</ul>
								</div>

								{/* Левая колонка с картинкой */}
								<div className="flex items-center justify-center mx-auto">
									<Image
										src="/assets/strategies4.jpg"
										width={400}
										height={400}
										alt="Strategies"
										className="rounded-2xl"
									/>
								</div>
								{/* Правая колонка с текстом */}
								<div>
									<h2 className="text-xl lg:text-xl font-black uppercase mt-10 mb-6">
										Примеры игр с пассивным доходом.
									</h2>
									<ul className="text-base md:text-lg text-foreground/80 space-y-4 ">
										<p>
											Вот несколько популярных игр, которые предлагают механики
											для пассивного заработка:
										</p>
										<li>
											- <strong>Axie Infinity:</strong> В этой игре можно
											сдавать в аренду своих Axie другим игрокам или участвовать
											в стейкинге токенов AXS.
										</li>
										<li>
											- <strong>Alien Worlds:</strong> Игра предлагает
											возможность фарминга внутриигровой валюты и стейкинга
											токенов TLM для получения дохода.
										</li>
										<li>
											- <strong>The Sandbox:</strong> В The Sandbox можно
											сдавать в аренду виртуальные земли или использовать их для
											создания контента, приносящего доход.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/** WobbleCard */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative mt-6 mb-12">
					<Container>
						<div className="max-w-xl mx-auto text-center">
							<SectionBadge title="Как увеличить пассивный доход" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-12">
								Советы по увеличению пассивного дохода
							</h2>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
							<WobbleCard containerClassName="col-span-1 min-h-[300px]">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-2xl font-black uppercase tracking-[-0.015em] text-white">
									1. Диверсификация активов:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Не ограничивайтесь одной игрой. Распределите активы между
									несколькими проектами, чтобы снизить риски.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-2xl font-black uppercase tracking-[-0.015em] text-white">
									2. Обновляйте информацию:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Регулярно следите за новостями игр и обновлениями, чтобы не
									упустить выгодные возможности.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-800">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-2xl font-black uppercase tracking-[-0.015em] text-white">
									3. Используйте автоматизацию:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Если игра поддерживает автоматизацию процессов, не
									пренебрегайте этой возможностью для увеличения дохода.
								</p>
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
								Заключение
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
								<Container>
									<div className="flex items-center justify-center mx-auto mt-8">
										<Image
											src="/assets/success.jpg"
											width={350}
											height={350}
											alt="Conclusion"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 flex items-center justify-center">
									Создание пассивного дохода в Play2Earn играх — это реальная
									возможность получать стабильный заработок с минимальными
									временными затратами. Выбирая игры с подходящими механиками и
									правильно применяя стратегии, вы можете создать устойчивый
									источник дохода в мире криптовалют. Помните о необходимости
									тщательно изучать проекты и распределять активы, чтобы
									минимизировать риски и увеличить прибыль.
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
