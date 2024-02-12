import React, { useState } from 'react';
import { ItemProps } from '@/app/interfaces/ItemProps';

export const Item: React.FC<ItemProps> = ({
  url = '/',
  content,
  index,
  icon,
  isSelected,
  onItemClick,
}) => {
  return (
    <li>
      <a
        href={url}
        onClick={() => onItemClick(index)}
        className='group flex items-center py-3'
      >
        <div
          className={`flex align-middle items-center nav-text text-xs font-bold uppercase tracking-widest ${
            isSelected ? 'text-solid-crimson' : 'text-slate-500'
          } group-hover:text-solid-crimson group-focus-visible:text-solid-crimson`}
        >
          <span className='mr-2'>{icon}</span>
          <span>{content}</span>
        </div>
      </a>
    </li>
  );
};
