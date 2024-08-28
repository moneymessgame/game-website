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
		// <footer className="flex flex-col relative items-center justify-center border-t border-border pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto ">
		// 	<div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
		// 	<div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

		// 	{/** Follow us */}
		// 	<section>
		// 		<Wrapper className="flex flex-col items-center justify-center py-12 relative">
		// 			<Container className="relative z-[999999] ">
		// 				<div className="flex items-center justify-center w-full -mt-40">
		// 					<div className="flex flex-col md:flex-row items-center md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8 gap-4">
		// 						<div className="flex flex-col items-start gap-4 max-w-md">
		// 							<div className="flex items-center gap-2 cursor-pointer group">
		// 								<h4 className="text-xl md:text-2xl font-semibold text-purple-400">
		// 									Follow us
		// 								</h4>
		// 								<ArrowRight className="w-4 h-4 text-purple-400 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
		// 							</div>
		// 							<p className="text-base text-muted-foreground">
		// 								Start a new journey and stay up to date with what's coming
		// 								next. The adventure is just beginning, and the story is just
		// 								getting started.
		// 							</p>
		// 						</div>

		// 						{/* Socials */}
		// 						<div className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto mt-4 mb-4">
		// 							<div className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-blue-950 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] shadow-background/40 select-none hover:shadow-background/60">
		// 								<Link
		// 									href="https://t.me/moneymesschannel"
		// 									className="hover:text-foreground/80"
		// 									target="_blank"
		// 									rel="noopener noreferrer"
		// 								>
		// 									<Button
		// 										size="sm"
		// 										className="rounded-full border border-foreground/20 bg-purple-500 hover:bg-purple-400"
		// 									>
		// 										<Send className="h-6 w-6 mb-1" />
		// 										<span className="text-lg font-bold">EN</span>
		// 									</Button>
		// 								</Link>
		// 								<Link
		// 									href="https://t.me/moneymesschannelru"
		// 									className="hover:text-foreground/80"
		// 									target="_blank"
		// 									rel="noopener noreferrer"
		// 								>
		// 									<Button
		// 										size="sm"
		// 										className="rounded-full border border-foreground/20 bg-purple-500 hover:bg-purple-400"
		// 									>
		// 										<Send className="h-6 w-6 mb-1" />
		// 										<span className="text-lg font-bold">RU</span>
		// 									</Button>
		// 								</Link>
		// 							</div>
		// 						</div>

		// 						{/* Created by Moneymess */}
		// 						<div className="flex flex-col items-left justify-start md:max-w-[200px]">
		// 							<div className="flex items-center ">
		// 								<Link href="/" className="flex items-center gap-2">
		// 									<OrbitIcon className="w6 h-6 ml-1 font-thin fill-100 text-white light-line-icon" />
		// 									<span className="text-lg font-black uppercase">
		// 										MoneyMess
		// 									</span>
		// 								</Link>
		// 							</div>
		// 							<span className="mt-4 text-neutral-200 text-sm flex items-center">
		// 								Created by &copy; Kitpes
		// 							</span>
		// 							<span className="text-neutral-200 text-sm flex items-center">
		// 								with chill vibes
		// 							</span>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</Container>
		// 		</Wrapper>
		// 	</section>
		// 	<div className="border-t border-border/40 flex items-center justify-center">
		// 		<p className="text-sm text-muted-foreground text-center">
		// 			&copy; {new Date().getFullYear()} Kitpes. All rights reserved.
		// 		</p>
		// 	</div>
		// </footer>

		<footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
			<div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
			<div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

			<div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
				<div className="flex flex-col items-center justify-start md:max-w-[200px]">
					<div className="flex items-center ">
						{/* <Image
							src="/icons/favicon.ico"
							alt="image"
							width={20}
							height={20}
							className="w-12 h-12"
						/> */}
					</div>

					<span className="text-muted-foreground mt-4 text-sm text-start inline-flex items-center">
						Created by &copy; Kitpes <br /> with chill vibes 💙💛
					</span>
				</div>

				<div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
					<div className="md:grid md:grid-cols-2 md:gap-8">
						<div className="">
							<h3 className="text-base font-medium text-white">Socials</h3>
							<ul className="mt-4 text-sm text-muted-foreground">
								<li className="mt-2">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										Telegram (En)
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										Telegram (Ru)
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										YouTube
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
									<strong>X</strong> (Twitter)
									</Link>
								</li>
							</ul>
						</div>
						<div className="mt-10 md:mt-0 flex flex-col">
							<h3 className="text-base font-medium text-white">Integrations</h3>
							<ul className="mt-4 text-sm text-muted-foreground">
								<li className="">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										Facebook
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										Instagram
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										Twitter
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										LinkedIn
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="md:grid md:grid-cols-2 md:gap-8">
						<div className="">
							<h3 className="text-base font-medium text-white">Resources</h3>
							<ul className="mt-4 text-sm text-muted-foreground">
								<li className="mt-2">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										Blog
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										Case Studies
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										Support
									</Link>
								</li>
							</ul>
						</div>
						<div className="mt-10 md:mt-0 flex flex-col">
							<h3 className="text-base font-medium text-white">Company</h3>
							<ul className="mt-4 text-sm text-muted-foreground">
								<li className="">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										About Us
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										Privacy Policy
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href=""
										className="hover:text-foreground transition-all duration-300"
									>
										Terms & Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
				<p className="text-sm text-muted-foreground mt-8 md:mt-0">
					&copy; {new Date().getFullYear()} Kitpes. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
