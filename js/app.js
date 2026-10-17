/**
 * Yaqin - Asosiy dastur mantig'i
 * Interaktiv xarita, qidiruv, filtrlash, geolokatsiya, modallar va takliflar
 */

// Ilova holati (State)
const AppState = {
  map: null,
  markersLayer: null,
  userLocation: null,
  userLocationMarker: null,
  places: [],
  selectedCategory: "all",
  searchQuery: "",
  filterOnlyOpen: false,
  filterFreeOnly: false,
  sortByDistance: false,
  activePlaceId: null,
  suggestMode: "existing", // "existing" or "new"
  tempSuggestMarker: null,
  mobileView: "list", // "list" or "map"
  theme: localStorage.getItem("yaqin_theme") || "light"
};

// Kategoriya ranglari va SVG ikonkalari
const CATEGORY_META = {
  courses: {
    labelKey: "filterCourses",
    color: "#4f46e5", // Indigo
    bgColor: "#e0e7ff",
    iconSvg: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>`
  },
  libraries: {
    labelKey: "filterLibraries",
    color: "#b45309", // Amber/Gold
    bgColor: "#fef3c7",
    iconSvg: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`
  },
  sports: {
    labelKey: "filterSports",
    color: "#059669", // Emerald
    bgColor: "#d1fae5",
    iconSvg: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  },
  waste: {
    labelKey: "filterWaste",
    color: "#0284c7", // Sky blue / Teal
    bgColor: "#e0f2fe",
    iconSvg: `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`
  }
};

// Dastur ishga tushganda
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initI18n();
  initData();
  initMap();
  initEventListeners();
  renderPlaces();
});

// Mavzuni boshqarish
function initTheme() {
  document.documentElement.setAttribute("data-theme", AppState.theme);
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      AppState.theme = AppState.theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", AppState.theme);
      localStorage.setItem("yaqin_theme", AppState.theme);
      updateMapTileLayer();
    });
  }
}

// Ko'p tillilikni sozlash
function initI18n() {
  I18n.applyTranslations();

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      I18n.setLanguage(lang);
    });
  });

  window.addEventListener("languageChanged", () => {
    renderPlaces();
    populateProposalSelect();
  });
}

// Baza ma'lumotlarini yuklash
function initData() {
  AppState.places = getAllPlaces();
}

