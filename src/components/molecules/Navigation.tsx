'use client'

import { usePathname } from 'next/navigation';
import NavLink from '@/components/atoms/NavLink';
import { Taste } from '@/types'; // Import the Taste type

interface NavigationProps {
  variant?: 'row' | 'column';
  tastes: Taste[];
}

const Navigation: React.FC<NavigationProps> = ({ tastes, variant = 'row' }) => {
  const pathname = usePathname(); // Get the current pathname
  
  return (
    <nav className={`flex ${variant === 'row' ? 'flex-row justify-between' : 'flex-col justify-between items-center w-full my-2'}`}>
      {tastes.map((taste) => (
        <NavLink
          active={pathname === `/${taste.taste}`}
          key={taste.id}
          href={taste.taste}
          variant={variant === 'row' ? 'sm' : 'bg'} 
        >
          {taste.taste}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
