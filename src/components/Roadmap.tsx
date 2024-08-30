'use client';

import React, { useRef } from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { roadmapData } from '@/lib/data';
import { useTheme } from 'next-themes';
import { motion, useInView } from 'framer-motion';

export default function Roadmap() {
	const { theme } = useTheme();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const animationVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<section id="roadmap" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
			<h2 className="text-3xl lg:text-4xl font-black uppercase mt-6 text-center mb-10">
				ROADMAP
			</h2>
			<VerticalTimeline lineColor="#222">
				{roadmapData.map((item, index) => (
					<VerticalTimelineElement
						key={index}
						visible
						contentStyle={{
							background:
								theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
							boxShadow: 'none',
							border: '1px solid rgba(0, 0, 0, 0.05)',
							textAlign: 'left',
							padding: '1.3rem 2rem',
							borderRadius: '1rem',
						}}
						contentArrowStyle={{
							borderRight:
								theme === 'light'
									? '0.4rem solid #9ca3af'
									: '0.4rem solid rgba(255, 255, 255, 0.5)',
						}}
						date={item.date}
						icon={item.icon}
						iconStyle={{
							background:
								theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
							fontSize: '1.5rem',
						}}
					>
						<motion.div
							initial="hidden"
							animate={isInView ? 'visible' : 'hidden'}
							variants={animationVariants}
							transition={{ duration: 1, delay: index * 0.5 }}
						>
							<div className="flex flex-row justify-between">
								<div></div>
							</div>
							<p className="!mt-2 !font-semibold dark:text-white/75">
								{item.description}
							</p>
						</motion.div>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
			<p
				className={`text-xl italic text-center font-medium my-10 text-gray-700 dark:text-white/75 ${
					theme === 'light' ? 'hidden' : 'block'
				}`}
			></p>
		</section>
	);
}
