import type { Anime, AnimeUpdate } from '@/src/generated';

/**
 * Каталог тайтлов. Постеры лежат в public/posters и скачаны с AniList,
 * поэтому ключ объекта совпадает с именем файла.
 */
export const ANIME = {
  'attack-on-titan': {
    slug: 'attack-on-titan',
    status: 'Завершён',
    title: 'Атака титанов',
    originalTitle: 'Shingeki no Kyojin',
    poster: '/posters/attack-on-titan.jpg',
    season: '4 сезон',
    released: 18,
    total: 28,
    year: 2020,
    type: 'TV Сериал',
    studio: 'MAPPA',
    duration: 24,
    score: 8.8,
    ageRating: '18+',
    genres: ['Экшен', 'Драма', 'Фэнтези'],
    description:
      'Больше века человечество живёт за тремя кольцами стен, спасаясь от титанов — исполинов, пожирающих людей без причины и без пощады. Эрен Йегер теряет дом и мать в день, когда стена Мария падает, и вместе с Микасой и Армином вступает в разведкорпус. Чем дальше отряд заходит за стены, тем очевиднее: настоящий враг никогда не был снаружи.'
  },
  'blue-lock': {
    slug: 'blue-lock',
    status: 'Выходит',
    title: 'Синяя тюрьма: Блю Лок',
    originalTitle: 'Blue Lock',
    poster: '/posters/blue-lock.png',
    season: '1 сезон',
    released: 8,
    total: 24,
    year: 2022,
    type: 'TV Сериал',
    studio: '8bit',
    duration: 24,
    score: 7.9,
    ageRating: '16+',
    genres: ['Спорт', 'Драма', 'Сёнэн'],
    description:
      'После очередного провала на чемпионате мира футбольный союз Японии решает вырастить самого эгоистичного бомбардира на планете. Триста старшеклассников запирают в интернате «Блю Лок», где каждый матч — отбор на выживание, а проигравший навсегда теряет право играть за сборную. Ёити Исаги приходит туда командным игроком и быстро понимает, что здесь это слабость.'
  },
  'chainsaw-man': {
    slug: 'chainsaw-man',
    status: 'Завершён',
    title: 'Человек-бензопила',
    originalTitle: 'Chainsaw Man',
    poster: '/posters/chainsaw-man.png',
    season: '1 сезон',
    released: 7,
    total: 12,
    year: 2022,
    type: 'TV Сериал',
    studio: 'MAPPA',
    duration: 24,
    score: 8.5,
    ageRating: '18+',
    genres: ['Экшен', 'Ужасы', 'Сверхъестественное'],
    description:
      'Дэндзи выплачивает долг отца охотой на демонов и мечтает о самом простом: поесть досыта и один раз обнять девушку. Когда его убивают, сделка с демоном-псом Почитой возвращает его к жизни с бензопилами вместо рук. Теперь он служит в правительственном бюро по контролю за демонами, где напарники опаснее целей.'
  },
  'dangers-in-my-heart': {
    slug: 'dangers-in-my-heart',
    status: 'Завершён',
    title: 'Опасность в моём сердце',
    originalTitle: 'Boku no Kokoro no Yabai Yatsu',
    poster: '/posters/dangers-in-my-heart.jpg',
    season: '1 сезон',
    released: 6,
    total: 12,
    year: 2023,
    type: 'TV Сериал',
    studio: 'Shin-Ei Animation',
    duration: 23,
    score: 8.2,
    ageRating: '12+',
    genres: ['Романтика', 'Комедия', 'Школа'],
    description:
      'Кёотаро Итиками прячется в школьной библиотеке, ведёт список тех, кому желает смерти, и считает себя мрачнее всех вокруг. Туда же каждый день приходит Анна Ямада — самая заметная девочка класса, модель и человек, которому нет дела до его выстроенной обороны. Мизантропия держится ровно до первого совместного обеда.'
  },
  'demon-slayer': {
    slug: 'demon-slayer',
    status: 'Выходит',
    title: 'Клинок, рассекающий демонов',
    originalTitle: 'Kimetsu no Yaiba',
    poster: '/posters/demon-slayer.jpg',
    season: '3 сезон',
    released: 6,
    total: 11,
    year: 2023,
    type: 'TV Сериал',
    studio: 'ufotable',
    duration: 24,
    score: 8.3,
    ageRating: '16+',
    genres: ['Экшен', 'Фэнтези', 'Исторический'],
    description:
      'Танджиро возвращается домой и находит семью убитой, а младшую сестру Нэдзуко — обращённой в демона. Ради её исцеления он вступает в отряд истребителей демонов и осваивает дыхательные техники. Путь ведёт его в Деревню кузнецов, где предстоит встретиться со столпами и высшими лунами.'
  },
  'fullmetal-alchemist': {
    slug: 'fullmetal-alchemist',
    status: 'Завершён',
    title: 'Стальной алхимик: Братство',
    originalTitle: 'Hagane no Renkinjutsushi: Fullmetal Alchemist',
    poster: '/posters/fullmetal-alchemist.jpg',
    season: 'Братство',
    released: 20,
    total: 64,
    year: 2009,
    type: 'TV Сериал',
    studio: 'Bones',
    duration: 24,
    score: 9.1,
    ageRating: '16+',
    genres: ['Экшен', 'Приключения', 'Драма'],
    description:
      'Братья Элрики нарушили главный запрет алхимии, попытавшись воскресить мать: Эдвард лишился руки и ноги, Альфонс — всего тела. В поисках философского камня они становятся государственными алхимиками Аместриса и подбираются к военной тайне, которую страна прячет со времён геноцида в Ишваре. Равноценный обмен работает и с ценой правды.'
  },
  haikyuu: {
    slug: 'haikyuu',
    status: 'Завершён',
    title: 'Волейбол!!',
    originalTitle: 'Haikyuu!!',
    poster: '/posters/haikyuu.png',
    season: '4 сезон',
    released: 13,
    total: 25,
    year: 2020,
    type: 'TV Сериал',
    studio: 'Production I.G',
    duration: 24,
    score: 8.7,
    ageRating: '12+',
    genres: ['Спорт', 'Комедия', 'Драма'],
    description:
      'Сёё Хината невысок даже для связующего, но прыгает так, что блок не успевает подняться. В школе Карасуно он оказывается в одной команде с Тобио Кагеямой — тем самым «королём площадки», которому проиграл в средней школе. Их вражда превращается в связку, ради которой стоит смотреть каждый розыгрыш.'
  },
  'hells-paradise': {
    slug: 'hells-paradise',
    status: 'Выходит',
    title: 'Адский рай',
    originalTitle: 'Jigokuraku',
    poster: '/posters/hells-paradise.jpg',
    season: '1 сезон',
    released: 5,
    total: 13,
    year: 2023,
    type: 'TV Сериал',
    studio: 'MAPPA',
    duration: 24,
    score: 7.7,
    ageRating: '18+',
    genres: ['Экшен', 'Сверхъестественное', 'Исторический'],
    description:
      'Ниндзя Гэбимару по прозвищу Пустой не умирает ни от яда, ни от казни — и это единственная причина, по которой сёгунат оставил его в живых. Ему предлагают помилование за эликсир бессмертия с острова к югу от Японии, откуда не вернулся никто. Вместе с десятком таких же смертников он высаживается туда, где цветы растут из людей.'
  },
  'jujutsu-kaisen': {
    slug: 'jujutsu-kaisen',
    status: 'Выходит',
    title: 'Магическая битва',
    originalTitle: 'Jujutsu Kaisen',
    poster: '/posters/jujutsu-kaisen.jpg',
    season: '2 сезон',
    released: 12,
    total: 23,
    year: 2023,
    type: 'TV Сериал',
    studio: 'MAPPA',
    duration: 24,
    score: 8.6,
    ageRating: '16+',
    genres: ['Экшен', 'Сверхъестественное', 'Сёнэн'],
    description:
      'Юдзи Итадори проглатывает палец Рёмэна Сукуны и становится сосудом для сильнейшего проклятия эпохи. Магический техникум даёт ему отсрочку от казни: он будет жить, пока не соберёт все двадцать пальцев. Второй сезон возвращается к юности Годзё и Гэто, а затем обрушивает на Сибую всё, к чему эта юность привела.'
  },
  kaguya: {
    slug: 'kaguya',
    status: 'Завершён',
    title: 'Любовь с иголочки',
    originalTitle: 'Kaguya-sama wa Kokurasetai',
    poster: '/posters/kaguya.png',
    season: '1 сезон',
    released: 4,
    total: 12,
    year: 2019,
    type: 'TV Сериал',
    studio: 'A-1 Pictures',
    duration: 24,
    score: 8.4,
    ageRating: '12+',
    genres: ['Романтика', 'Комедия', 'Школа'],
    description:
      'Президент студсовета Миюки Сироганэ и вице-президент Кагуя Синомия — лучшие ученики элитной академии Сютиин и оба влюблены друг в друга. Признаться первым значит проиграть, поэтому каждая встреча превращается в психологическую партию с ловушками и просчётом на три хода вперёд. Побеждает тот, кому признаются.'
  },
  'kamisama-hajimemashita': {
    slug: 'kamisama-hajimemashita',
    status: 'Завершён',
    title: 'Очень приятно, бог',
    originalTitle: 'Kamisama Hajimemashita',
    poster: '/posters/kamisama-hajimemashita.jpg',
    season: '2 сезон',
    released: 6,
    total: 12,
    year: 2015,
    type: 'TV Сериал',
    studio: 'TMS Entertainment',
    duration: 24,
    score: 7.9,
    ageRating: '12+',
    genres: ['Романтика', 'Комедия', 'Сверхъестественное'],
    description:
      'Отец Нанами сбежал от долгов, и вместо дома школьнице достался заброшенный храм вместе с должностью земного божества. В придачу — лис-хранитель Томоэ, который служит без всякого желания и не скрывает этого. Второй сезон уводит их к драконьему царю и к прошлому Томоэ, где он ещё не был ничьим фамильяром.'
  },
  naruto: {
    slug: 'naruto',
    status: 'Завершён',
    title: 'Наруто',
    originalTitle: 'Naruto',
    poster: '/posters/naruto.jpg',
    season: '1 сезон',
    released: 25,
    total: 220,
    year: 2002,
    type: 'TV Сериал',
    studio: 'Studio Pierrot',
    duration: 23,
    score: 8.0,
    ageRating: '12+',
    genres: ['Экшен', 'Приключения', 'Сёнэн'],
    description:
      'В Наруто Удзумаки заперт девятихвостый лис, разрушивший деревню в день его рождения, — поэтому Конохагакурэ растит его как чужого. Он громкий, худший в классе и обещает стать Хокагэ, чтобы деревня наконец посмотрела в его сторону. Седьмая команда, Саскэ и Сакура превращают это обещание в путь.'
  },
  'one-piece': {
    slug: 'one-piece',
    status: 'Выходит',
    title: 'Ван-Пис',
    originalTitle: 'One Piece',
    poster: '/posters/one-piece.jpg',
    season: '1 сезон',
    released: 104,
    total: 1122,
    year: 1999,
    type: 'TV Сериал',
    studio: 'Toei Animation',
    duration: 24,
    score: 8.7,
    ageRating: '12+',
    genres: ['Экшен', 'Приключения', 'Фэнтези'],
    description:
      'Перед казнью король пиратов Гол Д. Роджер сказал, что оставил всё своё богатство на Гранд Лайн, — и мир вошёл в великую эру пиратства. Мальчик Монки Д. Луффи съел дьявольский фрукт, потерял способность плавать и приобрёл резиновое тело. Он собирает команду и идёт за Ван-Писом, потому что королём пиратов может быть только самый свободный человек на море.'
  },
  'solo-leveling': {
    slug: 'solo-leveling',
    status: 'Выходит',
    title: 'Поднятие уровня в одиночку',
    originalTitle: 'Ore dake Level Up na Ken',
    poster: '/posters/solo-leveling.png',
    season: '1 сезон',
    released: 9,
    total: 12,
    year: 2024,
    type: 'TV Сериал',
    studio: 'A-1 Pictures',
    duration: 24,
    score: 8.2,
    ageRating: '16+',
    genres: ['Экшен', 'Фэнтези', 'Приключения'],
    description:
      'Десять лет назад между мирами открылись врата, и человечество получило охотников, способных зачищать подземелья. Сон Джин-Ву — слабейший из них, идущий в рейды только ради лечения матери. Двойное подземелье почти убивает его отряд и оставляет ему систему, которая начисляет опыт за каждый бой.'
  },
  'the-wind-rises': {
    slug: 'the-wind-rises',
    status: 'Завершён',
    title: 'Ветер крепчает',
    originalTitle: 'Kaze Tachinu',
    poster: '/posters/the-wind-rises.jpg',
    season: 'Полнометражный фильм',
    released: 1,
    total: 1,
    year: 2013,
    type: 'Фильм',
    studio: 'Studio Ghibli',
    duration: 126,
    score: 8.0,
    ageRating: '12+',
    genres: ['Драма', 'Исторический', 'Романтика'],
    description:
      'Дзиро Хорикоси близорук и потому никогда не поднимется в небо сам — остаётся строить тех, кто поднимется. Он проходит землетрясение Канто, годы в Mitsubishi и работу над истребителем, которому суждено стать оружием. Последний фильм Хаяо Миядзаки о том, что красивая машина не выбирает, для чего её построили.'
  },
  'tokyo-revengers': {
    slug: 'tokyo-revengers',
    status: 'Выходит',
    title: 'Токийские мстители',
    originalTitle: 'Tokyo Revengers',
    poster: '/posters/tokyo-revengers.jpg',
    season: '2 сезон',
    released: 6,
    total: 13,
    year: 2023,
    type: 'TV Сериал',
    studio: 'LIDENFILMS',
    duration: 24,
    score: 7.8,
    ageRating: '16+',
    genres: ['Экшен', 'Драма', 'Сверхъестественное'],
    description:
      'Такэмити Ханагаки узнаёт из новостей, что его первую любовь убила банда Токийская Мандзи, — и в тот же день его толкают под поезд. Вместо смерти он оказывается на двенадцать лет в прошлом. Теперь он раз за разом возвращается в две тысячи пятый, чтобы переписать историю банды и остаться живым в настоящем.'
  },
  villainess: {
    slug: 'villainess',
    status: 'Завершён',
    title: 'Моя реинкарнация в отомэ-игре',
    originalTitle: 'Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shite shimatta',
    poster: '/posters/villainess.jpg',
    season: '2 сезон',
    released: 7,
    total: 12,
    year: 2021,
    type: 'TV Сериал',
    studio: 'Silver Link',
    duration: 24,
    score: 7.4,
    ageRating: '12+',
    genres: ['Комедия', 'Фэнтези', 'Романтика'],
    description:
      'Катарина Клас вспоминает прошлую жизнь и понимает, что стала злодейкой отомэ-игры, у которой все концовки заканчиваются изгнанием или смертью. План спасения прост: качать земляную магию и выращивать овощи в саду. Побочный эффект — в неё влюбляются все персонажи, включая тех, кому по сценарию положено её ненавидеть.'
  }
} satisfies Record<string, Anime>;

