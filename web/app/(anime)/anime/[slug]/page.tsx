import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { AnimeCard } from '@/src/components/shared';
import { Typography } from '@/src/components/ui';
import { CATALOG } from '@/src/constants';

import { AnimeHero, EpisodeList } from './_components';

export const generateStaticParams = () => CATALOG.map((anime) => ({ slug: anime.slug }));

export const generateMetadata = async ({ params }: PageProps<'/anime/[slug]'>): Promise<Metadata> => {
  const { slug } = await params;
  const anime = CATALOG.find((item) => item.slug === slug);

  if (!anime) return {};

  return {
    title: `${anime.title} — смотреть онлайн | Animi Club`,
    description: anime.description,
    openGraph: {
      title: anime.title,
      description: anime.description,
      images: [anime.poster]
    }
  };
};

const AnimePage = async ({ params }: PageProps<'/anime/[slug]'>) => {
  const { slug } = await params;
  const anime = CATALOG.find((item) => item.slug === slug);

  if (!anime) notFound();

  // Других связей между тайтлами в каталоге нет, поэтому похожие ищем по жанрам
  const similar = CATALOG.filter(
    (item) => item.slug !== anime.slug && item.genres.some((genre) => anime.genres.includes(genre))
  ).slice(0, 8);

  return (
    <main className='flex flex-col gap-12 pb-16'>
      <AnimeHero anime={anime} />

      <section className='content-container flex flex-col gap-4' id='episodes'>
        <Typography as='h2' className='text-[17px]/6 font-bold' variant='body-md'>
          Эпизоды
        </Typography>

        <EpisodeList anime={anime} />
      </section>

      {similar.length > 0 && (
        <section className='content-container flex flex-col gap-4'>
          <Typography as='h2' className='text-[17px]/6 font-bold' variant='body-md'>
            Похожие тайтлы
          </Typography>

          <div className='grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
            {similar.map((item) => (
              <AnimeCard key={item.slug} anime={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export const revalidate = 7200;

export default AnimePage;
