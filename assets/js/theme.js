(function () {
  var shell = document.querySelector(".site-shell");
  var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-theme-button]"));

  if (!shell || buttons.length === 0) {
    return;
  }

  function setTheme(theme) {
    shell.setAttribute("data-theme", theme);
    buttons.forEach(function (button) {
      var active = button.getAttribute("data-theme-button") === theme;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      // Local storage is optional for this page.
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setTheme(button.getAttribute("data-theme-button"));
    });
  });

  try {
    var savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  } catch (error) {
    setTheme(shell.getAttribute("data-theme") || "signal");
  }
})();
