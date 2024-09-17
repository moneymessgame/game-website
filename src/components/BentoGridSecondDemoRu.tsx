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
		title: 'Наличие автоматизированных процессов:',
		description:
			'Ищите игры, которые предлагают автоматизированные механики, такие как фарминг, стейкинг или аренда персонажей.',
		header: <Skeleton />,
		icon: <CircleArrowOutUpLeft className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Прозрачная токеномика:',
		description:
			'Убедитесь, что игра имеет стабильную и понятную систему распределения доходов, чтобы избежать падения ценности заработанных активов.',
		header: <Skeleton />,
		icon: <CircleArrowRight className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Низкие риски:',
		description:
			'Изучите проект и его репутацию, чтобы минимизировать риски потерять вложенные средства.',
		header: <Skeleton />,
		icon: <CircleArrowOutDownRight className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Поддержка NFT:',
		description:
			'Игры с NFT часто предлагают возможность сдачи активов в аренду, что может стать отличным источником пассивного дохода.',
		header: <Skeleton />,
		icon: <CircleArrowOutDownLeft className="h-4 w-4 text-neutral-500" />,
	},
];
