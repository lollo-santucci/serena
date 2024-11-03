"use client"

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from '@/components/atoms/NavLink';
import { Taste } from '@/types'; // Import the Taste type
import { motion } from 'framer-motion';

interface NavigationProps {
  variant?: 'row' | 'column';
  tastes: Taste[];
}

const Navigation: React.FC<NavigationProps> = ({ tastes, variant = 'row' }) => {
  const pathname = usePathname(); // Get the current pathname
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup quando il componente viene smontato
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className='contents'>
      {/* Navigazione per schermi grandi */}
      <nav className={`hidden md:flex ${variant === 'row' ? 'flex-row justify-between' : 'flex-1 flex-col items-center w-full justify-around'}`}>
        {tastes.map((taste) => (
          <NavLink
            active={pathname.startsWith(`/${taste.taste}`)}
            key={taste.id}
            href={taste.taste}
            variant={variant === 'row' ? 'sm' : 'bg'}
          >
            {taste.taste}
          </NavLink>
        ))}
      </nav>

      {/* Hamburger Menu per dispositivi mobili */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none z-50 relative">
          {/* Div quadrato con sfondo #B0FF32 */}
          <div className="w-14 h-14 bg-[#B0FF32] flex flex-col justify-center items-center">
            <motion.div
              initial={{ rotate: 0, y: 0 }}
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0
              }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-black mb-1"
            />
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-black mb-1"
            />
            <motion.div
              initial={{ rotate: 0, y: 0 }}
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0
              }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-black"
            />
          </div>
        </button>

        {/* Menu a comparsa per dispositivi mobili */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-screen overflow-hidden h-screen bg-white flex justify-center items-center z-40"
          >
            <ul className="flex flex-col items-center space-y-4">
              {tastes.map((taste) => (
                <li key={taste.id}>
                  <NavLink
                    active={pathname === `/${taste.taste}`}
                    href={taste.taste}
                    variant="bg"
                  >
                    {taste.taste}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
