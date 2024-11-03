import { fetchTastes } from '@/lib/api/tastes';
import type { Taste } from '@/types';
import Header from '@/components/organisms/Header';
import Image from 'next/image';
import Search from '@/components/molecules/Search';
import Intro from '@/components/molecules/Intro';

export default async function Home() {
  const tastes: Taste[] = await fetchTastes();

  return (
    <>
      <main className='w-[100vw]'>
        <section className='h-[100vh] p-6 flex flex-col justify-between'>
          <div className='relative h-[70%] lg:h-full w-full order-2 lg:order-1'>
            <Image
              src='/imgs/copertina.webp'
              alt='Cibo'
              layout='fill'
              objectFit='cover'
              priority={true}
            />
          </div>
          <Header tastes={tastes} variant='bg-row' className='order-1 lg:order-2' />
        </section>
        <section className="lg:h-[100vh] p-6 flex flex-col">
          <Header tastes={tastes} variant="sm" className="hidden lg:flex" />
          <div className="flex flex-col lg:flex-row h-full w-full gap-3 lg:gap-0">
            <div className="order-1 lg:order-2 w-full lg:w-[50%] p-6 pb-0 lg:pr-12 flex flex-col gap-8 lg:gap-0">
              <div className="h-[220px] lg:h-[70%] flex items-center justify-center">
                <Search />
              </div>
              <div className="h-auto lg:h-[30%] flex items-end mt-4 lg:mt-0">
                <Intro />
              </div>
            </div>
            <div className="order-2 lg:order-1 w-full lg:w-[50%] p-6 pb-0 relative">
              <div className="w-full h-[300px] lg:h-full relative">
                <Image
                  src="/imgs/placeholder.webp"
                  alt="Ricette"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className='h-[100vh] p-6 hidden lg:flex flex-col'>
          <Header tastes={tastes} variant='bg-col' />
        </section>
      </main>
    </>
  );
}
