// SETUP BACK TO TOP BTN/FUNCTION
const backToTopBtn = document.querySelector('.backtotop');

// Smooth scroll back to top
function scrollToTop(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Show/Hide Scroll to Top button
window.onscroll = function () {
  if (scrollY >= 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
};

/**
 * Check if back to top button exists
 * if so, run scrollToTop function
 */
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', scrollToTop);
}
// END BACK TO TOP BTN/FUNCTION

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

const menuToggle = document.querySelector('.nav__toggle');
const siteNavigation = document.getElementById('primary-navigation');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
    isOpened ? closeMenu() : openMenu();
  });
}

function openMenu() {
  menuToggle.setAttribute('aria-expanded', 'true');
  siteNavigation.setAttribute('data-state', 'opened');
}

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  siteNavigation.setAttribute('data-state', 'closed');
}

// const navbarToggle = document.querySelector('[data-bs-toggle="collapse"]');
// const toggleIcon = document.querySelector('[data-bs-toggle="collapse"] img');

// if (navbarToggle) {
//   navbarToggle.addEventListener('click', () => {
//     navbarToggle.classList.contains('collapsed')
//       ? toggleIcon.setAttribute('src', './img/OS_icons_menu.png')
//       : toggleIcon.setAttribute('src', './img/OS_icons_close.png');
//   });
// }

// Footer copyright info
const d = new Date();
const copyYear = d.getFullYear();
const footerCopyright = document.getElementById('footer-copyright');
footerCopyright.innerHTML = `&copy; Copyright ${copyYear}`;
