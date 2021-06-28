$(".personalFinanceCarousel").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
});

$(".insuranceCarousel").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
});

const thirdNav = document.querySelector(".third-nav");
const list1 = document.querySelector(".list1");
const hiddenNav = document.querySelector(".hidden-nav");
const hiddenMenu = document.querySelector(".hidden-menu");
const carContainer = document.querySelector(".car-container");
const displayBulletPoints = document.querySelector(".display-bulletPoint");
const pricingInfoContainer = document.querySelector(".pricing-info-container");

const shopFromHomeDiv = document.querySelector(".shop-from-home");

const agility = document.querySelector(".agility");
const agilityDiv = document.querySelector(".agilityAnim");

const hirePurchase = document.querySelector(".hire-purchase");
const hirePurchaseDiv = document.querySelector(".hirePurchaseAnim");

const personalOperating = document.querySelector(".personal-operating");
const personalOperatingDiv = document.querySelector(".personalOperatingAnim");

const genuineDiv = document.querySelector(".genuine-accessories");

const costComparison = document.querySelector(".cost-comparison");

const footnote = document.querySelector(".footnote");
const footnoteAnim = document.querySelector(".footnoteAnim");

const chatBubble = document.querySelector(".chat");
const chatBox = document.querySelector(".chat-box");
const arrowDown = document.querySelector(".chatBtnDwn");

const searchPage = document.querySelector(".searchPage");
const exitButton = document.querySelector(".exit");
const rightSideSearch = document.querySelector(".topSearch");

const bulletOneAnim = document.querySelector(".bullet1Anim");
const bulletOnePara = document.querySelector(".bullet1Para");

const bulletTwoAnim = document.querySelector(".bullet2Anim");
const bulletTwoPara = document.querySelector(".bullet2Para");

const bulletThreeAnim = document.querySelector(".bullet3Anim");
const bulletThreePara = document.querySelector(".bullet3Para");

const bulletFourAnim = document.querySelector(".bullet4Anim");
const bulletFourPara = document.querySelector(".bullet4Para");

const bulletFiveAnim = document.querySelector(".bullet5Anim");
const bulletFivePara = document.querySelector(".bullet5Para");

const donut1 = document.querySelector(".donut1");

const donut2 = document.querySelector(".donut2");

const donut3 = document.querySelector(".donut3");

const donut4 = document.querySelector(".donut4");

const donut5 = document.querySelector(".donut5");

let counter = 0;

const reloadIt = () => {
  location.reload();
};

// if (sessionStorage.getItem("homePageView") === null && mobileWidthSize === 10) {
//   sessionStorage.setItem("homePageView", 1);
//   document.addEventListener("click", reloadIt);
//   sessionStorage.setItem("mobileView", 1);
// }

// if (sessionStorage.getItem("tabletView") === null && mobileWidthSize === 1) {
//   document.addEventListener("click", reloadIt);
//   sessionStorage.setItem("tabletView", 1);
// }

document.addEventListener("mousemove", (e) => {
  if (event.clientX <= 35) {
    hiddenNav.classList.add("hidden-navAnim");
  } else if (event.clientX > 218) {
    hiddenNav.classList.remove("hidden-navAnim");
  }
});

const productsContainer = document.querySelector(".products-services");
const genuineAccessoriesContainer = document.querySelector(
  ".genuine-info-container"
);

bulletFourPara.addEventListener("click", (e) => {
  costComparison.scrollIntoView({ behavior: "smooth", block: "center" });
});

const tiles = document.querySelector(".tileUnder");

bulletFivePara.addEventListener("click", (e) => {
  tiles.scrollIntoView({ behavior: "smooth" });
});

const miniTitle = document.querySelector(".miniTitle");

const upButton = document.querySelector(".upButton");

upButton.addEventListener("click", (e) => {
  searchPage.scrollIntoView({ behavior: "smooth" });
});

miniTitle.addEventListener("click", (e) => {
  searchPage.scrollIntoView({ behavior: "smooth" });
});

const personalFinance = document.querySelector(".personal-finance");
const insuranceBtn = document.querySelector(".insurance");
const servicingBtn = document.querySelector(".servicing");

