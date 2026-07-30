import type { Metadata } from 'next';

import { NEW_RELEASES, NOW_WATCHING } from '@/src/constants';

import { AnimeSection, LatestUpdatesSection } from './_components/landing';

export const metadata: Metadata = {
  title: 'Animi Club — смотреть аниме онлайн',
  description:
    'Каталог аниме с расписанием выхода серий, подборками и отслеживанием новых эпизодов.'
};

const HomePage = () => (
  <main className='content-container flex flex-col gap-8 py-7'>
    <AnimeSection priority anime={NOW_WATCHING} title='Сейчас смотрят' />

    <AnimeSection anime={NEW_RELEASES} title='Новинки' />

    <LatestUpdatesSection />
  </main>
);

export const revalidate = 3600;

export default HomePage;