// Leaflet Xaritasini yaratish
function initMap() {
  // Toshkent markazi koordinatalari
  const defaultCoords = [41.311081, 69.279737];
  
  AppState.map = L.map("map", {
    center: defaultCoords,
    zoom: 12,
    zoomControl: true
  });

  updateMapTileLayer();

  AppState.markersLayer = L.layerGroup().addTo(AppState.map);

  // Xaritani bosganda - agar taklif kiritish modali ochiq bo'lsa koordinatani belgilash
  AppState.map.on("click", (e) => {
    const modal = document.getElementById("suggest-modal");
    if (modal && modal.classList.contains("active")) {
      const { lat, lng } = e.latlng;
      const coordInput = document.getElementById("suggest-coords");
      if (coordInput) {
        coordInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
      }
      
      if (AppState.tempSuggestMarker) {
        AppState.map.removeLayer(AppState.tempSuggestMarker);
      }
      AppState.tempSuggestMarker = L.marker([lat, lng], {
        icon: L.divIcon({
          className: "suggest-map-pin",
          html: `<div style="background:#e11d48; width:20px; height:20px; border-radius:50%; border:3px solid #fff; box-shadow:0 0 10px rgba(0,0,0,0.4);"></div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        })
      }).addTo(AppState.map);
    }
  });
}

// Mavzuga mos Leaflet Tile Layer (Dark / Light)
let currentTileLayer = null;
function updateMapTileLayer() {
  if (!AppState.map) return;
  if (currentTileLayer) {
    AppState.map.removeLayer(currentTileLayer);
  }

  // Toza va zamonaviy OpenStreetMap / CartoDB Voyager tiles
  const isDark = AppState.theme === "dark";
  const tileUrl = isDark
    ? "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

  currentTileLayer = L.tileLayer(tileUrl, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19
  }).addTo(AppState.map);
}

// Hodisalarni ulash
function initEventListeners() {
  // Qidiruv maydoni
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value.trim().toLowerCase();
      renderPlaces();
    });
  }

  // Tozalash tugmasi
  const clearSearch = document.getElementById("clear-search");
  if (clearSearch) {
    clearSearch.addEventListener("click", () => {
      searchInput.value = "";
      AppState.searchQuery = "";
      renderPlaces();
      searchInput.focus();
    });
  }

  // Kategoriya tugmalari
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.selectedCategory = btn.getAttribute("data-category");
      renderPlaces();
    });
  });

  // Qo'shimcha filtrlar
  const filterOpen = document.getElementById("filter-open-now");
  if (filterOpen) {
    filterOpen.addEventListener("change", (e) => {
      AppState.filterOnlyOpen = e.target.checked;
      renderPlaces();
    });
  }

  const filterFree = document.getElementById("filter-free-only");
  if (filterFree) {
    filterFree.addEventListener("change", (e) => {
      AppState.filterFreeOnly = e.target.checked;
      renderPlaces();
    });
  }

  const sortDistance = document.getElementById("sort-distance");
  if (sortDistance) {
    sortDistance.addEventListener("change", (e) => {
      AppState.sortByDistance = e.target.checked;
      if (AppState.sortByDistance && !AppState.userLocation) {
        requestUserLocation(true);
      } else {
        renderPlaces();
      }
    });
  }

  // Joylashuvni aniqlash tugmasi
  const locateBtn = document.getElementById("locate-btn");
  if (locateBtn) {
    locateBtn.addEventListener("click", () => {
      requestUserLocation(false);
    });
  }

  // Shaffoflik bannerini yopish
  const disclaimerClose = document.getElementById("disclaimer-close");
  const disclaimerBanner = document.getElementById("disclaimer-banner");
  if (disclaimerClose && disclaimerBanner) {
    disclaimerClose.addEventListener("click", () => {
      disclaimerBanner.style.display = "none";
    });
  }

  // Mobil Xarita / Ro'yxat ko'rinishini almashtirish
  const viewToggleBtn = document.getElementById("mobile-view-toggle");
  if (viewToggleBtn) {
    viewToggleBtn.addEventListener("click", () => {
      toggleMobileView();
    });
  }

  // Taklif kiritish modali tugmalari
  const openSuggestBtn = document.getElementById("open-suggest-modal");
  if (openSuggestBtn) {
    openSuggestBtn.addEventListener("click", () => {
      openSuggestModal();
    });
  }

  const closeSuggestModalBtn = document.getElementById("close-suggest-modal");
  if (closeSuggestModalBtn) {
    closeSuggestModalBtn.addEventListener("click", closeSuggestModal);
  }

  // Taklif turi almashishi (Mavjud joy yoki yangi joy)
  document.querySelectorAll('input[name="proposal-type"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
      AppState.suggestMode = e.target.value;
      updateSuggestFormMode();
    });
  });

  // Taklif formasini yuborish
  const suggestForm = document.getElementById("suggest-form");
  if (suggestForm) {
    suggestForm.addEventListener("submit", handleSuggestSubmit);
  }

  // Tafsilotlar modalini yopish
  const closeDetailsModal = document.getElementById("close-details-modal");
  if (closeDetailsModal) {
    closeDetailsModal.addEventListener("click", () => {
      document.getElementById("details-modal").classList.remove("active");
    });
  }

  // Modal foniga bosilganda yopilish
  window.addEventListener("click", (e) => {
    const detailsModal = document.getElementById("details-modal");
    const suggestModal = document.getElementById("suggest-modal");
    if (e.target === detailsModal) detailsModal.classList.remove("active");
    if (e.target === suggestModal) closeSuggestModal();
  });
}

// Foydalanuvchi geolokatsiyasini so'rash
function requestUserLocation(autoSort = false) {
  const btn = document.getElementById("locate-btn");
  const btnText = btn ? btn.querySelector(".btn-label") : null;
  
  if (!navigator.geolocation) {
    showToast(I18n.t("locatingError"));
    return;
  }

  if (btn) btn.classList.add("loading");
  if (btnText) btnText.textContent = "...";

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      AppState.userLocation = [lat, lng];

      // Xaritada foydalanuvchi joylashuv belgisi
      if (AppState.userLocationMarker) {
        AppState.map.removeLayer(AppState.userLocationMarker);
      }

      AppState.userLocationMarker = L.marker([lat, lng], {
        icon: L.divIcon({
          className: "user-loc-marker",
          html: `<div class="pulse-ring"></div><div class="user-dot"></div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        })
      }).addTo(AppState.map);

      AppState.userLocationMarker.bindPopup(`<b>${I18n.t("myLocationMarker")}</b>`);

      // Xaritani foydalanuvchiga qaratish
      AppState.map.setView([lat, lng], 14);

      if (btn) {
        btn.classList.remove("loading");
        btn.classList.add("active");
      }
      if (btnText) btnText.textContent = I18n.t("locatingActive");

      if (autoSort) {
        AppState.sortByDistance = true;
        const sortCheckbox = document.getElementById("sort-distance");
        if (sortCheckbox) sortCheckbox.checked = true;
      }

      renderPlaces();
      showToast(I18n.t("locatingActive"));
    },
    (err) => {
      console.warn("Geolocation error:", err);
      if (btn) btn.classList.remove("loading");
      if (btnText) btnText.textContent = I18n.t("locatingBtn");
      showToast(I18n.t("locatingError"));
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

// Ikki nuqta orasidagi masofani hisoblash (Haversine Formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Yer radiusi km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Filtrlash va saralash
function getFilteredPlaces() {
  let list = [...AppState.places];

  // Kategoriya bo'yicha
  if (AppState.selectedCategory !== "all") {
    list = list.filter(p => p.category === AppState.selectedCategory);
  }

  // Qidiruv so'zi bo'yicha
  if (AppState.searchQuery) {
    const q = AppState.searchQuery;
    list = list.filter(p => {
      const name = (I18n.getLocalized(p.name) || "").toLowerCase();
      const addr = (I18n.getLocalized(p.address) || "").toLowerCase();
      const desc = (I18n.getLocalized(p.description) || "").toLowerCase();
      return name.includes(q) || addr.includes(q) || desc.includes(q);
    });
  }

  // Faqat ochiq
  if (AppState.filterOnlyOpen) {
    list = list.filter(p => p.openNow === true);
  }

  // Faqat bepul
  if (AppState.filterFreeOnly) {
    list = list.filter(p => p.isFree === true);
  }

  // Masofani qo'shish
  if (AppState.userLocation) {
    list.forEach(p => {
      p._distance = calculateDistance(
        AppState.userLocation[0],
        AppState.userLocation[1],
        p.coords[0],
        p.coords[1]
      );
    });
  }

  // Masofa bo'yicha saralash
  if (AppState.sortByDistance && AppState.userLocation) {
    list.sort((a, b) => (a._distance || 9999) - (b._distance || 9999));
  }

  return list;
}

// Markerlar va Ro'yxatni chizish
function renderPlaces() {
  const list = getFilteredPlaces();
  const container = document.getElementById("places-list");
  const countEl = document.getElementById("places-count");

  if (countEl) {
    countEl.textContent = I18n.t("foundCount", { count: list.length });
  }

  // Xarita markerlarini tozalash
  if (AppState.markersLayer) {
    AppState.markersLayer.clearLayers();
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>${I18n.t("noResults")}</h3>
        <p>${I18n.t("noResultsHint")}</p>
      </div>
    `;
    return;
  }

  let html = "";
  const bounds = L.latLngBounds([]);

  list.forEach(place => {
    const meta = CATEGORY_META[place.category] || CATEGORY_META.courses;
    const name = I18n.getLocalized(place.name);
    const address = I18n.getLocalized(place.address);
    const hours = I18n.getLocalized(place.workingHours);
    const price = I18n.getLocalized(place.price);
    const catLabel = I18n.t(meta.labelKey);

    let distanceBadge = "";
    if (place._distance !== undefined) {
      const distStr = place._distance < 1
        ? `${Math.round(place._distance * 1000)} ${I18n.t("distanceM")}`
        : `${place._distance.toFixed(1)} ${I18n.t("distanceKm")}`;
      distanceBadge = `<span class="badge badge-dist">📍 ${distStr}</span>`;
    }

    const openStatusBadge = place.openNow
      ? `<span class="badge badge-open">● ${I18n.t("openNow")}</span>`
      : `<span class="badge badge-closed">○ ${I18n.t("closedNow")}</span>`;

    const userBadge = place.isUserSubmitted
      ? `<span class="badge badge-user">${I18n.t("userAddedBadge")}</span>`
      : `<span class="badge badge-verified">✓ ${I18n.t("verifiedBadge")}</span>`;

    html += `
      <div class="place-card ${AppState.activePlaceId === place.id ? 'active-card' : ''}" data-id="${place.id}">
        <div class="card-header">
          <div class="card-cat" style="background:${meta.bgColor}; color:${meta.color}">
            ${meta.iconSvg} <span>${catLabel}</span>
          </div>
          <div class="card-badges">
            ${distanceBadge}
            ${openStatusBadge}
          </div>
        </div>

        <h3 class="card-title">${escapeHtml(name)}</h3>
        <p class="card-address">
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <span>${escapeHtml(address)}</span>
        </p>

        <div class="card-details-grid">
          <div class="detail-item">
            <span class="detail-label">${I18n.t("workingHours")}:</span>
            <span class="detail-val">${escapeHtml(hours)}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">${I18n.t("price")}:</span>
            <span class="detail-val price-highlight">${escapeHtml(price)}</span>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-actions">
            <button class="btn btn-sm btn-outline view-on-map-btn" data-id="${place.id}">
              🗺️ ${I18n.t("mapView")}
            </button>
            <button class="btn btn-sm btn-primary view-details-btn" data-id="${place.id}">
              ℹ️ ${I18n.t("details")}
            </button>
          </div>
          <button class="btn btn-text btn-sm card-suggest-btn" data-id="${place.id}" title="${I18n.t("suggestUpdate")}">
            ✏️
          </button>
        </div>
      </div>
    `;

    // Xaritada marker qo'shish
    bounds.extend(place.coords);

    const customIcon = L.divIcon({
      className: `custom-marker-icon marker-${place.category}`,
      html: `
        <div class="marker-pin" style="background-color: ${meta.color};">
          <div class="marker-icon-inner">${meta.iconSvg}</div>
        </div>
      `,
      iconSize: [36, 42],
      iconAnchor: [18, 42],
      popupAnchor: [0, -38]
    });

    const marker = L.marker(place.coords, { icon: customIcon });

    const popupContent = `
      <div class="map-popup-card">
        <div class="popup-cat" style="color: ${meta.color}">${catLabel}</div>
        <h4 class="popup-title">${escapeHtml(name)}</h4>
        <div class="popup-address">${escapeHtml(address)}</div>
        <div class="popup-price"><b>${I18n.t("price")}:</b> ${escapeHtml(price)}</div>
        <div class="popup-actions">
          <button class="btn btn-xs btn-primary popup-details-btn" onclick="openPlaceDetails('${place.id}')">
            ${I18n.t("details")}
          </button>
          <a href="https://maps.google.com/?q=${place.coords[0]},${place.coords[1]}" target="_blank" class="btn btn-xs btn-outline">
            ${I18n.t("getDirections")}
          </a>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent);
    marker.on("click", () => {
      highlightCard(place.id);
    });

    place._marker = marker;
    AppState.markersLayer.addLayer(marker);
  });

  container.innerHTML = html;

  // Agar filtr natijasi bor bo'lsa va bu birinchi render bo'lsa, xarita chegarasini moslash
  if (list.length > 0 && !AppState.searchQuery) {
    // default holatda yaxshi zoom
  }

  // Tugmalarga klik tinglovchilar
  attachCardEvents();
}

// Kartochka tugmalarini boshqarish
function attachCardEvents() {
  document.querySelectorAll(".view-on-map-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = btn.getAttribute("data-id");
      focusOnMap(id);
    });
  });

  document.querySelectorAll(".view-details-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = btn.getAttribute("data-id");
      openPlaceDetails(id);
    });
  });

  document.querySelectorAll(".card-suggest-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = btn.getAttribute("data-id");
      openSuggestModal(id);
    });
  });
}

