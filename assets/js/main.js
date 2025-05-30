document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavbarToggleIcon();
});

/**
 * Initialize theme toggle button and apply persisted or system theme
 */
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const storedTheme = localStorage.getItem("theme");

  const setTheme = (theme) => {
    body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    updateThemeIcon(themeToggle, theme);
  };

  const updateThemeIcon = (toggleElement, theme) => {
    const icon = toggleElement.querySelector("i");
    icon.className =
      theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
  };

  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  setTheme(storedTheme || (systemPrefersDark ? "dark" : "light"));

  themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });
}

/**
 * Initialize navbar icon toggle (hamburger <-> cross)
 */
function initNavbarToggleIcon() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarIcon = document.getElementById("navbar-icon");
  const navbarCollapse = document.getElementById("navbarNav");

  if (!navbarToggler || !navbarIcon || !navbarCollapse) return;

  navbarCollapse.addEventListener("show.bs.collapse", () => {
    navbarIcon.classList.replace("bi-list", "bi-x");
  });

  navbarCollapse.addEventListener("hide.bs.collapse", () => {
    navbarIcon.classList.replace("bi-x", "bi-list");
  });
}
