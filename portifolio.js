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

});
