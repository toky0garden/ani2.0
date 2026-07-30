import type { Anime } from '@/src/generated';

import { AnimeCard } from '@/src/components/shared';
import { Typography } from '@/src/components/ui';

export interface AnimeSectionProps {
  anime: Anime[];
  /** У самой верхней секции постеры грузим сразу — это первый экран */
  priority?: boolean;
  title: string;
}

export const AnimeSection = ({ title, anime, priority = false }: AnimeSectionProps) => (
  <section className='flex flex-col gap-4'>
    <Typography as='h2' className='text-[17px]/6 font-bold' variant='body-md'>
      {title}
    </Typography>

    <div className='grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
      {anime.map((item) => (
        <AnimeCard key={item.slug} anime={item} priority={priority} />
      ))}
    </div>
  </section>
);
