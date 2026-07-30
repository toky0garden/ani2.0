'use client';

import type { ComponentProps, MouseEvent } from 'react';

import { MoonIcon, SunIcon } from 'lucide-react';

import { useTheme } from '@/app/_contexts/theme';
import { Button } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

type ThemeButtonProps = ComponentProps<typeof Button>;

export const ThemeButton = ({ className, ...props }: ThemeButtonProps) => {
  const theme = useTheme();

  const onThemeClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const x = event.clientX;
    const y = event.clientY;
    await theme.animate(x, y, theme.value === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      className={cn('rounded-full', className)}
      size='icon'
      variant='ghost'
      onClick={onThemeClick}
      {...props}
    >
      {theme.value === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
