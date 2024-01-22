//typed animation

var typed = new Typed("#typing", {
  strings: ["Web Developer", "Graphic Designer", "YouTuber", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// aside

const nav = document.querySelector(".nav");
const navlist = nav.querySelectorAll("li");
const totalNavlist = navlist.length;
const Section = document.querySelectorAll(".section");
const totalsection = Section.length;

for (let i = 0; i < totalNavlist; i++) {
  const a = navlist[i].querySelector("a");

  a.addEventListener("click", function () {
    removebacksection();

    for (let j = 0; j < totalNavlist; j++) {
      if (navlist[j].querySelector("a").classList.contains("active")) {
        addbacksection(j);
      }
      navlist[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionToggle();
    }
  });
}

function removebacksection() {
  for (let i = 0; i < totalsection; i++) {
    Section[i].classList.remove("back-section");
  }
}

function addbacksection(num) {
  Section[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalsection; i++) {
    Section[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavlist; i++) {
    navlist[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navlist.querySelector("a").getAttribute("href").split("#")) {
      navlist[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("clisck", function () {
  const sectionindex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removebacksection();
  addbacksection(sectionindex);
});

const navtogglebtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navtogglebtn.addEventListener("click", () => {
  asideSectionToggle();
});

function asideSectionToggle() {
  aside.classList.toggle("open");
  navtogglebtn.classList.toggle("open");
  for (let i = 0; i < totalNavlist; i++) {
    Section[i].classList.toggle("open");
  }
}
