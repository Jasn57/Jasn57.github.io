document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const isLightMode = localStorage.getItem("theme") === "light";

    body.classList.toggle("light-mode", isLightMode);
    themeToggle.textContent = isLightMode ? "Dark Mode" : "Light Mode";

    themeToggle.addEventListener("click", () => {
        const lightMode = body.classList.toggle("light-mode");
        localStorage.setItem("theme", lightMode ? "light" : "dark");
        themeToggle.textContent = lightMode ? "Dark Mode" : "Light Mode";
    });
});
