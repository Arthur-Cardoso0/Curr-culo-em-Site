document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("main, section");

  sections.forEach(sec => {
    sec.style.display = sec.id === "inicio" ? "block" : "none";
  });

  links[0].classList.add("active");
  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const destino = link.getAttribute("href").substring(1);
      sections.forEach(sec => sec.style.display = "none");
      const alvo = document.getElementById(destino);
      if (alvo) alvo.style.display = "block";
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const botao = document.getElementById("botaoProjetos");
  botao.addEventListener("click", function() {
    window.open("https://github.com/Arthur-Cardoso0", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const botaozap = document.getElementById("botaoWhatsapp");
  botaozap.addEventListener("click", function() {
    window.open("https://wa.me/qr/LQTOK72QVC5DN1", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const botaogram = document.getElementById("botaogram");
  botaogram.addEventListener("click", function() {
    window.open("https://www.instagram.com/arthur.cds_/", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const botaodin = document.getElementById("botaodin");
  botaodin.addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/arthur-cardoso4613", "_blank");
  });
});