const motorInsurance = document.querySelector(".motor-insurance");
const firstCover = document.querySelector(".first-cover");
const personalContactHire = document.querySelector(".personalContactHire");
const servicingTab = document.querySelector(".serviceTab");
const genuineCornerSearch = document.querySelector(".genuine-corner-search");

insuranceBtn.addEventListener("click", (e) => {
  insuranceBtn.style.color = "rgba(14, 165, 235, 0.897)";
  insuranceBtn.style.background = "rgba(102, 100, 100, 0.329)";

  personalFinance.style.color = "white";
  personalFinance.style.background = "rgba(58, 56, 56, 0.795)";

  servicingBtn.style.color = "white";
  servicingBtn.style.background = "rgba(58, 56, 56, 0.795)";

  agility.style.display = "none";
  hirePurchase.style.display = "none";
  personalOperating.style.visibility = "hidden";
  personalContactHire.style.display = "none";

  motorInsurance.style.display = "block";
  firstCover.style.display = "block";

  motorInsurance.classList.add("slide-up3");
  firstCover.classList.add("slide-up3");

  servicingTab.style.display = "none";

  genuineCornerSearch.style.bottom = "-1885px";
});

personalFinance.addEventListener("click", (e) => {
  counter = 1;

  personalFinance.style.color = "rgba(14, 165, 235, 0.897)";
  personalFinance.style.background = "rgba(102, 100, 100, 0.329)";

  insuranceBtn.style.color = "white";
  insuranceBtn.style.background = "rgba(58, 56, 56, 0.795)";

  servicingBtn.style.color = "white";
  servicingBtn.style.background = "rgba(58, 56, 56, 0.795)";

  agility.style.display = "block";
  agility.classList.remove("slide-up2");
  agilityDiv.classList.remove("agilityAnim");

  hirePurchase.style.display = "block";
  hirePurchase.classList.remove("slide-up2");
  personalOperating.style.visibility = "visible";
  personalContactHire.style.display = "block";

  motorInsurance.style.display = "none";
  firstCover.style.display = "none";

  servicingTab.style.display = "none";

  genuineCornerSearch.style.bottom = "-2187px";
});

servicingBtn.addEventListener("click", (e) => {
  servicingBtn.style.color = "rgba(14, 165, 235, 0.897)";
  servicingBtn.style.background = "rgba(102, 100, 100, 0.329)";

  insuranceBtn.style.color = "white";
  insuranceBtn.style.background = "rgba(58, 56, 56, 0.795)";

  personalFinance.style.color = "white";
  personalFinance.style.background = "rgba(58, 56, 56, 0.795)";

  agility.style.display = "none";
  hirePurchase.style.display = "none";
  personalOperating.style.visibility = "hidden";
  personalContactHire.style.display = "none";

  motorInsurance.style.display = "none";
  firstCover.style.display = "none";

  servicingTab.style.display = "block";
  servicingTab.classList.add("slide-up3");

  genuineCornerSearch.style.bottom = "-1885px";
});

// const mobileNav = document.querySelector(".mobile-nav");

// document.addEventListener("touchmove", (e) => {
//   mobileNav.style.position = "sticky";
//   mobileNav.style.top = "0px";
// });

// MAIN JS EVENT LISTENERS
let mobileWidthSize;
// mobileWidthSize = window.innerWidth <= 426 ? 0 : 1;

if (window.innerWidth <= 340) {
  mobileWidthSize = 0;
} else if (window.innerWidth <= 415) {
  mobileWidthSize = 1;
} else if (window.innerWidth <= 495) {
  mobileWidthSize = 2;
} else if (window.innerWidth <= 768) {
  mobileWidthSize = 3;
} else if (window.innerWidth <= 1050) {
  mobileWidthSize = 4;
} else if (window.innerWidth >= 1300) {
  mobileWidthSize = 5;
} else {
  mobileWidthSize = 10;
}

console.log(mobileWidthSize, window.innerWidth);
// console.log("mobileWidthSize is " + mobileWidthSize);

