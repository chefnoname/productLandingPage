const mobileNav = document.querySelector(".mobile-nav");
const mobileMenu = document.querySelector(".mobile-stick-menu");
const mobilePersonal = document.querySelector(".mobile-personal-finance");
const mobileInsurance = document.querySelector(".mobile-insurance");

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
  // console.log(pageYOffset);
});
