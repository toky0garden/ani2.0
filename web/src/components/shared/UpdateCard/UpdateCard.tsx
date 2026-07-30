import Image from 'next/image';
import Link from 'next/link';

import type { AnimeUpdate } from '@/src/generated';

import { Typography } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

export interface UpdateCardProps {
  className?: string;
  update: AnimeUpdate;
}

export const UpdateCard = ({ update, className }: UpdateCardProps) => (
  <Link
    className={cn(
      'flex items-center gap-3 rounded-12 bg-surface p-3 ring-1 ring-border-soft transition-colors outline-none hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-ring',
      className
    )}
    href={`/${update.anime.slug}`}
  >
    <div className='relative h-10 w-14 shrink-0 overflow-hidden rounded-8'>
      <Image
        fill
        alt={`Постер «${update.anime.title}»`}
        className='object-cover'
        sizes='56px'
        src={update.anime.poster}
      />
    </div>

    <div className='flex min-w-0 flex-1 flex-col gap-0.5'>
      <Typography className='truncate text-[13px]/4 font-semibold' variant='caption'>
        {update.anime.title}
      </Typography>

      <Typography className='truncate text-[11px]/4 text-muted-fg' variant='caption'>
        {update.season} сезон, {update.episode} серия
      </Typography>
    </div>

    <Typography className='shrink-0 text-[11px]/4 text-muted-fg' variant='caption'>
      {update.publishedAt}
    </Typography>
  </Link>
);
