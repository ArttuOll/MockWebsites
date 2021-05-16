const BTSTRP_MEDIUM_CUTOFF = 768;

document.addEventListener("DOMContentLoaded", () => {
  setDotsUnderNavLinks();
  configureCarousel();
});

function setDotsUnderNavLinks() {
  const navLinks = document.getElementsByClassName("nav-link");
  Array.from(navLinks).forEach((navLink) =>
    setDotPositionDependingOnWindowSize(navLink));
}

function setDotPositionDependingOnWindowSize(navLink) {
  navLink.addEventListener("mouseover", () => {
    if (window.innerWidth < BTSTRP_MEDIUM_CUTOFF) {
      navLink.style.backgroundPosition = "left bottom";
    } else {
      navLink.style.backgroundPosition = "bottom";
    }
  });
}

function configureCarousel() {
  $("#carousel").carousel({
    interval: false
  });
}
