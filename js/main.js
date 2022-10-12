// Mobile Navigation Menu
let menuButton = document.querySelector('.menu__btn');

menuButton.onclick = function () {
  mobileMenu();
}
function mobileMenu() {
  let menuList = document.querySelector('.menu__list');
  menuList.classList.toggle('menu__list--active');
}


