// Find the theme button and change the page mode when it is clicked.
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Switch to light mode";
    } else {
        themeButton.textContent = "Switch to dark mode";
    }
});
