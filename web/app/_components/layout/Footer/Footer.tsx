import { MailIcon } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants, Separator, Typography } from '@/src/components/ui';
import { FOOTER_SECTIONS, LEGAL } from '@/src/constants';
import { cn } from '@/src/lib/utils';

const SOCIALS = [
  { href: 'mailto:hello@animi.club', icon: MailIcon, label: 'Почта' }
] as const;

const YEAR = 2026;

export const Footer = () => (
  <footer className='border-t border-border-soft bg-surface/40'>
    <div className='content-container flex flex-col gap-8 py-10'>
      <div className='grid gap-8 md:grid-cols-[1.5fr_repeat(3,1fr)] md:gap-6'>
        <div className='flex flex-col items-start gap-3'>
          <Link className='text-[15px]/5 font-extrabold tracking-[0.14em] uppercase' href='/'>
            Animi Club
          </Link>

          <Typography className='max-w-64 text-[12px]/4.5 text-muted-fg' variant='caption'>
            Смотрите аниме в хорошем качестве, следите за расписанием выхода серий и собирайте
            собственные подборки.
          </Typography>

          <div className='mt-1 flex items-center gap-1'>
            {SOCIALS.map((social) => {
              const external = social.href.startsWith('http');

              return (
                <a
                  key={social.href}
                  className={cn(
                    buttonVariants({ size: 'icon-sm', variant: 'ghost' }),
                    'rounded-full text-muted-fg hover:text-foreground'
                  )}
                  aria-label={social.label}
                  href={social.href}
                  rel={external ? 'noreferrer' : undefined}
                  target={external ? '_blank' : undefined}
                  title={social.label}
                >
                  <social.icon className='size-4' />
                </a>
              );
            })}
          </div>
        </div>

        {FOOTER_SECTIONS.map((section) => (
          <nav key={section.title} aria-label={section.title} className='flex flex-col gap-3'>
            <Typography
              as='h2'
              className='text-[11px]/4 font-semibold tracking-widest text-muted-fg uppercase'
              variant='caption'
            >
              {section.title}
            </Typography>

            <ul className='flex flex-col gap-2'>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    className='rounded-4 text-[13px]/5 text-muted-fg transition-colors outline-none hover:text-accent-primary focus-visible:ring-2 focus-visible:ring-ring'
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <Separator />

      <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <Typography className='text-[11px]/4 text-muted-fg' variant='caption'>
          © {YEAR} Animi Club. Права на аниме принадлежат их правообладателям.
        </Typography>

        <div className='flex flex-wrap items-center gap-x-5 gap-y-1'>
          {LEGAL.map((legal) => (
            <Link
              key={legal.href}
              className='rounded-4 text-[11px]/4 text-muted-fg transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring'
              href={legal.href}
            >
              {legal.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
