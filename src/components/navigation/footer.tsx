import Icons from '@/components/global/icons';
import { ArrowRight, Gamepad2, Heart, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import OrbitIcon from '@/components/global/orbitIcon';
import { Button } from '../ui/button';
import Container from '../global/container';
import Wrapper from '../global/wrapper';

const Footer = () => {
	return (
		<footer className="flex flex-col relative items-center justify-center border-t border-border pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto ">
			<div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
			<div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

			{/** Follow us */}
			<section>
				<Wrapper className="flex flex-col items-center justify-center py-12 relative">
					{/* <Container>
						<LampContainer>
							<div className="flex flex-col items-center justify-center relative w-full text-center">
								<h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-black uppercase mt-8">
									From Idea to Launch <br /> Faster Than Ever
								</h2>
								<p className="text-muted-foreground mt-6 max-w-md mx-auto">
									Craft stunning frontends with AstraDynamic&appos;s modern
									component library and fluid animation tools
								</p>
								<Button variant="white" className="mt-6" asChild>
									<Link href="/sign-in">
										Get started for free
										<ArrowRight className="w-4 h-4 ml-2" />
									</Link>
								</Button>
							</div>
						</LampContainer>
					</Container> */}
					<Container className="relative z-[999999] ">
						<div className="flex items-center justify-center w-full -mt-40">
							<div className="flex md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
								
								<div className="flex flex-col items-start gap-4 max-w-md">
									<div className="flex items-center gap-2 cursor-pointer group">
										<h4 className="text-xl md:text-2xl font-semibold text-purple-400">
											Follow us
										</h4>
										<ArrowRight className="w-4 h-4 text-purple-400 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
									</div>
									<p className="text-base text-muted-foreground">
										Start a new journey and stay up to date with what's coming
										next. The adventure is just beginning, and the story is just
										getting started.
									</p>
								</div>

								{/* Socials */}
								<div className="hidden md:flex relative items-center w-full mt-4">
									<div className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-blue-950 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] shadow-background/40 select-none hover:shadow-background/60">
										<Link
											href="https://t.me/@moneymesschannel"
											className="hover:text-foreground/80"
										>
											<Button
												size="sm"
												className="rounded-full hidden lg:flex border border-foreground/20 bg-purple-500 hover:bg-purple-400"
											>
												<Send className="h-6 w-6 mb-1" />
												<span className="text-lg font-bold">EN</span>
											</Button>
										</Link>
										<Link
											href="https://t.me/@moneymesschannelru"
											className="hover:text-foreground/80"
										>
											<Button
												size="sm"
												className="rounded-full hidden lg:flex border border-foreground/20 bg-purple-500 hover:bg-purple-400"
											>
												<Send className="h-6 w-6 mb-1" />
												<span className="text-lg font-bold">RU</span>
											</Button>
										</Link>
									</div>
								</div>

								{/* Created by Moneymess */}
								<div className="">
									<div className="flex flex-col items-left justify-start md:max-w-[200px]">
										<div className="flex items-center ">
											<Link href="/" className="flex items-center gap-2">
												<OrbitIcon className="w6 h-6 ml-1 font-thin fill-100 text-white light-line-icon" />
												<span className="text-lg font-black uppercase">
													MoneyMess
												</span>
											</Link>
										</div>
										<span className="mt-4 text-neutral-200 text-sm flex items-center">
											Created by &copy; Kitpes
										</span>
										<span className=" text-neutral-200 text-sm flex items-center">
											with chill vibes
										</span>
									</div>
								</div>
								
							</div>
						</div>
						<div className="border-t border-border/40 flex items-center justify-center">
							<p className="text-sm text-muted-foreground text-center">
								&copy; {new Date().getFullYear()} Kitpes. All rights reserved.
							</p>
						</div>
					</Container>
				</Wrapper>
			</section>

			{/* <div className="group relative overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 flex items-center">
					<div>
						<div className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
					</div>
					<span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
					<span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
					<div className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-between gap-16 px-10">
						<Link href="/#" className="hover:text-foreground/80">
							<div className='flex flex-col items-center'>
								<Gamepad2 className="gap-3 h-6 w-6 mb-1" />
								<span className="text-lg font-black">Play</span>
							</div>
						</Link>
						<Link href="https://t.me/@moneymesschannel" className="hover:text-foreground/80">
							<div>
								<Send className="h-6 w-6 mb-1" />
								<span className="text-lg font-black">EN</span>
							</div>
						</Link>
						<Link href="https://t.me/@moneymesschannelru" className="hover:text-foreground/80">
							<div>
								<Send className="h-6 w-6 mb-1" />
								<span className="text-lg font-black">RU</span>
							</div>
						</Link>
					</div>
				</div> */}
		</footer>
	);
};

export default Footer;
