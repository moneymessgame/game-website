import HyperText from '@/components/ui/hyper-text';

export function HyperTextDemo({ title }: { title: string }) {
	return (
		<HyperText
			className="text-2xl font-bold text-white text-center dark:text-white"
			text={title}
		/>
	);
}
