import { LayoutGridIcon, ListIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

import { Typography } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

import { resetHref, setHref, SORTS, toggleHref, YEARS } from '../../params';
import { CatalogSort } from '../CatalogSort/CatalogSort';

const VIEWS = [
  { value: 'grid', label: 'Сеткой', icon: LayoutGridIcon },
  { value: 'list', label: 'Списком', icon: ListIcon }
];

export interface CatalogToolbarProps {
  search: URLSearchParams;
  /** Сколько тайтлов осталось после фильтров */
  total: number;
}

export const CatalogToolbar = ({ search, total }: CatalogToolbarProps) => {
  const sort = search.get('sort');
  const view = search.get('view') === 'list' ? 'list' : 'grid';

  // Активные фильтры собираем в один ряд «таблеток»: по клику фильтр снимается
  const chips = [
    ...(search.getAll('type').map((type) => ({ label: type, href: setHref(search, 'type', '') }))),
    ...search
      .getAll('status')
      .map((status) => ({ label: status, href: setHref(search, 'status', '') })),
    ...search.getAll('genre').map((genre) => ({ label: genre, href: toggleHref(search, 'genre', genre) })),
    ...search.getAll('year').map((year) => ({
      label: YEARS.find((option) => option.value === year)?.label ?? year,
      href: toggleHref(search, 'year', year)
    }))
  ];

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-wrap items-center gap-3'>
        <CatalogSort
          items={SORTS.map((option) => ({
            active: option.value === (sort ?? SORTS[0].value),
            href: setHref(search, 'sort', option.value),
            label: option.label
          }))}
          label={(SORTS.find((option) => option.value === sort) ?? SORTS[0]).label}
        />

        <Typography className='mr-auto text-[12px]/4 text-muted-fg tabular-nums' variant='caption'>
          Найдено: {total}
        </Typography>

        <div className='inline-flex gap-0.5 rounded-10 p-0.5 ring-1 ring-border-soft'>
          {VIEWS.map((option) => {
            const active = option.value === view;

            return (
              <Link
                key={option.value}
                className={cn(
                  'inline-flex size-8 items-center justify-center rounded-8 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  active
                    ? 'bg-accent-primary/12 text-accent-primary'
                    : 'text-muted-fg hover:bg-surface hover:text-foreground'
                )}
                aria-current={active ? 'true' : undefined}
                aria-label={`Показать ${option.label.toLowerCase()}`}
                href={setHref(search, 'view', option.value)}
              >
                <option.icon className='size-4' />
              </Link>
            );
          })}
        </div>
      </div>

      {chips.length > 0 && (
        <div className='flex flex-wrap items-center gap-1.5'>
          {chips.map((chip) => (
            <Link
              key={chip.label}
              aria-label={`Убрать фильтр «${chip.label}»`}
              className='inline-flex h-7 items-center gap-1.5 rounded-full bg-surface px-3 text-[12px] font-medium ring-1 ring-border-soft transition-colors outline-none hover:text-danger focus-visible:ring-2 focus-visible:ring-ring'
              href={chip.href}
            >
              {chip.label}
              <XIcon className='size-3' />
            </Link>
          ))}

          <Link
            className='px-2 text-[12px] font-medium text-accent-primary underline-offset-4 outline-none hover:underline focus-visible:underline'
            href={resetHref(search)}
          >
            Сбросить все
          </Link>
        </div>
      )}
    </div>
  );
};
