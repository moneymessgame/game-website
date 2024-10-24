import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import SectionBadge from '@/components/ui/section-badge';
import { LampContainer } from '@/components/ui/lamp';
import CardFlip from '@/components/CardFlip';
import CardSection from '@/components/CardSection';
import { getRandomCharacters } from '@/utils/characterUtils';

export const metadata: Metadata = {
	title: 'First season of MoneyMess',
	robots: {
		index: true,
		follow: true,
	},
};

const FirstSeason = () => {
	const randomCharacters = getRandomCharacters(1);

	return (
		<div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-2">
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-2 relative">
					<LampContainer>
						<div className="flex flex-col items-center justify-center relative w-full text-center">
							<h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase mt-8 w-[80%]">
								A great idea is born with <br /> the help of small contributions
							</h2>
							<p className="text-muted-foreground mt-6 max-w-md mx-auto">
								From small contributions, a great idea takes shape.
							</p>
							<Button variant="white" className="mt-6" asChild>
								<Link href="#intro">
									Read more
									<ArrowRight className="w-4 h-4 ml-2" />
								</Link>
							</Button>
						</div>
					</LampContainer>
				</Wrapper>
			</section>

			<section>
				<Wrapper>
					<Container>
						<div className="flex flex-col items-center justify-center h-full">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-10 col-span-1 xl:col-span-2 justify-items-center items-center">
								<div className="relative">
									<div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

									<div className="flex flex-col items-center justify-center py-10 h-full">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-10 col-span-1 xl:col-span-2 justify-items-center items-center">
											<div>
												<p>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. A optio rerum dicta nesciunt? Laudantium
													inventore, ratione distinctio numquam aperiam
													temporibus veniam quos quam doloremque vel ipsum
													aspernatur mollitia, accusamus a. Lorem ipsum dolor
													sit amet consectetur adipisicing elit. A optio rerum
													dicta nesciunt? Laudantium inventore, ratione
													distinctio numquam aperiam temporibus veniam quos quam
													doloremque vel ipsum aspernatur mollitia, accusamus a.
												</p>
											</div>
											<div>
												<p>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. A optio rerum dicta nesciunt? Laudantium
													inventore, ratione distinctio numquam aperiam
													temporibus veniam quos quam doloremque vel ipsum
													aspernatur mollitia, accusamus a. Lorem ipsum dolor
													sit amet consectetur adipisicing elit. A optio rerum
													dicta nesciunt? Laudantium inventore, ratione
													distinctio numquam aperiam temporibus veniam quos quam
													doloremque vel ipsum aspernatur mollitia, accusamus a.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="relative">
									<div className="absolute top-1/2 left-1/2 -z-10 gradient-dominion w-3/4 -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

									<div className="flex flex-col items-center justify-center py-10 h-full">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-10 col-span-1 xl:col-span-2 justify-items-center items-center">
											<div>
												<CardFlip
													srcFront="/cards/dominion.jpeg"
													srcBack="/cards/card-back.jpg"
													altFront="Dominion character"
													altBack="Dominion character"
													colorTo="#ddd"
													colorFrom="#ff0f0f"
												/>
											</div>
											<div>
												<p>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. A optio rerum dicta nesciunt? Laudantium
													inventore, ratione distinctio numquam aperiam
													temporibus veniam quos quam doloremque vel ipsum
													aspernatur mollitia, accusamus a. Lorem ipsum dolor
													sit amet consectetur adipisicing elit. A optio rerum
													dicta nesciunt? Laudantium inventore, ratione
													distinctio numquam aperiam temporibus veniam quos quam
													doloremque vel ipsum aspernatur mollitia, accusamus a.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 xl:col-span-2 justify-items-center items-center">
								<div className="relative">
									<div className="absolute top-1/2 left-1/2 -z-10 gradient-attractiveness w-3/4 -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

									<div className="flex flex-col items-center justify-center h-full">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-10 col-span-1 xl:col-span-2 justify-items-center items-center">
											<div>
												<p>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. A optio rerum dicta nesciunt? Laudantium
													inventore, ratione distinctio numquam aperiam
													temporibus veniam quos quam doloremque vel ipsum
													aspernatur mollitia, accusamus a. Lorem ipsum dolor
													sit amet consectetur adipisicing elit. A optio rerum
													dicta nesciunt? Laudantium inventore, ratione
													distinctio numquam aperiam temporibus veniam quos quam
													doloremque vel ipsum aspernatur mollitia, accusamus a.
												</p>
											</div>
											<div>
												<p>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. A optio rerum dicta nesciunt? Laudantium
													inventore, ratione distinctio numquam aperiam
													temporibus veniam quos quam doloremque vel ipsum
													aspernatur mollitia, accusamus a. Lorem ipsum dolor
													sit amet consectetur adipisicing elit. A optio rerum
													dicta nesciunt? Laudantium inventore, ratione
													distinctio numquam aperiam temporibus veniam quos quam
													doloremque vel ipsum aspernatur mollitia, accusamus a.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="relative">
									<div className="absolute top-1/2 left-1/2 -z-10 gradient-richness w-3/4 -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

									<div className="flex flex-col items-center justify-center h-full">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-10 col-span-1 xl:col-span-2 justify-items-center items-center">
											<div>
												<p>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. A optio rerum dicta nesciunt? Laudantium
													inventore, ratione distinctio numquam aperiam
													temporibus veniam quos quam doloremque vel ipsum
													aspernatur mollitia, accusamus a. Lorem ipsum dolor
													sit amet consectetur adipisicing elit. A optio rerum
													dicta nesciunt? Laudantium inventore, ratione
													distinctio numquam aperiam temporibus veniam quos quam
													doloremque vel ipsum aspernatur mollitia, accusamus a.
												</p>
											</div>
											<div>
												<p>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. A optio rerum dicta nesciunt? Laudantium
													inventore, ratione distinctio numquam aperiam
													temporibus veniam quos quam doloremque vel ipsum
													aspernatur mollitia, accusamus a. Lorem ipsum dolor
													sit amet consectetur adipisicing elit. A optio rerum
													dicta nesciunt? Laudantium inventore, ratione
													distinctio numquam aperiam temporibus veniam quos quam
													doloremque vel ipsum aspernatur mollitia, accusamus a.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			<section>
				<Wrapper className="relative">
					<div className="absolute top-1/2 left-1/2 -z-10 gradient-dominion w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

					<Container>
						<div className="flex flex-col items-center justify-center py-20 h-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 xl:col-span-2 justify-items-center items-center">
								<div className="">
									<CardFlip
										srcFront="/cards/dominion.jpeg"
										srcBack="/cards/card-back.jpg"
										altFront="Dominion character"
										altBack="Dominion character"
										colorTo="#ddd"
										colorFrom="#ff0f0f"
									/>
								</div>

								<div className="w-[285px]">
									<div className="mx-auto text-start pb-10">
										<h2 className="text-2xl lg:text-3xl font-black uppercase mt-6">
											Dominion
										</h2>
										<p className="text-muted-foreground mt-6">
											Vision to Reality in 3 Simple Steps
										</p>
									</div>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Inventore illo explicabo laudantium quisquam numquam saepe
										fugit repellat mollitia, enim, libero deleniti quam
										necessitatibus vel ab quod, porro exercitationem sequi
										possimus! Exercitationem amet, nostrum molestias cum labore
										commodi ducimus quas accusantium rem, doloribus sapiente
										voluptas ipsa error non accusamus sequi at.
									</p>
								</div>

								<div className="col-span-1 md:col-span-2 px-6">
									<div className="max-w-lg mx-auto text-start md:text-center pb-10">
										<SectionBadge title="The Process" />
										<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
											Three Clicks to Your Dream Site
										</h2>
										<p className="text-muted-foreground mt-6">
											Vision to Reality in 3 Simple Steps
										</p>
									</div>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Inventore illo explicabo laudantium quisquam numquam saepe
										fugit repellat mollitia, enim, libero deleniti quam
										necessitatibus vel ab quod, porro exercitationem sequi
										possimus! Exercitationem amet, nostrum molestias cum labore
										commodi ducimus quas accusantium rem, doloribus sapiente
										voluptas ipsa error non accusamus sequi at.
									</p>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			<section>
				<Wrapper className="relative">
					<div className="absolute top-1/2 left-1/2 -z-10 gradient-attractiveness w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

					<Container>
						<div className="flex flex-col items-center justify-center py-20 h-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 xl:col-span-2 justify-items-center items-center">
								<div className="">
									<CardFlip
										srcFront="/cards/beauty.jpeg"
										srcBack="/cards/card-back.jpg"
										altFront="Dominion character"
										altBack="Dominion character"
										colorTo="#ddd"
										colorFrom="#0ffcff"
									/>
								</div>

								<div className="w-[285px]">
									<div className="mx-auto text-center pb-10">
										<SectionBadge title="The Process" />
										<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
											Three Clicks to Your Dream Site
										</h2>
										<p className="text-muted-foreground mt-6">
											Vision to Reality in 3 Simple Steps
										</p>
									</div>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Inventore illo explicabo laudantium quisquam numquam saepe
										fugit repellat mollitia, enim, libero deleniti quam
										necessitatibus vel ab quod, porro exercitationem sequi
										possimus! Exercitationem amet, nostrum molestias cum labore
										commodi ducimus quas accusantium rem, doloribus sapiente
										voluptas ipsa error non accusamus sequi at.
									</p>
								</div>

								<div className="col-span-1 md:col-span-2 px-6">
									<div className="max-w-lg mx-auto text-start md:text-center pb-10">
										<SectionBadge title="The Process" />
										<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
											Three Clicks to Your Dream Site
										</h2>
										<p className="text-muted-foreground mt-6">
											Vision to Reality in 3 Simple Steps
										</p>
									</div>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Inventore illo explicabo laudantium quisquam numquam saepe
										fugit repellat mollitia, enim, libero deleniti quam
										necessitatibus vel ab quod, porro exercitationem sequi
										possimus! Exercitationem amet, nostrum molestias cum labore
										commodi ducimus quas accusantium rem, doloribus sapiente
										voluptas ipsa error non accusamus sequi at.
									</p>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			<section>
				<Wrapper className="relative">
					<div className="absolute top-1/2 left-1/2 -z-10 gradient-richness w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

					<Container>
						<div className="flex flex-col items-center justify-center py-20 h-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 xl:col-span-2 justify-items-center items-center">
								<div className="">
									<CardFlip
										srcFront="/cards/richness.jpeg"
										srcBack="/cards/card-back.jpg"
										altFront="Dominion character"
										altBack="Dominion character"
										colorTo="#ddd"
										colorFrom="#0fff0f"
									/>
								</div>

								<div className="w-[285px]">
									<div className="mx-auto text-center pb-10">
										<SectionBadge title="The Process" />
										<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
											Three Clicks to Your Dream Site
										</h2>
										<p className="text-muted-foreground mt-6">
											Vision to Reality in 3 Simple Steps
										</p>
									</div>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Inventore illo explicabo laudantium quisquam numquam saepe
										fugit repellat mollitia, enim, libero deleniti quam
										necessitatibus vel ab quod, porro exercitationem sequi
										possimus! Exercitationem amet, nostrum molestias cum labore
										commodi ducimus quas accusantium rem, doloribus sapiente
										voluptas ipsa error non accusamus sequi at.
									</p>
								</div>

								<div className="col-span-1 md:col-span-2 px-6">
									<div className="max-w-lg mx-auto text-start md:text-center pb-10">
										<SectionBadge title="The Process" />
										<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
											Three Clicks to Your Dream Site
										</h2>
										<p className="text-muted-foreground mt-6">
											Vision to Reality in 3 Simple Steps
										</p>
									</div>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Inventore illo explicabo laudantium quisquam numquam saepe
										fugit repellat mollitia, enim, libero deleniti quam
										necessitatibus vel ab quod, porro exercitationem sequi
										possimus! Exercitationem amet, nostrum molestias cum labore
										commodi ducimus quas accusantium rem, doloribus sapiente
										voluptas ipsa error non accusamus sequi at.
									</p>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>

			<section>
				<Wrapper className="relative">
					<div className="absolute top-1/2 left-1/2 -z-10 gradient-popularity w-3/4 -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

					<Container>
						<div className="flex flex-col items-center justify-center py-20 h-full">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 xl:col-span-2 justify-items-center items-center">
								<div className="">
									<CardFlip
										srcFront="/cards/popularity.jpeg"
										srcBack="/cards/card-back.jpg"
										altFront="Dominion character"
										altBack="Dominion character"
										colorTo="#ddd"
										colorFrom="#ffff0f"
									/>
								</div>

								<div className="w-[285px]">
									<div className="mx-auto text-center pb-10">
										<SectionBadge title="The Process" />
										<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
											Three Clicks to Your Dream Site
										</h2>
										<p className="text-muted-foreground mt-6">
											Vision to Reality in 3 Simple Steps
										</p>
									</div>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Inventore illo explicabo laudantium quisquam numquam saepe
										fugit repellat mollitia, enim, libero deleniti quam
										necessitatibus vel ab quod, porro exercitationem sequi
										possimus! Exercitationem amet, nostrum molestias cum labore
										commodi ducimus quas accusantium rem, doloribus sapiente
										voluptas ipsa error non accusamus sequi at.
									</p>
								</div>

								<div className="col-span-1 md:col-span-2 px-6">
									<div className="max-w-lg mx-auto text-start md:text-center pb-10">
										<SectionBadge title="The Process" />
										<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6">
											Three Clicks to Your Dream Site
										</h2>
										<p className="text-muted-foreground mt-6">
											Vision to Reality in 3 Simple Steps
										</p>
									</div>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Inventore illo explicabo laudantium quisquam numquam saepe
										fugit repellat mollitia, enim, libero deleniti quam
										necessitatibus vel ab quod, porro exercitationem sequi
										possimus! Exercitationem amet, nostrum molestias cum labore
										commodi ducimus quas accusantium rem, doloribus sapiente
										voluptas ipsa error non accusamus sequi at.
									</p>
								</div>
							</div>
						</div>
					</Container>
				</Wrapper>
			</section>
		</div>
	);
};

export default FirstSeason;
