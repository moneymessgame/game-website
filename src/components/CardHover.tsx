'use client';

import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';

// Пример массивов проектов
import { projects, projectsRu } from '@/constants';

const CardHover = ({ isRussian }: { isRussian: boolean }) => {
  // В зависимости от значения isRussian выбираем данные
  const items = isRussian ? projectsRu : projects;

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={items} />
    </div>
  );
};

export default CardHover;
