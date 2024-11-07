import Link from 'next/link';
import OrbitIcon from '@/components/global/orbitIcon';

const Footer = () => {
	return (
		<footer className="flex flex-col relative items-center justify-center border-t border-border pt-20 pb-8 px-6 lg:px-8 w-full max-w-screen-xl mx-auto">
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
						Made by KitPes
						<br /> with chill vibes 💙💛
					</p>
				</div>

				<div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
					<div className="md:grid md:grid-cols-2 md:gap-8">
						{/* Resources */}
						<div>
							<h3 className="text-base font-medium text-white">Resources</h3>
							<ul className="mt-4 text-sm text-muted-foreground">
								<li className="mt-2">
									<Link
										href="/wiki/en"
										className="hover:text-foreground transition-all duration-300"
									>
										Wiki (En)
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="/wiki/ru"
										className="hover:text-foreground transition-all duration-300"
									>
										Wiki (Ru)
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="/roadmap"
										className="hover:text-foreground transition-all duration-300"
									>
										Roadmap
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="/Whitepaper EN.pdf"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-foreground transition-all duration-300"
									>
										Whitepaper
									</Link>
								</li>
							</ul>
						</div>

						{/* Socials */}
						<div className="mt-10 md:mt-0 flex flex-col">
							<h3 className="text-base font-medium text-white">Socials</h3>
							<ul className="mt-4 text-sm text-muted-foreground">
								<li className="mt-2">
									<Link
										href="https://t.me/moneymesschannel"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-foreground transition-all duration-300"
									>
										Telegram (En)
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="https://t.me/moneymesschannelru"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-foreground transition-all duration-300"
									>
										Telegram (Ru)
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="https://x.com/moneymessgame"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-foreground transition-all duration-300"
									>
										<strong>X</strong> (Twitter)
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="md:grid md:grid-cols-2 md:gap-8">
						{/* Company */}
						<div>
							<h3 className="text-base font-medium text-white">Company</h3>
							<ul className="mt-4 text-sm text-muted-foreground">
								<li className="">
									<Link
										href="/about"
										className="hover:text-foreground transition-all duration-300"
									>
										About Us
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="/first-season"
										className="hover:text-foreground transition-all duration-300"
									>
										First Season
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="/donate"
										className="hover:text-foreground transition-all duration-300"
									>
										Donate
									</Link>
								</li>
							</ul>
						</div>

						{/* Team */}
						<div className="mt-10 md:mt-0 flex flex-col">
							<h3 className="text-base font-medium text-white">Team</h3>
							<ul className="mt-4 text-sm text-muted-foreground">
								<li className="">
									<Link
										href="https://www.linkedin.com/in/irina-semichasova/"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-foreground transition-all duration-300"
									>
										LinkedIn (Irine)
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="https://www.linkedin.com/in/mafstat/"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-foreground transition-all duration-300"
									>
										LinkedIn (Ihor)
									</Link>
								</li>
							</ul>
							{/* <h3 className="text-base font-medium text-white">Company</h3>
							<ul className="mt-4 text-sm text-muted-foreground">
								<li className="">
									<Link
										href="/about"
										className="hover:text-foreground transition-all duration-300"
									>
										About Us
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="/first-season"
										className="hover:text-foreground transition-all duration-300"
									>
										First Season
									</Link>
								</li>
								<li className="mt-2">
									<Link
										href="/donate"
										className="hover:text-foreground transition-all duration-300"
									>
										Donate
									</Link>
								</li>
							</ul> */}
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