// Xaritada obyektni markazlashtirish va ochish
function focusOnMap(id) {
  const place = AppState.places.find(p => p.id === id);
  if (!place || !place._marker) return;

  // Mobilda bo'lsa xaritaga o'tish
  if (window.innerWidth <= 768 && AppState.mobileView !== "map") {
    toggleMobileView("map");
  }

  AppState.map.setView(place.coords, 15, { animate: true });
  place._marker.openPopup();
  highlightCard(id);
}

// Kartochkani vizual ajratib ko'rsatish
function highlightCard(id) {
  AppState.activePlaceId = id;
  document.querySelectorAll(".place-card").forEach(c => {
    if (c.getAttribute("data-id") === id) {
      c.classList.add("active-card");
      c.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      c.classList.remove("active-card");
    }
  });
}

// Batafsil ma'lumot modali
function openPlaceDetails(id) {
  const place = AppState.places.find(p => p.id === id);
  if (!place) return;

  const meta = CATEGORY_META[place.category] || CATEGORY_META.courses;
  const name = I18n.getLocalized(place.name);
  const address = I18n.getLocalized(place.address);
  const hours = I18n.getLocalized(place.workingHours);
  const price = I18n.getLocalized(place.price);
  const desc = I18n.getLocalized(place.description);
  const statusNote = I18n.getLocalized(place.verifiedStatus);
  const catLabel = I18n.t(meta.labelKey);

  document.getElementById("modal-cat-badge").innerHTML = `
    <span style="background:${meta.bgColor}; color:${meta.color}; padding:4px 10px; border-radius:999px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
      ${meta.iconSvg} ${catLabel}
    </span>
  `;

  document.getElementById("modal-place-title").textContent = name;
  document.getElementById("modal-status-note").textContent = statusNote || I18n.t("verifiedBadge");
  document.getElementById("modal-address").textContent = address;
  document.getElementById("modal-hours").textContent = hours;
  document.getElementById("modal-price").textContent = price;
  document.getElementById("modal-description").textContent = desc;

  // Aloqa qismi
  const contactsContainer = document.getElementById("modal-contacts");
  let contactsHtml = "";
  if (place.phone) {
    contactsHtml += `<a href="tel:${place.phone}" class="contact-link phone">📞 ${escapeHtml(place.phone)}</a>`;
  }
  if (place.telegram) {
    const tgUrl = place.telegram.startsWith("http") ? place.telegram : `https://t.me/${place.telegram.replace("@", "")}`;
    contactsHtml += `<a href="${tgUrl}" target="_blank" class="contact-link telegram">✈️ ${escapeHtml(place.telegram)}</a>`;
  }
  if (place.website) {
    contactsHtml += `<a href="${place.website}" target="_blank" class="contact-link web">🌐 ${escapeHtml(place.website)}</a>`;
  }
  if (!contactsHtml) {
    contactsHtml = `<span class="text-muted">—</span>`;
  }
  contactsContainer.innerHTML = contactsHtml;

  // Qulayliklar (Features)
  const featuresContainer = document.getElementById("modal-features");
  if (place.features && place.features.length > 0) {
    featuresContainer.innerHTML = place.features.map(f => {
      const key = `feat_${f}`;
      const label = I18n.t(key);
      return `<span class="feature-tag">✓ ${escapeHtml(label)}</span>`;
    }).join("");
  } else {
    featuresContainer.innerHTML = `<span class="text-muted">—</span>`;
  }

  // Marshrut tugmalari
  const yandexUrl = `https://yandex.com/maps/?pt=${place.coords[1]},${place.coords[0]}&z=16&l=map`;
  const googleUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.coords[0]},${place.coords[1]}`;
  
  document.getElementById("btn-yandex-maps").setAttribute("href", yandexUrl);
  document.getElementById("btn-google-maps").setAttribute("href", googleUrl);

  // Ulashish tugmasi
  const shareBtn = document.getElementById("modal-share-btn");
  shareBtn.onclick = () => {
    const url = window.location.href.split("?")[0] + `?place=${place.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        showToast(I18n.t("copied"));
      });
    } else {
      showToast(I18n.t("copied"));
    }
  };

  // Tahrir taklif qilish tugmasi modal ichida
  const editBtn = document.getElementById("modal-edit-suggest-btn");
  editBtn.onclick = () => {
    document.getElementById("details-modal").classList.remove("active");
    openSuggestModal(place.id);
  };

  document.getElementById("details-modal").classList.add("active");
}

