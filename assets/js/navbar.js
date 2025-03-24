document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");
  let isMenuOpen = false;
  mobileMenuButton.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove("hidden");
      hamburgerIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });

  const toggleMobileSubMenu = (buttonId, menuId) => {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);
    button.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  };
  toggleMobileSubMenu("mobile-top-button", "mobile-top-menu");
  toggleMobileSubMenu("mobile-bottom-button", "mobile-bottom-menu");
  toggleMobileSubMenu("mobile-accessories-button", "mobile-accessories-menu");
});
