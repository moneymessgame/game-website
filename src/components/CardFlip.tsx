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
		<div className="m-4" onClick={handleFlip}>
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
					transition={{ duration: 0.1, animationDirection: 'normal' }}
					onAnimationComplete={() => setIsAnimated(false)}
				>
					<div className="flip-card-front w-[100%] h-[100%] overflow-hidden relative rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1">
						<div className="w-[100%] h-[100%] absolute  z-10 bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>

						
						<Image
							src={srcFront}
							alt={altFront}
							width={329}
							height={390}
							quality={100}
							className="absolute z-20 object-cover w-[329px] h-[390px] bottom-0 object-center overflow-hidden"
						/>

						<div className='absolute  w-[100%] h-[100%] z-30 bg-gradient-to-t to-30% from-indigo-500  bottom-0'></div>
						
						<div className='absolute z-50 bottom-2 left-2 text-left'>
							<h1 className='text-foreground text-3xl font-black text-left'>Name</h1>
							<h2 className='text-foreground text-xl font-black text-left'>{altFront}</h2>
						</div>
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
