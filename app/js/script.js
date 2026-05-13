// const searchOverlay = document.getElementById('search-overlay');
// const openSearch = document.getElementById('open-search');
// const closeSearch = document.getElementById('close-search');

// const openSearchOverlay = () => {
//   searchOverlay.classList.add('open');
// };

// const closeSearchOverlay = () => {
//   searchOverlay.classList.remove('open');
// };

// openSearch.addEventListener('click', () => {
//   openSearchOverlay();
// });

// closeSearch.addEventListener('click', () => {
//   closeSearchOverlay();
// });

// searchOverlay.addEventListener('click', (e) => {
//   if (e.target === searchOverlay) {
//     closeSearchOverlay();
//   }
// });

// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     closeSearchOverlay();
//   }
// });

// // Navbar Toggle
// const navbarToggle = document.getElementById('nav-toggle');
// const primaryNav = document.getElementById('waa-nav');

// navbarToggle.addEventListener('click', () => {
//   primaryNav.classList.toggle('open');
// });

const navbarToggle = document.querySelector('[data-bs-toggle="collapse"]');
const toggleIcon = document.querySelector('[data-bs-toggle="collapse"] img');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.contains('collapsed')
    ? toggleIcon.setAttribute('src', './img/OS_icons_menu.png')
    : toggleIcon.setAttribute('src', './img/OS_icons_close.png');
});

// Footer copyright info
const d = new Date();
const copyYear = d.getFullYear();
const footerCopyright = document.getElementById('footer-copyright');
footerCopyright.innerHTML = `&copy; Copyright ${copyYear}`;
