'use client';

import { useDisclosure } from '@siberiacancode/reactuse';
import { ChevronDownIcon } from 'lucide-react';

import type { Anime } from '@/src/generated';

import { Button, Typography } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

/** Сколько серий видно до нажатия «Показать все» */
const COLLAPSED_COUNT = 8;

export interface EpisodeListProps {
  anime: Anime;
}

export const EpisodeList = ({ anime }: EpisodeListProps) => {
  const disclosure = useDisclosure();

  // Названий серий в каталоге нет, поэтому строим список по числу вышедших
  const episodes = Array.from({ length: anime.released }, (_, index) => index + 1);
  const visible = disclosure.opened ? episodes : episodes.slice(0, COLLAPSED_COUNT);

  return (
    <div className='flex flex-col gap-3'>
      <ol className='grid gap-2 md:grid-cols-2 md:gap-x-3'>
        {visible.map((episode) => (
          <li
            key={episode}
            className='flex items-center gap-3.5 rounded-12 bg-surface/50 py-2.5 pr-4 pl-2.5'
          >
            <span className='flex size-8 shrink-0 items-center justify-center rounded-8 bg-muted text-[13px] font-semibold tabular-nums'>
              {episode}
            </span>

            <Typography className='min-w-0 flex-1 truncate text-[13px]/5' variant='caption'>
              {anime.type === 'Фильм' ? anime.title : `Серия ${episode}`}
            </Typography>

            <Typography className='shrink-0 text-[11px]/4 text-muted-fg' variant='caption'>
              {anime.duration} мин
            </Typography>
          </li>
        ))}
      </ol>

      {episodes.length > COLLAPSED_COUNT && (
        <Button
          className='h-10 w-full gap-1.5 rounded-12 text-[13px] text-muted-fg hover:text-foreground'
          variant='ghost'
          onClick={() => disclosure.toggle()}
        >
          {disclosure.opened ? 'Свернуть' : `Показать все ${episodes.length} эпизодов`}
          <ChevronDownIcon
            className={cn('transition-transform', disclosure.opened && 'rotate-180')}
          />
        </Button>
      )}
    </div>
  );
};
