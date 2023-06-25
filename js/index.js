"use strict";
const target = document.querySelector(".about-area");
const nav = document.querySelector(".navbar");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("fixed-top", "shadow-lg");
  else nav.classList.remove("fixed-top", "shadow-lg");
};
const options = {
  root: null,
  threshold: 0.5,
};
let observer = new IntersectionObserver(stickyNav, options);
observer.observe(target);
