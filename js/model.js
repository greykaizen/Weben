document.addEventListener("DOMContentLoaded", function () {
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModalBtn = document.querySelector(".close-btn");

    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const forgotPasswordSection = document.getElementById("forgotPasswordSection");
    const signUpSection = document.getElementById("signUpSection");

    const nextBtn = document.getElementById("nextBtn");
    const backToStep1 = document.getElementById("backToStep1");
    const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
    const backToLogin = document.getElementById("backToLogin");
    const signUpBtn = document.getElementById("signUpBtn");
    const backToLoginFromSignup = document.getElementById("backToLoginFromSignup");

    // Open modal (triggered by login button in header)
    document.querySelector(".login-btn-toggle").addEventListener("click", () => {
        modalOverlay.style.display = "block";
    });

    // Close modal
    closeModalBtn.addEventListener("click", () => {
        modalOverlay.style.display = "none";
    });

    // Hide modal on background click
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = "none";
        }
    });

    // Step 1 -> Step 2 (Go to Password Input)
    nextBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        if (username.trim() === "") {
            alert("Please enter your username, email, or phone number.");
        } else {
            step1.style.display = "none";
            step2.style.display = "block";
        }
    });

    // Back to Step 1 from Step 2
    backToStep1.addEventListener("click", () => {
        step2.style.display = "none";
        step1.style.display = "block";
    });

    // Step 1 -> Forgot Password Section
    forgotPasswordBtn.addEventListener("click", () => {
        step1.style.display = "none";
        forgotPasswordSection.style.display = "block";
    });

    // Back to Step 1 from Forgot Password
    backToLogin.addEventListener("click", () => {
        forgotPasswordSection.style.display = "none";
        step1.style.display = "block";
    });

    // Step 1 -> Sign Up Section
    signUpBtn.addEventListener("click", () => {
        step1.style.display = "none";
        signUpSection.style.display = "block";
    });

    // Back to Step 1 from Sign Up
    backToLoginFromSignup.addEventListener("click", () => {
        signUpSection.style.display = "none";
        step1.style.display = "block";
    });

    // Login Button (Step 2)
    document.getElementById("loginBtn").addEventListener("click", () => {
        const password = document.getElementById("password").value;
        if (password.trim() === "") {
            alert("Please enter your password.");
        } else {
            alert("Login successful!");
            modalOverlay.style.display = "none";
        }
    });

    // Reset Password Button
    document.getElementById("resetPasswordBtn").addEventListener("click", () => {
        const email = document.getElementById("forgotEmail").value;
        if (email.trim() === "") {
            alert("Please enter your email.");
        } else {
            alert("Password reset instructions sent to your email.");
            modalOverlay.style.display = "none";
        }
    });

    // Sign Up Button
    document.getElementById("signUpSubmitBtn").addEventListener("click", () => {
        const username = document.getElementById("signupUsername").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
            alert("Please fill out all fields.");
        } else {
            alert("Sign up successful!");
            modalOverlay.style.display = "none";
        }
    });
});