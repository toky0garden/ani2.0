import { FilmIcon, LibraryBigIcon, RotateCcwIcon, TvIcon } from 'lucide-react';
import Link from 'next/link';

import { Typography } from '@/src/components/ui';
import { CATALOG } from '@/src/constants';
import { cn } from '@/src/lib/utils';

import { resetHref, setHref, toggleHref, YEARS } from '../../params';

/** Варианты фильтров берём из самого каталога: пустых пунктов в списке не будет */
const TYPE_OPTIONS = [...new Set(CATALOG.map((anime) => anime.type))];
const STATUS_OPTIONS = [...new Set(CATALOG.map((anime) => anime.status))];
const GENRE_OPTIONS = [...new Set(CATALOG.flatMap((anime) => anime.genres))].sort((left, right) =>
  left.localeCompare(right)
);

const TYPE_ICONS: Record<string, typeof TvIcon> = { 'TV Сериал': TvIcon, Фильм: FilmIcon };

const chipClassName = (active: boolean) =>
  cn(
    'inline-flex h-7 items-center rounded-full px-3 text-[12px] font-medium ring-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
    active
      ? 'bg-accent-primary text-accent-primary-fg ring-transparent'
      : 'text-muted-fg ring-border-soft hover:bg-surface hover:text-foreground'
  );

const groupClassName = 'flex flex-col gap-2.5';
const titleClassName = 'text-[11px]/4 font-bold tracking-wider text-muted-fg uppercase';

export interface CatalogFiltersProps {
  search: URLSearchParams;
}

export const CatalogFilters = ({ search }: CatalogFiltersProps) => {
  const type = search.get('type');
  const status = search.get('status');
  const genres = search.getAll('genre');
  const years = search.getAll('year');
  const filtered = Boolean(type ?? status) || genres.length > 0 || years.length > 0;

  return (
    <aside className='flex flex-col gap-6 lg:sticky lg:top-18 lg:w-52 lg:shrink-0 lg:self-start'>
      <nav aria-label='Тип тайтла' className='flex flex-wrap gap-1.5 lg:flex-col'>
        {[null, ...TYPE_OPTIONS].map((option) => {
          const active = type === option;
          const Icon = option === null ? LibraryBigIcon : (TYPE_ICONS[option] ?? TvIcon);

          return (
            <Link
              key={option ?? 'all'}
              className={cn(
                'flex items-center gap-2.5 rounded-10 px-3 py-2 text-[13px] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                active
                  ? 'bg-accent-primary/12 text-accent-primary'
                  : 'text-muted-fg hover:bg-surface hover:text-foreground'
              )}
              aria-current={active ? 'true' : undefined}
              href={setHref(search, 'type', option ?? '')}
            >
              <Icon className='size-4 shrink-0' />
              {option ?? 'Все'}
            </Link>
          );
        })}
      </nav>

      <div className={groupClassName}>
        <Typography as='h2' className={titleClassName} variant='caption'>
          Статус
        </Typography>

        <div className='flex flex-wrap gap-1.5'>
          {STATUS_OPTIONS.map((option) => {
            const active = status === option;

            return (
              <Link
                key={option}
                aria-label={active ? `Убрать статус «${option}»` : `Только «${option}»`}
                className={chipClassName(active)}
                href={setHref(search, 'status', active ? '' : option)}
              >
                {option}
              </Link>
            );
          })}
        </div>
      </div>

      <div className={groupClassName}>
        <Typography as='h2' className={titleClassName} variant='caption'>
          Жанры
        </Typography>

        <div className='flex flex-wrap gap-1.5'>
          {GENRE_OPTIONS.map((option) => {
            const active = genres.includes(option);

            return (
              <Link
                key={option}
                aria-label={active ? `Убрать жанр «${option}»` : `Добавить жанр «${option}»`}
                className={chipClassName(active)}
                href={toggleHref(search, 'genre', option)}
              >
                {option}
              </Link>
            );
          })}
        </div>
      </div>

      <div className={groupClassName}>
        <Typography as='h2' className={titleClassName} variant='caption'>
          Год выхода
        </Typography>

        <div className='flex flex-wrap gap-1.5'>
          {YEARS.map((year) => {
            const active = years.includes(year.value);

            return (
              <Link
                key={year.value}
                aria-label={active ? `Убрать годы ${year.label}` : `Добавить годы ${year.label}`}
                className={chipClassName(active)}
                href={toggleHref(search, 'year', year.value)}
              >
                {year.label}
              </Link>
            );
          })}
        </div>
      </div>

      {filtered && (
        <Link
          className='inline-flex h-9 items-center justify-center gap-2 rounded-10 text-[13px] font-medium text-accent-primary ring-1 ring-accent-primary/40 transition-colors outline-none hover:bg-accent-primary/10 focus-visible:ring-2 focus-visible:ring-ring'
          href={resetHref(search)}
        >
          <RotateCcwIcon className='size-3.5' />
          Сбросить фильтры
        </Link>
      )}
    </aside>
  );
};
