import { BookmarkIcon, CheckIcon, ClockIcon, EyeIcon, HeartIcon, XIcon } from 'lucide-react';

import type { User } from '@/src/generated';

import { Card, CardContent, CardHeader, CardTitle, Typography } from '@/src/components/ui';

export interface ProfileListsProps {
  user: User;
}

export const ProfileLists = ({ user }: ProfileListsProps) => {
  const lists = [
    { icon: CheckIcon, label: 'Просмотрено', value: user.lists.completed },
    { icon: EyeIcon, label: 'Смотрю', value: user.lists.watching },
    { icon: ClockIcon, label: 'Отложено', value: user.lists.postponed },
    { icon: BookmarkIcon, label: 'Запланировано', value: user.lists.planned },
    { icon: XIcon, label: 'Брошено', value: user.lists.dropped },
    // Любимое отдельным полем не храним: его размер и есть длина favorites
    { icon: HeartIcon, label: 'Любимое', value: user.favorites.length }
  ];

  // Полоса рядом со счётчиком показывает долю от самого большого списка,
  // иначе шесть одинаковых полос ничего бы не сообщали
  const largest = Math.max(...lists.map((list) => list.value)) || 1;

  return (
    <Card className='gap-4'>
      <CardHeader>
        <CardTitle className='text-[15px] font-bold'>Списки</CardTitle>
      </CardHeader>

      <CardContent className='flex flex-col gap-3'>
        {lists.map((list) => (
          <div key={list.label} className='flex items-center gap-3'>
            <list.icon className='size-4 shrink-0 text-muted-fg' />

            <Typography className='w-32 shrink-0 text-[13px]/5' variant='caption'>
              {list.label}
            </Typography>

            <div aria-hidden className='h-1.5 flex-1 overflow-hidden rounded-full bg-muted'>
              <div
                className='h-full rounded-full bg-accent-primary'
                style={{ width: `${(list.value / largest) * 100}%` }}
              />
            </div>

            <Typography
              className='w-8 shrink-0 text-right text-[13px]/5 font-bold tabular-nums'
              variant='caption'
            >
              {list.value}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
