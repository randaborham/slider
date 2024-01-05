"use strict";
const imgs = Array.from(document.querySelectorAll(".item img"));
// console.log(imgs);
const lightbox = document.querySelector(".light-box");
// console.log(lightbox);
const box = document.querySelector(".light-box .box");
// console.log(box);
const close = document.getElementById("close");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let currentindex = 0;
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    currentindex = imgs.indexOf(e.target);
    let currentSrc = e.target.src;
    // console.log(currentSrc);
    lightbox.classList.remove("d-none");
    box.style.backgroundImage = `url(${currentSrc})`;
  });
}
close.addEventListener("click", function () {
  closeitem();
});
function closeitem() {
  lightbox.classList.add("d-none");
}
next.addEventListener("click", function () {
  nextitem();
});
function nextitem() {
  currentindex++;
  if (currentindex == imgs.length) {
    currentindex = 0;
  }
  let currentsrc = imgs[currentindex].src;
  box.style.backgroundImage = `url(${currentsrc})`;
}
prev.addEventListener("click", function () {
  previtem();
});
function previtem() {
  currentindex--;
  if (currentindex < 0) {
    currentindex = imgs.length - 1;
  }
  let currentsrc = imgs[currentindex].src;
  box.style.backgroundImage = `url(${currentsrc})`;
}
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    nextitem();
  } else if (e.key == "ArrowLeft") {
    previtem();
  } else if (e.key == "Escape") {
    closeitem();
  }
});