// Taklif berish modali (Suggest Modal)
function openSuggestModal(placeIdToEdit = null) {
  const modal = document.getElementById("suggest-modal");
  const form = document.getElementById("suggest-form");
  form.reset();

  populateProposalSelect();

  if (placeIdToEdit) {
    AppState.suggestMode = "existing";
    document.getElementById("prop-type-existing").checked = true;
    document.getElementById("suggest-place-select").value = placeIdToEdit;
    fillFormWithExisting(placeIdToEdit);
  } else {
    AppState.suggestMode = "new";
    document.getElementById("prop-type-new").checked = true;
    document.getElementById("suggest-coords").value = "41.3110, 69.2797";
  }

  updateSuggestFormMode();
  modal.classList.add("active");
}

function closeSuggestModal() {
  const modal = document.getElementById("suggest-modal");
  modal.classList.remove("active");
  if (AppState.tempSuggestMarker && AppState.map) {
    AppState.map.removeLayer(AppState.tempSuggestMarker);
    AppState.tempSuggestMarker = null;
  }
}

// Mavjud joylar tanlovini to'ldirish
function populateProposalSelect() {
  const select = document.getElementById("suggest-place-select");
  if (!select) return;

  select.innerHTML = AppState.places.map(p => {
    const name = I18n.getLocalized(p.name);
    return `<option value="${p.id}">${escapeHtml(name)}</option>`;
  }).join("");

  select.addEventListener("change", (e) => {
    if (AppState.suggestMode === "existing") {
      fillFormWithExisting(e.target.value);
    }
  });
}

