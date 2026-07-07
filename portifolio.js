document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");

  function showSection(id) {
    sections.forEach(sec => {
      sec.classList.remove("visible");
    });
    const target = document.getElementById(id);
    if (target) target.classList.add("visible");

    links.forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === `#${id}`);
    });
  }

  showSection("inicio");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").replace("#", "");
      showSection(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-href]").forEach(el => {
    el.addEventListener("click", () => {
      window.open(el.dataset.href, "_blank", "noopener");
    });
  });

  // ===== Lightbox das imagens em Atividades =====
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Fechar imagem">&times;</button>
    <img src="" alt="">
  `;
  document.body.appendChild(overlay);

  const lightboxImg = overlay.querySelector("img");
  const lightboxClose = overlay.querySelector(".lightbox-close");

  function abrirLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    overlay.classList.add("ativo");
    document.body.style.overflow = "hidden";
  }

  function fecharLightbox() {
    overlay.classList.remove("ativo");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("#projetos .card-img-wrap img").forEach(img => {
    img.addEventListener("click", () => {
      abrirLightbox(img.src, img.alt);
    });
  });

  lightboxClose.addEventListener("click", fecharLightbox);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) fecharLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("ativo")) {
      fecharLightbox();
    }
  });

});
