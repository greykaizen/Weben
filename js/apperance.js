// JavaScript for Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check local storage for theme preference
if (localStorage.getItem('theme') === 'light-mode') {
    body.classList.add('light-mode');
    themeToggle.checked = true;
}

// Toggle theme on switch change
themeToggle.addEventListener('change', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
    } else {
        localStorage.setItem('theme', 'dark-mode');
    }
});