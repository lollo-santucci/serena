import Link from 'next/link';

interface NavLinkProps {
  active?: boolean;
  href: string;
  children: string;
  variant?: 'bg' | 'sm';
}

const NavLink: React.FC<NavLinkProps> = ({ active = "false", href, children, variant = 'sm' }) => {

  const linkClasses = `
    font-messina-semi-bold
    text-nav-${variant}
    ${active ? 'underline decoration-3' : ''} 
    hover:underline 
    ${variant === 'bg' ? 'hover:decoration-6' : 'hover:decoration-3'}
    underline-offset-4 
    transition-all 
    duration-300
    mx-4
    flex items-end
  `;

  return (
      <Link href={`/${href}`} className={linkClasses}>
        {children}
      </Link>
  );
};

export default NavLink;
