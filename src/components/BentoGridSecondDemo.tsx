import { cn } from '@/lib/utils';
import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { IconBoxAlignRightFilled } from '@tabler/icons-react';
import {
	CircleArrowOutDownLeft,
	CircleArrowOutDownRight,
	CircleArrowOutUpLeft,
	CircleArrowRight,
} from 'lucide-react';

export function BentoGridDemo() {
	return (
		<BentoGrid className="max-w-4xl mx-auto">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					icon={item.icon}
					className={cn(
						i === 3 || i === 6 ? 'md:col-span-2' : '',
						'bg-black text-white border-2 border-white shadow-lg'
					)}
				/>
			))}
		</BentoGrid>
	);
}

const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-black"></div>
);

const items = [
	{
		title: 'Presence of Automated Processes:',
		description:
			'Look for games that offer automated mechanics, such as farming, staking, or renting characters.',
		header: <Skeleton />,
		icon: <CircleArrowOutUpLeft className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Transparent Tokenomics:',
		description:
			'Ensure the game has a stable and clear revenue distribution system to avoid the depreciation of earned assets.',
		header: <Skeleton />,
		icon: <CircleArrowRight className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Low Risks:',
		description:
			'Research the project and its reputation to minimize the risk of losing invested funds.',
		header: <Skeleton />,
		icon: <CircleArrowOutDownRight className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'NFT Support:',
		description:
			'Games with NFTs often offer the opportunity to rent out assets, which can become a great source of passive income.',
		header: <Skeleton />,
		icon: <CircleArrowOutDownLeft className="h-4 w-4 text-neutral-500" />,
	},
];
