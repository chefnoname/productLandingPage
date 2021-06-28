const wrapper = document.querySelector(".wrapper");
const wrapPricingInfo = document.querySelector(".wrapPricingInfo");
const wrapProducts = document.querySelector(".wrapProducts");
const wrapGenuine = document.querySelector(".wrapGenuine");
const leftSideMercSign = document.querySelector(".leftSideMerc");

if (mobileWidthSize === 3) {
  document.addEventListener("scroll", (e) => {
    // console.log(pageYOffset);

    //   Bullet 1 pageY = 300
    if (pageYOffset < 300) {
      donut1.style.visibility = "hidden";

      bulletOneAnim.style.color = "white";
      bulletOnePara.style.color = "white";
      bulletOnePara.style.fontWeight = "normal";
    }

    if (pageYOffset >= 350) {
      shopFromHomeDiv.classList.add("shopFromTabletSlide");
    }

    if (pageYOffset >= 650) {
      donut1.style.visibility = "visible";
      donut1.style.zIndex = "40";

      donut2.style.visibility = "hidden";

      bulletOneAnim.style.color = "rgba(14, 165, 235, 0.808)";
      bulletOnePara.style.color = "rgba(14, 165, 235, 0.808)";
      bulletOnePara.style.fontWeight = "900";

      bulletTwoAnim.style.color = "white";
      bulletTwoPara.style.color = "white";
    }

    //   Bullet 2 pageY = 650 / 700

    if (pageYOffset >= 880) {
      agility.classList.add("agilityTabletSlide");
      hirePurchase.classList.add("agilityTabletSlide");
    }

    if (pageYOffset >= 900) {
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
    //   Bullet 3 pageY = 900 / 1000
    if (pageYOffset >= 1500) {
      genuineDiv.classList.add("agilityTabletSlide");
    }

    if (pageYOffset >= 1700) {
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
    //   Bullet 4 pageY = 1700

    if (pageYOffset >= 1800) {
      costComparison.classList.add("agilityTabletSlide");
    }

    if (pageYOffset >= 2300) {
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
    //   Bullet 5 pageY = 2300
    if (pageYOffset >= 2800) {
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

    if (pageYOffset >= 2900) {
      donut5.style.visibility = "hidden";
      bulletFiveAnim.style.color = "white";
      bulletFivePara.style.color = "white";
      bulletFivePara.style.fontWeight = "normal";
    }
  });

  upButton.addEventListener("click", (e) => {
    // wrapper.scrollIntoView(true);
    wrapper.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  });

  topCar.addEventListener("click", (e) => {
    ourCarMenu.classList.add("tabletSlide");

    ourCarMenu.style.left = "0px";
    ourCarMenu.classList.remove("backTabSlide");

    leftSideMercSign.style.position = "relative";
    leftSideMercSign.style.left = "155px";

    rightSideSearch.style.position = "relative";
    rightSideSearch.style.left = "280px";
  });

  ourCarExits.addEventListener("click", (e) => {
    leftSideMercSign.style.left = "00px";
    rightSideSearch.style.left = "0px";
  });

  burgerMenu.addEventListener("click", (e) => {
    mobilePopUp.classList.add("tabletSlide");

    leftSideMercSign.style.position = "relative";
    leftSideMercSign.style.left = "155px";

    rightSideSearch.style.position = "relative";
    rightSideSearch.style.left = "280px";
  });

  exitCross.addEventListener("click", (e) => {
    mobilePopUp.classList.remove("tabletSlide");

    leftSideMercSign.style.left = "00px";
    rightSideSearch.style.left = "0px";
  });

  console.log(pageYOffset);
}

// LAPTOP 1024PX //

if (mobileWidthSize === 4) {
  document.addEventListener("scroll", (e) => {
    // console.log(pageYOffset);

    //   Bullet 1 pageY = 300
    if (pageYOffset < 300) {
      donut1.style.visibility = "hidden";

      bulletOneAnim.style.color = "white";
      bulletOnePara.style.color = "white";
      bulletOnePara.style.fontWeight = "normal";
    }

    if (pageYOffset >= 320) {
      shopFromHomeDiv.classList.add("shopFromLaptopSlide");
    }

    if (pageYOffset >= 650) {
      donut1.style.visibility = "visible";
      donut1.style.zIndex = "40";

      donut2.style.visibility = "hidden";

      bulletOneAnim.style.color = "rgba(14, 165, 235, 0.808)";
      bulletOnePara.style.color = "rgba(14, 165, 235, 0.808)";
      bulletOnePara.style.fontWeight = "900";

      bulletTwoAnim.style.color = "white";
      bulletTwoPara.style.color = "white";
    }

    //   Bullet 2 pageY = 650 / 700

    if (pageYOffset >= 700) {
      agility.classList.add("agilityTabletSlide");
      setTimeout(() => {
        hirePurchase.classList.add("agilityTabletSlide");
      }, 300);
      setTimeout(() => {
        personalOperating.classList.add("personalOperatingSlide");
      }, 500);
    }

    if (pageYOffset >= 900) {
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
    //   Bullet 3 pageY = 900 / 1000
    if (pageYOffset >= 1500) {
      genuineDiv.classList.add("agilityTabletSlide");
    }

    if (pageYOffset >= 1700) {
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
    //   Bullet 4 pageY = 1700

    if (pageYOffset >= 1800) {
      costComparison.classList.add("agilityTabletSlide");
    }

    if (pageYOffset >= 2300) {
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
    //   Bullet 5 pageY = 2300
    if (pageYOffset >= 2800) {
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

    if (pageYOffset >= 2900) {
      donut5.style.visibility = "hidden";
      bulletFiveAnim.style.color = "white";
      bulletFivePara.style.color = "white";
      bulletFivePara.style.fontWeight = "normal";
    }
  });

  upButton.addEventListener("click", (e) => {
    // wrapper.scrollIntoView(true);
    wrapper.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  });

  topCar.addEventListener("click", (e) => {
    ourCarMenu.classList.add("tabletSlide");

    ourCarMenu.style.left = "0px";
    ourCarMenu.classList.remove("backTabSlide");

    leftSideMercSign.style.position = "relative";
    leftSideMercSign.style.left = "330px";

    rightSideSearch.style.position = "relative";
    rightSideSearch.style.left = "640px";
  });

  ourCarExits.addEventListener("click", (e) => {
    leftSideMercSign.style.left = "140px";
    rightSideSearch.style.left = "245px";
  });

  burgerMenu.addEventListener("click", (e) => {
    mobilePopUp.classList.add("tabletSlide");

    leftSideMercSign.style.position = "relative";
    leftSideMercSign.style.left = "330px";

    rightSideSearch.style.position = "relative";
    rightSideSearch.style.left = "640px";
  });

  exitCross.addEventListener("click", (e) => {
    mobilePopUp.classList.remove("tabletSlide");
    leftSideMercSign.style.left = "140px";
    rightSideSearch.style.left = "245px";
  });

  console.log(pageYOffset);
}
