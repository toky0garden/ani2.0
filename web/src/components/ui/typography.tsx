import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { useRender } from '@base-ui/react/use-render';
import { cva } from 'class-variance-authority';

import { cn } from '@/src/lib/utils';

const typographyVariants = cva('font-sans', {
  variants: {
    variant: {
      display:
        'text-[56px] leading-none font-(--font-weight) tracking-normal uppercase [--font-weight:700] lg:text-[170px]',

      'heading-2xl':
        'text-[36px] leading-none font-(--font-weight) tracking-normal [--font-weight:800] md:text-[96px]',
      'heading-xl':
        'text-[48px] leading-none font-(--font-weight) tracking-normal [--font-weight:800] md:text-[80px]',
      'heading-lg': 'text-[60px]/17 font-(--font-weight) tracking-normal [--font-weight:700]',
      'heading-md':
        'text-[48px] leading-none font-(--font-weight) tracking-tighter [--font-weight:700]',

      'title-lg': 'text-[32px]/10 font-(--font-weight) tracking-normal [--font-weight:700]',
      'title-md': 'text-[24px]/8 font-(--font-weight) tracking-wide [--font-weight:700]',

      'body-lg': 'text-[24px]/8 font-medium tracking-wide',
      'body-md': 'text-[18px]/6.5 font-medium tracking-wide',
      'body-sm': 'text-[16px]/6 font-medium tracking-wide',
      link: 'text-[16px]/6 font-medium tracking-wide underline underline-offset-4',
      caption: 'text-[14px]/5.5 font-medium tracking-wide'
    }
  },
  defaultVariants: {
    variant: 'body-md'
  }
});

export type TypographyTag = 'a' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyProps<Tag extends TypographyTag> = ComponentProps<Tag> &
  VariantProps<typeof typographyVariants> & {
    as?: Tag;
    render?: useRender.RenderProp;
  };

const Typography = <Tag extends TypographyTag>({
  as = 'div' as Tag,
  className,
  render,
  variant = 'body-md',
  ...props
}: TypographyProps<Tag>) =>
  useRender({
    defaultTagName: as,
    props: {
      className: cn(typographyVariants({ variant, className })),
      'data-slot': 'typography',
      'data-variant': variant,
      ...props
    },
    render
  });

export { Typography, typographyVariants };
