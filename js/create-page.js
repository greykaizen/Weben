document.addEventListener("DOMContentLoaded", function () {
    // Toggle between Post and Article Containers
    const switchArticlesButton = document.querySelector('.switch-articles');
    const postContainer = document.querySelector('.post-container');
    const articleContainer = document.querySelector('.article-container');

    if (switchArticlesButton && postContainer && articleContainer) {
        switchArticlesButton.addEventListener('click', () => {
            postContainer.style.display = 'none';
            articleContainer.style.display = 'block';
        });

        const switchToPostButton = document.getElementById('switchToPost');
        if (switchToPostButton) {
            switchToPostButton.addEventListener('click', () => {
                articleContainer.style.display = 'none';
                postContainer.style.display = 'flex';
            });
        }
    }

    // Tag Functionality
    const addTagBtn = document.getElementById('addTagBtn');
    const tagInput = document.getElementById('tagInput');
    const userTags = document.getElementById('userTags');

    function addTag(tag) {
        if (!tag) return;

        // Prevent duplicate tags
        const existingTags = [...userTags.querySelectorAll('.user-tag')].map(t => t.textContent.trim());
        if (existingTags.includes(tag)) return;

        const tagElement = document.createElement('div');
        tagElement.className = 'user-tag';
        tagElement.innerHTML = `
            ${tag} <button class="remove-tag">×</button>`;
        userTags.appendChild(tagElement);
    }

    if (addTagBtn && tagInput) {
        addTagBtn.addEventListener('click', () => {
            const tag = tagInput.value.trim();
            if (tag) {
                addTag(tag);
                tagInput.value = '';
            }
        });
    }

    userTags.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-tag")) {
            e.target.parentElement.remove();
        }
    });

    // Initialize Quill Editor (if editor exists)
    const editorElement = document.getElementById('editor');
    if (editorElement) {
        new Quill('#editor', {
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
    }

    // Post Data Submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitButton = form.querySelector('[type="submit"]');
            submitButton.disabled = true; // Prevent multiple submissions

            let formData = new FormData();
            formData.append('username', document.querySelector('.profile span')?.textContent || '');
            formData.append('caption', document.getElementById('caption')?.value || '');
            formData.append('isDraft', document.querySelector('.draft-toggle input')?.checked ? 1 : 0);

            // Collect tags
            let tags = [];
            document.querySelectorAll('#userTags .user-tag').forEach(tag => {
                tags.push(tag.textContent.replace('×', '').trim()); // Remove close button
            });
            formData.append('tags', tags.join(','));

            // Collect user-uploaded images
            const imageBoxes = document.querySelectorAll('.image-upload .image-box img');
            for (const img of imageBoxes) {
                try {
                    const response = await fetch(img.src);
                    const blob = await response.blob();
                    formData.append('images[]', blob, 'image.jpg');
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            }

            // Send data to PHP
            try {
                const response = await fetch('submit_post.php', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                alert(data.message);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                submitButton.disabled = false; // Re-enable submit button
            }
        });
    }

    // Post Now & Schedule Post
    const postNowBtn = document.querySelector(".postNowBtn");
    const scheduleBtn = document.querySelector(".schedule");
    const caption = document.getElementById("caption");
    // const tagInput = document.getElementById("tagInput");

    function postContent(postData) {
        fetch("../php/post-handler.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Post submitted successfully!");
            } else {
                alert("Failed to submit post.");
            }
        })
        .catch(error => console.error("Error:", error));
    }

    if (postNowBtn) {
        postNowBtn.addEventListener("click", function () {
            postContent({
                caption: caption.value.trim(),
                tags: tagInput.value.trim(),
                scheduleTime: null // Immediate post
            });
        });
    }

    if (scheduleBtn) {
        scheduleBtn.addEventListener("click", function () {
            const scheduleTime = prompt("Enter schedule time (YYYY-MM-DD HH:MM:SS):");
            if (scheduleTime) {
                postContent({
                    caption: caption.value.trim(),
                    tags: tagInput.value.trim(),
                    scheduleTime: scheduleTime // Scheduled post
                });
            }
        });
    }
});
