import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Geist_Mono, Inter } from 'next/font/google';

import { cn } from '@/src/lib/utils';

import { Footer, Header } from './_components/layout';
import { ThemeScript } from './_scripts';
import { Provider } from './provider';

import './globals.css';

const fontSans = Inter({
  variable: '--font-sans',
  subsets: ['latin', 'cyrillic']
});

const fontMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  // Нужен, чтобы og:image из страницы тайтла превратился в абсолютный адрес
  metadataBase: new URL('https://animi.club'),
  title: 'Animi Club — смотреть аниме онлайн',
  description:
    'Каталог аниме с расписанием выхода серий, подборками и отслеживанием новых эпизодов.'
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => (
  <html
    suppressHydrationWarning
    className={cn('font-sans antialiased', fontSans.variable, fontMono.variable)}
    lang='ru'
  >
    <head>
      <ThemeScript />
    </head>
    <body className='flex min-h-screen flex-col overflow-x-hidden'>
      <Provider>
        <Header />
        <div className='flex flex-1 flex-col'>{children}</div>
        <Footer />
      </Provider>
    </body>
  </html>
);

export default RootLayout;
