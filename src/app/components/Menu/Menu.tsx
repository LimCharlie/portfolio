'use client';

import React, { useState } from 'react';
import { Item } from './Items/Item';
import { FiSmile, FiSend, FiBriefcase } from 'react-icons/fi';

export const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <nav className='nav hidden lg:block'>
      <ul className='mt-10 w-max'>
        <Item
          url='/#presentation'
          content='À propos'
          index={1}
          icon={<FiSmile />}
          isSelected={selectedItem === 1}
          onItemClick={handleItemClick}
        />
        <Item
          url='/#experiences'
          content='Mes expériences'
          index={2}
          icon={<FiBriefcase />}
          isSelected={selectedItem === 2}
          onItemClick={handleItemClick}
        />
        <Item
          url='/#contact'
          content='Contact'
          index={3}
          icon={<FiSend />}
          isSelected={selectedItem === 3}
          onItemClick={handleItemClick}
        />
      </ul>
    </nav>
  );
};
