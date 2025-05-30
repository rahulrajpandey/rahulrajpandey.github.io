const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const storedTheme = localStorage.getItem("theme");

function setTheme(theme) {
  body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  const icon = themeToggle.querySelector("i");
  icon.className =
    theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
}

if (storedTheme) {
  setTheme(storedTheme);
} else {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  setTheme(systemPrefersDark ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
  const current = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(current);
});


// navbar toggle icon change
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarIcon = document.getElementById("navbar-icon");
    const navbarCollapse = document.getElementById("navbarNav");

    // Listen to Bootstrap's collapse events
    navbarCollapse.addEventListener("show.bs.collapse", function () {
      navbarIcon.classList.remove("bi-list");
      navbarIcon.classList.add("bi-x");
    });

    navbarCollapse.addEventListener("hide.bs.collapse", function () {
      navbarIcon.classList.remove("bi-x");
      navbarIcon.classList.add("bi-list");
    });
  });
