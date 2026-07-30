'use client';

import { useBoolean } from '@siberiacancode/reactuse';
import { BookmarkIcon } from 'lucide-react';

import { cn } from '@/src/lib/utils';

export interface BookmarkButtonProps {
  className?: string;
  title: string;
}

export const BookmarkButton = ({ title, className }: BookmarkButtonProps) => {
  const [saved, toggle] = useBoolean();

  return (
    <button
      className={cn(
        'inline-flex size-8 items-center justify-center rounded-8 bg-black/50 text-white backdrop-blur-sm transition-colors outline-none hover:bg-black/70 focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      aria-label={saved ? `Убрать «${title}» из списка` : `Добавить «${title}» в список`}
      aria-pressed={saved}
      type='button'
      onClick={() => toggle()}
    >
      <BookmarkIcon className={cn('size-4 transition-all', saved && 'fill-current')} />
    </button>
  );
};