document.addEventListener("scroll", (e) => {
  if (pageYOffset >= 150 && mobileWidthSize === 10) {
    pricingInfoContainer.classList.add("slide-up2");
    pricingInfoContainer.classList.remove("pricing-info-container");
  }
  if (pageYOffset >= 200 && mobileWidthSize === 10) {
    thirdNav.classList.add("sticky");
  } else {
    thirdNav.classList.remove("sticky");
  }
  if (pageYOffset < 570 && mobileWidthSize === 10) {
    donut1.style.visibility = "hidden";
    bulletOneAnim.style.color = "white";
    bulletOnePara.style.color = "white";
    bulletOnePara.style.fontWeight = "normal";
  }
  if (pageYOffset >= 570 && mobileWidthSize === 10) {
    shopFromHomeDiv.classList.add("slide-up");
    shopFromHomeDiv.classList.remove("shop-from-home");
    donut1.style.visibility = "visible";
    donut1.style.zIndex = "40";
    donut2.style.visibility = "hidden";
    bulletOneAnim.style.color = "rgba(14, 165, 235, 0.808)";
    bulletOnePara.style.color = "rgba(14, 165, 235, 0.808)";
    bulletOnePara.style.fontWeight = "900";
    bulletTwoAnim.style.color = "white";
    bulletTwoPara.style.color = "white";
    bulletTwoPara.style.fontWeight = "normal";
  }
  if (pageYOffset >= 1250 && mobileWidthSize === 10) {
    if (counter === 0) {
      agility.classList.add("slide-up2");
      agilityDiv.classList.remove("agilityAnim");
      setTimeout(() => {
        hirePurchase.classList.add("slide-up2");
        hirePurchaseDiv.classList.remove("hirePurchaseAnim");
      }, 200);
      setTimeout(() => {
        personalOperating.classList.add("slide-up2");
        personalOperatingDiv.classList.remove("personalOperatingAnim");
      }, 300);
    }
    donut2.style.visibility = "visible";
    donut2.style.zIndex = "40";
    donut1.style.visibility = "hidden";
    donut3.style.visibility = "hidden";
    bulletOneAnim.style.color = "white";
    bulletOnePara.style.color = "white";
    bulletOnePara.style.fontWeight = "normal";
    bulletTwoAnim.style.color = "rgba(14, 165, 235, 0.808)";
    bulletTwoPara.style.color = "rgba(14, 165, 235, 0.808)";
    bulletTwoPara.style.fontWeight = "900";
    bulletThreeAnim.style.color = "white";
    bulletThreePara.style.color = "white";
    bulletThreePara.style.fontWeight = "normal";
  }
  if (pageYOffset >= 1950 && mobileWidthSize === 10) {
    genuineDiv.classList.add("slide-up2");
    genuineDiv.classList.remove("genuine-accessories");
    donut3.style.visibility = "visible";
    donut3.style.zIndex = "40";
    donut2.style.visibility = "hidden";
    donut4.style.visibility = "hidden";
    bulletThreeAnim.style.color = "rgba(14, 165, 235, 0.808)";
    bulletThreePara.style.color = "rgba(14, 165, 235, 0.808)";
    bulletThreePara.style.fontWeight = "900";
    bulletTwoAnim.style.color = "white";
    bulletTwoPara.style.color = "white";
    bulletTwoPara.style.fontWeight = "normal";
    bulletFourAnim.style.color = "white";
    bulletFourPara.style.color = "white";
    bulletFourPara.style.fontWeight = "normal";
  }
  if (pageYOffset >= 2500 && mobileWidthSize === 10) {
    costComparison.classList.add("slide-up2");
    costComparison.classList.remove("cost-comparison");
    donut4.style.visibility = "visible";
    donut4.style.zIndex = "40";
    donut3.style.visibility = "hidden";
    donut5.style.visibility = "hidden";
    bulletFourAnim.style.color = "rgba(14, 165, 235, 0.808)";
    bulletFourPara.style.color = "rgba(14, 165, 235, 0.808)";
    bulletFourPara.style.fontWeight = "900";
    bulletThreeAnim.style.color = "white";
    bulletThreePara.style.color = "white";
    bulletThreePara.style.fontWeight = "normal";
    bulletFiveAnim.style.color = "white";
    bulletFivePara.style.color = "white";
    bulletFivePara.style.fontWeight = "normal";
  }
  if (pageYOffset >= 2700 && mobileWidthSize === 10) {
    footnote.classList.add("slide-up2");
    footnoteAnim.classList.remove("footnoteAnim");
  }
  if (pageYOffset >= 3000 && mobileWidthSize === 10) {
    donut5.style.visibility = "visible";
    donut5.style.zIndex = "40";
    donut4.style.visibility = "hidden";
    bulletFiveAnim.style.color = "rgba(14, 165, 235, 0.808)";
    bulletFivePara.style.color = "rgba(14, 165, 235, 0.808)";
    bulletFivePara.style.fontWeight = "900";
    bulletFourAnim.style.color = "white";
    bulletFourPara.style.color = "white";
    bulletFourPara.style.fontWeight = "normal";
  }
  if (pageYOffset >= 3500 && mobileWidthSize === 10) {
    donut5.style.visibility = "hidden";
    bulletFiveAnim.style.color = "white";
    bulletFivePara.style.color = "white";
    bulletFivePara.style.fontWeight = "normal";
  }
  // console.log(Math.ceil(pageYOffset));
});

