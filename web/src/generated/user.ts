import type { Anime } from './anime';

export interface User {
  /** Лента событий, последнее — первым */
  activity: {
    anime: Anime;
    /** Уточнение к событию: «2 сезон, 12 серия» */
    detail: string;
    /** Тип события: от него зависит иконка и формулировка */
    kind: 'favorite' | 'review' | 'watch';
    publishedAt: string;
  }[];
  /** Путь до аватара в public */
  avatar: string;
  bio: string;
  country: string;
  /** Месяц регистрации в готовом виде: «янв. 2024» */
  createdAt: string;
  /**
   * Сколько эпизодов просмотрено за всё время. Историю целиком мы не храним,
   * поэтому число отдельное, а не длина history
   */
  episodes: number;
  favorites: Anime[];
  /**
   * Доли жанров в процентах от просмотренного времени, сумма — 100.
   * Порядок от большей доли к меньшей: диаграмма красит срезы по нему
   */
  genres: { percent: number; title: string }[];
  /** На чём пользователь остановился в каждом тайтле */
  history: {
    anime: Anime;
    episode: number;
    /** Сколько процентов эпизода просмотрено */
    progress: number;
    season: number;
  }[];
  /**
   * Размеры списков. «Любимое» здесь нет намеренно: его считает favorites,
   * иначе два числа про одно и то же начнут расходиться
   */
  lists: {
    completed: number;
    dropped: number;
    planned: number;
    postponed: number;
    watching: number;
  };
  premium: boolean;
  reviews: {
    anime: Anime;
    comments: number;
    likes: number;
    publishedAt: string;
    /** Оценка из пяти звёзд */
    rating: number;
    season: number;
    text: string;
  }[];
  socials: { href: string; label: string }[];
  /** Сколько дней подряд смотрит без пропусков */
  streak: number;
  /** Он же идентификатор в адресе профиля */
  username: string;
}
