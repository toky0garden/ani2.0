import type { Metadata } from 'next';

import { SearchXIcon } from 'lucide-react';
import Link from 'next/link';

import { Typography } from '@/src/components/ui';
import { CATALOG } from '@/src/constants';

import {
  CatalogCard,
  CatalogFilters,
  CatalogPagination,
  CatalogRow,
  CatalogToolbar
} from './_components';
import { PAGE_SIZE, resetHref, toSearchParams, YEARS } from './params';

export const metadata: Metadata = {
  title: 'Каталог аниме | Animi Club',
  description: 'Полный каталог тайтлов с фильтрами по жанрам, статусу и году выхода.'
};

const CatalogPage = async ({ searchParams }: PageProps<'/library'>) => {
  const search = toSearchParams(await searchParams);

  const type = search.get('type');
  const status = search.get('status');
  const genres = search.getAll('genre');
  const years = search.getAll('year');
  // Сортировка по умолчанию — первая в списке, поэтому пустое значение и «rating» равны
  const sort = search.get('sort') ?? '';

  const filtered = CATALOG.filter((anime) => {
    if (type && anime.type !== type) return false;
    if (status && anime.status !== status) return false;
    // Жанры складываются: отмечены «Экшен» и «Драма» — нужен тайтл с обоими
    if (!genres.every((genre) => anime.genres.includes(genre))) return false;

    // А диапазоны лет наоборот исключают друг друга, поэтому достаточно одного
    if (years.length > 0) {
      const ranges = YEARS.filter((year) => years.includes(year.value));
      if (!ranges.some((range) => anime.year >= range.from && anime.year <= range.to)) return false;
    }

    return true;
  });

  const sorted = [...filtered].sort((left, right) => {
    switch (sort) {
      case 'new':
        return right.year - left.year;
      case 'old':
        return left.year - right.year;
      case 'title':
        return left.title.localeCompare(right.title);
      default:
        return right.score - left.score;
    }
  });

  const pages = Math.max(Math.ceil(sorted.length / PAGE_SIZE), 1);
  // Страницу из адреса подрезаем: после смены фильтров ссылка может указывать в пустоту
  const page = Math.min(Math.max(Number(search.get('page')) || 1, 1), pages);
  const list = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const grid = search.get('view') !== 'list';

  return (
    <main className='content-container flex flex-col gap-6 py-7'>
      <div className='flex flex-col gap-1'>
        <Typography as='h1' className='text-[26px]/8 font-extrabold' variant='title-md'>
          Каталог
        </Typography>

        <Typography className='text-[13px]/5 text-muted-fg' variant='body-sm'>
          Все тайтлы сайта — отберите нужные по жанру, статусу и году выхода
        </Typography>
      </div>

      <div className='flex flex-col gap-6 lg:flex-row lg:gap-8'>
        <CatalogFilters search={search} />

        <div className='flex min-w-0 flex-1 flex-col gap-5'>
          <CatalogToolbar search={search} total={sorted.length} />

          {list.length > 0 ? (
            <div
              className={
                grid
                  ? 'grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 xl:grid-cols-4'
                  : 'flex flex-col gap-3'
              }
            >
              {list.map((anime, index) =>
                grid ? (
                  <CatalogCard key={anime.slug} anime={anime} priority={index < 4} />
                ) : (
                  <CatalogRow key={anime.slug} anime={anime} priority={index < 3} />
                )
              )}
            </div>
          ) : (
            <div className='flex flex-col items-center gap-3 rounded-16 py-16 ring-1 ring-border-soft'>
              <SearchXIcon className='size-8 text-muted-fg' />

              <Typography className='text-[14px]/5 font-semibold' variant='body-sm'>
                Ничего не нашлось
              </Typography>

              <Typography className='text-center text-[13px]/5 text-muted-fg' variant='body-sm'>
                Под такой набор фильтров нет ни одного тайтла
              </Typography>

              <Link
                className='text-[13px] font-medium text-accent-primary underline-offset-4 outline-none hover:underline focus-visible:underline'
                href={resetHref(search)}
              >
                Сбросить фильтры
              </Link>
            </div>
          )}

          <CatalogPagination page={page} pages={pages} search={search} />
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;
