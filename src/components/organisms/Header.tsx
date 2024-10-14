import React from 'react';
import type { Taste } from '@/types';
import Logo from '@/components/atoms/Logo';
import Navigation from '@/components/molecules/Navigation';

interface HeaderProps {
  variant?: 'sm' | 'bg-row' | 'bg-col';
  tastes: Taste[];
}

const Header: React.FC<HeaderProps> = ({ tastes, variant = 'sm' }) => {
  const isColumn = variant === 'bg-col';

  return (
    <header className={`flex w-full ${variant.includes('bg') ? 'flex-col' : 'items-center justify-between'}`}>
      <Logo version={variant.includes('bg') ? 'bg' : 'sm'} space={isColumn ? 'no-space' : 'space'}/>
      <Navigation tastes={tastes} variant={isColumn ? 'column' : 'row'} />
    </header>
  );
};

export default Header;
