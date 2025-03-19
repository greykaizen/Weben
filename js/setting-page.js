
// Edit Button Functionality
const editButtons = document.querySelectorAll('.edit-button');
editButtons.forEach(button => {
  button.addEventListener('click', () => {
    const input = button.previousElementSibling;
    input.removeAttribute('readonly');
    input.focus();
    button.textContent = 'Save';
    button.classList.add('save-button');
  });
});

// Theme Selector Functionality
const themeSelector = document.getElementById('theme');
themeSelector.addEventListener('change', () => {
  const selectedTheme = themeSelector.value;
  document.body.className = selectedTheme; // Apply theme class to body
  localStorage.setItem('theme', selectedTheme); // Save theme preference
});

// Load Saved Theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.className = savedTheme;
themeSelector.value = savedTheme;

// View Blocked Users
const viewBlockedButton = document.getElementById('view-blocked');
viewBlockedButton.addEventListener('click', () => {
  alert('Blocked users list will be displayed here.');
});