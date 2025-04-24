const burgerBtn = document.querySelector(".header_mobile-burger");
const mobileMenu = document.querySelector(".mobile__box_navigate");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  mobileMenu.classList.toggle("hidden");
});
