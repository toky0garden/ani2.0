import Image from 'next/image';
import Link from 'next/link';

import type { Anime } from '@/src/generated';

import { Badge, Typography } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

export interface AnimeCardProps {
  anime: Anime;
  className?: string;
  /** Постеры первого экрана грузим сразу, остальные — лениво */
  priority?: boolean;
}

export const AnimeCard = ({ anime, className, priority = false }: AnimeCardProps) => (
  <Link
    className={cn('group flex flex-col gap-2 outline-none', className)}
    href={`/anime/${anime.slug}`}
  >
    <div className='relative aspect-2/3 overflow-hidden rounded-12 bg-surface ring-1 ring-border-soft transition-[transform,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:ring-accent-primary group-focus-visible:ring-2 group-focus-visible:ring-ring'>
      <Image
        fill
        alt={`Постер «${anime.title}»`}
        className='object-cover transition-transform duration-300 group-hover:scale-105'
        priority={priority}
        sizes='(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 150px'
        src={anime.poster}
      />
    </div>

    <div className='flex flex-col gap-1.5'>
      <Typography
        className='truncate text-[13px]/4 font-semibold transition-colors group-hover:text-accent-primary'
        title={anime.title}
        variant='caption'
      >
        {anime.title}
      </Typography>

      <div className='flex items-center justify-between gap-2'>
        <Typography className='truncate text-[11px]/4 text-muted-fg' variant='caption'>
          {anime.season}
        </Typography>

        <Badge className='shrink-0 text-[11px] font-medium' variant='secondary'>
          {anime.released} из {anime.total}
        </Badge>
      </div>
    </div>
  </Link>
);
