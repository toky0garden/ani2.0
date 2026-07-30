import { FlameIcon, HeartIcon, LibraryBigIcon, MessageSquareTextIcon, PlayIcon } from 'lucide-react';

import type { User } from '@/src/generated';

import { Typography } from '@/src/components/ui';

export interface ProfileStatsProps {
  user: User;
}

export const ProfileStats = ({ user }: ProfileStatsProps) => {
  // Считаем прямо здесь, а не храним в данных: иначе плитка и панель списков
  // рано или поздно начнут показывать разные числа про одно и то же
  const stats = [
    { icon: PlayIcon, label: 'Просмотрено эпизодов', value: user.episodes },
    {
      icon: LibraryBigIcon,
      label: 'Аниме в списке',
      value: Object.values(user.lists).reduce((sum, count) => sum + count, 0)
    },
    { icon: FlameIcon, label: 'Дней подряд', value: user.streak },
    { icon: MessageSquareTextIcon, label: 'Написано отзывов', value: user.reviews.length },
    { icon: HeartIcon, label: 'Любимых тайтлов', value: user.favorites.length }
  ];

  return (
    <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5'>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className='flex flex-col gap-1.5 rounded-12 bg-surface p-4 ring-1 ring-border-soft'
        >
          <stat.icon className='size-4 text-accent-primary' />

          <Typography className='text-[22px]/7 font-extrabold tabular-nums' variant='title-md'>
            {stat.value.toLocaleString('ru-RU')}
          </Typography>

          <Typography className='text-[12px]/4 text-muted-fg' variant='caption'>
            {stat.label}
          </Typography>
        </div>
      ))}
    </div>
  );
};
