'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from '@/components/atoms/NavLink';
import { Taste } from '@/types'; // Import the Taste type
import { fetchTastes } from '@/lib/api/tastes';

interface NavigationProps {
  variant?: 'row' | 'column';
}

const Navigation: React.FC<NavigationProps> = ({ variant = 'row' }) => {
  const [tastes, setTastes] = useState<Taste[]>([]);
  const pathname = usePathname(); // Get the current pathname
  console.log(pathname, tastes);
  useEffect(() => {
    const loadTastes = async () => {
      const data = await fetchTastes();
      setTastes(data);
    };
    loadTastes();
  }, []);

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
