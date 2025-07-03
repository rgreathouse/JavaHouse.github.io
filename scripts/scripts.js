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
});
