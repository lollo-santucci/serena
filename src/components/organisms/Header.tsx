import React from 'react';
import Logo from '@/components/atoms/Logo';
import Navigation from '@/components/molecules/Navigation';

interface HeaderProps {
  variant?: 'sm' | 'bg-row' | 'bg-col';
}

const Header: React.FC<HeaderProps> = ({ variant = 'sm' }) => {
  const isColumn = variant === 'bg-col';

  return (
    <header className={`flex w-full ${variant.includes('bg') ? 'flex-col' : 'items-center justify-between'}`}>
      <Logo version={variant.includes('bg') ? 'bg' : 'sm'} space={isColumn ? 'no-space' : 'space'}/>
      <Navigation variant={isColumn ? 'column' : 'row'} />
    </header>
  );
};

export default Header;
