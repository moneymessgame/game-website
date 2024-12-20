'use client';

import { useEffect, useRef, useState } from 'react';
import type { Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';

import { ny } from '@/lib/util';

interface HyperTextProps {
	text: string;
	duration?: number;
	framerProps?: Variants;
	className?: string;
	animateOnLoad?: boolean;
}

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export default function HyperText({
	text,
	duration = 800,
	framerProps = {
		initial: { opacity: 0, y: -10 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 3 },
	},
	className,
	animateOnLoad = true,
}: HyperTextProps) {
	// Разделяем текст на массив символов, сохраняя пробелы
	const [displayText, setDisplayText] = useState(text.split('').map(char => char === ' ' ? '\u00A0' : char));
	const [trigger, setTrigger] = useState(false);
	const interations = useRef(0);
	const isFirstRender = useRef(true);

	const triggerAnimation = () => {
		interations.current = 0;
		setTrigger(true);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!animateOnLoad && isFirstRender.current) {
				clearInterval(interval);
				isFirstRender.current = false;
				return;
			}
			if (interations.current < displayText.length) {
				setDisplayText((t) =>
					t.map((l, i) =>
						l === ''
							? l
							: i <= interations.current
							? displayText[i]
							: alphabets[getRandomInt(26)]
					)
				);
				interations.current += 0.1;
			} else {
				setTrigger(false);
				clearInterval(interval);
			}
		}, duration / (displayText.length * 10));
		// Clean up interval on unmount
		return () => clearInterval(interval);
	}, [text, duration, trigger, animateOnLoad]);

	return (
		<div
			className="flex scale-100 cursor-default overflow-hidden pt-12 items-center justify-center"
			onMouseEnter={triggerAnimation}
		>
			<AnimatePresence mode="wait">
				{displayText.map((letter, i) => (
					<motion.h1
						key={i}
						className={ny('font-mono', letter === '' ? 'w-3' : '', className)}
						{...framerProps}
					>
						{letter.toUpperCase()}
					</motion.h1>
				))}
			</AnimatePresence>
		</div>
	);
}
