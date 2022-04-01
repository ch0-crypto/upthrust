// const navBar = document.querySelector(".navbar");

// const menuBtn = document.querySelector(".menu-btn");
// let menuOpen = false;
// menuBtn.addEventListener("click", () => {
//   if (!menuOpen) {
//     menuBtn.classList.add("open");
//     navBar.classList.add("navbar");

//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove("open");
//     menuOpen = false;
//   }
// });

const menu = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

// testimonial

const sliderElm = document.querySelector(".slider-container .slider");
const btnLeft = document.querySelector(".slider-container .btn-left");
const btnRight = document.querySelector(".slider-container .btn-right");

const numberSliderBoxs = sliderElm.children.length;
let idxCurrentSlide = 0;

// Functions:
function moveSlider() {
  let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
  sliderElm.style.marginLeft = -leftMargin + "px";
  console.log(sliderElm.clientWidth, leftMargin);
}
function moveLeft() {
  if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
  else idxCurrentSlide--;

  moveSlider();
}
function moveRight() {
  if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
  else idxCurrentSlide++;

  moveSlider();
}

// Event Listeners:
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("resize", moveSlider);

// business week

function myFunction() {
  let firstWeekBtn = document.getElementById("first-week");
  if (firstWeekBtn.style.display === "none") {
    firstWeekBtn.style.display = "block";
  } else {
    firstWeekBtn.style.display = "none";
  }
}
function secondFunction() {
  let secondWeekBtn = document.getElementById("second-week");
  if (secondWeekBtn.style.display === "none") {
    secondWeekBtn.style.display = "block";
  } else {
    secondWeekBtn.style.display = "none";
  }
}