export const NOW_WATCHING: Anime[] = [
  ANIME['jujutsu-kaisen'],
  ANIME.naruto,
  ANIME['attack-on-titan'],
  ANIME['demon-slayer'],
  ANIME['blue-lock'],
  ANIME['one-piece'],
  ANIME['fullmetal-alchemist'],
  ANIME['tokyo-revengers']
];

export const NEW_RELEASES: Anime[] = [
  ANIME['hells-paradise'],
  ANIME.villainess,
  ANIME['dangers-in-my-heart'],
  ANIME['chainsaw-man'],
  ANIME.kaguya,
  ANIME['solo-leveling'],
  ANIME.haikyuu,
  ANIME['the-wind-rises']
];

/** Порядок важен: grid раскладывает элементы построчно, а в макете две колонки */
export const LATEST_UPDATES: AnimeUpdate[] = [
  { anime: ANIME['demon-slayer'], season: 3, episode: 6, publishedAt: '30 минут назад' },
  { anime: ANIME['kamisama-hajimemashita'], season: 2, episode: 6, publishedAt: '3 часа назад' },
  { anime: ANIME['solo-leveling'], season: 1, episode: 9, publishedAt: '1 час назад' },
  { anime: ANIME['one-piece'], season: 1, episode: 104, publishedAt: '5 часов назад' },
  { anime: ANIME['jujutsu-kaisen'], season: 2, episode: 12, publishedAt: '2 часа назад' },
  { anime: ANIME['tokyo-revengers'], season: 2, episode: 6, publishedAt: '6 часов назад' }
];

/** Плоский список для поиска по каталогу */
export const CATALOG: Anime[] = Object.values(ANIME);
