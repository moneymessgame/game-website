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
		<footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-screen-xl mx-auto lg:pt-32">
			<div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
			<div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

			<div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
				<div className="flex flex-col items-start justify-content md:max-w-[200px]">
					<div className="flex items-start">
						<Link href="/" className="flex items-center gap-2">
							<OrbitIcon className="w6 h-6 ml-1 font-thin fill-100 text-white light-line-icon" />
							<span className="text-lg font-black uppercase">MoneyMess</span>
						</Link>
					</div>
					<p className="text-muted-foreground mt-4 text-sm text-start">
						Made by KitPes with chill vibes 💙💛
					</p>
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
