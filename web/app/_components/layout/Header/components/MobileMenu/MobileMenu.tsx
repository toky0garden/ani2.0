'use client';

import { useDisclosure } from '@siberiacancode/reactuse';
import { MenuIcon, MoonIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

import {
  Button,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Typography
} from '@/src/components/ui';
import { ROUTES } from '@/src/constants/routes';
import { cn } from '@/src/lib/utils';

import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';

export interface MobileMenuProps {
  className?: string;
}

export const MobileMenu = ({ className }: MobileMenuProps) => {
  // Меню управляется снаружи, чтобы пункты навигации остались обычными ссылками:
  // обёртка в SheetClose навесила бы на них role='button' и сломала семантику
  const disclosure = useDisclosure();

  return (
    <Sheet open={disclosure.opened} onOpenChange={disclosure.toggle}>
      <SheetTrigger
        aria-label='Открыть меню'
        render={<Button className={cn('rounded-full', className)} size='icon' variant='ghost' />}
      >
        <MenuIcon className='size-4' />
      </SheetTrigger>

      <SheetContent showCloseButton={false}>
        <SheetHeader className='mt-3 flex h-10 flex-row items-center justify-between'>
          <SheetTitle className='sr-only'>Меню навигации</SheetTitle>
          <SheetDescription className='sr-only'>
            Разделы сайта и настройки отображения
          </SheetDescription>

          <Link
            className='text-[15px]/5 font-extrabold tracking-[0.14em] uppercase'
            href='/'
            onClick={disclosure.close}
          >
            Animi Club
          </Link>

          <SheetClose
            aria-label='Закрыть меню'
            render={<Button className='rounded-full' size='icon' variant='ghost' />}
          >
            <XIcon className='size-4' />
          </SheetClose>
        </SheetHeader>

        <div className='flex flex-col gap-1 px-4'>
          {ROUTES.map((navigation) => (
            <Typography
              key={navigation.href}
              className='p-2 text-[24px]/8 font-bold'
              render={<Link href={navigation.href} onClick={disclosure.close} />}
              variant='title-md'
            >
              {navigation.label}
            </Typography>
          ))}

          <Separator className='my-3' />

          <div className='flex items-center justify-between px-2'>
            <Typography
              as='span'
              className='inline-flex items-center gap-2 text-[15px]'
              variant='body-sm'
            >
              <MoonIcon className='size-5' />
              Тёмная тема
            </Typography>

            <ThemeSwitch />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
