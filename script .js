document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    function updateTheme() {
        if (body.classList.contains("light-mode")) {
            themeToggle.textContent = "Dark Mode";
        } else {
            themeToggle.textContent = "Light Mode";
        }
    }

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }

    updateTheme();

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

        updateTheme();
    });
});
