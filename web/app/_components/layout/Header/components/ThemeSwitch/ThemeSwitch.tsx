'use client';

import type { MouseEvent } from 'react';

import { useTheme } from '@/app/_contexts/theme';
import { Switch } from '@/src/components/ui';

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const theme = useTheme();

  const onThemeClick = async (event: MouseEvent<HTMLElement>) => {
    const x = event.clientX;
    const y = event.clientY;
    await theme.animate(x, y, theme.value === 'dark' ? 'light' : 'dark');
  };

  return <Switch checked={theme.value === 'dark'} className={className} onClick={onThemeClick} />;
};