function fillFormWithExisting(placeId) {
  const place = AppState.places.find(p => p.id === placeId);
  if (!place) return;

  document.getElementById("suggest-name").value = I18n.getLocalized(place.name);
  document.getElementById("suggest-category").value = place.category;
  document.getElementById("suggest-address").value = I18n.getLocalized(place.address);
  document.getElementById("suggest-hours").value = I18n.getLocalized(place.workingHours);
  document.getElementById("suggest-price").value = I18n.getLocalized(place.price);
  document.getElementById("suggest-coords").value = `${place.coords[0]}, ${place.coords[1]}`;
  
  let contactStr = "";
  if (place.phone) contactStr += place.phone + " ";
  if (place.telegram) contactStr += place.telegram;
  document.getElementById("suggest-contacts").value = contactStr.trim();
}

function updateSuggestFormMode() {
  const selectGroup = document.getElementById("suggest-existing-group");
  if (AppState.suggestMode === "existing") {
    selectGroup.style.display = "block";
  } else {
    selectGroup.style.display = "none";
    document.getElementById("suggest-name").value = "";
    document.getElementById("suggest-address").value = "";
    document.getElementById("suggest-hours").value = "";
    document.getElementById("suggest-price").value = "";
    document.getElementById("suggest-coords").value = "41.3110, 69.2797";
    document.getElementById("suggest-contacts").value = "";
  }
}

