import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: string;
  variant?: 'bg' | 'sm';
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, variant = 'sm' }) => {

  const linkClasses = `
    font-messina-semi-bold
    text-nav-${variant} 
    hover:underline 
    ${variant === 'bg' ? 'hover:decoration-6' : 'hover:decoration-3'}
    underline-offset-4 
    transition-all 
    duration-300
    mx-4
    my-2
  `;

  return (
      <Link href={href} className={linkClasses}>
        {children}
      </Link>
  );
};

export default NavLink;
