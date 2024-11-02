'use client';

import Image from 'next/image';
import { GameCardFrontProps } from '@/types/game-card-front';
import SectionBadge from '@/components/ui/section-badge';

const GameCardFront: React.FC<GameCardFrontProps> = ({
	srcFront,
	altFront,
	colorTo,
	colorFrom,
	name,
	characteristic,
	number,
	
}) => (
	<>
		<div
			style={{
				background: `linear-gradient(to top, #080936, #1315A3, #0859E9)`,
			}}
			className="w-[100%] h-[100%] absolute -z-50"
		/>

		<Image
			src="/backgrounds/library.jpg"
			alt="Library"
			width={390}
			height={390}
			quality={80}
			className="absolute z-20 object-cover w-[390px] h-[390px] bottom-0 object-center overflow-hidden"
		/>			

		<Image
			src={srcFront}
			alt={altFront}
			width={329}
			height={390}
			quality={80}
			className="absolute z-30 object-cover w-[329px] h-[390px] bottom-0 object-center overflow-hidden"
		/>

		<div
			className={`absolute  w-[100%] h-[100%] z-40 bg-gradient-to-t to-30% from-[#080936] bottom-0`}
		/>

		<div className="absolute z-50 top-2 left-2 text-left">
			<SectionBadge title={characteristic} />
		</div>

		<div className="absolute z-50 bottom-2 left-2 text-left">
			<div className="text-foreground text-2xl font-black text-left">{number}</div>
			<h1 className="text-foreground text-2xl font-black text-left">{name}</h1>
			<h2 className="text-foreground text-md font-light text-left">
				{altFront}
			</h2>
		</div>
	</>
);

export default GameCardFront;
