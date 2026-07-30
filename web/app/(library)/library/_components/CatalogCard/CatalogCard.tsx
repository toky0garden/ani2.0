import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { Anime } from '@/src/generated';

import { Badge, Typography } from '@/src/components/ui';

import { BookmarkButton } from '../BookmarkButton/BookmarkButton';

export interface CatalogCardProps {
  anime: Anime;
  /** Постеры первого ряда грузим сразу, остальные — лениво */
  priority?: boolean;
}

export const CatalogCard = ({ anime, priority = false }: CatalogCardProps) => (
  <article className='group relative flex flex-col gap-2.5'>
    <Link className='flex flex-col gap-2.5 outline-none' href={`/anime/${anime.slug}`}>
      <div className='relative aspect-2/3 overflow-hidden rounded-12 bg-surface ring-1 ring-border-soft transition-[transform,box-shadow] duration-300 group-focus-within:ring-2 group-focus-within:ring-ring group-hover:-translate-y-1 group-hover:ring-accent-primary'>
        <Image
          fill
          alt={`Постер «${anime.title}»`}
          className='object-cover transition-transform duration-300 group-hover:scale-105'
          priority={priority}
          sizes='(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px'
          src={anime.poster}
        />

        <div
          aria-hidden
          className='absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/75 to-transparent'
        />

        <Badge className='absolute bottom-2 left-2 gap-1 bg-black/55 text-[11px] font-bold text-white tabular-nums backdrop-blur-sm'>
          <StarIcon className='fill-accent-primary text-accent-primary' />
          {anime.score.toFixed(1)}
        </Badge>
      </div>

      <div className='flex flex-col gap-1'>
        <Typography
          className='line-clamp-2 text-[13px]/4.5 font-semibold transition-colors group-hover:text-accent-primary'
          variant='caption'
        >
          {anime.title}
        </Typography>

        <Typography className='truncate text-[11px]/4 text-muted-fg' variant='caption'>
          {anime.type} · {anime.type === 'Фильм' ? `${anime.duration} мин` : `${anime.total} эп.`}
        </Typography>
      </div>
    </Link>

    <div className='flex flex-wrap gap-1'>
      {anime.genres.slice(0, 2).map((genre) => (
        <Badge key={genre} className='text-[10px] text-muted-fg' variant='outline'>
          {genre}
        </Badge>
      ))}
    </div>

    {/* Кнопка лежит рядом со ссылкой, а не внутри: кнопку в ссылку вкладывать нельзя */}
    <BookmarkButton className='absolute top-2 right-2' title={anime.title} />
  </article>
);
