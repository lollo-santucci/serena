import React from 'react';
import classNames from 'classnames';

type TypographyVariant = 
  'logo-bg' | 'logo-sm' | 'logo-tag-bg' | 'logo-tag-sm' | 
  'nav-bg' | 'nav-sm' | 
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 
  'base' | 'sm' | 'xs' | 'xxs';

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<TypographyVariant, string> = {
  'logo-bg': 'text-logo-bg font-manuka-bold',
  'logo-sm': 'text-logo-sm font-manuka-bold',
  'logo-tag-bg': 'text-logo-tag-bg font-manuka-bold',
  'logo-tag-sm': 'text-logo-tag-sm font-manuka-bold',
  'nav-bg': 'text-nav-bg font-messina-bold',
  'nav-sm': 'text-nav-sm font-messina-bold',
  'h1': 'text-h1 font-manuka-bold uppercase',
  'h2': 'text-h2 font-manuka-bold uppercase',
  'h3': 'text-h3 font-messina-bold',
  'h4': 'text-h4 font-messina-semi-bold',
  'h5': 'text-h5 font-messina-semi-bold',
  'base': 'text-base font-messina-light',
  'sm': 'text-sm font-messina-light',
  'xs': 'text-xs font-messina-light',
  'xxs': 'text-xxs font-messina-light'
};

const htmlTags: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  'logo-bg': 'h1',
  'logo-sm': 'p',
  'logo-tag-bg': 'span',
  'logo-tag-sm': 'span',
  'nav-bg': 'div',
  'nav-sm': 'div',
  'h1': 'h1',
  'h2': 'h2',
  'h3': 'h3',
  'h4': 'h4',
  'h5': 'h5',
  'base': 'p',
  'sm': 'p',
  'xs': 'p',
  'xxs': 'p'
};

const Typography: React.FC<TypographyProps> = ({ 
  variant, 
  children, 
  className = '' 
}) => {
  const variantClass = variantClasses[variant] || 'text-base font-messina-light';
  const HtmlTag = htmlTags[variant] || 'span';

  return (
    <HtmlTag className={classNames(variantClass, className)}>
      {children}
    </HtmlTag>
  );
};

export default Typography;
