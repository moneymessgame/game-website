'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BorderBeam } from '@/components/ui/border-beam';
import GameCardFront from '@/components/moneymess/Card/GameCardFront';

interface CardFlipProps {
	srcFront: string;
	srcBack: string;
	altFront: string;
	altBack: string;
	colorTo: string;
	colorFrom: string;
	email?: string; 
	linkedIn?: string; 
	gitHub?: string;
}

const CardFlip: React.FC<CardFlipProps> = ({
	srcFront,
	srcBack,
	altFront,
	altBack,
	colorTo,
	colorFrom,
}) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isAnimated, setIsAnimated] = useState(false);

	function handleFlip() {
		if (!isAnimated) {
			setIsFlipped(!isFlipped);
			setIsAnimated(true);
		}
	}

	return (
		<div className="m-4" onClick={handleFlip}>
			<div className="flip-card w-[285px] h-[390px] rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
				{/* <BorderBeam
					size={250}
					duration={12}
					delay={9}
					colorTo={colorTo}
					colorFrom={colorFrom}
				/> */}
				<motion.div
					className="flip-card-inner w-[100%] h-[100%]"
					initial={false}
					animate={{ rotateY: isFlipped ? 180 : 0 }}
					transition={{ duration: 0.1, animationDirection: 'normal' }}
					onAnimationComplete={() => setIsAnimated(false)}
				>
					<div className="flip-card-front w-[100%] h-[100%] overflow-hidden relative rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1">
						<GameCardFront 
							srcFront={'/characters/middle/card01.png'}
							colorTo={'red'}
							colorFrom={'ccc'}
							name={'Name'} 
							altFront={''}						/>
					</div>
					<div className="flip-card-back w-[100%] h-[100%] z-50 absolute top-0 left-0 backface-hidden">
						<Image
							src={srcBack}
							alt={altBack}
							width={352}
							height={417}
							quality={100}
							className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default CardFlip;
