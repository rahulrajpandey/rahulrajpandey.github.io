document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavbarToggleIcon();
  
  // Remove FOUC protection after theme is loaded
  setTimeout(() => {
    document.body.classList.add('theme-loaded');
  }, 100);
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
    
    // Force immediate style recalculation
    body.style.backgroundColor = '';
    body.style.color = '';
    
    // Force all elements to inherit theme colors
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      el.style.backgroundColor = '';
      el.style.color = '';
    });
    
    console.log("Theme set to:", theme); // Debug log
    console.log("Body background:", window.getComputedStyle(body).backgroundColor);
    console.log("Body color:", window.getComputedStyle(body).color);
    
    // Force browser to repaint
    requestAnimationFrame(() => {
      console.log("After repaint - Body background:", window.getComputedStyle(body).backgroundColor);
      console.log("After repaint - Body color:", window.getComputedStyle(body).color);
    });
  };

  const updateThemeIcon = (toggleElement, theme) => {
    const icon = toggleElement.querySelector("i");
    if (icon) {
      icon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
      // Update aria-label for accessibility
      toggleElement.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  };

  // Determine initial theme
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");
  
  console.log("Initial theme setup:", { storedTheme, systemPrefersDark, initialTheme }); // Debug log
  
  // Set initial theme immediately
  setTheme(initialTheme);
  
  // Add fallback inline styles for immediate theme application
  const applyInlineTheme = (theme) => {
    const darkMode = theme === "dark";
    document.documentElement.style.setProperty('--test-bg', darkMode ? '#121212' : '#ffffff');
    document.documentElement.style.setProperty('--test-text', darkMode ? '#ffffff' : '#000000');
  };
  
  applyInlineTheme(initialTheme);

  // Ensure the toggle exists before adding event listener
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      console.log("Toggling theme from", currentTheme, "to", newTheme); // Debug log
      setTheme(newTheme);
    });
  } else {
    console.error("Theme toggle button not found!");
  }

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
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