// Foydalanuvchi taklifini saqlash va ko'rsatish
function handleSuggestSubmit(e) {
  e.preventDefault();

  const nameVal = document.getElementById("suggest-name").value.trim();
  const catVal = document.getElementById("suggest-category").value;
  const addrVal = document.getElementById("suggest-address").value.trim();
  const hoursVal = document.getElementById("suggest-hours").value.trim();
  const priceVal = document.getElementById("suggest-price").value.trim();
  const coordsVal = document.getElementById("suggest-coords").value.trim();
  const contactsVal = document.getElementById("suggest-contacts").value.trim();
  const changesVal = document.getElementById("suggest-changes").value.trim();
  const userAuthor = document.getElementById("suggest-author").value.trim();

  // Koordinatani tahlil qilish
  let coords = [41.3111, 69.2797];
  if (coordsVal && coordsVal.includes(",")) {
    const parts = coordsVal.split(",").map(p => parseFloat(p.trim()));
    if (!isNaN(parts[0]) && !isNaN(parts[1])) {
      coords = parts;
    }
  }

  if (AppState.suggestMode === "new") {
    // Yangi maskan qo'shish
    const newPlace = {
      id: "user-" + Date.now(),
      category: catVal,
      coords: coords,
      name: { uz: nameVal, ru: nameVal, en: nameVal },
      address: { uz: addrVal, ru: addrVal, en: addrVal },
      workingHours: { uz: hoursVal || "Noma'lum", ru: hoursVal || "Не указано", en: hoursVal || "Unspecified" },
      openNow: true,
      price: { uz: priceVal || "Bepul", ru: priceVal || "Бесплатно", en: priceVal || "Free" },
      isFree: true,
      phone: contactsVal || "",
      website: "",
      telegram: "",
      features: ["wheelchair"],
      description: {
        uz: changesVal || "Foydalanuvchi tomonidan yangi kiritilgan jamoat maskani.",
        ru: changesVal || "Новое общественное место, добавленное пользователем.",
        en: changesVal || "New public community spot suggested by a user."
      },
      verifiedStatus: {
        uz: `Foydalanuvchi taklifi: ${userAuthor || "Anonim"} (Tekshiruvda)`,
        ru: `Предложено пользователем: ${userAuthor || "Аноним"} (На проверке)`,
        en: `User suggested: ${userAuthor || "Anonymous"} (Under review)`
      },
      isUserSubmitted: true
    };

    // Mahalliy saqlashga qo'shish
    const stored = getStoredCustomPlaces();
    stored.push(newPlace);
    localStorage.setItem("yaqin_custom_places", JSON.stringify(stored));

    // Xotiradagi bazani yangilash
    AppState.places.unshift(newPlace);
    renderPlaces();
    focusOnMap(newPlace.id);
  } else {
    // Tahrir taklifi
    const existingId = document.getElementById("suggest-place-select").value;
    const target = AppState.places.find(p => p.id === existingId);
    if (target) {
      target.isUserSubmitted = true;
      target.verifiedStatus = {
        uz: `Yangi tahrir kiritildi (${userAuthor || "Anonim"}) - Ko'rib chiqilmoqda`,
        ru: `Внесена правка (${userAuthor || "Аноним"}) - На рассмотрении`,
        en: `Edit proposed (${userAuthor || "Anonymous"}) - Under review`
      };
      if (hoursVal) target.workingHours = { uz: hoursVal, ru: hoursVal, en: hoursVal };
      if (priceVal) target.price = { uz: priceVal, ru: priceVal, en: priceVal };
      renderPlaces();
    }
  }

  closeSuggestModal();
  showToast(I18n.t("successAlertTitle") + " — " + I18n.t("successAlertMsg"));
}

// Mobil Xarita / Ro'yxat ko'rinishini almashtirish
function toggleMobileView(forceView = null) {
  const nextView = forceView || (AppState.mobileView === "list" ? "map" : "list");
  AppState.mobileView = nextView;

  const listSection = document.getElementById("list-container");
  const mapSection = document.getElementById("map-container");
  const toggleBtn = document.getElementById("mobile-view-toggle");

  if (nextView === "map") {
    listSection.classList.add("mobile-hidden");
    mapSection.classList.remove("mobile-hidden");
    if (toggleBtn) {
      toggleBtn.innerHTML = `📋 <span>${I18n.t("listView")}</span>`;
    }
    // Leaflet o'lchamini yangilash
    setTimeout(() => {
      AppState.map.invalidateSize();
    }, 200);
  } else {
    listSection.classList.remove("mobile-hidden");
    mapSection.classList.add("mobile-hidden");
    if (toggleBtn) {
      toggleBtn.innerHTML = `🗺️ <span>${I18n.t("mapView")}</span>`;
    }
  }
}

// Xabar berish oynasi (Toast notification)
function showToast(message) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "toast-banner";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// Xavfsiz HTML qochirish
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
