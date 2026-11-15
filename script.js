// Task 1 - Profile Page JavaScript
// Student: AlSaeed Hany AlSaeed Tawfik | ID: 225111956

// 1. Dark Mode Toggle Button Logic
// The button toggles class 'dark' on document.body.
// All color changes are handled completely via CSS variables.
const themeToggleBtn = document.getElementById("themeToggleBtn");

themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    // Optional: update button label text dynamically
    if (document.body.classList.contains("dark")) {
        themeToggleBtn.textContent = "Toggle Light Mode";
    } else {
        themeToggleBtn.textContent = "Toggle Dark Mode";
    }
});

// 2. Interactive Contact Form Handler (Bonus Feature)
// Validates inputs and shows a polite greeting message to the visitor
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const nameInput = document.getElementById("userName").value.trim();
    const emailInput = document.getElementById("userEmail").value.trim();

    if (nameInput !== "" && emailInput !== "") {
        formMsg.textContent = `Thank you, ${nameInput}! Your message has been received.`;
        contactForm.reset();
    }
});
