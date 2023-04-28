const body = document.querySelector("body");
const menu = document.querySelector(".menu-icon");

menu.addEventListener("click", () => {
  body.classList.toggle("nav-active");
});
