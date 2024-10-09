'use client';

import { useEffect, useState } from 'react';
import NavLink from '@/components/atoms/NavLink';
import { Taste } from '@/types'; // Importa il tipo dal file index
import { fetchTastes } from '@/lib/api/tastes';

interface NavigationProps {
  variant?: 'row' | 'column';
}

const Navigation: React.FC<NavigationProps> = ({ variant = 'row' }) => {
  const [tastes, setTastes] = useState<Taste[]>([]);

  useEffect(() => {
    const loadTastes = async () => {
      const data = await fetchTastes();
      setTastes(data);
    };
    loadTastes();
  }, []);

  return (
    <nav className={`flex ${variant === 'row' ? 'flex-row justify-between' : 'flex-col justify-between'}`}>
      {tastes.map((taste) => (
        <NavLink
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