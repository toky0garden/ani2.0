import Image from 'next/image';
import Link from 'next/link';

import type { User } from '@/src/generated';

import { Card, CardContent, CardHeader, CardTitle, Typography } from '@/src/components/ui';

export interface ProfileHistoryProps {
  user: User;
}

export const ProfileHistory = ({ user }: ProfileHistoryProps) => (
  <Card className='gap-4'>
    <CardHeader>
      <CardTitle className='text-[15px] font-bold'>Недавно просмотренное</CardTitle>
    </CardHeader>

    <CardContent className='flex flex-col gap-2'>
      {user.history.map((entry) => (
        <Link
          key={entry.anime.slug}
          className='group flex items-center gap-3 rounded-12 p-2 transition-colors outline-none hover:bg-surface-hover focus-visible:bg-surface-hover'
          href={`/anime/${entry.anime.slug}`}
        >
          <div className='relative aspect-2/3 w-11 shrink-0 overflow-hidden rounded-8 bg-muted'>
            <Image
              fill
              alt={`Постер «${entry.anime.title}»`}
              className='object-cover'
              sizes='44px'
              src={entry.anime.poster}
            />
          </div>

          <div className='flex min-w-0 flex-1 flex-col gap-1.5'>
            <Typography
              className='truncate text-[13px]/5 font-semibold transition-colors group-hover:text-accent-primary'
              variant='caption'
            >
              {entry.anime.title}
            </Typography>

            <Typography className='text-[11px]/4 text-muted-fg' variant='caption'>
              {entry.season} сезон, {entry.episode} серия
            </Typography>

            {/* Полоса дублируется числом справа: одного цвета для такой информации мало */}
            <div className='flex items-center gap-2'>
              <div
                aria-hidden
                className='h-1 flex-1 overflow-hidden rounded-full bg-muted'
              >
                <div
                  className='h-full rounded-full bg-accent-primary'
                  style={{ width: `${entry.progress}%` }}
                />
              </div>

              <Typography
                className='shrink-0 text-[11px]/4 text-muted-fg tabular-nums'
                variant='caption'
              >
                {entry.progress}%
              </Typography>
            </div>
          </div>
        </Link>
      ))}
    </CardContent>
  </Card>
);
