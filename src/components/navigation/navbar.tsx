import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { navItems } from '@/constants';

import { Gamepad2, Orbit } from 'lucide-react';
import OrbitIcon from '@/components/global/orbitIcon';

type Props = {};

export default function Navbar({}: Props) {
	return (
		<header
			className="px-4 h-14 sticky top-0
    inset-x-0 w-full bg-background/40 backdrop-blur-lg
    border-b border-border z-50"
		>
			<div
				className="flex items-center
        justify-between h-full mx-auto 
        md:max-w-screen-xl"
			>
				<div className="flex items-start">
					<Link href="/" className="flex items-center gap-2">
						<OrbitIcon className="w6 h-6 ml-1 font-thin fill-100 text-white light-line-icon" />
						<span className="text-lg font-black uppercase">MoneyMess</span>
					</Link>
				</div>
				<nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<ul className="flex items-center justify-center gap-8 mx-3">
						<Link
							href={navItems[0].link}
							className="hover:text-foreground/80 text-sm"
						>
							{navItems[0].name}
						</Link>
						<Link
							href={navItems[1].link}
							className="hover:text-foreground/80 text-sm"
						>
							{navItems[1].name}
						</Link>
						<Link
							href={navItems[2].link}
							className="hover:text-foreground/80 text-sm"
						>
							{navItems[2].name}
						</Link>
						<Link
							href={navItems[3].link}
							className="hover:text-foreground/80 text-sm"
						>
							{navItems[3].name}
						</Link>
					</ul>
				</nav>
				<div className="flex items-center gap-4">
					<Link
						href="#"
						className={buttonVariants({
							size: 'sm',
							className: 'flex bg-ring hover:bg-purple-400 gap-3 px-8 py-5',
						})}
					>
						<Gamepad2 className="h-6 w-6" />
						<span className="text-lg font-black uppercase">Play</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
