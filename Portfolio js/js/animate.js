const headerMenu = document.querySelector(".menu-container header");
const homeSection = document.querySelector(".home-section");
const navOpen = document.querySelector(".navOpen");
const navClose = document.querySelector(".navClose");
const navigate = document.querySelectorAll(".navigate");

menuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
  navOpen.classList.toggle("nope");
  navClose.classList.toggle("yope");
  homeSection.classList.toggle("show");
});

navigate.forEach((nav) => {
  nav.addEventListener("click", () => {
    navClose.classList.remove("yope");
    navOpen.classList.remove("nope");
    headerMenu.classList.remove("active");
    homeSection.classList.remove("show");
  });
});

// Animation nav
gsap.from("nav", 2.8, { x: -1500, ease: Expo.easeInOut });
gsap.from("main", 2, { y: -700, ease: Expo.easeInOut });
gsap.from(".nav-nameimg", 8, { x: 800, ease: Expo.easeInOut });
gsap.from(".home-section", 4, { y: -50, ease: Expo.easeInOut });
// gsap.from(".intro-header", 4, { x: -200, ease: Expo.easeInOut });
gsap.from(".menuBtn", 6, { x: -300, y: -600, ease: Expo.easeInOut });
gsap.from(".projects", 8, { x: 300, y: 300, z: 300, ease: Expo.easeInOut });

TweenMax.staggerFrom(
  ".intro-header",
  3,
  {
    opacity: 0,
    x: -200,
    ease: Expo.easeInOut,
    delay: 1.4,
  },
  0.008
);
TweenMax.staggerFrom(
  ".skills-container",
  3,
  {
    opacity: 0,
    x: 400,
    ease: Expo.easeInOut,
    delay: 2.9,
  },
  0.008
);

// navigation stuff
