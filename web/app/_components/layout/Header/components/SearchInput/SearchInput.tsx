'use client';

import { target, useClickOutside, useDebounceValue, useHotkeys } from '@siberiacancode/reactuse';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { Input, Typography } from '@/src/components/ui';
import { CATALOG } from '@/src/constants';
import { cn } from '@/src/lib/utils';

const MAX_RESULTS = 5;
const DEBOUNCE_DELAY = 300;

export interface SearchInputProps {
  className?: string;
}

export const SearchInput = ({ className }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [opened, setOpened] = useState(false);

  const debouncedQuery = useDebounceValue(query, DEBOUNCE_DELAY);
  const containerRef = useClickOutside<HTMLDivElement>(() => setOpened(false));

  useHotkeys(target(() => document), 'mod+k', (event) => {
    event.preventDefault();
    inputRef.current?.focus();
  });

  const search = debouncedQuery.trim().toLowerCase();
  const results = search
    ? CATALOG.filter((anime) => anime.title.toLowerCase().includes(search)).slice(0, MAX_RESULTS)
    : [];

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <SearchIcon className='pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-muted-fg' />

      <Input
        ref={inputRef}
        className='h-9 rounded-full border-transparent bg-secondary pl-8.5 text-[13px] placeholder:text-muted-fg'
        placeholder='Поиск...'
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpened(true);
        }}
        onFocus={() => setOpened(true)}
      />

      {opened && !!search && (
        <div className='absolute inset-x-0 top-full z-50 mt-2 overflow-hidden rounded-12 bg-popover p-1 shadow-lg ring-1 ring-border-soft'>
          {!results.length && (
            <Typography className='px-3 py-4 text-center text-[12px] text-muted-fg' variant='caption'>
              Ничего не найдено
            </Typography>
          )}

          {results.map((anime) => (
            <Link
              key={anime.slug}
              className='flex items-center gap-2 rounded-8 p-2 transition-colors outline-none hover:bg-surface-hover focus-visible:bg-surface-hover'
              href={`/anime/${anime.slug}`}
              onClick={() => setOpened(false)}
            >
              <div className='relative h-9 w-6 shrink-0 overflow-hidden rounded-4'>
                <Image
                  fill
                  alt={`Постер «${anime.title}»`}
                  className='object-cover'
                  sizes='24px'
                  src={anime.poster}
                />
              </div>

              <div className='flex min-w-0 flex-col'>
                <Typography className='truncate text-[12px]/4 font-medium' variant='caption'>
                  {anime.title}
                </Typography>
                <Typography className='truncate text-[10px]/3.5 text-muted-fg' variant='caption'>
                  {anime.season}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
