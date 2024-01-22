// toggle style witcher

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggle.addEventListener("click", () => {
  console.log("open applied");
  styleSwitcher.classList.toggle("open");
  // if (styleSwitcher.style.transform === "translateX(100%)") {
  //   styleSwitcherToggle.style.transform = "translateX(-100%)";
  // } else {
  //   styleSwitcherToggle.style.transform = "translateX(100%)";
  // }
});

// hide style switcher on scroll

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// theme colors

const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// day night switcher

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  const icon = dayNight.querySelector("i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon"); // Corrected the typo here
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
    dayNight.querySelector("i").classList.remove("fa-moon"); // Remove "fa-moon" if body has "dark" class
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
    dayNight.querySelector("i").classList.remove("fa-sun"); // Remove "fa-sun" if body doesn't have "dark" class
  }
});
