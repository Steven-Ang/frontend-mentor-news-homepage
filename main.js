const body = document.querySelector("body");
const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const navigationContent = document.getElementById("navigation-content");
const mainContent = document.querySelector(".content");

const bodyScrollLock = bodyScrollLockUpgrade;

const media = window.matchMedia("(width < 42em)");

const openMenu = () => {
  openMenuButton.setAttribute("aria-expanded", "true");
  closeMenuButton.setAttribute("aria-hidden", "false");
  navigationContent.removeAttribute("inert");
  mainContent.setAttribute("inert", "");

  bodyScrollLock.disableBodyScroll(body);

  closeMenuButton.focus();
};

const closeMenu = () => {
  openMenuButton.setAttribute("aria-expanded", "false");
  closeMenuButton.setAttribute("aria-hidden", "true");
  navigationContent.removeAttribute("inert");
  mainContent.removeAttribute("inert");

  bodyScrollLock.enableBodyScroll(body);

  openMenuButton.focus();
};

const handleResize = () => {
  if (media.matches) {
    openMenuButton.setAttribute("aria-expanded", "false");
    openMenuButton.setAttribute("aria-hidden", "false");
    closeMenuButton.setAttribute("aria-hidden", "true");
    navigationContent.setAttribute("inert", "");
    mainContent.removeAttribute("inert");

    bodyScrollLock.enableBodyScroll(body);
  } else {
    openMenuButton.setAttribute("aria-expanded", "false");
    openMenuButton.setAttribute("aria-hidden", "true");
    closeMenuButton.setAttribute("aria-hidden", "true");
    navigationContent.removeAttribute("inert");
    mainContent.removeAttribute("inert");

    bodyScrollLock.enableBodyScroll(body);
  }
};

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
media.addEventListener("change", handleResize);
