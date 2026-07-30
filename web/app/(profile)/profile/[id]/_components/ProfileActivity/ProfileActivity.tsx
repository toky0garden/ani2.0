import { HeartIcon, MessageSquareTextIcon, PlayIcon } from 'lucide-react';
import Link from 'next/link';

import type { User } from '@/src/generated';

import { Card, CardContent, CardHeader, CardTitle, Typography } from '@/src/components/ui';

/** Формулировки безличные: пол владельца профиля мы не знаем */
const KINDS = {
  favorite: { icon: HeartIcon, text: 'В любимом' },
  review: { icon: MessageSquareTextIcon, text: 'Написан отзыв' },
  watch: { icon: PlayIcon, text: 'Просмотрено' }
};

export interface ProfileActivityProps {
  user: User;
}

export const ProfileActivity = ({ user }: ProfileActivityProps) => (
  <Card className='gap-4'>
    <CardHeader>
      <CardTitle className='text-[15px] font-bold'>Последняя активность</CardTitle>
    </CardHeader>

    <CardContent className='flex flex-col gap-4'>
      {user.activity.map((event) => {
        const kind = KINDS[event.kind];

        return (
          <div key={`${event.kind}-${event.anime.slug}`} className='flex gap-3'>
            <span className='inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-primary/12 text-accent-primary'>
              <kind.icon className='size-4' />
            </span>

            <div className='flex min-w-0 flex-1 flex-col gap-0.5'>
              <Typography className='text-[13px]/5' variant='caption'>
                {kind.text}{' '}
                <Link
                  className='font-semibold underline-offset-4 outline-none hover:text-accent-primary hover:underline focus-visible:underline'
                  href={`/anime/${event.anime.slug}`}
                >
                  {event.anime.title}
                </Link>
                , {event.detail}
              </Typography>

              <Typography className='text-[11px]/4 text-muted-fg' variant='caption'>
                {event.publishedAt}
              </Typography>
            </div>
          </div>
        );
      })}
    </CardContent>
  </Card>
);
