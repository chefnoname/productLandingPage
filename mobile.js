const mobileNav = document.querySelector(".mobile-nav");
const mobileMenu = document.querySelector(".mobile-stick-menu");
const mobilePersonal = document.querySelector(".mobile-personal-finance");
const mobileInsurance = document.querySelector(".mobile-insurance");
const mobileService = document.querySelector(".mobile-service");
const genuinePic = document.querySelector(".hovering");
const mobilePopUp = document.querySelector(".mobileMenu");
const burgerMenu = document.querySelector(".topMenu");
const exitCross = document.querySelector(".clickHere");
let lastScrollTop = 0;

document.addEventListener("scroll", (e) => {
  var st = pageYOffset;
  if (st > lastScrollTop) {
    mobileNav.style.position = "sticky";
    mobileNav.style.top = "33px";
    mobileMenu.style.position = "fixed";
    mobileMenu.style.top = "505px";
  } else {
    mobileNav.style.top = "0px";
    mobileMenu.style.top = "470px";
  }
  lastScrollTop = st <= 0 ? 0 : st;

  if (pageYOffset >= 500) {
    shopFromHomeDiv.classList.add("mobileSlideUp");
  }

  if (pageYOffset >= 1500) {
    mobilePersonal.classList.add("mobileSlideUp2");
  }

  if (pageYOffset >= 1800) {
    mobileInsurance.classList.add("mobileSlideUp3");
  }

  if (pageYOffset >= 2200) {
    mobileService.classList.add("mobileSlideUp3");
  }

  if (pageYOffset >= 2700) {
    genuinePic.classList.add("mobileSlideUp5");
  }

  if (pageYOffset >= 3400) {
    costComparison.classList.add("mobileSlideUp6");
  }
  // console.log(pageYOffset);
});

burgerMenu.addEventListener("click", (e) => {
  mobilePopUp.classList.add("slideLeft");
  mobilePopUp.style.display = "block";
  mobilePopUp.style.overflowY = "scroll";
  document.body.style.overflowY = "hidden";
  // mobilePopUp.classList.remove("slideRight");
  mobilePopUp.style.left = "0px";
});

exitCross.addEventListener("click", (e) => {
  mobilePopUp.style.display = "none";
  document.body.style.overflowY = "scroll";
});

chatBubble.addEventListener("click", (e) => {
  chatBox.style.visibility = "visible";
  chatBubble.style.visibility = "hidden";
  mobileMenu.style.visibility = "hidden";
  document.body.style.overflowY = "hidden";
});

arrowDown.addEventListener("click", (e) => {
  chatBox.style.visibility = "hidden";
  chatBubble.style.visibility = "visible";
  mobileMenu.style.visibility = "visible";
  document.body.style.overflowY = "scroll";
});

const mobileNavMenu = document.querySelector(".mobileNavMenu");
const mobileNavExit = document.querySelector(".exitt");

mobileNav.addEventListener("click", (e) => {
  mobileNavMenu.classList.add("opaque");
  mobileNavMenu.style.visibility = "visible";
});

mobileNavExit.addEventListener("click", (e) => {
  mobileNavMenu.classList.add("backOpaque");

  setTimeout(() => {
    mobileNavMenu.style.visibility = "hidden";
  }, 2000);

  mobileNavMenu.classList.remove("opaque");
});

console.log(mobileNavMenu);
console.log(mobileNav);

// const topPart = document.querySelector(".topPart");
// const mobileMenuSearch = document.querySelector(".mobileMenuSearch");
// const mobileMenuPic = document.querySelector(".mobileMenuPic");
// console.log(burgerMenu);
// console.log(mobilePopUp);
