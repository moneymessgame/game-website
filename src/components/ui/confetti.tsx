'use client';

import confetti from 'canvas-confetti';
import type { ReactNode } from 'react';
import React, {
	createContext,
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import { sendGAEvent } from '@next/third-parties/google';

import type {
	GlobalOptions as ConfettiGlobalOptions,
	CreateTypes as ConfettiInstance,
	Options as ConfettiOptions,
} from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';

interface Api {
	fire: (options?: ConfettiOptions) => void;
}

type Props = React.ComponentPropsWithRef<'canvas'> & {
	options?: ConfettiOptions;
	globalOptions?: ConfettiGlobalOptions;
	manualstart?: boolean;
	children?: ReactNode;
};

export type ConfettiRef = Api | null;

const ConfettiContext = createContext<Api>({} as Api);

const Confetti = forwardRef<ConfettiRef, Props>((props, ref) => {
	const {
		options,
		globalOptions = { resize: true, useWorker: true },
		manualstart = false,
		children,
		...rest
	} = props;
	const instanceRef = useRef<ConfettiInstance | null>(null);

	const canvasRef = useCallback(
		(node: HTMLCanvasElement) => {
			if (node !== null) {
				if (instanceRef.current) return;
				instanceRef.current = confetti.create(node, {
					...globalOptions,
					resize: true,
				});
			} else {
				if (instanceRef.current) {
					instanceRef.current.reset();
					instanceRef.current = null;
				}
			}
		},
		[globalOptions]
	);

	const fire = useCallback(
		(opts = {}) => instanceRef.current?.({ ...options, ...opts }),
		[options]
	);

	const api = useMemo(
		() => ({
			fire,
		}),
		[fire]
	);

	useImperativeHandle(ref, () => api, [api]);

	useEffect(() => {
		if (!manualstart) fire();
	}, [manualstart, fire]);

	return (
		<ConfettiContext.Provider value={api}>
			<canvas ref={canvasRef} {...rest} />
			{children}
		</ConfettiContext.Provider>
	);
});

interface ConfettiButtonProps extends ButtonProps {
	options?: ConfettiOptions &
		ConfettiGlobalOptions & { canvas?: HTMLCanvasElement };
	children?: React.ReactNode;
}

function ConfettiButton({ options, children, ...props }: ConfettiButtonProps) {
	const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
		sendGAEvent({ event: 'Play right now', value: 'hover' });

		const rect = event.currentTarget.getBoundingClientRect();
		const x = rect.left + rect.width / 2;
		const y = rect.top + rect.height / 2;

		confetti({
			...options,
			origin: {
				x: x / window.innerWidth,
				y: y / window.innerHeight,
			},
		});
	};

	return (
		<Button onMouseEnter={handleHover} {...props}>
			{children}
		</Button>
	);
}

export { Confetti, ConfettiButton };

export default Confetti;
