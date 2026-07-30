/**
 * Состояние каталога целиком живёт в адресе: так фильтры переживают перезагрузку,
 * страницу можно скинуть ссылкой, а самой странице не нужен ни один клиентский стейт.
 */

/** Сортировок ровно столько, сколько полей мы реально умеем сравнивать */
export const SORTS = [
  { value: 'rating', label: 'По оценке' },
  { value: 'new', label: 'Сначала новые' },
  { value: 'old', label: 'Сначала старые' },
  { value: 'title', label: 'По названию' }
];

/** Год выхода спрашивают диапазонами, а не по одному значению */
export const YEARS = [
  { value: '2024', label: '2024 и новее', from: 2024, to: 9999 },
  { value: '2020', label: '2020–2023', from: 2020, to: 2023 },
  { value: '2010', label: '2010–2019', from: 2010, to: 2019 },
  { value: '2000', label: '2000–2009', from: 2000, to: 2009 },
  { value: '1990', label: '1990–1999', from: 1990, to: 1999 }
];

export const PAGE_SIZE = 12;

/**
 * Next отдаёт searchParams обычным объектом, где повторённый параметр становится
 * массивом. URLSearchParams разбирает оба случая одинаково, поэтому дальше
 * ссылки собираются без проверок на массив
 */
export const toSearchParams = (params: Record<string, string | string[] | undefined>) => {
  const search = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach((item) => search.append(key, item));
    } else if (value !== undefined) {
      search.append(key, value);
    }
  }

  return search;
};

const buildHref = (search: URLSearchParams) => {
  const query = search.toString();
  return query ? `/library?${query}` : '/library';
};

/**
 * Ссылка, которая добавляет или убирает одно значение многозначного фильтра.
 * Страницу сбрасываем: после смены фильтра третьей страницы может уже не быть
 */
export const toggleHref = (search: URLSearchParams, key: string, value: string) => {
  const next = new URLSearchParams(search);
  const values = next.getAll(key);

  next.delete(key);
  values.filter((item) => item !== value).forEach((item) => next.append(key, item));

  if (!values.includes(value)) next.append(key, value);
  next.delete('page');

  return buildHref(next);
};

/**
 * Ссылка, которая заменяет однозначный параметр. Пустое значение убирает его.
 * Вид сетки страницу не сбрасывает: он ничего не фильтрует
 */
export const setHref = (search: URLSearchParams, key: string, value: string) => {
  const next = new URLSearchParams(search);

  if (value) next.set(key, value);
  else next.delete(key);

  if (key !== 'page' && key !== 'view') next.delete('page');

  return buildHref(next);
};

/** Ссылка на чистый каталог, но с сохранением вида сетки — это не фильтр */
export const resetHref = (search: URLSearchParams) => {
  const view = search.get('view');

  return buildHref(new URLSearchParams(view ? { view } : {}));
};
