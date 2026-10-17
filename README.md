# 📍 Yaqin — Yaqin atrofdagi bepul imkoniyatlar va jamoat maskanlari xaritasi

**Yaqin** — fuqarolarga o'zlariga yaqin atrofdagi bepul kurslar, kutubxonalar, ochiq sport maydonchalari va chiqindi/qayta ishlash punktlarini oson topish, ular haqidagi to'liq ma'lumotlarni ko'rish va jamoatchilik asosida yangi joylar taklif qilish imkonini beruvchi zamonaviy, tezkor va ko'p tilli veb-platforma.

Loyiha faqat toza **HTML5**, **CSS3** va **JavaScript (Vanilla JS)** hamda ochiq **Leaflet.js / OpenStreetMap** asosida yaratilgan.

---

## 🌟 Asosiy Imkoniyatlar

1. **4 ta asosiy ijtimoiy kategoriya:**
   - 🎓 **Bepul Kurslar va Ta'lim:** Yoshlar texnoparki, IT Park bepul darslari, bolalar ijodiyot to'garaklari va Speaking club'lar.
   - 📚 **Kutubxonalar va Mutolaa maskanlari:** Alisher Navoiy nomidagi Milliy kutubxona, Respublika Bolalar kutubxonasi, ochiq havoda mutolaa va Bookcrossing maskanlari.
   - ⚽ **Sport & Vorkaut maydonlari:** Ecopark vorkaut va yugurish yo'lakchalari, talabalar shaharchasi sport maydonlari, Anhor bo'yidagi ochiq trenajorlar.
   - ♻️ **Chiqindi & Qayta ishlash eko-punktlari:** Saralangan plastik, qog'oz, alyuminiy, ishlatilgan batareyalar va shisha qabul qilish punktlari.

2. **Interaktiv Xarita (Leaflet.js + CartoDB/OpenStreetMap):**
   - Har bir toifa uchun maxsus rang va SVG ikonkalarga ega markerlar.
   - Marker bosilganda tezkor ma'lumot popupi va bir zumda yo'nalish olish.
   - Foydalanuvchi geolokatsiyasini aniqlash ("Mening joylashuvim") va masofani hisoblash (km / m).
   - Yangi joy taklif qilishda xaritani bosib aniq koordinatani tanlash imkoniyati.

3. **Filtrlash va Tezkor Qidiruv:**
   - Real-vaqtda qidiruv (nomi, manzili, tavsifi bo'yicha).
   - "Hozir ochiq" (Open now) filtri.
   - "100% Bepul" (Free only) filtri.
   - "Menga eng yaqin" bo'yicha avtomatik saralash.

4. **Ko'p tillilik (Multi-language — i18n):**
   - 🇺🇿 **O'zbekcha (Lotin)**
   - 🇷🇺 **Русский**
   - 🇬🇧 **English**
   - Barcha matnlar, kategoriyalar, qulayliklar va joy tavsiflari 3 tilda to'liq taqdim etiladi.

5. **Jamoatchilik asosida ma'lumotlarni yangilash (Crowdsourcing):**
   - Foydalanuvchilar mavjud joy ma'lumotlarini to'g'rilash yoki yangi maskan taklif qilishlari mumkin.
   - Yangi taklif kiritilganda, u darhol mahalliy xotirada (`localStorage`) saqlanadi va xaritada **"Foydalanuvchi taklifi (Ko'rib chiqilmoqda)"** maxsus nishoni bilan paydo bo'ladi.

6. **Shaffoflik va Haqiqiylik (Transparency & Trust):**
   - Saytda ma'lumotlar ommaviy ochiq manbalar va jamoat namunasi asosida tuzilganligi ochiq bildirilgan.
   - Har bir maskanning tasdiqlanganlik holati va manbasi aniq ko'rsatiladi.

7. **Zamonaviy va Responsive Dizayn:**
   - Tungi (Dark) va Kunduzgi (Light) rejimlar.
   - Kompyuterda qulay ikki ustunli Split-view (ro'yxat + xarita).
   - Mobil qurilmalarda suzuvchi almashtirgich (Map/List floating toggle) orqali juda qulay foydalanish.

---

## 🚀 Qanday ishga tushiriladi?

Hech qanday o'rnatish yoki murakkab server talab qilinmaydi:
1. Loyiha papkasidagi `index.html` faylini istalgan zamonaviy veb-brauzerda (Chrome, Edge, Firefox, Safari) oching.
2. Yoki VS Code Live Server / oddiy lokal server orqali ishga tushiring.

---

## 📁 Fayllar tuzilishi

```text
├── index.html         - Asosiy HTML sahifa va modallar
├── css/
│   └── style.css      - Zamonaviy stillar, glassmorphism, responsive va tema o'zgaruvchilari
├── js/
│   ├── data.js        - Joylar ma'lumotlar bazasi (3 tilda, koordinatalar, ish vaqti, narx)
│   ├── i18n.js        - Ko'p tillilik lug'ati va tarjima menejeri
│   └── app.js         - Xarita, qidiruv, geolokatsiya, modallar va taklif yuborish mantig'i
└── README.md          - Loyiha hujjati
```
