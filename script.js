const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleBtn.querySelector('i');

function setTheme(isLight) {
  if (isLight) {
    body.classList.add('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    body.classList.remove('light-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

toggleBtn.addEventListener('click', () => {
  const isLight = body.classList.toggle('light-mode');
  setTheme(isLight);
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Load theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme === 'light');
});
