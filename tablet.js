document.addEventListener("scroll", (e) => {
  //   console.log(pageYOffset);
  //   Bullet 1 pageY = 300
  if (pageYOffset >= 300) {
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
  }

  //   Bullet 2 pageY = 650 / 700
  //   Bullet 3 pageY = 900 / 1000
  //   Bullet 4 pageY = 1700
  //   Bullet 5 pageY = 2300
});
