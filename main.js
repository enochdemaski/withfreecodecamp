const menuBtn = document.getElementById("menu-btn");

const mobileMenu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});
