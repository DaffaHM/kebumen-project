/**
 * ======================================================
 * main.js
 *
 * Fungsi yang dipakai:
 *
 * 1) initNewsTabs()
 *    - Section: News (SECTION 4)
 *    - Fungsi: switch tab Berita Terkini <-> Events Kebumen
 *    - Elemen terkait:
 *      .news-tab (button tab)
 *      #panelNews (panel berita)
 *      #panelEvents (panel events)
 *      #newsSeeAll (link lihat semua)
 *
 * 2) setVhVar()
 *    - Section: Hero (SECTION 1)
 *    - Fungsi: fix bug 100vh mobile dengan CSS var --vh
 *
 * 3) initHeroAnimation()
 *    - Section: Hero (SECTION 1)
 *    - Fungsi: fade-in konten hero (class .hero--ready)
 *
 * 4) initSearchDropdown()
 *    - Section: Hero Search Pill (SECTION 1)
 *    - Fungsi: update teks kategori "Semua/Berita/Layanan/Dokumen"
 *
 * 5) preventSearchSubmitReload()
 *    - Section: Hero Search Pill (SECTION 1)
 *    - Fungsi: mencegah reload page saat submit form
 * ======================================================
 */

function initNewsTabs() {
  const tabs = document.querySelectorAll(".news-tab");
  const panelNews = document.getElementById("panelNews");
  const panelEvents = document.getElementById("panelEvents");
  const seeAll = document.getElementById("newsSeeAll");

  if (!tabs.length || !panelNews || !panelEvents || !seeAll) return;

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      btn.classList.add("is-active");

      const tab = btn.dataset.tab;

      if (tab === "events") {
        panelNews.classList.add("is-hidden");
        panelEvents.classList.remove("is-hidden");
        seeAll.textContent = "Lihat Semua";
        seeAll.setAttribute("href", "#events");
      } else {
        panelEvents.classList.add("is-hidden");
        panelNews.classList.remove("is-hidden");
        seeAll.textContent = "Lihat Semua";
        seeAll.setAttribute("href", "#berita");
      }
    });
  });
}

function setVhVar() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function initHeroAnimation() {
  const hero = document.querySelector(".hero");
  if (hero) hero.classList.add("hero--ready");
}

function initSearchDropdown() {
  const dropdown = document.querySelector(".search-pill__dropdown");
  if (!dropdown) return;

  const label = document.getElementById("categoryLabel");
  dropdown.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      label.textContent = item.dataset.value || item.textContent.trim();
    });
  });
}

function preventSearchSubmitReload() {
  const form = document.querySelector(".search-pill");
  if (form) form.addEventListener("submit", (e) => e.preventDefault());
}

/* ========== RUN ========== */
window.addEventListener("resize", setVhVar);
setVhVar();

document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimation();
  initSearchDropdown();
  preventSearchSubmitReload();
  initNewsTabs();
});
