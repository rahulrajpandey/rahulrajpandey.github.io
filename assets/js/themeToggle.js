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
