import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { navItems } from '@/constants';

import { Gamepad2, Orbit } from 'lucide-react';
import OrbitIcon from '@/components/global/orbitIcon';

import { MobileNav } from '@/components/navigation/mobile-nav';
import { NavMenu } from '@/components/navigation/nav-menu';

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
					<Link href="/" className="flex items-center gap-2 py-2">
						<OrbitIcon className="w6 h-6 ml-1 font-thin fill-100 text-white light-line-icon" />
						<span className="text-lg font-black uppercase">MoneyMess</span>
					</Link>
					<div className="flex p-[2px]">
						<MobileNav />
					</div>
					<div className="flex px-1">
						<NavMenu />
					</div>
				</div>

				<div className="flex items-center gap-4">
					<Link
						href="/Whitepaper En.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className={buttonVariants({
							size: 'sm',
							className: 'flex bg-ring hover:bg-accent gap-3 px-8 py-5',
						})}
					>
						<Gamepad2 className="h-6 w-6" />
						<span className="text-lg font-black uppercase">Whitepaper</span>
					</Link>
					<Link
						href="#"
						className={buttonVariants({
							size: 'sm',
							className: 'flex bg-ring hover:bg-accent gap-3 px-8 py-5',
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
