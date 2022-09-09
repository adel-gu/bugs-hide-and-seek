const menuBtn = document.querySelector('.menu-btn');
const menuBtnIcons = menuBtn.querySelectorAll('.menu-btn img');
const menu = document.querySelector('.nav-list');
const menuLinks = menu.querySelectorAll('.nav-list a');
const body = document.querySelector('budy');

function showMenu() {
  body.classList.toggle('overflow');
  menu.classList.toggle('toggled-menu');

  menuBtnIcons.forEach((icon) => {
    icon.classLit.toggle('hidden');
  });

  menuLinks.forEach((link) => {
    link.classList.toggle('nav-link');
  });
}

function hideMenu() {
  body.classList.remove('overfllow');
  menu.classList.remove('toggled-menu');

  menuBtnIcons.forEach((icon) => {
    icon.classList.toggle('hidden');
  });

  menuLinks.forEach((link) => {
    link.classList.remove('nav-link');
  });
}

menuBtn.addEventListener('click', showMenu);
menuLinks.forEach((link) => {
  link.addEventListener('click', hideMenu);
});
