'use client';

import { useClickOutside, useDisclosure } from '@siberiacancode/reactuse';
import { ArrowUpDownIcon, CheckIcon, ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

export interface CatalogSortProps {
  items: { active: boolean; href: string; label: string }[];
  /** Подпись выбранной сортировки */
  label: string;
}

export const CatalogSort = ({ items, label }: CatalogSortProps) => {
  const disclosure = useDisclosure();
  const containerRef = useClickOutside<HTMLDivElement>(disclosure.close);

  return (
    <div ref={containerRef} className='relative'>
      <Button
        aria-expanded={disclosure.opened}
        aria-haspopup='menu'
        className='h-9 gap-2 rounded-10 text-[13px]'
        variant='outline'
        onClick={() => disclosure.toggle()}
      >
        <ArrowUpDownIcon className='text-muted-fg' />
        {label}
        <ChevronDownIcon
          className={cn('text-muted-fg transition-transform', disclosure.opened && 'rotate-180')}
        />
      </Button>

      {disclosure.opened && (
        <div
          className='absolute top-full left-0 z-40 mt-2 w-48 overflow-hidden rounded-12 bg-popover p-1 shadow-lg ring-1 ring-border-soft'
          role='menu'
        >
          {items.map((item) => (
            <Link
              key={item.href}
              className={cn(
                'flex items-center justify-between gap-2 rounded-8 px-3 py-2 text-[13px] transition-colors outline-none hover:bg-surface-hover focus-visible:bg-surface-hover',
                item.active && 'text-accent-primary'
              )}
              aria-current={item.active ? 'true' : undefined}
              href={item.href}
              role='menuitem'
              onClick={disclosure.close}
            >
              {item.label}
              {item.active && <CheckIcon className='size-3.5' />}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
