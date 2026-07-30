export interface Anime {
  /** Возрастное ограничение: «12+», «16+», «18+» */
  ageRating: string;
  /** Синопсис для страницы тайтла */
  description: string;
  /** Длительность одной серии в минутах */
  duration: number;
  genres: string[];
  /** Название на ромадзи — показываем под русским в шапке тайтла */
  originalTitle: string;
  /** Путь до постера в public */
  poster: string;
  /** Сколько серий уже вышло */
  released: number;
  /** Оценка из десяти */
  score: number;
  /** Подпись сезона: обычно «2 сезон», но у некоторых тайтлов это название арки */
  season: string;
  /** Уникальный идентификатор тайтла, он же имя файла постера */
  slug: string;
  /**
   * «Выходит» или «Завершён». Отдельное поле, потому что released и total
   * считают серии сезона и про судьбу тайтла ничего не говорят
   */
  status: string;
  studio: string;
  title: string;
  /** Сколько серий всего заявлено */
  total: number;
  /** «TV Сериал» или «Фильм» */
  type: string;
  /** Год выхода сезона, указанного в season */
  year: number;
}

export interface AnimeUpdate {
  anime: Anime;
  episode: number;
  /** Человекочитаемое «сколько времени назад», например «30 минут назад» */
  publishedAt: string;
  season: number;
}
