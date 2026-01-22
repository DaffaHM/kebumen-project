/**
 * ======================================================
 * DOCUMENTATION (JS)
 *
 * Fungsi-fungsi di file ini:
 * 1) initNewsTabs()
 *    - Section: NEWS (Section 4)
 *    - Fungsi: switch panel Berita vs Events + update link "Lihat Semua"
 *
 * 2) setVhVar()
 *    - Section: HERO (Section 1)
 *    - Fungsi: fix bug 100vh di mobile (Chrome/Safari) dengan CSS variable --vh
 *
 * 3) initHeroAnimation()
 *    - Section: HERO (Section 1)
 *    - Fungsi: memberi class "hero--ready" supaya konten fade-in
 *
 * 4) initSearchDropdown()
 *    - Section: HERO (Search pill)
 *    - Fungsi: ganti label kategori berdasarkan dropdown
 *
 * 5) preventSearchSubmitReload()
 *    - Section: HERO (Search form)
 *    - Fungsi: mencegah page reload saat submit (sementara)
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

/* ======================================================
  BOOTSTRAP INIT
====================================================== */
window.addEventListener("resize", setVhVar);
setVhVar();

document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimation();
  initSearchDropdown();
  preventSearchSubmitReload();
  initNewsTabs();
});
