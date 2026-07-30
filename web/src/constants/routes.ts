export const ROUTES = [
  { href: '/', label: 'Главная' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/schedule', label: 'Расписание' },
  { href: '/collections', label: 'Подборки' }
];

export const GENRES = [
  { href: '/genres/shounen', label: 'Сёнэн' },
  { href: '/genres/romance', label: 'Романтика' },
  { href: '/genres/fantasy', label: 'Фэнтези' },
  { href: '/genres/thriller', label: 'Триллер' }
];

export const HELP = [
  { href: '/faq', label: 'Вопросы и ответы' },
  { href: '/support', label: 'Поддержка' },
  { href: '/report', label: 'Сообщить о проблеме' },
  { href: '/about', label: 'О проекте' }
];

export const LEGAL = [
  { href: '/privacy', label: 'Политика конфиденциальности' },
  { href: '/terms', label: 'Условия использования' }
];

export const FOOTER_SECTIONS = [
  { links: ROUTES, title: 'Навигация' },
  { links: GENRES, title: 'Жанры' },
  { links: HELP, title: 'Помощь' }
];
