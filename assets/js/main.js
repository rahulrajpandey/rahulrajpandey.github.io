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
  const navbarCollapse = document.getElementById("navbarNav");
  const hamburgerIcon = document.getElementById("navbar-icon-hamburger");
  const closeIcon = document.getElementById("navbar-icon-close");

  if (!navbarCollapse || !hamburgerIcon || !closeIcon) return;

  navbarCollapse.addEventListener("show.bs.collapse", () => {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "inline";
  });

  navbarCollapse.addEventListener("hide.bs.collapse", () => {
    hamburgerIcon.style.display = "inline";
    closeIcon.style.display = "none";
  });
}

