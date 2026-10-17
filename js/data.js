/**
 * Yaqin - Mahalliy bepul va jamoat maskanlari ma'lumotlar bazasi
 * Diqqat: Obyektlar ommaviy ochiq ma'lumotlar va namunaviy jamoat maskanlari asosida shakllantirilgan.
 * Ma'lumotlar shaffof tarzda jamoatchilik tekshiruvi ostida saqlanadi.
 */

const PLACES_DATA = [
  // --- BEPUL KURSLAR VA TA'LIM (COURSES) ---
  {
    id: "course-1",
    category: "courses",
    coords: [41.3385, 69.3345],
    name: {
      uz: "Toshkent Yoshlar Texnoparki - Bepul kurslar",
      ru: "Ташкентский молодежный технопарк - Бесплатные курсы",
      en: "Tashkent Youth Technopark - Free Courses"
    },
    address: {
      uz: "Mirzo Ulug'bek tumani, Universitet ko'chasi, 7-uy",
      ru: "Мирзо-Улугбекский район, ул. Университетская, 7",
      en: "Mirzo Ulugbek dist., Universitet St, 7"
    },
    workingHours: {
      uz: "Dushanba - Shanba: 09:00 - 18:00 (Yakshanba: Dam olish)",
      ru: "Пн - Сб: 09:00 - 18:00 (Вс: Выходной)",
      en: "Mon - Sat: 09:00 - 18:00 (Sun: Closed)"
    },
    openNow: true,
    price: {
      uz: "100% Bepul (Yoshlar uchun)",
      ru: "100% Бесплатно (Для молодежи)",
      en: "100% Free (For youth)"
    },
    isFree: true,
    phone: "+998 71 200 00 11",
    website: "https://youthtechnopark.uz",
    telegram: "@tashkentyouthtechnopark",
    features: ["wifi", "wheelchair", "computers", "mentorship"],
    description: {
      uz: "Yoshlar uchun robototexnika, 3D modellashtirish, dasturlash asoslari va innovatsion loyihalar bo'yicha bepul amaliy to'garaklar va laboratoriyalar.",
      ru: "Бесплатные практические кружки и лаборатории по робототехнике, 3D-моделированию, программированию и стартапам.",
      en: "Free workshops and lab sessions for youth covering robotics, 3D modeling, coding fundamentals, and startup development."
    },
    verifiedStatus: {
      uz: "Jamoat tekshiruvidan o'tgan namunaviy ma'lumot",
      ru: "Проверенные общественные образцовые данные",
      en: "Community verified public sample data"
    }
  },
  {
    id: "course-2",
    category: "courses",
    coords: [41.3111, 69.2797],
    name: {
      uz: "IT Park Ochiq Dasturlash & Speaking Club",
      ru: "IT Park Открытые уроки программирования & Speaking Club",
      en: "IT Park Open Coding & Speaking Club"
    },
    address: {
      uz: "Yashnobod tumani, Maxtumquli ko'chasi, IT-Park majmuasi",
      ru: "Яшнабадский район, ул. Махтумкули, комплекс IT Park",
      en: "Yashnabad dist., Makhtumkuli St, IT Park Complex"
    },
    workingHours: {
      uz: "Har shanba va yakshanba: 14:00 - 18:00",
      ru: "Каждую субботу и воскресенье: 14:00 - 18:00",
      en: "Every Saturday & Sunday: 14:00 - 18:00"
    },
    openNow: true,
    price: {
      uz: "Bepul (Ro'yxatdan o'tish orqali)",
      ru: "Бесплатно (По предварительной записи)",
      en: "Free (Prior registration required)"
    },
    isFree: true,
    phone: "+998 71 209 11 99",
    website: "https://it-park.uz",
    telegram: "@itpark_uz",
    features: ["wifi", "ac", "coworking", "wheelchair"],
    description: {
      uz: "Dam olish kunlari o'tkaziladigan ochiq master-klasslar, bepul ingliz tili muloqot klubi (Speaking Club) va veb-dasturlashga kirish seminarlari.",
      ru: "Выходные открытые мастер-классы, бесплатный клуб разговорного английского (Speaking Club) и семинары по веб-разработке.",
      en: "Weekend open workshops, free English speaking club meetings, and introductory web development seminars."
    },
    verifiedStatus: {
      uz: "Ochiq jamoat dasturi",
      ru: "Открытая общественная программа",
      en: "Open public community program"
    }
  },
  {
    id: "course-3",
    category: "courses",
    coords: [41.2858, 69.2039],
    name: {
      uz: "Chilonzor 'Barkamol Avlod' Bolalar Markazi",
      ru: "Детский центр 'Баркамол авлод' Чиланзар",
      en: "Chilanzar 'Barkamol Avlod' Children Center"
    },
    address: {
      uz: "Chilonzor tumani, 9-mavze, Katta Qa'ni ko'chasi",
      ru: "Чиланзарский район, 9-й квартал, ул. Катта Каъни",
      en: "Chilanzar dist., Block 9, Katta Qani St"
    },
    workingHours: {
      uz: "Dushanba - Juma: 10:00 - 17:30",
      ru: "Пн - Пт: 10:00 - 17:30",
      en: "Mon - Fri: 10:00 - 17:30"
    },
    openNow: false,
    price: {
      uz: "Bepul (Maktab o'quvchilari uchun)",
      ru: "Бесплатно (Для школьников)",
      en: "Free (For schoolchildren)"
    },
    isFree: true,
    phone: "+998 71 277 44 20",
    website: "https://barkamolavlod.uz",
    telegram: "@barkamolavlod_chilonzor",
    features: ["parking", "wheelchair"],
    description: {
      uz: "Maktab yoshidagi bolalar uchun bepul tasviriy san'at, shaxmat, qo'l mehnati va boshlang'ich informatika to'garaklari.",
      ru: "Бесплатные кружки ИЗО, шахмат, прикладного искусства и начальной информатики для детей школьного возраста.",
      en: "Free extracurricular clubs for school students: fine arts, chess, crafts, and introductory computer literacy."
    },
    verifiedStatus: {
      uz: "Davlat ijtimoiy maskani",
      ru: "Государственное соц. учреждение",
      en: "State public center"
    }
  },

  // --- KUTUBXONALAR (LIBRARIES) ---
  {
    id: "lib-1",
    category: "libraries",
    coords: [41.3168, 69.2778],
    name: {
      uz: "Alisher Navoiy nomidagi O'zbekiston Milliy Kutubxonasi",
      ru: "Национальная библиотека Узбекистана им. Алишера Навои",
      en: "National Library of Uzbekistan named after Alisher Navoi"
    },
    address: {
      uz: "Yunusobod tumani, Navoiy ko'chasi, 1-uy",
      ru: "Юнусабадский район, ул. Навои, 1",
      en: "Yunusabad dist., Navoi St, 1"
    },
    workingHours: {
      uz: "Dushanba - Shanba: 08:00 - 21:00 (Yakshanba: 09:00 - 17:00)",
      ru: "Пн - Сб: 08:00 - 21:00 (Вс: 09:00 - 17:00)",
      en: "Mon - Sat: 08:00 - 21:00 (Sun: 09:00 - 17:00)"
    },
    openNow: true,
    price: {
      uz: "Mutolaa zallari bepul (A'zolik kartasi bilan)",
      ru: "Читальные залы бесплатно (По читательскому билету)",
      en: "Reading halls free (With member card)"
    },
    isFree: true,
    phone: "+998 71 232 83 94",
    website: "https://natlib.uz",
    telegram: "@natlibuz",
    features: ["wifi", "wheelchair", "computers", "cafeteria", "quiet_zone"],
    description: {
      uz: "Markaziy Osiyodagi eng yirik kitob fondiga ega zamonaviy kutubxona. Barcha o'quv zallari, ilmiy elektron bazalar va Wi-Fi zonalari bepul foydalanishga ochiq.",
      ru: "Крупнейшая библиотека региона с богатыми фондами. Бесплатный доступ к читальным залам, академическим базам данных и тихому коворкингу.",
      en: "The primary national library with extensive archives, free modern study halls, academic digital subscriptions, and quiet reading spaces."
    },
    verifiedStatus: {
      uz: "Davlat bosh kutubxonasi",
      ru: "Главная гос. библиотека",
      en: "Primary state library"
    }
  },
  {
    id: "lib-2",
    category: "libraries",
    coords: [41.3134, 69.2762],
    name: {
      uz: "Respublika Bolalar Kutubxonasi",
      ru: "Республиканская детская библиотека",
      en: "Republican Children's Library"
    },
    address: {
      uz: "Mirobod tumani, Yahyo G'ulomov ko'chasi, 47-uy",
      ru: "Мирабадский район, ул. Яхъё Гулямова, 47",
      en: "Mirobod dist., Yahyo Gulyamov St, 47"
    },
    workingHours: {
      uz: "Har kuni: 09:00 - 21:00",
      ru: "Ежедневно: 09:00 - 21:00",
      en: "Everyday: 09:00 - 21:00"
    },
    openNow: true,
    price: {
      uz: "Kirish mutlaqo bepul",
      ru: "Вход абсолютно свободный и бесплатный",
      en: "Admission completely free"
    },
    isFree: true,
    phone: "+998 71 233 11 05",
    website: "https://rdblibrary.uz",
    telegram: "@rdblibrary",
    features: ["wifi", "wheelchair", "ac", "kids_zone", "events"],
    description: {
      uz: "Yaqinda to'liq qayta ta'mirlangan tarixiy zamonaviy jamoat maskani. Bolalar va kattalar uchun qulay mutolaa burchaklari, amfiteatr va bepul kitobxonlik uchrashuvlari mavjud.",
      ru: "Недавно реконструированное современное культурное пространство. Уютные залы для чтения, мастер-классы и амфитеатр со свободным входом.",
      en: "Recently restored architectural landmark turned vibrant modern community library with free spaces for children, youth, and study clubs."
    },
    verifiedStatus: {
      uz: "Madaniy meros va ochiq kutubxona",
      ru: "Культурное наследие и открытая библиотека",
      en: "Cultural landmark & public library"
    }
  },
  {
    id: "lib-3",
    category: "libraries",
    coords: [41.3282, 69.2415],
    name: {
      uz: "G'afur G'ulom nomidagi Mutolaa Bog'i & Kitob Almashinuvi",
      ru: "Читательский павильон и буккроссинг им. Гафура Гуляма",
      en: "Gafur Gulyam Reading Pavilion & Bookcrossing"
    },
    address: {
      uz: "Chilonzor tumani, Bo'zsuv bo'yi, G'afur G'ulom istirohat bog'i hududi",
      ru: "Чиланзарский район, парк им. Гафура Гуляма",
      en: "Chilanzar dist., Gafur Gulyam Park area"
    },
    workingHours: {
      uz: "Har kuni: 08:00 - 22:00",
      ru: "Ежедневно: 08:00 - 22:00",
      en: "Daily: 08:00 - 22:00"
    },
    openNow: true,
    price: {
      uz: "100% Bepul / Kitob almashish (Bookcrossing)",
      ru: "100% Бесплатно / Буккроссинг",
      en: "100% Free / Book Swap"
    },
    isFree: true,
    phone: "+998 90 123 45 67",
    website: "",
    telegram: "@tashkent_bookcrossing",
    features: ["open_air", "bench", "shade", "wheelchair"],
    description: {
      uz: "Bog' hududidagi ochiq shinam mutolaa ayvoni. Har kim o'z kitobini qoldirib, boshqa kitobni bepul olib o'qishi mumkin bo'lgan ochiq xalqona kitob javoni.",
      ru: "Открытый читательский павильон в парке со свободным шкафом для буккроссинга. Читайте на свежем воздухе и делитесь книгами.",
      en: "Open-air park gazebo with a community bookcrossing shelf where visitors can read outdoors, borrow and exchange books freely."
    },
    verifiedStatus: {
      uz: "Jamoatchilik tashabbusi",
      ru: "Общественная инициатива",
      en: "Community initiative"
    }
  },

  // --- SPORT MAYDONCHALARI (SPORTS) ---
  {
    id: "sport-1",
    category: "sports",
    coords: [41.3129, 69.2974],
    name: {
      uz: "Ecopark Workout & Yugurish Majmuasi",
      ru: "Экопарк: Зона воркаута и беговые дорожки",
      en: "Ecopark Workout Zone & Jogging Tracks"
    },
    address: {
      uz: "Mirzo Ulug'bek tumani, O'zbekiston ovozi ko'chasi, 1-uy",
      ru: "Мирзо-Улугбекский район, ул. Узбекистон овози, 1",
      en: "Mirzo Ulugbek dist., Uzbekiston ovozi St, 1"
    },
    workingHours: {
      uz: "Har kuni: 06:00 - 23:00",
      ru: "Ежедневно: 06:00 - 23:00",
      en: "Everyday: 06:00 - 23:00"
    },
    openNow: true,
    price: {
      uz: "Bog'ga kirish va trenajorlar bepul",
      ru: "Вход в парк и тренажеры бесплатные",
      en: "Park entry and outdoor fitness free"
    },
    isFree: true,
    phone: "+998 71 200 00 23",
    website: "",
    telegram: "@ecopark_tashkent",
    features: ["workout_bars", "running_track", "lighting", "restroom", "water"],
    description: {
      uz: "Ochiq havoda zamonaviy Street Workout turniketlari, barlar, maxsus yugurish yo'lakchasi va keksalar uchun kardio-trenajorlar.",
      ru: "Качественная площадка для уличного воркаута (турники, брусья), амортизирующая беговая дорожка и уличные тренажеры.",
      en: "Modern outdoor calisthenics park, parallel bars, pull-up rigs, and cushioned running loops with evening lighting."
    },
    verifiedStatus: {
      uz: "Ommaviy shahar bog'i",
      ru: "Городской общественный парк",
      en: "Public city park"
    }
  },
  {
    id: "sport-2",
    category: "sports",
    coords: [41.3542, 69.2023],
    name: {
      uz: "Talabalar Shaharchasi Ochiq Streetball & Sport Maydonchasi",
      ru: "Студгородок: Открытая площадка для стритбола и спорта",
      en: "Campus Open Streetball & Outdoor Gym"
    },
    address: {
      uz: "Olmazor tumani, Talabalar shaharchasi, Universitet ko'chasi",
      ru: "Алмазарский район, Вузгородок, Университетская улица",
      en: "Almazar dist., Campus, Universitet St"
    },
    workingHours: {
      uz: "Har kuni: 06:30 - 22:00",
      ru: "Ежедневно: 06:30 - 22:00",
      en: "Daily: 06:30 - 22:00"
    },
    openNow: true,
    price: {
      uz: "Bepul jamoat maydonchasi",
      ru: "Бесплатная общественная площадка",
      en: "Free public court"
    },
    isFree: true,
    phone: "",
    website: "",
    telegram: "",
    features: ["basketball_ring", "workout_bars", "lighting"],
    description: {
      uz: "Aholi va talabalar uchun ochiq basketbol halqalari, mini-futbol darvozalari hamda metall turniketlar majmuasi. Barchaga erkin kirish imkoniyati.",
      ru: "Открытые баскетбольные кольца, ворота для мини-футбола и турники для жителей района и студентов. Свободный доступ.",
      en: "Free neighborhood streetball court and calisthenics area open to students and local residents around the clock."
    },
    verifiedStatus: {
      uz: "Jamoat sport zonasi",
      ru: "Общественная спортивная зона",
      en: "Community sports ground"
    }
  },
  {
    id: "sport-3",
    category: "sports",
    coords: [41.3045, 69.2392],
    name: {
      uz: "Anhor Bo'yi 'Workout & Yoga' Zallari",
      ru: "Набережная Анхор: Воркаут и йога-зона",
      en: "Ankhor Embankment: Workout & Yoga Spot"
    },
    address: {
      uz: "Shayxontohur tumani, Anhor kanali bo'yi sayilgohi",
      ru: "Шайхантахурский район, набережная канала Анхор",
      en: "Shaykhontohur dist., Ankhor promenade"
    },
    workingHours: {
      uz: "24/7 (Kechki chiroqlar soat 23:00 gacha)",
      ru: "Круглосуточно (Освещение до 23:00)",
      en: "24/7 (Lighting until 23:00)"
    },
    openNow: true,
    price: {
      uz: "Mutlaqo bepul",
      ru: "Абсолютно бесплатно",
      en: "Completely free"
    },
    isFree: true,
    phone: "",
    website: "",
    telegram: "",
    features: ["lighting", "scenic_view", "workout_bars", "wheelchair"],
    description: {
      uz: "Kanal bo'yidagi toza havoli sayilgohda joylashgan fitnes trenajorlari, cho'zilish (stretching) va ertalabki yoga uchun yog'och platformalar.",
      ru: "Тренажеры вдоль набережной канала, деревянные помосты для растяжки и утренней йоги на свежем воздухе.",
      en: "Waterfront fitness gear, stretching stations, and wooden platforms for morning yoga and brisk evening walks along the canal."
    },
    verifiedStatus: {
      uz: "Shahar sayilgohi",
      ru: "Городская набережная",
      en: "City promenade"
    }
  },

  // --- CHIQINDI VA QAYTA ISHLASH (WASTE & RECYCLING) ---
  {
    id: "waste-1",
    category: "waste",
    coords: [41.3094, 69.2815],
    name: {
      uz: "Eko-Punkt: Plastik, Qog'oz va Alyuminiy Qabul Maskanı",
      ru: "Эко-Пункт: Прием пластика, макулатуры и алюминия",
      en: "Eco-Point: Plastic, Paper & Aluminum Drop-off"
    },
    address: {
      uz: "Mirobod tumani, Nukus ko'chasi va Shahrisabz chorrahasi yaqinida",
      ru: "Мирабадский район, ориентир: перекресток улиц Нукус и Шахрисабз",
      en: "Mirobod dist., near Nukus & Shahrisabz intersection"
    },
    workingHours: {
      uz: "Dushanba - Shanba: 08:30 - 18:30",
      ru: "Пн - Сб: 08:30 - 18:30",
      en: "Mon - Sat: 08:30 - 18:30"
    },
    openNow: true,
    price: {
      uz: "Qabul bepul (Saralangan xomashyo)",
      ru: "Прием бесплатный (Раздельный сбор)",
      en: "Free drop-off (Sorted recyclables)"
    },
    isFree: true,
    phone: "+998 71 280 50 40",
    website: "https://hasharweek.uz",
    telegram: "@hasharweek_eko",
    features: ["plastic", "paper", "cans", "parking"],
    description: {
      uz: "Aholi tomonidan tozalab saralangan PET butilkalar, karton, makulatura va metall ichimlik idishlarini qayta ishlash korxonalariga topshirish uchun qabul qiluvchi eko-stansiya.",
      ru: "Эко-станция для раздельного сбора: чистый пластик (PET), макулатура, картон и алюминиевые банки для отправки на переработку.",
      en: "Community recycling drop-off hub accepting clean sorted PET bottles, cardboard, scrap paper, and aluminum beverage cans for recycling."
    },
    verifiedStatus: {
      uz: "Eko-jamoat stansiyasi",
      ru: "Эко-общественная станция",
      en: "Eco community hub"
    }
  },
  {
    id: "waste-2",
    category: "waste",
    coords: [41.2825, 69.2482],
    name: {
      uz: "E-Chiqindi & Ishlatilgan Batareykalar Utilizatsiya Qutisi",
      ru: "Бокс утилизации батареек и мелких электронных отходов",
      en: "Battery & Small E-Waste Disposal Drop-Box"
    },
    address: {
      uz: "Yakkasaroy tumani, Shota Rustaveli ko'chasi, 53-uy oldida",
      ru: "Яккасарайский район, ул. Шота Руставели, 53",
      en: "Yakkasaray dist., Shota Rustaveli St, 53"
    },
    workingHours: {
      uz: "24/7 (Ochiq ko'cha boksi)",
      ru: "Круглосуточно (Уличный эко-бокс)",
      en: "24/7 (Outdoor street drop box)"
    },
    openNow: true,
    price: {
      uz: "100% Bepul xavfsiz topshirish",
      ru: "100% Бесплатный безопасный прием",
      en: "100% Free safe disposal"
    },
    phone: "+998 71 255 12 34",
    website: "",
    telegram: "@eko_utilizatsiya_uz",
    features: ["batteries", "e_waste", "outdoor_access"],
    description: {
      uz: "Atrof-muhitni og'ir metallar bilan zaharlanishidan saqlash maqsadida maishiy ishlatilgan batareyalar, kichik akkumulyatorlar va telefon adapterlarini xavfsiz tashlash uchun mo'ljallangan maxsus metall konteyner.",
      ru: "Специальный защитный контейнер для безопасного сбора отработанных пальчиковых батареек, аккумуляторов и мелкой электроники.",
      en: "Dedicated secure drop box preventing soil contamination by accepting spent household batteries and small electrical accessories."
    },
    verifiedStatus: {
      uz: "Eko-xavfsizlik tashabbusi",
      ru: "Инициатива эко-безопасности",
      en: "Eco-safety initiative"
    }
  },
  {
    id: "waste-3",
    category: "waste",
    coords: [41.3255, 69.2155],
    name: {
      uz: "Uchtepa 'Eko-Makhsustrans' Saralash & Shisha Qabul Punkti",
      ru: "Учтепа 'Эко-Махсустранс': Сортировочный пункт и прием стеклотары",
      en: "Uchtepa 'Eco-Maxsustrans': Sorting & Glass Bottle Drop"
    },
    address: {
      uz: "Uchtepa tumani, Lutfiy ko'chasi, Farhod bozori orqa tomoni",
      ru: "Учтепинский район, ул. Лутфий, ориентир: позади Фархадского рынка",
      en: "Uchtepa dist., Lutfiy St, behind Farkhad Market"
    },
    workingHours: {
      uz: "Dushanba - Shanba: 07:00 - 17:00",
      ru: "Пн - Сб: 07:00 - 17:00",
      en: "Mon - Sat: 07:00 - 17:00"
    },
    openNow: true,
    price: {
      uz: "Bepul qabul / Ikkilamchi xomashyo",
      ru: "Бесплатный прием / Вторсырье",
      en: "Free drop / Recyclable materials"
    },
    phone: "+998 71 247 18 20",
    website: "https://maxsustrans.uz",
    telegram: "@maxsustrans_official",
    features: ["glass", "paper", "plastic", "truck_access"],
    description: {
      uz: "Shisha idishlar, siniq shisha bo'laklari, qog'oz va polietilen paketlarni alohida saralab topshirish imkoniyati mavjud bo'lgan hududiy sanitariya punkti.",
      ru: "Районный пункт раздельного сбора для стеклянных бутылок, стеклобоя, плотного картона и пленки.",
      en: "District sanitation station accepting glass containers, sorted cullet, scrap paper, and film plastic for reprocessing."
    },
    verifiedStatus: {
      uz: "Shahar xizmati filiali",
      ru: "Филиал городской службы",
      en: "Municipal service branch"
    }
  }
];

// Mahalliy saqlangan foydalanuvchi yangi takliflarini yuklash
function getStoredCustomPlaces() {
  try {
    const raw = localStorage.getItem("yaqin_custom_places");
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error("Local places parsing error:", e);
    return [];
  }
}

// Barcha joylarni (baza + foydalanuvchi takliflari) olish
function getAllPlaces() {
  const custom = getStoredCustomPlaces();
  return [...PLACES_DATA, ...custom];
}
