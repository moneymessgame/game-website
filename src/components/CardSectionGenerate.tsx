'use client';

import React, { useEffect, useState } from 'react';
import { getRandomCharacters } from '@/utils/characterUtils';
import { CharacterType } from '@/types/main-page';
import CardSection from './CardSection';
import { CardSectionGenerateProps } from '@/types/card-section-generate';

export default function CardSectionGenerate({
	title = '',
	description = '',
	numberOfCharacters = 1, // Устанавливаем значение по умолчанию
}: CardSectionGenerateProps) {
	// Создание состояния для случайных персонажей
	const [randomCharacters, setRandomCharacters] = useState<CharacterType[]>([]);

	// Генерация персонажей на клиенте при первом рендере
	useEffect(() => {
		const characters = getRandomCharacters(numberOfCharacters); // Используем переданное количество
		setRandomCharacters(characters);
	}, [numberOfCharacters]); // Добавлено зависимости для useEffect

	return (
		<CardSection
			title={title}
			description={description}
			cards={randomCharacters.map((character) => ({
				srcFront: character.srcFront,
				srcBack: character.srcBack,
				altFront: character.altFront,
				altBack: character.altBack,
				colorTo: character.colorTo,
				colorFrom: character.colorFrom,
				name: character.name,
			}))}
			colorTo={''}
			colorFrom={''}
		/>
	);
}
