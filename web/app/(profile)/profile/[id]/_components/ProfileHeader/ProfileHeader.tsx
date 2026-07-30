import { CalendarDaysIcon, ExternalLinkIcon, MapPinIcon, SparklesIcon } from 'lucide-react';
import Image from 'next/image';

import type { User } from '@/src/generated';

import { Typography } from '@/src/components/ui';

export interface ProfileHeaderProps {
  user: User;
}

export const ProfileHeader = ({ user }: ProfileHeaderProps) => (
  <section className='flex flex-col'>
    {/* Обложки в данных нет, поэтому баннер собран из тех же акцентов, что и остальной сайт */}
    <div
      aria-hidden
      className='h-36 rounded-16 bg-linear-to-br from-accent-primary via-accent-primary/70 to-accent-secondary sm:h-44'
    />

    <div className='flex flex-col gap-4 px-1 sm:flex-row sm:gap-6 sm:px-6'>
      <div className='-mt-12 shrink-0 sm:-mt-14'>
        <Image
          priority
          alt={`Аватар ${user.username}`}
          className='size-24 rounded-full object-cover ring-4 ring-background sm:size-28'
          height={112}
          src={user.avatar}
          width={112}
        />
      </div>

      <div className='flex min-w-0 flex-1 flex-col gap-3 sm:pt-4'>
        <div className='flex flex-wrap items-center gap-2'>
          <Typography as='h1' className='text-[24px]/8 font-extrabold' variant='title-md'>
            {user.username}
          </Typography>

          {user.premium && (
            <span className='inline-flex h-6 items-center gap-1 rounded-full bg-accent-primary/12 px-2.5 text-[11px] font-bold text-accent-primary uppercase'>
              <SparklesIcon className='size-3' />
              Премиум
            </span>
          )}
        </div>

        <Typography className='max-w-2xl text-[14px]/6 text-muted-fg' variant='body-sm'>
          {user.bio}
        </Typography>

        <div className='flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-fg'>
          <Typography as='span' className='inline-flex items-center gap-1.5' variant='caption'>
            <CalendarDaysIcon className='size-3.5' />
            Участник с {user.createdAt}
          </Typography>

          <Typography as='span' className='inline-flex items-center gap-1.5' variant='caption'>
            <MapPinIcon className='size-3.5' />
            {user.country}
          </Typography>

          <div className='flex flex-wrap items-center gap-2'>
            {user.socials.map((social) => (
              <a
                key={social.href}
                className='inline-flex h-7 items-center gap-1.5 rounded-full px-3 text-[12px] font-medium ring-1 ring-border-soft transition-colors outline-none hover:bg-surface hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring'
                href={social.href}
                rel='noreferrer'
                target='_blank'
              >
                {social.label}
                <ExternalLinkIcon className='size-3' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
