import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/src/lib/utils';

import { setHref } from '../../params';

const itemClassName =
  'inline-flex h-9 min-w-9 items-center justify-center rounded-10 px-3 text-[13px] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring';

export interface CatalogPaginationProps {
  page: number;
  /** Сколько страниц получилось после фильтров */
  pages: number;
  search: URLSearchParams;
}

export const CatalogPagination = ({ page, pages, search }: CatalogPaginationProps) => {
  if (pages < 2) return null;

  // Многоточия нет намеренно: тайтлов в каталоге меньше, чем на три страницы,
  // и ряд номеров физически не может не поместиться
  const numbers = Array.from({ length: pages }, (_, index) => index + 1);

  return (
    <nav aria-label='Страницы каталога' className='flex items-center justify-center gap-1.5'>
      <Link
        className={cn(
          itemClassName,
          'text-muted-fg ring-1 ring-border-soft hover:bg-surface hover:text-foreground',
          page === 1 && 'pointer-events-none opacity-40'
        )}
        aria-disabled={page === 1}
        aria-label='Предыдущая страница'
        href={setHref(search, 'page', String(Math.max(page - 1, 1)))}
      >
        <ChevronLeftIcon className='size-4' />
      </Link>

      {numbers.map((number) => (
        <Link
          key={number}
          className={cn(
            itemClassName,
            'tabular-nums',
            number === page
              ? 'bg-accent-primary text-accent-primary-fg'
              : 'text-muted-fg ring-1 ring-border-soft hover:bg-surface hover:text-foreground'
          )}
          aria-current={number === page ? 'page' : undefined}
          aria-label={`Страница ${number}`}
          href={setHref(search, 'page', String(number))}
        >
          {number}
        </Link>
      ))}

      <Link
        className={cn(
          itemClassName,
          'text-muted-fg ring-1 ring-border-soft hover:bg-surface hover:text-foreground',
          page === pages && 'pointer-events-none opacity-40'
        )}
        aria-disabled={page === pages}
        aria-label='Следующая страница'
        href={setHref(search, 'page', String(Math.min(page + 1, pages)))}
      >
        <ChevronRightIcon className='size-4' />
      </Link>
    </nav>
  );
};
