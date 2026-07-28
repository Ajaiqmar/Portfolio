// Portfolio — Minimal script
const year = document.getElementById("year");
year.textContent = String(new Date().getFullYear());

// Page switching
const pages = document.querySelectorAll(".page-view");
const footer = document.querySelector(".site-footer");

function showPage(id) {
  pages.forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + id).classList.add("active");
  footer.style.display = id === "blog" ? "none" : "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (e) => {
  const nav = e.target.closest("[data-nav]");
  if (!nav) return;
  e.preventDefault();
  showPage(nav.dataset.nav);
});
