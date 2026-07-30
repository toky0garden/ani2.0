import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { Anime } from '@/src/generated';

import { Badge, Typography } from '@/src/components/ui';

import { BookmarkButton } from '../BookmarkButton/BookmarkButton';

export interface CatalogRowProps {
  anime: Anime;
  /** Постеры первого экрана грузим сразу, остальные — лениво */
  priority?: boolean;
}

export const CatalogRow = ({ anime, priority = false }: CatalogRowProps) => (
  <article className='group relative flex rounded-12 ring-1 ring-border-soft transition-colors hover:bg-surface'>
    <Link className='flex min-w-0 flex-1 gap-4 p-3 outline-none' href={`/anime/${anime.slug}`}>
      <div className='relative aspect-2/3 w-16 shrink-0 overflow-hidden rounded-8 bg-surface sm:w-20'>
        <Image
          fill
          alt={`Постер «${anime.title}»`}
          className='object-cover'
          priority={priority}
          sizes='80px'
          src={anime.poster}
        />
      </div>

      <div className='flex min-w-0 flex-1 flex-col gap-1.5'>
        <div className='flex min-w-0 flex-col pr-10'>
          <Typography
            as='h3'
            className='truncate text-[14px]/5 font-semibold transition-colors group-hover:text-accent-primary'
            variant='caption'
          >
            {anime.title}
          </Typography>

          <Typography className='truncate text-[11px]/4 text-muted-fg' variant='caption'>
            {anime.originalTitle}
          </Typography>
        </div>

        <div className='flex flex-wrap items-center gap-x-2 gap-y-1'>
          <Badge className='gap-1 text-[11px] font-bold tabular-nums' variant='secondary'>
            <StarIcon className='fill-accent-primary text-accent-primary' />
            {anime.score.toFixed(1)}
          </Badge>

          <Typography className='text-[11px]/4 text-muted-fg' variant='caption'>
            {anime.type} ·{' '}
            {anime.type === 'Фильм' ? `${anime.duration} мин` : `${anime.total} эп.`} · {anime.year}{' '}
            · {anime.studio} · {anime.status}
          </Typography>
        </div>

        <Typography className='line-clamp-2 text-[12px]/4.5 text-muted-fg' variant='caption'>
          {anime.description}
        </Typography>

        <div className='flex flex-wrap gap-1'>
          {anime.genres.map((genre) => (
            <Badge key={genre} className='text-[10px] text-muted-fg' variant='outline'>
              {genre}
            </Badge>
          ))}
        </div>
      </div>
    </Link>

    {/* Кнопка лежит рядом со ссылкой, а не внутри: кнопку в ссылку вкладывать нельзя */}
    <BookmarkButton
      className='absolute top-3 right-3 bg-muted text-muted-fg hover:bg-secondary hover:text-foreground'
      title={anime.title}
    />
  </article>
);
