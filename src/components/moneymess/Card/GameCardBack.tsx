'use client';

import Image from 'next/image';

import { GameCardFrontProps } from '@/types/game-card-front';
import SectionBadge from '@/components/ui/section-badge';

const GameCardFront: React.FC<GameCardFrontProps> = ({
	srcFront,
	srcFrontBg,
	srcBack,
	altFront,
	colorTo,
	colorFrom,
	name,
	firstname,
	lastname,
	characteristic,
	number,
}) => (
	<>
		<div className="w-[100%] h-[100%] absolute -z-50 bg-[#080d15] overflow-hidden" />

		{/* <Image
			src={srcFrontBg}
			alt="Library"
			width={390}
			height={390}
			quality={80}
			className="absolute z-20 object-cover w-[390px] h-[390px] bottom-0 object-center blur-[1px]"
		/>	 */}

		{/* <div
			className={`absolute top-1/2 left-1/2 z-30 w-full -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem] ${
				characteristic === 'dominion'
					? 'gradient-popularity'
					: characteristic === 'popularity'
					? 'gradient-dominion'
					: characteristic === 'richness'
					? 'gradient-richness'
					: characteristic === 'attractiveness'
					? 'gradient-attractiveness'
					: 'gradient'
			}`}
		/> */}

		{/* <Image
			src={srcFront}
			alt={altFront}
			width={658}
			height={780}
			quality={80}
			className="absolute z-40 object-cover w-[329px] h-[390px] bottom-0 object-center overflow-hidden"
		/> */}

		{/* <div
			className={`absolute top-1/2 left-1/2 z-40 w-full -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] ${
				characteristic === 'dominion'
					? 'gradient-popularity'
					: characteristic === 'popularity'
					? 'gradient-dominion'
					: characteristic === 'richness'
					? 'gradient-richness'
					: characteristic === 'attractiveness'
					? 'gradient-attractiveness'
					: 'gradient'
			}`}
		/> */}

		{/* <div
			className={`absolute  w-[100%] h-[100%] z-40 bg-gradient-to-t to-25% bottom-0 ${
				characteristic === 'dominion'
					? 'from-[#4d4d06]'
					: characteristic === 'popularity'
					? 'from-[#440505]'
					: characteristic === 'richness'
					? 'from-[#034403]'
					: characteristic === 'attractiveness'
					? 'from-[#032f30]'
					: 'from-[#080936]'
			}`}
		/> */}

		{/* <div className="absolute z-50 top-2 left-2 text-left">
			<SectionBadge title={characteristic} />
		</div> */}

		<div className="absolute z-50 top-2 left-2 text-left">
			<div className="text-foreground text-3xl font-light text-left">
				# {number}
			</div>
		</div>

		<div className="absolute z-50 bottom-2 left-2 text-left">
			<div className="text-foreground text-2xl font-black text-left">
				{firstname}
			</div>
			<h2 className="text-foreground text-2xl font-black text-left">
				{lastname}
			</h2>
			<h3 className="text-foreground text-md font-light text-left max-w-[200px] pb-4">
				{altFront}
			</h3>
			<Image
				src="/game/qr-moneymess.jpg"
				alt="QR code"
				width={150}
				height={150}
				className="rounded-md"
			/>
		</div>
	</>
);

export default GameCardFront;
