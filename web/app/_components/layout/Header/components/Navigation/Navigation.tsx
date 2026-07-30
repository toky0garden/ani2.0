'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/src/components/ui';
import { ROUTES } from '@/src/constants/routes';
import { cn } from '@/src/lib/utils';


export interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className={cn('items-center gap-1', className)}>
      {ROUTES.map((navigation) => {
        const active =
          navigation.href === '/' ? pathname === '/' : pathname.startsWith(navigation.href);

        return (
          <Link
            key={navigation.href}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'relative h-9 px-3 text-[13px] font-medium text-muted-fg hover:text-foreground',
              active &&
                'text-foreground after:absolute after:-bottom-2.5 after:left-1/2 after:h-0.5 after:w-7 after:-translate-x-1/2 after:rounded-full after:bg-accent-primary'
            )}
            aria-current={active ? 'page' : undefined}
            href={navigation.href}
          >
            {navigation.label}
          </Link>
        );
      })}
    </nav>
  );
};
