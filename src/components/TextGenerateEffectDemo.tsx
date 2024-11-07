'use client';

import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export function TextGenerateEffectDemo({subtitle}: {subtitle: string}) {
	return <TextGenerateEffect duration={3} filter={false} subtitle={subtitle} />;
}
