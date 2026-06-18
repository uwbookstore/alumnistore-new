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

// Footer copyright info
const d = new Date();
const copyYear = d.getFullYear();
const footerCopyright = document.getElementById('footer-copyright');
footerCopyright.innerHTML = `&copy; Copyright ${copyYear}`;

// Search bar
const searchOpen = document.getElementById('search-open');
const searchClose = document.getElementById('search-close');
const searchForm = document.getElementById('search-form');

const searchOverlay = document.getElementById('search-overlay');

const openSearchOverlay = () => {
  searchOverlay.classList.add('open');
};

const closeSearchOverlay = () => {
  searchOverlay.classList.remove('open');
};

searchOpen.addEventListener('click', () => {
  openSearchOverlay();
});

searchClose.addEventListener('click', () => {
  closeSearchOverlay();
});

searchOverlay.addEventListener('click', (e) => {
  if (e.target === searchOverlay) {
    closeSearchOverlay();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSearchOverlay();
  }
});

// Account toggle
const accountToggle = document.getElementById('account-toggle');
const accountDropdown = document.getElementById('login');

accountToggle.addEventListener('click', (e) => {
  e.preventDefault();
  accountToggle.classList.toggle('show');
  accountDropdown.classList.toggle('show');
});
