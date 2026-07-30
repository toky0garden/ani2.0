import {
  Building2Icon,
  CalendarIcon,
  ClockIcon,
  LayersIcon,
  MonitorPlayIcon,
  SignalIcon,
  StarIcon
} from 'lucide-react';
import Image from 'next/image';

import type { Anime } from '@/src/generated';

import { Badge, Typography } from '@/src/components/ui';

import { AnimeActions } from '../AnimeActions/AnimeActions';

export interface AnimeHeroProps {
  anime: Anime;
}

export const AnimeHero = ({ anime }: AnimeHeroProps) => {
  const stats = [
    { icon: CalendarIcon, label: 'Год выхода', value: anime.year },
    { icon: MonitorPlayIcon, label: 'Тип', value: anime.type },
    { icon: LayersIcon, label: 'Эпизоды', value: `${anime.released} из ${anime.total}` },
    { icon: ClockIcon, label: 'Длительность', value: `${anime.duration} мин` },
    { icon: Building2Icon, label: 'Студия', value: anime.studio },
    { icon: SignalIcon, label: 'Статус', value: anime.status }
  ];

  return (
    <section className='relative isolate'>
      {/* Отдельного кадра под фон в каталоге нет, поэтому размываем постер:
          получается мягкая подложка в цвет тайтла */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden'
      >
        <Image
          fill
          priority
          alt=''
          className='scale-125 object-cover object-top opacity-45 blur-3xl'
          sizes='100vw'
          src={anime.poster}
        />
        <div className='absolute inset-0 bg-linear-to-b from-background/30 via-background/85 to-background' />
      </div>

      <div className='content-container grid gap-8 pt-8 md:grid-cols-[220px_1fr] md:gap-10 md:pt-12 lg:grid-cols-[260px_1fr] lg:gap-12'>
        <div className='flex flex-col gap-3'>
          <div className='relative mx-auto aspect-2/3 w-44 overflow-hidden rounded-16 bg-surface shadow-2xl ring-1 shadow-black/40 ring-white/10 sm:w-52 md:mx-0 md:w-full'>
            <Image
              fill
              priority
              alt={`Постер «${anime.title}»`}
              className='object-cover'
              sizes='(max-width: 768px) 208px, 260px'
              src={anime.poster}
            />
          </div>

          <AnimeActions title={anime.title} />
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-1.5'>
            <Typography
              as='h1'
              className='text-[34px]/10 font-extrabold tracking-tight text-balance sm:text-[44px]/13'
              variant='title-lg'
            >
              {anime.title}
            </Typography>

            <Typography className='text-[13px]/5 tracking-wide text-muted-fg' variant='caption'>
              {anime.originalTitle}
            </Typography>
          </div>

          <div className='flex flex-wrap items-center gap-2'>
            <Badge className='h-7 gap-1.5 bg-surface/70 px-2.5 text-[13px] font-bold tabular-nums backdrop-blur-sm'>
              <StarIcon className='fill-accent-primary text-accent-primary' />
              {anime.score.toFixed(1)}
            </Badge>

            <Badge className='h-7 border-danger/40 px-2.5 text-[12px] text-danger' variant='outline'>
              {anime.ageRating}
            </Badge>

            {anime.genres.map((genre) => (
              <Badge key={genre} className='h-7 px-2.5 text-[12px] text-muted-fg' variant='outline'>
                {genre}
              </Badge>
            ))}
          </div>

          <Typography className='max-w-3xl text-[14px]/6.5 text-muted-fg' variant='body-sm'>
            {anime.description}
          </Typography>

          <dl className='mt-auto grid grid-cols-2 gap-2 sm:grid-cols-3'>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className='flex items-center gap-3 rounded-12 bg-surface/50 px-3.5 py-3 backdrop-blur-sm transition-colors hover:bg-surface/80'
              >
                <stat.icon className='size-4.5 shrink-0 text-muted-fg' />

                <div className='flex min-w-0 flex-col'>
                  <dt className='truncate text-[11px]/4 text-muted-fg'>{stat.label}</dt>
                  <dd className='truncate text-[13px]/5 font-semibold'>{stat.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
