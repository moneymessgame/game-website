'use client';

import Image from 'next/image';

interface GameCardFrontProps {
	srcFront: string;
	altFront: string;
	colorTo: string;
	colorFrom: string;
	name: string;
}

const GameCardFront: React.FC<GameCardFrontProps> = ({
	srcFront,
	altFront,
	colorTo,
	colorFrom,
	name,

}) => (
	<>
			<div className={`w-[100%] h-[100%] absolute z-10 bg-gradient-to-t from-[#ff0f0f] ${colorFrom} from-10% via-[] via-30% to-[#000]  to-90%`}></div>
			<Image
				src={srcFront}
				alt={altFront}
				width={329}
				height={390}
				quality={80}
				className="absolute z-20 object-cover w-[329px] h-[390px] bottom-0 object-center overflow-hidden"
			/>

			<div className={`absolute  w-[100%] h-[100%] z-30 bg-gradient-to-t to-30% from-[#ff0f0f] ${colorFrom}  bottom-0`}></div>

			<div className="absolute z-50 bottom-2 left-2 text-left">
				<h1 className="text-foreground text-3xl font-black text-left">
					{name}
				</h1>
				<h2 className="text-foreground text-xl font-black text-left">
					{altFront}
				</h2>
			</div>
		</>
);

export default GameCardFront;
