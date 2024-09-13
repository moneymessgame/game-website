'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CardDemoProps {
	backgroundImage: string;
	avatarSrc: string;
	author: string;
	time: string;
	title: string;
	description: string;
}

export default function CardDemo({
	backgroundImage,
	avatarSrc,
	author,
	time,
	title,
	description,
}: CardDemoProps) {
	return (
		<div className="max-w-[500px] w-full group/card">
			<div
				className={cn(
					'cursor-pointer overflow-hidden relative card h-[300px] rounded-md shadow-xl max-w-[500px] mx-auto flex flex-col justify-between p-4',
					'bg-cover bg-center',
					backgroundImage
				)}
			>
				<div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover/card:opacity-0"></div>
				<div className="flex flex-row items-center space-x-4 z-10 relative">
					<Image
						height="100"
						width="100"
						alt="Avatar"
						src={avatarSrc}
						className="h-10 w-10 rounded-full border-2 object-cover"
					/>
					<div className="flex flex-col">
						<p className="font-normal text-base text-gray-50 relative z-10">
							{author}
						</p>
						<p className="text-sm text-gray-400"> {time} </p>
					</div>
				</div>
				<div className="text content relative z-10">
					<h1 className="font-black uppercase text-xl md:text-2xl text-gray-50">
						{title}
					</h1>
					<p className="font-normal text-sm text-gray-50 my-4">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}
