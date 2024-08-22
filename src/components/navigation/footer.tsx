import Icons from '@/components/global/icons';
import { Gamepad2, Heart, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import OrbitIcon from '@/components/global/orbitIcon';

const Footer = () => {
	return (
		<footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-20">
			<div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
			<div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

			<div className="grid gap-12 xl:grid-cols-2 xl:gap-8">
				<div className="flex flex-col items-left justify-start md:max-w-[200px]">
					<div className="flex items-center ">
						<Link href="/" className="flex items-center gap-2">
							<OrbitIcon className="w6 h-6 ml-1 font-thin fill-100 text-white light-line-icon" />
							<span className="text-lg font-black uppercase">MoneyMess</span>
						</Link>
					</div>
					<span className="mt-4 text-neutral-200 text-sm flex items-center">
						Created by &copy; Kitpes
					</span>
					<span className=" text-neutral-200 text-sm flex items-center">
						with chill vibes
					</span>
				</div>

				<div className="group relative overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 flex items-center">
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
						<Link href="/#" className="hover:text-foreground/80">
							<div>
								<Send className="h-6 w-6 mb-1" />
								<span className="text-lg font-black">EN</span>
							</div>
						</Link>
						<Link href="/#" className="hover:text-foreground/80">
							<div>
								<Send className="h-6 w-6 mb-1" />
								<span className="text-lg font-black">RU</span>
							</div>
						</Link>
					</div>
				</div>
			</div>

			<div className="mt-4 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between ">
				<p className="text-sm text-muted-foreground mt-8 md:mt-0">
					&copy; {new Date().getFullYear()} Kitpes. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
