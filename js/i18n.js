/**
 * Yaqin - Ko'p tillilik (i18n) lug'ati va tarjima moduli
 * Qo'llab-quvvatlanadigan tillar: O'zbekcha (uz), Ruscha (ru), Inglizcha (en)
 */

const TRANSLATIONS = {
  uz: {
    appTitle: "Yaqin — Mahalliy Bepul Kurslar, Kutubxonalar va Eko-punktlar",
    tagline: "Sizga eng yaqin bepul imkoniyatlar va jamoat maskanlari xaritasi",
    searchPlaceholder: "Joy nomi, manzil yoki kalit so'z bo'yicha qidiruv...",
    filterAll: "Barchasi",
    filterCourses: "🎓 Bepul Kurslar",
    filterLibraries: "📚 Kutubxonalar",
    filterSports: "⚽ Sport & Vorkaut",
    filterWaste: "♻️ Chiqindi & Eko-punkt",
    filterOnlyOpen: "Hozir ochiq",
    filterFreeOnly: "100% Bepul",
    filterNearMe: "Menga eng yaqin",
    locatingBtn: "Joylashuvimni aniqlash",
    locatingActive: "Joylashuv aniqlandi",
    locatingError: "Joylashuvni aniqlab bo'lmadi",
    suggestBtn: "+ Joy qo'shish / Yangilash",
    foundCount: "{count} ta maskan topildi",
    noResults: "Hech qanday maskan topilmadi",
    noResultsHint: "Qidiruv so'zini yoki filtrlarni o'zgartirib ko'ring.",
    openNow: "Ochiq",
    closedNow: "Yopiq",
    workingHours: "Ish vaqti",
    price: "Narxi",
    free: "Bepul",
    address: "Manzil",
    features: "Qulayliklar",
    contacts: "Aloqa",
    getDirections: "Marshrut olish",
    details: "Batafsil",
    suggestUpdate: "Tahrir taklif qilish",
    share: "Ulashish",
    copied: "Havola nusxalandi!",
    distanceKm: "km uzoqlikda",
    distanceM: "m uzoqlikda",
    mapView: "Xarita",
    listView: "Ro'yxat",
    themeToggle: "Mavzu",
    
    // Disclaimer
    disclaimerTitle: "Shaffoflik va ochiq ma'lumotlar:",
    disclaimerText: "Saytdagi ma'lumotlar ommaviy ochiq manbalar asosida tuzilgan va jamoatchilik tomonidan tekshiriladi. Ma'lumotlarni soxta ravishda mutlaq rasmiy deb ko'rsatmaymiz. O'zgarishlarni birgalikda to'ldirishimiz mumkin!",
    disclaimerClose: "Tushundim",

    // Features
    feat_wifi: "Bepul Wi-Fi",
    feat_wheelchair: "Imkoniyati cheklanganlar uchun pandus",
    feat_computers: "Kompyuter va internet zali",
    feat_mentorship: "Mentorlik & yo'l-yo'riq",
    feat_ac: "Konditsioner",
    feat_coworking: "Erkin kovorking zonasi",
    feat_parking: "Avtoturargoh",
    feat_cafeteria: "Oshxona / Bufet",
    feat_quiet_zone: "Tinch mutolaa zali",
    feat_kids_zone: "Bolalar burchagi",
    feat_events: "Madaniy tadbirlar",
    feat_open_air: "Ochiq osmon ostida",
    feat_bench: "O'rindiqlar va soyabon",
    feat_shade: "Soyali xushmanzara hudud",
    feat_workout_bars: "Turniket va bruslar",
    feat_running_track: "Yugurish yo'lagi",
    feat_lighting: "Kechki yoritish chiroqlari",
    feat_restroom: "Hojatxona mavjud",
    feat_water: "Ichimlik suvi fontani",
    feat_basketball_ring: "Basketbol halqasi",
    feat_scenic_view: "Kanal bo'yi manzarasi",
    feat_plastic: "Plastik butilkalar (PET)",
    feat_paper: "Qog'oz va makulatura",
    feat_cans: "Alyuminiy bankalar",
    feat_batteries: "Ishlatilgan batareyalar",
    feat_e_waste: "Kichik elektron chiqindilar",
    feat_outdoor_access: "Ko'cha qutisi (24/7)",
    feat_glass: "Shisha idishlar",
    feat_truck_access: "Yuk mashinasi uchun kirish",

    // Modal Suggest
    modalTitle: "Ma'lumotni yangilash yoki Yangi maskan qo'shish",
    modalSubtitle: "Yaqin atrofdagi bepul va jamoat joylarini boyitishga hissa qo'shing",
    proposalType: "Taklif turi",
    proposalExisting: "Mavjud joy ma'lumotini to'g'rilash",
    proposalNew: "Yangi jamoat joyini qo'shish",
    selectPlace: "Qaysi joy haqida?",
    placeName: "Joy nomi",
    placeCategory: "Kategoriya",
    placeAddress: "Aniq manzil yoki mo'ljal",
    placeHours: "Ish vaqti",
    placePrice: "Narx / Foydalanish sharti",
    placeContacts: "Aloqa (Telefon / Telegram / Sayt)",
    placeChanges: "Nima o'zgardi yoki qo'shimcha ma'lumot:",
    placePinHint: "Maslahat: Koordinatani aniq belgilash uchun xaritadan nuqtani bosing",
    userName: "Ismingiz (ixtiyoriy)",
    userContact: "Bog'lanish uchun telefon yoki Telegram (ixtiyoriy)",
    submitBtn: "Taklifni yuborish",
    closeBtn: "Yopish",
    successAlertTitle: "Rahmat! Taklifingiz qabul qilindi",
    successAlertMsg: "Siz yuborgan ma'lumot tekshiruv uchun saqlandi va saytda tez orada aks ettiriladi.",
    
    // Status
    userAddedBadge: "Foydalanuvchi taklifi (Ko'rib chiqilmoqda)",
    verifiedBadge: "Tekshirilgan",

    // Map buttons
    yandexMaps: "Yandex Xarita",
    googleMaps: "Google Maps",
    myLocationMarker: "Siz shu yerdasiz"
  },

  ru: {
    appTitle: "Yaqin — Бесплатные курсы, библиотеки и эко-пункты рядом",
    tagline: "Интерактивная карта ближайших бесплатных возможностей и общественных мест",
    searchPlaceholder: "Поиск по названию, адресу или ключевому слову...",
    filterAll: "Все",
    filterCourses: "🎓 Бесплатные курсы",
    filterLibraries: "📚 Библиотеки",
    filterSports: "⚽ Спорт и воркаут",
    filterWaste: "♻️ Пункты приема вторсырья",
    filterOnlyOpen: "Сейчас открыто",
    filterFreeOnly: "100% Бесплатно",
    filterNearMe: "Рядом со мной",
    locatingBtn: "Определить локацию",
    locatingActive: "Локация определена",
    locatingError: "Не удалось определить",
    suggestBtn: "+ Добавить / Обновить место",
    foundCount: "Найдено объектов: {count}",
    noResults: "Ничего не найдено",
    noResultsHint: "Попробуйте изменить поисковый запрос или фильтры.",
    openNow: "Открыто",
    closedNow: "Закрыто",
    workingHours: "Время работы",
    price: "Стоимость",
    free: "Бесплатно",
    address: "Адрес",
    features: "Удобства",
    contacts: "Контакты",
    getDirections: "Маршрут",
    details: "Подробнее",
    suggestUpdate: "Предложить правку",
    share: "Поделиться",
    copied: "Ссылка скопирована!",
    distanceKm: "км от вас",
    distanceM: "м от вас",
    mapView: "Карта",
    listView: "Список",
    themeToggle: "Тема",
    
    // Disclaimer
    disclaimerTitle: "Прозрачность и открытые данные:",
    disclaimerText: "Информация собрана из открытых источников и модерируется сообществом. Мы не выдаем эти данные за официальный реестр госорганов. Пожалуйста, помогайте нам поддерживать актуальность через форму правок!",
    disclaimerClose: "Понятно",

    // Features
    feat_wifi: "Бесплатный Wi-Fi",
    feat_wheelchair: "Пандус для колясок",
    feat_computers: "Компьютерный зал с интернетом",
    feat_mentorship: "Наставники и менторы",
    feat_ac: "Кондиционер",
    feat_coworking: "Свободная зона коворкинга",
    feat_parking: "Парковка",
    feat_cafeteria: "Буфет / Кафетерий",
    feat_quiet_zone: "Тихий читальный зал",
    feat_kids_zone: "Детская игровая зона",
    feat_events: "Культурные мероприятия",
    feat_open_air: "На открытом воздухе",
    feat_bench: "Скамейки и навес",
    feat_shade: "Тенистая территория",
    feat_workout_bars: "Турники и брусья",
    feat_running_track: "Беговая дорожка",
    feat_lighting: "Вечернее освещение",
    feat_restroom: "Общественный туалет",
    feat_water: "Питьевой фонтанчик",
    feat_basketball_ring: "Баскетбольное кольцо",
    feat_scenic_view: "Вид на набережную канала",
    feat_plastic: "Пластиковые бутылки (PET)",
    feat_paper: "Макулатура и картон",
    feat_cans: "Алюминиевые банки",
    feat_batteries: "Отработанные батарейки",
    feat_e_waste: "Мелкие электронные отходы",
    feat_outdoor_access: "Уличный бокс (24/7)",
    feat_glass: "Стеклянная тара",
    feat_truck_access: "Подъезд для транспорта",

    // Modal Suggest
    modalTitle: "Обновить данные или предложить новое место",
    modalSubtitle: "Помогите развитию общественной базы бесплатных локаций",
    proposalType: "Тип обращения",
    proposalExisting: "Исправить информацию о существующем месте",
    proposalNew: "Добавить новое общественное место",
    selectPlace: "О каком месте речь?",
    placeName: "Название места",
    placeCategory: "Категория",
    placeAddress: "Точный адрес или ориентир",
    placeHours: "Часы работы",
    placePrice: "Условия входа / стоимость",
    placeContacts: "Контакты (Телефон / Telegram / Сайт)",
    placeChanges: "Что изменилось или комментарий:",
    placePinHint: "Совет: Выберите точные координаты кликом по интерактивной карте",
    userName: "Ваше имя (необязательно)",
    userContact: "Телефон или Telegram (необязательно)",
    submitBtn: "Отправить предложение",
    closeBtn: "Закрыть",
    successAlertTitle: "Спасибо! Предложение принято",
    successAlertMsg: "Ваши данные сохранены и будут проверены сообществом.",
    
    // Status
    userAddedBadge: "Предложено пользователем (На проверке)",
    verifiedBadge: "Проверено",

    // Map buttons
    yandexMaps: "Яндекс Карты",
    googleMaps: "Google Карты",
    myLocationMarker: "Вы находитесь здесь"
  },

  en: {
    appTitle: "Yaqin — Free Courses, Libraries & Eco Drop-offs Nearby",
    tagline: "Interactive map of free community resources, spots & spaces near you",
    searchPlaceholder: "Search by place name, address, or keyword...",
    filterAll: "All",
    filterCourses: "🎓 Free Courses",
    filterLibraries: "📚 Libraries",
    filterSports: "⚽ Sports & Workout",
    filterWaste: "♻️ Recycling & Eco-points",
    filterOnlyOpen: "Open now",
    filterFreeOnly: "100% Free",
    filterNearMe: "Nearest to me",
    locatingBtn: "Find my location",
    locatingActive: "Location acquired",
    locatingError: "Unable to locate",
    suggestBtn: "+ Add / Update Place",
    foundCount: "{count} places found",
    noResults: "No places found",
    noResultsHint: "Try adjusting your search query or filters.",
    openNow: "Open",
    closedNow: "Closed",
    workingHours: "Working hours",
    price: "Price",
    free: "Free",
    address: "Address",
    features: "Amenities",
    contacts: "Contacts",
    getDirections: "Directions",
    details: "Details",
    suggestUpdate: "Suggest edit",
    share: "Share",
    copied: "Link copied to clipboard!",
    distanceKm: "km away",
    distanceM: "m away",
    mapView: "Map",
    listView: "List",
    themeToggle: "Theme",
    
    // Disclaimer
    disclaimerTitle: "Transparency & Open Data Notice:",
    disclaimerText: "Data on this platform is curated from open public sources and crowdsourced reviews. We do not claim this as an official government registry. Help us keep records truthful and fresh by submitting edits!",
    disclaimerClose: "Understood",

    // Features
    feat_wifi: "Free Wi-Fi",
    feat_wheelchair: "Wheelchair accessible",
    feat_computers: "Computer lab & internet",
    feat_mentorship: "Mentors & guidance",
    feat_ac: "Air conditioning",
    feat_coworking: "Free study / coworking area",
    feat_parking: "Parking available",
    feat_cafeteria: "Cafeteria / Snack bar",
    feat_quiet_zone: "Quiet study hall",
    feat_kids_zone: "Kids creative space",
    feat_events: "Cultural meetings & talks",
    feat_open_air: "Open-air pavilion",
    feat_bench: "Benches and shaded canopy",
    feat_shade: "Scenic shaded garden",
    feat_workout_bars: "Calisthenics pull-up bars",
    feat_running_track: "Padded running loop",
    feat_lighting: "Evening floodlights",
    feat_restroom: "Public restroom",
    feat_water: "Drinking water fountain",
    feat_basketball_ring: "Streetball basketball hoop",
    feat_scenic_view: "Canal embankment view",
    feat_plastic: "PET plastic bottles",
    feat_paper: "Scrap paper & cardboard",
    feat_cans: "Aluminum beverage cans",
    feat_batteries: "Spent household batteries",
    feat_e_waste: "Small electrical accessories",
    feat_outdoor_access: "24/7 Street drop box",
    feat_glass: "Glass bottles and cullet",
    feat_truck_access: "Spacious vehicle unloading",

    // Modal Suggest
    modalTitle: "Suggest an Update or Add a Place",
    modalSubtitle: "Help improve access to public resources and free opportunities",
    proposalType: "Submission type",
    proposalExisting: "Correct an existing spot",
    proposalNew: "Add a new public spot",
    selectPlace: "Which place?",
    placeName: "Place title",
    placeCategory: "Category",
    placeAddress: "Address or nearby landmark",
    placeHours: "Hours of operation",
    placePrice: "Pricing / admission rule",
    placeContacts: "Contacts (Phone / Telegram / Web)",
    placeChanges: "What changed or notes:",
    placePinHint: "Tip: Click directly on the interactive map to select exact coordinates",
    userName: "Your name (optional)",
    userContact: "Phone or Telegram (optional)",
    submitBtn: "Submit Proposal",
    closeBtn: "Close",
    successAlertTitle: "Thank you! Submission received",
    successAlertMsg: "Your proposal has been saved and will be reviewed by the community.",
    
    // Status
    userAddedBadge: "User submitted (Pending review)",
    verifiedBadge: "Verified",

    // Map buttons
    yandexMaps: "Yandex Maps",
    googleMaps: "Google Maps",
    myLocationMarker: "You are here"
  }
};

// Til holatini boshqaruvchi obyekt
const I18n = {
  currentLang: localStorage.getItem("yaqin_language") || "uz",

  setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = "uz";
    this.currentLang = lang;
    localStorage.setItem("yaqin_language", lang);
    document.documentElement.lang = lang;
    this.applyTranslations();
    // Hodisa tarqatish
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
  },

  t(key, replacements = {}) {
    const langObj = TRANSLATIONS[this.currentLang] || TRANSLATIONS.uz;
    let text = langObj[key] || TRANSLATIONS.uz[key] || key;
    for (const [k, v] of Object.entries(replacements)) {
      text = text.replace(new RegExp(`\\{${k}\\}`, "g"), v);
    }
    return text;
  },

  getLocalized(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[this.currentLang] || obj.uz || obj.en || "";
  },

  applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = this.t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", this.t(key));
    });

    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.getAttribute("data-i18n-title");
      el.setAttribute("title", this.t(key));
    });

    // Til tugmasi holatini yangilash
    document.querySelectorAll(".lang-btn").forEach(btn => {
      if (btn.getAttribute("data-lang") === this.currentLang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }
};
