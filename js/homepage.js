// JavaScript for Interactive Features

// 1. Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

sidebar.addEventListener('mouseenter', () => {
    sidebar.style.width = '220px';
    mainContent.style.marginLeft = '220px';
});

sidebar.addEventListener('mouseleave', () => {
    sidebar.style.width = '60px';
    mainContent.style.marginLeft = '60px';
});

// 2. Like/Unlike Posts
document.querySelectorAll('.action .fa-heart').forEach(heartIcon => {
    heartIcon.addEventListener('click', () => {
        heartIcon.classList.toggle('liked');
        const likeCount = heartIcon.nextElementSibling;
        if (heartIcon.classList.contains('liked')) {
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        } else {
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
        }
    });
});

// 3. Translate Post
document.querySelectorAll('.translate').forEach(translateLink => {
    translateLink.addEventListener('click', () => {
        const postContent = translateLink.previousElementSibling;
        postContent.textContent = "Translated text goes here..."; // Replace with actual translation logic
        translateLink.style.display = 'none'; // Hide the translate link after translation
    });
});

// 4. More Options Menu
document.querySelectorAll('.more-options').forEach(moreOptions => {
    moreOptions.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown-menu';
        dropdown.innerHTML = `
            <ul>
                <li>Save Post</li>
                <li>Report Post</li>
                <li>Share Post</li>
            </ul>
        `;
        moreOptions.appendChild(dropdown);

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdown.remove();
        }, { once: true });
    });
});

// 5. Login Button
document.querySelector('.instagram-login').addEventListener('click', () => {
    alert('Redirecting to Google login...'); // Replace with actual login logic
});

// 6. Appearance Toggle (Dark/Light Mode)
const appearanceIcon = document.querySelector('.bottom-icons .fa-moon');
appearanceIcon.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        appearanceIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        appearanceIcon.classList.replace('fa-sun', 'fa-moon');
    }
});