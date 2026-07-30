import { MessageCircleIcon, StarIcon, ThumbsUpIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { User } from '@/src/generated';

import { Card, CardContent, CardHeader, CardTitle, Typography } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

const STARS = [1, 2, 3, 4, 5];

export interface ProfileReviewsProps {
  user: User;
}

export const ProfileReviews = ({ user }: ProfileReviewsProps) => (
  <Card className='gap-4'>
    <CardHeader>
      <CardTitle className='text-[15px] font-bold'>Отзывы</CardTitle>
    </CardHeader>

    <CardContent className='grid gap-4 md:grid-cols-2'>
      {user.reviews.map((review) => (
        <article
          key={`${review.anime.slug}-${review.season}`}
          className='flex flex-col gap-3 rounded-12 p-4 ring-1 ring-border-soft'
        >
          <div className='flex gap-3'>
            <Link
              className='group relative aspect-2/3 w-11 shrink-0 overflow-hidden rounded-8 bg-muted outline-none'
              href={`/anime/${review.anime.slug}`}
            >
              <Image
                fill
                alt={`Постер «${review.anime.title}»`}
                className='object-cover'
                sizes='44px'
                src={review.anime.poster}
              />
            </Link>

            <div className='flex min-w-0 flex-1 flex-col gap-1'>
              <Typography
                render={
                  <Link
                    className='outline-none hover:text-accent-primary focus-visible:text-accent-primary'
                    href={`/anime/${review.anime.slug}`}
                  />
                }
                className='truncate text-[13px]/5 font-semibold'
                variant='caption'
              >
                {review.anime.title}
              </Typography>

              <Typography className='text-[11px]/4 text-muted-fg' variant='caption'>
                {review.season} сезон · {review.publishedAt}
              </Typography>

              {/* Звёзды декоративные, точную оценку читает скринридер */}
              <div aria-hidden className='flex gap-0.5'>
                {STARS.map((star) => (
                  <StarIcon
                    key={star}
                    className={cn(
                      'size-3.5',
                      star <= review.rating
                        ? 'fill-accent-primary text-accent-primary'
                        : 'text-border-hard'
                    )}
                  />
                ))}
              </div>

              <span className='sr-only'>Оценка: {review.rating} из 5</span>
            </div>
          </div>

          <Typography className='text-[13px]/5.5 text-muted-fg' variant='caption'>
            {review.text}
          </Typography>

          <div className='flex items-center gap-4 text-muted-fg'>
            <Typography as='span' className='inline-flex items-center gap-1.5' variant='caption'>
              <ThumbsUpIcon className='size-3.5' />
              <span className='text-[12px] tabular-nums'>{review.likes}</span>
            </Typography>

            <Typography as='span' className='inline-flex items-center gap-1.5' variant='caption'>
              <MessageCircleIcon className='size-3.5' />
              <span className='text-[12px] tabular-nums'>{review.comments}</span>
            </Typography>
          </div>
        </article>
      ))}
    </CardContent>
  </Card>
);
