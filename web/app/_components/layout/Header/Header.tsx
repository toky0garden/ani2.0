import Link from 'next/link';

import { MobileMenu, Navigation, SearchInput, UserMenu } from './components';

export const Header = () => (
  <header className='sticky top-0 z-50 w-full border-b border-border-soft bg-background/95 backdrop-blur-sm'>
    <div className='content-container flex h-14 items-center gap-4'>
      <div className='flex flex-1 items-center'>
        <Link className='text-[15px]/5 font-extrabold tracking-[0.14em] uppercase' href='/'>
          Animi Club
        </Link>
      </div>

      <Navigation className='hidden md:flex' />

      <div className='flex flex-1 items-center justify-end gap-2'>
        <SearchInput className='hidden w-56 lg:block' />

        <UserMenu className='hidden sm:flex' />

        <MobileMenu className='md:hidden' />
      </div>
    </div>
  </header>
);
