import type { User } from '@/src/generated';

import { ANIME } from './anime';

/** Профили. Пока один — аватар в public тоже один */
export const USERS: User[] = [
  {
    username: 'tokyogarden',
    avatar: '/avatar.png',
    premium: true,
    bio: 'Аниме — это не просто развлечение. Это другой мир, в который хочется возвращаться.',
    createdAt: 'янв. 2024',
    country: 'Россия',
    socials: [
      { href: 'https://t.me/tokyogarden', label: 'Telegram' },
      { href: 'https://vk.com/tokyogarden', label: 'VK' },
      { href: 'https://discord.com/users/tokyogarden', label: 'Discord' }
    ],
    episodes: 1284,
    streak: 24,
    lists: { completed: 34, watching: 8, postponed: 6, planned: 12, dropped: 3 },
    genres: [
      { title: 'Экшен', percent: 42 },
      { title: 'Драма', percent: 25 },
      { title: 'Фэнтези', percent: 18 },
      { title: 'Сверхъестественное', percent: 10 },
      { title: 'Другое', percent: 5 }
    ],
    favorites: [
      ANIME['demon-slayer'],
      ANIME['solo-leveling'],
      ANIME['attack-on-titan'],
      ANIME['tokyo-revengers'],
      ANIME['jujutsu-kaisen'],
      ANIME['chainsaw-man'],
      ANIME['fullmetal-alchemist'],
      ANIME.haikyuu,
      ANIME['one-piece']
    ],
    history: [
      { anime: ANIME['jujutsu-kaisen'], season: 2, episode: 12, progress: 75 },
      { anime: ANIME['one-piece'], season: 1, episode: 104, progress: 60 },
      { anime: ANIME.kaguya, season: 1, episode: 4, progress: 30 }
    ],
    activity: [
      {
        kind: 'review',
        anime: ANIME['jujutsu-kaisen'],
        detail: '2 сезон, 12 серия',
        publishedAt: '2 дня назад'
      },
      {
        kind: 'favorite',
        anime: ANIME['solo-leveling'],
        detail: '1 сезон',
        publishedAt: '5 дней назад'
      },
      {
        kind: 'watch',
        anime: ANIME['the-wind-rises'],
        detail: 'полный метр',
        publishedAt: 'неделю назад'
      },
      {
        kind: 'watch',
        anime: ANIME['demon-slayer'],
        detail: '3 сезон, 6 серия',
        publishedAt: '2 недели назад'
      }
    ],
    reviews: [
      {
        anime: ANIME['jujutsu-kaisen'],
        season: 2,
        rating: 5,
        text: 'Шикарное продолжение: MAPPA снова на высоте. Бои, анимация, музыка — всё идеально, а арка Сибуи держит в напряжении до последнего кадра.',
        publishedAt: '12 мая 2024',
        likes: 152,
        comments: 8
      },
      {
        anime: ANIME['the-wind-rises'],
        season: 1,
        rating: 4,
        text: 'Медленный и очень взрослый Миядзаки. Не для первого знакомства со студией, но финал бьёт сильнее любого экшена.',
        publishedAt: '3 апреля 2024',
        likes: 47,
        comments: 2
      },
      {
        anime: ANIME.haikyuu,
        season: 4,
        rating: 5,
        text: 'Единственный спорт, где я переживаю за подачу мяча как за спасение мира. Четвёртый сезон наконец даёт Карасуно матч, которого мы ждали три года.',
        publishedAt: '28 февраля 2024',
        likes: 89,
        comments: 5
      },
      {
        anime: ANIME['blue-lock'],
        season: 1,
        rating: 3,
        text: 'Идея с отбором эгоистов классная, но к середине сезона монологи начинают повторяться. Смотреть стоит ради матчей, а не ради разговоров о них.',
        publishedAt: '17 февраля 2024',
        likes: 23,
        comments: 11
      }
    ]
  }
];
