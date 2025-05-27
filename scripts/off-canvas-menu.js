const main = document.querySelector("#main");
const sideMenu = document.querySelector("#side-menu");
const openMenuButton = document.querySelector("#open-side-menu-button");
const closeMenuButton = document.querySelector("#close-side-menu-button");
const overlay = document.querySelector(".overlay");

function openMenu() {
  sideMenu.style.width = "250px";
  main.style.marginLeft = "250px";
  overlay.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  sideMenu.style.width = "0px";
  main.style.marginLeft = "0px";
  overlay.setAttribute("aria-hidden", "true");
}

openMenuButton.addEventListener("click", openMenu);

closeMenuButton.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);
