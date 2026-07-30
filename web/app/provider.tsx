'use client';

import type { ReactNode } from 'react';

import { ThemeProvider } from './_contexts/theme';

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => <ThemeProvider>{children}</ThemeProvider>;
