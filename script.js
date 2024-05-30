// Hamburger menu

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector("nav ul");

  hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
