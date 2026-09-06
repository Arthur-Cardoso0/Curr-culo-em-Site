document.addEventListener("DOMContentLoaded", () => {
  carregarMenu();

  document.querySelectorAll("[data-href]").forEach(el => {
    el.addEventListener("click", () => window.open(el.dataset.href, "_blank", "noopener"));
  });
  
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Fechar relíquia">&times;</button>
    <img src="" alt="">
  `;
  document.body.appendChild(overlay);

  const lightboxImg = overlay.querySelector("img");
  const lightboxClose = overlay.querySelector(".lightbox-close");

  function abrirLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "Relíquia";
    overlay.classList.add("ativo");
    document.body.style.overflow = "hidden";
  }

  function fecharLightbox() {
    overlay.classList.remove("ativo");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".card-img-wrap img").forEach(img => {
    img.addEventListener("click", () => abrirLightbox(img.src, img.alt));
  });

  lightboxClose.addEventListener("click", fecharLightbox);
  overlay.addEventListener("click", e => {
    if (e.target === overlay) fecharLightbox();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && overlay.classList.contains("ativo")) fecharLightbox();
  });
});

function carregarMenu() {
  const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
  const menuHTML = `
  <header>
    <nav aria-label="Navegação principal">
      <a href="index.html" class="nav-logo" aria-label="Status do personagem">AC</a>
      <ul>
        <li><a href="index.html" class="${paginaAtual === "index.html" || paginaAtual === "" ? "active" : ""}">Status</a></li>
        <li><a href="Experiencias.html" class="${paginaAtual === "Experiencias.html" ? "active" : ""}">Batalhas</a></li>
        <li><a href="Atividades.html" class="${paginaAtual === "Atividades.html" ? "active" : ""}">Relíquias</a></li>
        <li><a href="Contato.html" class="${paginaAtual === "Contato.html" ? "active" : ""}">Santuário</a></li>
      </ul>
    </nav>
  </header>`;
  document.body.insertAdjacentHTML("afterbegin", menuHTML);
}
