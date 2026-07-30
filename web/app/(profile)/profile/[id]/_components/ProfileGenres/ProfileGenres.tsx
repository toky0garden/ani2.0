import type { User } from '@/src/generated';

import { Card, CardContent, CardHeader, CardTitle, Typography } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

/**
 * Один фиолетовый ряд от светлого к тёмному: срезы идут по убыванию доли,
 * поэтому цвет говорит о её величине. Всё, что не поместилось в ряд, — серое,
 * это хвост из мелких жанров, а не отдельная категория
 */
const SLICES = [
  { dot: 'bg-chart-1', stroke: 'stroke-chart-1' },
  { dot: 'bg-chart-2', stroke: 'stroke-chart-2' },
  { dot: 'bg-chart-3', stroke: 'stroke-chart-3' },
  { dot: 'bg-chart-4', stroke: 'stroke-chart-4' }
];

const TAIL = { dot: 'bg-chart-other', stroke: 'stroke-chart-other' };

export interface ProfileGenresProps {
  user: User;
}

export const ProfileGenres = ({ user }: ProfileGenresProps) => {
  // pathLength переводит окружность в 100 условных единиц, поэтому длина дуги
  // и есть процент — пересчитывать через радиус не нужно
  let offset = 0;

  const slices = user.genres.map((genre, index) => {
    const slice = { ...(SLICES[index] ?? TAIL), ...genre, offset };
    offset += genre.percent;

    return slice;
  });

  return (
    <Card className='gap-4'>
      <CardHeader>
        <CardTitle className='text-[15px] font-bold'>Любимые жанры</CardTitle>
      </CardHeader>

      <CardContent className='flex items-center gap-6'>
        <svg
          aria-hidden
          className='size-32 shrink-0 -rotate-90'
          fill='none'
          viewBox='0 0 40 40'
          xmlns='http://www.w3.org/2000/svg'
        >
          {slices.map((slice) => (
            <circle
              key={slice.title}
              className={slice.stroke}
              cx='20'
              cy='20'
              pathLength={100}
              r='16'
              strokeDasharray={`${slice.percent} ${100 - slice.percent}`}
              strokeDashoffset={-slice.offset}
              strokeWidth='8'
            />
          ))}
        </svg>

        {/* Легенда несёт и названия, и точные доли: по одному цвету жанр не угадать */}
        <ul className='flex min-w-0 flex-1 flex-col gap-2.5'>
          {slices.map((slice) => (
            <li key={slice.title} className='flex items-center gap-2.5'>
              <span aria-hidden className={cn('size-2.5 shrink-0 rounded-full', slice.dot)} />

              <Typography className='min-w-0 flex-1 truncate text-[13px]/5' variant='caption'>
                {slice.title}
              </Typography>

              <Typography
                className='shrink-0 text-[13px]/5 font-bold text-muted-fg tabular-nums'
                variant='caption'
              >
                {slice.percent}%
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
