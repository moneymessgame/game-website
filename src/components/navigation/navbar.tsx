'use client';

import React from 'react';
import Link from 'next/link';
import { Gamepad2 } from 'lucide-react';

import { buttonVariants, CoolMode } from '@/components/ui';
import OrbitIcon from '@/components/global/orbitIcon';
import { MobileNav } from '@/components/navigation/mobile-nav/index';
import { NavMenu } from '@/components/navigation/nav-menu';

type Props = {};

export default function Navbar({}: Props) {
	return (
		<header
			className="px-4 h-14 fixed top-0
    inset-x-0 w-full bg-background/40 backdrop-blur-lg
    border-b border-border z-50"
		>
			<div
				className="flex items-center
        justify-between h-full mx-auto 
        md:max-w-screen-xl"
			>
				<div className="flex items-center justify-center content-center">
					<div className="flex">
						<MobileNav />
					</div>
					<Link href="/" className="flex items-center justify-center content-center text-center gap-2">
						<OrbitIcon className="hidden sm:flex w6 h-6 m-2 font-thin fill-100 text-white light-line-icon" />
						<span className="flex text-xl font-black uppercase">MoneyMess</span>
					</Link>
					
					<div className="flex px-1">
						<NavMenu />
					</div>
				</div>

				<CoolMode>
					<div className="flex items-center gap-4">
						<Link
							href="https://t.me/moneymessbot/view"
							target="_blank"
							rel="noopener noreferrer"
							className={buttonVariants({
								size: 'sm',
								className: 'flex bg-ring hover:bg-accent gap-3 px-6 py-5',
							})}
						>
							<Gamepad2 className="h-6 w-6" />
							<span className="text-lg font-black uppercase">Play</span>
						</Link>
					</div>
				</CoolMode>
			</div>
		</header>
	);
}
