import { fetchTastes } from '@/lib/api/tastes';
import type { Taste } from '@/types';
import Logo from '@/components/atoms/Logo';
import Navigation from '@/components/molecules/Navigation';
import Search from '@/components/molecules/Search';

export default async function Home() {
  const tastes: Taste[] = await fetchTastes();

  return (
    <>
      <Logo version="bg" />
      <Navigation tastes={tastes} variant="row" />
      <Search />
    </>
  );
}
