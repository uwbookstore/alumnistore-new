const searchOverlay = document.getElementById('search-overlay');
const openSearchBtn = document.getElementById('open-search');
const closeSearchBtn = document.getElementById('close-search');

openSearchBtn.addEventListener('click', () => {
  searchOverlay.classList.add('open');
});

closeSearchBtn.addEventListener('click', () => {
  searchOverlay.classList.remove('open');
});
