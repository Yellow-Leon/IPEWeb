const hero = document.getElementById("cabecera");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    hero.classList.add("efecto");
  } else {
    hero.classList.remove("efecto");
  }
});
