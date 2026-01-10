const searchOverlay = document.getElementById('search-overlay');
const openSearchBtn = document.getElementById('open-search');
const closeSearchBtn = document.getElementById('close-search');

openSearchBtn.addEventListener('click', () => {
  searchOverlay.classList.add('open');
});

closeSearchBtn.addEventListener('click', () => {
  searchOverlay.classList.remove('open');
});

searchOverlay.addEventListener('click', (event) => {
  if (event.target === searchOverlay) {
    searchOverlay.classList.remove('open');
  }
});

// Close overlay on escape key press
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    searchOverlay.classList.remove('open');
  }
});
