'use client';

import { useBoolean, useCopy, useShare } from '@siberiacancode/reactuse';
import { CheckIcon, HeartIcon, PlayIcon, Share2Icon } from 'lucide-react';
import Link from 'next/link';

import { Button, buttonVariants } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

export interface AnimeActionsProps {
  className?: string;
  title: string;
}

export const AnimeActions = ({ title, className }: AnimeActionsProps) => {
  const [favorite, toggleFavorite] = useBoolean();
  const copy = useCopy();
  const share = useShare();

  const onShareClick = async () => {
    // Web Share API живёт только в мобильных браузерах, на десктопе
    // кладём ссылку в буфер обмена. Закрытое системное окно — отказ, а не ошибка
    if (share.supported) {
      await share.trigger({ title, url: window.location.href }).catch(() => undefined);
      return;
    }

    await copy.copy(window.location.href);
  };

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Link
        className={cn(
          buttonVariants({ size: 'lg' }),
          'h-11 w-full gap-2 rounded-10 text-[14px] font-semibold shadow-lg shadow-black/20'
        )}
        href='#episodes'
      >
        <PlayIcon className='fill-current' />
        Смотреть
      </Link>

      <Button
        aria-pressed={favorite}
        className='h-10 w-full gap-2 rounded-10 text-[13px]'
        variant='secondary'
        onClick={() => toggleFavorite()}
      >
        <HeartIcon
          className={cn('transition-colors', favorite && 'fill-accent-primary text-accent-primary')}
        />
        {favorite ? 'В избранном' : 'В список'}
      </Button>

      <Button
        className='h-10 w-full gap-2 rounded-10 text-[13px]'
        variant='secondary'
        onClick={onShareClick}
      >
        {copy.copied ? <CheckIcon className='text-success' /> : <Share2Icon />}
        {copy.copied ? 'Ссылка скопирована' : 'Поделиться'}
      </Button>
    </div>
  );
};
