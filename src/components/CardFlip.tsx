'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BorderBeam } from '@/components/ui/border-beam';

interface CardFlipProps {
	srcFront: string;
	srcBack: string;
	altFront: string;
	altBack: string;
	colorTo: string;
	colorFrom: string;
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
		<div className="m-4 hover:m-3" onClick={handleFlip}>
			<div className="flip-card w-[285px] h-[390px] rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
				<BorderBeam
					size={250}
					duration={12}
					delay={9}
					colorTo={colorTo}
					colorFrom={colorFrom}
				/>
				<motion.div
					className="flip-card-inner w-[100%] h-[100%] "
					initial={false}
					animate={{ rotateY: isFlipped ? 180 : 0 }}
					transition={{ duration: 0.6, animationDirection: 'normal' }}
					onAnimationComplete={() => setIsAnimated(false)}
				>
					<div className="flip-card-front w-[100%] h-[100%]">
						<Image
							src={srcFront}
							alt={altFront}
							width={300}
							height={417}
							quality={100}
							className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1"
						/>
					</div>
					<div className="flip-card-back w-[100%] h-[100%] absolute top-0 left-0 backface-hidden">
						<Image
							src={srcBack}
							alt={altBack}
							width={300}
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
