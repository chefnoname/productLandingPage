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

console.log("current mws ", mobileWidthSize);

console.log("this is the window.InnerWid", window.innerWidth);

document.addEventListener("scroll", (e) => {
  var st = pageYOffset;
  if (st > lastScrollTop) {
    mobileNav.style.position = "sticky";

    if (mobileWidthSize === 0) {
      mobileNav.style.top = "33px";
      mobileMenu.style.top = "505px";
    }

    if (mobileWidthSize === 1) {
      mobileNav.style.top = "57px";
      mobileMenu.style.top = "527px";
    }

    if (mobileWidthSize === 2) {
      mobileNav.style.top = "86px";
      mobileMenu.style.top = "560px";
    }

    mobileMenu.style.position = "fixed";
  } else {
    mobileNav.style.top = "0px";
    mobileMenu.style.top = "470px";
  }
  lastScrollTop = st <= 0 ? 0 : st;

  if (pageYOffset >= 500) {
    shopFromHomeDiv.classList.add("mobileSlideUp");
  }

  if (pageYOffset >= 1400) {
    mobilePersonal.classList.add("mobileSlideUp2");
  }

  if (pageYOffset >= 1600) {
    mobileInsurance.classList.add("mobileSlideUp3");
  }

  if (pageYOffset >= 2200) {
    mobileService.classList.add("mobileSlideUp3");
  }

  if (pageYOffset >= 2600) {
    genuinePic.classList.add("mobileSlideUp5");
  }

  if (pageYOffset >= 3300) {
    costComparison.classList.add("mobileSlideUp6");
  }
});

if (mobileWidthSize !== 10) {
  chatBubble.addEventListener("click", (e) => {
    document.body.style.overflowY = "hidden";
  });

  arrowDown.addEventListener("click", (e) => {
    document.body.style.overflowY = "scroll";
  });
}

burgerMenu.addEventListener("click", (e) => {
  mobilePopUp.classList.add("slideLeft");
  mobilePopUp.style.display = "block";
  mobilePopUp.style.overflowY = "scroll";
  document.body.style.overflowY = "hidden";
  // mobilePopUp.classList.remove("slideRight");
  mobilePopUp.style.left = "0px";
  chatBubble.style.color = "rgb(58, 56, 56)";
  chatBubble.style.zIndex = "5000";
  chatBox.style.zIndex = "5000";
});

exitCross.addEventListener("click", (e) => {
  document.body.style.overflowY = "scroll";

  mobilePopUp.style.display = "none";
  chatBubble.style.color = "white";
});

const mobileNavMenu = document.querySelector(".mobileNavMenu");
const mobileNavExit = document.querySelector(".exitt");

const topCar = document.querySelector(".topCar");
const ourCarMenu = document.querySelector(".ourCarMenu");
const ourCarExits = document.querySelector(".clickHere2");

topCar.addEventListener("click", (e) => {
  ourCarMenu.classList.add("slideLeft");
  ourCarMenu.style.display = "block";
  ourCarMenu.style.overflowY = "scroll";
  document.body.style.overflowY = "hidden";
  ourCarMenu.style.left = "0px";
  ourCarMenu.classList.remove("backOpaque");

  chatBubble.style.color = "rgb(58, 56, 56)";
  chatBubble.style.zIndex = "5000";
  chatBox.style.zIndex = "5000";
});

ourCarExits.addEventListener("click", (_e) => {
  document.body.style.overflowY = "scroll";
  ourCarMenu.style.display = "none";

  chatBubble.style.color = "white";
});

mobileNav.addEventListener("click", (e) => {
  mobileNavMenu.classList.add("opaque");
  mobileNavMenu.style.visibility = "visible";
  document.body.style.overflowY = "hidden";
  mobileNavMenu.classList.remove("backOpaque");
});

mobileNavExit.addEventListener("click", (e) => {
  mobileNavMenu.classList.add("backOpaque");

  setTimeout(() => {
    mobileNavMenu.style.visibility = "hidden";
  }, 400);

  document.body.style.overflowY = "scroll";
  mobileNavMenu.classList.remove("opaque");
});
const mobileNavBar = document.querySelector(".nav-bar");

upButton.addEventListener("click", (e) => {
  mobileNavBar.scrollIntoView({
    behavior: "smooth",
  });
});
// const topPart = document.querySelector(".topPart");
// const mobileMenuSearch = document.querySelector(".mobileMenuSearch");
// const mobileMenuPic = document.querySelector(".mobileMenuPic");
// console.log(burgerMenu);
// console.log(mobilePopUp);
