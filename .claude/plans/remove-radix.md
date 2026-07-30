# Убрать radix-ui, оставить только base-ui

## Контекст

`radix-ui` используется ровно в 3 местах:

- `web/src/components/ui/typography.tsx` — `Slot.Root` для `asChild`
- `web/src/components/ui/icon-button.tsx` — `Slot.Root` для `asChild`
- `web/package.json` — сама зависимость

Всё остальное (`button`, `sheet`, `switch`, `separator`) уже на `@base-ui/react`.
`Header.tsx` уже переведён на `render`, кроме одного хвоста — `asChild` на `Typography` (строка 103).

Замена `Slot` в base-ui — хук `useRender` из `@base-ui/react/use-render`.
Он безопасен в RSC: вызов `useMergedRefs` внутри `useRenderElement` обёрнут
в `typeof document !== 'undefined'`, так что `'use client'` добавлять не нужно.

## Шаги

### 1. `web/src/components/ui/typography.tsx`

- Убрать `import { Slot } from 'radix-ui'`, добавить `import { useRender } from '@base-ui/react/use-render'`.
- В типе пропов заменить `asChild?: boolean` на `render?: useRender.RenderProp`.
- Тело компонента → `useRender({ render, defaultTagName: as, props: {...} })`.
- `cva`-варианты, `as`, `data-slot`, `data-variant` — без изменений.
- Уходит каст `{...(props as any)}`.

### 2. `web/src/components/ui/icon-button.tsx`

- Убрать `Slot`, построить на `Button` из `@base-ui/react/button` — так же, как `button.tsx`.
- Тип: `ButtonPrimitive.Props & VariantProps<typeof iconButtonVariants>`.
- `asChild` уходит, `render` приходит бесплатно от примитива.
- Бонусом — нативная обработка `disabled` и `data-disabled` от base-ui.
- `data-slot='button'`, `data-size`, `data-variant` оставить как есть, чтобы не поехали стили.

### 3. `web/app/_components/layout/Header/Header.tsx`

Строки 99–112 — убрать оставшийся `asChild`:

```tsx
<SheetClose
  key={navigation.href}
  render={
    <Typography
      className='px-4 py-2 text-[32px]/10 uppercase'
      render={<Link href={navigation.href} />}
      variant='heading-md'
    />
  }
>
  {navigation.label}
</SheetClose>
```

### 4. `web/package.json`

- Удалить `"radix-ui": "^1.6.7"` из `dependencies`.
- `bun install` — обновить `bun.lock`.

### 5. Проверка

- `bun run typecheck`
- `bun run lint`

## Итог

Одна библиотека примитивов, один способ полиморфизма — `render`.
`asChild` в проекте не остаётся нигде.
