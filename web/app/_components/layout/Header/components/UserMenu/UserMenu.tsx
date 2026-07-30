'use client';

import { useClickOutside, useDisclosure } from '@siberiacancode/reactuse';
import { ChevronDownIcon, HeartIcon, LogOutIcon, MoonIcon, SettingsIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage, Separator, Typography } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';

const MENU = [
  { href: '/profile', label: 'Профиль', icon: UserIcon },
  { href: '/favorites', label: 'Избранное', icon: HeartIcon },
  { href: '/settings', label: 'Настройки', icon: SettingsIcon }
] as const;

export interface UserMenuProps {
  className?: string;
}

export const UserMenu = ({ className }: UserMenuProps) => {
  const disclosure = useDisclosure();
  const containerRef = useClickOutside<HTMLDivElement>(disclosure.close);

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        aria-expanded={disclosure.opened}
        aria-haspopup='menu'
        aria-label='Меню пользователя'
        className='flex items-center gap-1 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring'
        type='button'
        onClick={() => disclosure.toggle()}
      >
        <Avatar>
          <AvatarImage alt='Аватар пользователя' src='/avatar.png' />
          <AvatarFallback>А</AvatarFallback>
        </Avatar>

        <ChevronDownIcon
          className={cn(
            'size-3.5 text-muted-fg transition-transform',
            disclosure.opened && 'rotate-180'
          )}
        />
      </button>

      {disclosure.opened && (
        <div
          className='absolute top-full right-0 z-50 mt-2 w-52 overflow-hidden rounded-12 bg-popover p-1 shadow-lg ring-1 ring-border-soft'
          role='menu'
        >
          {MENU.map((menu) => (
            <Link
              key={menu.href}
              className='flex items-center gap-2.5 rounded-8 px-3 py-2 text-[13px] transition-colors outline-none hover:bg-surface-hover focus-visible:bg-surface-hover'
              href={menu.href}
              role='menuitem'
              onClick={disclosure.close}
            >
              <menu.icon className='size-4 text-muted-fg' />
              {menu.label}
            </Link>
          ))}

          <Separator className='my-1' />

          <div className='flex items-center justify-between gap-2 px-3 py-2'>
            <Typography
              as='span'
              className='inline-flex items-center gap-2.5 text-[13px]'
              variant='caption'
            >
              <MoonIcon className='size-4 text-muted-fg' />
              Тёмная тема
            </Typography>

            <ThemeSwitch />
          </div>

          <Separator className='my-1' />

          <button
            className='flex w-full items-center gap-2.5 rounded-8 px-3 py-2 text-[13px] text-danger transition-colors outline-none hover:bg-surface-hover focus-visible:bg-surface-hover'
            role='menuitem'
            type='button'
            onClick={disclosure.close}
          >
            <LogOutIcon className='size-4' />
            Выйти
          </button>
        </div>
      )}
    </div>
  );
};
