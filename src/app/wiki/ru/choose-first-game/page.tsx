import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Container, Wrapper } from '@/components/global';
import { Button, LampContainer, SectionBadge, WobbleCard } from '@/components/ui';

export const metadata: Metadata = {
	title: 'Как выбрать первую Play2Earn игру',
	description: 'Как выбрать первую Play2Earn игру для заработка без вложений',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'Как выбрать первую Play2Earn игру',
		description: 'Как выбрать первую Play2Earn игру для заработка без вложений',
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
								<h2 className="text-2xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase w-[80%]">
									Как выбрать первую Play2Earn игру для заработка без вложений
								</h2>
								<p className="text-muted-foreground mt-6 max-w-xl mx-auto text-justify">
									Индустрия Play2Earn, или игр с возможностью заработка,
									продолжает стремительно развиваться. Для многих новичков важен
									вопрос: как выбрать первую игру, которая позволит зарабатывать
									без вложений и с минимальными рисками? В этой статье мы дадим
									ответы на эти вопросы и предложим стратегии для успешного
									старта.
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

			{/** Games Without Investment */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center relative">
					<Container>
						<div className="max-w-xl mx-auto text-center" id="intro">
							<SectionBadge title="P2E без вложений" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Как найти Play2Earn игры без вложений
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto">
										<Image
											src="/assets/dice2.jpg"
											width={500}
											height={500}
											alt="Income image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									Play2Earn (P2E) — это игры, которые позволяют игрокам
									зарабатывать реальные деньги или криптовалюту, выполняя
									различные игровые задачи, побеждая в соревнованиях или
									продавая внутриигровые предметы. В отличие от традиционных
									игр, где деньги тратятся на покупку контента, здесь игроки
									могут получать прибыль за время, проведенное в игре.
									<br />
									<br />
									Многие игры требуют начальных инвестиций для покупки
									персонажей, предметов или валюты. Однако существуют и игры без
									вложений, где можно начать зарабатывать с нуля. Вот несколько
									советов, как найти такие игры:
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
							<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
								<Container>
									<div className="flex items-center justify-center mx-auto">
										<Image
											src="/assets/dice1.jpg"
											width={500}
											height={500}
											alt="Income image"
											className="rounded-2xl"
										/>
									</div>
								</Container>
								<p className="text-base md:text-lg text-foreground/80 mt-6  flex items-center justify-center">
									- Ищите проекты с бесплатным входом: Некоторые игры
									предоставляют бесплатных персонажей или стартовые предметы,
									которые можно использовать для начала игры и заработка.
									<br />
									<br />
									- Участвуйте в Airdrop и конкурсах: Многие новые игры проводят
									раздачи токенов и игровых активов, участвуя в которых можно
									получить начальный капитал.
									<br />
									<br />
									- Обратите внимание на Free-to-Play проекты: Есть игры,
									которые изначально создавались как бесплатные, но позволяют
									зарабатывать, не требуя покупок внутри игры.
									<br />
									<br />- Исследуйте игровые сообщества: На форумах и в соцсетях
									часто обсуждаются новые игры, где можно начать зарабатывать
									без вложений.
								</p>
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
							<SectionBadge title="Повысить заработок" />
							<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 mb-6">
								Как повысить заработок без инвестиций
							</h2>
							<p className="text-muted-foreground mt-6 mb-12 max-w-xl mx-auto text-justify">
								Индустрия Play2Earn, или игр с возможностью заработка,
								продолжает стремительно развиваться. Для многих новичков важен
								вопрос: как выбрать первую игру, которая позволит зарабатывать
								без вложений и с минимальными рисками? В этой статье мы дадим
								ответы на эти вопросы и предложим стратегии для успешного
								старта.
							</p>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
							<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-yellow-800">
								<Image
									src="/assets/kitty2.png"
									width={350}
									height={350}
									alt="Income image"
									className="absolute -right-10 md:-right-[40%] lg:-right-[-3%] -bottom-10 object-contain rounded-2xl"
								/>
								<div className="max-w-sm">
									<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										1. Активное участие в игре:
									</h2>
									<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
										Регулярное выполнение ежедневных заданий и участие в ивентах
										позволит накапливать токены и редкие предметы, которые можно
										продать.
									</p>
								</div>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] bg-green-800">
								<div className="max-w-xs">
									<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										2. Продажа NFT:
									</h2>
									<p className="mt-4 text-left  text-base/6 text-neutral-200">
										Если игра поддерживает NFT, можно продавать редкие предметы
										или персонажей другим игрокам. Часто игры с NFT предлагают
										значительный доход без необходимости вложений.
									</p>
								</div>
								<Image
									src="/assets/kitty3.png"
									width={350}
									height={350}
									alt="Income image"
									className="absolute -right-4 lg:-right-[5%]  filter -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
								<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
									3. Партнерские программы:
								</h2>
								<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
									Привлечение друзей и знакомых в игру через реферальные ссылки
									может приносить бонусы, которые увеличат ваш доход.
								</p>
							</WobbleCard>
							<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-blue-800">
								<div className="max-w-sm">
									<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-black uppercase tracking-[-0.015em] text-white">
										4. Участие в сообществах:
									</h2>
									<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
										На форумах и в социальных сетях можно найти ценные советы и
										лайфхаки от более опытных игроков.
									</p>
								</div>
								<Image
									src="/assets/kitty1.png"
									width={350}
									height={350}
									alt="Income image"
									className="absolute -right-10 md:-right-[40%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
								/>
							</WobbleCard>
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
									Выбор первой Play2Earn игры без вложений может стать отличным
									началом для знакомства с миром криптовалют и блокчейн-игр.
									Важно внимательно выбирать проекты, изучать их особенности и
									использовать проверенные стратегии для увеличения дохода.
									Помните, что успех в P2E играх зависит от вашей активности,
									навыков и умения использовать возможности, предоставляемые
									игрой.
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
