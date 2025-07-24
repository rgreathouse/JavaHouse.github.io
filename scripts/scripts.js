// Robert Greathouse
// script.js
// 07/23/2025

document.addEventListener('DOMContentLoaded', function () {
  const select = document.getElementById('theme-select');
  const htmlElement = document.documentElement;

  // Load theme from storage
  const saved = localStorage.getItem('javahouse-theme');
  if (saved) {
    htmlElement.className = saved;
    select.value = saved.replace('theme-', '');
  }

  // Change theme on selection
  select.addEventListener('change', function () {
    const selectedTheme = `theme-${this.value}`;
    htmlElement.className = selectedTheme;
    localStorage.setItem('javahouse-theme', selectedTheme);
  });

  //Entry scene on media page
  const door = document.getElementById('door-image');
  const inside = document.getElementById('inside-image');

  door.addEventListener('click', () => {
  door.style.opacity = '0';
  inside.style.opacity = '1';
  door.style.pointerEvents = 'none';
  setTimeout(() => {
    window.location.href = 'menu.html'; // or index.html
  }, 2500); // 2.5 seconds fade before redirect
});

});
