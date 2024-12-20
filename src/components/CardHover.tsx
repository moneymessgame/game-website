'use client';

import React from 'react';
import { HoverEffect } from './ui';

// Пример массивов проектов
import { projects, projectsRu } from '@/constants';

const CardHover = ({ isRussian }: { isRussian: boolean }) => {
  const items = isRussian ? projectsRu : projects;

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={items} />
    </div>
  );
};

export default CardHover;
