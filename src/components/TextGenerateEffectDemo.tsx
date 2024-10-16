'use client';

import { TextGenerateEffect } from './ui/text-generate-effect';

export function TextGenerateEffectDemo({subtitle}: {subtitle: string}) {
	return <TextGenerateEffect duration={2} filter={false} subtitle={subtitle} />;
}
