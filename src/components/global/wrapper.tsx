import React from 'react';
import { cn } from '@/lib/utils';
import { WrapperProps } from '@/types/wrapper';

export default function Wrapper({ children, className }: WrapperProps) {
	return (
		<div
			className={cn(
				'h-full w-full mx-auto max-w-screen-xl ',
				className
			)}
		>
			{children}
		</div>
	);
}