chatBubble.addEventListener("click", (e) => {
  chatBox.style.visibility = "visible";
  chatBubble.style.visibility = "hidden";
  mobileMenu.style.visibility = "hidden";
});

arrowDown.addEventListener("click", (e) => {
  chatBox.style.visibility = "hidden";
  chatBubble.style.visibility = "visible";
  mobileMenu.style.visibility = "visible";
});

rightSideSearch.addEventListener("click", (e) => {
  searchPage.style.zIndex = "3000";
  exitButton.style.visibility = "visible";
  thirdNav.style.visibility = "hidden";
  chatBubble.style.visibility = "hidden";
  document.body.style.overflowY = "hidden";
});

exitButton.addEventListener("click", (e) => {
  searchPage.style.zIndex = "-30";
  exitButton.style.visibility = "hidden";
  thirdNav.style.visibility = "visible";
  chatBubble.style.visibility = "visible";
  document.body.style.overflowY = "scroll";
});

bulletOnePara.addEventListener("mouseover", (e) => {
  bulletOneAnim.style.color = "rgba(14, 165, 235, 0.808)";
});

bulletOnePara.addEventListener("mouseout", (e) => {
  if (donut1.style.visibility === "hidden") {
    bulletOneAnim.style.color = "white";
  }
});

bulletTwoPara.addEventListener("mouseover", (e) => {
  bulletTwoAnim.style.color = "rgba(14, 165, 235, 0.808)";
});

bulletTwoPara.addEventListener("mouseout", (e) => {
  if (donut2.style.visibility === "hidden") {
    bulletTwoAnim.style.color = "white";
  }
});

bulletThreePara.addEventListener("mouseover", (e) => {
  bulletThreeAnim.style.color = "rgba(14, 165, 235, 0.808)";
});

bulletThreePara.addEventListener("mouseout", (e) => {
  if (donut3.style.visibility === "hidden") {
    bulletThreeAnim.style.color = "white";
  }
});

bulletFourPara.addEventListener("mouseover", (e) => {
  bulletFourAnim.style.color = "rgba(14, 165, 235, 0.808)";
});

bulletFourPara.addEventListener("mouseout", (e) => {
  if (donut4.style.visibility === "hidden") {
    bulletFourAnim.style.color = "white";
  }
});

bulletFivePara.addEventListener("mouseover", (e) => {
  bulletFiveAnim.style.color = "rgba(14, 165, 235, 0.808)";
});

bulletFivePara.addEventListener("mouseout", (e) => {
  if (donut5.style.visibility === "hidden") {
    bulletFiveAnim.style.color = "white";
  }
});

bulletOnePara.addEventListener("click", (e) => {
  pricingInfoContainer.scrollIntoView({ behavior: "smooth", block: "center" });
});

bulletTwoPara.addEventListener("click", (e) => {
  productsContainer.scrollIntoView({ behavior: "smooth" });
});

bulletThreePara.addEventListener("click", (e) => {
  genuineAccessoriesContainer.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});
