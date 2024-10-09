import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

// Importa font da Google
export const interBold = Inter({
  subsets: ['latin'],
  weight: '700',
  style: 'italic',
  variable: '--font-inter-bold-italic',
});

// Importa font locali
export const manukaBold = localFont({
  src: '../../public/fonts/Manuka-Bold.woff2',
  variable: '--font-manuka-bold',
});
export const messinaBold = localFont({
  src: '../../public/fonts/MessinaSans-Bold.woff2',
  variable: '--font-messina-bold',
});
export const messinaSemiBold = localFont({
  src: '../../public/fonts/MessinaSans-SemiBold.woff2',
  variable: '--font-messina-semi-bold',
});
export const messinaLight = localFont({
  src: '../../public/fonts/MessinaSans-Light.woff2',
  variable: '--font-messina-light',
});
