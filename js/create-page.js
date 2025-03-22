// Toggle between Post and Article Containers
const switchArticlesButton = document.querySelector('.switch-articles');
const postContainer = document.querySelector('.post-container');
const articleContainer = document.querySelector('.article-container');

switchArticlesButton.addEventListener('click', () => {
    postContainer.style.display = 'none';
    articleContainer.style.display = 'block';
});

const switchToPostButton = document.getElementById('switchToPost');
switchToPostButton.addEventListener('click', () => {
    articleContainer.style.display = 'none';
    postContainer.style.display = 'flex';
});

// Tag Functionality
const addTagBtn = document.getElementById('addTagBtn');
const tagInput = document.getElementById('tagInput');
const userTags = document.getElementById('userTags');

function addTag(tag) {
    const tagElement = document.createElement('div');
    tagElement.className = 'user-tag';
    tagElement.innerHTML = `
        ${tag}
        <button class="remove-tag" onclick="removeTag(this)">×</button>
    `;
    userTags.appendChild(tagElement);
}

addTagBtn.addEventListener('click', () => {
    const tag = tagInput.value.trim();
    if (tag) {
        addTag(tag);
        tagInput.value = '';
    }
});

function removeTag(button) {
    button.parentElement.remove();
}

// Initialize Quill Editor
const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ]
    },
    placeholder: 'Start writing your article here...'
});